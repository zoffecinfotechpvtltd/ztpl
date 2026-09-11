import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { ReadinessPanel } from "@/components/ReadinessPanel";
import { ProductGlyph } from "@/components/ProductGlyph";
import { CTA } from "@/components/CTA";
import { accentClasses } from "@/lib/accent";
import { products, getProduct } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.tagline}`,
    description: product.description,
    alternates: { canonical: `/solutions/${product.slug}` },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const a = accentClasses[product.accent];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 bg-green-glow" aria-hidden />
        <div className="container-px relative py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal direction="right">
              {product.icon ? (
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white p-2">
                  <Image src={product.icon} alt="" width={56} height={56} className="h-full w-full object-contain" />
                </div>
              ) : (
                <ProductGlyph slug={product.slug} accent={product.accent} className="h-12 w-12" />
              )}
              <span className={`mt-4 ${product.status === "live" ? "pill-live" : "chip text-yellow"} inline-flex`}>
                <span className={`h-1.5 w-1.5 rounded-full ${a.dot} animate-pulse-glow`} />
                {product.status === "live" ? "Live platform" : "In development"}
              </span>
              <h1 className="heading mt-5 text-4xl sm:text-5xl lg:text-6xl">
                {product.name}
              </h1>
              <p className="mt-3 text-base font-medium text-yellow">
                {product.tagline}
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                {product.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {product.externalUrl && (
                  <a
                    href={product.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Launch Platform →
                  </a>
                )}
                <Link href="/contact" className="btn-ghost">
                  {product.status === "live" ? "Book a Demo" : "Get early access"}
                </Link>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <div className="relative">
                <div className="pointer-events-none absolute -inset-6 bg-green-glow" aria-hidden />
                {product.slug === "aegis" ? (
                  <ReadinessPanel
                    url={
                      product.externalUrl?.replace(/^https?:\/\//, "") ??
                      "ztplsolutions.com"
                    }
                  />
                ) : (
                  <div className="border-grad shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
                    <div className="flex h-64 flex-col items-center justify-center gap-2 rounded-[15px] bg-bg/95 text-center">
                      <span className="chip">{product.category}</span>
                      <p className="mt-2 max-w-[220px] text-sm text-ink-faint">
                        Product preview coming soon
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problem */}
      {product.problems && product.problems.length > 0 && (
        <Section>
          <SectionHeading
            eyebrow="The problem"
            title="The framework breaks the tools you're using"
            intro="If your compliance program lives in spreadsheets and shared drives, you're carrying risk you can't see — and work you can't repeat across entities."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {product.problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <SpotlightCard className="h-full">
                  <span className="font-display text-2xl font-bold text-line">
                    0{i + 1}
                  </span>
                  <h3 className="heading mt-3 text-lg text-ink">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {p.body}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Modules */}
      {product.modules && product.modules.length > 0 && (
        <section className="relative border-y border-line bg-bg-soft/40 py-20 sm:py-28">
          <div className="container-px">
            <Reveal>
              <SectionHeading
                eyebrow={product.slug === "aegis" ? "Platform modules" : "Capabilities"}
                title={
                  product.slug === "aegis"
                    ? "Everything the framework asks of you — in one workspace"
                    : "What it does"
                }
              />
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {product.modules.map((m, i) => (
                <Reveal key={m.title} delay={(i % 4) * 0.06}>
                  <SpotlightCard className="h-full">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${a.chipBorder} ${a.chipBg} font-display text-sm font-bold ${a.text}`}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="heading mt-4 text-base">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {m.body}
                    </p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Deployment */}
      {product.deployment && product.deployment.length > 0 && (
        <Section>
          <SectionHeading
            eyebrow="Deployment"
            title="Your cloud or ours"
            intro="Runs the way your risk posture and regulator require — no compromise on control or speed."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {product.deployment.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.08}>
                <SpotlightCard className="h-full">
                  <h3 className="heading text-xl">{d.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {d.body}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {d.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-center gap-2 text-sm text-ink-muted"
                      >
                        <span className="text-green">✓</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Plans */}
      {product.plans && product.plans.length > 0 && (
        <section id="plans" className="relative border-y border-line bg-bg-soft/40 py-20 sm:py-28">
          <div className="container-px">
            <Reveal>
              <SectionHeading
                eyebrow="Plans"
                title="Scales with your practice"
                intro="From a solo practitioner to an MSSP running dozens of clients. Talk to us for pricing tailored to your entity count and deployment."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {product.plans.map((plan, i) => (
                <Reveal key={plan.name} delay={i * 0.05}>
                  <div
                    className={`card card-hover h-full ${
                      plan.highlight
                        ? "border-green/60 bg-bg-card ring-1 ring-green/30"
                        : ""
                    }`}
                  >
                    {plan.highlight && (
                      <span className="mb-3 inline-block rounded-full bg-green/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-green">
                        Most popular
                      </span>
                    )}
                    <h3 className="heading text-lg">{plan.name}</h3>
                    <p className="mt-2 text-sm text-ink-muted">{plan.blurb}</p>
                    <Link
                      href="/contact"
                      className="mt-5 inline-block text-sm font-semibold text-green"
                    >
                      Get a quote →
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA
        title={
          product.status === "live"
            ? `See ${product.name} on your own data`
            : `Want early access to ${product.name}?`
        }
        body={
          product.status === "live"
            ? "Book a guided walkthrough against a scenario like yours."
            : "Tell us your use case and we'll bring you in as it's ready."
        }
        primaryLabel={product.status === "live" ? "Book a Demo" : "Get in touch"}
        secondaryLabel={product.externalUrl ? "Launch Platform" : ""}
        secondaryHref={product.externalUrl ?? "/contact"}
      />
    </>
  );
}
