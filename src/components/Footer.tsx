import Link from "next/link";
import { Logo } from "./Logo";
import { site, nav } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-bg-soft/60">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand-gradient opacity-50" />
      <div className="container-px py-16">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-muted">
              {site.legalName}. We build the GRC platform — Zoffec Aegis — and
              deliver the advisory that gets SEBI-regulated entities and MSSPs
              audit-ready.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/" className="link-muted">
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-muted">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="link-muted">
                  {site.email}
                </a>
              </li>
              <li className="text-ink-muted">{site.phone}</li>
              <li className="text-ink-muted">{site.location}</li>
              <li className="flex gap-4 pt-1">
                <a
                  href={site.socials.linkedin}
                  className="link-muted"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href={site.socials.x}
                  className="link-muted"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="link-muted">
              Privacy Policy
            </Link>
            <Link href="/terms" className="link-muted">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
