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
  Settings,
  TrendingDown,
  Star,
  MapPin,
  Film,
  Music,
  Mic2,
  Theater,
  Camera,
  Sparkles,
  PartyPopper,
  Clapperboard,
  Clock,
  Globe,
  Shield,
  DollarSign,
} from "lucide-react";
import { BrokerApplicationModal } from "@/components/BrokerApplicationModal";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import matterhornHero from "@assets/generated_images/Matterhorn_mountains_hero_background_315f6fa4.png";

// Neon color palette for Entertainment - Gold, Magenta, Electric Blue
const NEON_COLORS = {
  gold: '#fbbf24',
  magenta: '#ec4899',
  electric: '#3b82f6',
  purple: '#a855f7',
};

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
      
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="flex gap-1 md:gap-2 mb-6">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter cursor-default transition-all duration-300"
              style={{
                color: hoveredLetter === index ? NEON_COLORS.gold : 'white',
                textShadow: hoveredLetter === index 
                  ? `0 0 30px ${NEON_COLORS.gold}, 0 0 60px ${NEON_COLORS.gold}50` 
                  : '0 2px 10px rgba(0,0,0,0.3)',
              }}
              onMouseEnter={() => setHoveredLetter(index)}
              onMouseLeave={() => setHoveredLetter(null)}
            >
              {letter}
            </span>
          ))}
        </div>
        <p className="text-white/60 text-sm md:text-base tracking-[0.3em] uppercase font-medium">
          Entertainment Coverage
        </p>
        <p className="text-white/70 mt-4 text-sm md:text-base max-w-xl mx-auto text-center">
          Specialty insurance programs for the entertainment industry
        </p>
      </div>
    </section>
  );
}

export default function EntertainmentPage() {
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  const getAnimationClass = (sectionId: string) => {
    const baseClasses = "transition-all duration-700 ease-out";
    const hiddenClasses = "opacity-0 translate-y-8";
    const visibleClasses = "opacity-100 translate-y-0";
    
    return `${baseClasses} ${visibleSections.has(sectionId) ? visibleClasses : hiddenClasses}`;
  };

  const stats = [
    { value: "20+", label: "Entertainment Markets" },
    { value: "500+", label: "Productions Covered" },
    { value: "50", label: "States Covered" },
    { value: "$50M+", label: "Limits Available" },
  ];

  const marketSegments = [
    {
      title: "Film & Television Production",
      description: "Comprehensive coverage for feature films, TV series, commercials, and streaming content with cast, crew, and equipment protection.",
      coverage: "Cast Insurance, E&O, Equipment, Liability",
      icon: Clapperboard,
      highlight: "From indie films to major studio productions",
    },
    {
      title: "Live Events & Concerts",
      description: "Event cancellation, liability, and participant coverage for concerts, festivals, tours, and live entertainment experiences.",
      coverage: "Event Cancellation, Crowd Liability, Equipment",
      icon: Music,
      highlight: "Protecting unforgettable moments",
    },
    {
      title: "Theater & Performing Arts",
      description: "Coverage for Broadway, regional theater, dance companies, and performing arts venues with specialized performer protection.",
      coverage: "Performer Injury, Venue Liability, Props & Sets",
      icon: Theater,
      highlight: "The show must go on",
    },
    {
      title: "Content Creators & Influencers",
      description: "Professional liability, equipment, and content protection for digital creators, YouTubers, and social media influencers.",
      coverage: "Professional Liability, Equipment, Cyber",
      icon: Camera,
      highlight: "Coverage for the digital age",
    },
    {
      title: "Special Events & Galas",
      description: "Corporate events, award shows, premieres, and high-profile gatherings with comprehensive event coverage.",
      coverage: "Event Liability, Cancellation, Vendor Coverage",
      icon: PartyPopper,
      highlight: "Making every event memorable",
    },
  ];

  const coverageTypes = [
    { name: "General Liability", description: "Premises and operations coverage for venues and productions" },
    { name: "Cast Insurance", description: "Protection for key performers and talent" },
    { name: "Equipment Coverage", description: "Cameras, lighting, sound, and production equipment" },
    { name: "Errors & Omissions", description: "Content liability and intellectual property protection" },
    { name: "Event Cancellation", description: "Financial protection for cancelled or postponed events" },
    { name: "Workers Compensation", description: "Coverage for cast and crew injuries" },
    { name: "Auto/Fleet Coverage", description: "Production vehicles, trucks, and transportation" },
    { name: "Drone Coverage", description: "Aerial filming and unmanned aircraft liability" },
    { name: "Cyber Liability", description: "Data and content protection in digital production" },
    { name: "Weather Insurance", description: "Protection against weather-related delays and losses" },
    { name: "Prize Indemnity", description: "Coverage for contest and promotional prizes" },
    { name: "Pyrotechnics & SFX", description: "Special effects and stunt coverage" },
  ];

  const caseStudies = [
    {
      category: "Film Production",
      title: "Independent Film Production Company",
      challenge: "A mid-budget independent film production faced challenges securing comprehensive coverage for a complex action sequence involving stunts and pyrotechnics.",
      solution: "Designed a tailored production package combining cast insurance, stunt coverage, and pyrotechnics liability with flexible scheduling to accommodate production timeline.",
      brokerBenefits: [
        "Access to specialty entertainment markets",
        "Differentiated offering for production clients",
        "Built expertise in film insurance niche",
        "Referral network in entertainment industry",
      ],
      clientBenefits: [
        "Comprehensive stunt and SFX coverage",
        "Flexible policy dates matching production schedule",
        "24/7 production hotline for claims",
        "Seamless certificate issuance for locations",
      ],
      results: { premium: "$280K", budget: "$15M", coverage: "Full Production" },
    },
    {
      category: "Live Events",
      title: "Multi-City Concert Tour",
      challenge: "A major touring artist needed comprehensive coverage for a 40-city tour across multiple countries, including event cancellation protection.",
      solution: "Created a master tour policy covering all venues, dates, and contingencies with streamlined certificate delivery and international coverage extensions.",
      brokerBenefits: [
        "Single policy for complex multi-venue tour",
        "Streamlined administration across dates",
        "Enhanced commission on large placement",
        "Strategic partnership with talent management",
      ],
      clientBenefits: [
        "One policy covering all 40 tour dates",
        "COVID and health-related cancellation coverage",
        "Equipment floater for all production gear",
        "International coverage for overseas dates",
      ],
      results: { premium: "$1.2M", venues: "40", coverage: "Worldwide" },
    },
    {
      category: "Content Creation",
      title: "Digital Media Production Studio",
      challenge: "A growing content creation studio producing for multiple streaming platforms needed comprehensive E&O and production coverage across simultaneous projects.",
      solution: "Developed an annual production policy with E&O coverage, equipment floater, and umbrella liability that scales with project volume.",
      brokerBenefits: [
        "Annual policy structure for recurring business",
        "Positioned as entertainment specialist",
        "Built portfolio in digital content space",
        "Cross-selling opportunities for studio growth",
      ],
      clientBenefits: [
        "Single annual policy for all productions",
        "Streamlined certificate process for platforms",
        "E&O coverage for all content types",
        "Scalable limits as studio grows",
      ],
      results: { premium: "$165K", projects: "25+/yr", savings: "40%" },
    },
  ];

  const leadership = [
    {
      name: "Entertainment Team",
      title: "Dedicated Specialists",
      territory: "Nationwide",
      description: "Our entertainment team brings decades of combined experience in film, television, live events, and digital content production insurance.",
      photo: matterhornHero,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A1628] text-white overflow-x-hidden">
      <CustomCursor />
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-[#0A1628]/95 backdrop-blur-xl border-b" : "bg-transparent"
        }`}
        style={{ 
          borderColor: isScrolled ? `${NEON_COLORS.gold}20` : 'transparent',
          boxShadow: isScrolled ? `0 4px 20px ${NEON_COLORS.gold}10` : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" data-testid="link-home">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-md transition-all duration-300" style={{ backgroundColor: `${NEON_COLORS.gold}30` }} />
                  <Film className="w-7 h-7 transition-all duration-300" style={{ color: NEON_COLORS.gold, filter: `drop-shadow(0 0 8px ${NEON_COLORS.gold}60)` }} />
                </div>
                <div>
                  <div className="text-xl font-bold leading-tight" style={{ color: NEON_COLORS.gold, textShadow: `0 0 10px ${NEON_COLORS.gold}30` }}>MATTERHORN</div>
                  <div className="text-[10px] font-medium tracking-widest uppercase" style={{ color: `${NEON_COLORS.gold}99` }}>Entertainment</div>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-3">
              {["Program", "Markets", "Coverages", "Case Studies", "Why Us"].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="text-[10px] uppercase tracking-widest font-medium text-white/70 border border-white/20 rounded-full"
                  data-testid={`nav-${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </Button>
              ))}
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
        
        {/* Neon glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.gold}15` }} />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-[100px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.magenta}12`, animationDelay: "1s" }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-[80px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.electric}08`, animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <Badge className="backdrop-blur-sm mb-6" style={{ 
            backgroundColor: `${NEON_COLORS.gold}20`, 
            color: NEON_COLORS.gold, 
            borderColor: `${NEON_COLORS.gold}40`,
            boxShadow: `0 0 15px ${NEON_COLORS.gold}30`
          }}>
            <Sparkles className="w-3 h-3 mr-1" />
            Entertainment Insurance
          </Badge>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.95] tracking-tight">
            <span className="text-white">Protecting</span>
            <br />
            <span 
              className="text-transparent bg-clip-text"
              style={{ 
                backgroundImage: `linear-gradient(90deg, ${NEON_COLORS.gold}, ${NEON_COLORS.magenta}, ${NEON_COLORS.electric})`
              }}
            >
              Creative Vision
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive insurance solutions for film, television, live events, and digital content. 
            From pre-production to premiere, we protect every aspect of your creative work.
          </p>

          <div className="flex justify-center items-center mb-16">
            <Button
              size="lg"
              className="font-bold"
              style={{ 
                backgroundColor: NEON_COLORS.gold,
                color: '#000',
                boxShadow: `0 0 25px ${NEON_COLORS.gold}50`
              }}
              onClick={() => setApplicationModalOpen(true)}
              data-testid="button-connect"
            >
              Connect With Our Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4" style={{ color: NEON_COLORS.gold }} />
              <span>Film & TV Production</span>
            </div>
            <div className="flex items-center gap-2">
              <Music className="w-4 h-4" style={{ color: NEON_COLORS.magenta }} />
              <span>Live Events & Tours</span>
            </div>
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4" style={{ color: NEON_COLORS.electric }} />
              <span>Digital Content</span>
            </div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("program")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/60"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="w-8 h-8" />
        </Button>
      </section>

      {/* Program Highlights Section */}
      <section id="program" className="py-24 relative overflow-hidden" data-testid="section-program-highlights">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1B2A41]/30 to-[#0A1628]" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[120px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.gold}15` }} />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-[100px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.magenta}10`, animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-[80px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.electric}08`, animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-1.5" style={{ 
              backgroundColor: `${NEON_COLORS.gold}20`, 
              color: NEON_COLORS.gold, 
              borderColor: `${NEON_COLORS.gold}40`,
              boxShadow: `0 0 15px ${NEON_COLORS.gold}30`
            }}>
              <Star className="w-3 h-3 mr-1" />
              Comprehensive Program
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight" data-testid="heading-program-highlights">
              Program{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(90deg, ${NEON_COLORS.gold}, ${NEON_COLORS.magenta}, ${NEON_COLORS.electric})` }}>
                Highlights & Enhancements
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Specialized entertainment coverage with industry-leading terms and limits for productions of all sizes.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Left Column - Highlights & Risk Types */}
            <div className="lg:col-span-7 space-y-6">
              {/* Main Card with Accordions */}
              <Card className="p-8 bg-[#1B2A41]/60 border-white/10 backdrop-blur-sm relative overflow-hidden" data-testid="card-program-details">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${NEON_COLORS.gold}, ${NEON_COLORS.magenta}, ${NEON_COLORS.electric})` }} />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${NEON_COLORS.gold}20`, boxShadow: `0 0 25px ${NEON_COLORS.gold}25` }}>
                    <Award className="w-6 h-6" style={{ color: NEON_COLORS.gold }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Entertainment Program Details</h3>
                    <p className="text-sm" style={{ color: NEON_COLORS.gold }}>Up to $5M limits available</p>
                  </div>
                </div>

                <Accordion type="multiple" defaultValue={["highlights"]} className="space-y-3">
                  {/* Program Highlights Accordion */}
                  <AccordionItem value="highlights" className="border-white/10 rounded-lg overflow-hidden">
                    <AccordionTrigger className="text-base text-white hover:no-underline py-4 px-5 bg-white/5 hover:bg-white/10 transition-colors rounded-lg" style={{ color: 'white' }}>
                      <span className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5" style={{ color: NEON_COLORS.gold }} />
                        <span className="font-semibold">Highlights & Enhancements</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <ul className="space-y-3">
                        {[
                          { text: "All Risk Production Coverage", highlight: false },
                          { text: "Up to $5,000,000 CGL in-house capabilities", highlight: true },
                          { text: "$1,000,000 Abuse & Molestation (Claims Made)", highlight: true },
                          { text: "Negative Film / Faulty Stock coverage", highlight: false },
                          { text: "Cast Insurance included", highlight: false },
                          { text: "Extra Expense & Essential Elements", highlight: false },
                          { text: "Equipment & Props coverage", highlight: false },
                          { text: "Sets, Scenery & Wardrobe protection", highlight: false },
                          { text: "Third Party Property Damage", highlight: false },
                          { text: "Weather Delay / Adverse Weather", highlight: false },
                          { text: "Pre-Production & Post-Production covered", highlight: false },
                          { text: "15% Commission", highlight: true },
                          { text: "Flexible terms for all production types", highlight: false },
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 group">
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0`} style={{ backgroundColor: item.highlight ? NEON_COLORS.gold : 'rgba(255,255,255,0.4)' }} />
                            <span className={`text-sm ${item.highlight ? 'font-medium' : ''} group-hover:text-white transition-colors`} style={{ color: item.highlight ? NEON_COLORS.gold : 'rgba(255,255,255,0.7)' }}>
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Risk Types Accordion */}
                  <AccordionItem value="risk-types" className="border-white/10 rounded-lg overflow-hidden">
                    <AccordionTrigger className="text-base text-white hover:no-underline py-4 px-5 bg-white/5 hover:bg-white/10 transition-colors rounded-lg" style={{ color: 'white' }}>
                      <span className="flex items-center gap-3">
                        <Target className="w-5 h-5" style={{ color: NEON_COLORS.magenta }} />
                        <span className="font-semibold">Risk Types Covered</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "Feature Films & Documentaries",
                          "Television Productions",
                          "Commercials & Music Videos",
                          "Live Events & Concerts",
                          "Theater Productions",
                          "Digital & Streaming Content",
                          "Corporate Events",
                          "Award Shows & Galas",
                          "Sports Broadcasting",
                          "Festival Productions",
                        ].map((risk, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group">
                            <ArrowRight className="w-3 h-3 flex-shrink-0 group-hover:translate-x-1 transition-transform" style={{ color: NEON_COLORS.magenta }} />
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
                    className="w-full text-black font-semibold shadow-lg transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(90deg, ${NEON_COLORS.gold}, ${NEON_COLORS.magenta})`,
                      boxShadow: `0 0 25px ${NEON_COLORS.gold}40`
                    }}
                    onClick={() => setApplicationModalOpen(true)}
                    data-testid="button-start-application-highlights"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Connect With Our Team
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Right Column - Callout & Quick Facts */}
            <div className="lg:col-span-5 space-y-6">
              {/* Competitive Advantage Callout */}
              <Card className="p-6 relative overflow-hidden group transition-all duration-500" style={{ 
                background: `linear-gradient(135deg, ${NEON_COLORS.gold}15 0%, ${NEON_COLORS.magenta}10 100%)`,
                borderColor: `${NEON_COLORS.gold}30`
              }} data-testid="card-competitive-advantage">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl transition-all" style={{ backgroundColor: `${NEON_COLORS.gold}20` }} />
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-2xl" style={{ backgroundColor: `${NEON_COLORS.magenta}15` }} />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: NEON_COLORS.gold, boxShadow: `0 0 30px ${NEON_COLORS.gold}40` }}>
                    <DollarSign className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Production-Ready Coverage</h3>
                  <p className="text-lg font-medium mb-4" style={{ color: NEON_COLORS.gold }}>
                    Fast turnaround for tight schedules
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Our entertainment program offers up to $5,000,000 in CGL limits with rapid binding authority, perfect for productions with tight timelines.
                  </p>
                </div>
              </Card>

              {/* Quick Facts Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-5 bg-[#1B2A41]/50 border-white/10 hover:border-white/30 transition-all group" data-testid="card-quick-fact-1">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${NEON_COLORS.gold}20` }}>
                    <Clock className="w-5 h-5" style={{ color: NEON_COLORS.gold }} />
                  </div>
                  <p className="text-2xl font-bold text-white">24-48hr</p>
                  <p className="text-white/50 text-sm">Quote Turnaround</p>
                </Card>
                <Card className="p-5 bg-[#1B2A41]/50 border-white/10 hover:border-white/30 transition-all group" data-testid="card-quick-fact-2">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${NEON_COLORS.magenta}20` }}>
                    <Globe className="w-5 h-5" style={{ color: NEON_COLORS.magenta }} />
                  </div>
                  <p className="text-2xl font-bold text-white">50 States</p>
                  <p className="text-white/50 text-sm">National Coverage</p>
                </Card>
                <Card className="p-5 bg-[#1B2A41]/50 border-white/10 hover:border-white/30 transition-all group" data-testid="card-quick-fact-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${NEON_COLORS.electric}20` }}>
                    <Shield className="w-5 h-5" style={{ color: NEON_COLORS.electric }} />
                  </div>
                  <p className="text-2xl font-bold text-white">A-Rated</p>
                  <p className="text-white/50 text-sm">Carrier Partners</p>
                </Card>
                <Card className="p-5 bg-[#1B2A41]/50 border-white/10 hover:border-white/30 transition-all group" data-testid="card-quick-fact-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${NEON_COLORS.gold}20` }}>
                    <Users className="w-5 h-5" style={{ color: NEON_COLORS.gold }} />
                  </div>
                  <p className="text-2xl font-bold text-white">15%</p>
                  <p className="text-white/50 text-sm">Commission</p>
                </Card>
              </div>

              {/* Contact Card */}
              <Card className="p-5 bg-[#1B2A41]/50 border-white/10" data-testid="card-contact-info">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Mail className="w-4 h-4" style={{ color: NEON_COLORS.gold }} />
                  Need More Information?
                </h4>
                <p className="text-white/50 text-sm mb-3">
                  Reach out to our team for program details and custom quotes.
                </p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:support@matterhornprotects.com" className="text-sm hover:opacity-80 transition-colors flex items-center gap-2" style={{ color: NEON_COLORS.gold }}>
                    <Mail className="w-4 h-4" />
                    support@matterhornprotects.com
                  </a>
                  <a href="tel:1-844-600-0611" className="text-sm hover:opacity-80 transition-colors flex items-center gap-2" style={{ color: NEON_COLORS.magenta }}>
                    <Phone className="w-4 h-4" />
                    1-844-600-0611
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Market Segments Section */}
      <section 
        id="markets" 
        data-animate
        className="py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0A1628]/90 to-[#1B2A41]" />
        
        {/* Neon accent glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full blur-[120px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.gold}10` }} />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full blur-[100px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.magenta}08`, animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-20 ${getAnimationClass("markets")}`}>
            <Badge className="mb-6 shadow-lg" style={{ 
              backgroundColor: `${NEON_COLORS.gold}20`,
              color: NEON_COLORS.gold,
              borderColor: `${NEON_COLORS.gold}40`,
              boxShadow: `0 0 15px ${NEON_COLORS.gold}30`
            }}>
              Market Segments
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Coverage Across{" "}
              <span 
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: `linear-gradient(90deg, ${NEON_COLORS.gold}, ${NEON_COLORS.magenta}, ${NEON_COLORS.electric})` }}
              >
                Entertainment
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              From blockbuster productions to intimate venues, we have specialized programs for every segment of entertainment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {marketSegments.map((segment, index) => {
              const neonColors = [NEON_COLORS.gold, NEON_COLORS.magenta, NEON_COLORS.electric, NEON_COLORS.purple, NEON_COLORS.gold];
              const neonColor = neonColors[index % neonColors.length];
              return (
                <Card 
                  key={index}
                  className={`p-8 bg-[#1B2A41]/60 border-white/10 backdrop-blur-sm hover-elevate transition-all duration-500 group relative overflow-visible ${getAnimationClass("markets")}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  data-testid={`card-segment-${index}`}
                >
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
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all duration-300"
                      style={{ backgroundColor: `${neonColor}20`, boxShadow: `0 0 25px ${neonColor}25` }}
                    >
                      <segment.icon className="w-7 h-7" style={{ color: neonColor }} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white leading-tight">
                      {segment.title}
                    </h3>
                    
                    <p className="text-white/60 text-sm mb-6 leading-relaxed min-h-[60px]">
                      {segment.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Badge 
                        variant="outline" 
                        className="text-xs"
                        style={{ borderColor: `${neonColor}50`, color: neonColor, backgroundColor: `${neonColor}15` }}
                      >
                        {segment.coverage}
                      </Badge>
                    </div>
                    
                    <p className="text-xs font-medium leading-relaxed" style={{ color: `${neonColor}cc` }}>
                      {segment.highlight}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverages Section */}
      <section 
        id="coverages" 
        data-animate
        className="py-24 bg-[#0A1628]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 ${getAnimationClass("coverages")}`}>
            <Badge className="mb-4" style={{ 
              backgroundColor: `${NEON_COLORS.magenta}20`,
              color: NEON_COLORS.magenta,
              borderColor: `${NEON_COLORS.magenta}40`
            }}>
              Comprehensive Coverage
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Access to All Entertainment Coverages Through{" "}
              <span 
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: `linear-gradient(90deg, ${NEON_COLORS.gold}, ${NEON_COLORS.magenta})` }}
              >
                Curated Markets
              </span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              One submission connects you to our carefully selected A-rated markets with specialized entertainment expertise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {coverageTypes.map((coverage, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg bg-white/[0.03] border border-white/10 hover-elevate overflow-visible transition-all duration-300 ${getAnimationClass("coverages")}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: NEON_COLORS.gold }} />
                  <div>
                    <h4 className="font-semibold text-white text-sm">{coverage.name}</h4>
                    <p className="text-white/50 text-xs mt-1 leading-relaxed">{coverage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section 
        id="case-studies" 
        data-animate
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1B2A41 50%, #0A1628 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.gold}05` }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.magenta}05`, animationDelay: "1s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-16 ${getAnimationClass("case-studies")}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[1px]" style={{ background: `linear-gradient(to right, transparent, ${NEON_COLORS.gold})` }} />
              <Badge className="text-[10px] uppercase tracking-widest" style={{ 
                backgroundColor: `${NEON_COLORS.gold}20`,
                color: NEON_COLORS.gold,
                borderColor: `${NEON_COLORS.gold}40`
              }}>
                Success Stories
              </Badge>
              <div className="w-12 h-[1px]" style={{ background: `linear-gradient(to left, transparent, ${NEON_COLORS.gold})` }} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Real Results,{" "}
              <span 
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: `linear-gradient(90deg, ${NEON_COLORS.gold}, ${NEON_COLORS.magenta}, ${NEON_COLORS.gold})` }}
              >
                Real Productions
              </span>
            </h2>
            <p className="text-base text-white/50 max-w-2xl mx-auto">
              Discover how our partners solve complex entertainment insurance challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-3">
              {caseStudies.map((study, index) => (
                <Card
                  key={index}
                  onClick={() => setActiveCaseStudy(index)}
                  className={`cursor-pointer text-left rounded-lg border transition-all duration-500 relative overflow-visible hover-elevate ${
                    activeCaseStudy === index
                      ? "border-[#fbbf24]/50 shadow-lg"
                      : "bg-white/[0.03] border-white/10"
                  }`}
                  style={{
                    background: activeCaseStudy === index 
                      ? `linear-gradient(to right, ${NEON_COLORS.gold}20, ${NEON_COLORS.magenta}10)` 
                      : undefined,
                    boxShadow: activeCaseStudy === index ? `0 0 20px ${NEON_COLORS.gold}20` : undefined
                  }}
                  data-testid={`case-study-tab-${index}`}
                >
                  <div className="relative z-10 p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div 
                        className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold transition-all`}
                        style={{
                          backgroundColor: activeCaseStudy === index ? NEON_COLORS.gold : 'rgba(255,255,255,0.1)',
                          color: activeCaseStudy === index ? '#000' : 'rgba(255,255,255,0.5)'
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <Badge 
                        variant="outline" 
                        className="text-[9px] uppercase tracking-wider border-none"
                        style={{
                          backgroundColor: activeCaseStudy === index ? `${NEON_COLORS.gold}30` : 'rgba(255,255,255,0.1)',
                          color: activeCaseStudy === index ? 'white' : 'rgba(255,255,255,0.5)'
                        }}
                      >
                        {study.category}
                      </Badge>
                    </div>
                    <h3 className={`font-semibold ${
                      activeCaseStudy === index ? "text-white" : "text-white/70"
                    }`}>
                      {study.title}
                    </h3>
                    
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: activeCaseStudy === index ? '100%' : '0%',
                            background: `linear-gradient(to right, ${NEON_COLORS.gold}, ${NEON_COLORS.magenta})`
                          }}
                        />
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-all ${
                        activeCaseStudy === index ? "translate-x-1" : ""
                      }`} style={{ color: activeCaseStudy === index ? NEON_COLORS.gold : 'rgba(255,255,255,0.3)' }} />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-8">
              <Card className="bg-[#1B2A41]/40 border-white/10 backdrop-blur-xl overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${NEON_COLORS.gold}, ${NEON_COLORS.magenta}, ${NEON_COLORS.electric})` }} />
                
                <div className="p-8">
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(caseStudies[activeCaseStudy].results).map(([key, value]) => (
                      <div 
                        key={key}
                        className="relative p-4 rounded-lg bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 transition-all duration-300 text-center overflow-visible hover-elevate"
                      >
                        <p 
                          className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text relative z-10"
                          style={{ backgroundImage: `linear-gradient(to right, ${NEON_COLORS.gold}, ${NEON_COLORS.magenta})` }}
                        >
                          {value}
                        </p>
                        <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1 font-medium relative z-10">
                          {key}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: `${NEON_COLORS.magenta}20` }}>
                          <TrendingDown className="w-4 h-4" style={{ color: NEON_COLORS.magenta }} />
                        </div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider" style={{ color: NEON_COLORS.magenta }}>
                          Challenge
                        </h4>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed pl-10">
                        {caseStudies[activeCaseStudy].challenge}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: `${NEON_COLORS.gold}20` }}>
                          <TrendingUp className="w-4 h-4" style={{ color: NEON_COLORS.gold }} />
                        </div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider" style={{ color: NEON_COLORS.gold }}>
                          Solution
                        </h4>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed pl-10">
                        {caseStudies[activeCaseStudy].solution}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 rounded-lg border border-white/10" style={{ backgroundColor: `${NEON_COLORS.gold}05` }}>
                      <h4 className="text-sm font-semibold mb-3" style={{ color: NEON_COLORS.gold }}>Broker Benefits</h4>
                      <ul className="space-y-2">
                        {caseStudies[activeCaseStudy].brokerBenefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: NEON_COLORS.gold }} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-white/10" style={{ backgroundColor: `${NEON_COLORS.magenta}05` }}>
                      <h4 className="text-sm font-semibold mb-3" style={{ color: NEON_COLORS.magenta }}>Client Benefits</h4>
                      <ul className="space-y-2">
                        {caseStudies[activeCaseStudy].clientBenefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: NEON_COLORS.magenta }} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Matterhorn Section */}
      <section 
        id="why-us" 
        data-animate
        className="py-24 bg-[#0D1B2A]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 ${getAnimationClass("why-us")}`}>
            <Badge className="mb-4" style={{ 
              backgroundColor: `${NEON_COLORS.electric}20`,
              color: NEON_COLORS.electric,
              borderColor: `${NEON_COLORS.electric}40`
            }}>
              Why Matterhorn
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Your Entertainment Insurance{" "}
              <span 
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: `linear-gradient(90deg, ${NEON_COLORS.gold}, ${NEON_COLORS.magenta})` }}
              >
                Partner
              </span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Deep industry expertise combined with curated market access delivers superior outcomes for entertainment risks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Specialty Focus", description: "Dedicated entertainment practice with deep industry knowledge" },
              { icon: Zap, title: "Fast Turnaround", description: "Quick quotes and certificates for production timelines" },
              { icon: Award, title: "A-Rated Markets", description: "Access to top-tier carriers specializing in entertainment" },
              { icon: Users, title: "Expert Team", description: "Underwriters who understand creative industry needs" },
            ].map((item, index) => {
              const colors = [NEON_COLORS.gold, NEON_COLORS.magenta, NEON_COLORS.electric, NEON_COLORS.purple];
              const color = colors[index % colors.length];
              return (
                <Card 
                  key={index}
                  className={`p-6 bg-[#1B2A41]/50 border-white/10 backdrop-blur-sm hover-elevate transition-all duration-500 text-center group overflow-visible ${getAnimationClass("why-us")}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative w-14 h-14 mx-auto mb-4">
                    <div 
                      className="absolute inset-0 rounded-full blur-sm transition-all duration-500" 
                      style={{ backgroundColor: `${color}30` }}
                    />
                    <div 
                      className="relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{ backgroundColor: `${color}20` }}
                    >
                      <item.icon className="w-7 h-7" style={{ color }} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NEON_COLORS.gold}10 0%, ${NEON_COLORS.magenta}10 50%, ${NEON_COLORS.electric}10 100%)` }} />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Protect Your Next Production?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Connect with our entertainment specialists to discuss your coverage needs and get a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-bold"
              style={{ 
                backgroundColor: NEON_COLORS.gold,
                color: '#000',
                boxShadow: `0 0 25px ${NEON_COLORS.gold}50`
              }}
              onClick={() => setApplicationModalOpen(true)}
              data-testid="button-cta-connect"
            >
              Connect With Our Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 backdrop-blur-sm border-white/30 text-white"
              onClick={() => scrollToSection("markets")}
              data-testid="button-explore-markets"
            >
              Explore Markets
              <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <ClosingSection />

      {/* Footer */}
      <Footer />

      {/* Broker Application Modal */}
      <BrokerApplicationModal 
        open={applicationModalOpen} 
        onOpenChange={setApplicationModalOpen} 
      />
    </div>
  );
}
