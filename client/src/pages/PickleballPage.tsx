import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Shield,
  Clock,
  MapPin,
  Zap,
  FileText,
  Users,
  Building2,
  Scale,
  Lock,
  Wine,
  UserX,
  ReceiptText,
  CheckCircle,
  ArrowRight,
  Download,
  Search,
  Globe,
  DollarSign,
  TrendingDown,
  Sparkles,
  Mountain,
  Mail,
  Phone,
  Upload,
  Target,
  Award,
  Star,
  Briefcase,
  TrendingUp,
  Handshake,
  BadgeCheck,
  BarChart3,
  Network,
  Layers,
  HardHat,
  ArrowRightLeft,
  Wrench,
  AlertTriangle,
  Flame,
  FileCheck,
  CalendarDays,
} from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
import { BrokerApplicationModal } from "@/components/BrokerApplicationModal";
import Footer from "@/components/Footer";
import pickleballHeroImage from "@/assets/images/pickleball-hero.png";

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

const coverageOptions = [
  {
    icon: Shield,
    title: "General Liability",
    description: "Comprehensive protection against third-party claims for bodily injury, property damage, and personal injury occurring on your premises or during activities.",
  },
  {
    icon: FileText,
    title: "Accident Medical Expense",
    description: "Coverage for immediate medical expenses resulting from accidents during pickleball activities, regardless of fault.",
  },
  {
    icon: Building2,
    title: "Property Coverage",
    description: "Protection for your facility, equipment, and personal property against fire, theft, vandalism, and other covered perils.",
  },
  {
    icon: Building2,
    title: "Commercial Facility",
    description: "Specialized coverage for commercial pickleball facilities including business interruption and additional living expenses.",
  },
  {
    icon: Scale,
    title: "Errors & Omissions / Directors & Officers",
    description: "Professional liability protection for management decisions and coverage for directors and officers against lawsuits.",
  },
  {
    icon: Lock,
    title: "Crime / Cyber Liability",
    description: "Protection against employee dishonesty, theft, and cyber security breaches including data recovery and notification costs.",
  },
  {
    icon: Wine,
    title: "Alcohol Liability",
    description: "Coverage for incidents related to serving or selling alcoholic beverages at events and tournaments.",
  },
  {
    icon: UserX,
    title: "Abuse and Molestation",
    description: "Specialized coverage for claims involving abuse or molestation by staff, volunteers, or participants.",
  },
  {
    icon: ReceiptText,
    title: "Registration Refund",
    description: "Protection for member registration fees in case of event cancellation, facility closure, or other covered circumstances.",
  },
];

const whyChooseItems = [
  {
    title: "One Simple Application",
    description: "Complete a single comprehensive application that covers all your insurance needs - no multiple forms or complex processes.",
  },
  {
    title: "Quick Quote Turnaround",
    description: "Receive your customized quotes back quickly, allowing you to make informed decisions without delays.",
  },
  {
    title: "Same-Day Broker Appointments",
    description: "Brokers can submit business the same day they get appointed - streamlining the entire process.",
  },
  {
    title: "National Coverage",
    description: "Comprehensive coverage available nationwide with rates and coverage levels adjustable by state.",
  },
  {
    title: "Competitive Program Rates",
    description: "Our specialized pickleball program offers competitive rates tailored specifically for pickleball organizations.",
  },
  {
    title: "Comprehensive Protection",
    description: "Full suite of coverage options from General Liability to Cyber Security, ensuring complete protection.",
  },
];

const marketRates = [
  { name: "General Liability", market: "$35,000", matterhorn: "$28,000" },
  { name: "Property Coverage", market: "$15,000", matterhorn: "$12,000" },
  { name: "Directors & Officers", market: "$7,000", matterhorn: "$5,600" },
  { name: "Cyber Liability", market: "$2,500", matterhorn: "$2,000" },
];

export default function PickleballPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    agencyName: "",
    email: "",
    phone: "",
    licenseNumber: "",
    licensedState: "",
    yearsExperience: "",
    premiumVolume: "",
    currentCarriers: "",
    specialization: "",
    additionalInfo: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Broker application submitted:", formData);
  };

  const navItems = [
    { label: "Program", id: "program-highlights" },
    { label: "Coverage", id: "coverage" },
    { label: "Benefits", id: "why-choose" },
    { label: "Franchise", id: "franchise" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <CustomCursor />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <Mountain className="w-7 h-7 text-emerald-500 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">MATTERHORN</span>
                <span className="text-[10px] font-medium text-white/60 tracking-widest uppercase">Insurance Group</span>
              </div>
            </div>
          </Link>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-emerald-400/80 hover:text-emerald-400 transition-colors font-medium"
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <Button
            onClick={() => scrollToSection("program-highlights")}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
            data-testid="button-header-get-started"
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden min-h-[90vh] flex items-center" data-testid="section-hero">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src={pickleballHeroImage} 
            alt="Dynamic pickleball action" 
            className="w-full h-full object-cover"
          />
          {/* Dark gradient wash for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
          {/* Neon accent glows */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-500/20 text-emerald-400 border-emerald-500/30 backdrop-blur-sm" data-testid="badge-savings">
              <Sparkles className="w-3 h-3 mr-1" />
              Save 20% vs Market Rates
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl" data-testid="text-hero-title">
              Comprehensive Pickleball
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                {" "}Insurance Coverage
              </span>
            </h1>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto drop-shadow-lg" data-testid="text-hero-description">
              Protect your pickleball organization with our specialized insurance program. National coverage, state-adjustable rates, and one simple application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                asChild
                data-testid="button-get-started"
              >
                <a href="https://form.jotform.com/252675157861264" target="_blank" rel="noopener noreferrer">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white backdrop-blur-sm bg-white/10"
                asChild
                data-testid="button-learn-more"
              >
                <a href="mailto:support@matterhornprotects.com?subject=Pickleball Insurance Inquiry">
                  Learn More
                </a>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <Card className="bg-slate-900/70 backdrop-blur-md border-emerald-500/30 p-6 text-center shadow-lg shadow-emerald-500/10" data-testid="stat-all-risk">
              <Shield className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-2xl font-bold text-white">All Risk</p>
              <p className="text-slate-300">Coverage Available</p>
            </Card>
            <Card className="bg-slate-900/70 backdrop-blur-md border-emerald-500/30 p-6 text-center shadow-lg shadow-emerald-500/10" data-testid="stat-national">
              <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-2xl font-bold text-white">National</p>
              <p className="text-slate-300">Coverage Available</p>
            </Card>
            <Card className="bg-slate-900/70 backdrop-blur-md border-emerald-500/30 p-6 text-center shadow-lg shadow-emerald-500/10" data-testid="stat-quick">
              <Zap className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-2xl font-bold text-white">Quick</p>
              <p className="text-slate-300">Quote Turnaround</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Combined Coverage & Benefits Section */}
      <section id="coverage" className="py-24 relative overflow-hidden" data-testid="section-coverage">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-950 to-slate-900/80" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full blur-[100px] animate-pulse bg-emerald-500/10" />
          <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-[120px] animate-pulse bg-teal-500/8" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full blur-[80px] animate-pulse bg-cyan-500/6" style={{ animationDelay: "3s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">Complete Protection Suite</span>
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-emerald-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight" data-testid="text-coverage-title">
              Coverage Options &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                Program Benefits
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Experience comprehensive protection with our specialized pickleball program—designed for organizations like yours.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 max-w-7xl mx-auto">
            {/* Left Column - Coverage Accordions */}
            <div className="lg:col-span-7">
              <Card className="bg-slate-900/70 border-emerald-500/20 backdrop-blur-sm relative overflow-hidden" data-testid="card-coverage-accordions">
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)' }}>
                      <Shield className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Comprehensive Coverage</h3>
                      <p className="text-[11px] uppercase tracking-widest text-emerald-400/80">9 Coverage Types Available</p>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="space-y-2">
                    {coverageOptions.map((coverage, index) => {
                      const colors = ['emerald', 'teal', 'cyan'];
                      const colorClass = colors[index % 3];
                      return (
                        <AccordionItem key={index} value={`coverage-${index}`} className="border-white/10 rounded-lg overflow-hidden">
                          <AccordionTrigger className="text-sm text-white hover:text-emerald-400 py-3 px-4 bg-white/[0.03] hover:bg-white/[0.06] transition-all [&[data-state=open]]:bg-emerald-500/10 rounded-lg group">
                            <span className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-md bg-${colorClass}-500/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                <coverage.icon className={`w-4 h-4 text-${colorClass}-400`} />
                              </div>
                              <span className="font-medium text-left">{coverage.title}</span>
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pt-3 pb-4 px-4">
                            <div className="pl-11">
                              <p className="text-slate-400 text-sm leading-relaxed">{coverage.description}</p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                <span className="text-[9px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-slate-500 border border-white/10">
                                  Up to $5M Available
                                </span>
                                <span className="text-[9px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-slate-500 border border-white/10">
                                  Flexible Terms
                                </span>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </div>

                {/* Footer badges */}
                <div className="px-6 py-4 border-t border-white/10 bg-white/[0.02]">
                  <div className="flex flex-wrap gap-3 justify-center">
                    <span className="text-[9px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                      <Globe className="w-3 h-3" />
                      Nationwide
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      State-Adjustable
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
                      <DollarSign className="w-3 h-3" />
                      Competitive Rates
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Why Choose Benefits */}
            <div className="lg:col-span-5 space-y-4" id="why-choose">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">Why Choose Matterhorn?</h3>
              </div>
              
              {whyChooseItems.map((item, index) => (
                <Card 
                  key={index}
                  className="p-4 bg-slate-800/40 border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 group cursor-pointer"
                  data-testid={`card-why-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-[10px] font-bold text-emerald-400">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white text-sm mb-1 group-hover:text-emerald-400 transition-colors">{item.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
                </Card>
              ))}

              {/* CTA Card */}
              <Card className="p-5 bg-[#0D1B2A] border-emerald-500/40 mt-6 relative overflow-hidden" data-testid="card-cta-apply">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/25 to-teal-900/15 pointer-events-none" />
                <div className="flex items-center gap-3 mb-3 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center" style={{ boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)' }}>
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-emerald-400">Ready to Start?</p>
                    <p className="font-semibold text-white">Get Your Quote Today</p>
                  </div>
                </div>
                <Button
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium"
                  asChild
                  data-testid="button-apply-coverage-section"
                >
                  <a href="https://form.jotform.com/252675157861264" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4 mr-2" />
                    Start Application
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section id="program-highlights" className="py-24 relative overflow-hidden" data-testid="section-program-highlights">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-950" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[120px] animate-pulse bg-emerald-500/15" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-[100px] animate-pulse bg-teal-500/10" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-[80px] animate-pulse bg-cyan-500/8" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-1.5 bg-emerald-500/20 text-emerald-400 border-emerald-500/40" style={{ boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)' }}>
              <Star className="w-3 h-3 mr-1" />
              Comprehensive Program
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight" data-testid="heading-program-highlights">
              Program{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                Highlights & Enhancements
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Leading with competitive rating and specialized knowledge for pickleball facilities, clubs, and organizations.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Left Column - Highlights & Risk Types */}
            <div className="lg:col-span-7 space-y-6">
              {/* Main Card with Accordions */}
              <Card className="p-8 bg-slate-900/60 border-emerald-500/20 backdrop-blur-sm relative overflow-hidden" data-testid="card-program-details">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center" style={{ boxShadow: '0 0 25px rgba(16, 185, 129, 0.25)' }}>
                    <Award className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Pickleball Program Details</h3>
                    <p className="text-sm text-emerald-400">Up to $5M limits available</p>
                  </div>
                </div>

                <Accordion type="multiple" defaultValue={["highlights"]} className="space-y-3">
                  {/* Program Highlights Accordion */}
                  <AccordionItem value="highlights" className="border-white/10 rounded-lg overflow-hidden">
                    <AccordionTrigger className="text-base text-white hover:text-emerald-400 py-4 px-5 bg-white/5 hover:bg-white/10 transition-colors [&[data-state=open]]:bg-emerald-500/10 rounded-lg">
                      <span className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        <span className="font-semibold">Highlights & Enhancements</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <ul className="space-y-3">
                        {[
                          { text: "All Risk Coverage", highlight: false },
                          { text: "Up to $5,000,000 CGL", highlight: true },
                          { text: "$1,000,000 Abuse (Claims Made)", highlight: true },
                          { text: "Participants Liability included", highlight: false },
                          { text: "No Deductible on Qualifying Risks!", highlight: false },
                          { text: "Up to $5,000,000 Errors & Omissions", highlight: false },
                          { text: "$1,000,000 Malpractice (Claims Made)", highlight: false },
                          { text: "Up to $5,000,000 Tenants Legal Liability", highlight: false },
                          { text: "$1,000,000 Employer's Liability", highlight: false },
                          { text: "$1,000,000 Employee Benefits", highlight: false },
                          { text: "All trainers working on your behalf covered", highlight: false },
                          { text: "Property coverage available", highlight: false },
                          { text: "Coverage tailored with flexible terms", highlight: false },
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 group">
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${item.highlight ? 'bg-emerald-400' : 'bg-slate-500'}`} />
                            <span className={`text-sm ${item.highlight ? 'text-emerald-300 font-medium' : 'text-slate-300'} group-hover:text-white transition-colors`}>
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Risk Types Accordion */}
                  <AccordionItem value="risk-types" className="border-white/10 rounded-lg overflow-hidden">
                    <AccordionTrigger className="text-base text-white hover:text-emerald-400 py-4 px-5 bg-white/5 hover:bg-white/10 transition-colors [&[data-state=open]]:bg-teal-500/10 rounded-lg">
                      <span className="flex items-center gap-3">
                        <Target className="w-5 h-5 text-teal-400" />
                        <span className="font-semibold">Risk Types Covered</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "Individual & Group Instructors",
                          "Fitness Studios & Health Clubs",
                          "Indoor/Outdoor Facilities",
                          "Community Centers",
                          "Recreation Programs",
                          "Tournament Organizers",
                          "Leagues & Associations",
                          "Equipment Retailers",
                          "Coaching Academies",
                          "Corporate Events",
                        ].map((risk, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors group">
                            <ArrowRight className="w-3 h-3 text-teal-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                            <span>{risk}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300"
                    asChild
                    data-testid="button-start-application-highlights"
                  >
                    <a href="https://form.jotform.com/252675157861264" target="_blank" rel="noopener noreferrer">
                      <FileText className="w-5 h-5 mr-2" />
                      Start Your Application
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

            {/* Right Column - Callout & Quick Facts */}
            <div className="lg:col-span-5 space-y-6">
              {/* Competitive Advantage Callout */}
              <Card className="p-6 bg-[#0D1B2A] border-emerald-500/40 relative overflow-hidden group hover:border-emerald-400/50 transition-all duration-500" data-testid="card-competitive-advantage">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-teal-900/20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/15 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)' }}>
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Much Higher Starting Limits</h3>
                  <p className="text-emerald-400 text-lg font-medium mb-4">
                    Than our main competitors can offer
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Our program offers up to $5,000,000 in CGL limits with in-house binding authority, providing faster turnarounds and more competitive pricing.
                  </p>
                </div>
              </Card>

              {/* Quick Facts Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-5 bg-slate-800/50 border-slate-700 hover:border-emerald-500/40 transition-all group" data-testid="card-quick-fact-1">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">24-48hr</p>
                  <p className="text-slate-400 text-sm">Quote Turnaround</p>
                </Card>
                <Card className="p-5 bg-slate-800/50 border-slate-700 hover:border-teal-500/40 transition-all group" data-testid="card-quick-fact-2">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Globe className="w-5 h-5 text-teal-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">50 States</p>
                  <p className="text-slate-400 text-sm">National Coverage</p>
                </Card>
                <Card className="p-5 bg-slate-800/50 border-slate-700 hover:border-cyan-500/40 transition-all group" data-testid="card-quick-fact-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Shield className="w-5 h-5 text-cyan-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">A-Rated</p>
                  <p className="text-slate-400 text-sm">Carrier Partners</p>
                </Card>
                <Card className="p-5 bg-slate-800/50 border-slate-700 hover:border-emerald-500/40 transition-all group" data-testid="card-quick-fact-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">Same Day</p>
                  <p className="text-slate-400 text-sm">Appointments</p>
                </Card>
              </div>

              {/* Contact Card */}
              <Card className="p-5 bg-slate-800/50 border-slate-700" data-testid="card-contact-info">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  Need More Information?
                </h4>
                <p className="text-slate-400 text-sm mb-3">
                  Reach out to our team for program details and custom quotes.
                </p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:support@matterhornprotects.com" className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    support@matterhornprotects.com
                  </a>
                  <a href="tel:1-844-600-0611" className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    1-844-600-0611
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* New Facilities Program Section */}
      <section id="new-facilities" className="py-24 relative overflow-hidden" data-testid="section-new-facilities">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 left-1/4 w-96 h-96 rounded-full blur-[150px] animate-pulse bg-cyan-500/15" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-[120px] animate-pulse bg-teal-500/12" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full blur-[100px] animate-pulse bg-emerald-500/10" style={{ animationDelay: "3s" }} />
        </div>

        {/* Blueprint Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(34, 211, 238, 0.5) 49px, rgba(34, 211, 238, 0.5) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(34, 211, 238, 0.5) 49px, rgba(34, 211, 238, 0.5) 50px)' }} />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-1.5 bg-cyan-500/20 text-cyan-400 border-cyan-500/40" style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}>
              <HardHat className="w-3 h-3 mr-1" />
              For New Facility Builds
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" data-testid="text-new-facilities-title">
              Building a New Facility?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">
                We've Got You Covered
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From groundbreaking to grand opening, our Builder's Risk program protects your investment and seamlessly transitions to operational coverage as your facility comes to life.
            </p>
          </div>

          {/* Interactive Build Timeline */}
          <div className="max-w-5xl mx-auto mb-16">
            <Card className="p-8 bg-slate-900/70 border-cyan-500/20 backdrop-blur-sm relative overflow-hidden" data-testid="card-build-timeline">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500" />
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/10 flex items-center justify-center" style={{ boxShadow: '0 0 25px rgba(34, 211, 238, 0.2)' }}>
                  <ArrowRightLeft className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Seamless Coverage Transition</h3>
                  <p className="text-sm text-cyan-400">From Construction to Operations</p>
                </div>
              </div>

              {/* Timeline Visual */}
              <div className="relative">
                {/* Progress Bar Background */}
                <div className="absolute top-8 left-0 right-0 h-2 bg-slate-800 rounded-full" />
                {/* Animated Progress Fill */}
                <div className="absolute top-8 left-0 h-2 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 rounded-full" style={{ width: '100%', animation: 'shimmer 3s ease-in-out infinite' }} />
                
                {/* Timeline Steps */}
                <div className="grid grid-cols-4 gap-4 relative">
                  {[
                    { phase: "Pre-Build", icon: FileText, title: "Discovery & Planning", desc: "Site analysis, risk assessment, coverage design", color: "cyan", week: "Week 0" },
                    { phase: "Construction", icon: HardHat, title: "Builder's Risk Active", desc: "Property, liability, equipment coverage", color: "teal", week: "Months 1-12" },
                    { phase: "Transition", icon: ArrowRightLeft, title: "Coverage Migration", desc: "Phased transition to operational policies", color: "emerald", week: "Month 11-12" },
                    { phase: "Operations", icon: Building2, title: "Full Operational Coverage", desc: "Complete GL, property, D&O, cyber", color: "emerald", week: "Ongoing" },
                  ].map((step, index) => (
                    <div key={index} className="relative pt-14 group">
                      {/* Node */}
                      <div className={`absolute top-5 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-${step.color}-500 border-4 border-slate-900 shadow-lg shadow-${step.color}-500/40 group-hover:scale-125 transition-transform z-10`} />
                      
                      {/* Content Card */}
                      <div className={`p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-${step.color}-500/40 hover:bg-${step.color}-500/5 transition-all group-hover:translate-y-1`}>
                        <span className={`text-[9px] font-bold uppercase tracking-widest text-${step.color}-400 mb-2 block`}>{step.phase}</span>
                        <div className={`w-10 h-10 rounded-lg bg-${step.color}-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                          <step.icon className={`w-5 h-5 text-${step.color}-400`} />
                        </div>
                        <h4 className="font-semibold text-white text-sm mb-1">{step.title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed mb-2">{step.desc}</p>
                        <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-${step.color}-500/20 text-${step.color}-400 border border-${step.color}-500/30`}>{step.week}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-10 max-w-7xl mx-auto">
            {/* Left Column - Builder's Risk Details */}
            <div className="lg:col-span-7 space-y-6">
              <Card className="p-8 bg-slate-900/70 border-cyan-500/20 backdrop-blur-sm relative overflow-hidden" data-testid="card-builders-risk-details">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500" />
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/10 flex items-center justify-center" style={{ boxShadow: '0 0 30px rgba(34, 211, 238, 0.2)' }}>
                    <Shield className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Builder's Risk Coverage</h3>
                    <p className="text-sm text-cyan-400">Comprehensive Construction Protection</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: Building2, title: "Course of Construction", desc: "Protects your building and materials from day one through completion", color: "cyan" },
                    { icon: Wrench, title: "Equipment & Materials", desc: "Coverage for installed and stored construction materials on-site", color: "teal" },
                    { icon: HardHat, title: "Contractor Liability", desc: "Protection against third-party claims during construction", color: "emerald" },
                    { icon: AlertTriangle, title: "Soft Costs Coverage", desc: "Extended overhead, financing, and delay expenses", color: "cyan" },
                    { icon: Flame, title: "Fire & Natural Disasters", desc: "Comprehensive property coverage for construction risks", color: "teal" },
                    { icon: FileCheck, title: "Permit & Code Updates", desc: "Coverage for code-required changes during build", color: "emerald" },
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start gap-4 p-4 rounded-lg bg-white/[0.03] border border-white/5 hover:border-${item.color}-500/30 transition-all group`}>
                      <div className={`w-10 h-10 rounded-lg bg-${item.color}-500/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Transition Highlight */}
                <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-emerald-500/10 border border-cyan-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30">
                      <ArrowRightLeft className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Seamless Transition Included</h4>
                      <p className="text-white/80 text-sm leading-relaxed">
                        As your facility nears completion, we automatically begin transitioning your coverage from Builder's Risk to full operational policies. No gaps, no lapses—just continuous protection from construction through your first member check-in.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Case Study & CTA */}
            <div className="lg:col-span-5 space-y-6">
              {/* Case Study Card */}
              <Card className="p-6 bg-[#0D1B2A] border-cyan-500/40 relative overflow-hidden group" data-testid="card-new-facility-case-study">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 to-teal-900/20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/15 rounded-full blur-3xl group-hover:bg-cyan-500/25 transition-all pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="relative z-10">
                  <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                    <Star className="w-3 h-3 mr-1" />
                    Case Study
                  </Badge>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">Smash City Sports Complex</h3>
                  <p className="text-cyan-400 font-medium mb-4">32-Court Indoor Facility • Phoenix, AZ</p>
                  
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    A broker partner approached us during the planning phase of a $12M, 80,000 sq ft indoor pickleball complex. We designed a comprehensive program covering the entire 14-month build and seamlessly transitioned them to operational coverage at opening.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">$12M</p>
                      <p className="text-xs text-slate-400 mt-1">Project Value</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">14 Mo</p>
                      <p className="text-xs text-slate-400 mt-1">Build Timeline</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">0 Days</p>
                      <p className="text-xs text-slate-400 mt-1">Coverage Gaps</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">18%</p>
                      <p className="text-xs text-slate-400 mt-1">Cost Savings</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-white/80">Full Builder's Risk through construction</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                      <span className="text-white/80">Phased transition starting Month 12</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80">Opening day with full operational coverage</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Discovery Call CTA */}
              <Card className="p-6 bg-gradient-to-br from-cyan-900/30 to-teal-900/20 border-cyan-500/30 relative overflow-hidden" data-testid="card-discovery-call-cta">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center" style={{ boxShadow: '0 0 35px rgba(34, 211, 238, 0.4)' }}>
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-cyan-400">Planning a Build?</p>
                      <p className="font-bold text-white text-lg">Pre-Build Discovery Call</p>
                    </div>
                  </div>
                  <p className="text-white/75 text-sm mb-5 leading-relaxed">
                    Connect with our construction specialists before breaking ground. We'll analyze your project plans, identify all necessary coverages, and design a comprehensive program that protects you from day one through opening.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                      </div>
                      Review construction documents & timeline
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-teal-400" />
                      </div>
                      Identify all coverage requirements
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                      </div>
                      Design transition-ready program
                    </li>
                  </ul>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
                    asChild
                    data-testid="button-schedule-discovery-call"
                  >
                    <a href="mailto:construction@matterhornprotects.com?subject=New Facility Build - Discovery Call Request">
                      <CalendarDays className="w-5 h-5 mr-2" />
                      Schedule Discovery Call
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                  <p className="text-center text-cyan-400/70 text-xs mt-4">
                    Or call directly: 1-844-600-0611
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-20 bg-slate-900/50" data-testid="section-cost-comparison">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
              Real Savings Example
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-comparison-title">
              See How We Beat Market Rates
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Compare our program rates against typical market pricing for a mid-size pickleball organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Market Rates */}
            <Card className="bg-slate-800/50 border-slate-700 p-6" data-testid="card-market-rates">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white">Market Rates</h3>
                <p className="text-slate-400">Typical insurance pricing</p>
              </div>
              <div className="space-y-4">
                {marketRates.map((rate, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-slate-300">{rate.name}</span>
                    <span className="text-white font-semibold">{rate.market}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-4">
                  <span className="text-lg font-bold text-white">Annual Total</span>
                  <span className="text-2xl font-bold text-white">$80,000</span>
                </div>
              </div>
            </Card>

            {/* Matterhorn Rates */}
            <Card className="bg-emerald-900/30 border-emerald-600/50 p-6" data-testid="card-matterhorn-rates">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white">Matterhorn Program</h3>
                <p className="text-emerald-400">Our specialized rates</p>
              </div>
              <div className="space-y-4">
                {marketRates.map((rate, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-emerald-700/50">
                    <span className="text-slate-300">{rate.name}</span>
                    <span className="text-emerald-400 font-semibold">{rate.matterhorn}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-4">
                  <span className="text-lg font-bold text-white">Annual Total</span>
                  <span className="text-2xl font-bold text-emerald-400">$64,000</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-emerald-500/20 rounded-lg text-center">
                <p className="text-3xl font-bold text-emerald-400">$16,000 Saved</p>
                <p className="text-emerald-300">20% Annual Savings</p>
              </div>
            </Card>
          </div>

          <p className="text-center text-slate-400 mt-8 max-w-2xl mx-auto">
            This example shows typical savings for a mid-size organization. Your actual savings may vary based on location, coverage limits, and risk factors.
          </p>
        </div>
      </section>

      {/* Franchise Programs Section */}
      <section id="franchise" className="py-24 relative overflow-hidden" data-testid="section-franchise">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[150px] animate-pulse bg-emerald-500/20" />
          <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full blur-[120px] animate-pulse bg-teal-500/15" style={{ animationDelay: "2s" }} />
          <div className="absolute -bottom-40 left-1/3 w-72 h-72 rounded-full blur-[100px] animate-pulse bg-cyan-500/10" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-1.5 bg-emerald-500/20 text-emerald-400 border-emerald-500/40" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' }}>
              <Network className="w-3 h-3 mr-1" />
              For Franchise Organizations
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" data-testid="text-franchise-title">
              Franchise Insurance Programs{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                That Drive Growth
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Transform insurance from a cost center into a competitive advantage. Our franchise programs leverage collective buying power while creating new revenue streams for your organization.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-10 max-w-7xl mx-auto">
            {/* Left Column - Benefits Accordions */}
            <div className="lg:col-span-7 space-y-6">
              {/* Benefits Card with Accordions */}
              <Card className="p-8 bg-slate-900/70 border-emerald-500/20 backdrop-blur-sm relative overflow-hidden" data-testid="card-franchise-benefits-accordion">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 flex items-center justify-center" style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.2)' }}>
                    <Layers className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Franchise Program Benefits</h3>
                    <p className="text-sm text-emerald-400">For Franchisors & Franchisees</p>
                  </div>
                </div>

                <Accordion type="multiple" defaultValue={["franchisor-benefits"]} className="space-y-4">
                  {/* Benefits for Franchisors */}
                  <AccordionItem value="franchisor-benefits" className="border-white/10 rounded-xl overflow-hidden">
                    <AccordionTrigger className="text-base text-white hover:text-emerald-400 py-5 px-6 bg-gradient-to-r from-emerald-500/10 to-transparent hover:from-emerald-500/20 transition-all [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-emerald-500/20 [&[data-state=open]]:to-teal-500/10 rounded-xl">
                      <span className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div className="text-left">
                          <span className="font-bold block">Benefits for Franchisors</span>
                          <span className="text-xs text-emerald-400/80">Corporate-level advantages</span>
                        </div>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6 px-6">
                      <div className="grid gap-4">
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors group">
                          <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <TrendingUp className="w-5 h-5 text-emerald-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">New Revenue Stream</h4>
                            <p className="text-sm text-slate-400">Earn ongoing revenue through our franchise program structure. Create a profit center from a traditionally expense-only category.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors group">
                          <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Shield className="w-5 h-5 text-emerald-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">Brand Protection</h4>
                            <p className="text-sm text-slate-400">Ensure all locations maintain proper coverage. Protect your brand reputation with standardized, vetted insurance across the network.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors group">
                          <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <BarChart3 className="w-5 h-5 text-emerald-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">Compliance Dashboard</h4>
                            <p className="text-sm text-slate-400">Real-time visibility into franchisee coverage status. Track renewals, claims, and compliance across your entire network.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors group">
                          <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <DollarSign className="w-5 h-5 text-emerald-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">Volume Pricing Power</h4>
                            <p className="text-sm text-slate-400">Leverage the collective purchasing power of your network to negotiate better rates than any single location could achieve.</p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Benefits for Franchisees */}
                  <AccordionItem value="franchisee-benefits" className="border-white/10 rounded-xl overflow-hidden">
                    <AccordionTrigger className="text-base text-white hover:text-teal-400 py-5 px-6 bg-gradient-to-r from-teal-500/10 to-transparent hover:from-teal-500/20 transition-all [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-teal-500/20 [&[data-state=open]]:to-cyan-500/10 rounded-xl">
                      <span className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center">
                          <Users className="w-5 h-5 text-teal-400" />
                        </div>
                        <div className="text-left">
                          <span className="font-bold block">Benefits for Franchisees</span>
                          <span className="text-xs text-teal-400/80">Location-level advantages</span>
                        </div>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6 px-6">
                      <div className="grid gap-4">
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.03] border border-white/5 hover:border-teal-500/30 transition-colors group">
                          <div className="w-10 h-10 rounded-lg bg-teal-500/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <TrendingDown className="w-5 h-5 text-teal-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">15-25% Premium Savings</h4>
                            <p className="text-sm text-slate-400">Access group pricing not available to individual operators. Reduce your largest fixed cost with enterprise-level rates.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.03] border border-white/5 hover:border-teal-500/30 transition-colors group">
                          <div className="w-10 h-10 rounded-lg bg-teal-500/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Clock className="w-5 h-5 text-teal-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">Simplified Enrollment</h4>
                            <p className="text-sm text-slate-400">Pre-negotiated terms mean faster onboarding. Get covered in days, not weeks, with streamlined applications.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.03] border border-white/5 hover:border-teal-500/30 transition-colors group">
                          <div className="w-10 h-10 rounded-lg bg-teal-500/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <BadgeCheck className="w-5 h-5 text-teal-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">Pre-Approved Coverage</h4>
                            <p className="text-sm text-slate-400">Coverage designed specifically for your franchise model. No guessing about what's covered or excluded.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.03] border border-white/5 hover:border-teal-500/30 transition-colors group">
                          <div className="w-10 h-10 rounded-lg bg-teal-500/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Handshake className="w-5 h-5 text-teal-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">Dedicated Support</h4>
                            <p className="text-sm text-slate-400">Access to specialists who know your business. Get expert help with claims, certificates, and coverage questions.</p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* How We Set It Up */}
                  <AccordionItem value="setup-process" className="border-white/10 rounded-xl overflow-hidden">
                    <AccordionTrigger className="text-base text-white hover:text-cyan-400 py-5 px-6 bg-gradient-to-r from-cyan-500/10 to-transparent hover:from-cyan-500/20 transition-all [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-cyan-500/20 [&[data-state=open]]:to-emerald-500/10 rounded-xl">
                      <span className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="text-left">
                          <span className="font-bold block">How We Set Up Your Program</span>
                          <span className="text-xs text-cyan-400/80">Our implementation process</span>
                        </div>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6 px-6">
                      <div className="space-y-6">
                        {[
                          { step: 1, title: "Discovery Call", desc: "We analyze your franchise structure, current coverage, and goals. Our team reviews your FDD and existing requirements.", time: "Week 1" },
                          { step: 2, title: "Program Design", desc: "Custom coverage specifications tailored to your operations. We negotiate preferred rates with A-rated carriers.", time: "Week 2-3" },
                          { step: 3, title: "Platform Setup", desc: "Configure your branded enrollment portal. Set up compliance tracking and automated renewals.", time: "Week 3-4" },
                          { step: 4, title: "Rollout & Training", desc: "Launch communication to franchisees. Training for your team on program management and reporting.", time: "Week 4-5" },
                          { step: 5, title: "Ongoing Support", desc: "Dedicated account manager for your network. Quarterly reviews and annual program optimization.", time: "Ongoing" },
                        ].map((item) => (
                          <div key={item.step} className="flex items-start gap-4 group">
                            <div className="relative">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                                {item.step}
                              </div>
                              {item.step < 5 && (
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                              )}
                            </div>
                            <div className="flex-1 pb-4">
                              <div className="flex items-center gap-3 mb-1">
                                <h4 className="font-semibold text-white">{item.title}</h4>
                                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">{item.time}</span>
                              </div>
                              <p className="text-sm text-slate-400">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            </div>

            {/* Right Column - Case Study & Stats */}
            <div className="lg:col-span-5 space-y-6">
              {/* Case Study Card */}
              <Card className="p-6 bg-[#0D1B2A] border-emerald-500/40 relative overflow-hidden group" data-testid="card-franchise-case-study">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-teal-900/20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/15 rounded-full blur-3xl group-hover:bg-emerald-500/25 transition-all pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="relative z-10">
                  <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                    <Star className="w-3 h-3 mr-1" />
                    Case Study
                  </Badge>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">Dink & Drive Clubs</h3>
                  <p className="text-emerald-400 font-medium mb-4">National Franchise Network</p>
                  
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    Dink & Drive Clubs, one of the fastest-growing pickleball franchise networks, partnered with Matterhorn to create a comprehensive insurance program for their 50+ locations nationwide.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">23%</p>
                      <p className="text-xs text-slate-400 mt-1">Average Savings</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">50+</p>
                      <p className="text-xs text-slate-400 mt-1">Locations Covered</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">3 Days</p>
                      <p className="text-xs text-slate-400 mt-1">New Location Setup</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">100%</p>
                      <p className="text-xs text-slate-400 mt-1">Compliance Rate</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <p className="text-white/90 text-sm italic leading-relaxed">
                      "Matterhorn transformed our insurance from a headache into a competitive advantage. New franchisees get covered in days, and we've created a meaningful revenue stream while protecting our brand."
                    </p>
                    <p className="text-emerald-400 text-sm font-medium mt-3">— Franchise Operations Director</p>
                  </div>
                </div>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-5 bg-slate-800/50 border-slate-700 hover:border-emerald-500/40 transition-all group" data-testid="card-stat-savings">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <DollarSign className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">15-25%</p>
                  <p className="text-slate-400 text-sm">Group Savings</p>
                </Card>
                <Card className="p-5 bg-slate-800/50 border-slate-700 hover:border-teal-500/40 transition-all group" data-testid="card-stat-setup">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 text-teal-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">4-5 Weeks</p>
                  <p className="text-slate-400 text-sm">Program Launch</p>
                </Card>
              </div>

              {/* CTA Card */}
              <Card className="p-6 bg-gradient-to-br from-emerald-900/30 to-teal-900/20 border-emerald-500/30 relative overflow-hidden" data-testid="card-franchise-cta">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center" style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)' }}>
                      <Handshake className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-emerald-400">Ready to Get Started?</p>
                      <p className="font-bold text-white text-lg">Schedule a Franchise Consultation</p>
                    </div>
                  </div>
                  <p className="text-white/75 text-sm mb-5">
                    Our franchise specialists will analyze your network and design a custom program that protects your brand while creating new revenue opportunities.
                  </p>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
                    asChild
                    data-testid="button-schedule-franchise-consultation"
                  >
                    <a href="mailto:franchise@matterhornprotects.com?subject=Franchise Program Inquiry">
                      <Mail className="w-5 h-5 mr-2" />
                      Contact Franchise Team
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                  <p className="text-center text-emerald-400/70 text-xs mt-4">
                    Or call us directly: 1-844-600-0611
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Broker Territory Section */}
      <section className="py-20 bg-slate-900/50" data-testid="section-broker-tools">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
              For Insurance Brokers
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-broker-tools-title">
              Request Your Territory
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Secure exclusive access to pickleball facilities in your market. Book a call with our team to claim your territory and start writing business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Why Claim Territory */}
            <Card className="bg-slate-800/50 border-slate-700 p-6" data-testid="card-territory-benefits">
              <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Exclusive Access</h3>
              <p className="text-slate-400 mb-4">Get exclusive rights to pickleball facilities in your designated territory with no competition from other Matterhorn brokers.</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  Protected market area
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  Pre-qualified lead lists
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  Marketing support
                </li>
              </ul>
            </Card>

            {/* Book a Call CTA */}
            <Card className="bg-[#0D1B2A] border-emerald-500/40 p-6 relative overflow-hidden" data-testid="card-book-call">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-teal-900/20 pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Book a Territory Call</h3>
                <p className="text-white/80 mb-6">Schedule a 15-minute call with our team to discuss available territories and get started.</p>
                <Button 
                  size="lg"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30"
                  asChild
                  data-testid="button-book-call"
                >
                  <a href="tel:1-844-600-0611">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us Now
                  </a>
                </Button>
                <p className="text-center text-emerald-400/80 text-sm mt-4">
                  Available Mon-Fri, 9am-5pm EST
                </p>
              </div>
            </Card>

            {/* What to Expect */}
            <Card className="bg-slate-800/50 border-slate-700 p-6" data-testid="card-what-to-expect">
              <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">What to Expect</h3>
              <p className="text-slate-400 mb-4">On our call, we'll discuss your experience and help you select the right territory for your business.</p>
              <ol className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="bg-emerald-600 text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs">1</span>
                  <span>Review available territories</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-emerald-600 text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs">2</span>
                  <span>Discuss your experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-emerald-600 text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs">3</span>
                  <span>Claim your market</span>
                </li>
              </ol>
            </Card>
          </div>
        </div>
      </section>

      {/* Submission Options Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950" data-testid="section-submission-options">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/40 mb-4">
              Submit Your Application
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="text-submission-title">
              Two Ways to Get Started
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Submit your existing application materials or complete our comprehensive form—either way, we'll shop your risk with our curated A-rated markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Upload Option */}
            <Card className="p-8 bg-slate-800/50 border-slate-700 hover:border-emerald-600/50 transition-all duration-300 group" data-testid="card-upload-option">
              <div className="w-14 h-14 rounded-lg bg-emerald-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Upload className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Upload Existing Application</h3>
              <p className="text-slate-400 mb-6">
                Already have an application package? Upload your existing ACORD forms, loss runs, and supporting documents in any format.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>ACORD forms, PDFs, or custom apps accepted</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Include loss runs (3-5 years preferred)</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>We triage and confirm completeness</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Indication within 24-48 hours</span>
                </li>
              </ul>
            </Card>

            {/* Digital Application Option */}
            <Card className="p-8 bg-slate-800/50 border-slate-700 hover:border-emerald-600/50 transition-all duration-300 group" data-testid="card-digital-option">
              <div className="w-14 h-14 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Complete Digital Application</h3>
              <p className="text-slate-400 mb-6">
                Use our comprehensive online application designed specifically for pickleball risks. Quick, guided, and optimized for fast quoting.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Purpose-built for pickleball facilities</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Guided questions for complete submissions</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Automatic routing to best-fit markets</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Same-day indications on clean risks</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Start Application Button */}
          <div className="text-center mb-12">
            <Button 
              size="lg"
              className="bg-emerald-600 group"
              asChild
              data-testid="button-start-pickleball-application"
            >
              <a href="https://form.jotform.com/252675157861264" target="_blank" rel="noopener noreferrer">
                Start Your Pickleball Application
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* How It Works */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white text-center mb-8">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: "1", title: "Submit", desc: "Upload docs or complete our form" },
                { step: "2", title: "UW Review", desc: "Our team evaluates your risk" },
                { step: "3", title: "Quote", desc: "Receive quotes from curated markets" },
                { step: "4", title: "Bind", desc: "Select coverage and get protected" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold mb-2">
                      {item.step}
                    </div>
                    <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                    <p className="text-slate-400 text-xs">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <ArrowRight className="w-5 h-5 text-slate-600 hidden md:block flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950" data-testid="section-final-cta">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="text-cta-title">
            Ready to Get Protected?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Start your application today and join thousands of pickleball organizations that trust Matterhorn for their insurance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-emerald-600 px-8 py-6 text-lg"
              onClick={() => setContactModalOpen(true)}
              data-testid="button-start-application"
            >
              Start Your Application
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 text-lg"
              data-testid="button-call-us"
            >
              <a href="tel:1-844-600-0611">
                <Phone className="w-5 h-5 mr-2" />
                Call Us: 1-844-600-0611
              </a>
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400">
            <a 
              href="mailto:support@matterhornprotects.com" 
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              data-testid="link-email"
            >
              <Mail className="w-5 h-5" />
              support@matterhornprotects.com
            </a>
            <a 
              href="tel:1-844-600-0611" 
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              data-testid="link-phone"
            >
              <Phone className="w-5 h-5" />
              1-844-600-0611
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <BrokerApplicationModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen} 
      />
    </div>
  );
}
