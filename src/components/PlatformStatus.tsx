import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Platform } from "@/lib/platforms";

/** "Live" for deployed platforms, "Coming soon" for the rest. */
export function StatusBadge({ platform, live = "Live" }: { platform: Platform; live?: string }) {
  return platform.status === "live" ? (
    <Badge variant="live">{live}</Badge>
  ) : (
    <Badge variant="secondary">
      <Clock className="h-3 w-3" aria-hidden /> Coming soon
    </Badge>
  );
}

/** Launch link for live platforms; an early-access enquiry for the ones still in development. */
export function LaunchButton({ platform }: { platform: Platform }) {
  if (platform.status === "live" && platform.externalHref) {
    return (
      <Button asChild variant="outline" size="lg">
        <a href={platform.externalHref} target="_blank" rel="noopener noreferrer">
          Launch Platform <ArrowRight className="h-4 w-4" />
        </a>
      </Button>
    );
  }
  return (
    <Button asChild variant="outline" size="lg">
      <Link href={`/contact?interest=${platform.slug}`}>
        Get early access <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
  );
}

/** Href/label pair for the closing CTA banner's secondary button. */
export function launchCta(platform: Platform) {
  return platform.status === "live" && platform.externalHref
    ? { label: "Launch Platform", href: platform.externalHref }
    : { label: "Get early access", href: `/contact?interest=${platform.slug}` };
}
