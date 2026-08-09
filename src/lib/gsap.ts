"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/** Registers ScrollTrigger once, client-side only. Safe to call from every component that needs it. */
export function ensureGsap() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return gsap;
}

export { ScrollTrigger };

/**
 * Runs `fn` inside a reduced-motion-aware matchMedia context, mirroring the
 * prefers-reduced-motion handling already used by Reveal.tsx (Framer Motion
 * side) — GSAP timelines built inside `full` collapse to their end state
 * automatically when the user has reduced motion on.
 */
export function gsapMatchMedia(
  fn: (ctx: { full: boolean }) => void | (() => void)
) {
  const g = ensureGsap();
  const mm = g.matchMedia();
  mm.add(
    {
      full: "(prefers-reduced-motion: no-preference)",
      reduced: "(prefers-reduced-motion: reduce)",
    },
    (context) => {
      const full = context.conditions?.full === true;
      return fn({ full });
    }
  );
  return mm;
}
