import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { ProductMockup } from "@/components/ProductMockup";
import { LaunchButton, StatusBadge } from "@/components/PlatformStatus";
import { PlatformWordmark } from "@/components/PlatformLogo";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { platforms } from "@/lib/platforms";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Aegis for SEBI CSCRF, Argus for network monitoring, and ExploitSense for continuous threat exposure management - three platforms from ZTPL.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="Compliance, productised"
        body="Aegis leads the lineup for SEBI CSCRF; Argus watches your infrastructure; ExploitSense keeps your attack surface honest."
      />

      {platforms.map((p, i) => {
        const flip = i % 2 === 1; // Argus: image-left, zig-zag down the page
        const features = p.slug === "aegis" ? p.features.slice(0, 3) : [];
        return (
          <Section key={p.slug} tone={i % 2 === 0 ? "ink" : "slate"} seed={`sol-${p.slug}`} aria-labelledby={`${p.slug}-title`}>
            <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
              <Reveal className={cn(flip && "lg:order-2")}>
                <div className="flex flex-wrap gap-2">
                  <StatusBadge platform={p} />
                  <Badge variant={p.accent.badge}>{p.category}</Badge>
                </div>
                {p.wordmark ? (

                  <>

                    <PlatformWordmark platform={p} className="mt-5" />

                    <h2 id={`${p.slug}-title`} className="sr-only">

                      {p.name}

                    </h2>

                  </>

                ) : (

                  <h2 id={`${p.slug}-title`} className={cn("mt-5 text-4xl font-bold md:text-6xl", p.accent.gradientText)}>

                    {p.name}

                  </h2>

                )}
                <p className="mt-3 text-xl font-medium text-foreground">{p.subtitle}</p>
                <p className="mt-5 text-base md:text-lg">{p.description}</p>

                {features.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-foreground/90">
                        <span
                          className={cn(
                            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br",
                            p.accent.gradientBg,
                            p.accent.onAccent,
                          )}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className={cn(
                      "bg-gradient-to-r hover:scale-[1.015]",
                      p.accent.gradientBg,
                      p.accent.onAccent,
                      p.accent.glow,
                    )}
                  >
                    <Link href={p.href}>
                      {p.linkLabel} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <LaunchButton platform={p} />
                </div>
              </Reveal>

              <Reveal delay={0.1} className={cn(flip && "lg:order-1")}>
                <ProductMockup platform={p} />
              </Reveal>
            </div>
          </Section>
        );
      })}

      {/* Roadmap teaser - deliberately quieter than the product blocks */}
      <Section tone="slate" seed="sol-roadmap" aria-labelledby="roadmap">
        <Reveal className="container">
          <div className="glass-card mx-auto max-w-4xl border-dashed border-foreground/20 px-8 py-10 text-center md:px-14">
            <Badge variant="secondary">Coming soon</Badge>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">On the roadmap</p>
            <h2 id="roadmap" className="mt-3 text-2xl font-bold md:text-3xl">
              More compliance products
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base">
              We&apos;re extending the platform to new frameworks and workflows. Want to influence what we build next?
            </p>
            <Button asChild variant="outline" size="lg" className="mt-6">
              <Link href="/contact">
                Tell us what you need <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Section>

      <CTABanner />
    </>
  );
}
