// client/src/pages/BrokerPage.tsx

import { useEffect } from "react";
import { Header } from "@/components/broker/Header";
import { HeroSection } from "@/components/broker/HeroSection";
import { CredoSection } from "@/components/broker/CredoSection";
import { ValueSection } from "@/components/broker/ValueSection";
import { TechnologySection } from "@/components/broker/TechnologySection";
import { ExpertiseSection } from "@/components/broker/ExpertiseSection";
import { ProgramsSection } from "@/components/broker/ProgramsSection";
import { MarketsSection } from "@/components/broker/MarketsSection";
import { MarketingSection } from "@/components/broker/MarketingSection";
import { MarketingLandingPagesSection } from "@/components/broker/MarketingLandingPagesSection";
import { CaseStudiesSection } from "@/components/broker/CaseStudiesSection";
import { AppointmentProcessSection } from "@/components/broker/AppointmentProcessSection";
import { ResourcesSection } from "@/components/broker/ResourcesSection";
import { FAQSection } from "@/components/broker/FAQSection";
import { DisclaimerSection } from "@/components/broker/DisclaimerSection";
import { Footer } from "@/components/broker/Footer";
import { FloatingCTA } from "@/components/broker/FloatingCTA";
import { CustomCursor } from "@/components/broker/CustomCursor";

export default function BrokerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToPrograms = () => {
    const element = document.getElementById("programs");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen dark">
      <CustomCursor />
      <Header />
      <main>
        <HeroSection onExploreProgramsClick={scrollToPrograms} />
        <CredoSection />
        <ValueSection />
        <TechnologySection />
        <ExpertiseSection />
        <ProgramsSection />
        <MarketsSection />
        <MarketingSection />
        <MarketingLandingPagesSection />
        <CaseStudiesSection />
        <AppointmentProcessSection />
        <ResourcesSection />
        <FAQSection />
        <DisclaimerSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
