import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Trophy,
  Dumbbell,
  GraduationCap,
  Bike,
  Shield,
  Heart,
  Building,
  Building2,
  Plane,
  Fish,
} from "lucide-react";
import { BrokerApplicationModal } from "@/components/BrokerApplicationModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import matterhornHero from "@assets/generated_images/Matterhorn_mountains_hero_background_315f6fa4.png";
import wayneGutridgePhoto from "@assets/avatars/wayne_gutridge_avatar.png";
import isaacAllenPhoto from "@assets/avatars/isaac_allen_avatar.png";
import mikeAsselinPhoto from "@assets/avatars/mike_asselin_avatar.png";
import stadiumHero from "@assets/generated_images/Professional_stadium_aerial_view_1d2bbe4c.png";
import sportsFieldImage from "@assets/generated_images/Sports_field_aerial_view_3eb581a1.png";
import athleteAction from "@assets/stock_images/athlete_action_sports.jpg";
import stadiumLights from "@assets/stock_images/stadium_lights_night.jpg";
import hockeyAction from "@assets/stock_images/hockey_action.jpg";
import youthSoccer from "@assets/stock_images/youth_soccer_team_ce_56a4b64e.jpg";

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
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 rounded-full scale-150" />
              <Mountain className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-primary group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>

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
                    ? '#22d3ee'
                    : hoveredLetter !== null && Math.abs(hoveredLetter - index) === 1
                    ? '#06b6d4'
                    : hoveredLetter !== null && Math.abs(hoveredLetter - index) === 2
                    ? '#0891b2'
                    : '#00a8c7',
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
            Sports
          </p>
          <p className="text-white/70 mt-4 text-sm md:text-base max-w-xl mx-auto">
            Specialty insurance programs built for the modern sports industry
          </p>
        </div>
      </div>
    </section>
  );
}

export default function SportsPage() {
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
    { value: "15+", label: "A-Rated Sports Markets" },
    { value: "30+", label: "A-Rated Markets Across Specialty" },
    { value: "50", label: "States Covered" },
    { value: "80+", label: "Years Combined Experience" },
  ];

  const marketSegments = [
    {
      title: "Youth Sports",
      description: "Comprehensive coverage for youth leagues, camps, and recreational programs with participant accident and liability protection.",
      coverage: "GL, Participant Accident, D&O, Abuse/Molestation",
      icon: Heart,
      highlight: "Protecting the next generation of athletes",
    },
    {
      title: "Amateur Sports",
      description: "Tournament operators, adult recreational leagues, and community sports organizations with tailored liability solutions.",
      coverage: "Event Liability, Participant Coverage, Equipment",
      icon: Dumbbell,
      highlight: "Coverage for competitive recreation",
    },
    {
      title: "Collegiate Athletics",
      description: "NCAA and NAIA programs, club sports, and athletic departments with comprehensive institutional coverage.",
      coverage: "Catastrophic, Student Athlete, E&O, Event",
      icon: GraduationCap,
      highlight: "Institutional-grade protection",
    },
    {
      title: "Professional Sports",
      description: "Teams, leagues, venues, and athlete representation with specialized risk management solutions.",
      coverage: "Player Contracts, Event Cancellation, Venue Liability",
      icon: Trophy,
      highlight: "Elite coverage for elite competition",
    },
    {
      title: "Adventure Sports",
      description: "Extreme sports operators, outdoor outfitters, and adventure tourism with high-risk activity coverage.",
      coverage: "Participant Waivers, Guide Liability, Equipment",
      icon: Bike,
      highlight: "Fearless coverage for fearless pursuits",
    },
  ];

  const coverageTypes = [
    { name: "General Liability", description: "Premises and operations coverage for sports facilities and events" },
    { name: "Participant Accident", description: "Medical coverage for athletes and participants" },
    { name: "Directors & Officers", description: "Protection for board members and organizational leadership" },
    { name: "Abuse & Molestation", description: "Critical coverage for youth-focused organizations" },
    { name: "Event Cancellation", description: "Financial protection for cancelled or postponed events" },
    { name: "Professional Liability", description: "E&O coverage for coaches, trainers, and sports professionals" },
    { name: "Equipment & Property", description: "Coverage for sports equipment and facilities" },
    { name: "Catastrophic Injury", description: "High-limit coverage for serious athletic injuries" },
    { name: "Travel Accident", description: "Coverage for teams and athletes during travel" },
    { name: "Spectator Liability", description: "Protection for fan injuries at events and venues" },
    { name: "Crime & Fidelity", description: "Coverage for financial misconduct and theft" },
    { name: "Cyber Liability", description: "Data protection for registration and payment systems" },
  ];

  const caseStudies = [
    {
      category: "Youth Sports",
      title: "Large Youth Sports Organization",
      challenge: "A multi-state youth sports organization with 50,000+ participants faced fragmented coverage across regions, inconsistent pricing, and gaps in abuse/molestation protection.",
      solution: "Consolidated all regions under a single master program with standardized coverage, enhanced A&M limits, and centralized risk management protocols.",
      brokerBenefits: [
        "Single point of contact for multi-state coverage",
        "Streamlined renewal process across all locations",
        "Priority underwriting on consolidated placement",
        "Positioned as strategic partner for growth",
      ],
      clientBenefits: [
        "35% reduction in total cost of risk",
        "Consistent coverage across all regions",
        "Enhanced abuse/molestation limits to $5M",
        "Simplified claims reporting process",
      ],
      results: { premium: "$1.8M", participants: "50K+", savings: "35%" },
    },
    {
      category: "Hockey Academy",
      title: "Large Traveling Hockey Academy",
      challenge: "An elite traveling hockey program with international competition faced coverage gaps during international travel and inconsistent participant accident coverage.",
      solution: "Designed a comprehensive program with worldwide coverage, catastrophic injury protection, and integrated travel accident benefits.",
      brokerBenefits: [
        "Access to specialty international sports markets",
        "Differentiated offering for elite sports clients",
        "Retained high-value account with complex needs",
        "Built referral network in hockey community",
      ],
      clientBenefits: [
        "Seamless worldwide coverage for all tournaments",
        "$2M catastrophic injury limits per participant",
        "24/7 international claims support",
        "Medical evacuation and repatriation included",
      ],
      results: { premium: "$420K", athletes: "800+", coverage: "Worldwide" },
    },
    {
      category: "Adventure Sports",
      title: "Remote Fishing Tour Operator",
      challenge: "A fly-in fishing tour operator in remote destinations struggled to find coverage due to bush plane transportation, remote locations, and high-risk water activities.",
      solution: "Partnered with specialty adventure markets to create a tailored program covering aviation exposure, guide liability, and remote medical evacuation.",
      brokerBenefits: [
        "Accessed markets others couldn't find",
        "Built expertise in adventure sports niche",
        "Secured long-term exclusive relationship",
        "Generated referrals from outdoor industry",
      ],
      clientBenefits: [
        "First-ever comprehensive coverage solution",
        "Aviation liability included in program",
        "Satellite-enabled emergency response",
        "Flexible seasonal coverage options",
      ],
      results: { premium: "$185K", locations: "12 Remote", retention: "100%" },
    },
    {
      category: "Association Plan",
      title: "Large Youth Sports Association",
      challenge: "A national youth sports association needed a turnkey insurance program for 2,000+ member organizations but lacked infrastructure to manage individual policies.",
      solution: "Built a master association program with automated enrollment, per-participant pricing, and centralized certificate management.",
      brokerBenefits: [
        "Recurring revenue from association relationship",
        "Automated enrollment reduces admin burden",
        "Volume-based program incentives",
        "Protected book from competitive threats",
      ],
      clientBenefits: [
        "One-click enrollment for member organizations",
        "Affordable per-participant pricing model",
        "Instant certificate generation",
        "Comprehensive risk management resources",
      ],
      results: { premium: "$3.2M", members: "2,000+", turnaround: "Instant" },
    },
  ];

  const leadership = [
    {
      name: "Wayne Gutridge",
      title: "Managing Director",
      description: "A visionary leader in specialty insurance, Wayne founded Matterhorn with a mission to revolutionize program design. His strategic vision drives our expansion into emerging sports markets.",
      territory: "National",
      initials: "WG",
      color: "from-primary to-cyan-500",
      photo: wayneGutridgePhoto,
    },
    {
      name: "Isaac Allen",
      title: "Managing Director",
      description: "Isaac brings deep expertise in sports risk management and carrier relationships. His leadership ensures our programs meet the evolving needs of the sports industry.",
      territory: "National",
      initials: "IA",
      color: "from-cyan-500 to-blue-500",
      photo: isaacAllenPhoto,
    },
    {
      name: "Mike Asselin",
      title: "Chief Operating Officer",
      description: "Mike specializes in sports programs, leveraging his background as a player development agent and executive roles across hockey and golf. His industry connections and operational expertise drive our sports division.",
      territory: "National",
      initials: "MA",
      color: "from-blue-500 to-purple-500",
      photo: mikeAsselinPhoto,
    },
  ];

  const whyMatterhorn = [
    {
      title: "Sports Industry Veterans",
      description: "Our team includes former athletes, agents, and sports executives who understand the unique risks of the industry.",
      icon: Trophy,
      microTag: "60+ Years Experience",
    },
    {
      title: "Comprehensive Market Access",
      description: "One application connects you to curated A-rated markets covering all sports segments from youth to professional.",
      icon: Target,
      microTag: "A+ Rated Carriers",
    },
    {
      title: "Specialized Expertise",
      description: "Deep knowledge of participant liability, event coverage, and athlete protection programs.",
      icon: Shield,
      microTag: "Full Binding Authority",
    },
    {
      title: "Technology-Enabled",
      description: "Digital enrollment, instant certificates, and automated participant management for associations and leagues.",
      icon: Settings,
      microTag: "24-Hour Turnaround",
    },
  ];

  const appointmentFlow = [
    { step: 1, title: "Apply / Get Appointed" },
    { step: 2, title: "Submit Once (Digital App)" },
    { step: 3, title: "Market Matching" },
    { step: 4, title: "Bind & Onboard" },
    { step: 5, title: "Ongoing Support" },
  ];

  return (
    <div className="min-h-screen bg-[#0A1628] text-white">
      <CustomCursor />
      
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-[#0A1628]/95 backdrop-blur-md border-b border-[#00ff88]/20 shadow-lg shadow-[#00ff88]/5" 
            : "bg-transparent"
        }`}
        data-testid="nav-sports"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-8">
            <Link href="/" data-testid="link-home">
              <div className="flex items-center gap-3 cursor-pointer group">
                <Trophy className="w-7 h-7 text-[#00ff88] group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.6)] transition-all duration-300" />
                <div className="flex flex-col">
                  <div className="text-xl font-bold text-[#00ff88] leading-tight drop-shadow-[0_0_10px_rgba(0,255,136,0.3)]">MATTERHORN</div>
                  <div className="text-[10px] font-medium text-[#00ff88]/70 tracking-widest uppercase">Sports</div>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-3">
              {["Markets", "Coverages", "Case Studies", "Why Us"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="px-4 py-1.5 text-[10px] uppercase tracking-widest font-medium text-white/70 border border-white/20 rounded-full hover:text-[#00ff88] hover:border-[#00ff88]/50 hover:bg-[#00ff88]/10 hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] hover:scale-105 transition-all duration-300"
                  data-testid={`nav-${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </button>
              ))}

              <Button 
                onClick={() => setApplicationModalOpen(true)} 
                size="sm"
                className="ml-4 text-[10px] uppercase tracking-widest bg-[#00ff88] hover:bg-[#00ff88]/90 text-black font-bold shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:shadow-[0_0_30px_rgba(0,255,136,0.6)]"
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
          style={{ backgroundImage: `url(${stadiumHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/90 via-[#0A1628]/80 to-[#1B2A41]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
        </div>
        
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff88]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff00ff]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00d4ff]/8 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
          
          {/* Floating particles */}
          <div className="absolute top-20 left-[10%] w-2 h-2 bg-[#00ff88]/60 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="absolute top-40 right-[15%] w-1.5 h-1.5 bg-[#ff00ff]/50 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-[20%] w-1 h-1 bg-[#00d4ff]/40 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
          <div className="absolute top-1/3 right-[25%] w-2.5 h-2.5 bg-[#00ff88]/30 rounded-full animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 right-[10%] w-1.5 h-1.5 bg-[#ff00ff]/40 rounded-full animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />
          
          {/* Animated gradient lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff00ff]/30 to-transparent" />
          <div className="absolute top-0 bottom-0 left-[10%] w-px bg-gradient-to-b from-transparent via-[#00ff88]/10 to-transparent" />
          <div className="absolute top-0 bottom-0 right-[10%] w-px bg-gradient-to-b from-transparent via-[#00d4ff]/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <Badge className="bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/40 backdrop-blur-sm mb-6 shadow-[0_0_20px_rgba(0,255,136,0.3)]">
            <Trophy className="w-3 h-3 mr-2" />
            Specialty Sports Programs
          </Badge>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            data-testid="heading-hero-sports"
          >
            Comprehensive Coverage for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#ff00ff] animate-gradient bg-[length:200%_auto]">
              Every Level of Play
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-4xl mx-auto font-medium">
            From youth leagues to professional teams, we design programs that protect athletes, organizations, and events.
          </p>
          
          <p className="text-lg text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            One application connects you to curated sports markets with specialized expertise in participant accident, 
            event liability, and athletic organization coverage.
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
            <div className="flex items-center gap-2 hover:text-[#00ff88] transition-colors duration-300">
              <Heart className="w-4 h-4 text-[#00ff88]" />
              <span>Youth to Pro Coverage</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#00d4ff] transition-colors duration-300">
              <Shield className="w-4 h-4 text-[#00d4ff]" />
              <span>Participant Accident Specialist</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#ff00ff] transition-colors duration-300">
              <Trophy className="w-4 h-4 text-[#ff00ff]" />
              <span>Event & League Programs</span>
            </div>
          </div>

          {/* Featured Programs */}
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3">Featured Programs</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link href="/pickleball">
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/50 hover:text-[#00ff88] transition-colors cursor-pointer group" data-testid="link-pickleball-sports">
                  <Zap className="w-3 h-3 group-hover:scale-110 transition-transform" />
                  Pickleball
                </span>
              </Link>
              <Link href="/youth-sports">
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/50 hover:text-[#00d4ff] transition-colors cursor-pointer group" data-testid="link-youth-sports-sports">
                  <Users className="w-3 h-3 group-hover:scale-110 transition-transform" />
                  Youth Sports
                </span>
              </Link>
              <Link href="/sports-organizations" data-testid="link-sports-organizations" className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/50 hover-elevate transition-colors cursor-pointer">
                <Building2 className="w-3 h-3" />
                Sports Organizations
              </Link>
              <Link href="/adventure-sports" data-testid="link-adventure-sports" className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/50 hover-elevate transition-colors cursor-pointer">
                <Bike className="w-3 h-3" />
                Adventure Sports
              </Link>
            </div>
          </div>

        </div>

        <button
          onClick={() => scrollToSection("featured-program")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-primary transition-all duration-300 animate-bounce hover:animate-none hover:scale-110"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* Why Matterhorn Section - Enhanced with Animations */}
      <section 
        id="why-us" 
        data-animate
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0D1B2A 50%, #1B2A41 100%)' }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00ff88]/8 rounded-full blur-[180px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00d4ff]/6 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff00ff]/4 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: '3s' }} />
          
          {/* Floating particles effect */}
          <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-[#00ff88]/40 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="absolute top-[40%] right-[15%] w-1.5 h-1.5 bg-[#00d4ff]/50 rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
          <div className="absolute bottom-[30%] left-[20%] w-2.5 h-2.5 bg-[#ff00ff]/30 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute top-[60%] right-[25%] w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }} />
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-16 ${getAnimationClass("why-us")}`}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#00ff88]/50 to-[#00ff88]" />
              <Badge className="bg-[#00ff88]/15 text-[#00ff88] border-[#00ff88]/30 text-[10px] uppercase tracking-widest px-4 py-1.5 shadow-[0_0_20px_rgba(0,255,136,0.2)]">
                Why Matterhorn
              </Badge>
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent via-[#00ff88]/50 to-[#00ff88]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              The Sports Insurance{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#ff00ff] animate-gradient bg-[length:200%_auto]">
                Advantage
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Partner with industry veterans who understand sports risks from the inside out
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyMatterhorn.map((item, index) => {
              const neonColors = ['#00ff88', '#00d4ff', '#ff00ff', '#ffff00'];
              const neonColor = neonColors[index % neonColors.length];
              return (
                <Card 
                  key={index}
                  className={`p-5 h-full relative overflow-hidden bg-[#1B2A41]/40 border-white/5 backdrop-blur-xl transition-all duration-700 group hover:scale-[1.02] hover:-translate-y-1 ${getAnimationClass("why-us")}`}
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                    boxShadow: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 20px 60px ${neonColor}20, 0 0 40px ${neonColor}10`;
                    e.currentTarget.style.borderColor = `${neonColor}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  }}
                  data-testid={`card-why-matterhorn-${index}`}
                >
                  {/* Animated gradient background on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ 
                      background: `radial-gradient(circle at 50% 0%, ${neonColor}15 0%, transparent 70%)`
                    }}
                  />
                  
                  {/* Top accent line that animates on hover */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ background: `linear-gradient(90deg, ${neonColor}, ${neonColor}80, transparent)` }}
                  />
                  
                  {/* Corner glow */}
                  <div 
                    className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                    style={{ backgroundColor: neonColor }}
                  />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon with animated glow */}
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110"
                      style={{ 
                        backgroundColor: `${neonColor}15`,
                        boxShadow: `0 0 0px ${neonColor}00`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 30px ${neonColor}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 0px ${neonColor}00`;
                      }}
                    >
                      <item.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color: neonColor }} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base font-bold mb-2 text-white leading-tight min-h-[40px] flex items-center">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-300 flex-1 min-h-[72px]">
                      {item.description}
                    </p>
                    
                    {/* Bottom accent with unique micro tag */}
                    <div className="mt-4 pt-3 border-t border-white/5 group-hover:border-white/10 transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: neonColor }} />
                        <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: `${neonColor}` }}>{item.microTag}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          
          {/* Bottom CTA */}
          <div className={`text-center mt-14 ${getAnimationClass("why-us")}`}>
            <Button 
              size="lg"
              className="group bg-transparent border-2 border-[#00ff88]/50 text-[#00ff88] hover:bg-[#00ff88] hover:text-black transition-all duration-300"
              onClick={() => setApplicationModalOpen(true)}
              data-testid="button-get-started-why"
            >
              Get Appointed Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Pickleball Program Section */}
      <section 
        id="featured-program" 
        data-animate 
        className="py-20 bg-gradient-to-b from-[#0A1628] to-[#0D1B2A] relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/6 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-12 ${getAnimationClass("featured-program")}`}>
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              <Star className="w-3 h-3 mr-1" />
              Featured Program
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              America's Fastest Growing Sport,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                Fully Protected
              </span>
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Our comprehensive Pickleball Program provides specialized coverage for facilities, clubs, 
              tournaments, and professionals in the nation's most dynamic racquet sport.
            </p>
          </div>

          <div className={`${getAnimationClass("featured-program")}`}>
            <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-br from-[#1B2A41]/80 to-[#0D1B2A]/90 backdrop-blur-xl group hover:border-primary/60 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-cyan-500/5 group-hover:from-primary/10 group-hover:to-cyan-500/10 transition-all duration-500" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-lg shadow-primary/30">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">Pickleball Program</h3>
                        <p className="text-primary font-medium">Comprehensive Coverage Solution</p>
                      </div>
                    </div>
                    
                    <p className="text-white/70 text-lg mb-6 leading-relaxed">
                      Purpose-built insurance for the pickleball industry. From community recreation centers 
                      to professional tournament circuits, we protect every aspect of pickleball operations 
                      with tailored coverages and competitive rates.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-2 text-white/80">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">General Liability</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Participant Accident</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Property Coverage</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Franchise Programs</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Alcohol Liability</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">D&O / E&O Coverage</span>
                      </div>
                    </div>

                    <Link href="/pickleball">
                      <Button 
                        size="lg" 
                        className="group/btn"
                        data-testid="button-explore-pickleball"
                      >
                        Explore Pickleball Program
                        <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="hidden md:flex flex-col gap-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-primary/30 transition-colors">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">50+</div>
                        <div className="text-white/60 text-sm mt-1">States Covered</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-primary/30 transition-colors">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">24hr</div>
                        <div className="text-white/60 text-sm mt-1">Quote Turnaround</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-primary/30 transition-colors">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">A+</div>
                        <div className="text-white/60 text-sm mt-1">Rated Carriers</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-primary/30 transition-colors">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">All</div>
                        <div className="text-white/60 text-sm mt-1">Facility Types</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-xl p-6 border border-primary/20">
                      <div className="flex items-center gap-3 mb-3">
                        <TrendingUp className="w-6 h-6 text-primary" />
                        <span className="text-white font-semibold">Growing Fast</span>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">
                        Pickleball is America's fastest-growing sport with 36 million players. 
                        Our program scales from single-court facilities to national tournament circuits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Youth Sports Program Section */}
      <section 
        id="youth-sports-program" 
        data-animate 
        className="py-20 bg-[#0D1B2A] relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00ff88]/8 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[#ff00ff]/6 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-12 ${getAnimationClass("youth-sports-program")}`}>
            <Badge className="bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30 mb-4">
              <Users className="w-3 h-3 mr-1" />
              Featured Program
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Protecting America's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">
                Youth Athletes
              </span>
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Partner with the National Alliance for Youth Sports (NAYS) to provide comprehensive coverage 
              for youth sports organizations, leagues, and recreational programs nationwide.
            </p>
          </div>

          <div className={`${getAnimationClass("youth-sports-program")}`}>
            <Card className="relative overflow-hidden border-[#00ff88]/30 bg-gradient-to-br from-[#1B2A41]/80 to-[#0D1B2A]/90 backdrop-blur-xl group hover:border-[#00ff88]/60 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/5 via-transparent to-[#00d4ff]/5 group-hover:from-[#00ff88]/10 group-hover:to-[#00d4ff]/10 transition-all duration-500" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff88]/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00ff88] to-[#00d4ff] flex items-center justify-center shadow-lg shadow-[#00ff88]/30">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">Youth Sports Program</h3>
                        <p className="text-[#00ff88] font-medium">NAYS Partnership</p>
                      </div>
                    </div>
                    
                    <p className="text-white/70 text-lg mb-6 leading-relaxed">
                      Comprehensive insurance solutions for youth sports organizations. From little leagues 
                      to recreational programs, we protect young athletes and the organizations that serve them 
                      with specialized coverages and competitive rates.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-2 text-white/80">
                        <CheckCircle className="w-5 h-5 text-[#00ff88] flex-shrink-0" />
                        <span className="text-sm">General Liability</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <CheckCircle className="w-5 h-5 text-[#00ff88] flex-shrink-0" />
                        <span className="text-sm">Participant Accident</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <CheckCircle className="w-5 h-5 text-[#00ff88] flex-shrink-0" />
                        <span className="text-sm">Abuse & Molestation</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <CheckCircle className="w-5 h-5 text-[#00ff88] flex-shrink-0" />
                        <span className="text-sm">D&O Coverage</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <CheckCircle className="w-5 h-5 text-[#00ff88] flex-shrink-0" />
                        <span className="text-sm">Property Coverage</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <CheckCircle className="w-5 h-5 text-[#00ff88] flex-shrink-0" />
                        <span className="text-sm">Crime Coverage</span>
                      </div>
                    </div>

                    <Link href="/youth-sports">
                      <Button 
                        size="lg" 
                        className="group/btn bg-[#00ff88] hover:bg-[#00ff88]/90 text-black"
                        data-testid="button-explore-youth-sports"
                      >
                        Explore Youth Sports Program
                        <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="hidden md:flex flex-col gap-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#00ff88]/30 transition-colors">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">50</div>
                        <div className="text-white/60 text-sm mt-1">States Covered</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#00ff88]/30 transition-colors">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">60+</div>
                        <div className="text-white/60 text-sm mt-1">Years NAYS Experience</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#00ff88]/30 transition-colors">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">A+</div>
                        <div className="text-white/60 text-sm mt-1">Rated Carriers</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#00ff88]/30 transition-colors">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">All</div>
                        <div className="text-white/60 text-sm mt-1">Sports Covered</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[#00ff88]/10 to-[#00d4ff]/10 rounded-xl p-6 border border-[#00ff88]/20">
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="w-6 h-6 text-[#00ff88]" />
                        <span className="text-white font-semibold">Trusted Partnership</span>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">
                        The National Alliance for Youth Sports has been protecting youth sports organizations 
                        for over 60 years. Our partnership brings institutional expertise to every policy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Segments Section */}
      <section 
        id="markets" 
        data-animate
        className="py-24 relative overflow-hidden"
      >
        {/* Sports field background */}
        <div className="absolute inset-0">
          <img src={sportsFieldImage} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0A1628]/90 to-[#1B2A41]" />
        </div>
        
        {/* Neon accent glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-[#00ff88]/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-[#ff00ff]/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#00d4ff]/8 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className={`text-center mb-20 ${getAnimationClass("markets")}`}>
            <Badge className="bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/40 mb-6 shadow-[0_0_15px_rgba(0,255,136,0.3)] px-4 py-1.5">
              Market Segments
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Coverage Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#ff00ff]">
                Every Level of Sport
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              From youth leagues to professional teams, we have specialized programs for every segment of the sports industry.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {marketSegments.map((segment, index) => {
              const neonColors = ['#00ff88', '#00d4ff', '#ff00ff', '#ffff00', '#00ff88'];
              const neonColor = neonColors[index % neonColors.length];
              return (
                <Card 
                  key={index}
                  className={`p-6 bg-[#1B2A41]/60 border-white/10 backdrop-blur-sm hover:scale-[1.02] transition-all duration-500 group relative overflow-hidden w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] ${getAnimationClass("markets")}`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    borderColor: 'rgba(255,255,255,0.1)'
                  }}
                  data-testid={`card-segment-${index}`}
                >
                  {/* Subtle glow effect on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ 
                      background: `radial-gradient(circle at 30% 30%, ${neonColor}15 0%, transparent 60%)`
                    }}
                  />
                  
                  {/* Top accent line */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${neonColor}, transparent)` }}
                  />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300"
                      style={{ 
                        backgroundColor: `${neonColor}20`,
                        boxShadow: `0 0 25px ${neonColor}25`
                      }}
                    >
                      <segment.icon className="w-6 h-6" style={{ color: neonColor }} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#00ff88] transition-colors leading-tight">
                      {segment.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/60 text-sm mb-4 leading-relaxed min-h-[48px]">
                      {segment.description}
                    </p>
                    
                    {/* Coverage Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <Badge 
                        variant="outline" 
                        className="text-xs px-2 py-0.5"
                        style={{ 
                          borderColor: `${neonColor}50`,
                          color: neonColor,
                          backgroundColor: `${neonColor}15`
                        }}
                      >
                        {segment.coverage}
                      </Badge>
                    </div>
                    
                    {/* Highlight */}
                    <p className="text-xs font-medium leading-relaxed" style={{ color: `${neonColor}cc` }}>
                      {segment.highlight}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className={`text-center mt-12 ${getAnimationClass("markets")}`}>
            <p className="text-white/60 mb-6">
              Have a unique sports risk? Let's design a custom solution together.
            </p>
            <Button 
              size="lg"
              className="group bg-[#00ff88] hover:bg-[#00ff88]/90 text-black"
              asChild
              data-testid="button-contact-sports-team"
            >
              <a href="mailto:support@matterhornprotects.com?subject=Sports Program Inquiry - Custom Submission Design">
                Contact Our Team
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Highlights Section - Consolidated Accordion Design */}
      <section 
        id="coverages" 
        data-animate
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1B2A41 50%, #0A1628 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-12 ${getAnimationClass("coverages")}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
              <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] uppercase tracking-widest px-4">
                Program Overview
              </Badge>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
                Sports Coverage
              </span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white/60">
              One submission connects you to our carefully selected A-rated markets with specialized sports expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Left Column - Program Details with Accordions */}
            <div className="lg:col-span-7 space-y-6">
              <Card className="p-8 bg-[#1B2A41]/60 border-white/10 backdrop-blur-sm relative overflow-hidden" data-testid="card-program-details">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-cyan-400 to-purple-500" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center" style={{ boxShadow: '0 0 25px rgba(0, 168, 199, 0.25)' }}>
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Sports Programs</h3>
                    <p className="text-sm text-primary">Multi-market access with curated expertise</p>
                  </div>
                </div>

                <Accordion type="multiple" defaultValue={["coverages"]} className="space-y-3">
                  {/* Coverage Types Accordion */}
                  <AccordionItem value="coverages" className="border border-white/10 rounded-lg overflow-hidden">
                    <AccordionTrigger 
                      className="text-base py-4 px-5 rounded-lg hover-elevate text-white bg-white/5 [&[data-state=open]]:bg-primary/10"
                      data-testid="accordion-coverage-types"
                    >
                      <span className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-primary" />
                        <span className="font-semibold">Coverage Types & Limits</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {coverageTypes.map((coverage, idx) => (
                          <div key={idx} className="flex items-start gap-3 group p-2 rounded-md hover:bg-white/5 transition-colors">
                            <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-primary" />
                            <div className="flex-1">
                              <span className="text-sm font-medium text-primary/90">
                                {coverage.name}
                              </span>
                              <p className="text-xs text-white/50 mt-0.5">{coverage.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Market Segments Accordion */}
                  <AccordionItem value="segments" className="border border-white/10 rounded-lg overflow-hidden">
                    <AccordionTrigger 
                      className="text-base py-4 px-5 rounded-lg hover-elevate text-white bg-white/5 [&[data-state=open]]:bg-cyan-500/10"
                      data-testid="accordion-market-segments"
                    >
                      <span className="flex items-center gap-3">
                        <Target className="w-5 h-5 text-cyan-400" />
                        <span className="font-semibold">Markets We Serve</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {marketSegments.map((segment, idx) => {
                          const SegmentIcon = segment.icon;
                          return (
                            <div key={idx} className="flex items-center gap-3 text-sm p-2 rounded-md hover:bg-white/5 transition-colors">
                              <SegmentIcon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <div>
                                <span className="text-white/80 font-medium">{segment.title}</span>
                                <p className="text-xs text-white/40">{segment.coverage}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Program Features Accordion */}
                  <AccordionItem value="features" className="border border-white/10 rounded-lg overflow-hidden">
                    <AccordionTrigger 
                      className="text-base py-4 px-5 rounded-lg hover-elevate text-white bg-white/5 [&[data-state=open]]:bg-purple-500/10"
                      data-testid="accordion-program-features"
                    >
                      <span className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400" />
                        <span className="font-semibold">Program Features & Benefits</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <ul className="space-y-3">
                        {[
                          { text: "15+ A-rated sports-focused markets", highlight: true },
                          { text: "In-house binding authority for faster turnarounds", highlight: true },
                          { text: "Dedicated sports underwriting team", highlight: true },
                          { text: "Same-day broker appointments available", highlight: true },
                          { text: "Agnostic application acceptance", highlight: false },
                          { text: "Custom program design capability", highlight: false },
                          { text: "Digital certificate generation", highlight: false },
                          { text: "Claims advocacy and support", highlight: false },
                        ].map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${feature.highlight ? 'bg-purple-400' : 'bg-white/40'}`} />
                            <span className={`text-sm ${feature.highlight ? 'text-purple-300 font-medium' : 'text-white/60'}`}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold shadow-lg shadow-primary/30 transition-all duration-300"
                    onClick={() => setApplicationModalOpen(true)}
                    data-testid="button-get-appointed"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Get Appointed Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Right Column - Quick Facts & Contact */}
            <div className="lg:col-span-5 space-y-6">
              {/* Competitive Advantage Callout */}
              <Card className="p-6 relative overflow-hidden bg-[#0D1B2A] border-primary/40" data-testid="card-competitive-advantage">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-cyan-500/10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4" style={{ boxShadow: '0 0 30px rgba(0, 168, 199, 0.4)' }}>
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">One Submission</h3>
                  <p className="text-lg font-medium mb-4 text-[#00d4ff]">
                    Access 15+ A-Rated Markets
                  </p>
                  <p className="text-sm leading-relaxed text-white/80">
                    Our curated market access means your sports risks reach the right underwriters the first time—no shopping, no delays.
                  </p>
                </div>
              </Card>

              {/* Quick Facts Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-5 bg-[#1B2A41]/50 border-white/10" data-testid="card-quick-fact-1">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-white">24-48hr</p>
                  <p className="text-sm text-white/50">Quote Turnaround</p>
                </Card>
                <Card className="p-5 bg-[#1B2A41]/50 border-white/10" data-testid="card-quick-fact-2">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">50 States</p>
                  <p className="text-sm text-white/50">National Coverage</p>
                </Card>
                <Card className="p-5 bg-[#1B2A41]/50 border-white/10" data-testid="card-quick-fact-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3">
                    <Shield className="w-5 h-5 text-purple-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">A-Rated</p>
                  <p className="text-sm text-white/50">Carrier Partners</p>
                </Card>
                <Card className="p-5 bg-[#1B2A41]/50 border-white/10" data-testid="card-quick-fact-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-white">Same Day</p>
                  <p className="text-sm text-white/50">Appointments</p>
                </Card>
              </div>

              {/* Contact Card */}
              <Card className="p-5 bg-[#1B2A41]/50 border-white/10" data-testid="card-contact-info">
                <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-white">
                  <Mail className="w-4 h-4 text-primary" />
                  Need More Information?
                </h4>
                <p className="text-sm mb-3 text-white/50">
                  Reach out to our sports team for program details and custom quotes.
                </p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:support@matterhornprotects.com" className="text-sm text-primary hover:opacity-80 transition-colors flex items-center gap-2">
                    <Mail className="w-3 h-3" />
                    support@matterhornprotects.com
                  </a>
                  <a href="tel:1-844-600-0611" className="text-sm text-cyan-400 hover:opacity-80 transition-colors flex items-center gap-2">
                    <Phone className="w-3 h-3" />
                    1-844-600-0611
                  </a>
                </div>
              </Card>
            </div>
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
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
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
              Discover how our partners solve complex sports insurance challenges
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
                      ? "bg-gradient-to-r from-primary/20 to-cyan-500/10 border-primary/50 shadow-lg shadow-primary/20"
                      : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                  }`}
                  data-testid={`case-study-tab-${index}`}
                >
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

            <div className="lg:col-span-8">
              <Card className="bg-[#1B2A41]/40 border-white/10 backdrop-blur-xl overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-cyan-400 to-purple-500" />
                
                <div className="p-8">
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(caseStudies[activeCaseStudy].results).map(([key, value], idx) => (
                      <div 
                        key={key}
                        className="relative group p-4 rounded-lg bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 hover:border-primary/30 transition-all duration-300 text-center overflow-hidden"
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

                  <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
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
                          <li key={idx} className="flex items-start gap-2 text-white/60 text-sm group hover:text-white/80 transition-colors">
                            <CheckCircle className="w-4 h-4 text-cyan-400/70 flex-shrink-0 mt-0.5 group-hover:text-cyan-400 transition-colors" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
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
                          <li key={idx} className="flex items-start gap-2 text-white/60 text-sm group hover:text-white/80 transition-colors">
                            <CheckCircle className="w-4 h-4 text-purple-400/70 flex-shrink-0 mt-0.5 group-hover:text-purple-400 transition-colors" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

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
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`grid lg:grid-cols-12 gap-12 lg:gap-16 ${getAnimationClass("faq")}`}>
            <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-[1px] bg-gradient-to-r from-primary to-transparent" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary/80">
                    Sports
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
                  Everything you need to know about our sports programs.
                  Ready to get started? Contact Mike Asselin directly.
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
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-3">
                {[
                  { category: "Coverage", question: "What types of sports organizations do you cover?", answer: "We cover all levels from youth leagues and amateur tournaments to collegiate athletics, professional teams, and adventure sports operators. Our programs are designed for the unique risks of each segment." },
                  { category: "Participant", question: "What participant accident coverage options are available?", answer: "We offer comprehensive participant accident programs with varying benefit levels, from basic medical coverage to catastrophic injury protection with limits up to $10M. Coverage can be structured on a per-participant or event basis." },
                  { category: "Youth", question: "Do you have specialized coverage for youth sports organizations?", answer: "Yes, our youth sports programs include comprehensive general liability, abuse/molestation coverage, D&O for board members, and participant accident. We understand the unique regulatory and safety requirements for youth programs." },
                  { category: "Events", question: "Can you cover sporting events and tournaments?", answer: "Absolutely. We provide event liability, participant accident, event cancellation, and prize indemnity coverage for tournaments, competitions, and sporting events of all sizes." },
                  { category: "Getting Started", question: "How do I get appointed with Matterhorn Sports?", answer: "Complete our online appointment application. We verify credentials quickly, and qualified agencies typically receive same-day approval. Once appointed, you'll have immediate access to submit sports risks." },
                  { category: "Submissions", question: "What information do you need to quote sports risks?", answer: "We accept agnostic submissions - use your existing application format. Key information includes participant counts, event details, coverage limits needed, and loss history. We'll request additional details if needed." },
                  { category: "Territory", question: "Which states do you write sports business in?", answer: "We have nationwide coverage with programs available in all 50 states. Specific coverage availability may vary by program type and risk characteristics." },
                  { category: "Adventure", question: "Do you cover high-risk adventure sports?", answer: "Yes, we have specialty markets for adventure sports including skiing, climbing, water sports, and extreme activities. Each program is tailored to the specific activity and risk profile." },
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
                      <div className="overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
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
