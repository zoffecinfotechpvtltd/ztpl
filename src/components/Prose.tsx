import type { ReactNode } from "react";

/** Styled container for long-form legal/content pages. */
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
    <article className="container pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>
        <div className="mt-10 space-y-6 text-base leading-relaxed">{children}</div>
      </div>
    </article>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="pt-4 text-xl font-semibold text-foreground">{children}</h2>;
}
