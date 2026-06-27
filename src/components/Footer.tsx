import Link from "next/link";
import { Logo } from "./Logo";
import { site, nav } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-soft">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm text-ink-muted">
              {site.legalName}. We build compliance technology and deliver the
              GRC advisory that gets SEBI-regulated entities audit-ready.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Site
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
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
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
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

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
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
