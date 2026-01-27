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

  const coverageTypes = [
    {
      title: "Occupational Accident",
      description: "Comprehensive coverage for independent contractors and owner-operators, including medical expenses, disability, and accidental death benefits.",
      icon: Shield,
    },
    {
      title: "Contingent Liability",
      description: "Protection when a contractor's primary insurance is insufficient or non-existent, safeguarding motor carriers from gaps in coverage.",
      icon: Layers,
    },
    {
      title: "Physical Damage",
      description: "Coverage for trucks, trailers, and equipment against collision, comprehensive losses, and cargo damage.",
      icon: Truck,
    },
    {
      title: "Non-Trucking Liability",
      description: "Coverage for owner-operators when operating under their own authority or during personal use of commercial vehicles.",
      icon: Globe,
    },
    {
      title: "Freight Broker & 3PL",
      description: "Specialized programs for freight brokers and third-party logistics providers covering contingent cargo and liability exposures.",
      icon: Building,
    },
    {
      title: "Embedded Coverage",
      description: "Seamlessly integrate insurance products into existing business workflows with API-driven solutions.",
      icon: Settings,
    },
  ];

  const industrySegments = [
    { name: "Trucking (All Classes)", icon: Truck },
    { name: "Courier & Delivery", icon: Zap },
    { name: "Ride-Share Economy", icon: Users },
    { name: "Last-Mile Delivery", icon: Target },
    { name: "Independent Contractors", icon: Briefcase },
    { name: "Small to Mid-Size Fleets", icon: BarChart3 },
    { name: "Motor Carriers", icon: Shield },
    { name: "Freight Brokers", icon: Building },
  ];

  const platformFeatures = [
    {
      title: "Automated Driver Onboarding",
      description: "Streamlined digital applications with instant document verification, background checks, and compliance validation.",
      icon: Users,
    },
    {
      title: "Real-Time Driver Management",
      description: "Track driver status, certifications, and performance metrics from a unified dashboard. Proactive alerts for expiring credentials.",
      icon: BarChart3,
    },
    {
      title: "Instant COI Generation",
      description: "Automated Certificate of Insurance issuance with real-time delivery to drivers, shippers, and brokers.",
      icon: FileCheck,
    },
    {
      title: "Digital Billing & Payments",
      description: "Automated premium calculations, invoicing, and payment processing. Reduce administrative overhead by 80%.",
      icon: TrendingUp,
    },
    {
      title: "Compliance Monitoring",
      description: "Continuous monitoring of driver qualifications, insurance status, and regulatory requirements across all 50 states.",
      icon: Shield,
    },
    {
      title: "API Integration",
      description: "Connect our platform with your existing TMS, dispatch, and accounting systems for seamless data flow.",
      icon: Settings,
    },
  ];

  const elitePartners = [
    "Truckstop.com",
    "TIE (Truckers Integral to the Economy)",
    "Major Motor Carriers",
    "National Freight Networks",
  ];

  const brokerBenefits = [
    "Access to 30+ A-rated transportation markets",
    "Same-day quote turnaround on standard submissions",
    "Dedicated transportation underwriting team",
    "Custom program development for unique fleet needs",
    "100% digital workflow from quote to bind",
    "Competitive commission structures",
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
              {["Coverage", "Technology", "Markets", "Benefits"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-4 py-1.5 text-[10px] uppercase tracking-widest font-medium text-foreground/70 border border-foreground/20 rounded-full hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  data-testid={`nav-${item.toLowerCase()}`}
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
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${matterhornHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/90 via-[#1B2A41]/85 to-[#0A1628]/90" />
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Badge className="bg-primary/20 text-white border-primary/30 backdrop-blur-sm mb-6">
            <Truck className="w-3 h-3 mr-2" />
            Transportation Insurance Programs
          </Badge>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            data-testid="heading-hero-transportation"
          >
            Fleet Management{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
              Reimagined
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto font-medium">
            Automated Driver Systems. Instant Compliance. Elite Carrier Markets.
          </p>
          
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Purpose-built insurance programs for transportation brokers managing fleets of any size. 
            From occupational accident to contingent liability, we've deployed solutions with industry leaders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => setApplicationModalOpen(true)}
              data-testid="button-get-started"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white"
              onClick={() => scrollToSection("coverage")}
              data-testid="button-explore-programs"
            >
              Explore Programs
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>30+ A-Rated Markets</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>All 50 States</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Same-Day Quotes</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("coverage")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white/90 transition-colors animate-bounce"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* Coverage Types Section */}
      <section id="coverage" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Coverage Programs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-coverage">
              Comprehensive Transportation Coverage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored insurance solutions designed specifically for the transportation industry's unique exposures and regulatory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {coverage.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Management Technology Section */}
      <section id="technology" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                Technology Platform
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-technology">
                Automated Driver Management System
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our proprietary platform has been deployed with elite players in the transportation industry. 
                From automated onboarding to real-time compliance monitoring, we've built the infrastructure 
                that lets you scale your fleet operations without the administrative burden.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Minutes, Not Days</h4>
                    <p className="text-sm text-muted-foreground">
                      Driver onboarding that used to take days now completes in minutes with automated document verification.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Industry-Proven</h4>
                    <p className="text-sm text-muted-foreground">
                      Deployed with major motor carriers and freight networks, processing thousands of drivers monthly.
                    </p>
                  </div>
                </div>
              </div>

              <Button onClick={() => setApplicationModalOpen(true)} data-testid="button-schedule-demo">
                Schedule a Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {platformFeatures.slice(0, 6).map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-4 bg-card hover-elevate transition-all duration-300"
                  data-testid={`card-feature-${index}`}
                >
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Segments Section */}
      <section id="markets" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Markets Served
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-markets">
              Transportation Segments We Cover
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From independent owner-operators to enterprise fleets, our programs flex to meet the needs of every transportation vertical.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {industrySegments.map((segment, index) => (
              <Card 
                key={index} 
                className="p-6 text-center bg-card hover-elevate transition-all duration-300"
                data-testid={`card-segment-${index}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <segment.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-sm">{segment.name}</h3>
              </Card>
            ))}
          </div>

          {/* Elite Partners */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-6">Trusted by Industry Leaders</p>
            <div className="flex flex-wrap justify-center gap-8">
              {elitePartners.map((partner, index) => (
                <div 
                  key={index}
                  className="px-6 py-3 bg-muted/50 rounded-md text-sm font-medium text-foreground/80"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Broker Benefits Section */}
      <section id="benefits" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                For Brokers
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-benefits">
                Why Transportation Brokers Choose Matterhorn
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We work exclusively with brokers, never competing for your clients. Our technology and market access 
                let you deliver world-class transportation coverage without building an in-house specialty team.
              </p>

              <div className="space-y-3">
                {brokerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-card border-primary/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
                <p className="text-muted-foreground">
                  Request an appointment and our transportation team will reach out within 24 hours.
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
                    <p className="font-medium">support@matterhornprotects.com</p>
                  </div>
                </div>
              </div>

              <Button 
                className="w-full" 
                size="lg"
                onClick={() => setApplicationModalOpen(true)}
                data-testid="button-request-appointment-card"
              >
                Request Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Card>
          </div>
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
              <a href="mailto:support@matterhornprotects.com" className="hover:text-foreground transition-colors">
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
