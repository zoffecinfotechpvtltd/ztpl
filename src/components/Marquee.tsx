"use client";

import type { ReactNode } from "react";

/**
 * Infinite, CSS-driven marquee. Duplicates its children once and translates
 * -50% for a seamless loop. Pauses on hover.
 */
export function Marquee({
  items,
  duration = 42,
  className = "",
}: {
  items: ReactNode[];
  duration?: number;
  className?: string;
}) {
  return (
    <div
      className={`group mask-fade-x relative flex overflow-hidden ${className}`}
      style={{ ["--marquee-duration" as string]: `${duration}s` }}
    >
      {[0, 1].map((dup) => (
        <ul
          key={dup}
          aria-hidden={dup === 1}
          className="flex shrink-0 animate-marquee items-center gap-4 pr-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        >
          {items.map((item, i) => (
            <li key={i} className="shrink-0">
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
