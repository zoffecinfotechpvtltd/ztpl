import Image from "next/image";
import Link from "next/link";

/**
 * Brand assets — uses the real artwork in /public.
 *  - logo-transparent.png : horizontallogo.png with its black backdrop keyed out, for header/footer on dark UI
 *  - horizontallogo.png : original opaque full lockup (mark + ZTPL + tagline)
 *  - logo.jpeg          : square lockup for hero feature / social cards
 */

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="ZTPL — Compliance Simplified. Home"
      className={`group inline-flex items-center ${className}`}
    >
      <Image
        src="/logo-transparent.png"
        alt="ZTPL — Compliance Simplified"
        width={360}
        height={121}
        priority
        sizes="140px"
        className="h-10 w-auto transition-transform duration-500 ease-smooth group-hover:scale-[1.03] sm:h-11"
      />
    </Link>
  );
}

/** Square brand mark image — for hero feature blocks and social cards. */
export function LogoSquare({ className = "h-40 w-40" }: { className?: string }) {
  return (
    <Image
      src="/logo.jpeg"
      alt="ZTPL"
      width={1242}
      height={1242}
      sizes="200px"
      className={`rounded-3xl ${className}`}
    />
  );
}
