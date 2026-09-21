"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";

type HeaderProps = {
  /** Stay fully transparent at the top of the page, turning to glass after ~40px of scroll. */
  transparentOnLoad?: boolean;
};

export function Header({ transparentOnLoad = true }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  const solid = scrolled || !transparentOnLoad;
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const underlineFor = hovered ?? nav.find((n) => isActive(n.href))?.href ?? null;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-primary"
      />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          solid
            ? "border-foreground/10 bg-background/80 backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="container flex h-16 items-center justify-between lg:h-[72px]">
          <Logo />

          <NavigationMenu aria-label="Primary" className="hidden lg:flex">
            <NavigationMenuList onMouseLeave={() => setHovered(null)}>
              {nav.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild active={isActive(item.href)}>
                    <Link
                      href={item.href}
                      onMouseEnter={() => setHovered(item.href)}
                      onFocus={() => setHovered(item.href)}
                      onBlur={() => setHovered(null)}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "relative block px-4 py-2 text-sm font-medium transition-colors",
                        isActive(item.href) || hovered === item.href
                          ? "text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      {item.label}
                      {underlineFor === item.href && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-primary"
                          transition={{ type: "spring", stiffness: 500, damping: 38 }}
                        />
                      )}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-3">
            <Button asChild variant="gradient" size="sm" className="hidden sm:inline-flex">
              <Link href="/contact">Book a Demo</Link>
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Toggle menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </DialogTrigger>
              <DialogContent
                id="mobile-menu"
                hideClose
                className="left-0 top-0 h-dvh max-w-none translate-x-0 translate-y-0 content-start gap-0 rounded-none border-0 bg-background/95 p-0 backdrop-blur-xl"
              >
                <DialogTitle className="sr-only">Menu</DialogTitle>
                <DialogDescription className="sr-only">Site navigation</DialogDescription>
                <div className="container flex h-16 items-center justify-between">
                  <Logo />
                  <DialogClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="h-6 w-6" />
                    </Button>
                  </DialogClose>
                </div>
                <AnimatePresence>
                  <nav aria-label="Mobile" className="container mt-8 flex flex-col gap-2">
                    {nav.map((item, i) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.06 * i + 0.05, duration: 0.35 }}
                      >
                        <DialogClose asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "block border-b border-foreground/10 py-4 text-3xl font-bold tracking-tight",
                              isActive(item.href) ? "gradient-text" : "text-foreground",
                            )}
                          >
                            {item.label}
                          </Link>
                        </DialogClose>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.06 * nav.length + 0.1, duration: 0.35 }}
                      className="mt-8"
                    >
                      <DialogClose asChild>
                        <Button asChild variant="gradient" size="lg" className="w-full">
                          <Link href="/contact">Book a Demo</Link>
                        </Button>
                      </DialogClose>
                    </motion.div>
                  </nav>
                </AnimatePresence>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>
    </>
  );
}
