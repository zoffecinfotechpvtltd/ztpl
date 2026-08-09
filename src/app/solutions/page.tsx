import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Platform — Compliance, Productised",
  description:
    "ZTPL's product portfolio: Zoffec Aegis for SEBI CSCRF, Argus for network monitoring, and ExploitSense for continuous threat exposure management.",
  alternates: { canonical: "/solutions" },
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
                We don&apos;t just advise — we build. Zoffec Aegis leads the
                lineup for SEBI CSCRF; Argus watches your infrastructure;
                ExploitSense keeps your attack surface honest.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-px">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <SpotlightCard className="flex h-full flex-col">
                  <div className="flex items-center justify-between gap-2">
                    <span className="chip">{p.category}</span>
                    <span
                      className={
                        p.status === "live" ? "pill-live" : "chip text-yellow"
                      }
                    >
                      {p.status === "live" ? "Live" : "In development"}
                    </span>
                  </div>
                  <h2 className="heading mt-4 text-2xl">{p.name}</h2>
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

            {/* Roadmap placeholder — beyond the three named platforms above */}
            <Reveal delay={products.length * 0.08}>
              <div className="card flex h-full flex-col items-start justify-center border-dashed">
                <span className="rounded-md border border-line px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-ink-faint">
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
