import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { ReadinessPanel } from "@/components/ReadinessPanel";
import { CTA } from "@/components/CTA";
import { products, getProduct } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.tagline}`,
    description: product.description,
  };
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 bg-green-glow" aria-hidden />
        <div className="container-px relative py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal direction="right">
              <span className="pill-live">
                <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse-glow" />
                Live platform
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
                  Book a Demo
                </Link>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <div className="relative">
                <div className="pointer-events-none absolute -inset-6 bg-green-glow" aria-hidden />
                <ReadinessPanel
                  url={
                    product.externalUrl?.replace(/^https?:\/\//, "") ??
                    "app.zt-pl.com"
                  }
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problem */}
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

      {/* Modules */}
      <section className="relative border-y border-line bg-bg-soft/40 py-20 sm:py-28">
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="Platform modules"
              title="Everything the framework asks of you — in one workspace"
              intro="Tightly-integrated modules take you from gap assessment to a submission-ready audit pack, for every entity you manage."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {product.modules.map((m, i) => (
              <Reveal key={m.title} delay={(i % 4) * 0.06}>
                <SpotlightCard className="h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-green/30 bg-green/10 font-display text-sm font-bold text-green">
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

      {/* Deployment */}
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

      {/* Plans */}
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

      <CTA
        title={`See ${product.name} on your own data`}
        body="Book a guided demo and we'll walk through readiness, evidence, and audit-ready reporting against a scenario like yours."
        primaryLabel="Book a Demo"
        secondaryLabel="Launch Platform"
        secondaryHref={product.externalUrl ?? "/contact"}
      />
    </>
  );
}
