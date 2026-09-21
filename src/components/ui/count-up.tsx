"use client";

import ReactCountUp from "react-countup";

type Props = {
  end: number;
  /** Zero-pad to this many digits, e.g. 2 renders 3 as "03". */
  pad?: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
};

/** Counts from 0 once scrolled into view (react-countup scroll spy). */
export function CountUp({ end, pad = 0, suffix = "", duration = 2.6, delay = 0, className }: Props) {
  return (
    <span className={className}>
      <ReactCountUp
        end={end}
        duration={duration}
        delay={delay}
        enableScrollSpy
        scrollSpyOnce
        formattingFn={(n) => String(n).padStart(pad, "0")}
      />
      {suffix}
    </span>
  );
}
