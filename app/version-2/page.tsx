import type { Metadata } from "next";
import { BaseCaseStudy } from "./_components/BaseCaseStudy";
import { ContactFaqSection } from "./_components/ContactFaqSection";
import { DifferentiatorsSection } from "./_components/DifferentiatorsSection";
import { Footer } from "./_components/Footer";
import { HeroSection } from "./_components/HeroSection";
import { PhilosophySection } from "./_components/PhilosophySection";
import { ProcessSection } from "./_components/ProcessSection";
import { StatsSection } from "./_components/StatsSection";
import { TestimonialsSection } from "./_components/TestimonialsSection";
import { TopNav } from "./_components/TopNav";

export const metadata: Metadata = {
  title: "Revolution Pharma | Excelencia en Manufactura Biotecnologica",
  description:
    "Manufactura biotecnologica para marcas de suplementos de precision cientifica.",
};

export default function VersionTwoPage() {
  return (
    <main
      className="font-evolve-sans min-h-screen overflow-x-hidden bg-[#fbf9f9] text-[#1b1c1c] selection:bg-[#192830] selection:text-white"
    >
      <TopNav />
      <HeroSection />
      <PhilosophySection />
      <DifferentiatorsSection />
      <ProcessSection />
      <StatsSection />
      <BaseCaseStudy />
      <TestimonialsSection />
      <ContactFaqSection />
      <Footer />
    </main>
  );
}
