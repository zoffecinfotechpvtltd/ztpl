import Image from "next/image";
import Link from "next/link";

/**
 * Brand assets — uses the real artwork in /public.
 *  - logo-header.png : mark + ZTPL wordmark, black backdrop keyed out, tagline removed (it is unreadable at header size)
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
        src="/logo-header.png"
        alt="ZTPL — Compliance Simplified"
        width={900}
        height={288}
        priority
        sizes="180px"
        className="h-9 w-auto transition-opacity duration-500 group-hover:opacity-85 sm:h-10"
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
      width={900}
        height={288}
      sizes="200px"
      className={`rounded-3xl ${className}`}
    />
  );
}
