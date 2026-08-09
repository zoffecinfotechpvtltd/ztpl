import Link from "next/link";
import { Reveal } from "./Reveal";

export function CTA({
  title = "See what we build",
  body = "Book a walkthrough of Aegis, Argus, or ExploitSense — we'll show you the platform, not a slide deck.",
  primaryLabel = "Book a Demo",
  primaryHref = "/contact",
  secondaryLabel = "Explore Our Platforms",
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
          <div className="border-grad overflow-hidden shadow-[0_40px_120px_-50px_rgba(0,210,106,0.5)]">
            <div className="relative overflow-hidden rounded-[15px] bg-bg-card px-6 py-16 text-center sm:px-12">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-green-glow"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-yellow/10 blur-3xl"
                aria-hidden
              />
              <div className="relative">
                <h2 className="heading mx-auto max-w-2xl text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
                  {title}
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
                  {body}
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
