import type { Metadata } from "next";
import { ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

export const metadata: Metadata = {
  title: "Style guide",
  robots: { index: false, follow: false },
};

const swatches = [
  { name: "background", cls: "bg-background" },
  { name: "surface", cls: "bg-surface" },
  { name: "card", cls: "bg-card" },
  { name: "muted", cls: "bg-muted" },
  { name: "border", cls: "bg-border" },
  { name: "primary", cls: "bg-primary" },
  { name: "brand-blue", cls: "bg-brand-blue" },
  { name: "brand-cyan", cls: "bg-brand-cyan" },
  { name: "brand-violet", cls: "bg-brand-violet" },
  { name: "brand-fuchsia", cls: "bg-brand-fuchsia" },
  { name: "success", cls: "bg-success" },
  { name: "destructive", cls: "bg-destructive" },
];

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-12">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">{title}</h2>
      {children}
    </section>
  );
}

export default function StyleGuidePage() {
  return (
    <div className="container py-24">
      <h1 className="mb-2 text-5xl font-bold md:text-7xl">
        Style <span className="gradient-text">guide</span>
      </h1>
      <p className="mb-12 max-w-xl">
        Every token, gradient, type size, and component variant in the ZTPL design system. Internal route, not indexed.
      </p>

      <Block title="Color tokens">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {swatches.map((s) => (
            <div key={s.name}>
              <div className={`h-16 rounded-xl border border-foreground/10 ${s.cls}`} />
              <p className="mt-2 font-mono text-xs">{s.name}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Gradients & utilities">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="gradient-mesh-hero relative flex h-40 items-end overflow-hidden rounded-2xl border border-border p-4">
            <div className="grid-pattern absolute inset-0" />
            <span className="relative font-mono text-xs">.gradient-mesh-hero + .grid-pattern</span>
          </div>
          <div className="gradient-mesh-rich flex h-40 items-end rounded-2xl border border-border p-4">
            <span className="font-mono text-xs">.gradient-mesh-rich</span>
          </div>
          <div className="flex h-40 items-end rounded-2xl bg-gradient-primary p-4">
            <span className="font-mono text-xs text-white">bg-gradient-primary</span>
          </div>
          <div className="flex h-40 items-end rounded-2xl bg-gradient-secondary p-4">
            <span className="font-mono text-xs text-white">bg-gradient-secondary</span>
          </div>
          <div className="glass-card glow-border flex h-40 items-end p-4">
            <span className="font-mono text-xs">.glass-card .glow-border (hover)</span>
          </div>
          <div className="flex h-40 flex-col justify-end gap-1 rounded-2xl border border-border p-4">
            <span className="gradient-text text-2xl font-bold">.gradient-text</span>
            <span className="gradient-text-violet text-2xl font-bold">.gradient-text-violet</span>
          </div>
        </div>
      </Block>

      <Block title="Typography">
        <div className="space-y-4">
          <p className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl">H1 headline</p>
          <p className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">H2 section heading</p>
          <p className="text-2xl font-semibold text-foreground">H3 card heading</p>
          <p className="text-base md:text-lg">Body copy in muted foreground. Compliance, simplified.</p>
          <p className="font-mono text-sm">Geist Mono — HMAC-SHA256 · Annexure-K</p>
        </div>
      </Block>

      <Block title="Buttons">
        <div className="flex flex-wrap items-center gap-4">
          <Button>Default</Button>
          <Button variant="gradient" size="lg">Gradient <ArrowRight className="h-4 w-4" /></Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="link">Link</Button>
          <div className="rounded-2xl bg-gradient-cta p-4">
            <div className="flex gap-3">
              <Button variant="light" size="lg">Light</Button>
              <Button variant="outline-light" size="lg">Outline light</Button>
            </div>
          </div>
        </div>
      </Block>

      <Block title="Badges">
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="cyan">Cyan</Badge>
          <Badge variant="violet">Violet</Badge>
          <Badge variant="live">Live</Badge>
          <Badge variant="secondary"><Lock className="h-3 w-3" /> With icon</Badge>
        </div>
      </Block>

      <Block title="Card · Input · Textarea">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Card title</CardTitle>
              <CardDescription>Card description in muted text.</CardDescription>
            </CardHeader>
            <CardContent>Card content area.</CardContent>
          </Card>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sg-name">Name</Label>
              <Input id="sg-name" placeholder="Priya Sharma" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sg-msg">Message</Label>
              <Textarea id="sg-msg" placeholder="How can we help?" />
            </div>
          </div>
        </div>
      </Block>

      <Block title="Tabs · Accordion · Dialog · Navigation menu">
        <div className="grid gap-10 lg:grid-cols-2">
          <Tabs defaultValue="a">
            <TabsList>
              <TabsTrigger value="a">Tab A</TabsTrigger>
              <TabsTrigger value="b">Tab B</TabsTrigger>
            </TabsList>
            <TabsContent value="a" className="mt-4">Panel A</TabsContent>
            <TabsContent value="b" className="mt-4">Panel B</TabsContent>
          </Tabs>
          <Accordion type="single" collapsible>
            <AccordionItem value="1">
              <AccordionTrigger>Accordion question</AccordionTrigger>
              <AccordionContent>Accordion answer text.</AccordionContent>
            </AccordionItem>
          </Accordion>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Dialog title</DialogTitle>
              <DialogDescription>Dialog description.</DialogDescription>
            </DialogContent>
          </Dialog>
          <NavigationMenu>
            <NavigationMenuList>
              {["About", "Platform", "Services"].map((l) => (
                <NavigationMenuItem key={l}>
                  <NavigationMenuLink href="#" className="rounded-lg px-3 py-2 text-sm hover:text-foreground">
                    {l}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </Block>
    </div>
  );
}
