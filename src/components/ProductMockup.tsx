import type { Platform } from "@/lib/platforms";
import { cn } from "@/lib/utils";

const bars = [38, 62, 46, 78, 54, 90, 68, 82];
const rows = [72, 58, 84, 46];

/** Illustrative dashboard stand-in — swap for a real screenshot when one exists. */
export function ProductMockup({ platform, className }: { platform: Platform; className?: string }) {
  const a = platform.accent;
  return (
    <figure className={cn("w-full", className)}>
      <div className={cn("glass-card overflow-hidden border", a.border, a.glow)}>
        <div className="flex items-center gap-2 border-b border-foreground/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
          <span className="ml-3 truncate rounded-md bg-foreground/[0.05] px-3 py-1 font-mono text-[11px] text-muted-foreground">
            {platform.externalHref.replace("https://", "")}
          </span>
        </div>

        <div className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[4.5rem_1fr]" aria-hidden>
          <div className="space-y-3 border-r border-foreground/10 p-3">
            <span className={cn("block h-7 w-7 rounded-lg bg-gradient-to-br", a.gradientBg)} />
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className={cn("block h-2 rounded-full", i === 1 ? a.soft : "bg-foreground/10")} />
            ))}
          </div>

          <div className="space-y-4 p-4">
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-xl border border-foreground/10 bg-foreground/[0.03] p-3">
                  <span className="block h-1.5 w-8 rounded-full bg-foreground/15" />
                  <span className={cn("mt-2 block h-4 w-10 rounded-md", i === 0 ? a.soft : "bg-foreground/10")} />
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-foreground/10 bg-foreground/[0.03] p-3">
              <div className="flex h-24 items-end gap-2">
                {bars.map((h, i) => (
                  <span
                    key={i}
                    className={cn(
                      "flex-1 rounded-t-md bg-gradient-to-t",
                      a.gradientBg,
                      i % 3 === 0 ? "opacity-90" : "opacity-45",
                    )}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-2">
              {rows.map((w, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg bg-foreground/[0.03] px-3 py-2">
                  <span className={cn("h-2 w-2 rounded-full", a.dot)} />
                  <span className="h-1.5 rounded-full bg-foreground/15" style={{ width: `${w}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted-foreground/70">
        Illustrative preview — {platform.name}
      </figcaption>
    </figure>
  );
}
