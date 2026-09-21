import { cn } from "@/lib/utils";

/** Slow, low-opacity gradient blobs behind page content. Pure CSS animation. */
export function DriftBlobs({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className="absolute -left-40 top-[8%] h-[32rem] w-[32rem] animate-drift rounded-full bg-brand-green/[0.08] blur-3xl" />
      <div
        className="absolute -right-40 top-[38%] h-[36rem] w-[36rem] animate-drift rounded-full bg-brand-amber/[0.07] blur-3xl"
        style={{ animationDelay: "-8s", animationDuration: "30s" }}
      />
      <div
        className="absolute -left-20 bottom-[6%] h-[30rem] w-[30rem] animate-drift rounded-full bg-brand-green/[0.06] blur-3xl"
        style={{ animationDelay: "-16s", animationDuration: "28s" }}
      />
    </div>
  );
}
