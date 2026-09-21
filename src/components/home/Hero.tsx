"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DotNetwork } from "@/components/ui/dot-network";
import { PlatformMark } from "@/components/PlatformLogo";
import { platforms, type Platform } from "@/lib/platforms";

const trust = ["1 live, 2 in development", "SEBI CSCRF", "Multi-tenant", "MSSP-ready"];

const words = [
  { text: "Compliance,", gradient: false },
  { text: "Simplified.", gradient: true },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } } };
const word = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const } },
};

// Layout of the three floating product cards (desktop only) - colours come from each product's own accent.
const layout: Record<Platform["slug"], { meta: string; bars: number[]; pos: string; depth: number }> = {
  aegis: { meta: "SEBI CSCRF · GRC", bars: [72, 48, 88, 60], pos: "left-0 top-4 w-[62%]", depth: -22 },
  argus: { meta: "Network monitoring", bars: [40, 66, 52, 80], pos: "right-0 top-[38%] w-[58%]", depth: -48 },
  exploitsense: { meta: "Threat exposure · CTEM", bars: [58, 84, 36, 70], pos: "left-[8%] bottom-0 w-[60%]", depth: -12 },
};

function FloatingCard({
  platform,
  progress,
  reduce,
}: {
  platform: Platform;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduce: boolean;
}) {
  const l = layout[platform.slug];
  const a = platform.accent;
  const y = useTransform(progress, [0, 1], [0, reduce ? 0 : l.depth]);
  return (
    <motion.div
      style={{ y }}
      className={`glass-card absolute border ${a.border} bg-background/50 p-4 shadow-2xl ${l.pos}`}
    >
      <div className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b ${a.tint}`} aria-hidden />
      <div className="relative">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/[0.07]">
            <PlatformMark platform={platform} size={22} />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">{platform.name}</p>
            <p className="truncate text-[11px] text-muted-foreground">{l.meta}</p>
          </div>
        </div>
        <div className="mt-4 flex h-14 items-end gap-1.5" aria-hidden>
          {l.bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-foreground/15" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = !!useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  return (
    <section ref={ref} className="gradient-mesh-hero relative isolate flex min-h-[88vh] items-center overflow-hidden pb-24 pt-32">
      <DotNetwork className="-z-10" />

      <div className="container relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex rounded-full border border-foreground/10 bg-foreground/[0.04] px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            Security &amp; compliance technology, built in India
          </motion.p>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            {words.map((w) => (
              <motion.span key={w.text} variants={word} className={`block ${w.gradient ? "gradient-text" : ""}`}>
                {w.text}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mx-auto mt-7 max-w-2xl text-base md:text-lg lg:mx-0"
          >
            Zoffec Technologies Private Limited builds security and compliance platforms for India&apos;s regulated
            businesses: Zoffec Aegis for SEBI CSCRF, Argus for infrastructure monitoring, and ExploitSense for threat
            exposure. Real software, not a slide deck.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button asChild variant="gradient" size="lg">
              <Link href="/contact">Book a Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/solutions">
                Explore Our Platforms
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-9 flex flex-wrap justify-center gap-2.5 lg:justify-start"
          >
            {trust.map((t) => (
              <li
                key={t}
                className="glass-card flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm text-foreground/90"
              >
                <CheckCircle2 className="h-4 w-4 text-success" aria-hidden />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Abstract product cards - desktop only, parallax drift on scroll. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="relative hidden h-[440px] lg:block"
          aria-hidden
        >
          {platforms.map((p) => (
            <FloatingCard key={p.slug} platform={p} progress={scrollYProgress} reduce={reduce} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
