import type { Metadata } from "next";
import { Suspense } from "react";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { DriftBlobs } from "@/components/ui/drift-blobs";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact - Book a Demo",
  description:
    "Talk to ZTPL about Aegis, Argus, or ExploitSense. Book a demo or reach our team at support@ztplsolutions.com.",
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
  { label: "Company", Icon: Building2, lines: [{ text: site.legalName }, { text: `CIN ${site.cin}` }] },
] as const;

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <DriftBlobs />
      <div className="container grid gap-20 pb-28 pt-40 lg:grid-cols-2 lg:pb-40 lg:pt-48">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">Contact</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] md:text-6xl">
            Let&apos;s talk <span className="gradient-text">platforms</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg">
            Book a demo of Aegis, ask about Argus or ExploitSense, or ask us anything about ZTPL. Tell us
            what you need - we meet you there.
          </p>

          <ul className="mt-12 space-y-5">
            {info.map(({ label, Icon, lines }) => (
              <li key={label} className="glass-card flex items-start gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
                  {lines.map((l) => (
                    <p key={l.text} className="mt-1 break-words text-base font-medium text-foreground">
                      {"href" in l ? (
                        <a href={l.href} className="transition-colors hover:text-brand-amber">
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
