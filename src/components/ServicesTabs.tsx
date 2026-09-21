"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bug, Check, ClipboardList, FileCheck, Network, ShieldCheck, UserCog } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  "sebi-cscrf-advisory": ShieldCheck,
  "grc-consulting": ClipboardList,
  vapt: Bug,
  vciso: UserCog,
  tpra: Network,
  "audit-support": FileCheck,
};

/** Vertical tabs on desktop, horizontally scrollable pills on mobile. */
export function ServicesTabs() {
  const [active, setActive] = useState<string>(services[0].slug);
  const [desktop, setDesktop] = useState(false);
  const current = services.find((s) => s.slug === active)!;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <Tabs
      value={active}
      onValueChange={setActive}
      orientation={desktop ? "vertical" : "horizontal"}
      className="grid gap-10 lg:grid-cols-[18rem_1fr] lg:gap-16"
    >
      <TabsList
        aria-label="Services"
        className="-mx-6 flex snap-x gap-2 overflow-x-auto px-6 pb-2 lg:sticky lg:top-28 lg:mx-0 lg:h-fit lg:flex-col lg:items-stretch lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {services.map((s) => {
          const Icon = icons[s.slug];
          const on = s.slug === active;
          return (
            <TabsTrigger
              key={s.slug}
              value={s.slug}
              className={cn(
                "shrink-0 snap-start gap-3 rounded-full border px-4 py-2.5 lg:rounded-xl lg:border-0 lg:border-l-2 lg:px-4 lg:py-4 lg:text-base",
                on
                  ? "border-brand-green/50 bg-foreground/[0.06] lg:border-l-brand-green"
                  : "border-foreground/10 lg:border-l-transparent",
              )}
            >
              <Icon className={cn("h-5 w-5", on ? "text-brand-green" : "text-muted-foreground")} aria-hidden />
              {s.title}
            </TabsTrigger>
          );
        })}
      </TabsList>

      <TabsContent value={active}>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-10"
        >
          <h2 className="text-3xl font-bold md:text-4xl">{current.title}</h2>
          <p className="mt-4 text-base md:text-lg">{current.short}</p>
          <ul className="mt-8 space-y-4">
            {current.points.map((pt) => (
              <li key={pt} className="flex items-center gap-3 text-foreground/90">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {pt}
              </li>
            ))}
          </ul>
          <Button asChild variant="gradient" size="lg" className="mt-10 h-auto whitespace-normal py-3 text-center">
            <Link href="/contact">
              Talk to us about {current.title} <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </Button>
        </motion.div>
      </TabsContent>
    </Tabs>
  );
}
