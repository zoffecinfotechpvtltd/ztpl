/**
 * Testimonial slot. Not wired into any page yet — there is no real client
 * quote to show. Use once one exists; don't fill it with an invented quote.
 */
export function QuoteBlock({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <figure className="card border-l-2 border-l-green/50">
      <blockquote className="text-lg leading-relaxed text-ink">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 text-sm text-ink-muted">
        <span className="font-semibold text-ink">{author}</span> — {role}
      </figcaption>
    </figure>
  );
}
