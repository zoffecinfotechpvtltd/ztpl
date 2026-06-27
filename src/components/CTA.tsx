import Link from "next/link";
import { Reveal } from "./Reveal";

export function CTA({
  title = "Ready for audit-ready compliance?",
  body = "Book a walkthrough of Zoffec Aegis, or talk to our GRC team about your SEBI CSCRF obligations. We'll meet you where you are.",
  primaryLabel = "Book a Demo",
  primaryHref = "/contact",
  secondaryLabel = "Explore Aegis",
  secondaryHref = "/solutions",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-bg-card px-6 py-14 text-center sm:px-12">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-green-glow"
              aria-hidden
            />
            <div className="relative">
              <h2 className="heading mx-auto max-w-2xl text-3xl sm:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-ink-muted">
                {body}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href={primaryHref} className="btn-primary">
                  {primaryLabel}
                </Link>
                {secondaryLabel && (
                  <Link href={secondaryHref} className="btn-ghost">
                    {secondaryLabel} →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
