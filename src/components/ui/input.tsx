import * as React from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-xl border border-foreground/15 bg-foreground/[0.03] px-4 text-sm text-foreground placeholder:text-muted-foreground/70 transition-shadow focus-visible:border-brand-blue/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50 disabled:opacity-60 aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/30";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input type={type} ref={ref} className={cn(fieldBase, "h-11", className)} {...props} />
  ),
);
Input.displayName = "Input";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn(fieldBase, "min-h-[120px] py-3", className)} {...props} />
  ),
);
Textarea.displayName = "Textarea";

export { Input, Textarea };
