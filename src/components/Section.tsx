import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="heading mt-4 text-3xl sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-ink-muted">{intro}</p>}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="container-px">
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
