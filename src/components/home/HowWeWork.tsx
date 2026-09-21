"use client";

import { motion } from "framer-motion";
import { Hammer, LifeBuoy, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const LINE_SECONDS = 1.6;

const steps = [
  {
    label: "Build",
    title: "We ship real software",
    body: "Zoffec Aegis, Argus, and ExploitSense are working platforms — not slide decks. They run assessments, watch infrastructure, and surface exposure for real, every day.",
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

function Node({ index, children }: { index: number; children: React.ReactNode }) {
  // Light each node up as the drawing line reaches it (0%, 50%, 100% of the line).
  const delay = (LINE_SECONDS / (steps.length - 1)) * index;
  return (
    <motion.div
      initial={{ opacity: 0.45, scale: 0.85, boxShadow: "0 0 0 0 rgb(34 211 238 / 0)" }}
      whileInView={{
        opacity: 1,
        scale: 1,
        boxShadow: ["0 0 0 0 rgb(34 211 238 / 0)", "0 0 40px 6px rgb(34 211 238 / 0.55)", "0 0 24px 0 rgb(59 130 246 / 0.35)"],
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay, duration: 0.7 }}
      className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-white"
    >
      {children}
    </motion.div>
  );
}

export function HowWeWork() {
  return (
    <section className="section-y" aria-labelledby="how-we-work">
      <div className="container">
        <SectionHeading
          eyebrow="How we work"
          title={<span id="how-we-work">Build, ship, support — the whole product lifecycle</span>}
          description="A platform is only as good as what happens after launch. We own all three."
        />

        <div className="relative mt-16">
          {/* Desktop: horizontal line through the node centres */}
          <svg
            aria-hidden
            className="absolute left-[16.667%] top-8 hidden h-1 w-[66.666%] -translate-y-1/2 md:block"
            viewBox="0 0 100 4"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="hww-grad" gradientUnits="userSpaceOnUse" x1="0" y1="2" x2="100" y2="2">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#22D3EE" />
              </linearGradient>
            </defs>
            <path d="M0 2 H100" stroke="rgb(148 163 184 / 0.18)" strokeWidth="2" />
            <motion.path
              d="M0 2 H100"
              stroke="url(#hww-grad)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: LINE_SECONDS, ease: "easeInOut" }}
            />
          </svg>

          {/* Mobile: vertical line down the left */}
          <div aria-hidden className="absolute bottom-8 left-8 top-8 w-0.5 -translate-x-1/2 bg-foreground/10 md:hidden">
            <motion.div
              className="h-full origin-top bg-gradient-to-b from-blue-500 to-cyan-400"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: LINE_SECONDS, ease: "easeInOut" }}
            />
          </div>

          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map(({ label, title, body, Icon }, i) => (
              <li key={label} className="flex gap-5 md:flex-col md:items-center md:text-center">
                <Node index={i}>
                  <Icon className="h-6 w-6" aria-hidden />
                </Node>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: 0.15 * i, duration: 0.6 }}
                  className="glass-card flex-1 p-6 md:mt-8 md:w-full"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
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
    </section>
  );
}
