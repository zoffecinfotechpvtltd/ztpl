"use client";

import { motion } from "framer-motion";
import { Database, KeyRound, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";

const pillars = [
  {
    title: "Your data, your residency",
    body: "Deploy on our managed cloud or entirely inside your own environment — full data residency and control when policy or regulation demands it.",
    Icon: Database,
  },
  {
    title: "Tamper-evident by design",
    body: "Every action across the platform is captured in an immutable, HMAC-SHA256-secured audit trail — defensible evidence, not an afterthought.",
    Icon: ShieldCheck,
  },
  {
    title: "Least privilege, enforced",
    body: "Access control and periodic review are built into the platform's data model, not bolted on as a policy document nobody checks.",
    Icon: KeyRound,
  },
];

export function WhoWeAre() {
  return (
    <Section tone="ink" seed="who" aria-labelledby="who-we-are">
      <div className="container">
        <SectionHeading
          eyebrow="Who we are"
          title={<span id="who-we-are">A technology company, not a single product</span>}
          description="Zoffec Technologies Private Limited builds security and compliance software for India's regulated businesses — three platforms, one engineering team, one operating standard."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pillars.map(({ title, body, Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.12 * i, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Card className={cn("glass-card glow-border h-full border-foreground/10 bg-foreground/[0.03] p-8")}>
                <span className="inline-flex rounded-full bg-gradient-primary p-px">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background text-brand-green">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                </span>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-base text-slate-400">{body}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
