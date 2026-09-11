"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Horizontal connected-node flow diagram — for content that is a pipeline
 * (governance → controls & evidence → reporting), not a set of parallel,
 * unordered claims. A card grid implies "three separate things"; this
 * implies "one thing, three stages."
 */
export function ProcessFlow({
  nodes,
}: {
  nodes: { tag: string; title: string; body: ReactNode }[];
}) {
  const reduce = useReducedMotion();

  return (
    <div className="relative mt-12">
      <div
        aria-hidden
        className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent lg:block"
      />
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
        {nodes.map((n, i) => (
          <motion.div
            key={n.tag}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="flex items-center gap-3 lg:block">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-green/40 bg-bg font-display text-sm font-bold text-green">
                0{i + 1}
              </span>
              {i < nodes.length - 1 && (
                <span
                  aria-hidden
                  className="h-px flex-1 bg-line lg:hidden"
                />
              )}
            </div>
            <div className="mt-4 rounded-xl border border-line bg-bg-card/60 p-5">
              <span className="chip text-green">{n.tag}</span>
              <h3 className="heading mt-3 text-lg">{n.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {n.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
