import { ArrowLeftRight, Building2, Landmark, Network, ShieldCheck, TrendingUp, UserCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/section";

const sectors: { label: string; Icon: LucideIcon }[] = [
  { label: "Stock Brokers", Icon: TrendingUp },
  { label: "Asset Management Companies", Icon: Building2 },
  { label: "Depository Participants", Icon: Landmark },
  { label: "Registered Investment Advisers", Icon: UserCheck },
  { label: "Market Infrastructure Institutions", Icon: Network },
  { label: "Clearing Corporations", Icon: ArrowLeftRight },
  { label: "MSSPs & GRC Consultancies", Icon: ShieldCheck },
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={hidden || undefined}>
      {sectors.map(({ label, Icon }) => (
        <li
          key={label}
          className="glass-card flex shrink-0 items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium text-foreground/90"
        >
          <Icon className="h-4 w-4 text-brand-green" aria-hidden />
          {label}
        </li>
      ))}
    </ul>
  );
}

export function SectorsMarquee() {
  return (
    <Section tone="ink" pad="sm" seed="sectors" aria-label="Sectors we serve">
      <div className="container">
        <h2 className="mx-auto max-w-2xl text-balance text-center text-xl font-medium text-slate-300 md:text-2xl">
          Built for SEBI-regulated entities &amp; the firms that serve them
        </h2>
      </div>

      <div className="mask-fade-x mt-10 overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <Row />
          <Row hidden />
        </div>
      </div>

    </Section>
  );
}
