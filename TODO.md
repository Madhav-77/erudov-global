# Erudov Global — Development TODO

## Missing Assets (Phase 1 - manual work needed)

| File | Location | Size | Format | Purpose |
|---|---|---|---|---|
| `og-image.png` | `/public/assets/og-image.png` | 1200 × 630 px | PNG, <300KB | WhatsApp / Instagram / Facebook link preview card |
| `favicon-32x32.png` | `/public/assets/favicon-32x32.png` | 32 × 32 px | PNG | Browser tab icon (desktop) |
| `favicon-16x16.png` | `/public/assets/favicon-16x16.png` | 16 × 16 px | PNG | Browser tab icon (small/older browsers) |
| `apple-touch-icon.png` | `/public/assets/apple-touch-icon.png` | 180 × 180 px | PNG | iPhone "Add to Home Screen" icon |

**Tips:**
- Use [favicon.io](https://favicon.io/favicon-converter/) to generate favicon-32x32, favicon-16x16, and apple-touch-icon from your logo in one shot
- Design og-image.png in Canva (search "Open Graph image" template — already 1200×630)
- og-image should have: Erudov logo + tagline on navy background (#1a2744), gold accent (#C8A84B)

After uploading to Vercel, verify og tags at: https://developers.facebook.com/tools/debug

---

## Phase 2 — Blocks Advertising (next up)

- [x] Create `/privacy-policy` page — placeholder ("page being updated"), routes exist and are linked in footer
- [x] Create `/terms-of-service` page — placeholder
- [x] Create `/cookie-policy` page — placeholder
- [ ] **Option 2 upgrade (before serious ad spend):** Replace placeholder legal pages with real legal copy.
  - Privacy Policy must explicitly mention: data collected (name, email, phone), purpose, Meta Pixel (once installed), cookies used, user rights, contact email
  - Terms of Service: service scope, disclaimers, liability limits, governing law (India)
  - Cookie Policy: list cookie types used (essential, analytics, marketing), how to withdraw consent
  - Recommended: use a lawyer-reviewed template from [iubenda.com](https://www.iubenda.com) or similar — generates GDPR + India PDPB compliant copy
  - All three pages must have `lastUpdated` date visible on the page
- [x] Update contact form:
  - Added fields: Intended intake, Level of study (alongside existing Name, Email, Phone, Country, Services)
  - Added honeypot field (_honey) — hidden from users, bots fill it, submission rejected if non-empty
  - Added consent checkbox (unchecked by default), submit button disabled until checked
  - Privacy Policy link adjacent to submit control
  - **Never collect:** passport number, bank details, income, govt ID, health info ✓
  - Rate limiting — skipped intentionally (no backend planned); spam handled by honeypot field instead
- [x] Cookie consent banner (CookieBanner.tsx):
  - Bottom-left card on desktop, full-width on mobile — non-intrusive, does not block content
  - "Accept All" / "Essential Only" options
  - Non-essential cookies off by default
  - Consent persisted in localStorage (key: erudov_cookie_consent)
  - Dispatches `cookieConsent` CustomEvent — analytics/Pixel listens to this before initialising
  - Cookie Policy link inside the banner

---

## Phase 3 — Core Engineering

- [x] Prerendering — `vite-react-ssg@0.8.9` installed, build script updated to `vite-react-ssg build`
  - 23 static HTML files generated at build time (all routes prerendered)
  - `data-server-rendered="true"` confirmed in output HTML
  - Acceptance test passes: `grep "south korea" dist/index.html` returns content
- [x] React Router v6 — CustomEvent navigation replaced with `useNavigate` + `<Link>` across all files
  - Routes: `/`, `/about`, `/blog`, `/destinations/:regionCode`, `/services/:serviceId`
  - `/privacy-policy`, `/terms-of-service`, `/cookie-policy`, `*` (404)
  - `RegionDetail` and `ServiceDetail` now use `useParams()` instead of props
  - `Layout.tsx` owns modal state and scroll-to-top on route change
- [x] `robots.txt` — added to `/public/`, allows all major crawlers
- [x] `sitemap.xml` — added to `/public/`, lists all 23 routes
- [x] 404 page — `NotFoundPage.tsx` created, wired to `path: '*'`
- [x] `vercel.json` — created with security headers (HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy)
- [ ] Canonical domain — confirm erudov.com → www.erudov.com is a 301 (not 302)
  - Go to **Vercel → Project → Settings → Domains**
  - You should see both `erudov.com` and `www.erudov.com` listed
  - One should show "Redirects to" the other — confirm it says 301, not 302
  - If it's a 302, click the domain → Edit → change redirect type to 301 Permanent

---

## Phase 4 — Quality

- [ ] Fonts: convert OpenSans.ttf to WOFF2 (30% smaller), keep TTF as fallback
  - Use https://cloudconvert.com/ttf-to-woff2 or `npx ttf2woff2` (requires Node native build)
  - After converting, update `index.html` font-face: add `url('/assets/OpenSans.woff2') format('woff2')` before the TTF fallback
- [ ] Images: Pexels CDN already serves compressed JPEG. For full WebP support:
  - Replace `<img>` with `<picture>` + `<source type="image/webp">` pointing to WebP versions
  - Or self-host images and convert via `cwebp` / Squoosh
  - Hero image has `fetchPriority="high"` (LCP optimisation) ✅
  - Service card images have `loading="lazy"` and explicit `width`/`height` ✅
- [ ] Performance targets (mid-range Android, 4G): LCP < 2.5s, CLS < 0.1, INP < 200ms
  - Run Lighthouse in Chrome DevTools after deploying to verify
  - Main CLS risk: font loading — WOFF2 conversion above will help
- [x] Security headers in `vercel.json`: HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, CSP (permissive) ✅
  - [ ] Tighten CSP after Meta Pixel is added (Phase 5) — add `https://connect.facebook.net` to connect-src
- [x] Accessibility:
  - Descriptive alt text on all images ✅
  - Single `<h1>` per page ✅ (each page has exactly one)
  - Keyboard focus states — gold outline via `:focus-visible` in `index.css` ✅
  - Form labels `htmlFor` wired to all inputs in ContactModal ✅
  - [ ] Colour contrast — verify brand-gray (#6B7280) on white meets 4.5:1 (currently borderline; may need darkening)
- [x] Structured data: JSON-LD `Organization` schema on homepage ✅
- [x] `lastReviewed` field on all 11 destination pages (set to 2025-07-01, update when content changes) ✅
  - Visible as "Last reviewed: July 2025" in destination hero
  - Emitted as `dateModified` in per-page WebPage schema
- [x] react-helmet-async — per-route `<title>`, `<meta description>`, `og:title`, `og:description`, `og:url`, `canonical` on all pages ✅
  - Available because vite-react-ssg ships HelmetProvider — tags appear in prerendered HTML

---

## Phase 5 — On Ad Launch Only

- [ ] Meta Pixel — install only after privacy policy is live and discloses it
  - Base Pixel + PageView event
  - Lead event on successful form submission
  - Consent-gated (fires only after cookie consent)
  - Verify with Meta Pixel Helper browser extension
- [ ] Meta domain verification — add verification tag or DNS TXT record in Meta Business Manager

---

## Sign-off Checklist

- [ ] Every route returns complete HTML with JavaScript disabled
- [ ] `curl` on each route returns actual page content (not empty div)
- [ ] Facebook Sharing Debugger returns valid preview card for each route
- [ ] WhatsApp preview renders correctly on physical device
- [ ] Unknown routes return HTTP 404
- [ ] `/privacy-policy`, `/terms-of-service`, `/cookie-policy` all resolve
- [ ] No `href="#"` anywhere in production
- [ ] `robots.txt` and `sitemap.xml` present and correct
- [ ] Core Web Vitals targets met on mid-range Android over 4G
- [ ] No console errors on any route
