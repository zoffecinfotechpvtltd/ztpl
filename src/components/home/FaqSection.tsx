"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Which entities does SEBI CSCRF actually apply to?",
    a: "CSCRF applies to SEBI-Regulated Entities (REs) - categorised by size and complexity into different tiers, each with its own control expectations. Aegis maps your RE category to the right control set automatically, and our team can help you confirm applicability first.",
  },
  {
    q: "Cloud or on-premises - which deployment do we need?",
    a: "Both are supported on the same platform. Cloud gets you running fastest with managed updates and backups; on-premises gives you full data residency inside your own environment. The choice usually comes down to policy or regulatory requirement, not platform capability - either way, you get the same controls.",
  },
  {
    q: "How long does a typical CSCRF implementation take?",
    a: "It depends on your RE category and how much groundwork is already in place. A gap assessment is the fastest way to get a real timeline - it maps what you already have against Annexure-K and gives you a prioritised, scoped path instead of a guess.",
  },
  {
    q: "Can an MSSP or consultancy run multiple client entities in one account?",
    a: "Yes - Aegis is built multi-tenant from the ground up. Each client entity is fully isolated (no cross-contamination), while your team gets one workspace to manage assessments, evidence, and reporting across all of them.",
  },
  {
    q: "Can we talk to someone before committing to a platform?",
    a: "Yes. Book a short demo and we'll walk through Aegis, Argus, or ExploitSense against your own setup, and tell you plainly whether it fits.",
  },
];

export function FaqSection() {
  return (
    <Section tone="slate" seed="faq" aria-labelledby="faq">
      <div className="container grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">FAQ</p>
          <h2 id="faq" className="mt-4 text-3xl font-bold leading-[1.1] md:text-5xl">
            Common questions before you talk to us
          </h2>
          <p className="mt-5 text-base md:text-lg">
            Straight answers, no sales script. Still unsure? A short call usually settles it.
          </p>
          <Button asChild variant="gradient" size="lg" className="mt-8">
            <Link href="/contact">Talk to us</Link>
          </Button>
        </motion.div>

        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.08 * i, duration: 0.8 }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="glass-card rounded-xl border border-foreground/10 border-l-2 border-l-transparent px-5 transition-colors data-[state=open]:border-l-brand-green data-[state=open]:bg-foreground/[0.05]"
              >
                <AccordionTrigger className="text-base font-semibold md:text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base text-slate-400">{f.a}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
