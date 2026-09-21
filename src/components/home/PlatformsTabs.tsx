"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductMockup } from "@/components/ProductMockup";
import { PlatformMark, PlatformWordmark } from "@/components/PlatformLogo";
import { Section } from "@/components/ui/section";
import { LaunchButton, StatusBadge } from "@/components/PlatformStatus";
import { platforms } from "@/lib/platforms";
import { cn } from "@/lib/utils";

export function PlatformsTabs() {
  const [active, setActive] = useState<(typeof platforms)[number]["slug"]>(platforms[0].slug);
  const current = platforms.find((p) => p.slug === active)!;
  const a = current.accent;

  return (
    <Section tone="slate" seed="platforms" aria-labelledby="what-we-build">
      <div className="container">
        <SectionHeading
          eyebrow="What we build"
          title={<span id="what-we-build">Three platforms, one operating model</span>}
          description="Compliance, infrastructure, and threat exposure — engineered by the same team, to the same standard."
        />

        <Tabs value={active} onValueChange={(v) => setActive(v as typeof active)} className="mt-14">
          <TabsList className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3" aria-label="Platforms">
            {platforms.map((p) => {
              const on = p.slug === active;
              return (
                <TabsTrigger
                  key={p.slug}
                  value={p.slug}
                  className={cn(
                    "relative h-auto justify-start gap-3 overflow-hidden rounded-2xl border px-5 py-4 text-base",
                    on ? "border-foreground/15 bg-foreground/[0.06]" : "border-foreground/10 bg-foreground/[0.02]",
                  )}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/[0.07]">
                    <PlatformMark platform={p} size={22} />
                  </span>
                  <span className="font-semibold">{p.name}</span>
                  {on && (
                    <motion.span
                      layoutId="platform-tab-indicator"
                      className={cn("absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r", p.accent.gradientBg)}
                    />
                  )}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value={active} className="mt-10">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid items-center gap-12 lg:grid-cols-2"
            >
              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant={a.badge}>{current.category}</Badge>
                  <StatusBadge platform={current} />
                </div>
                {current.wordmark ? (
                  <>
                    <PlatformWordmark platform={current} className="mt-5" />
                    <h3 className="sr-only">{current.name}</h3>
                  </>
                ) : (
                  <h3 className={cn("mt-5 text-4xl font-bold md:text-5xl", a.gradientText)}>{current.name}</h3>
                )}
                <p className="mt-3 text-lg font-medium text-foreground">{current.subtitle}</p>
                <p className="mt-4 text-base">{current.description}</p>

                {current.features.length > 0 && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {current.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-foreground/90">
                        <span
                          className={cn(
                            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br",
                            a.gradientBg,
                            a.onAccent,
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
                  <Button asChild variant="gradient" size="lg">
                    <Link href={current.href}>
                      {current.linkLabel} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <LaunchButton platform={current} />
                </div>
              </div>

              <ProductMockup platform={current} />
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  );
}
