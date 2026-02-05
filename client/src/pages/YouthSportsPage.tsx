import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BrokerApplicationModal } from "@/components/BrokerApplicationModal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield,
  Clock,
  MapPin,
  Zap,
  FileText,
  Users,
  Building2,
  Scale,
  CheckCircle,
  ArrowRight,
  Download,
  Search,
  Globe,
  DollarSign,
  Award,
  Briefcase,
  HeadphonesIcon,
  Calendar,
  MessageSquare,
  Phone,
  Mail,
  Mountain,
  Moon,
  Sun,
  Plane,
  Package,
  CloudRain,
  Settings,
  Network,
  BookOpen,
  Handshake,
  TrendingUp,
  Layers,
  Cpu,
  Target,
  Trophy,
  Heart,
  Tent,
  GraduationCap,
  TrendingDown,
  ChevronDown,
} from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
import heroBg from "@assets/stock_images/youth_sports_hero.jpg";
import youthLeagueImg from "@assets/stock_images/youth_soccer_practic_7460c554.jpg";
import youthCoachingImg from "@assets/stock_images/youth_basketball_gam_dd1940dd.jpg";
import wayneGutridgePhoto from "@assets/avatars/wayne_gutridge_avatar.png";
import isaacAllenPhoto from "@assets/avatars/isaac_allen_avatar.png";
import mikeAsselinPhoto from "@assets/avatars/mike_asselin_avatar.png";

export default function YouthSportsPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [zipCode, setZipCode] = useState("");
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  // Leadership team data
  const leadership = [
    {
      name: "Wayne Gutridge",
      title: "Managing Director",
      description: "A visionary leader in specialty insurance, Wayne founded Matterhorn with a mission to revolutionize program design for youth organizations.",
      territory: "National",
      photo: wayneGutridgePhoto,
    },
    {
      name: "Isaac Allen",
      title: "Managing Director",
      description: "Isaac brings deep expertise in sports risk management and carrier relationships, ensuring our youth sports programs meet evolving needs.",
      territory: "National",
      photo: isaacAllenPhoto,
    },
    {
      name: "Mike Asselin",
      title: "Chief Operating Officer",
      description: "Mike's background in sports management and player development drives our youth sports division's operational excellence.",
      territory: "National",
      photo: mikeAsselinPhoto,
    },
  ];

  // Why Matterhorn data
  const whyMatterhorn = [
    {
      title: "Specialty Expertise",
      description: "Deep knowledge of youth sports risks with tailored coverage solutions designed by industry veterans.",
      icon: Award,
    },
    {
      title: "60+ Years Experience",
      description: "Over six decades of youth sports expertise, ensuring comprehensive protection for every program.",
      icon: Trophy,
    },
    {
      title: "Nationwide Coverage",
      description: "Coverage available in all 50 states with programs serving 3+ million participants annually.",
      icon: Globe,
    },
    {
      title: "Technology-Enabled",
      description: "Digital enrollment, instant certificates, and automated participant management for seamless operations.",
      icon: Settings,
    },
  ];

  // Available markets data
  const availableMarkets = [
    { name: "Markel", rating: "A+" },
    { name: "Philadelphia Insurance", rating: "A+" },
    { name: "Great American", rating: "A" },
    { name: "Nationwide", rating: "A+" },
    { name: "Tokio Marine", rating: "A++" },
    { name: "Chubb", rating: "A++" },
  ];

  // Featured applications data
  const featuredApplications = [
    {
      title: "Youth Sports Organizations",
      description: "Comprehensive coverage for recreational leagues, competitive programs, and travel teams.",
      icon: Users,
      features: ["General Liability", "Participant Accident", "D&O Coverage", "Equipment Protection"],
    },
    {
      title: "Sports Camps",
      description: "Specialized programs for day camps, overnight camps, and specialty training facilities.",
      icon: Tent,
      features: ["Camper Accident Medical", "Abuse & Molestation", "Property Coverage", "Travel Protection"],
    },
    {
      title: "Youth Leagues",
      description: "Comprehensive coverage for local, regional, and national youth league operations.",
      icon: Trophy,
      features: ["League Liability", "Volunteer Protection", "Event Coverage", "Tournament Insurance"],
    },
    {
      title: "Tournaments & Events",
      description: "Event-specific coverage for competitions, showcases, and multi-day tournaments.",
      icon: Calendar,
      features: ["Event Cancellation", "Spectator Liability", "Vendor Coverage", "Prize Indemnity"],
    },
    {
      title: "Sports Academies",
      description: "Year-round coverage for training academies, skill development programs, and elite athlete programs.",
      icon: GraduationCap,
      features: ["Professional Liability", "Instructor Coverage", "Facility Insurance", "Student Accident"],
    },
  ];

  // Case studies data
  const caseStudies = [
    {
      title: "Multi-State Youth Soccer League",
      category: "Youth League",
      challenge: "A large soccer organization operating in 8 states was facing fragmented coverage and inconsistent pricing across regions, with renewals taking months to coordinate.",
      solution: "We consolidated all coverage under a single comprehensive program with unified limits and centralized administration, reducing their annual premium by 22%.",
      results: { "Premium Savings": "22%", "States Unified": "8", "Renewal Time": "5 Days" },
      brokerBenefits: ["Single point of contact for all states", "Automated certificate generation", "Consolidated billing"],
      clientBenefits: ["Consistent coverage across all programs", "Reduced administrative burden", "Better claims experience"],
    },
    {
      title: "Summer Sports Camp Network",
      category: "Camps",
      challenge: "A network of 15 summer camps needed comprehensive coverage including abuse & molestation, but was struggling to find affordable options with proper limits.",
      solution: "Our specialty programs provided access to specialized camp coverage with enhanced A&M limits and integrated background check requirements.",
      results: { "Coverage Enhanced": "3x", "Camps Covered": "15", "Quote Turnaround": "48hrs" },
      brokerBenefits: ["Specialized camp expertise", "Streamlined enrollment", "Risk management resources"],
      clientBenefits: ["Enhanced A&M protection", "Integrated safety programs", "Parent confidence"],
    },
    {
      title: "Travel Baseball Organization",
      category: "Tournaments",
      challenge: "A travel baseball organization hosting 20+ tournaments annually needed event coverage that scaled with varying participant counts and venue requirements.",
      solution: "We created a master policy with per-event certificates and flexible participant limits, allowing seamless scaling for tournaments of any size.",
      results: { "Events Covered": "20+", "Flexibility": "100%", "Admin Time": "-70%" },
      brokerBenefits: ["Event-based pricing", "Instant certificates", "Venue compliance support"],
      clientBenefits: ["Scalable coverage", "Venue approval ready", "Tournament peace of mind"],
    },
  ];

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const programFeatures = [
    {
      icon: Award,
      title: "Specialized Coverage",
      description: "Exclusive access to insurance programs specifically designed for youth sports, ensuring comprehensive protection that meets industry standards.",
    },
    {
      icon: DollarSign,
      title: "Competitive Group Rates",
      description: "Access preferential pricing through our collective purchasing power. Our group programs deliver 15-25% savings compared to individual market rates.",
    },
    {
      icon: Network,
      title: "Nationwide Network",
      description: "Connect with a network of 3+ million youth sports participants across 50,000+ organizations. Instant credibility and streamlined enrollment for league directors.",
    },
    {
      icon: Cpu,
      title: "Automated Administration",
      description: "Digital platform handles participant enrollment, certificate generation, and renewal management automatically. Reduce administrative work by 70%.",
    },
    {
      icon: CheckCircle,
      title: "Program Compliance",
      description: "All coverage packages meet safety and insurance requirements for certification and grant eligibility.",
    },
    {
      icon: HeadphonesIcon,
      title: "Claims Support",
      description: "Dedicated claims team familiar with youth sports scenarios. Average claim resolution 40% faster than industry standard.",
    },
  ];

  const programSteps = [
    {
      step: 1,
      title: "Collective Negotiation",
      description: "We negotiate directly with A-rated carriers using combined volume from thousands of leagues to secure lower premiums.",
    },
    {
      step: 2,
      title: "Standardized Programs",
      description: "Pre-built coverage packages designed specifically for youth sports eliminate customization costs and streamline underwriting.",
    },
    {
      step: 3,
      title: "Risk Mitigation",
      description: "Safety training and certification requirements reduce claim frequency, resulting in lower rates for all participants.",
    },
    {
      step: 4,
      title: "Technology Integration",
      description: "Our platform provides automated enrollment, reducing administrative overhead and passing savings to you.",
    },
  ];

  const coverageSuite = [
    {
      icon: Shield,
      title: "General Liability",
      description: "Comprehensive protection for organizations, events, and facilities against third-party claims.",
    },
    {
      icon: FileText,
      title: "Accident Medical",
      description: "Medical coverage and accidental death & dismemberment protection for all participants.",
    },
    {
      icon: Plane,
      title: "Travel Insurance",
      description: "Coverage for teams traveling to tournaments, including trip cancellation and medical.",
    },
    {
      icon: Package,
      title: "Property & Gear",
      description: "Protection for equipment, uniforms, and facility property against damage or theft.",
    },
    {
      icon: CloudRain,
      title: "Contingency",
      description: "Event cancellation and weather-related coverage to protect your investment.",
    },
    {
      icon: Settings,
      title: "Custom Programs",
      description: "Tailored coverage solutions designed specifically for your league's unique needs.",
    },
  ];

  const youthLeagueFeatures = [
    "Youth Sports General Liability",
    "Accident Medical & AD&D",
    "Equipment & Gear Coverage",
    "Tournament Travel Protection",
  ];

  const coachingFeatures = [
    "Professional Liability",
    "Background Check Integration",
    "Training Compliance",
    "Abuse & Molestation Coverage",
  ];

  const brokerBenefits = [
    {
      icon: Globe,
      title: "Market Access",
      description: "10+ A-rated carriers with competitive rates and fast approvals",
    },
    {
      icon: Zap,
      title: "Automation Tools",
      description: "Digital submissions, automated billing, and instant COI generation",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "Expert underwriters and account managers to help you win",
    },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#0A1628] text-white' : 'bg-white text-gray-900'}`}>
      <CustomCursor />

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-[#0A1628]/90' : 'bg-white/90'} backdrop-blur-md border-b ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" data-testid="link-home-youth">
              <div className="flex items-center gap-3 cursor-pointer">
                <Mountain className="w-7 h-7 text-primary" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold leading-tight">MATTERHORN</span>
                  <span className={`text-[10px] font-medium tracking-widest uppercase ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>Insurance Group</span>
                </div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection("hero")}
                className={`text-sm font-medium ${isDarkMode ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("coverage")}
                className={`text-sm font-medium ${isDarkMode ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                data-testid="nav-programs"
              >
                Programs
              </button>
              <button 
                onClick={() => scrollToSection("brokers")}
                className={`text-sm font-medium ${isDarkMode ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                data-testid="nav-for-brokers"
              >
                For Brokers
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className={`text-sm font-medium ${isDarkMode ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                data-testid="nav-about"
              >
                About
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'} transition-colors`}
                data-testid="button-theme-toggle"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-primary"
                data-testid="button-get-quote-header"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Ken Burns Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 animate-[subtle-zoom_20s_ease-in-out_infinite_alternate]"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        
        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 via-[#0A1628]/50 to-[#0A1628]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/5 via-transparent to-[#00d4ff]/5" />
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff88]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00d4ff]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff00ff]/5 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Scan Line Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
        }} />
        
        {/* Floating Micro Text - Left Side */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 text-[10px] tracking-[0.3em] uppercase text-white/20 font-light">
          <div className="rotate-[-90deg] origin-left whitespace-nowrap">Youth Sports Protection</div>
          <div className="rotate-[-90deg] origin-left whitespace-nowrap ml-8">Est. 2024</div>
        </div>
        
        {/* Floating Micro Text - Right Side */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 text-[10px] tracking-[0.3em] uppercase text-white/20 font-light items-end">
          <div className="rotate-90 origin-right whitespace-nowrap">Nationwide Coverage</div>
          <div className="rotate-90 origin-right whitespace-nowrap mr-8">3M+ Participants</div>
        </div>
        
        {/* Corner Accent Lines */}
        <div className="absolute top-20 left-0 w-32 h-[1px] bg-gradient-to-r from-[#00ff88]/50 to-transparent" />
        <div className="absolute top-20 left-0 w-[1px] h-32 bg-gradient-to-b from-[#00ff88]/50 to-transparent" />
        <div className="absolute bottom-20 right-0 w-32 h-[1px] bg-gradient-to-l from-[#00d4ff]/50 to-transparent" />
        <div className="absolute bottom-20 right-0 w-[1px] h-32 bg-gradient-to-t from-[#00d4ff]/50 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Micro Text Above Badge */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#00ff88]/50" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#00ff88]/60 font-light">Matterhorn Protects</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#00ff88]/50" />
          </div>
          
          <Badge className="mb-6 bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30 backdrop-blur-sm px-4 py-2">
            Specialty Insurance for Youth Sports
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" data-testid="heading-hero">
            <span className="inline-block animate-[fadeInUp_0.8s_ease-out]">Youth Sports</span>
            <br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00ff88] to-white animate-[fadeInUp_0.8s_ease-out_0.2s_both]">Coverage</span>
          </h1>

          <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed" data-testid="description-hero">
            Comprehensive protection designed specifically for youth leagues, coaches, and participants.
            Tailored coverage solutions that grow with your organization.
          </p>
          
          {/* Micro Stats Row */}
          <div className="flex items-center justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-1">Markets</div>
              <div className="text-sm font-semibold text-[#00ff88]">10+</div>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-1">States</div>
              <div className="text-sm font-semibold text-[#00d4ff]">50</div>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-1">Coverages</div>
              <div className="text-sm font-semibold text-[#ff00ff]">15+</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              asChild
              className="bg-[#00ff88] text-black px-8 group"
              data-testid="button-get-started"
            >
              <a href="https://form.jotform.com/260276518705056" target="_blank" rel="noopener noreferrer">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/5 backdrop-blur-sm border-white/30 text-white px-8"
              onClick={() => setApplicationModalOpen(true)}
              data-testid="button-contact-team"
            >
              Contact Our Team
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 mt-12 animate-bounce">
            <span className="text-[9px] tracking-[0.3em] uppercase text-white/30">Scroll</span>
            <ChevronDown className="w-4 h-4 text-white/30" />
          </div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section id="program-highlights" className="py-24 relative overflow-hidden" style={{ background: isDarkMode ? 'linear-gradient(to bottom, #0A1628, #0F1D32)' : 'linear-gradient(to bottom, #f9fafb, #f3f4f6)' }} data-testid="section-program-highlights">
        {/* Animated Neon Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-[150px] animate-pulse bg-[#00ff88]/10" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-[120px] animate-pulse bg-[#00d4ff]/8" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[100px] animate-pulse bg-[#ff00ff]/5" style={{ animationDelay: "3s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#00ff88]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00ff88]">Youth Sports Coverage</span>
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#00ff88]" />
            </div>
            <Badge className="bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30 mb-6">
              Up to $5M Limits Available
            </Badge>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-program-highlights">
              Program{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#00ff88]">
                Highlights & Enhancements
              </span>
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Leading with competitive rating and specialized knowledge for youth sports organizations, leagues, and programs.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Left Column - Highlights & Risk Types */}
            <div className="lg:col-span-7 space-y-6">
              {/* Main Card with Accordions */}
              <Card className={`p-8 relative overflow-hidden ${isDarkMode ? 'bg-[#0A1628]/80 border-[#00ff88]/20' : 'bg-white border-gray-200'} backdrop-blur-sm`} data-testid="card-program-details">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#ff00ff]" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#00ff88]/20 flex items-center justify-center" style={{ boxShadow: '0 0 25px rgba(0, 255, 136, 0.25)' }}>
                    <Award className="w-6 h-6 text-[#00ff88]" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Youth Sports Program Details</h3>
                    <p className="text-sm text-[#00ff88]">Up to $5M limits available</p>
                  </div>
                </div>

                <Accordion type="multiple" defaultValue={["highlights"]} className="space-y-3">
                  {/* Program Highlights Accordion */}
                  <AccordionItem value="highlights" className={`${isDarkMode ? 'border-white/10' : 'border-gray-200'} rounded-lg overflow-hidden`}>
                    <AccordionTrigger className={`text-base py-4 px-5 transition-colors rounded-lg ${isDarkMode ? 'text-white hover:text-[#00ff88] bg-white/5 hover:bg-white/10 [&[data-state=open]]:bg-[#00ff88]/10' : 'text-gray-900 hover:text-[#00ff88] bg-gray-50 hover:bg-gray-100 [&[data-state=open]]:bg-[#00ff88]/10'}`}>
                      <span className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#00ff88]" />
                        <span className="font-semibold">Highlights & Enhancements</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <ul className="space-y-3">
                        {[
                          { text: "All Risk Coverage for Youth Organizations", highlight: false },
                          { text: "Up to $5,000,000 CGL", highlight: true },
                          { text: "$1,000,000 Abuse & Molestation (Claims Made)", highlight: true },
                          { text: "Participants Liability included", highlight: false },
                          { text: "No Deductible on Qualifying Risks!", highlight: false },
                          { text: "Up to $5,000,000 Errors & Omissions", highlight: false },
                          { text: "$1,000,000 Coaches Professional Liability", highlight: false },
                          { text: "Up to $5,000,000 D&O Coverage", highlight: false },
                          { text: "$1,000,000 Employer's Liability", highlight: false },
                          { text: "Accident Medical with AD&D", highlight: false },
                          { text: "All coaches and volunteers covered", highlight: false },
                          { text: "Property & Equipment coverage available", highlight: false },
                          { text: "Coverage tailored with flexible terms", highlight: false },
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 group">
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${item.highlight ? 'bg-[#00ff88]' : isDarkMode ? 'bg-slate-500' : 'bg-gray-400'}`} />
                            <span className={`text-sm ${item.highlight ? 'text-[#00ff88] font-medium' : isDarkMode ? 'text-slate-300' : 'text-gray-600'} group-hover:${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors`}>
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Risk Types Accordion */}
                  <AccordionItem value="risk-types" className={`${isDarkMode ? 'border-white/10' : 'border-gray-200'} rounded-lg overflow-hidden`}>
                    <AccordionTrigger className={`text-base py-4 px-5 transition-colors rounded-lg ${isDarkMode ? 'text-white hover:text-[#00d4ff] bg-white/5 hover:bg-white/10 [&[data-state=open]]:bg-[#00d4ff]/10' : 'text-gray-900 hover:text-[#00d4ff] bg-gray-50 hover:bg-gray-100 [&[data-state=open]]:bg-[#00d4ff]/10'}`}>
                      <span className="flex items-center gap-3">
                        <Target className="w-5 h-5 text-[#00d4ff]" />
                        <span className="font-semibold">Risk Types Covered</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "Youth Leagues & Associations",
                          "Travel Ball Teams",
                          "Recreational Programs",
                          "Summer Camps",
                          "Sports Academies",
                          "Tournament Organizers",
                          "Coaching Clinics",
                          "School Athletic Programs",
                          "Community Recreation Centers",
                          "After-School Programs",
                        ].map((risk, idx) => (
                          <div key={idx} className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors group`}>
                            <ArrowRight className="w-3 h-3 text-[#00d4ff] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                            <span>{risk}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* CTA Button */}
                <div className={`mt-8 pt-6 border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold shadow-lg shadow-[#00ff88]/30 hover:shadow-[#00ff88]/50 transition-all duration-300"
                    asChild
                    data-testid="button-start-application-highlights"
                  >
                    <a href="https://form.jotform.com/260276518705056" target="_blank" rel="noopener noreferrer">
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
              <Card className={`p-6 relative overflow-hidden group transition-all duration-500 ${isDarkMode ? 'bg-slate-800/90 border-slate-600 hover:border-[#00ff88]/50' : 'bg-white border-gray-200 hover:border-green-400 shadow-lg'}`} data-testid="card-competitive-advantage">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#00ff88]" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#00ff88] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ boxShadow: '0 0 30px rgba(0, 255, 136, 0.4)' }}>
                    <DollarSign className="w-7 h-7 text-black" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Much Higher Starting Limits</h3>
                  <p className={`text-lg font-medium mb-4 ${isDarkMode ? 'text-[#00ff88]' : 'text-green-600'}`}>
                    Than our main competitors can offer
                  </p>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                    Our program offers up to $5,000,000 in CGL limits with in-house binding authority, providing faster turnarounds and more competitive pricing for youth sports organizations.
                  </p>
                </div>
              </Card>

              {/* Quick Facts Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className={`p-5 transition-all group ${isDarkMode ? 'bg-[#0A1628]/60 border-[#0F1D32] hover:border-[#00ff88]/40' : 'bg-white border-gray-200 hover:border-green-400'}`} data-testid="card-quick-fact-1">
                  <div className="w-10 h-10 rounded-lg bg-[#00ff88]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 text-[#00ff88]" />
                  </div>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>24-48hr</p>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Quote Turnaround</p>
                </Card>
                <Card className={`p-5 transition-all group ${isDarkMode ? 'bg-[#0A1628]/60 border-[#0F1D32] hover:border-[#00d4ff]/40' : 'bg-white border-gray-200 hover:border-cyan-400'}`} data-testid="card-quick-fact-2">
                  <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Globe className="w-5 h-5 text-[#00d4ff]" />
                  </div>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>50 States</p>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>National Coverage</p>
                </Card>
                <Card className={`p-5 transition-all group ${isDarkMode ? 'bg-[#0A1628]/60 border-[#0F1D32] hover:border-[#ff00ff]/40' : 'bg-white border-gray-200 hover:border-purple-400'}`} data-testid="card-quick-fact-3">
                  <div className="w-10 h-10 rounded-lg bg-[#ff00ff]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Shield className="w-5 h-5 text-[#ff00ff]" />
                  </div>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>A-Rated</p>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Carrier Partners</p>
                </Card>
                <Card className={`p-5 transition-all group ${isDarkMode ? 'bg-[#0A1628]/60 border-[#0F1D32] hover:border-[#00ff88]/40' : 'bg-white border-gray-200 hover:border-green-400'}`} data-testid="card-quick-fact-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00ff88]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5 text-[#00ff88]" />
                  </div>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Same Day</p>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Appointments</p>
                </Card>
              </div>

              {/* Contact Card */}
              <Card className={`p-5 ${isDarkMode ? 'bg-[#0A1628]/60 border-[#0F1D32]' : 'bg-white border-gray-200'}`} data-testid="card-contact-info">
                <h4 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <Mail className="w-4 h-4 text-[#00ff88]" />
                  Need More Information?
                </h4>
                <p className={`text-sm mb-3 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                  Reach out to our team for program details and custom quotes.
                </p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:support@matterhornprotects.com" className="text-[#00ff88] text-sm hover:text-[#00d4ff] transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    support@matterhornprotects.com
                  </a>
                  <a href="tel:1-844-600-0611" className="text-[#00ff88] text-sm hover:text-[#00d4ff] transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    1-844-600-0611
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className={`py-24 ${isDarkMode ? 'bg-[#0F1D32]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30 mb-4">
              Leadership
            </Badge>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-leadership">
              Youth Sports Industry Veterans
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
              Led by executives with deep experience in youth sports risk management and carrier relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <Card 
                key={index} 
                className={`p-6 text-center group overflow-visible ${isDarkMode ? 'bg-[#1B2A41]/50 border-white/10 hover:border-[#00ff88]/50' : 'bg-white border-gray-200 hover:border-[#00ff88]/50'} hover-elevate`}
              >
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00ff88]/30 to-[#00d4ff]/20 animate-pulse" />
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-[#00ff88]/30 group-hover:border-[#00ff88]/60 transition-all duration-500">
                    <img 
                      src={leader.photo} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-1 group-hover:text-[#00ff88] transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{leader.name}</h3>
                <p className="text-[#00ff88] font-medium mb-2">{leader.title}</p>
                <Badge className={`text-xs mb-4 ${isDarkMode ? 'bg-white/10 text-white/70 border-white/20' : 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                  <MapPin className="w-3 h-3 mr-1" />
                  {leader.territory}
                </Badge>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>{leader.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Why Matterhorn Section */}
      <section id="why-matterhorn" className="py-24 relative overflow-hidden" style={{ background: isDarkMode ? 'linear-gradient(135deg, #0A1628 0%, #0F1D32 50%, #0A1628 100%)' : 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 50%, #f9fafb 100%)' }}>
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[200px] animate-pulse opacity-30" style={{ background: 'radial-gradient(circle, #00ff88 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[150px] animate-pulse opacity-20" style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)', animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[250px] animate-pulse opacity-10" style={{ background: 'radial-gradient(circle, #ff00ff 0%, transparent 70%)', animationDelay: '4s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#00ff88]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00ff88]">Complete Protection</span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#00ff88]" />
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-why-matterhorn">
              The Matterhorn{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#ff00ff]">
                Advantage
              </span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
              60+ years of specialty expertise, nationwide coverage, and technology-driven solutions for youth sports organizations.
            </p>
          </div>

          {/* Key Stats Strip */}
          <div className={`flex flex-wrap justify-center gap-4 md:gap-8 mb-16 p-6 rounded-2xl ${isDarkMode ? 'bg-white/5 backdrop-blur-sm border border-white/10' : 'bg-white shadow-lg border border-gray-100'}`}>
            {[
              { value: "60+", label: "Years Experience", color: "#00ff88" },
              { value: "50", label: "States Covered", color: "#00d4ff" },
              { value: "3M+", label: "Participants", color: "#ff00ff" },
              { value: "24hr", label: "Quote Turnaround", color: "#00ff88" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center px-4 md:px-6">
                <div className="text-2xl md:text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                <div className={`text-[10px] uppercase tracking-wider mt-1 ${isDarkMode ? 'text-white/40' : 'text-gray-500'}`}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Coverage Types - Compact Grid */}
          <div className="mb-16">
            <h3 className={`text-xl font-bold text-center mb-8 flex items-center justify-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <Shield className="w-5 h-5 text-[#00ff88]" />
              Complete Coverage Suite
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { icon: Shield, title: "General Liability", color: "#00ff88" },
                { icon: FileText, title: "Accident Medical", color: "#00d4ff" },
                { icon: Users, title: "Abuse & Molestation", color: "#ff00ff" },
                { icon: Briefcase, title: "D&O / E&O", color: "#00ff88" },
                { icon: Package, title: "Property & Gear", color: "#00d4ff" },
                { icon: Plane, title: "Travel Coverage", color: "#ff00ff" },
              ].map((coverage, idx) => (
                <div 
                  key={idx}
                  className={`p-4 rounded-xl text-center group transition-all duration-300 cursor-default ${isDarkMode ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20' : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-sm'}`}
                >
                  <div 
                    className="w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${coverage.color}20` }}
                  >
                    <coverage.icon className="w-5 h-5" style={{ color: coverage.color }} />
                  </div>
                  <p className={`text-xs font-medium ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>{coverage.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works - Horizontal Flow */}
          <div className={`rounded-2xl p-8 ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white shadow-xl border border-gray-100'}`}>
            <h3 className={`text-xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              How Our Programs Work
            </h3>
            <div className="grid md:grid-cols-4 gap-6 md:gap-4">
              {[
                { step: "01", title: "Submit", desc: "Complete simple application with basic program details", icon: FileText, color: "#00ff88" },
                { step: "02", title: "Quote", desc: "Receive competitive quotes within 24-48 hours", icon: Clock, color: "#00d4ff" },
                { step: "03", title: "Bind", desc: "Digital binding with instant certificate generation", icon: CheckCircle, color: "#ff00ff" },
                { step: "04", title: "Support", desc: "Dedicated team for claims and ongoing service", icon: HeadphonesIcon, color: "#00ff88" },
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Connection Line */}
                  {idx < 3 && (
                    <div className={`hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] ${isDarkMode ? 'bg-gradient-to-r from-white/20 to-transparent' : 'bg-gradient-to-r from-gray-200 to-transparent'}`} />
                  )}
                  <div className="text-center relative z-10">
                    <div 
                      className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: `${item.color}15`,
                        boxShadow: `0 0 30px ${item.color}20`
                      }}
                    >
                      <item.icon className="w-7 h-7" style={{ color: item.color }} />
                    </div>
                    <div className="text-[10px] font-bold tracking-wider mb-1" style={{ color: item.color }}>{item.step}</div>
                    <h4 className={`font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                    <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              asChild
              className="bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold px-8 shadow-lg shadow-[#00ff88]/30 hover:shadow-[#00ff88]/50 transition-all"
              data-testid="button-get-youth-coverage"
            >
              <a href="https://form.jotform.com/260276518705056" target="_blank" rel="noopener noreferrer">
                Get Youth Sports Coverage
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* NAYS Partnership Section */}
      <section id="nays-partnership" className="py-24 relative overflow-hidden" style={{ background: isDarkMode ? 'linear-gradient(135deg, #0A1628 0%, #1a0a28 50%, #0A1628 100%)' : 'linear-gradient(135deg, #fdf4ff 0%, #f0f9ff 50%, #fdf4ff 100%)' }}>
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[200px] animate-pulse opacity-40" style={{ background: 'radial-gradient(circle, #ff00ff 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full blur-[150px] animate-pulse opacity-30" style={{ background: 'radial-gradient(circle, #00ff88 0%, transparent 70%)', animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[250px] animate-pulse opacity-20" style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)', animationDelay: '4s' }} />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#00ff88]/30 animate-pulse"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#ff00ff]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff00ff]">Official Partnership</span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#ff00ff]" />
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Handshake className="w-5 h-5 text-[#00ff88]" />
              <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Matterhorn × NAYS</span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-nays-section">
              NAYS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] via-[#00d4ff] to-[#00ff88]">
                Partnership
              </span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
              As an official National Alliance for Youth Sports insurance partner, we help NAYS members secure the best coverage at the best possible rates.
            </p>
          </div>

          {/* Interactive Card Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left - Benefits */}
            <div className="lg:col-span-5 space-y-4">
              {[
                { icon: DollarSign, title: "Up to 20% Member Savings", desc: "Exclusive preferential pricing for verified NAYS members", color: "#00ff88" },
                { icon: Shield, title: "$5M Enhanced Limits", desc: "Higher coverage limits with A&M protection included", color: "#00d4ff" },
                { icon: Clock, title: "24hr Priority Quotes", desc: "Expedited processing for all NAYS member applications", color: "#ff00ff" },
                { icon: Award, title: "NAYS Compliance Ready", desc: "All policies meet NAYS certification requirements", color: "#00ff88" },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 group cursor-default ${isDarkMode ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20' : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-sm'}`}
                  data-testid={`nays-benefit-${idx}`}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}20`, boxShadow: `0 0 20px ${item.color}15` }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <div>
                    <h3 className={`font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - CTA Card */}
            <div className="lg:col-span-7">
              <Card className={`p-8 relative overflow-hidden group ${isDarkMode ? 'bg-gradient-to-br from-[#1a0a28]/80 to-[#0a1a28]/80 border-[#ff00ff]/30 hover:border-[#ff00ff]/50' : 'bg-white border-purple-200 hover:border-purple-400 shadow-2xl'}`} data-testid="card-nays-cta">
                {/* Animated Border Gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff00ff] via-[#00d4ff] to-[#00ff88]" />
                
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff00ff]/10 rounded-full blur-[100px] group-hover:bg-[#ff00ff]/20 transition-all" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00ff88]/10 rounded-full blur-[80px]" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff00ff] to-[#00d4ff] flex items-center justify-center" style={{ boxShadow: '0 0 40px rgba(255, 0, 255, 0.4)' }}>
                      <Handshake className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <Badge className="bg-[#ff00ff]/20 text-[#ff00ff] border-[#ff00ff]/30 mb-2">
                        Exclusive Access
                      </Badge>
                      <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>NAYS Member Benefits</h3>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className={`grid grid-cols-3 gap-4 mb-8 p-4 rounded-xl ${isDarkMode ? 'bg-black/20' : 'bg-gray-50'}`}>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#ff00ff]">20%</div>
                      <div className={`text-[10px] uppercase tracking-wider ${isDarkMode ? 'text-white/40' : 'text-gray-500'}`}>Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#00d4ff]">$5M</div>
                      <div className={`text-[10px] uppercase tracking-wider ${isDarkMode ? 'text-white/40' : 'text-gray-500'}`}>Limits</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#00ff88]">3M+</div>
                      <div className={`text-[10px] uppercase tracking-wider ${isDarkMode ? 'text-white/40' : 'text-gray-500'}`}>Participants</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`mb-8 ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                    As a NAYS member, you and your clients qualify for exclusive rates, enhanced coverage limits, and priority processing. Explore the full partnership benefits.
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg"
                      asChild
                      className="flex-1 bg-gradient-to-r from-[#ff00ff] to-[#00d4ff] text-white font-semibold shadow-lg shadow-[#ff00ff]/30 hover:shadow-[#ff00ff]/50 transition-all"
                      data-testid="button-nays-explore"
                    >
                      <Link href="/nays-partnership">
                        Explore Partnership
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      asChild
                      className={`flex-1 ${isDarkMode ? 'bg-white/5 border-white/30 text-white hover:bg-white/10' : 'border-gray-300 hover:bg-gray-50'}`}
                      data-testid="button-nays-quote"
                    >
                      <a href="https://form.jotform.com/260276518705056" target="_blank" rel="noopener noreferrer">
                        Get NAYS Quote
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Applications Section */}
      <section id="applications" className={`py-24 ${isDarkMode ? 'bg-[#0A1628]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30 mb-4">
              Featured Applications
            </Badge>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-applications">
              Programs for Every Youth Sports Need
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
              Specialized coverage applications designed for organizations, camps, leagues, tournaments, and academies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {featuredApplications.map((app, index) => {
              const neonColors = ['#00ff88', '#00d4ff', '#ff00ff', '#00ff88', '#00d4ff'];
              const neonColor = neonColors[index % neonColors.length];
              return (
                <Card 
                  key={index}
                  className={`p-6 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group overflow-visible ${isDarkMode ? 'bg-[#1B2A41]/50 border-white/10' : 'bg-gray-50 border-gray-200'} hover-elevate`}
                  style={{ borderColor: 'transparent' }}
                  data-testid={`card-application-${index}`}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
                    style={{ backgroundColor: `${neonColor}20` }}
                  >
                    <app.icon className="w-6 h-6" style={{ color: neonColor }} />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 group-hover:text-[#00ff88] transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {app.title}
                  </h3>
                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                    {app.description}
                  </p>
                  <div className="space-y-2">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" style={{ color: neonColor }} />
                        <span className={`text-xs ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-[#00ff88] text-black group"
              onClick={() => scrollToSection("contact")}
              data-testid="button-start-application"
            >
              Start Your Application
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>


      {/* Case Studies Section */}
      <section id="case-studies" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-[#0A1628]' : 'bg-white'}`}>
        {isDarkMode && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00ff88]/5 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00d4ff]/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        )}

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#00ff88]" />
              <Badge className="bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30 text-[10px] uppercase tracking-widest px-4">
                Success Stories
              </Badge>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#00ff88]" />
            </div>
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-case-studies">
              Real Results,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#00ff88]">
                Real Brokers
              </span>
            </h2>
            <p className={`text-base max-w-2xl mx-auto ${isDarkMode ? 'text-white/50' : 'text-gray-600'}`}>
              Discover how our partners solve complex youth sports insurance challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-3">
              {caseStudies.map((study, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCaseStudy(index)}
                  className={`w-full text-left p-5 rounded-lg border transition-all duration-500 group relative overflow-hidden ${
                    activeCaseStudy === index
                      ? isDarkMode 
                        ? "bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/10 border-[#00ff88]/50 shadow-lg shadow-[#00ff88]/20"
                        : "bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/5 border-[#00ff88]/50"
                      : isDarkMode
                        ? "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                        : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                  }`}
                  data-testid={`case-study-tab-${index}`}
                >
                  {activeCaseStudy === index && (
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00ff88]/30 rounded-full blur-3xl" />
                  )}
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold transition-all ${
                        activeCaseStudy === index
                          ? "bg-[#00ff88] text-black"
                          : isDarkMode
                            ? "bg-white/10 text-white/50 group-hover:bg-[#00ff88]/30 group-hover:text-[#00ff88]"
                            : "bg-gray-200 text-gray-500 group-hover:bg-[#00ff88]/20 group-hover:text-[#00ff88]"
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`text-[9px] uppercase tracking-wider border-none ${
                          activeCaseStudy === index
                            ? "bg-[#00ff88]/30 text-white"
                            : isDarkMode ? "bg-white/10 text-white/50" : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {study.category}
                      </Badge>
                    </div>
                    <h3 className={`font-semibold transition-colors ${
                      activeCaseStudy === index 
                        ? isDarkMode ? "text-white" : "text-gray-900"
                        : isDarkMode ? "text-white/70 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"
                    }`}>
                      {study.title}
                    </h3>
                    
                    <div className="mt-3 flex items-center gap-2">
                      <div className={`flex-1 h-1 rounded-full overflow-hidden ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'}`}>
                        <div 
                          className={`h-full rounded-full transition-all duration-700 ${
                            activeCaseStudy === index
                              ? "w-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff]"
                              : "w-0"
                          }`}
                        />
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-all ${
                        activeCaseStudy === index
                          ? "text-[#00ff88] translate-x-1"
                          : isDarkMode ? "text-white/30" : "text-gray-400"
                      }`} />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8">
              <Card className={`overflow-hidden relative ${isDarkMode ? 'bg-[#1B2A41]/40 border-white/10 backdrop-blur-xl' : 'bg-white border-gray-200'}`}>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#ff00ff]" />
                
                <div className="p-8">
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(caseStudies[activeCaseStudy].results).map(([key, value], idx) => (
                      <div 
                        key={key}
                        className={`relative group p-4 rounded-lg border text-center overflow-hidden transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-br from-white/[0.05] to-transparent border-white/10 hover:border-[#00ff88]/30' : 'bg-gray-50 border-gray-200 hover:border-[#00ff88]/30'}`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff] relative z-10">
                          {value}
                        </p>
                        <p className={`text-[10px] uppercase tracking-widest mt-1 font-medium relative z-10 ${isDarkMode ? 'text-white/40' : 'text-gray-500'}`}>
                          {key}
                        </p>
                      </div>
                    ))}
                  </div>

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
                      <p className={`text-sm leading-relaxed pl-10 ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
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
                      <p className={`text-sm leading-relaxed pl-10 ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                        {caseStudies[activeCaseStudy].solution}
                      </p>
                    </div>
                  </div>

                  <div className={`grid md:grid-cols-2 gap-6 pt-6 border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded-md bg-[#00d4ff]/20 flex items-center justify-center">
                          <Briefcase className="w-3 h-3 text-[#00d4ff]" />
                        </div>
                        <h4 className="text-xs font-semibold text-[#00d4ff] uppercase tracking-wider">
                          Broker Benefits
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {caseStudies[activeCaseStudy].brokerBenefits.map((benefit, idx) => (
                          <li key={idx} className={`flex items-start gap-2 text-sm group transition-colors ${isDarkMode ? 'text-white/60 hover:text-white/80' : 'text-gray-600 hover:text-gray-800'}`}>
                            <CheckCircle className="w-4 h-4 text-[#00d4ff]/70 flex-shrink-0 mt-0.5 group-hover:text-[#00d4ff] transition-colors" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded-md bg-[#ff00ff]/20 flex items-center justify-center">
                          <Users className="w-3 h-3 text-[#ff00ff]" />
                        </div>
                        <h4 className="text-xs font-semibold text-[#ff00ff] uppercase tracking-wider">
                          Client Benefits
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {caseStudies[activeCaseStudy].clientBenefits.map((benefit, idx) => (
                          <li key={idx} className={`flex items-start gap-2 text-sm group transition-colors ${isDarkMode ? 'text-white/60 hover:text-white/80' : 'text-gray-600 hover:text-gray-800'}`}>
                            <CheckCircle className="w-4 h-4 text-[#ff00ff]/70 flex-shrink-0 mt-0.5 group-hover:text-[#ff00ff] transition-colors" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
                    <p className={`text-sm ${isDarkMode ? 'text-white/40' : 'text-gray-500'}`}>
                      Want similar results for your clients?
                    </p>
                    <Button 
                      asChild
                      className="group bg-[#00ff88] hover:bg-[#00ff88]/90 text-black"
                      data-testid="button-case-study-cta"
                    >
                      <a href="mailto:support@matterhornprotects.com">
                        Start Your Success Story
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              <div className="flex justify-center gap-2 mt-6">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCaseStudy(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeCaseStudy === index
                        ? "w-8 bg-gradient-to-r from-[#00ff88] to-[#00d4ff]"
                        : isDarkMode ? "bg-white/20 hover:bg-white/40" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    data-testid={`case-study-dot-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 ${isDarkMode ? 'bg-[#050D1A] border-t border-white/10' : 'bg-gray-100 border-t border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Mountain className="h-8 w-8 text-primary" />
                <div>
                  <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>MATTERHORN</span>
                  <span className={`text-xs block ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>INSURANCE GROUP</span>
                </div>
              </Link>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                AI-led specialty insurance program design shop serving brokers exclusively across Sports, Transportation, and Travel markets.
              </p>
              <div className="flex items-center gap-2">
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  Youth Sports Specialist
                </Badge>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('hero')} 
                    className={`text-sm hover:text-primary transition-colors ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('coverage')} 
                    className={`text-sm hover:text-primary transition-colors ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}
                  >
                    Programs
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('brokers')} 
                    className={`text-sm hover:text-primary transition-colors ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}
                  >
                    For Brokers
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className={`text-sm hover:text-primary transition-colors ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Coverage */}
            <div>
              <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Coverage Options</h4>
              <ul className="space-y-2">
                <li className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>General Liability</li>
                <li className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>Accident Medical</li>
                <li className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>Travel Insurance</li>
                <li className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>Property & Gear</li>
                <li className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>Contingency</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact Us</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="tel:18446000611" 
                    className={`flex items-center gap-2 text-sm hover:text-primary transition-colors ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}
                  >
                    <Phone className="h-4 w-4" />
                    1-844-600-0611
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:support@matterhornprotects.com" 
                    className={`flex items-center gap-2 text-sm hover:text-primary transition-colors ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}
                  >
                    <Mail className="h-4 w-4" />
                    support@matterhornprotects.com
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <Button 
                  size="sm"
                  className="bg-primary"
                  onClick={() => scrollToSection('contact')}
                  data-testid="button-footer-contact"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`pt-8 border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className={`text-sm ${isDarkMode ? 'text-white/40' : 'text-gray-500'}`}>
                © {new Date().getFullYear()} Matterhorn Insurance Group. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className={`text-sm hover:text-primary transition-colors ${isDarkMode ? 'text-white/40' : 'text-gray-500'}`}>
                  Privacy Policy
                </a>
                <a href="#" className={`text-sm hover:text-primary transition-colors ${isDarkMode ? 'text-white/40' : 'text-gray-500'}`}>
                  Terms of Service
                </a>
                <a href="#" className={`text-sm hover:text-primary transition-colors ${isDarkMode ? 'text-white/40' : 'text-gray-500'}`}>
                  Licensing
                </a>
              </div>
            </div>
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
