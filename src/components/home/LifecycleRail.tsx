"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Continuous rail with numbered stops — for sequential lifecycle content
 * (Build → Ship → Support). Visually distinct from ProcessFlow's connected
 * cards: a single line the reader's eye follows left to right, stops sitting
 * directly on it rather than each stage getting its own boxed card.
 */
export function LifecycleRail({
  stops,
}: {
  stops: { tag: string; title: string; body: string }[];
}) {
  const reduce = useReducedMotion();

  return (
    <div className="mt-14">
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-4 top-4 h-[calc(100%-2rem)] w-px bg-line sm:left-0 sm:right-0 sm:top-4 sm:h-px sm:w-auto"
        />
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-6">
          {stops.map((s, i) => (
            <motion.div
              key={s.tag}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex gap-4 sm:block sm:pt-14"
            >
              <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gradient font-display text-xs font-bold text-bg sm:absolute sm:left-0 sm:top-0">
                {i + 1}
              </span>
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-yellow">
                  {s.tag}
                </span>
                <h3 className="heading mt-2 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
