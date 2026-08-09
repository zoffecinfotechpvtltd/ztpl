"use client";

import { useEffect, useRef, useState } from "react";
import { ensureGsap } from "@/lib/gsap";

/**
 * Brief, once-per-session entrance sequence built from the brand's own
 * icon language: the amber chevron (guidance) and emerald chevron
 * (compliance) fly in and interlock — "connection" — then the real
 * wordmark settles in before the overlay lifts. Skips entirely for
 * prefers-reduced-motion and on repeat visits within a session.
 */
export function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("ztpl-preloaded");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (alreadySeen || reduce || !rootRef.current) {
      setMounted(false);
      return;
    }

    sessionStorage.setItem("ztpl-preloaded", "1");
    document.body.style.overflow = "hidden";

    const gsap = ensureGsap();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          document.body.style.overflow = "";
          setMounted(false);
        },
      });

      tl.set("[data-pre-amber]", { x: -64, opacity: 0, rotate: -8 })
        .set("[data-pre-emerald]", { x: 64, opacity: 0, rotate: 8 })
        .set("[data-pre-word]", { opacity: 0, y: 10 })
        .to(
          ["[data-pre-amber]", "[data-pre-emerald]"],
          { x: 0, opacity: 1, rotate: 0, duration: 0.5, ease: "power4.out" },
          0.05
        )
        .to(
          "[data-pre-mark]",
          { scale: 1.08, duration: 0.12, ease: "power1.out" },
          0.5
        )
        .to("[data-pre-mark]", { scale: 1, duration: 0.18, ease: "back.out(2.5)" })
        .to("[data-pre-word]", { opacity: 1, y: 0, duration: 0.35 }, "-=0.1")
        .to({}, { duration: 0.15 }) // hold
        .to(rootRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden
      data-pre-screen
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
    >
      <div className="flex flex-col items-center gap-5">
        <div data-pre-mark className="flex items-center">
          <svg
            data-pre-amber
            width="34"
            height="56"
            viewBox="0 0 34 56"
            fill="none"
          >
            <path d="M30 4 8 28l22 24-8 0L0 28 22 4Z" fill="#FFC107" />
          </svg>
          <svg
            data-pre-emerald
            width="34"
            height="56"
            viewBox="0 0 34 56"
            fill="none"
            className="-ml-2"
          >
            <path d="M4 4 26 28 4 52l8 0 22-24L12 4Z" fill="#00D26A" />
          </svg>
        </div>
        <span
          data-pre-word
          className="font-display text-lg font-black tracking-tight text-ink"
        >
          ZTPL
        </span>
      </div>
    </div>
  );
}
