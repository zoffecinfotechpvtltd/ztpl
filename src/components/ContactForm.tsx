"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  company: z.string().trim().min(1, "Please enter your company."),
  email: z.string().trim().min(1, "Please enter your work email.").email("Enter a valid email address."),
  message: z.string().trim().min(10, "Tell us a little more — at least 10 characters."),
  website: z.string().optional(), // honeypot
});

type Values = z.infer<typeof schema>;

/** Label + control + inline error, with a small scale-pulse while focused. */
function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <motion.div
      animate={{ scale: focused ? 1.012 : 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={() => setFocused(false)}
      className="space-y-2"
    >
      <Label htmlFor={id}>{label}</Label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-sm text-destructive"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const interests: Record<string, string> = {
  argus: "I'd like early access to Argus (network monitoring).",
  exploitsense: "I'd like early access to ExploitSense (threat exposure management).",
};

export function ContactForm() {
  const interest = useSearchParams().get("interest");
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: { message: (interest && interests[interest]) || "" },
  });

  const onSubmit = async (values: Values) => {
    setServerError(null);
    try {
      // /api/contact emails the enquiry to the support inbox over SMTP (see .env.example).
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      setStatus("sent");
    } catch (e) {
      setServerError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-blue-500/40 via-transparent to-violet-500/40 p-px shadow-[0_0_80px_-30px_rgb(59_130_246/0.7)]">
      <div className="glass-card rounded-3xl bg-card/80 p-8 md:p-10">
        <AnimatePresence mode="wait" initial={false}>
          {status === "sent" ? (
            <motion.div
              key="sent"
              role="status"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-12 text-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-success">
                <CheckCircle2 className="h-8 w-8" aria-hidden />
              </span>
              <h2 className="mt-6 text-2xl font-bold">Message sent</h2>
              <p className="mt-3 text-base text-foreground/90">Thanks — we&apos;ll be in touch.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field id="name" label="Name" error={errors.name?.message}>
                  <Input
                    id="name"
                    autoComplete="name"
                    placeholder="Priya Sharma"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name")}
                  />
                </Field>
                <Field id="company" label="Company" error={errors.company?.message}>
                  <Input
                    id="company"
                    autoComplete="organization"
                    placeholder="Acme Securities"
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? "company-error" : undefined}
                    {...register("company")}
                  />
                </Field>
              </div>
              {/* Honeypot: hidden from people and assistive tech, bots fill it in. */}
              <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="website">Website</label>
                <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
              </div>
              <Field id="email" label="Work email" error={errors.email?.message}>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  {...register("email")}
                />
              </Field>
              <Field id="message" label="How can we help?" error={errors.message?.message}>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your entity, your timeline, and what you'd like to see."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  {...register("message")}
                />
              </Field>

              {serverError && (
                <p role="alert" className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  {serverError}
                </p>
              )}

              <Button type="submit" variant="gradient" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                By submitting, you agree to be contacted about your enquiry. We don&apos;t share your details.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
