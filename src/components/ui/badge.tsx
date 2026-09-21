import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-brand-green/30 bg-brand-green/10 text-brand-green",
        amber: "border-brand-amber/30 bg-brand-amber/10 text-brand-amber",
        secondary: "border-foreground/10 bg-foreground/[0.05] text-muted-foreground",
        outline: "border-foreground/15 text-foreground",
        blue: "border-blue-400/30 bg-blue-500/10 text-blue-400",
        violet: "border-violet-400/30 bg-violet-500/10 text-violet-400",
        sky: "border-sky-400/30 bg-sky-500/10 text-sky-400",
        live: "border-success/30 bg-success/10 text-success",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {variant === "live" && (
        <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-success" aria-hidden />
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
