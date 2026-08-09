# ZTPL Website — Zoffec Technologies Private Limited

The official company website for **ZTPL** — _Compliance Simplified._
A dark, premium, enterprise-trustworthy marketing site that leads with the
flagship product **Zoffec Aegis** (India's SEBI CSCRF compliance platform) and
ZTPL's GRC advisory services.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

---

## Locked decisions

| Decision | Value |
|---|---|
| Legal name | Zoffec Technologies Private Limited |
| Brand | Variant A — yellow + green (red = alert accent only) |
| Palette | BG `#0B0F17` · Green `#21C063` · Yellow `#FFD60A` · Alert `#E5484D` |
| Type | Space Grotesk (headings) + Inter (body) |
| Stack | Next.js + TS + Tailwind + Framer Motion → Vercel |
| Sitemap | Home · Solutions (hub) · Solutions/[product] · Services · About · Contact · Privacy · Terms |
| Services | SEBI CSCRF Advisory · GRC Consulting · VAPT · vCISO · TPRA · Audit Support |
| Products | Data-driven via `products[]` in `src/lib/site.ts` — add an object, get a full page |
| Aegis app | https://aegis.ztplsolutions.com (external "Launch Platform") |
| Contact | support@ztplsolutions.com · Mumbai, India (phone is a placeholder) |

---

## Project structure

```
ztpl/
├─ public/                 # image slots (see public/README.md)
│  └─ logo-placeholder.svg
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx        # root layout, fonts, SEO metadata, JSON-LD
│  │  ├─ page.tsx          # Home
│  │  ├─ globals.css       # Tailwind + design tokens (btn/card/eyebrow…)
│  │  ├─ icon.svg          # favicon
│  │  ├─ sitemap.ts        # /sitemap.xml
│  │  ├─ robots.ts         # /robots.txt
│  │  ├─ not-found.tsx     # 404
│  │  ├─ solutions/        # Aegis product page (the money page)
│  │  ├─ services/         # 6 services
│  │  ├─ about/            # story, mission, values
│  │  ├─ contact/          # contact + demo form
│  │  ├─ privacy/          # placeholder legal
│  │  └─ terms/            # placeholder legal
│  ├─ components/
│  │  ├─ Header.tsx        # sticky nav + Book a Demo + mobile menu
│  │  ├─ Footer.tsx        # sitemap, contact, reg line
│  │  ├─ Logo.tsx          # CSS chevron mark (swap for real asset)
│  │  ├─ Hero / Section / CTA / Reveal / ContactForm / Prose
│  └─ lib/
│     └─ site.ts           # single source of truth for all content
└─ tailwind.config.ts      # brand tokens
```

All marketing copy and content live in **`src/lib/site.ts`** — edit there to
update services, modules, plans, and company facts site-wide.

---

## Run locally

Requires **Node.js 18.17+**.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

---

## Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Go to <https://vercel.com/new> and **import the repository**.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. (Optional) Add your domain under **Project → Settings → Domains** and update
   `site.url` in `src/lib/site.ts` to the production URL so SEO/canonical/OG and
   `sitemap.xml` resolve correctly.

CLI alternative:

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

---

## Before launch — checklist

- [ ] Confirm legal name on incorporation docs and set CIN in `src/lib/site.ts`.
- [ ] Replace placeholders in `site.ts`: `phone`, `address`, `cin`, `socials`, `url`.
- [ ] Add real logo + OG image + Aegis screenshots (see `public/README.md`).
- [ ] Wire the contact form to a backend (API route, Resend, or Formspree) —
      see the TODO in `src/components/ContactForm.tsx`.
- [ ] Replace placeholder Privacy & Terms with reviewed legal copy.
- [ ] Add founders/team content on the About page.
