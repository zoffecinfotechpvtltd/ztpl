"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { Hammer, LifeBuoy, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Section } from "@/components/ui/section";

const LINE_SECONDS = 2.6;

const steps = [
  {
    label: "Build",
    title: "We ship real software",
    body: "Zoffec Aegis is a working platform — not a slide deck — running real assessments today, with Argus and ExploitSense being built to the same standard.",
    Icon: Hammer,
  },
  {
    label: "Ship",
    title: "Cloud or on your own infrastructure",
    body: "Every platform we build deploys on our managed cloud or entirely inside your environment — your risk posture and regulator decide, not us.",
    Icon: Rocket,
  },
  {
    label: "Support",
    title: "We stay after go-live",
    body: "Onboarding, updates, and direct support from the team that builds the platform — not a ticket queue routed through three time zones.",
    Icon: LifeBuoy,
  },
];

const GLOW = [
  "0 0 0 0 rgb(0 210 106 / 0)",
  "0 0 46px 8px rgb(0 210 106 / 0.55)",
  "0 0 28px 2px rgb(0 210 106 / 0.35)",
];

/** A step circle that stays dim until the drawing line actually reaches it, then glows. */
function Node({ reached, children }: { reached: boolean; children: React.ReactNode }) {
  return (
    // Solid backing circle (never translucent, so the track line can't show through); only the colour face fades in.
    <motion.div
      initial={false}
      animate={
        reached
          ? { scale: 1, boxShadow: GLOW }
          : { scale: 0.94, boxShadow: "0 0 0 0 rgb(0 210 106 / 0)" }
      }
      transition={reached ? { duration: 1.3, ease: "easeOut" } : { duration: 0.4 }}
      className="relative z-10 h-16 w-16 shrink-0 rounded-full bg-background"
    >
      <span aria-hidden className="absolute inset-0 rounded-full border border-foreground/15 bg-surface" />
      <motion.div
        initial={false}
        animate={{ opacity: reached ? 1 : 0 }}
        transition={{ duration: reached ? 0.9 : 0.3, ease: "easeOut" }}
        className="absolute inset-0 rounded-full bg-gradient-primary"
      />
      <span
        className={`relative flex h-full w-full items-center justify-center transition-colors duration-700 ${
          reached ? "text-primary-foreground" : "text-muted-foreground"
        }`}
      >
        {children}
      </span>
    </motion.div>
  );
}

export function HowWeWork() {
  const reduce = !!useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const inView = useInView(rootRef, { once: true, margin: "0px 0px -25% 0px" });

  // 0 -> 1 progress of the line; both the line and the circles read from this one value.
  const progress = useMotionValue(0);
  // Where along the line (0..1) each circle sits. Even on desktop; measured on mobile where cards differ in height.
  const [stops, setStops] = useState<number[]>([0, 0.5, 1]);
  const [reached, setReached] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const measure = () => {
      const centres = nodeRefs.current.map((el) => {
        if (!el) return 0;
        const r = el.getBoundingClientRect();
        return r.top + r.height / 2;
      });
      const vertical = window.matchMedia("(max-width: 767px)").matches;
      const span = centres[centres.length - 1] - centres[0];
      setStops(
        vertical && span > 0
          ? centres.map((c) => (c - centres[0]) / span)
          : centres.map((_, i) => i / (centres.length - 1)),
      );
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      progress.set(1);
      return;
    }
    const controls = animate(progress, 1, { duration: LINE_SECONDS, ease: "easeInOut" });
    return () => controls.stop();
  }, [inView, reduce, progress]);

  // Light a circle the instant the line's leading edge touches it (a hair early, for its radius).
  useMotionValueEvent(progress, "change", (v) => {
    const next = stops.map((s) => v >= s - 0.035);
    setReached((prev) => (prev.every((x, i) => x === next[i]) ? prev : next));
  });

  return (
    <Section tone="ink" seed="work" aria-labelledby="how-we-work">
      <div className="container">
        <SectionHeading
          eyebrow="How we work"
          title={<span id="how-we-work">Build, ship, support — the whole product lifecycle</span>}
          description="A platform is only as good as what happens after launch. We own all three."
        />

        <div ref={rootRef} className="relative mt-20">
          {/* Desktop: horizontal line through the circle centres */}
          <svg
            aria-hidden
            className="absolute left-[16.667%] top-8 hidden h-1 w-[66.666%] -translate-y-1/2 md:block"
            viewBox="0 0 100 4"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="hww-grad" gradientUnits="userSpaceOnUse" x1="0" y1="2" x2="100" y2="2">
                <stop offset="0%" stopColor="#00A651" />
                <stop offset="100%" stopColor="#3DDB8A" />
              </linearGradient>
            </defs>
            <path d="M0 2 H100" stroke="rgb(148 163 184 / 0.18)" strokeWidth="2" />
            <motion.path d="M0 2 H100" stroke="url(#hww-grad)" strokeWidth="2" style={{ pathLength: progress }} />
          </svg>

          {/* Mobile: vertical line down the left, first circle centre to last */}
          <div aria-hidden className="absolute bottom-8 left-8 top-8 w-0.5 -translate-x-1/2 bg-foreground/10 md:hidden">
            <motion.div className="h-full origin-top bg-gradient-to-b from-brand-deep to-brand-green" style={{ scaleY: progress }} />
          </div>

          <ol className="grid gap-14 md:grid-cols-3 md:gap-10">
            {steps.map(({ label, title, body, Icon }, i) => (
              <li key={label} className="flex gap-5 md:flex-col md:items-center md:text-center">
                <div
                  ref={(el) => {
                    nodeRefs.current[i] = el;
                  }}
                >
                  <Node reached={reached[i]}>
                    <Icon className="h-6 w-6" aria-hidden />
                  </Node>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: 0.15 * i, duration: 0.9 }}
                  className="glass-card flex-1 p-7 md:mt-10 md:w-full"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
                    {i + 1} · {label}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-base">{body}</p>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
