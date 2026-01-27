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
import { BrokerApplicationModal } from "@/components/BrokerApplicationModal";
import CustomCursor from "@/components/CustomCursor";
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

export default function TransportationPage() {
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
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
      title: "Independent Contractors (IC)",
      description: "Scalable onboarding, compliance-ready documentation, simpler adds/deletes.",
      coverage: "OA, NTL, PD, Cargo",
      icon: Briefcase,
      highlight: "Turnkey protection for 1099 fleets and gig workers",
    },
    {
      title: "Motor Carriers",
      description: "Primary + excess structures, fleet-focused servicing, fast turnaround.",
      coverage: "Primary AL, Excess, Physical Damage",
      icon: Truck,
      highlight: "Core fleet policies for primary and excess needs",
    },
    {
      title: "Ride Share & Delivery",
      description: "Evolving exposures, driver-centric workflows, consistent COI delivery.",
      coverage: "TNC Coverage, Last-Mile, P2P",
      icon: Car,
      highlight: "Dynamic coverage for the modern gig economy",
    },
    {
      title: "Logistics & Freight Brokers",
      description: "Operational liability clarity, contract-driven support, claims-ready documentation.",
      coverage: "Contingent Cargo, Errors & Omissions, General Liability",
      icon: Package,
      highlight: "Comprehensive protection for brokerage operations",
    },
    {
      title: "Unique & Hard-to-Place",
      description: "Creative structuring, specialist review, market access.",
      coverage: "Hazmat, Distressed Risk, Custom Structures",
      icon: Award,
      highlight: "We find homes for the risks others reject",
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
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-[#0A1628]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20" 
            : "bg-transparent"
        }`}
        data-testid="nav-transportation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-8">
            <Link href="/" data-testid="link-home">
              <div className="flex items-center gap-3 cursor-pointer group">
                <Mountain className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="flex flex-col">
                  <div className="text-xl font-bold text-primary leading-tight">MATTERHORN</div>
                  <div className="text-[10px] font-medium text-primary/70 tracking-widest uppercase">Transportation</div>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-3">
              {["Markets", "Technology", "Case Studies", "Why Us"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="px-4 py-1.5 text-[10px] uppercase tracking-widest font-medium text-white/70 border border-white/20 rounded-full hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                  data-testid={`nav-${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </button>
              ))}

              <Button 
                onClick={() => setApplicationModalOpen(true)} 
                size="sm"
                className="ml-4 text-[10px] uppercase tracking-widest"
                data-testid="button-request-appointment"
              >
                Request Appointment
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${matterhornHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/95 via-[#1B2A41]/90 to-[#0A1628]/95" />
        </div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <Badge className="bg-primary/20 text-white border-primary/30 backdrop-blur-sm mb-6">
            <Truck className="w-3 h-3 mr-2" />
            Specialty Transportation Programs
          </Badge>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            data-testid="heading-hero-transportation"
          >
            The Boutique Advantage for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary animate-gradient bg-[length:200%_auto]">
              IC & Owner-Operator Fleets
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-4xl mx-auto font-medium">
            We aren't a giant wholesaler. We are specialized problem solvers for OA, CL, PD, and NTL programs.
          </p>
          
          <p className="text-lg text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            One application connects you to curated transportation markets plus a digital servicing platform 
            that automates driver management, fleet changes, and COI delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={() => setApplicationModalOpen(true)}
              data-testid="button-get-started"
              className="group"
            >
              Request Appointment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 backdrop-blur-sm border-white/30 text-white group"
              onClick={() => scrollToSection("markets")}
              data-testid="button-explore-programs"
            >
              Start a Submission
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60 mb-12">
            <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
              <Target className="w-4 h-4 text-primary" />
              <span>OA, CL, PD, & NTL Focus</span>
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
              <Zap className="w-4 h-4 text-primary" />
              <span>Niche Program Design</span>
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span>Digital Driver Reporting</span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 group-hover:from-cyan-400 group-hover:to-primary transition-all duration-500">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 mt-1 group-hover:text-white/80 transition-colors">{stat.label}</div>
              </div>
            ))}
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
                className={`p-6 bg-[#1B2A41]/50 border-white/10 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/50 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 group text-center ${getAnimationClass("leadership")}`}
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
                className={`p-8 bg-[#1B2A41]/50 border-white/10 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/50 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 group ${getAnimationClass("market-curation")}`}
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

      {/* Markets & Coverage Section (Consolidated) */}
      <section 
        id="markets" 
        data-animate
        className="py-24 bg-[#0D1B2A] relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-16 ${getAnimationClass("markets")}`}>
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              Markets & Coverage
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" data-testid="heading-markets">
              Built for Modern Transportation Risk
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              We partner with brokers serving transportation operators of all shapes and sizes—from high-volume 
              placements to unique exposures that need thoughtful underwriting and structure.
            </p>
          </div>

          {/* First row - 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {marketSegments.slice(0, 3).map((segment, index) => (
              <Card 
                key={index} 
                className={`p-6 bg-[#1B2A41]/50 border-white/10 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/50 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 group cursor-pointer ${getAnimationClass("markets")}`}
                style={{ transitionDelay: `${index * 75}ms` }}
                data-testid={`card-market-${index}`}
              >
                <div className="relative w-12 h-12 mb-4">
                  <div className="absolute inset-0 rounded-md bg-gradient-to-br from-primary/30 to-cyan-500/15 group-hover:from-primary/50 group-hover:to-cyan-500/30 blur-sm transition-all duration-500" />
                  <div className="relative w-12 h-12 rounded-md bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                    <segment.icon className="w-6 h-6 text-primary group-hover:rotate-3 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-primary transition-colors">{segment.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-3">
                  {segment.description}
                </p>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-xs text-primary font-medium mb-1">Coverage:</p>
                  <p className="text-xs text-white/50">{segment.coverage}</p>
                </div>
                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="text-sm text-cyan-400 font-medium">{segment.highlight}</p>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Second row - 2 cards centered */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {marketSegments.slice(3).map((segment, index) => (
              <Card 
                key={index + 3} 
                className={`p-6 bg-[#1B2A41]/50 border-white/10 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/50 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 group cursor-pointer ${getAnimationClass("markets")}`}
                style={{ transitionDelay: `${(index + 3) * 75}ms` }}
                data-testid={`card-market-${index + 3}`}
              >
                <div className="relative w-12 h-12 mb-4">
                  <div className="absolute inset-0 rounded-md bg-gradient-to-br from-primary/30 to-cyan-500/15 group-hover:from-primary/50 group-hover:to-cyan-500/30 blur-sm transition-all duration-500" />
                  <div className="relative w-12 h-12 rounded-md bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                    <segment.icon className="w-6 h-6 text-primary group-hover:rotate-3 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-primary transition-colors">{segment.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-3">
                  {segment.description}
                </p>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-xs text-primary font-medium mb-1">Coverage:</p>
                  <p className="text-xs text-white/50">{segment.coverage}</p>
                </div>
                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="text-sm text-cyan-400 font-medium">{segment.highlight}</p>
                </div>
              </Card>
            ))}
          </div>

          <p className={`text-center text-sm text-white/50 mt-8 ${getAnimationClass("markets")}`}>
            <strong className="text-white/70">Broker Note:</strong> All programs are backed by A-VII or better rated carriers. 
            Admitted and Non-Admitted paper available depending on state and risk class.
          </p>
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
                className={`p-6 bg-[#1B2A41]/50 border-white/10 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/50 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 text-center group ${getAnimationClass("why-us")}`}
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
                  className="p-4 bg-[#1B2A41]/50 border-white/10 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/50 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 group"
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

      {/* Case Studies Section with Accordion */}
      <section 
        id="case-studies" 
        data-animate
        className="py-24 bg-[#0A1628]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 ${getAnimationClass("case-studies")}`}>
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              Case Studies
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What Brokers Accomplish With Matterhorn
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Real outcomes from our partner network. Click to explore how we solve complex transportation challenges.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {caseStudies.map((study, index) => (
              <AccordionItem 
                key={index} 
                value={`case-${index}`}
                className={`bg-[#1B2A41]/50 border border-white/10 rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300 ${getAnimationClass("case-studies")}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`accordion-case-${index}`}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex items-center gap-4 text-left">
                    <Badge variant="outline" className="text-xs border-primary/50 text-primary bg-primary/10">
                      {study.category}
                    </Badge>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">{study.title}</h3>
                      <p className="text-sm text-white/50 mt-1 line-clamp-1">{study.challenge.substring(0, 80)}...</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid lg:grid-cols-2 gap-8 pt-4 border-t border-white/10">
                    {/* Left Column - Challenge & Solution */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <TrendingDown className="w-4 h-4" />
                          The Challenge
                        </h4>
                        <p className="text-white/70 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          The Solution
                        </h4>
                        <p className="text-white/70 leading-relaxed">{study.solution}</p>
                      </div>
                      
                      {/* Results */}
                      <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                        {Object.entries(study.results).map(([key, value]) => (
                          <div key={key} className="bg-primary/10 px-4 py-2 rounded-md">
                            <p className="text-primary font-bold text-lg">{value}</p>
                            <p className="text-xs text-white/50 uppercase">{key}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Benefits */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          Broker Benefits
                        </h4>
                        <ul className="space-y-2">
                          {study.brokerBenefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Client Benefits
                        </h4>
                        <ul className="space-y-2">
                          {study.clientBenefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                              <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
                className={`p-8 bg-[#1B2A41]/50 border-white/10 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/50 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 ${getAnimationClass("appointment-flow")}`}
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

      {/* Closing Section */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden bg-[#0A1628]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${matterhornHero})` }}
        >
          <div className="absolute inset-0 bg-[#0A1628]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent" />
        </div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
              <span className="text-white">
                MATTERHORN
              </span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl uppercase tracking-[0.3em] mt-4 font-semibold text-primary drop-shadow-md">
              Transportation
            </p>
            <p className="text-white/70 mt-4 text-sm md:text-base max-w-xl mx-auto">
              Specialty insurance programs built for the modern transportation industry
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0A1628] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer group">
                <Mountain className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <div className="text-lg font-bold text-primary leading-tight">MATTERHORN</div>
                  <div className="text-[9px] font-medium text-primary/70 tracking-widest uppercase">Insurance Group</div>
                </div>
              </div>
            </Link>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <a href="mailto:jwarren@matterhornprotects.com" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>

            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Matterhorn Insurance Group
            </p>
          </div>
        </div>
      </footer>

      <BrokerApplicationModal 
        open={applicationModalOpen} 
        onOpenChange={setApplicationModalOpen} 
      />
    </div>
  );
}
