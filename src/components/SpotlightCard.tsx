"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { accentClasses, type Accent } from "@/lib/accent";

const spotlightRgb: Record<Accent, string> = {
  green: "0,210,106",
  cyan: "0,191,255",
  yellow: "255,193,7",
};

/**
 * Card with a cursor-following radial spotlight + lift on hover.
 * Falls back gracefully (no spotlight) when the pointer never enters.
 * Pass `accent` to use a product's accent color for the hover border/glow/
 * spotlight instead of the site-default green.
 */
export function SpotlightCard({
  children,
  className = "",
  as: Tag = "div",
  accent,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  accent?: Accent;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  const rgb = accent ? spotlightRgb[accent] : "0,210,106";
  const background = useMotionTemplate`radial-gradient(280px circle at ${mx}px ${my}px, rgba(${rgb},0.12), transparent 70%)`;

  function onMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  const MotionTag = motion[Tag] as typeof motion.div;
  const a = accent ? accentClasses[accent] : null;
  const hoverClasses = a
    ? `hover:-translate-y-1 hover:bg-bg-card ${a.cardHoverBorder} ${a.glowShadow}`
    : "card-hover";

  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(-200);
        my.set(-200);
      }}
      className={`group card overflow-hidden transition-all duration-500 ease-smooth ${hoverClasses} ${className}`}
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
