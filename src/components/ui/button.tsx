import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        gradient:
          "bg-gradient-primary text-white shadow-[0_8px_30px_-10px_rgb(59_130_246)] hover:scale-[1.03] hover:shadow-[0_12px_40px_-8px_rgb(34_211_238/0.7)]",
        outline:
          "border border-foreground/15 bg-foreground/[0.03] text-foreground backdrop-blur hover:border-brand-blue/60 hover:bg-foreground/[0.06]",
        ghost: "text-foreground hover:bg-foreground/[0.06]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        light: "bg-white text-slate-900 shadow-lg hover:scale-[1.03] hover:shadow-xl",
        "outline-light":
          "border border-white/50 bg-white/10 text-white backdrop-blur hover:bg-white/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 rounded-lg px-6 text-sm",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-12 rounded-full px-8 text-base",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
