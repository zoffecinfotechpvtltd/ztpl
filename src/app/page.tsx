import { Hero } from "@/components/home/Hero";
import { StatsBand } from "@/components/home/StatsBand";
import { SectorsMarquee } from "@/components/home/SectorsMarquee";
import { PlatformsTabs } from "@/components/home/PlatformsTabs";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { HowWeEngineer } from "@/components/home/HowWeEngineer";
import { HowWeWork } from "@/components/home/HowWeWork";
import { WhyZtpl } from "@/components/home/WhyZtpl";
import { FaqSection } from "@/components/home/FaqSection";
import { CTABanner } from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <SectorsMarquee />
      <PlatformsTabs />
      <WhoWeAre />
      <HowWeEngineer />
      <HowWeWork />
      <WhyZtpl />
      <FaqSection />
      <CTABanner />
    </>
  );
}
