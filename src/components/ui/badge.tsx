import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-brand-blue/30 bg-brand-blue/10 text-brand-blue",
        secondary: "border-foreground/10 bg-foreground/[0.05] text-muted-foreground",
        outline: "border-foreground/15 text-foreground",
        violet: "border-brand-violet/30 bg-brand-violet/10 text-violet-400",
        cyan: "border-brand-cyan/30 bg-brand-cyan/10 text-cyan-400",
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
