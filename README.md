# ZTPL Website — Zoffec Technologies Private Limited

Marketing site for **ZTPL** — _Compliance Simplified._ It presents the company's
platforms: **Zoffec Aegis** (SEBI CSCRF, live), **Argus** (network monitoring) and
**ExploitSense** (threat exposure management), the last two in development.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS v3 · shadcn/ui (Radix) ·
Framer Motion · Lucide · react-countup · react-hook-form + zod · nodemailer.

## Where things live

| What | Where |
|---|---|
| Design tokens, gradient utilities | `src/app/globals.css`, `tailwind.config.ts` |
| Every token / variant on one page | `/style-guide` (not indexed) |
| shadcn-style primitives | `src/components/ui/` |
| Homepage sections | `src/components/home/` |
| Platform data (copy, accents, **live vs coming soon**) | `src/lib/platforms.ts` |
| Company facts, nav, services, plan/module content | `src/lib/site.ts` |
| Contact form + email API | `src/components/ContactForm.tsx`, `src/app/api/contact/route.ts` |

### Changing a platform's status
In `src/lib/platforms.ts` set `status: "live"` and add `externalHref` when a platform
goes live. The badge, launch button and CTAs switch automatically. While it is
`"coming-soon"`, every "Launch Platform" link becomes a "Get early access" link to
`/contact?interest=<slug>`, which pre-fills the message.

## Run locally

Node 20+.

```bash
npm install
npm run dev            # http://localhost:3000  (use `npx next dev -p 3100` if 3000 is taken)
npm run build && npm start
npm run lint
PORT=3100 npx playwright test   # smoke + axe accessibility suite; PORT must match the running server
```

Without SMTP credentials the contact form logs the submission and reports success **in development only**.
In production it returns a 503 telling the visitor to email support directly, so a lost enquiry is never silent.

## Contact-form email (Google Workspace)

Submissions are emailed to `support@ztplsolutions.com` over SMTP.

1. In the Google account for the sending mailbox, turn on 2-Step Verification, then create an **App password**
   (Google Account → Security → 2-Step Verification → App passwords).
2. On the server, create `.env` from `.env.example` and fill in `SMTP_USER` and `SMTP_PASS`. Never commit it.
3. Start the container with it: `docker run --env-file .env ...`

The API rate-limits to 5 messages per IP per 10 minutes and includes a honeypot field for bots.

## Deploy (Docker behind nginx)

The `Dockerfile` builds a lean standalone image (Node 22, non-root, healthcheck on `/`, listens on 3000).

```bash
git pull
docker build -t ztpl-landing .
docker rm -f ztpl-landing
docker run -d --name ztpl-landing --restart unless-stopped \
  --env-file .env -p 127.0.0.1:58081:3000 ztpl-landing
docker inspect --format='{{.State.Health.Status}}' ztpl-landing   # -> healthy
```

nginx proxies `ztplsolutions.com` / `www` to `127.0.0.1:58081` (certbot manages TLS).

## Still to supply

- [ ] Real LinkedIn URL (`site.socials.linkedin` is a guess).
- [ ] Real product screenshots to replace the illustrative mockups (`src/components/ProductMockup.tsx`).
- [ ] Company registration details (`cin`, `founded` in `site.ts`) if you want them in the page schema.
- [ ] Legal review of `/privacy` and `/terms` before relying on them.
