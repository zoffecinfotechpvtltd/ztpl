"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Pulse = {
  path: number[]; // indices into the dot grid, walked one hop at a time
  born: number;
  life: number;
  rgb: string; // "r,g,b"
};

const GREEN = "0,210,106";
const AMBER = "255,193,7";

/**
 * Dot grid with an endless "constellation" animation: random dots light up and link to their neighbours in short
 * chains that draw in, hold, and fade out. Canvas-based, pauses when off-screen, static under reduced motion.
 */
export function DotNetwork({ className, spacing = 30 }: { className?: string; spacing?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let cols = 0;
    let rows = 0;
    let pulses: Pulse[] = [];
    let raf = 0;
    let visible = true;
    let last = 0;

    const pos = (i: number) => ({ x: (i % cols) * spacing + spacing / 2, y: Math.floor(i / cols) * spacing + spacing / 2 });

    /** A short random walk over neighbouring dots (8-neighbourhood), never doubling straight back. */
    const makePath = (): number[] => {
      const total = cols * rows;
      let cur = Math.floor(Math.random() * total);
      const path = [cur];
      const hops = 3 + Math.floor(Math.random() * 3);
      for (let k = 0; k < hops; k++) {
        const cx = cur % cols;
        const cy = Math.floor(cur / cols);
        const options: number[] = [];
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            if (!dx && !dy) continue;
            const nx = cx + dx * (1 + Math.round(Math.random()));
            const ny = cy + dy * (1 + Math.round(Math.random()));
            if (nx < 0 || ny < 0 || nx >= cols || ny >= rows) continue;
            const idx = ny * cols + nx;
            if (!path.includes(idx)) options.push(idx);
          }
        }
        if (!options.length) break;
        cur = options[Math.floor(Math.random() * options.length)];
        path.push(cur);
      }
      return path;
    };

    const spawn = (now: number, stagger = 0): Pulse => ({
      path: makePath(),
      born: now + stagger,
      life: 5200 + Math.random() * 2600,
      rgb: Math.random() < 0.35 ? AMBER : GREEN,
    });

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.max(1, Math.ceil(w / spacing));
      rows = Math.max(1, Math.ceil(h / spacing));
      const target = Math.max(5, Math.min(16, Math.round((w * h) / 70000)));
      const now = performance.now();
      pulses = Array.from({ length: target }, (_, i) => spawn(now, i * 650));
    };

    const drawDots = () => {
      ctx.fillStyle = "rgba(255,255,255,0.11)";
      for (let i = 0; i < cols * rows; i++) {
        const { x, y } = pos(i);
        ctx.fillRect(x - 0.75, y - 0.75, 1.5, 1.5);
      }
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible || now - last < 32) return; // ~30fps is plenty and keeps it light
      last = now;
      ctx.clearRect(0, 0, w, h);
      drawDots();

      pulses.forEach((p, n) => {
        const t = (now - p.born) / p.life;
        if (t >= 1) {
          pulses[n] = spawn(now, Math.random() * 1200);
          return;
        }
        if (t < 0) return;
        // Draw in over the first 55%, hold, then fade away over the last 30%.
        const grow = Math.min(1, t / 0.55);
        const fade = t < 0.7 ? 1 : 1 - (t - 0.7) / 0.3;
        const segs = p.path.length - 1;
        const reach = grow * segs;

        ctx.lineWidth = 1;
        for (let k = 0; k < segs; k++) {
          const f = Math.max(0, Math.min(1, reach - k));
          if (f <= 0) break;
          const a = pos(p.path[k]);
          const b = pos(p.path[k + 1]);
          ctx.strokeStyle = `rgba(${p.rgb},${0.5 * fade})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(a.x + (b.x - a.x) * f, a.y + (b.y - a.y) * f);
          ctx.stroke();
        }
        for (let k = 0; k < p.path.length; k++) {
          if (reach < k - 0.001) break;
          const { x, y } = pos(p.path[k]);
          ctx.fillStyle = `rgba(${p.rgb},${0.13 * fade})`;
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = `rgba(${p.rgb},${0.95 * fade})`;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    };

    size();
    if (reduced) {
      drawDots();
    } else {
      raf = requestAnimationFrame(frame);
    }

    const ro = new ResizeObserver(() => {
      size();
      if (reduced) drawDots();
    });
    ro.observe(parent);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0 });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [spacing]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]",
        className,
      )}
    />
  );
}
