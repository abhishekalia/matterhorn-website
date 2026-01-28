import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Mountain,
  Truck,
  Users,
  Zap,
  BarChart3,
  FileCheck,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Award,
  TrendingUp,
  ChevronDown,
  Briefcase,
  Target,
  Calendar,
  Send,
  FileText,
  Database,
  Workflow,
  Car,
  Package,
  Star,
  MapPin,
  TrendingDown,
  Clock,
  DollarSign,
  Settings,
} from "lucide-react";

// Dark, inspiring color palette for Transportation
const NEON_COLORS = {
  amber: '#8b5cf6',      // Royal purple - primary
  cyan: '#06b6d4',       // Deep teal - secondary
  safetyGreen: '#c084fc', // Soft violet - accent
  electric: '#f59e0b',   // Warm gold - highlight
};
import { BrokerApplicationModal } from "@/components/BrokerApplicationModal";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import matterhornHero from "@assets/generated_images/Matterhorn_mountains_hero_background_315f6fa4.png";
import stephenAvatar from "@assets/stephen_mueller_avatar.png";
import johnAvatar from "@assets/john_warren_avatar.png";
import ryanAvatar from "@assets/ryan_wilson_avatar.png";

function useScrollAnimation() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const newSet = new Set(Array.from(prev));
              newSet.add(entry.target.id);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return visibleSections;
}

function ClosingSection() {
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);
  const letters = "MATTERHORN".split("");

  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden" data-testid="section-closing">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${matterhornHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/85 via-[#1B2A41]/80 to-[#0A1628]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6 group">
          {/* Logo Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 rounded-full scale-150" />
              <Mountain className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-primary group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>

          {/* Interactive Letter Hover Effect */}
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight flex justify-center"
            data-testid="text-closing-title"
          >
            {letters.map((letter, index) => (
              <span
                key={index}
                className="cursor-default transition-all duration-300 ease-out"
                style={{
                  color: hoveredLetter === index 
                    ? '#22d3ee' // cyan-400
                    : hoveredLetter !== null && Math.abs(hoveredLetter - index) === 1
                    ? '#06b6d4' // cyan-500
                    : hoveredLetter !== null && Math.abs(hoveredLetter - index) === 2
                    ? '#0891b2' // cyan-600
                    : '#00a8c7', // primary
                  textShadow: hoveredLetter === index 
                    ? '0 0 30px rgba(34, 211, 238, 0.8), 0 0 60px rgba(34, 211, 238, 0.4)' 
                    : hoveredLetter !== null && Math.abs(hoveredLetter - index) <= 2
                    ? '0 0 20px rgba(34, 211, 238, 0.3)'
                    : 'none',
                  transform: hoveredLetter === index 
                    ? 'translateY(-8px) scale(1.1)' 
                    : hoveredLetter !== null && Math.abs(hoveredLetter - index) === 1
                    ? 'translateY(-4px) scale(1.05)'
                    : 'translateY(0) scale(1)',
                  display: 'inline-block',
                }}
                onMouseEnter={() => setHoveredLetter(index)}
                onMouseLeave={() => setHoveredLetter(null)}
              >
                {letter}
              </span>
            ))}
          </h2>
          
          <p 
            className="text-lg md:text-xl lg:text-2xl uppercase tracking-[0.3em] mt-4 font-semibold text-primary drop-shadow-md"
            data-testid="text-closing-subtitle"
          >
            Transportation
          </p>
          <p className="text-white/70 mt-4 text-sm md:text-base max-w-xl mx-auto">
            Specialty insurance programs built for the modern transportation industry
          </p>
        </div>
      </div>
    </section>
  );
}

export default function TransportationPage() {
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const visibleSections = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getAnimationClass = (sectionId: string, delay: number = 0) => {
    const baseClasses = "transition-all duration-700 ease-out";
    const hiddenClasses = "opacity-0 translate-y-8";
    const visibleClasses = "opacity-100 translate-y-0";
    
    return `${baseClasses} ${visibleSections.has(sectionId) ? visibleClasses : hiddenClasses}`;
  };

  const stats = [
    { value: "17+", label: "A-Rated Transportation Markets" },
    { value: "30+", label: "A-Rated Markets Across Specialty" },
    { value: "50", label: "States Covered" },
    { value: "80+", label: "Years Combined Experience" },
  ];

  const marketSegments = [
    {
      title: "Motor Carrier + Independent Contractors",
      description: "Scalable onboarding, compliance-ready documentation, simpler adds/deletes.",
      coverage: "OA, CL, WC, PD, NTL",
      icon: Briefcase,
      highlight: "Turnkey protection for 1099 fleets and gig workers",
    },
    {
      title: "Logistics & Freight Brokers",
      description: "Operational liability clarity, contract-driven support, claims-ready documentation.",
      coverage: "Contingent Cargo, Errors & Omissions, General Liability",
      icon: Package,
      highlight: "Comprehensive protection for brokerage operations",
    },
  ];

  const featuredPrograms = [
    {
      title: "Ride Share",
      description: "Comprehensive coverage solutions for TNC drivers and platforms with evolving exposures and driver-centric workflows.",
      coverage: "TNC Coverage, Last-Mile, P2P, Gap Coverage",
      icon: Car,
      highlight: "Dynamic coverage for the modern gig economy",
    },
    {
      title: "Association Programs",
      description: "Custom-built insurance programs for trade associations and member organizations with group buying power.",
      coverage: "Group Programs, Member Benefits, Affinity Coverage",
      icon: Users,
      highlight: "Leverage collective strength for better rates",
    },
  ];

  const marketCuration = [
    {
      title: "Market Curation",
      items: ["A-rated carrier focus", "Strict appetite matching", "Capacity discipline", "Claims philosophy alignment"],
      icon: Target,
    },
    {
      title: "UW Enablement",
      items: ["Class-specific underwriting", "Clear submission requirements", "Direct broker feedback loop", "Fast indication turnarounds"],
      icon: FileCheck,
    },
    {
      title: "Placement Strategy",
      items: ["Coverage architecture design", "Pricing strategy support", "Proactive renewal strategy", "Risk control coordination"],
      icon: TrendingUp,
    },
  ];

  const techFeatures = [
    {
      title: "Monthly Driver Reporting",
      description: "Automated tools to track and report driver schedules monthly.",
      icon: Calendar,
    },
    {
      title: "Equipment Reporting Tools",
      description: "Real-time dashboards for fleet asset management.",
      icon: BarChart3,
    },
    {
      title: "Digital COIs",
      description: "Instant certificate generation and management.",
      icon: FileCheck,
    },
    {
      title: "Broker Dashboard",
      description: "Track every submission step in real-time.",
      icon: Database,
    },
    {
      title: "Servicing Workflow",
      description: "Structured requests for faster endorsements.",
      icon: Workflow,
    },
    {
      title: "API Integration",
      description: "Connect with existing TMS and dispatch systems.",
      icon: Settings,
    },
  ];

  const caseStudies = [
    {
      category: "IC Markets",
      title: "Scaling an Independent Contractor Group",
      challenge: "Manual driver tracking and slow coverage deployment were stifling growth for a 500-unit IC fleet. The broker was losing business to competitors with faster turnaround.",
      solution: "Implemented Matterhorn's automated driver onboarding platform with real-time compliance monitoring and instant COI generation.",
      brokerBenefits: [
        "Reduced administrative workload by 75%",
        "Faster quote-to-bind cycle (24-48 hours vs 2 weeks)",
        "Competitive commission structure preserved",
        "Single point of contact for all IC coverage needs",
      ],
      clientBenefits: [
        "Drivers onboarded in minutes instead of days",
        "Real-time compliance monitoring prevents lapses",
        "Digital COI delivery meets shipper requirements instantly",
        "Scalable solution supports unlimited growth",
      ],
      results: { premium: "$2.4M", drivers: "500+", turnaround: "24hrs" },
    },
    {
      category: "Motor Carrier",
      title: "Modernizing a Mid-Sized Motor Carrier",
      challenge: "A 45-truck fleet faced rising premiums and fragmented coverage across multiple carriers. Loss history was impacting renewals.",
      solution: "Consolidated coverage with A-rated markets and implemented risk control coordination to address loss trends.",
      brokerBenefits: [
        "Consolidated book simplifies servicing",
        "Proactive renewal strategy reduces churn risk",
        "Access to markets with better loss tolerance",
        "Enhanced commission on consolidated placement",
      ],
      clientBenefits: [
        "15% premium reduction through consolidation",
        "Improved claims handling with single carrier",
        "Risk control resources to reduce future losses",
        "Stable, long-term market relationship",
      ],
      results: { premium: "$890K", savings: "15%", retention: "100%" },
    },
    {
      category: "Logistics / Brokerage",
      title: "High-Value Logistics Liability",
      challenge: "A freight broker needed high-limit contingent cargo coverage for electronics shipments but faced capacity issues. Traditional markets declined due to commodity class.",
      solution: "Structured a layered program with specialized markets that understand high-value freight exposures.",
      brokerBenefits: [
        "Access to capacity others couldn't find",
        "Positioning as a specialty solutions provider",
        "Retained and grew a strategic account",
        "Demonstrated value beyond commodity coverage",
      ],
      clientBenefits: [
        "$5M contingent cargo limits secured",
        "Coverage for electronics, pharmaceuticals, high-value freight",
        "Contract-compliant documentation for shippers",
        "Claims-ready policy structure",
      ],
      results: { limits: "$5M", commodity: "Electronics", placement: "45 days" },
    },
  ];

  const whyMatterhorn = [
    {
      title: "Boutique Focus",
      description: "We aren't big box brokers. We are specialized, agile, and focused on solving problems the giants ignore.",
      icon: Star,
    },
    {
      title: "Niche Problem Solvers",
      description: "Our forte is complex programs and unique exposures that others turn down. Clearer appetite and fewer NTUs.",
      icon: Target,
    },
    {
      title: "IC & Owner-Operator Specialists",
      description: "Deep expertise in OA, CL, PD, and NTL products. Indications in 24-48 hours, most quotes within 5 business days.",
      icon: Truck,
    },
    {
      title: "Tech-Enabled Management",
      description: "Monthly driver reporting, equipment dashboards, and digital COIs to streamline administration.",
      icon: Settings,
    },
  ];

  const appointmentFlow = [
    { step: 1, title: "Apply / Get Appointed" },
    { step: 2, title: "Submit Once (Digital App)" },
    { step: 3, title: "Market Matching" },
    { step: 4, title: "Bind & Onboard" },
    { step: 5, title: "Ongoing Automation" },
  ];

  const leadership = [
    {
      name: "Stephen Mueller",
      title: "Managing Partner",
      description: "A veteran of the transportation insurance industry, Stephen brings deep expertise in program design and carrier relations. His background spans executive roles at major MGUs and carriers.",
      territory: "National",
      image: stephenAvatar,
    },
    {
      name: "John Warren",
      title: "Managing Partner",
      description: "With a career dedicated to specialty risk, John combines underwriting discipline with strategic vision. His leadership has been instrumental in developing high-performance teams.",
      territory: "National",
      image: johnAvatar,
    },
    {
      name: "Ryan Wilson",
      title: "VP of Broker Engagement",
      description: "Ryan specializes in building strong broker relationships and ensuring seamless onboarding. His focus is on making every broker interaction efficient and valuable.",
      territory: "National",
      image: ryanAvatar,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A1628] text-white">
      <CustomCursor />
      {/* Navigation with Neon Branding */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-[#0A1628]/95 backdrop-blur-md border-b shadow-lg" 
            : "bg-transparent"
        }`}
        style={{ 
          borderColor: isScrolled ? `${NEON_COLORS.amber}20` : 'transparent',
          boxShadow: isScrolled ? `0 4px 20px ${NEON_COLORS.amber}10` : 'none'
        }}
        data-testid="nav-transportation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-8">
            <Link href="/" data-testid="link-home">
              <div className="flex items-center gap-3 cursor-pointer group">
                <Truck className="w-7 h-7 group-hover:scale-110 transition-all duration-300" style={{ color: NEON_COLORS.amber, filter: `drop-shadow(0 0 8px ${NEON_COLORS.amber}60)` }} />
                <div className="flex flex-col">
                  <div className="text-xl font-bold leading-tight" style={{ color: NEON_COLORS.amber, textShadow: `0 0 10px ${NEON_COLORS.amber}30` }}>MATTERHORN</div>
                  <div className="text-[10px] font-medium tracking-widest uppercase" style={{ color: `${NEON_COLORS.amber}99` }}>Transportation</div>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-3">
              {["Markets", "Technology", "Case Studies", "Why Us"].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="px-4 py-1.5 text-[10px] uppercase tracking-widest font-medium text-white/70 border border-white/20 rounded-full hover:text-[#ffaa00] hover:border-[#ffaa00]/50 hover:bg-[#ffaa00]/10"
                  data-testid={`nav-${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </Button>
              ))}

            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section with Neon Accents */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${matterhornHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/95 via-[#1B2A41]/90 to-[#0A1628]/95" />
        </div>
        
        {/* Neon glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.amber}15` }} />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-[100px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.cyan}12`, animationDelay: "1s" }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-[80px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.safetyGreen}08`, animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <Badge className="backdrop-blur-sm mb-6 px-4 py-1.5" style={{ 
            backgroundColor: `${NEON_COLORS.amber}20`, 
            color: NEON_COLORS.amber, 
            borderColor: `${NEON_COLORS.amber}40`,
            boxShadow: `0 0 15px ${NEON_COLORS.amber}30`
          }}>
            <Truck className="w-3 h-3 mr-2" />
            Specialty Transportation Programs
          </Badge>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            data-testid="heading-hero-transportation"
          >
            The Boutique Advantage for{" "}
            <span className="text-transparent bg-clip-text" style={{ 
              backgroundImage: `linear-gradient(90deg, ${NEON_COLORS.amber}, ${NEON_COLORS.cyan}, ${NEON_COLORS.safetyGreen})`
            }}>
              IC & Owner-Operator Fleets
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-4xl mx-auto font-medium">
            We aren't a giant wholesaler. We are specialized problem solvers for OA, CL, PD, and NTL programs.
          </p>
          
          <p className="text-lg text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">One application connects you to curated transportation markets plus a digital servicing platform that automates driver and equipment management, fleet changes, and COI delivery.</p>

          <div className="flex justify-center items-center mb-8">
            <Button
              size="lg"
              className="group font-bold px-12 py-6 text-lg"
              style={{ 
                backgroundColor: NEON_COLORS.amber,
                color: '#fff',
                boxShadow: `0 0 25px ${NEON_COLORS.amber}50`
              }}
              onClick={() => scrollToSection("markets")}
              data-testid="button-explore-programs"
            >
              Connect With Our Team
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Quick Access Application Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <p className="w-full text-center text-[10px] uppercase tracking-widest text-white/40 mb-2">Quick Access</p>
            <Button
              size="sm"
              variant="outline"
              className="text-[11px] font-medium border-white/20 hover:border-[#ffaa00]/50 hover:bg-[#ffaa00]/10 transition-all duration-300"
              style={{ color: NEON_COLORS.amber }}
              onClick={() => setApplicationModalOpen(true)}
              data-testid="button-motor-carrier-app"
            >
              <FileText className="w-3 h-3 mr-1.5" />
              Motor Carrier + IC Application
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-[11px] font-medium border-white/20 hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 transition-all duration-300"
              style={{ color: NEON_COLORS.cyan }}
              onClick={() => setApplicationModalOpen(true)}
              data-testid="button-logistics-app"
            >
              <FileText className="w-3 h-3 mr-1.5" />
              Logistics + Freight Brokers Application
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60 mb-12">
            <div className="flex items-center gap-2 transition-colors duration-300" style={{ '--hover-color': NEON_COLORS.amber } as React.CSSProperties}>
              <Target className="w-4 h-4" style={{ color: NEON_COLORS.amber }} />
              <span className="hover:text-[#ffaa00]">OA, CL WK, PD, & NTL Focus</span>
            </div>
            <div className="flex items-center gap-2 transition-colors duration-300">
              <Zap className="w-4 h-4" style={{ color: NEON_COLORS.cyan }} />
              <span className="hover:text-[#00d4ff]">Niche Program Design</span>
            </div>
            <div className="flex items-center gap-2 transition-colors duration-300">
              <BarChart3 className="w-4 h-4" style={{ color: NEON_COLORS.safetyGreen }} />
              <span className="hover:text-[#00ff88]">Digital Driver Reporting</span>
            </div>
          </div>

        </div>

        <button
          onClick={() => scrollToSection("leadership")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-primary transition-all duration-300 animate-bounce hover:animate-none hover:scale-110"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>
      {/* Leadership Section */}
      <section 
        id="leadership" 
        data-animate 
        className="py-24 bg-[#0D1B2A]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 ${getAnimationClass("leadership")}`}>
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              Leadership
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" data-testid="heading-leadership">
              Decades of Transportation Expertise
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Led by industry veterans with over 80 years of combined experience in specialty risk 
              from both MGU and Carrier levels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <Card 
                key={index} 
                className={`p-6 bg-[#1B2A41]/50 border-white/10 backdrop-blur-sm hover-elevate overflow-visible transition-all duration-500 group text-center ${getAnimationClass("leadership")}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-cyan-500/20 animate-pulse" />
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="relative w-28 h-28 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary/60 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-primary transition-colors">{leader.name}</h3>
                <p className="text-primary font-medium mb-2">{leader.title}</p>
                <Badge className="bg-white/10 text-white/70 border-white/20 text-xs mb-4">
                  <MapPin className="w-3 h-3 mr-1" />
                  {leader.territory}
                </Badge>
                <p className="text-white/60 text-sm leading-relaxed">{leader.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Market Curation Section */}
      <section 
        data-animate 
        id="market-curation"
        className="py-24 bg-[#0A1628]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 ${getAnimationClass("market-curation")}`}>
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              Market Access
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Curated Access to A-Rated Markets & Innovative UW Teams
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              We don't just blast submissions to a generic list. We align specialty transportation risks 
              with teams built to underwrite them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {marketCuration.map((section, index) => (
              <Card 
                key={index} 
                className={`p-8 bg-[#1B2A41]/50 border-white/10 backdrop-blur-sm hover-elevate overflow-visible transition-all duration-500 group ${getAnimationClass("market-curation")}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-md bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/60 group-hover:text-white/80 transition-colors">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Why Matterhorn Section */}
      <section 
        id="why-us" 
        data-animate
        className="py-24 bg-[#0A1628] relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-[80px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-16 ${getAnimationClass("why-us")}`}>
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              The Matterhorn Difference
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" data-testid="heading-why-us">
              Why Work With Matterhorn?
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              We offer what generalist wholesalers can't: specialized attention, niche program access, 
              and digital tools built for the IC market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMatterhorn.map((item, index) => (
              <Card 
                key={index} 
                className={`p-6 bg-[#1B2A41]/50 border-white/10 backdrop-blur-sm hover-elevate overflow-visible transition-all duration-500 text-center group ${getAnimationClass("why-us")}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative w-14 h-14 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-cyan-500/20 group-hover:from-primary/60 group-hover:to-cyan-500/40 blur-sm transition-all duration-500" />
                  <div className="relative w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-primary group-hover:rotate-6 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Markets & Coverage Section with Neon Styling */}
      <section 
        id="markets" 
        data-animate
        className="py-24 bg-[#0D1B2A] relative overflow-hidden"
      >
        {/* Neon glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[120px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.amber}12` }} />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-[100px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.cyan}10`, animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-[80px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.safetyGreen}08`, animationDelay: "1s" }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-20 ${getAnimationClass("markets")}`}>
            <Badge className="mb-6 px-4 py-1.5" style={{ 
              backgroundColor: `${NEON_COLORS.amber}20`, 
              color: NEON_COLORS.amber, 
              borderColor: `${NEON_COLORS.amber}40`,
              boxShadow: `0 0 15px ${NEON_COLORS.amber}30`
            }}>
              Markets & Coverage
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight" data-testid="heading-markets">
              Built for{" "}
              <span className="text-transparent bg-clip-text" style={{ 
                backgroundImage: `linear-gradient(90deg, ${NEON_COLORS.amber}, ${NEON_COLORS.cyan}, ${NEON_COLORS.safetyGreen})`
              }}>Modern Transportation Risk</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              We partner with brokers serving transportation operators of all shapes and sizes—from high-volume 
              placements to unique exposures that need thoughtful underwriting and structure.
            </p>
          </div>

          {/* Markets - 2 cards centered */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto mb-16">
            {marketSegments.map((segment, index) => {
              const neonColors = [NEON_COLORS.amber, NEON_COLORS.cyan];
              const neonColor = neonColors[index % neonColors.length];
              return (
                <Card 
                  key={index} 
                  className={`p-8 bg-[#1B2A41]/60 border-white/10 backdrop-blur-sm hover-elevate transition-all duration-500 group cursor-pointer relative overflow-visible ${getAnimationClass("markets")}`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                  data-testid={`card-market-${index}`}
                >
                  {/* Hover glow effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${neonColor}15 0%, transparent 60%)` }}
                  />
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${neonColor}, transparent)` }}
                  />
                  
                  <div className="relative z-10">
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300"
                      style={{ backgroundColor: `${neonColor}20`, boxShadow: `0 0 25px ${neonColor}25` }}
                    >
                      <segment.icon className="w-7 h-7" style={{ color: neonColor }} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#ffaa00] transition-colors">{segment.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {segment.description}
                    </p>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-xs font-medium mb-1" style={{ color: neonColor }}>Coverage:</p>
                      <p className="text-xs text-white/50">{segment.coverage}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-sm font-medium" style={{ color: `${neonColor}cc` }}>{segment.highlight}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Featured Programs Section */}
          <div className={`text-center mb-12 ${getAnimationClass("markets")}`}>
            <Badge className="mb-4 px-4 py-1.5" style={{ 
              backgroundColor: `${NEON_COLORS.electric}20`, 
              color: NEON_COLORS.electric, 
              borderColor: `${NEON_COLORS.electric}40`,
              boxShadow: `0 0 15px ${NEON_COLORS.electric}30`
            }}>
              Featured Programs
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Specialized Program Solutions</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
            {featuredPrograms.map((program, index) => {
              const neonColors = [NEON_COLORS.safetyGreen, NEON_COLORS.electric];
              const neonColor = neonColors[index % neonColors.length];
              return (
                <Card 
                  key={index} 
                  className={`p-8 bg-[#1B2A41]/60 border-white/10 backdrop-blur-sm hover-elevate transition-all duration-500 group cursor-pointer relative overflow-visible ${getAnimationClass("markets")}`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                  data-testid={`card-program-${index}`}
                >
                  {/* Hover glow effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${neonColor}15 0%, transparent 60%)` }}
                  />
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${neonColor}, transparent)` }}
                  />
                  
                  <div className="relative z-10">
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300"
                      style={{ backgroundColor: `${neonColor}20`, boxShadow: `0 0 25px ${neonColor}25` }}
                    >
                      <program.icon className="w-7 h-7" style={{ color: neonColor }} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#ffaa00] transition-colors">{program.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-xs font-medium mb-1" style={{ color: neonColor }}>Coverage:</p>
                      <p className="text-xs text-white/50">{program.coverage}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-sm font-medium" style={{ color: `${neonColor}cc` }}>{program.highlight}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <p className={`text-center text-sm text-white/50 mt-8 ${getAnimationClass("markets")}`}>
            <strong className="text-white/70">Broker Note:</strong> All programs are backed by A-VII or better rated carriers. 
            Admitted and Non-Admitted paper available depending on state and risk class.
          </p>
        </div>
      </section>
      {/* Technology Section */}
      <section 
        id="technology" 
        data-animate
        className="py-24 bg-[#0D1B2A]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={getAnimationClass("technology")}>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                Matterhorn Tech
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white" data-testid="heading-technology">
                Digital Tools for the Modern Fleet
              </h2>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                We leverage digital technology specifically for OA, PD, and NTL products to eliminate 
                administrative headaches. The platform that keeps transportation accounts "easy" after the bind.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { title: "Automated COI delivery", desc: "for shippers, facilities, and contract requirements" },
                  { title: "Driver management services", desc: "to onboard, validate, and maintain rosters" },
                  { title: "Fleet changes without chaos:", desc: "adds/deletes and updates tracked in one place" },
                  { title: "Less admin, faster delivery", desc: "so your team can quote and sell more" },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-white/60">
                      <strong className="text-white">{item.title}</strong> {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => setApplicationModalOpen(true)} 
                data-testid="button-schedule-demo"
                className="group"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className={`grid grid-cols-2 gap-4 ${getAnimationClass("technology")}`}>
              {techFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-4 bg-[#1B2A41]/50 border-white/10 backdrop-blur-sm hover-elevate overflow-visible transition-all duration-500 group"
                  style={{ transitionDelay: `${index * 50}ms` }}
                  data-testid={`card-tech-${index}`}
                >
                  <div className="relative w-10 h-10 mb-3">
                    <div className="absolute inset-0 rounded-md bg-gradient-to-br from-primary/30 to-cyan-500/15 group-hover:from-primary/50 group-hover:to-cyan-500/30 blur-sm transition-all duration-500" />
                    <div className="relative w-10 h-10 rounded-md bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                      <feature.icon className="w-5 h-5 text-primary group-hover:rotate-6 transition-transform" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm mb-1 text-white group-hover:text-primary transition-colors">{feature.title}</h4>
                  <p className="text-xs text-white/50">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Case Studies Section - Interactive Design */}
      <section 
        id="case-studies" 
        data-animate
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1B2A41 50%, #0A1628 100%)' }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-[180px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header with animated line */}
          <div className={`text-center mb-16 ${getAnimationClass("case-studies")}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
              <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] uppercase tracking-widest px-4">
                Success Stories
              </Badge>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Real Results,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
                Real Brokers
              </span>
            </h2>
            <p className="text-base text-white/50 max-w-2xl mx-auto">
              Discover how our partners solve complex transportation challenges
            </p>
          </div>

          {/* Interactive Case Study Selector */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Column - Case Study Cards */}
            <div className="lg:col-span-4 space-y-3">
              {caseStudies.map((study, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCaseStudy(index)}
                  className={`w-full text-left p-5 rounded-lg border transition-all duration-500 group relative overflow-hidden ${
                    activeCaseStudy === index
                      ? "bg-gradient-to-r from-primary/20 to-cyan-500/10 border-primary/50 shadow-lg shadow-primary/20"
                      : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                  }`}
                  data-testid={`case-study-tab-${index}`}
                >
                  {/* Glow effect for active */}
                  {activeCaseStudy === index && (
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
                  )}
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold transition-all ${
                        activeCaseStudy === index
                          ? "bg-primary text-white"
                          : "bg-white/10 text-white/50 group-hover:bg-primary/30 group-hover:text-primary"
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`text-[9px] uppercase tracking-wider border-none ${
                          activeCaseStudy === index
                            ? "bg-primary/30 text-white"
                            : "bg-white/10 text-white/50"
                        }`}
                      >
                        {study.category}
                      </Badge>
                    </div>
                    <h3 className={`font-semibold transition-colors ${
                      activeCaseStudy === index ? "text-white" : "text-white/70 group-hover:text-white"
                    }`}>
                      {study.title}
                    </h3>
                    
                    {/* Progress indicator */}
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-700 ${
                            activeCaseStudy === index
                              ? "w-full bg-gradient-to-r from-primary to-cyan-400"
                              : "w-0"
                          }`}
                        />
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-all ${
                        activeCaseStudy === index
                          ? "text-primary translate-x-1"
                          : "text-white/30"
                      }`} />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Column - Active Case Study Detail */}
            <div className="lg:col-span-8">
              <Card className="bg-[#1B2A41]/40 border-white/10 backdrop-blur-xl overflow-hidden relative">
                {/* Decorative top gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-cyan-400 to-purple-500" />
                
                <div className="p-8">
                  {/* Results Cards - Top */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(caseStudies[activeCaseStudy].results).map(([key, value], idx) => (
                      <div 
                        key={key}
                        className="relative group p-4 rounded-lg bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 hover:border-primary/30 transition-all duration-300 text-center overflow-hidden"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 relative z-10">
                          {value}
                        </p>
                        <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1 font-medium relative z-10">
                          {key}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-md bg-red-500/20 flex items-center justify-center">
                          <TrendingDown className="w-4 h-4 text-red-400" />
                        </div>
                        <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                          Challenge
                        </h4>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed pl-10">
                        {caseStudies[activeCaseStudy].challenge}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-md bg-green-500/20 flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                        </div>
                        <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider">
                          Solution
                        </h4>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed pl-10">
                        {caseStudies[activeCaseStudy].solution}
                      </p>
                    </div>
                  </div>

                  {/* Benefits Grid */}
                  <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                    {/* Broker Benefits */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded-md bg-cyan-500/20 flex items-center justify-center">
                          <Briefcase className="w-3 h-3 text-cyan-400" />
                        </div>
                        <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                          Broker Benefits
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {caseStudies[activeCaseStudy].brokerBenefits.map((benefit, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start gap-2 text-white/60 text-sm group hover:text-white/80 transition-colors"
                          >
                            <CheckCircle className="w-4 h-4 text-cyan-400/70 flex-shrink-0 mt-0.5 group-hover:text-cyan-400 transition-colors" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Client Benefits */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded-md bg-purple-500/20 flex items-center justify-center">
                          <Users className="w-3 h-3 text-purple-400" />
                        </div>
                        <h4 className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                          Client Benefits
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {caseStudies[activeCaseStudy].clientBenefits.map((benefit, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start gap-2 text-white/60 text-sm group hover:text-white/80 transition-colors"
                          >
                            <CheckCircle className="w-4 h-4 text-purple-400/70 flex-shrink-0 mt-0.5 group-hover:text-purple-400 transition-colors" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm">
                      Want similar results for your clients?
                    </p>
                    <Button 
                      onClick={() => setApplicationModalOpen(true)}
                      className="group"
                      data-testid="button-case-study-cta"
                    >
                      Start Your Success Story
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Navigation dots */}
              <div className="flex justify-center gap-2 mt-6">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCaseStudy(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeCaseStudy === index
                        ? "w-8 bg-gradient-to-r from-primary to-cyan-400"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                    data-testid={`case-study-dot-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Appointment Flow Section */}
      <section 
        data-animate
        id="appointment-flow"
        className="py-24 bg-[#0A1628] relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-16 ${getAnimationClass("appointment-flow")}`}>
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              Get Started
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Get Appointed. Submit Faster. Service at Scale.
            </h2>
          </div>

          <div className={`flex flex-wrap justify-center gap-4 mb-16 ${getAnimationClass("appointment-flow")}`}>
            {appointmentFlow.map((item, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-cyan-500 blur-sm group-hover:blur-md transition-all duration-300 opacity-50 group-hover:opacity-75" />
                  <div className="relative w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold group-hover:scale-110 transition-all duration-300">
                    {item.step}
                  </div>
                </div>
                <span className="font-medium text-white group-hover:text-primary transition-colors">{item.title}</span>
                {index < appointmentFlow.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-white/30 hidden md:block group-hover:text-primary/50 group-hover:translate-x-1 transition-all duration-300" />
                )}
              </div>
            ))}
          </div>

          {/* Two Submission Paths */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: FileText,
                title: "Agnostic Applications",
                desc: "Submit business through your existing application or intake method.",
                items: ["Upload/submit your app", "We triage + confirm completeness", "Indication in 24-48 hours", "Same-day indications on clean risks"],
                buttonText: "Start a Submission",
                variant: "default" as const,
              },
              {
                icon: Settings,
                title: "Custom Applications",
                desc: "Request custom apps built for specific clients or programs.",
                items: ["Define class + data needs", "We design a short, broker-friendly app", "Launch for client intake", "Iterate with real feedback"],
                buttonText: "Request a Custom App",
                variant: "secondary" as const,
              },
            ].map((path, index) => (
              <Card 
                key={index}
                className={`p-8 bg-[#1B2A41]/50 border-white/10 backdrop-blur-sm hover-elevate overflow-visible transition-all duration-500 ${getAnimationClass("appointment-flow")}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-md bg-primary/20 flex items-center justify-center mb-6">
                  <path.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{path.title}</h3>
                <p className="text-white/60 mb-6">{path.desc}</p>
                <ul className="space-y-3 mb-6">
                  {path.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={path.variant}
                  onClick={() => setApplicationModalOpen(true)}
                >
                  {path.buttonText}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section 
        data-animate
        id="cta"
        className="py-24 bg-[#0A1628] relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-16 ${getAnimationClass("cta")}`}>
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              Get Started
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Get Appointed Directly and Start Selling
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Join our network of elite transportation brokers. Complete our streamlined appointment 
              application to access our exclusive A-rated markets and integrated technology platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Benefits Card */}
            <Card className={`p-8 bg-[#1B2A41]/50 border-white/10 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/50 transition-all duration-500 ${getAnimationClass("cta")}`}>
              <h3 className="text-xl font-bold mb-6 text-white">Why Partner With Us?</h3>
              <ul className="space-y-4">
                {[
                  "Direct access to Matterhorn's specialty programs",
                  "Competitive commission structures",
                  "Same-day appointment approvals for qualified agencies",
                  "Instant access to our broker portal",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                    <CheckCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Contact Card */}
            <Card className={`p-8 bg-[#1B2A41]/50 border-white/10 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/50 transition-all duration-500 ${getAnimationClass("cta")}`}>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2 text-white">Ready to Place Transportation Risk?</h3>
                <p className="text-white/60 text-sm">
                  Contact John Warren directly for a quick response.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-4 p-4 bg-[#0A1628]/50 rounded-md hover:bg-primary/20 hover:border-primary/30 border border-transparent transition-all duration-300 group">
                  <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs text-white/50">Call Us</p>
                    <p className="font-medium text-white">1-844-600-0611</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#0A1628]/50 rounded-md hover:bg-primary/20 hover:border-primary/30 border border-transparent transition-all duration-300 group">
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs text-white/50">Email</p>
                    <a href="mailto:jwarren@matterhornprotects.com" className="font-medium text-white hover:text-primary transition-colors text-sm">
                      jwarren@matterhornprotects.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button 
                  className="w-full group" 
                  size="lg"
                  onClick={() => setApplicationModalOpen(true)}
                  data-testid="button-request-appointment-card"
                >
                  Request Appointment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline"
                  className="w-full" 
                  asChild
                >
                  <a href="mailto:jwarren@matterhornprotects.com">
                    Book a Call
                    <Phone className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section 
        data-animate
        id="faq" 
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #0A1628, #1B2A41)' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-primary/8 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500/6 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`grid lg:grid-cols-12 gap-12 lg:gap-16 ${getAnimationClass("faq")}`}>
            {/* Left Column - Header */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-[1px] bg-gradient-to-r from-primary to-transparent" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary/80">
                    Transportation
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Frequently
                  <br />
                  Asked{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
                    Questions
                  </span>
                </h2>
                
                <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                  Everything you need to know about our transportation programs.
                  Ready to get started? Contact John Warren directly.
                </p>

                <div className="pt-4 hidden lg:block">
                  <div 
                    className="flex items-center gap-3 p-4 rounded-md bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                    onClick={() => setApplicationModalOpen(true)}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/40 font-medium">Ready to place risk?</p>
                      <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">Request Appointment</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-2 hidden lg:flex">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">8</p>
                    <p className="text-[9px] uppercase tracking-wider text-white/40">Questions</p>
                  </div>
                  <div className="w-[1px] h-10 bg-white/10" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">50</p>
                    <p className="text-[9px] uppercase tracking-wider text-white/40">States</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - FAQ Items */}
            <div className="lg:col-span-8">
              <div className="space-y-3">
                {[
                  { category: "Coverage", question: "What types of transportation risks do you cover?", answer: "We specialize in IC & owner-operator fleets, motor carriers, ride share & delivery, logistics & freight brokers, and unique hard-to-place transportation risks. Our programs are built specifically for the modern transportation industry." },
                  { category: "Timeline", question: "How quickly can I get a quote for my client?", answer: "Our streamlined process delivers quotes within 24-48 hours for most risks. For standard IC and small fleet accounts, we often provide same-day indicative pricing through our technology platform." },
                  { category: "Platform", question: "What makes Matterhorn different from other transportation markets?", answer: "We combine boutique, personalized service with institutional-grade capacity. Our hybrid MGU + MGA model gives you direct access to curated A-rated markets while our technology platform streamlines the entire submission-to-bind process." },
                  { category: "Eligibility", question: "Do you require minimum fleet sizes?", answer: "No. We work with single-unit owner-operators all the way up to large fleets. Our programs are designed to be flexible and accommodate the full spectrum of transportation operations." },
                  { category: "Getting Started", question: "How do I get appointed with Matterhorn?", answer: "Complete our online appointment application. We verify credentials quickly, and qualified agencies typically receive same-day approval. Once appointed, you'll have immediate access to our broker portal and can start submitting risks right away." },
                  { category: "Technology", question: "What technology tools do you provide to brokers?", answer: "We provide a comprehensive broker portal for submissions, real-time quote tracking, document management, and policy servicing. Our platform integrates with your existing systems via API when needed." },
                  { category: "Territory", question: "Which states do you write transportation business in?", answer: "We have nationwide coverage with programs available in all 50 states. Specific coverage availability may vary by program type and risk characteristics." },
                  { category: "Claims", question: "What is your claims process like?", answer: "We work with experienced transportation claims teams who understand the industry. Our goal is fast, fair claim resolution with direct communication throughout the process." },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className={`group relative rounded-lg border transition-all duration-500 overflow-hidden ${
                      openFaqIndex === index 
                        ? "bg-primary/15 border-primary/40 shadow-lg shadow-primary/10" 
                        : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                    }`}
                    data-testid={`accordion-faq-${index}`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full text-left p-5 flex items-start gap-4"
                      data-testid={`accordion-trigger-${index}`}
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                        openFaqIndex === index 
                          ? "bg-primary text-white" 
                          : "bg-white/10 text-white/50 group-hover:bg-primary/30 group-hover:text-primary"
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge 
                            variant="outline" 
                            className={`text-[9px] uppercase tracking-wider px-2 py-0 h-4 border-none transition-colors ${
                              openFaqIndex === index 
                                ? "bg-primary/30 text-primary" 
                                : "bg-white/10 text-white/40"
                            }`}
                          >
                            {faq.category}
                          </Badge>
                        </div>
                        <h3 className={`font-semibold text-base transition-colors ${
                          openFaqIndex === index ? "text-white" : "text-white/80 group-hover:text-white"
                        }`}>
                          {faq.question}
                        </h3>
                      </div>

                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openFaqIndex === index 
                          ? "bg-primary/30 rotate-180" 
                          : "bg-white/10 group-hover:bg-white/20"
                      }`}>
                        <ChevronDown className={`w-4 h-4 transition-colors ${
                          openFaqIndex === index ? "text-primary" : "text-white/50"
                        }`} />
                      </div>
                    </button>

                    {openFaqIndex === index && (
                      <div 
                        className="overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300"
                        data-testid={`accordion-content-${index}`}
                      >
                        <div className="px-5 pb-5 pl-[4.5rem]">
                          <p className="text-sm text-white/60 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                      openFaqIndex === index ? "opacity-100" : "opacity-0"
                    }`}>
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Contact Card */}
              <div className="mt-8 lg:hidden">
                <div 
                  className="flex items-center gap-3 p-4 rounded-md bg-white/5 border border-white/10 cursor-pointer"
                  onClick={() => setApplicationModalOpen(true)}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/40 font-medium">Ready to place risk?</p>
                    <p className="text-sm font-medium text-white">Request Appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Closing Section - Interactive Letter Hover */}
      <ClosingSection />
      {/* Footer */}
      <Footer />
      <BrokerApplicationModal 
        open={applicationModalOpen} 
        onOpenChange={setApplicationModalOpen} 
      />
    </div>
  );
}
