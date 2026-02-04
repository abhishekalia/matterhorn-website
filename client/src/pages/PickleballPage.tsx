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
} from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
import { BrokerApplicationModal } from "@/components/BrokerApplicationModal";
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
            <Card className="bg-slate-900/70 backdrop-blur-md border-emerald-500/30 p-6 text-center shadow-lg shadow-emerald-500/10" data-testid="stat-same-day">
              <Clock className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-2xl font-bold text-white">Same Day</p>
              <p className="text-slate-300">Broker Appointments</p>
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
                          { text: "Up to $5,000,000 CGL in-house capabilities", highlight: true },
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
                          { text: "15% Commission", highlight: true },
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
              <Card className="p-6 bg-gradient-to-br from-emerald-900/50 to-teal-900/30 border-emerald-500/30 relative overflow-hidden group hover:border-emerald-400/50 transition-all duration-500" data-testid="card-competitive-advantage">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/15 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)' }}>
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Much Higher Starting Limits</h3>
                  <p className="text-emerald-300 text-lg font-medium mb-4">
                    Than our main competitors can offer
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
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
                    <Users className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">15%</p>
                  <p className="text-slate-400 text-sm">Commission</p>
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

      {/* Coverage Options Section */}
      <section id="coverage" className="py-20 bg-slate-900/50" data-testid="section-coverage">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-coverage-title">
              Comprehensive Coverage Options
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Our specialized program covers all aspects of your pickleball organization with tailored protection designed specifically for the unique risks you face.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageOptions.map((coverage, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800 transition-colors"
                data-testid={`card-coverage-${index}`}
              >
                <coverage.icon className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{coverage.title}</h3>
                <p className="text-slate-400">{coverage.description}</p>
              </Card>
            ))}
          </div>

          <p className="text-center text-slate-400 mt-8">
            All coverage options are available with state-adjustable rates and limits to meet your specific needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
              <Globe className="w-4 h-4 mr-2" />
              Available Nationwide
            </Badge>
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
              <MapPin className="w-4 h-4 mr-2" />
              Adjustable by State
            </Badge>
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
              <DollarSign className="w-4 h-4 mr-2" />
              Competitive Rates
            </Badge>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-choose" className="py-20" data-testid="section-why-choose">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-why-choose-title">
              Why Choose the Matterhorn Program?
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Experience the benefits of our specialized pickleball insurance program designed specifically for organizations like yours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseItems.map((item, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 p-6"
                data-testid={`card-why-${index}`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </Card>
            ))}
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
      <section id="franchise" className="py-20" data-testid="section-franchise">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
              For Franchise Organizations
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-franchise-title">
              Franchise Programs That Work
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Specialized insurance solutions designed for pickleball franchises. Leverage collective buying power while generating revenue for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Why Franchise Programs Make Sense</h3>
              <div className="space-y-6">
                <Card className="bg-slate-800/50 border-slate-700 p-6">
                  <h4 className="text-lg font-bold text-emerald-400 mb-2">Leverage Buying Power</h4>
                  <p className="text-slate-400">Take advantage of our collective negotiating power to secure better rates and terms for your franchise network.</p>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700 p-6">
                  <h4 className="text-lg font-bold text-emerald-400 mb-2">Generate Revenue</h4>
                  <p className="text-slate-400">Earn additional revenue streams through our franchise program while providing valuable protection to your network.</p>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700 p-6">
                  <h4 className="text-lg font-bold text-emerald-400 mb-2">Eliminate Coverage Gaps</h4>
                  <p className="text-slate-400">Ensure consistent, comprehensive coverage across all franchise locations with standardized protection.</p>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700 p-6">
                  <h4 className="text-lg font-bold text-emerald-400 mb-2">Support Your Franchisees</h4>
                  <p className="text-slate-400">Provide your franchise partners with access to specialized insurance at competitive group rates.</p>
                </Card>
              </div>
            </div>

            <div>
              <Card className="bg-slate-800/50 border-slate-700 p-8" data-testid="card-franchise-benefits">
                <h3 className="text-2xl font-bold text-white mb-6">Franchise Program Benefits</h3>
                <div className="text-center mb-6">
                  <p className="text-5xl font-bold text-emerald-400">15-25%</p>
                  <p className="text-slate-400">Additional Group Savings</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-slate-300">Standardized Coverage</span>
                    <span className="text-emerald-400">✓ Included</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-slate-300">Revenue Sharing</span>
                    <span className="text-emerald-400">✓ Available</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-slate-300">Dedicated Support</span>
                    <span className="text-emerald-400">✓ Included</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-300">Flexible Terms</span>
                    <span className="text-emerald-400">✓ Available</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700"
                  data-testid="button-franchise-learn-more"
                >
                  Learn More About Franchise Programs
                </Button>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 p-6 mt-6">
                <h4 className="text-lg font-bold text-white mb-2">Ready to Explore Franchise Options?</h4>
                <p className="text-slate-400 mb-4">Contact our franchise specialist to discuss how our program can benefit your organization and create new revenue opportunities.</p>
                <Button variant="outline" className="border-emerald-600 text-emerald-400 hover:bg-emerald-600/20" data-testid="button-contact-franchise">
                  Contact Franchise Specialist
                </Button>
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
            <Card className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border-emerald-500/30 p-6 relative overflow-hidden" data-testid="card-book-call">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Book a Territory Call</h3>
                <p className="text-slate-300 mb-6">Schedule a 15-minute call with our team to discuss available territories and get started.</p>
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
      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <Link href="/">
            <div className="flex items-center justify-center gap-3 cursor-pointer group mb-4">
              <Mountain className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-white leading-tight">MATTERHORN</span>
                <span className="text-[9px] font-medium text-white/60 tracking-widest uppercase">Insurance Group</span>
              </div>
            </div>
          </Link>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Matterhorn Insurance Group. All rights reserved.
          </p>
        </div>
      </footer>

      <BrokerApplicationModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen} 
      />
    </div>
  );
}
