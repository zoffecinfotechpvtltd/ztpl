"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Button/link with a subtle magnetic pull toward the cursor.
 * Renders as a Next <Link> when `href` is provided, otherwise a <button>.
 */
export function MagneticButton({
  children,
  href,
  className = "btn-primary",
  external = false,
  type = "button",
  onClick,
  strength = 0.35,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function onMove(e: React.MouseEvent) {
    if (reduce) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  const inner = (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex">
        {inner}
      </a>
    ) : (
      <Link href={href} className="inline-flex">
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-flex">
      {inner}
    </button>
  );
}
