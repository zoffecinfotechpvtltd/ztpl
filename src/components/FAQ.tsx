import { faqs } from "@/lib/site";

/**
 * Native <details>/<summary> accordion — no JS/library needed, fully
 * keyboard- and screen-reader-operable by default.
 */
export function FAQ() {
  return (
    <div className="mx-auto mt-12 max-w-3xl divide-y divide-line rounded-xl border border-line bg-bg-card/40">
      {faqs.map((f) => (
        <details key={f.question} className="group p-6 open:pb-6">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-medium text-ink marker:content-none">
            {f.question}
            <span
              aria-hidden
              className="mt-0.5 shrink-0 text-lg text-ink-faint transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            {f.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
