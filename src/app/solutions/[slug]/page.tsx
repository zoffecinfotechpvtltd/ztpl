import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
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
        <div className="container-px relative py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow">{product.tagline}</span>
              <h1 className="heading mt-5 text-4xl sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-5 text-xl text-ink-muted">
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
            </div>

            {/* Illustrative product UI — swap for a real screenshot when ready */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 bg-green-glow" aria-hidden />
              <div className="relative rounded-2xl border border-line bg-bg p-4 shadow-2xl">
                <div className="flex items-center gap-1.5 pb-3">
                  <span className="h-3 w-3 rounded-full bg-alert/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow/70" />
                  <span className="h-3 w-3 rounded-full bg-green/70" />
                  <span className="ml-3 text-xs text-ink-faint">
                    {product.externalUrl?.replace(/^https?:\/\//, "") ??
                      "app.zt-pl.com"}
                  </span>
                </div>
                <div className="space-y-3 rounded-lg bg-bg-card p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-ink">
                      CSCRF Readiness
                    </span>
                    <span className="text-sm font-bold text-green">82%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-line">
                    <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-green to-yellow" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {[
                      ["Controls", "146"],
                      ["Evidence", "312"],
                      ["Open gaps", "27"],
                    ].map(([k, v]) => (
                      <div
                        key={k}
                        className="rounded-md border border-line bg-bg p-3"
                      >
                        <div className="text-lg font-bold text-ink">{v}</div>
                        <div className="text-[10px] uppercase tracking-wide text-ink-faint">
                          {k}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="pt-3 text-center text-[10px] text-ink-faint">
                  Illustrative UI — replace with a real product screenshot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <Section>
        <SectionHeading
          eyebrow="The problem"
          title="The framework breaks the tools you're using"
          intro="If your compliance program lives in spreadsheets and shared drives, you're carrying risk you can't see — and work you can't repeat."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {product.problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="card h-full">
                <h3 className="heading text-lg text-ink">{p.title}</h3>
                <p className="mt-3 text-sm text-ink-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Modules */}
      <section className="border-y border-line bg-bg-soft py-20 sm:py-28">
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="Modules"
              title="Everything the framework asks of you — in one workspace"
              intro="Tightly-integrated modules take you from gap assessment to a submission-ready audit pack."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {product.modules.map((m, i) => (
              <Reveal key={m.title} delay={(i % 4) * 0.06}>
                <div className="card h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-green/30 bg-green/10 text-green">
                    ▣
                  </div>
                  <h3 className="heading mt-4 text-base">{m.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{m.body}</p>
                </div>
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
              <div className="card h-full">
                <h3 className="heading text-xl">{d.name}</h3>
                <p className="mt-3 text-sm text-ink-muted">{d.body}</p>
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
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Plans */}
      <section id="plans" className="border-y border-line bg-bg-soft py-20 sm:py-28">
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="Plans"
              title="Scales with your practice"
              intro="Talk to us for pricing tailored to your entity count and deployment."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {product.plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.05}>
                <div
                  className={`card h-full ${
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
