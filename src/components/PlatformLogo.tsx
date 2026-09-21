import Image from "next/image";
import type { Platform } from "@/lib/platforms";
import { cn } from "@/lib/utils";

/** The product's real mark if we have one, otherwise a neutral glyph in its accent colour. */
export function PlatformMark({ platform, size = 28, className }: { platform: Platform; size?: number; className?: string }) {
  if (platform.mark) {
    return (
      <Image
        src={platform.mark}
        alt=""
        width={size * 2}
        height={size * 2}
        className={cn("object-contain", className)}
        style={{ width: size, height: size }}
      />
    );
  }
  const Icon = platform.Icon;
  return <Icon className={cn(platform.accent.text, className)} style={{ width: size, height: size }} aria-hidden />;
}

/** Large product header: the real lockup when available (Aegis), else nothing - the gradient name carries it. */
export function PlatformWordmark({ platform, className }: { platform: Platform; className?: string }) {
  if (!platform.wordmark) return null;
  const { src, width, height } = platform.wordmark;
  return (
    <Image
      src={src}
      alt={`${platform.name} logo`}
      width={width}
      height={height}
      className={cn("h-16 w-auto md:h-20", className)}
    />
  );
}
