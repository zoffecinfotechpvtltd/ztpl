import type { Certification } from "@/lib/site";

export function TrustBadgeRow({ items }: { items: Certification[] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((c) => (
        <li key={c.name} className="chip">
          <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden />
          <span>{c.name}</span>
          {c.body && <span className="text-ink-faint">· {c.body}</span>}
        </li>
      ))}
    </ul>
  );
}
