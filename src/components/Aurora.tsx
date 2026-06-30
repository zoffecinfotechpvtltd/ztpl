/**
 * Fixed, full-page ambient background — soft green + yellow aurora blobs
 * over a faint grid, tinted to match the logo. Purely decorative.
 */
export function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base grid */}
      <div className="absolute inset-0 bg-grid-faint bg-[size:64px_64px] opacity-[0.4] [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]" />

      {/* green aurora — top left */}
      <div className="absolute -left-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-green/20 blur-[140px] animate-aurora" />
      {/* yellow aurora — top right */}
      <div className="absolute -right-32 top-10 h-[34rem] w-[34rem] rounded-full bg-yellow/12 blur-[150px] animate-aurora-slow" />
      {/* deep green — lower center */}
      <div className="absolute left-1/3 top-[60%] h-[36rem] w-[36rem] rounded-full bg-green-deep/15 blur-[160px] animate-aurora" />

      {/* film grain */}
      <div className="absolute inset-0 bg-noise opacity-[0.035] mix-blend-soft-light" />

      {/* vignette to keep edges deep */}
      <div className="absolute inset-0 [background:radial-gradient(120%_120%_at_50%_-10%,transparent_55%,#070809_100%)]" />
    </div>
  );
}
