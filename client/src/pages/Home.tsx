import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import WhyMatterhorn from "@/components/WhyMatterhorn";
import AboutMatterhorn from "@/components/AboutMatterhorn";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import ProcessSection from "@/components/ProcessSection";
import MarketSegments from "@/components/MarketSegments";
import DetailedMarkets from "@/components/DetailedMarkets";
import CaseStudies from "@/components/CaseStudies";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import TeamSection from "@/components/TeamSection";
import BrokerCTA from "@/components/BrokerCTA";
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
      <TechnologyShowcase />
      <ProcessSection />
      <MarketSegments />
      <DetailedMarkets />
      <CaseStudies />
      <TestimonialsSection />
      <PartnershipsSection />
      <TeamSection />
      <BrokerCTA />
      <Footer />
    </div>
  );
}
