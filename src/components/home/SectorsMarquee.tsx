import { ArrowLeftRight, Building2, Landmark, Network, ShieldCheck, TrendingUp, UserCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const sectors: { label: string; Icon: LucideIcon }[] = [
  { label: "Stock Brokers", Icon: TrendingUp },
  { label: "Asset Management Companies", Icon: Building2 },
  { label: "Depository Participants", Icon: Landmark },
  { label: "Registered Investment Advisers", Icon: UserCheck },
  { label: "Market Infrastructure Institutions", Icon: Network },
  { label: "Clearing Corporations", Icon: ArrowLeftRight },
  { label: "MSSPs & GRC Consultancies", Icon: ShieldCheck },
];

const badges = ["SEBI CSCRF", "Annexure-K", "HMAC-SHA256 audit trail"];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={hidden || undefined}>
      {sectors.map(({ label, Icon }) => (
        <li
          key={label}
          className="glass-card flex shrink-0 items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium text-foreground/90"
        >
          <Icon className="h-4 w-4 text-brand-cyan" aria-hidden />
          {label}
        </li>
      ))}
    </ul>
  );
}

export function SectorsMarquee() {
  return (
    <section className="py-16 lg:py-24" aria-label="Sectors we serve">
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

      <ul className="container mt-10 flex flex-wrap justify-center gap-3">
        {badges.map((b) => (
          <li key={b} className="rounded-full bg-gradient-primary p-px">
            <span className="block rounded-full bg-background px-4 py-1.5 font-mono text-xs text-foreground/90">
              {b}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
