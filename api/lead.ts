// Vercel Edge function — receives contact-form submissions from the site
// (same-origin, so the browser gets real HTTP status codes) and forwards them
// to the Google Apps Script webhook with a server-only shared secret.
//
// SHEETS_WEBHOOK_URL and WEBHOOK_SECRET are Vercel env vars and are never
// bundled into the client. Do NOT prefix them with VITE_.

export const config = { runtime: 'edge' };

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

// Best-effort rate limit: holds only within a single warm instance. Swap for
// Vercel KV / Upstash if you need it to survive across instances.
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

const str = (v: unknown, max: number): string => String(v ?? '').trim().slice(0, max);

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') return json({ ok: false, error: 'method not allowed' }, 405);

  const webhookUrl = process.env.SHEETS_WEBHOOK_URL;
  const secret = process.env.WEBHOOK_SECRET;
  if (!webhookUrl || !secret) return json({ ok: false, error: 'not configured' }, 503);

  let data: Record<string, unknown>;
  try {
    data = ((await req.json()) ?? {}) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: 'bad json' }, 400);
  }

  // Honeypot — bots fill hidden fields. Report success, write nothing.
  if (str(data._honey, 1)) return json({ ok: true }, 200);

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';
  if (rateLimited(ip)) return json({ ok: false, error: 'rate limited' }, 429);

  const email = str(data.email, 160);
  if (!EMAIL_RE.test(email)) return json({ ok: false, error: 'invalid email' }, 422);

  // Whitelist and length-cap every field. Never forward the raw request body.
  const payload = {
    token: secret,
    type: str(data.type, 40) || 'enquiry',
    enquiryBy: str(data.enquiryBy, 40),
    name: str(data.name, 120),
    email,
    phone: str(data.phone, 40),
    country: str(data.country, 60),
    intake: str(data.intake, 60),
    level: str(data.level, 60),
    services: str(data.services, 300),
    subject: str(data.subject, 120),
    message: str(data.message, 4000),
    submittedAt: new Date().toISOString(),
  };

  try {
    const upstream = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const text = await upstream.text();
    let upstreamOk = upstream.ok;
    try {
      upstreamOk = upstreamOk && JSON.parse(text)?.ok === true;
    } catch {
      // Non-JSON response = misconfigured deployment (e.g. Google login page).
      upstreamOk = false;
    }
    if (!upstreamOk) return json({ ok: false, error: 'upstream error' }, 502);
  } catch {
    return json({ ok: false, error: 'upstream unreachable' }, 502);
  }

  return json({ ok: true }, 200);
}
