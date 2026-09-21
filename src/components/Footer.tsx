import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

const explore = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Platform", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

// lucide-react no longer ships brand marks, so this one is inline.
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const socials = [{ label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon }];

const colTitle = "text-xs font-bold uppercase tracking-[0.22em] text-brand-amber";
const link = "font-medium text-foreground/85 transition-colors duration-300 hover:text-brand-green";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-green/40 to-transparent" />

      <div className="container relative pb-12 pt-24 lg:pt-32">
        <div className="grid gap-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.32em]">
              <span className="text-brand-amber">Compliance</span> <span className="text-brand-green">Simplified</span>
            </p>
            <p className="mt-7 max-w-sm text-base font-medium leading-relaxed text-foreground/80">
              A technology company for India&apos;s regulated businesses. We build Zoffec Aegis, Argus, and
              ExploitSense.
            </p>
            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-brand-green transition-colors hover:text-foreground"
            >
              Book a demo
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div>
            <h2 className={colTitle}>Explore</h2>
            <ul className="mt-6 space-y-4 text-[15px]">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={colTitle}>Contact</h2>
            <ul className="mt-6 space-y-4 text-[15px]">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-green" aria-hidden />
                <a href={`mailto:${site.email}`} className={`${link} break-all`}>
                  {site.email}
                </a>
              </li>
              {[site.phone, site.phoneAlt].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-green" aria-hidden />
                  <a href={`tel:${p.replace(/\s/g, "")}`} className={link}>
                    {p}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3 font-medium text-foreground/85">
                <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-green" aria-hidden />
                {site.location}
              </li>
            </ul>
            <div className="mt-8 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 bg-foreground/[0.05] text-foreground transition-all duration-500 hover:border-brand-green/60 hover:bg-brand-green hover:text-primary-foreground"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-foreground/15 pt-8 text-center md:flex-row md:text-left">
          <div className="space-y-1.5">
            <p className="text-sm font-medium text-foreground/75">© 2026 {site.legalName}. All rights reserved.</p>
            <p className="font-mono text-xs text-foreground/60">
              CIN {site.cin} · GSTIN {site.gstin}
            </p>
          </div>
          <div className="flex gap-7 text-sm">
            <Link href="/privacy" className={link}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={link}>
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Oversized wordmark, cropped by the bottom edge of the page. Scales to the container width. */}
      <div aria-hidden className="pointer-events-none select-none">
        <div className="container">
          <svg viewBox="0 0 1000 150" className="block w-full" role="presentation">
            <defs>
              <linearGradient id="zt-fade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.11" />
                <stop offset="100%" stopColor="#00D26A" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <text
              x="0"
              y="296"
              textLength="1000"
              lengthAdjust="spacingAndGlyphs"
              fill="url(#zt-fade)"
              style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontWeight: 900, fontSize: 410 }}
            >
              ZTPL
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}
