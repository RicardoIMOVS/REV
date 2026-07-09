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
    "Ecosistema de suplementos alimenticios para distribución, marca privada, ingredientes y BASE como marca propia de Revolution Pharma.",
};

export default function VersionOnePage() {
  return (
    <main
      className="rev-brand-dark font-evolve-sans min-h-screen bg-[#2F3E46] text-[#FAFAFA] selection:bg-[#FAFAFA] selection:text-[#0E0E0E]"
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
