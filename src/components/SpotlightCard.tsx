"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

/**
 * Card with a cursor-following radial spotlight + lift on hover.
 * Falls back gracefully (no spotlight) when the pointer never enters.
 */
export function SpotlightCard({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  const background = useMotionTemplate`radial-gradient(280px circle at ${mx}px ${my}px, rgba(0,210,106,0.12), transparent 70%)`;

  function onMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  const MotionTag = motion[Tag] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(-200);
        my.set(-200);
      }}
      className={`group card card-hover overflow-hidden ${className}`}
    >
      <motion.span
        aria-hidden
        style={{ background }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span className="relative block">{children}</span>
    </MotionTag>
  );
}
