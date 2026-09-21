"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Activity, ArrowRight, CheckCircle2, ChevronDown, Crosshair, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const trust = ["1 live, 2 in development", "SEBI CSCRF", "Multi-tenant", "MSSP-ready"];

const words = [
  { text: "Compliance,", gradient: false },
  { text: "Simplified.", gradient: true },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const word = {
  hidden: { opacity: 0, y: 24, filter: "blur(12px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const cards = [
  {
    name: "Zoffec Aegis",
    meta: "SEBI CSCRF · GRC",
    Icon: ShieldCheck,
    tint: "from-blue-500/30 to-blue-500/0",
    ring: "border-blue-400/30",
    text: "text-blue-300",
    bars: [72, 48, 88, 60],
    pos: "left-0 top-4 w-[62%]",
    depth: -40,
  },
  {
    name: "Argus",
    meta: "Network monitoring",
    Icon: Activity,
    tint: "from-cyan-400/30 to-cyan-400/0",
    ring: "border-cyan-300/30",
    text: "text-cyan-300",
    bars: [40, 66, 52, 80],
    pos: "right-0 top-[38%] w-[58%]",
    depth: -90,
  },
  {
    name: "ExploitSense",
    meta: "Threat exposure · CTEM",
    Icon: Crosshair,
    tint: "from-violet-500/30 to-fuchsia-500/0",
    ring: "border-violet-400/30",
    text: "text-violet-300",
    bars: [58, 84, 36, 70],
    pos: "left-[8%] bottom-0 w-[60%]",
    depth: -20,
  },
];

function FloatingCard({ card, progress, reduce }: { card: (typeof cards)[number]; progress: ReturnType<typeof useScroll>["scrollYProgress"]; reduce: boolean }) {
  const y = useTransform(progress, [0, 1], [0, reduce ? 0 : card.depth]);
  return (
    <motion.div
      style={{ y }}
      className={`glass-card absolute border ${card.ring} bg-background/40 p-4 shadow-2xl ${card.pos}`}
    >
      <div className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b ${card.tint}`} aria-hidden />
      <div className="relative">
        <div className="flex items-center gap-2.5">
          <span className={`flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.06] ${card.text}`}>
            <card.Icon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">{card.name}</p>
            <p className="truncate text-[11px] text-muted-foreground">{card.meta}</p>
          </div>
        </div>
        <div className="mt-4 flex h-14 items-end gap-1.5" aria-hidden>
          {card.bars.map((h, i) => (
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
    <section ref={ref} className="gradient-mesh-hero relative flex min-h-[90vh] items-center overflow-hidden pt-28 pb-20">
      <div className="grid-pattern pointer-events-none absolute inset-0" aria-hidden />

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
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mx-auto mt-7 max-w-2xl text-base md:text-lg lg:mx-0"
          >
            Zoffec Technologies Private Limited builds security and compliance platforms for India&apos;s regulated
            businesses: Zoffec Aegis for SEBI CSCRF, Argus for infrastructure monitoring, and ExploitSense for threat
            exposure. Real software, not a slide deck.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button asChild variant="gradient" size="lg">
              <Link href="/contact">Book a Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/solutions">
                Explore Our Platforms
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
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

        {/* Abstract product cards — desktop only, parallax drift on scroll. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative hidden h-[460px] lg:block"
          aria-hidden
        >
          {cards.map((c) => (
            <FloatingCard key={c.name} card={c} progress={scrollYProgress} reduce={reduce} />
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center lg:flex" aria-hidden>
        <ChevronDown className="h-6 w-6 animate-bounce text-muted-foreground" />
      </div>
    </section>
  );
}
