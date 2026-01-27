import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mountain,
  Truck,
  Users,
  Shield,
  Zap,
  BarChart3,
  FileCheck,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Building,
  Settings,
  Globe,
  Award,
  TrendingUp,
  Layers,
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
  Handshake,
  Star,
  MapPin,
} from "lucide-react";
import { BrokerApplicationModal } from "@/components/BrokerApplicationModal";
import matterhornHero from "@assets/generated_images/Matterhorn_mountains_hero_background_315f6fa4.png";

export default function TransportationPage() {
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const stats = [
    { value: "17+", label: "A-Rated Transportation Markets" },
    { value: "30+", label: "A-Rated Markets Across Specialty" },
    { value: "50", label: "States Covered" },
    { value: "80+", label: "Years Combined Experience" },
  ];

  const appetiteSegments = [
    {
      title: "Independent Contractors (IC)",
      description: "Scalable onboarding, compliance-ready documentation, simpler adds/deletes. Streamline IC management with automated tools.",
      icon: Briefcase,
    },
    {
      title: "Motor Carriers",
      description: "Primary + excess structures, fleet-focused servicing, fast turnaround. Comprehensive fleet coverage with A-rated carriers.",
      icon: Truck,
    },
    {
      title: "Ride Share Services",
      description: "Evolving exposures, driver-centric workflows, consistent COI delivery. Modern solutions for the gig economy.",
      icon: Car,
    },
    {
      title: "Logistics Companies",
      description: "Operational liability clarity, contract-driven support, claims-ready documentation. Protect supply chains with specialized liability.",
      icon: Package,
    },
    {
      title: "Pilot Cars / Escort Vehicles",
      description: "Niche class expertise, right coverage fit, fewer underwriting surprises. Expert underwriting for specialized vehicle classes.",
      icon: Target,
    },
    {
      title: "Unique / Hard-to-Place",
      description: "Creative structuring, specialist review, market access. We find homes for the risks others reject.",
      icon: Award,
    },
  ];

  const coverageTypes = [
    {
      title: "Independent Contractors",
      subtitle: "Turnkey protection for 1099 fleets and gig workers",
      icon: Users,
    },
    {
      title: "Motor Carriers",
      subtitle: "Core fleet policies for primary and excess needs",
      icon: Truck,
    },
    {
      title: "Freight Brokers",
      subtitle: "Comprehensive protection for brokerage operations",
      icon: Building,
    },
    {
      title: "Ride Share Services",
      subtitle: "Dynamic coverage for TNCs, P2P, and last-mile delivery",
      icon: Car,
    },
    {
      title: "Logistics Companies",
      subtitle: "Liability shields for freight brokers and 3PLs",
      icon: Package,
    },
    {
      title: "Unique / Hard-to-Place",
      subtitle: "Custom structures for pilot cars, hazmat, and distressed risk",
      icon: Shield,
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

  const nichePrograms = [
    {
      title: "Pilot Car Programs",
      description: "Specialized coverage for escort vehicles and pilot cars. We understand the unique liability exposures and operational requirements of this niche.",
    },
    {
      title: "Bulk Load Programs",
      description: "Tailored solutions for bulk commodity haulers. From dry bulk to liquid tankers, we structure programs that address contamination, spillage, and transit risks.",
    },
  ];

  const processSteps = [
    { step: 1, title: "Class & Exposure Mapping", description: "Deep dive into specific risk profiles like OA and Pilot Cars." },
    { step: 2, title: "Underwriting Appetite", description: "Structuring coverage for NTL, PD, and Cargo." },
    { step: 3, title: "Market Curation", description: "Securing A-rated capacity for niche programs." },
    { step: 4, title: "Launch & Iterate", description: "Tech workflow design for smooth binding." },
  ];

  const caseStudies = [
    {
      category: "IC Markets",
      title: "Scaling an Independent Contractor Group",
      description: "Manual driver tracking and slow coverage deployment were stifling growth for a 500-unit IC fleet.",
    },
    {
      category: "Motor Carrier",
      title: "Modernizing a Mid-Sized Motor Carrier",
      description: "A 45-truck fleet faced rising premiums and fragmented coverage across multiple carriers.",
    },
    {
      category: "Logistics / Brokerage",
      title: "High-Value Logistics Liability",
      description: "A freight broker needed high-limit contingent cargo coverage for electronics shipments but faced capacity issues.",
    },
    {
      category: "Specialized Transport",
      title: "Niche Pilot Car Fleet Solution",
      description: "A pilot car service was being rated as standard trucking, leading to unsustainable premiums.",
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
      description: "Our forte is complex programs like Pilot Cars and Bulk Loads that others turn down. Clearer appetite and fewer NTUs.",
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
      title: "Transportation Executive",
      description: "A veteran of the transportation insurance industry, Stephen brings deep expertise in program design and carrier relations. His background spans executive roles at major MGUs and carriers, where he has consistently delivered innovative solutions for complex fleets.",
    },
    {
      name: "John Warren",
      title: "Transportation Executive",
      description: "With a career dedicated to specialty risk, John combines underwriting discipline with strategic vision. His leadership has been instrumental in developing high-performance teams and sustainable insurance programs across the transportation sector.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
        data-testid="nav-transportation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-8">
            <Link href="/" data-testid="link-home">
              <div className="flex items-center gap-3 cursor-pointer group">
                <Mountain className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <div className="text-xl font-bold text-primary leading-tight">MATTERHORN</div>
                  <div className="text-[10px] font-medium text-primary/70 tracking-widest uppercase">Transportation</div>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-3">
              {["Appetite", "Coverage", "Technology", "Why Us"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="px-4 py-1.5 text-[10px] uppercase tracking-widest font-medium text-foreground/70 border border-foreground/20 rounded-full hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
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
        
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
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
            >
              Request Appointment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white"
              onClick={() => scrollToSection("appetite")}
              data-testid="button-explore-programs"
            >
              Start a Submission
              <Send className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60 mb-12">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              <span>OA, CL, PD, & NTL Focus</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span>Niche Program Design</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span>Digital Driver Reporting</span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => scrollToSection("leadership")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white/90 transition-colors animate-bounce"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Leadership
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-leadership">
              Decades of Transportation Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Led by industry veterans with over 80 years of combined experience in specialty risk 
              from both MGU and Carrier levels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="p-8 bg-card hover-elevate transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                <p className="text-primary font-medium mb-4">{leader.title}</p>
                <p className="text-muted-foreground leading-relaxed">{leader.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Curation Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Market Access
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Curated Access to A-Rated Markets & Innovative UW Teams
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We don't just blast submissions to a generic list. We align specialty transportation risks 
              with teams built to underwrite them. Our markets are curated based on appetite, class fit, 
              claims philosophy, and long-term partnership potential.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {marketCuration.map((section, index) => (
              <Card key={index} className="p-8 bg-card hover-elevate transition-all duration-300">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground">
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

      {/* Appetite Section */}
      <section id="appetite" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Appetite
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-appetite">
              Built for Modern Transportation Risk
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We partner with brokers serving transportation operators of all shapes and sizes—from high-volume 
              placements to unique exposures that need thoughtful underwriting and structure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appetiteSegments.map((segment, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card hover-elevate transition-all duration-300"
                data-testid={`card-appetite-${index}`}
              >
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <segment.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{segment.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {segment.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Matterhorn Section */}
      <section id="why-us" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              The Matterhorn Difference
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-why-us">
              Why Work With Matterhorn?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer what generalist wholesalers can't: specialized attention, niche program access, 
              and digital tools built for the IC market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMatterhorn.map((item, index) => (
              <Card key={index} className="p-6 bg-card hover-elevate transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                Matterhorn Tech
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-technology">
                Digital Tools for the Modern Fleet
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We leverage digital technology specifically for OA, PD, and NTL products to eliminate 
                administrative headaches. The platform that keeps transportation accounts "easy" after the bind.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Automated COI delivery</strong> for shippers, facilities, and contract requirements
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Driver management services</strong> to onboard, validate, and maintain rosters
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Fleet changes without chaos:</strong> adds/deletes and updates tracked in one place
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Less admin, faster delivery</strong> so your team can quote and sell more
                  </p>
                </div>
              </div>

              <Button onClick={() => setApplicationModalOpen(true)} data-testid="button-schedule-demo">
                Schedule a Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {techFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-4 bg-card hover-elevate transition-all duration-300"
                  data-testid={`card-tech-${index}`}
                >
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="coverage" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Coverage Programs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-coverage">
              Coverage Built to Protect Transportation Operations—End to End
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From standard fleet filings to complex gig-economy structures. Build trust with your clients 
              by offering comprehensive protection from A-rated markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {coverageTypes.map((coverage, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card hover-elevate transition-all duration-300"
                data-testid={`card-coverage-${index}`}
              >
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <coverage.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{coverage.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {coverage.subtitle}
                </p>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground">
            <strong>Broker Note:</strong> All programs are backed by A-VII or better rated carriers. 
            Admitted and Non-Admitted paper available depending on state and risk class.
          </p>
        </div>
      </section>

      {/* Niche Programs Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                Specialty Programs
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Niche Program Focus
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We focus on niche programs that others turn down. Our forte is designing solutions 
                for specialized transportation needs.
              </p>

              <div className="space-y-6 mb-8">
                {nichePrograms.map((program, index) => (
                  <Card key={index} className="p-6 bg-card">
                    <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </Card>
                ))}
              </div>

              <Button 
                variant="outline"
                onClick={() => setApplicationModalOpen(true)}
              >
                Request a Program Consult
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Our Program Design Process</h3>
              <div className="space-y-4">
                {processSteps.map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="p-6 bg-primary/5 border-primary/20 mt-8">
                <h4 className="font-semibold mb-2">Have a niche fleet challenge?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  We solve problems others can't. Let's design a program for your unique risk.
                </p>
                <Button size="sm" onClick={() => setApplicationModalOpen(true)}>
                  Start a Conversation
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Case Studies
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Brokers Accomplish With Matterhorn
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real outcomes from our partner network. See how we solve complex transportation challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((study, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card hover-elevate transition-all duration-300"
                data-testid={`card-case-study-${index}`}
              >
                <Badge variant="outline" className="mb-4 text-xs">
                  {study.category}
                </Badge>
                <h3 className="text-lg font-semibold mb-2">{study.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {study.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TIE Partnership Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                Strategic Partnership
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advocating for the Independent Contractor
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We've partnered with Truckers Integral to Our Economy (TIE) to provide deep advocacy 
                for the independent contractor business model. This partnership protects the flexibility 
                that brokers and drivers rely on.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Matterhorn partners with TIE to support and sustain the IC market model. This partnership 
                helps ensure trucking interests are represented in policy and political discussions 
                affecting IC operators and small fleets.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-muted/50 rounded-md">
                  <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Stability</p>
                  <p className="text-xs text-muted-foreground">Long-term IC market support</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-md">
                  <Handshake className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Support</p>
                  <p className="text-xs text-muted-foreground">Resources for owner-operators</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-md">
                  <Globe className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Advocacy</p>
                  <p className="text-xs text-muted-foreground">Regulatory representation</p>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-card border-primary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">TIE</h3>
                  <p className="text-sm text-muted-foreground">Truckers Integral to Our Economy</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                501(c)(4) National Trade Association
              </p>
              <p className="italic text-foreground mb-4">
                "Preserving the independent contractor business model in the trucking industry."
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Territory: National (50 States)</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Appointment Flow Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Get Started
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Appointed. Submit Faster. Service at Scale.
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {appointmentFlow.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <span className="font-medium">{item.title}</span>
                {index < appointmentFlow.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
                )}
              </div>
            ))}
          </div>

          {/* Two Submission Paths */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-card hover-elevate transition-all duration-300">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Agnostic Applications</h3>
              <p className="text-muted-foreground mb-6">
                Submit business through your existing application or intake method.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Upload/submit your app</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>We triage + confirm completeness</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Indication in 24-48 hours</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Same-day indications on clean risks</span>
                </li>
              </ul>
              <Button className="w-full" onClick={() => setApplicationModalOpen(true)}>
                Start a Submission
              </Button>
            </Card>

            <Card className="p-8 bg-card hover-elevate transition-all duration-300">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Applications</h3>
              <p className="text-muted-foreground mb-6">
                Request custom apps built for specific clients or programs.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Define class + data needs</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>We design a short, broker-friendly app</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Launch for client intake</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Iterate with real feedback</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" onClick={() => setApplicationModalOpen(true)}>
                Request a Custom App
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="p-12 bg-gradient-to-br from-primary/10 via-cyan-500/5 to-primary/10 border-primary/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Get Appointed Directly and Start Selling
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Join our network of elite transportation brokers. Complete our streamlined appointment 
                  application to access our exclusive A-rated markets and integrated technology platform.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Direct access to Matterhorn's specialty programs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Competitive commission structures</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Same-day appointment approvals for qualified agencies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Instant access to our broker portal</span>
                  </li>
                </ul>
              </div>

              <Card className="p-8 bg-card">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Ready to Place Transportation Risk?</h3>
                  <p className="text-muted-foreground">
                    Contact John Warren directly for a quick response.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-md">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Call Us</p>
                      <p className="font-medium">1-844-600-0611</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-md">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:jwarren@matterhornprotects.com" className="font-medium hover:text-primary transition-colors">
                        jwarren@matterhornprotects.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => setApplicationModalOpen(true)}
                    data-testid="button-request-appointment-card"
                  >
                    Request Appointment
                    <ArrowRight className="ml-2 w-5 h-5" />
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
          </Card>
        </div>
      </section>

      {/* Closing Section */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${matterhornHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/85 via-[#1B2A41]/80 to-[#0A1628]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
                MATTERHORN
              </span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg uppercase tracking-[0.3em] mt-2 font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary/80 via-cyan-400/70 to-primary/80">
              Transportation
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer">
                <Mountain className="w-6 h-6 text-primary" />
                <div className="flex flex-col">
                  <div className="text-lg font-bold text-primary leading-tight">MATTERHORN</div>
                  <div className="text-[9px] font-medium text-primary/70 tracking-widest uppercase">Insurance Group</div>
                </div>
              </div>
            </Link>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <a href="mailto:jwarren@matterhornprotects.com" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
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
