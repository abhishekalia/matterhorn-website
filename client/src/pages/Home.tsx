import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import WhyMatterhorn from "@/components/WhyMatterhorn";
import MarketSegments from "@/components/MarketSegments";
import DetailedMarkets from "@/components/DetailedMarkets";
import CaseStudies from "@/components/CaseStudies";
import PartnershipsSection from "@/components/PartnershipsSection";
import TeamSection from "@/components/TeamSection";
import BrokerCTA from "@/components/BrokerCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <WhyMatterhorn />
      <MarketSegments />
      <DetailedMarkets />
      <CaseStudies />
      <PartnershipsSection />
      <TeamSection />
      <BrokerCTA />
      <Footer />
    </div>
  );
}
