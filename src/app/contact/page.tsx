import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { DriftBlobs } from "@/components/ui/drift-blobs";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Book a Demo",
  description:
    "Talk to ZTPL about Zoffec Aegis, Argus, or ExploitSense. Book a demo or reach our team at support@ztplsolutions.com.",
  alternates: { canonical: "/contact" },
};

const info = [
  {
    label: "Email",
    Icon: Mail,
    lines: [{ text: site.email, href: `mailto:${site.email}` }],
  },
  {
    label: "Phone",
    Icon: Phone,
    lines: [
      { text: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
      { text: site.phoneAlt, href: `tel:${site.phoneAlt.replace(/\s/g, "")}` },
    ],
  },
  { label: "Location", Icon: MapPin, lines: [{ text: site.location }] },
] as const;

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <DriftBlobs />
      <div className="container grid gap-16 pb-24 pt-32 lg:grid-cols-2 lg:pb-32 lg:pt-40">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">Contact</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] md:text-6xl">
            Let&apos;s talk <span className="gradient-text">platforms</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg">
            Book a demo of Zoffec Aegis, ask about Argus or ExploitSense, or ask us anything about ZTPL. Tell us
            what you need — we meet you there.
          </p>

          <ul className="mt-10 space-y-4">
            {info.map(({ label, Icon, lines }) => (
              <li key={label} className="glass-card flex items-start gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
                  {lines.map((l) => (
                    <p key={l.text} className="mt-1 break-words text-base font-medium text-foreground">
                      {"href" in l ? (
                        <a href={l.href} className="transition-colors hover:text-brand-cyan">
                          {l.text}
                        </a>
                      ) : (
                        l.text
                      )}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          {/* Decorative location graphic — not an interactive map */}
          <div
            aria-hidden
            className="glass-card relative mt-6 flex h-36 items-center justify-center overflow-hidden"
          >
            <div className="grid-pattern absolute inset-0" />
            <div className="absolute h-40 w-40 rounded-full border border-brand-cyan/20" />
            <div className="absolute h-24 w-24 rounded-full border border-brand-cyan/30" />
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan/70" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-cyan" />
            </span>
            <span className="absolute bottom-3 right-4 font-mono text-[11px] text-muted-foreground">
              Mumbai · 19.07°N 72.88°E
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Suspense fallback={<div className="glass-card h-[32rem] rounded-3xl" aria-hidden />}>
            <ContactForm />
          </Suspense>
        </Reveal>
      </div>
    </div>
  );
}
