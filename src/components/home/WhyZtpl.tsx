"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/count-up";
import { SectionHeading } from "@/components/ui/section-heading";
import { Section } from "@/components/ui/section";

const stats = [
  { end: 3, pad: 2, label: "Platforms engineered in-house" },
  { end: 7, pad: 2, label: "Regulated sectors served" },
  { end: 2, pad: 2, label: "Deployment modes — cloud & on-prem" },
];

/** Circular progress ring that fills 0→100% in view. */
function ProgressRing({ delay }: { delay: number }) {
  return (
    <div className="relative mx-auto h-32 w-32">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden>
        <defs>
          <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00A651" />
            <stop offset="100%" stopColor="#5CF0A5" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="52" fill="none" stroke="rgb(255 255 255 / 0.1)" strokeWidth="8" />
        <motion.circle
          cx="60"
          cy="60"
          r="52"
          fill="none"
          stroke="url(#ring-grad)"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay, duration: 2.6, ease: "easeOut" }}
        />
      </svg>
      <CountUp
        end={100}
        suffix="%"
        delay={delay}
        className="gradient-text absolute inset-0 flex items-center justify-center text-3xl font-bold"
      />
    </div>
  );
}

export function WhyZtpl() {
  return (
    <Section tone="none" pad="md" seed="why" className="gradient-mesh-rich overflow-hidden" aria-labelledby="why-ztpl">
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="container relative">
        <SectionHeading
          eyebrow="Why ZTPL"
          title={<span id="why-ztpl">Engineered, not assembled</span>}
          description="Every platform we ship comes out of the same team, the same codebase discipline, and the same deployment standard."
        />

        <div className="mt-20 grid grid-cols-2 gap-y-14 lg:grid-cols-4 lg:gap-y-0">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.15 * i, duration: 0.9 }}
              className="flex flex-col items-center justify-start px-4 text-center lg:border-r lg:border-white/10"
            >
              <CountUp
                end={s.end}
                pad={s.pad}
                delay={0.1 * i}
                className="gradient-text flex h-32 items-center text-6xl font-bold"
              />
              <p className="mt-4 max-w-[14rem] text-sm font-medium uppercase tracking-[0.12em] text-slate-300">
                {s.label}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.45, duration: 0.9 }}
            className="flex flex-col items-center px-4 text-center"
          >
            <ProgressRing delay={0.3} />
            <p className="mt-4 max-w-[14rem] text-sm font-medium uppercase tracking-[0.12em] text-slate-300">
              Annexure-K-aligned reporting
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
