"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ensureGsap } from "@/lib/gsap";

/**
 * Brief, once-per-session entrance sequence using the real ZTPL mark
 * (cropped from the brand's own logo asset) with a loading progress bar.
 * Skips entirely for prefers-reduced-motion and on repeat visits within a
 * session (sessionStorage-gated).
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

      tl.set("[data-pre-mark]", { opacity: 0, y: 12, scale: 0.92 })
        .set("[data-pre-bar-fill]", { scaleX: 0 })
        .set("[data-pre-pct]", { opacity: 0 })
        .to("[data-pre-mark]", { opacity: 1, y: 0, scale: 1, duration: 0.5 })
        .to("[data-pre-pct]", { opacity: 1, duration: 0.25 }, "-=0.2")
        .to(
          "[data-pre-bar-fill]",
          { scaleX: 1, duration: 1.0, ease: "power2.inOut" },
          "-=0.1"
        )
        .to(
          "[data-pre-pct]",
          {
            textContent: 100,
            duration: 1.0,
            ease: "power2.inOut",
            snap: { textContent: 1 },
          },
          "<"
        )
        .to({}, { duration: 0.15 }) // hold at 100%
        .to(rootRef.current, { opacity: 0, duration: 0.4, ease: "power2.inOut" });
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
      <div className="flex flex-col items-center gap-6">
        <div data-pre-mark className="h-16 w-auto">
          <Image
            src="/icon-mark.png"
            alt=""
            width={540}
            height={445}
            priority
            className="h-16 w-auto object-contain"
          />
        </div>
        <div className="flex w-40 flex-col items-center gap-2">
          <div className="h-0.5 w-full overflow-hidden rounded-full bg-line">
            <div
              data-pre-bar-fill
              className="h-full w-full origin-left rounded-full bg-brand-gradient"
            />
          </div>
          <span className="font-mono text-[11px] tabular-nums tracking-[0.08em] text-ink-faint">
            <span data-pre-pct>0</span>%
          </span>
        </div>
      </div>
    </div>
  );
}
