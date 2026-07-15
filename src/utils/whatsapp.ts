/**
 * Returns the wa.me deep-link URL.
 *
 * On mobile  → opens the WhatsApp app directly (if installed) or prompts install.
 * On desktop → opens WhatsApp Web (web.whatsapp.com) in the browser.
 *
 * Configure via .env.local:
 *   VITE_WHATSAPP_NUMBER  — international format, no + or spaces (e.g. 919876543210)
 *   VITE_WHATSAPP_MESSAGE — pre-filled message text (plain string, we encode it here)
 *
 * @param overrideMessage Optional per-call message that takes precedence over the env default.
 */
export function whatsappUrl(overrideMessage?: string): string {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER ?? '919988838388';
  const message =
    overrideMessage ??
    import.meta.env.VITE_WHATSAPP_MESSAGE ??
    "Hi! I'm interested in learning more about studying abroad with Erudov Global.";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
