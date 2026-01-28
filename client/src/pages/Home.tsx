import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import WhyMatterhorn from "@/components/WhyMatterhorn";
import AboutMatterhorn from "@/components/AboutMatterhorn";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import MarketSegments from "@/components/MarketSegments";
import CaseStudies from "@/components/CaseStudies";
import TeamSection from "@/components/TeamSection";
import BrokerCTA from "@/components/BrokerCTA";
import { FAQSection } from "@/components/broker/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen dark">
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <AboutMatterhorn />
      <StatsSection />
      <WhyMatterhorn />
      <MarketSegments />
      <TechnologyShowcase />
      <CaseStudies />
      <TeamSection />
      <FAQSection />
      <BrokerCTA />
      <Footer />
    </div>
  );
}
