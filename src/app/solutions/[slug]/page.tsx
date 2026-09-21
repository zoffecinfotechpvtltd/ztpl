import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { ProductMockup } from "@/components/ProductMockup";
import { DriftBlobs } from "@/components/ui/drift-blobs";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { platforms } from "@/lib/platforms";
import { getProduct } from "@/lib/site";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return platforms.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const platform = platforms.find((p) => p.slug === slug);
  if (!platform) return {};
  return {
    title: `${platform.name} — ${platform.subtitle}`,
    description: platform.description,
    alternates: { canonical: `/solutions/${platform.slug}` },
  };
}

/** Drop unfinished entries — site.ts still carries bracketed "[Add real …]" stubs for some products. */
const isReal = (s: string) => !s.trim().startsWith("[");

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const platform = platforms.find((p) => p.slug === slug);
  if (!platform) notFound();

  const extra = getProduct(slug);
  const a = platform.accent;
  const problems = extra?.problems ?? [];
  const modules = (extra?.modules ?? []).filter((m) => isReal(m.title));
  const deployment = extra?.deployment ?? [];
  const plans = extra?.plans ?? [];

  return (
    <div className="relative">
      <DriftBlobs />

      {/* Hero */}
      <section className="gradient-mesh-hero relative overflow-hidden pb-20 pt-32 lg:pt-40">
        <div className="grid-pattern pointer-events-none absolute inset-0" aria-hidden />
        <div className="container relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              <Badge variant="live">Live platform</Badge>
              <Badge variant={a.badge}>{platform.category}</Badge>
            </div>
            <h1 className={cn("mt-5 text-5xl font-bold leading-[1.05] md:text-7xl", a.gradientText)}>
              {platform.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-foreground">{platform.subtitle}</p>
            <p className="mt-5 text-base md:text-lg">{platform.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gradient" size="lg">
                <a href={platform.externalHref} target="_blank" rel="noopener noreferrer">
                  Launch Platform →
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Book a Demo</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ProductMockup platform={platform} />
          </Reveal>
        </div>
      </section>

      {problems.length > 0 && (
        <section className="section-y" aria-labelledby="problem">
          <div className="container">
            <SectionHeading
              eyebrow="The problem"
              title={<span id="problem">The framework breaks the tools you&apos;re using</span>}
              description="If your compliance program lives in spreadsheets and shared drives, you're carrying risk you can't see — and work you can't repeat across entities."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {problems.map((p, i) => (
                <Reveal key={p.title} delay={0.08 * i}>
                  <Card className="glass-card glow-border h-full border-foreground/10 bg-foreground/[0.03] p-8">
                    <span className="text-3xl font-bold text-brand-blue/50">0{i + 1}</span>
                    <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                    <p className="mt-3 text-sm">{p.body}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {modules.length > 0 && (
        <section className="section-y bg-surface/40" aria-labelledby="modules">
          <div className="container">
            <SectionHeading
              eyebrow={slug === "aegis" ? "Platform modules" : "Capabilities"}
              title={
                <span id="modules">
                  {slug === "aegis" ? "Everything the framework asks of you — in one workspace" : "What it does"}
                </span>
              }
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {modules.map((m, i) => (
                <Reveal key={m.title} delay={0.06 * (i % 4)}>
                  <Card className="glass-card glow-border h-full border-foreground/10 bg-foreground/[0.03] p-6">
                    <span
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold",
                        a.soft,
                        a.text,
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-base font-semibold">{m.title}</h3>
                    <p className="mt-2 text-sm">{m.body}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {deployment.length > 0 && (
        <section className="section-y" aria-labelledby="deployment">
          <div className="container">
            <SectionHeading
              eyebrow="Deployment"
              title={<span id="deployment">Your cloud or ours</span>}
              description="Runs the way your risk posture and regulator require — no compromise on control or speed."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {deployment.map((d, i) => (
                <Reveal key={d.name} delay={0.08 * i}>
                  <Card className="glass-card h-full border-foreground/10 bg-foreground/[0.03] p-8">
                    <h3 className="text-xl font-semibold">{d.name}</h3>
                    <p className="mt-3 text-sm">{d.body}</p>
                    <ul className="mt-5 space-y-2">
                      {d.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-success" aria-hidden />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {plans.length > 0 && (
        <section id="plans" className="section-y bg-surface/40" aria-labelledby="plans-title">
          <div className="container">
            <SectionHeading
              eyebrow="Plans"
              title={<span id="plans-title">Scales with your practice</span>}
              description="From a solo practitioner to an MSSP running dozens of clients. Talk to us for pricing tailored to your entity count and deployment."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {plans.map((plan, i) => (
                <Reveal key={plan.name} delay={0.05 * i}>
                  <Card
                    className={cn(
                      "glass-card h-full border-foreground/10 bg-foreground/[0.03] p-6",
                      plan.highlight && "border-brand-blue/60 ring-1 ring-brand-blue/30",
                    )}
                  >
                    {plan.highlight && (
                      <Badge className="mb-3 text-[10px] uppercase tracking-wide">Most popular</Badge>
                    )}
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    <p className="mt-2 text-sm">{plan.blurb}</p>
                    <Link href="/contact" className="mt-5 inline-block text-sm font-semibold text-brand-cyan">
                      Get a quote →
                    </Link>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="pt-24">
        <CTABanner
          heading={`See ${platform.name} on your own data`}
          body="Book a guided walkthrough against a scenario like yours."
          primary={{ label: "Book a Demo", href: "/contact" }}
          secondary={{ label: "Launch Platform", href: platform.externalHref }}
        />
      </div>
    </div>
  );
}
