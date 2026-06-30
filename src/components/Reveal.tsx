"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
  none: {},
};

/**
 * Fade/slide-in on scroll. Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  direction,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  direction?: Direction;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const from = direction ? offset[direction] : { y };

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Word-by-word headline reveal. Pass a plain string.
 * Highlighted words (by index) get the brand gradient.
 */
export function TextReveal({
  text,
  highlight = [],
  className = "",
  delay = 0,
}: {
  text: string;
  highlight?: number[];
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${
              highlight.includes(i) ? "text-gradient" : ""
            }`}
            initial={reduce ? false : { y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
}
