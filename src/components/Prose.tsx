import type { ReactNode } from "react";

/** Simple styled container for long-form legal/content pages. */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="container-px py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <h1 className="heading text-4xl sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-ink-faint">Last updated: {updated}</p>
        <div className="prose-legal mt-10 space-y-6 text-ink-muted">
          {children}
        </div>
      </div>
    </article>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="heading text-xl text-ink">{children}</h2>;
}
