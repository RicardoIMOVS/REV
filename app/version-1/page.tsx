import type { Metadata } from "next";
import { BaseFeatureSection } from "./_components/BaseFeatureSection";
import { BrandStatement } from "./_components/BrandStatement";
import { Footer } from "./_components/Footer";
import { HeroSection } from "./_components/HeroSection";
import { ManufacturingJourney } from "./_components/ManufacturingJourney";
import { Navigation } from "./_components/Navigation";
import { ServicesSection } from "./_components/ServicesSection";
import { SolutionPathsSection } from "./_components/SolutionPathsSection";
import { StartProjectSection } from "./_components/StartProjectSection";
import { TestimonialsFaqSection } from "./_components/TestimonialsFaqSection";
import { WhyRevolutionSection } from "./_components/WhyRevolutionSection";

export const metadata: Metadata = {
  title: "REVOLUTION PHARMA | Ecosistema de suplementos",
  description:
    "Sitio visual corporativo para presentar distribución, marca blanca, ingredientes y BASE como líneas de negocio de Revolution Pharma.",
};

export default function VersionOnePage() {
  return (
    <main
      className="font-evolve-sans min-h-screen bg-[#f6fafd] text-[#171c1f] selection:bg-black selection:text-white"
    >
      <Navigation />
      <HeroSection />
      <SolutionPathsSection />
      <BrandStatement />
      <WhyRevolutionSection />
      <ManufacturingJourney />
      <ServicesSection />
      <BaseFeatureSection />
      <TestimonialsFaqSection />
      <StartProjectSection />
      <Footer />
    </main>
  );
}
