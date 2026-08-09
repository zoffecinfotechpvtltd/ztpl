import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-green-glow" aria-hidden />
      <div className="container-px relative flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <span className="eyebrow">404</span>
        <h1 className="heading mt-5 text-4xl sm:text-5xl">
          This page isn&apos;t in scope
        </h1>
        <p className="mt-4 max-w-md text-ink-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back to something useful.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/solutions" className="btn-ghost">
            Explore Our Platforms →
          </Link>
        </div>
      </div>
    </section>
  );
}
