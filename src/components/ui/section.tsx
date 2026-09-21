import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLElement> & {
  /** Background band. Alternate `ink` / `slate` down a page so neighbouring sections read as separate pieces. `none` = bring your own. */
  tone?: "ink" | "slate" | "none";
  /** Drives where the small seam tab lands, so it differs on each seam; use a different value per section. */
  seed: string;
  pad?: "md" | "sm" | "none";
  /** Small tab of this section's colour that locks into the section above. */
  knob?: boolean;
};

const tones = { ink: "bg-background", slate: "bg-surface", none: "" } as const;
// Generous vertical rhythm: whitespace is part of the design.
const pads = { md: "py-24 lg:py-36", sm: "py-16 lg:py-20", none: "" } as const;

/** Stable 12–86 % so the tab lands somewhere different on each seam. */
function knobLeft(seed: string) {
  let h = 5381;
  for (let i = 0; i < seed.length; i++) h = (h * 33) ^ seed.charCodeAt(i);
  return 12 + ((h >>> 0) % 75);
}

/**
 * Full-bleed page section. Sections sit flush against each other with an alternating tone, a hairline seam and a
 * small interlocking tab; all the breathing room lives inside each section's padding.
 */
export function Section({ tone = "ink", seed, pad = "md", knob = true, className, children, ...rest }: Props) {
  return (
    <section className={cn("relative isolate", tones[tone], pads[pad], className)} {...rest}>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
      {knob && tone !== "none" && (
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute top-[-9px] z-10 h-[10px] w-24 rounded-t-2xl border border-b-0 border-foreground/10",
            tones[tone],
          )}
          style={{ left: `${knobLeft(seed)}%` }}
        />
      )}
      {children}
    </section>
  );
}
