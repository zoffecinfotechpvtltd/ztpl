import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { ProductGlyph } from "@/components/ProductGlyph";
import { accentClasses } from "@/lib/accent";
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
                Zoffec Aegis leads the lineup for SEBI CSCRF; Argus watches
                your infrastructure; ExploitSense keeps your attack surface
                honest.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-px space-y-6">
          {products.map((p, i) => {
            const a = accentClasses[p.accent];
            return (
              <Reveal key={p.slug} delay={i * 0.06}>
                <div className={`card overflow-hidden transition-all duration-500 ease-smooth hover:-translate-y-0.5 hover:bg-bg-card ${a.cardHoverBorder} ${a.glowShadow}`}>
                  <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div>
                      <div className="flex items-center gap-3">
                        {p.icon ? (
                          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white p-1.5">
                            <Image src={p.icon} alt="" width={40} height={40} className="h-full w-full object-contain" />
                          </div>
                        ) : (
                          <ProductGlyph slug={p.slug} accent={p.accent} className="h-9 w-9" />
                        )}
                        <span className={p.status === "live" ? "pill-live" : "chip text-yellow"}>
                          {p.status === "live" ? "Live" : "In development"}
                        </span>
                      </div>
                      <span className={`chip mt-3 inline-flex ${a.text}`}>{p.category}</span>
                      <h2 className="heading mt-4 text-2xl">{p.name}</h2>
                      <p className={`mt-1 text-sm font-medium ${a.text}`}>{p.tagline}</p>
                      <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                        {p.short}
                      </p>

                      {p.modules && p.modules.length > 0 && (
                        <ul className="mt-5 space-y-2">
                          {p.modules.slice(0, 3).map((m) => (
                            <li key={m.title} className="flex items-start gap-2 text-sm text-ink-muted">
                              <span className={`mt-0.5 ${a.text}`}>✓</span>
                              {m.title}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-6 flex flex-wrap gap-3">
                        <Link href={`/solutions/${p.slug}`} className="btn-primary">
                          {p.linkLabel}
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
                    </div>

                    <div
                      className={`flex aspect-video flex-col items-center justify-center gap-2 rounded-xl border border-dashed ${a.chipBorder} bg-bg/60 text-center`}
                    >
                      <ProductGlyph slug={p.slug} accent={p.accent} className="h-8 w-8 opacity-60" />
                      <p className="max-w-[220px] text-xs text-ink-faint">
                        {p.name} product screenshot — placeholder pending a real capture
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}

          {/* Roadmap placeholder — beyond the three named platforms above */}
          <Reveal delay={products.length * 0.06}>
            <div className="card flex flex-col items-start justify-center border-dashed py-10">
              <span className="rounded-md border border-line px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-ink-faint">
                On the roadmap
              </span>
              <h2 className="heading mt-3 text-2xl text-ink-muted">
                More compliance products
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-faint">
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
      </section>

      <CTA />
    </>
  );
}
