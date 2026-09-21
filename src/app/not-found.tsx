import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="gradient-mesh-hero relative overflow-hidden">
      <div className="grid-pattern pointer-events-none absolute inset-0" aria-hidden />
      <div className="container relative flex min-h-[80vh] flex-col items-center justify-center pb-24 pt-32 text-center">
        <p className="gradient-text text-7xl font-bold md:text-9xl">404</p>
        <h1 className="mt-4 text-3xl font-bold md:text-5xl">This page isn&apos;t in scope</h1>
        <p className="mt-4 max-w-md text-base">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back to something
          useful.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="gradient" size="lg">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/solutions">Explore Our Platforms →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
