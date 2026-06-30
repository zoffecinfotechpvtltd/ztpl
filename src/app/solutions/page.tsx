import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Platform — Compliance, Productised",
  description:
    "ZTPL's GRC platform, led by Zoffec Aegis — a multi-tenant platform for SEBI CSCRF. Built by practitioners for Regulated Entities and the MSSPs that serve them.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 bg-green-glow" aria-hidden />
        <div className="container-px relative py-20 sm:py-28">
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow">Platform</span>
              <h1 className="heading mt-5 text-4xl sm:text-5xl lg:text-6xl">
                Compliance, <span className="text-gradient">productised</span>
              </h1>
              <p className="mt-5 text-xl leading-relaxed text-ink-muted">
                We don&apos;t just advise — we build. Our platform turns dense
                regulatory frameworks into software your team can actually run,
                across every entity you manage. Aegis leads the lineup, with more
                on the roadmap.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-px">
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <SpotlightCard className="flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <h2 className="heading text-2xl">{p.name}</h2>
                    <span className="pill-live">Live</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-yellow">
                    {p.tagline}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
                    {p.short}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={`/solutions/${p.slug}`} className="btn-primary">
                      Explore {p.name.split(" ").pop()}
                    </Link>
                    {p.externalUrl && (
                      <a
                        href={p.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                      >
                        Launch Platform →
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}

            {/* Roadmap placeholder — communicates the multi-product vision */}
            <Reveal delay={products.length * 0.08}>
              <div className="card flex h-full flex-col items-start justify-center border-dashed">
                <span className="rounded-full border border-line px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink-faint">
                  On the roadmap
                </span>
                <h2 className="heading mt-3 text-2xl text-ink-muted">
                  More compliance products
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-faint">
                  We&apos;re extending the platform to new frameworks and
                  workflows. Want to influence what we build next?
                </p>
                <Link
                  href="/contact"
                  className="mt-6 text-sm font-semibold text-green"
                >
                  Tell us what you need →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
