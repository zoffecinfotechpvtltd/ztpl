"use client";

import { motion } from "framer-motion";
import { KeyRound, Lock, ShieldCheck } from "lucide-react";
import { CountUp } from "@/components/ui/count-up";
import { Section } from "@/components/ui/section";

const counters = [
  { end: 3, label: "Platforms", from: -16, y: 0 },
  { end: 7, label: "Sectors served", from: 0, y: -10 },
  { end: 2, label: "Deployment modes", from: 16, y: 0 },
];

const taglines = [
  { text: "Your data, your residency", Icon: Lock },
  { text: "Tamper-evident by design", Icon: ShieldCheck },
  { text: "Least privilege, enforced", Icon: KeyRound },
];

/** Compact company strip that docks under the hero: identity + three counters + trust ribbon. */
export function StatsBand() {
  return (
    <Section tone="slate" pad="none" seed="stats" knob={false} className="overflow-hidden">
      {/* One-shot light sweep across the top edge as the strip locks in */}
      <motion.div
        aria-hidden
        initial={{ x: "-100%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 2.4, ease: "easeInOut" }}
        className="absolute inset-x-0 top-0 z-10 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-brand-green to-transparent"
      />

      <div className="container">
        <div className="grid divide-y divide-foreground/10 lg:grid-cols-[1.35fr_repeat(3,1fr)] lg:divide-x lg:divide-y-0">
          <div className="flex flex-col justify-center py-8 lg:py-10 lg:pr-10">
            <p className="font-mono text-[11px] text-muted-foreground">ztplsolutions.com / about</p>
            <p className="mt-1 flex items-baseline gap-3">
              <span className="gradient-text text-3xl font-black tracking-tight">ZTPL</span>
              <span className="text-sm text-foreground/90">Compliance Simplified.</span>
            </p>
            <p className="mt-1 text-xs">Zoffec Technologies Private Limited</p>
          </div>

          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, x: c.from, y: c.y }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.15 * i, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center gap-4 py-6 lg:justify-center lg:px-8 lg:py-10"
            >
              <CountUp end={c.end} className="gradient-text text-5xl font-black leading-none tabular-nums" />
              <span className="text-xs font-medium uppercase leading-snug tracking-[0.16em] text-muted-foreground">
                {c.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <ul className="border-t border-foreground/10 bg-background/40">
        <li className="container flex flex-col divide-y divide-foreground/10 sm:flex-row sm:divide-x sm:divide-y-0">
          {taglines.map(({ text, Icon }) => (
            <span key={text} className="flex flex-1 items-center gap-2.5 py-4 text-sm text-foreground/90 sm:justify-center">
              <Icon className="h-4 w-4 shrink-0 text-brand-green" aria-hidden />
              {text}
            </span>
          ))}
        </li>
      </ul>
    </Section>
  );
}
