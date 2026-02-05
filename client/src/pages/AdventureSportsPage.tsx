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
  Shield,
  Clock,
  Zap,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  Award,
  Globe,
  Briefcase,
  Settings,
  Target,
  Heart,
  Compass,
  Waves,
  TreePine,
  Anchor,
  Tent,
  Wind,
  MapPin,
  Camera,
  Navigation,
  Star,
  TrendingUp,
  ChevronDown,
  Phone,
  Mail,
  Sun,
  Moon,
  Fish,
  Crosshair,
  Plane,
  Ship,
  Package,
  Calendar,
  Layers,
} from "lucide-react";
import { BrokerApplicationModal } from "@/components/BrokerApplicationModal";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import adventureHero from "@/assets/images/adventure-hiking-hero.jpg";
import bcFishingLodgeHero from "@/assets/images/bc-fishing-lodge-hero.png";
import mountainMooseHuntingImg from "@/assets/images/mountain-moose-hunting.png";
import bcFlyinFishingLodgeImg from "@/assets/images/bc-flyin-fishing-lodge.png";
import kayakingImg from "@/assets/images/kayaking-rapids.jpg";
import seaKayakersExpeditionImg from "@/assets/images/sea-kayakers-island-expedition.png";
import rockClimbingImg from "@/assets/images/rock-climbing.jpg";
import flyFishingImg from "@/assets/images/fly-fishing.jpg";
import scubaDivingImg from "@/assets/images/scuba-diving.jpg";
import skydivingImg from "@/assets/images/skydiving.jpg";
import bcFishingTripImg from "@/assets/images/bc-fishing-trip.png";
import mountainHuntingImg from "@/assets/images/mountain-hunting-trip.png";
import seaKayakingImg from "@/assets/images/sea-kayaking.png";
import bushplaneLandingImg from "@/assets/images/bushplane-landing.png";
import whitewaterGuidedTourImg from "@/assets/images/whitewater-guided-tour.png";
import wayneGutridgePhoto from "@assets/avatars/wayne_gutridge_avatar.png";
import isaacAllenPhoto from "@assets/avatars/isaac_allen_avatar.png";
import mikeAsselinPhoto from "@assets/avatars/mike_asselin_avatar.png";

// Neon color palette for Adventure Sports - earthy/adventure tones
const NEON_COLORS = {
  amber: '#f59e0b',
  emerald: '#10b981',
  cyan: '#06b6d4',
  orange: '#f97316',
  lime: '#84cc16',
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

export default function AdventureSportsPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
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

  // Program highlights for Adventure Tour & Guide Operators - with detailed limits
  const programHighlights = [
    {
      title: "General Liability Coverage",
      content: "Comprehensive GL coverage protecting outfitters and guides against third-party bodily injury and property damage claims arising from hunting, fishing, and adventure activities.",
      limit: "Up to $5M per occurrence",
      icon: Shield,
    },
    {
      title: "Professional Liability / E&O",
      content: "Protection for claims arising from alleged negligent acts, errors, or omissions in providing guide services, instruction, or activity supervision. Critical coverage for licensed guides and outfitters.",
      limit: "Up to $2M aggregate",
      icon: Briefcase,
    },
    {
      title: "Firearms Liability",
      content: "Specialized coverage for hunting operations including accidental discharge, firearm instruction liability, and range safety incidents.",
      limit: "Up to $1M per occurrence",
      icon: Crosshair,
    },
    {
      title: "Participant Accident Medical",
      content: "Primary medical coverage for participants regardless of fault, covering immediate medical expenses, emergency evacuation, and follow-up care for injuries.",
      limit: "Up to $100K per participant",
      icon: Heart,
    },
    {
      title: "Watercraft & Equipment",
      content: "Coverage for owned, leased, or rented equipment including fishing boats, ATVs, snowmobiles, firearms, and specialized outdoor gear.",
      limit: "Up to $500K per location",
      icon: Anchor,
    },
    {
      title: "Aviation Liability",
      content: "Coverage for fly-in operations, bush plane transportation, and helicopter access to remote hunting and fishing locations.",
      limit: "Up to $5M per occurrence",
      icon: Plane,
    },
    {
      title: "Remote Evacuation & Rescue",
      content: "Specialized coverage for search and rescue operations, helicopter evacuation, and emergency medical transport from remote wilderness.",
      limit: "Up to $100K per incident",
      icon: Navigation,
    },
    {
      title: "Lodge & Property Coverage",
      content: "Property protection for remote lodges, cabins, camps, and all associated structures including equipment storage and guest facilities.",
      limit: "Up to $2M per location",
      icon: Tent,
    },
  ];

  // Adventure Travel Programs
  const adventureTravelPrograms = [
    {
      title: "Water Sports Operations",
      description: "Rafting, kayaking, paddleboarding, surfing instruction, dive operations, and coastal adventure tours.",
      icon: Waves,
      color: NEON_COLORS.cyan,
      activities: ["Whitewater Rafting", "Sea Kayaking", "SUP Tours", "Surf Schools", "Scuba Operations"],
      whoWeServe: ["Rafting Outfitters", "Kayak Tour Operators", "SUP Rental Companies", "Surf Instruction Schools", "Dive Centers", "Coastal Adventure Tours"],
    },
    {
      title: "Backcountry Fishing",
      description: "Fly-in lodges, remote fishing camps, guided river trips, and backcountry fishing operations.",
      icon: Fish,
      color: NEON_COLORS.emerald,
      activities: ["Fly-In Lodges", "River Guides", "Backcountry Camps", "Saltwater Charters", "Ice Fishing"],
      whoWeServe: ["Fly-In Fishing Lodges", "River Fishing Guides", "Backcountry Camp Operators", "Saltwater Charter Captains", "Ice Fishing Outfitters", "Fly Fishing Schools"],
    },
    {
      title: "Aerial Adventures",
      description: "Zip line operations, paragliding instruction, skydiving centers, and aerial adventure parks.",
      icon: Wind,
      color: NEON_COLORS.amber,
      activities: ["Zip Line Tours", "Paragliding", "Hang Gliding", "Skydiving", "Canopy Tours"],
      whoWeServe: ["Zip Line Operators", "Paragliding Instructors", "Hang Gliding Schools", "Skydiving Centers", "Canopy Tour Companies", "Aerial Adventure Parks"],
    },
    {
      title: "Hunting Outfitters",
      description: "Big game hunting guides, waterfowl operations, upland bird hunts, and remote hunting camps.",
      icon: Crosshair,
      color: NEON_COLORS.orange,
      activities: ["Big Game Guides", "Waterfowl Hunts", "Upland Birds", "Remote Camps", "Trophy Hunts"],
      whoWeServe: ["Big Game Outfitters", "Waterfowl Hunt Operators", "Upland Bird Guides", "Remote Hunting Lodges", "International Safari Operators", "Hunting Ranch Owners"],
    },
    {
      title: "Eco-Tourism & Wildlife",
      description: "Wildlife viewing tours, eco-lodges, bird watching expeditions, and nature photography trips.",
      icon: TreePine,
      color: NEON_COLORS.lime,
      activities: ["Safari Tours", "Bird Watching", "Photo Tours", "Eco-Lodges", "Nature Walks"],
      whoWeServe: ["Wildlife Safari Operators", "Eco-Lodge Owners", "Bird Watching Tour Guides", "Nature Photography Tours", "Conservation Tour Companies", "Wilderness Retreat Centers"],
    },
    {
      title: "Motorized Adventures",
      description: "ATV tours, snowmobile operations, jet ski rentals, and off-road adventure experiences.",
      icon: Navigation,
      color: NEON_COLORS.cyan,
      activities: ["ATV Tours", "Snowmobile Tours", "Jet Ski Rentals", "Dune Buggies", "4x4 Adventures"],
      whoWeServe: ["ATV Tour Operators", "Snowmobile Rental Companies", "Jet Ski Rental Centers", "Dune Buggy Tours", "4x4 Adventure Companies", "Off-Road Experience Parks"],
    },
  ];

  // Expeditions & Hunting coverage
  const expeditionsCoverage = [
    {
      title: "Hunting Outfitters & Guides",
      description: "Comprehensive coverage for hunting guides, outfitters, and lodges including firearms liability and watercraft exposure.",
      features: ["Firearms Liability", "Guide Professional Liability", "Lodge Property Coverage", "Client Transportation"],
      icon: Crosshair,
    },
    {
      title: "Fishing Expeditions",
      description: "Specialized programs for fly-in fishing lodges, charter boats, and remote fishing camps with aviation exposure included.",
      features: ["Aviation Liability", "Watercraft Coverage", "Remote Location Extension", "Equipment Floater"],
      icon: Fish,
    },
    {
      title: "International Expeditions",
      description: "Worldwide coverage for expedition operators taking clients to remote international destinations with political risk options.",
      features: ["Worldwide Territory", "Political Risk Coverage", "Repatriation Expenses", "Trip Cancellation"],
      icon: Globe,
    },
    {
      title: "Expedition Travel Insurance",
      description: "Participant coverage for adventure travelers joining expeditions, with specialized benefits for high-risk activities.",
      features: ["High Altitude Coverage", "Extreme Sports Extension", "Medical Evacuation", "Trip Interruption"],
      icon: Plane,
    },
  ];

  // Case studies
  const caseStudies = [
    {
      title: "Pacific Coast Sea Kayaking & Camping Outfitter",
      category: "Embedded Travel",
      location: "Pacific Northwest / BC / Alaska",
      challenge: "A leading sea kayaking and wilderness camping company operating multi-day expeditions needed embedded travel insurance for 15,000 annual participants. Their existing patchwork of policies left gaps in medical evacuation, trip cancellation, and gear protection.",
      solution: "Designed an embedded travel program integrated directly into their booking platform with automatic participant enrollment. Coverage includes trip cancellation (CFAR), $500K medical evacuation, paddling gear protection, and 24/7 global assistance for all 15,000 annual guests.",
      results: { premium: "$275K", participants: "15,000", routes: "24 Expeditions" },
      image: seaKayakersExpeditionImg,
      brokerBenefits: [
        "Embedded checkout integration for seamless enrollment",
        "Annual blanket program simplifies administration",
        "Per-participant pricing with volume discounts",
      ],
    },
    {
      title: "Big Game Hunting Outfitter Network",
      category: "Hunting Outfitters",
      location: "Montana / Wyoming / Colorado",
      challenge: "A network of three big game hunting outfitters with backcountry camps, horse pack strings, and guided hunts across three western states needed unified coverage with firearms liability and remote evacuation.",
      solution: "Designed a master program with unified $5M limits across all operations, firearms liability, livestock coverage for pack horses, and remote wilderness evacuation endorsements.",
      results: { premium: "$145K", camps: "8", hunters: "400+" },
      image: mountainMooseHuntingImg,
      brokerBenefits: [
        "Accessed specialty hunting outfitter markets",
        "Built niche expertise in backcountry operations",
        "Generated referrals from outdoor industry",
      ],
    },
    {
      title: "Remote Fly-In Fishing Lodge Network",
      category: "Expeditions & Hunting",
      location: "Alaska / Canada",
      challenge: "A network of five fly-in fishing lodges in Alaska and British Columbia struggled to find coverage due to bush plane transportation, remote locations, and bear country exposure.",
      solution: "Partnered with specialty aviation and adventure markets to create an integrated program covering all aviation exposure, lodge operations, guide liability, and emergency evacuation.",
      results: { premium: "$320K", lodges: "5", guests: "2,000+" },
      image: bcFlyinFishingLodgeImg,
      brokerBenefits: [
        "Accessed markets others couldn't find",
        "Built expertise in remote lodge niche",
        "Secured exclusive long-term relationship",
      ],
    },
  ];

  // Leadership team
  const leadership = [
    {
      name: "Wayne Gutridge",
      title: "Managing Director",
      description: "A visionary leader in specialty insurance, Wayne brings strategic vision to adventure sports coverage and our expansion into outdoor recreation markets.",
      photo: wayneGutridgePhoto,
    },
    {
      name: "Isaac Allen",
      title: "Managing Director",
      description: "Isaac's deep expertise in adventure risk management and carrier relationships ensures our programs meet the unique needs of outdoor operators.",
      photo: isaacAllenPhoto,
    },
    {
      name: "Mike Asselin",
      title: "Chief Operating Officer",
      description: "Mike's operational expertise and outdoor industry connections drive innovation in our adventure sports programs and expedition coverage.",
      photo: mikeAsselinPhoto,
    },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#0A1628] text-white' : 'bg-gray-50 text-gray-900'}`}>
      <CustomCursor />
      
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? isDarkMode
              ? "bg-[#0A1628]/95 backdrop-blur-md border-b border-amber-500/20 shadow-lg shadow-amber-500/5"
              : "bg-white/95 backdrop-blur-md border-b border-amber-500/20 shadow-lg"
            : "bg-transparent"
        }`}
        data-testid="nav-adventure"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-8">
            <Link href="/" data-testid="link-home">
              <div className="flex items-center gap-3 cursor-pointer group">
                <Compass className="w-7 h-7 text-amber-500 transition-all duration-300" />
                <div className="flex flex-col">
                  <div className="text-xl font-bold text-amber-500 leading-tight drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">MATTERHORN</div>
                  <div className="text-[10px] font-medium text-amber-500/70 tracking-widest uppercase">Adventure</div>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-3">
              {["Programs", "Travel", "Expeditions", "Case Studies"].map((item) => (
                <Button
                  key={item}
                  variant="outline"
                  size="sm"
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className={`text-[10px] uppercase tracking-widest font-medium ${
                    isDarkMode 
                      ? "text-white/70 border-white/20" 
                      : "text-gray-600 border-gray-300"
                  }`}
                  data-testid={`nav-${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </Button>
              ))}

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`${isDarkMode ? "text-white/70" : "text-gray-600"}`}
                data-testid="button-theme-toggle"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>

              <Button 
                onClick={() => setApplicationModalOpen(true)} 
                size="sm"
                className="ml-4 text-[10px] uppercase tracking-widest bg-amber-500 text-black font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)]"
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
          style={{ backgroundImage: `url(${bcFishingLodgeHero})` }}
        >
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-[#0A1628]/90 via-[#0A1628]/80 to-[#1B2A41]/85' : 'bg-gradient-to-br from-white/80 via-white/70 to-gray-100/85'}`} />
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-t from-[#0A1628] via-transparent to-transparent' : 'bg-gradient-to-t from-white via-transparent to-transparent'}`} />
        </div>
        
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.amber}15`, animationDuration: '3s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[100px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.emerald}12`, animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.cyan}08`, animationDuration: '5s', animationDelay: '2s' }} />
          
          {/* Floating particles */}
          <div className="absolute top-20 left-[10%] w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: `${NEON_COLORS.amber}60`, animationDuration: '3s' }} />
          <div className="absolute top-40 right-[15%] w-1.5 h-1.5 rounded-full animate-bounce" style={{ backgroundColor: `${NEON_COLORS.emerald}50`, animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-[20%] w-1 h-1 rounded-full animate-bounce" style={{ backgroundColor: `${NEON_COLORS.cyan}40`, animationDuration: '3.5s', animationDelay: '0.5s' }} />
          <div className="absolute top-1/3 right-[25%] w-2.5 h-2.5 rounded-full animate-bounce" style={{ backgroundColor: `${NEON_COLORS.amber}30`, animationDuration: '5s', animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 right-[10%] w-1.5 h-1.5 rounded-full animate-bounce" style={{ backgroundColor: `${NEON_COLORS.emerald}40`, animationDuration: '4.5s', animationDelay: '1.5s' }} />
          
          {/* Animated gradient lines */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${NEON_COLORS.amber}30, transparent)` }} />
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${NEON_COLORS.emerald}30, transparent)` }} />
          <div className="absolute top-0 bottom-0 left-[10%] w-px" style={{ background: `linear-gradient(to bottom, transparent, ${NEON_COLORS.amber}10, transparent)` }} />
          <div className="absolute top-0 bottom-0 right-[10%] w-px" style={{ background: `linear-gradient(to bottom, transparent, ${NEON_COLORS.cyan}10, transparent)` }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <Badge className="mb-6 px-4 py-1.5" style={{ 
            backgroundColor: `${NEON_COLORS.amber}20`, 
            color: NEON_COLORS.amber,
            borderColor: `${NEON_COLORS.amber}40`
          }}>
            <Compass className="w-3 h-3 mr-2" />
            Adventure Sports Programs
          </Badge>
          
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            data-testid="heading-hero-adventure"
          >
            Fearless Coverage for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500 animate-gradient bg-[length:200%_auto]">
              Fearless Pursuits
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl mb-4 max-w-4xl mx-auto font-medium ${isDarkMode ? 'text-white/90' : 'text-gray-700'}`}>
            Specialized insurance programs for adventure tour operators, outfitters, guides, and expedition companies worldwide.
          </p>
          
          <p className={`text-lg mb-10 max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
            From backcountry fishing lodges to remote hunting outfitters, we understand the unique risks of adventure operations and design coverage that protects your business and your participants.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={() => setApplicationModalOpen(true)}
              className="group bg-amber-500 text-black"
              data-testid="button-get-started"
            >
              Connect With Our Team
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={`backdrop-blur-sm group ${isDarkMode ? 'bg-white/5 border-white/30 text-white' : 'bg-white/50 border-gray-300 text-gray-900'}`}
              onClick={() => scrollToSection("programs")}
              data-testid="button-explore-programs"
            >
              Explore Programs
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          <div className={`flex flex-wrap justify-center gap-6 text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
            <div className="flex items-center gap-2 hover:text-amber-500 transition-colors duration-300">
              <Shield className="w-4 h-4 text-amber-500" />
              <span>$5M+ Coverage Limits</span>
            </div>
            <div className="flex items-center gap-2 hover:text-emerald-500 transition-colors duration-300">
              <Compass className="w-4 h-4 text-emerald-500" />
              <span>Worldwide Territory</span>
            </div>
            <div className="flex items-center gap-2 hover:text-cyan-500 transition-colors duration-300">
              <Clock className="w-4 h-4 text-cyan-500" />
              <span>24hr Quote Turnaround</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("programs")}
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-20 transition-all duration-300 animate-bounce ${isDarkMode ? 'text-white/60' : 'text-gray-400'}`}
          data-testid="button-scroll-down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* Adventure Travel Programs Section - Moved to below hero */}
      <section 
        id="adventure-programs" 
        data-animate 
        className="py-24 relative overflow-hidden"
        data-testid="section-adventure-programs"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/10 to-slate-950" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-[120px] animate-pulse bg-emerald-500/10" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-[100px] animate-pulse bg-cyan-500/8" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-1.5 bg-emerald-500/20 text-emerald-400 border-emerald-500/40" style={{ boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)' }}>
              <Compass className="w-3 h-3 mr-1" />
              Adventure Travel Programs
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight" data-testid="heading-adventure-programs">
              Coverage for Every{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-400">
                Adventure
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Specialized programs tailored to the unique risks of each adventure sector, from water sports to aerial adventures.
            </p>
            <Button
              size="lg"
              className="font-semibold transition-all duration-300"
              style={{ 
                backgroundColor: `${NEON_COLORS.emerald}20`, 
                color: NEON_COLORS.emerald, 
                borderColor: `${NEON_COLORS.emerald}50`,
                boxShadow: `0 0 20px ${NEON_COLORS.emerald}20`
              }}
              variant="outline"
              onClick={() => window.location.href = 'mailto:support@matterhornprotects.com?subject=Adventure Sports Program Inquiry'}
              data-testid="button-contact-team-adventure-programs"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Our Team
            </Button>
          </div>

          {/* Program Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {adventureTravelPrograms.map((program, index) => (
              <Card 
                key={index}
                className="p-0 bg-slate-900/60 border-slate-700/50 backdrop-blur-sm relative overflow-hidden group hover:border-opacity-60 transition-all duration-500"
                style={{ borderColor: `${program.color}30` }}
                data-testid={`card-adventure-program-${index}`}
              >
                {/* Top accent bar */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${program.color}, ${program.color}60)` }} />
                
                <div className="p-6">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" 
                      style={{ backgroundColor: `${program.color}20`, boxShadow: `0 0 20px ${program.color}15` }}
                    >
                      <program.icon className="w-6 h-6" style={{ color: program.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{program.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{program.description}</p>
                    </div>
                  </div>

                  {/* Activity Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.activities.map((activity, i) => (
                      <Badge 
                        key={i} 
                        className="text-[10px] bg-slate-800/80 border-slate-600/50"
                        style={{ color: program.color }}
                      >
                        {activity}
                      </Badge>
                    ))}
                  </div>

                  {/* Who We Serve Accordion */}
                  <Accordion type="single" collapsible className="border-0">
                    <AccordionItem value="who-we-serve" className="border-0">
                      <AccordionTrigger 
                        className="py-3 px-4 rounded-lg text-sm font-medium text-white hover:no-underline transition-all duration-300"
                        style={{ backgroundColor: `${program.color}15` }}
                      >
                        <span className="flex items-center gap-2">
                          <Users className="w-4 h-4" style={{ color: program.color }} />
                          <span>Who We Serve</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-3 pb-0">
                        <div className="grid grid-cols-1 gap-2">
                          {program.whoWeServe.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors group/item">
                              <ArrowRight className="w-3 h-3 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" style={{ color: program.color }} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights Section - Adventure Tour & Guide Operators */}
      <section 
        id="programs" 
        data-animate 
        className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-b from-[#0A1628] to-[#0D1B2A]' : 'bg-gradient-to-b from-white to-gray-50'}`}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-[150px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.amber}08` }} />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-[120px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.emerald}06`, animationDelay: '1.5s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-12 ${getAnimationClass("programs")}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[1px]" style={{ background: `linear-gradient(to right, transparent, ${NEON_COLORS.amber})` }} />
              <Badge className="text-[10px] uppercase tracking-widest px-4" style={{ backgroundColor: `${NEON_COLORS.amber}20`, color: NEON_COLORS.amber, borderColor: `${NEON_COLORS.amber}40` }}>
                Program Highlights
              </Badge>
              <div className="w-12 h-[1px]" style={{ background: `linear-gradient(to left, transparent, ${NEON_COLORS.amber})` }} />
            </div>
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Backcountry Fishing &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500">
                Hunting Coverage
              </span>
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
              Comprehensive coverage designed specifically for hunting outfitters, fishing guides, and remote lodge operators.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Left Column - Main Program Card with Accordions */}
            <div className="lg:col-span-7 space-y-6">
              <Card className={`p-8 relative overflow-hidden ${isDarkMode ? 'bg-[#1B2A41]/60 border-amber-500/20' : 'bg-white border-amber-200'} backdrop-blur-sm`} data-testid="card-program-details">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${NEON_COLORS.amber}, ${NEON_COLORS.orange}, ${NEON_COLORS.emerald})` }} />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${NEON_COLORS.amber}20`, boxShadow: `0 0 25px ${NEON_COLORS.amber}25` }}>
                    <Crosshair className="w-6 h-6" style={{ color: NEON_COLORS.amber }} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Outfitter & Guide Programs</h3>
                    <p className="text-sm" style={{ color: NEON_COLORS.amber }}>Coverage limits up to $5M available</p>
                  </div>
                </div>

                <Accordion type="multiple" defaultValue={["coverages"]} className="space-y-3">
                  {/* Coverage Highlights Accordion */}
                  <AccordionItem value="coverages" className={`border rounded-lg overflow-hidden ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
                    <AccordionTrigger 
                      className={`text-base py-4 px-5 rounded-lg hover-elevate ${isDarkMode ? 'text-white bg-white/5' : 'text-gray-900 bg-gray-50'}`}
                      style={{ 
                        ['--tw-bg-opacity' as string]: isDarkMode ? undefined : undefined,
                      }}
                      data-testid="accordion-coverage-highlights"
                    >
                      <span className="flex items-center gap-3">
                        <Shield className="w-5 h-5" style={{ color: NEON_COLORS.amber }} />
                        <span className="font-semibold">Coverage Highlights & Limits</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <div className="grid grid-cols-1 gap-3">
                        {programHighlights.map((item, idx) => {
                          const IconComponent = item.icon;
                          return (
                            <div key={idx} className={`flex items-start gap-3 group p-3 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`}>
                              <div className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${NEON_COLORS.amber}20` }}>
                                <IconComponent className="w-4 h-4" style={{ color: NEON_COLORS.amber }} />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between gap-2 mb-1">
                                  <span className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {item.title}
                                  </span>
                                  <Badge className="text-[10px] font-bold whitespace-nowrap" style={{ backgroundColor: `${NEON_COLORS.amber}20`, color: NEON_COLORS.amber, borderColor: `${NEON_COLORS.amber}30` }}>
                                    {item.limit}
                                  </Badge>
                                </div>
                                <p className={`text-xs ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>{item.content}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Operations We Cover Accordion */}
                  <AccordionItem value="operations" className={`border rounded-lg overflow-hidden ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
                    <AccordionTrigger 
                      className={`text-base py-4 px-5 rounded-lg hover-elevate ${isDarkMode ? 'text-white bg-white/5' : 'text-gray-900 bg-gray-50'}`}
                      data-testid="accordion-operations"
                    >
                      <span className="flex items-center gap-3">
                        <Target className="w-5 h-5" style={{ color: NEON_COLORS.emerald }} />
                        <span className="font-semibold">Operations We Cover</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { icon: Fish, label: "Fly-In Fishing Lodges" },
                          { icon: Crosshair, label: "Big Game Outfitters" },
                          { icon: Anchor, label: "Charter Fishing Boats" },
                          { icon: Tent, label: "Remote Hunting Camps" },
                          { icon: Compass, label: "Backcountry Guides" },
                          { icon: TreePine, label: "Wilderness Lodges" },
                          { icon: Ship, label: "Fishing Expeditions" },
                          { icon: Navigation, label: "Float Trip Operators" },
                          { icon: Globe, label: "International Outfitters" },
                          { icon: Plane, label: "Fly-In Operations" },
                        ].map((op, idx) => {
                          const OpIcon = op.icon;
                          return (
                            <div key={idx} className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                              <OpIcon className="w-4 h-4 flex-shrink-0" style={{ color: NEON_COLORS.emerald }} />
                              <span>{op.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Program Features Accordion */}
                  <AccordionItem value="features" className={`border rounded-lg overflow-hidden ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
                    <AccordionTrigger 
                      className={`text-base py-4 px-5 rounded-lg hover-elevate ${isDarkMode ? 'text-white bg-white/5' : 'text-gray-900 bg-gray-50'}`}
                      data-testid="accordion-features"
                    >
                      <span className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5" style={{ color: NEON_COLORS.orange }} />
                        <span className="font-semibold">Program Features & Benefits</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <ul className="space-y-3">
                        {[
                          { text: "Firearms liability included for hunting operations", highlight: true },
                          { text: "Aviation coverage for fly-in lodges", highlight: true },
                          { text: "Watercraft hull and liability coverage", highlight: true },
                          { text: "Remote wilderness evacuation coverage", highlight: true },
                          { text: "In-house binding authority for faster quotes", highlight: false },
                          { text: "Same-day broker appointments available", highlight: false },
                          { text: "Worldwide territory options", highlight: false },
                          { text: "Claims advocacy and support", highlight: false },
                        ].map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0`} style={{ backgroundColor: feature.highlight ? NEON_COLORS.orange : isDarkMode ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)' }} />
                            <span className={`text-sm ${feature.highlight ? 'font-medium' : ''}`} style={{ color: feature.highlight ? NEON_COLORS.orange : isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)' }}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* CTA Button */}
                <div className={`mt-8 pt-6 border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
                  <Button
                    size="lg"
                    className="w-full font-semibold shadow-lg transition-all duration-300"
                    style={{ backgroundColor: NEON_COLORS.amber, color: '#000', boxShadow: `0 0 20px ${NEON_COLORS.amber}40` }}
                    onClick={() => setApplicationModalOpen(true)}
                    data-testid="button-get-quote"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Get a Quote Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Right Column - Quick Facts & Contact */}
            <div className="lg:col-span-5 space-y-6">
              {/* Hero Image */}
              <Card className="relative overflow-hidden border-amber-500/30 h-56" data-testid="card-backcountry-hero-image">
                <img 
                  src={bcFishingLodgeHero} 
                  alt="Remote BC fishing lodge with floatplane" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge style={{ backgroundColor: `${NEON_COLORS.amber}20`, color: NEON_COLORS.amber, borderColor: `${NEON_COLORS.amber}40` }}>
                    <Fish className="w-3 h-3 mr-1" />
                    Remote Lodge Operations
                  </Badge>
                </div>
              </Card>

              {/* Competitive Advantage Callout */}
              <Card className={`p-6 relative overflow-hidden ${isDarkMode ? 'border-amber-500/30' : 'border-amber-200'}`} style={{ background: isDarkMode ? `linear-gradient(135deg, ${NEON_COLORS.amber}15, ${NEON_COLORS.orange}10)` : `linear-gradient(135deg, #fef3c7, #fed7aa)` }} data-testid="card-competitive-advantage">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl" style={{ backgroundColor: `${NEON_COLORS.amber}20` }} />
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-2xl" style={{ backgroundColor: `${NEON_COLORS.orange}15` }} />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: NEON_COLORS.amber, boxShadow: `0 0 30px ${NEON_COLORS.amber}40` }}>
                    <Fish className="w-7 h-7 text-black" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Backcountry Specialists</h3>
                  <p className="text-lg font-medium mb-4" style={{ color: NEON_COLORS.amber }}>
                    Fly-In Fishing & Remote Hunting
                  </p>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    We understand the unique exposures of remote operations—from bush plane transportation to bear country liability. Our programs are built for the backcountry.
                  </p>
                </div>
              </Card>

              {/* Quick Facts Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className={`p-5 ${isDarkMode ? 'bg-[#1B2A41]/50 border-white/10' : 'bg-white border-gray-200'}`} data-testid="card-quick-fact-1">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${NEON_COLORS.amber}20` }}>
                    <Clock className="w-5 h-5" style={{ color: NEON_COLORS.amber }} />
                  </div>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>24-48hr</p>
                  <p className={`text-sm ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>Quote Turnaround</p>
                </Card>
                <Card className={`p-5 ${isDarkMode ? 'bg-[#1B2A41]/50 border-white/10' : 'bg-white border-gray-200'}`} data-testid="card-quick-fact-2">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${NEON_COLORS.emerald}20` }}>
                    <Globe className="w-5 h-5" style={{ color: NEON_COLORS.emerald }} />
                  </div>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Worldwide</p>
                  <p className={`text-sm ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>Territory Options</p>
                </Card>
                <Card className={`p-5 ${isDarkMode ? 'bg-[#1B2A41]/50 border-white/10' : 'bg-white border-gray-200'}`} data-testid="card-quick-fact-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${NEON_COLORS.orange}20` }}>
                    <Shield className="w-5 h-5" style={{ color: NEON_COLORS.orange }} />
                  </div>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>A+ Rated</p>
                  <p className={`text-sm ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>Carrier Partners</p>
                </Card>
                <Card className={`p-5 ${isDarkMode ? 'bg-[#1B2A41]/50 border-white/10' : 'bg-white border-gray-200'}`} data-testid="card-quick-fact-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${NEON_COLORS.amber}20` }}>
                    <Award className="w-5 h-5" style={{ color: NEON_COLORS.amber }} />
                  </div>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Same Day</p>
                  <p className={`text-sm ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>Appointments</p>
                </Card>
              </div>

              {/* Contact Card */}
              <Card className={`p-5 ${isDarkMode ? 'bg-[#1B2A41]/50 border-white/10' : 'bg-white border-gray-200'}`} data-testid="card-contact-info">
                <h4 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <Mail className="w-4 h-4" style={{ color: NEON_COLORS.amber }} />
                  Need More Information?
                </h4>
                <p className={`text-sm mb-3 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                  Reach out to our adventure sports team for program details and custom quotes.
                </p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:support@matterhornprotects.com" className="text-sm hover:opacity-80 transition-colors flex items-center gap-2" style={{ color: NEON_COLORS.amber }}>
                    <Mail className="w-3 h-3" />
                    support@matterhornprotects.com
                  </a>
                  <a href="tel:1-844-600-0611" className="text-sm hover:opacity-80 transition-colors flex items-center gap-2" style={{ color: NEON_COLORS.emerald }}>
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
        className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-[#0D1B2A]' : 'bg-gray-50'}`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[120px] animate-pulse bg-amber-500/10" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-[100px] animate-pulse bg-emerald-500/8" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header with Micro Font */}
          <div className={`text-center mb-16 ${getAnimationClass("case-studies")}`}>
            <p className="text-[8px] md:text-[9px] uppercase tracking-[0.35em] font-medium mb-3" style={{ color: NEON_COLORS.amber }}>
              Broker Success Stories
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Adventure{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-emerald-500">
                Case Studies
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Real-world examples of how we've helped adventure operators and their brokers solve complex coverage challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Left Column - Case Study Selector with Accordions */}
            <div className="lg:col-span-5 space-y-4">
              <Card className="p-6 bg-slate-900/60 border-amber-500/20 backdrop-blur-sm relative overflow-hidden">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-400 to-emerald-500" />
                
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center" style={{ boxShadow: '0 0 20px rgba(245, 158, 11, 0.2)' }}>
                    <TrendingUp className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.3em] text-amber-400/70 font-medium">Select a Story</p>
                    <h3 className="text-lg font-bold text-white">Case Studies</h3>
                  </div>
                </div>

                <Accordion type="single" value={`case-${activeCaseStudy}`} onValueChange={(val) => setActiveCaseStudy(parseInt(val.replace('case-', '')) || 0)} className="space-y-2">
                  {caseStudies.map((study, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`case-${index}`} 
                      className="border-white/10 rounded-lg overflow-hidden"
                    >
                      <AccordionTrigger 
                        className={`text-sm text-white hover:text-amber-400 py-3 px-4 transition-colors rounded-lg ${
                          activeCaseStudy === index 
                            ? 'bg-amber-500/20 text-amber-300' 
                            : 'bg-white/5 hover:bg-white/10'
                        }`}
                        data-testid={`accordion-case-study-${index}`}
                      >
                        <span className="flex items-center gap-3 text-left">
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${activeCaseStudy === index ? 'bg-amber-400' : 'bg-slate-500'}`} />
                          <div>
                            <span className="font-semibold block">{study.category}</span>
                            <span className="text-[10px] uppercase tracking-wider text-slate-400">{study.location}</span>
                          </div>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-3 pb-2 px-4">
                        <p className="text-[11px] text-slate-400 mb-3">{study.title}</p>
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(study.results).map(([key, value], i) => (
                            <Badge 
                              key={i}
                              className="text-[9px] px-2 py-0.5"
                              style={{ backgroundColor: `${NEON_COLORS.amber}15`, color: NEON_COLORS.amber, borderColor: `${NEON_COLORS.amber}30` }}
                            >
                              {value}
                            </Badge>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>

              {/* Quick Stats Card */}
              <Card className="p-5 bg-slate-800/50 border-slate-700">
                <p className="text-[8px] uppercase tracking-[0.3em] text-emerald-400/70 font-medium mb-3">Program Metrics</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <p className="text-xl font-bold text-amber-400">$650K+</p>
                    <p className="text-[9px] uppercase tracking-wider text-slate-400">Total Premium</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-emerald-400">20+</p>
                    <p className="text-[9px] uppercase tracking-wider text-slate-400">Locations</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-cyan-400">2,500+</p>
                    <p className="text-[9px] uppercase tracking-wider text-slate-400">Guests Covered</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Active Case Study Display */}
            <div className="lg:col-span-7">
              <Card className="overflow-hidden bg-slate-900/60 border-amber-500/20 h-full">
                {/* Case Study Image */}
                <div className="relative h-56 lg:h-64">
                  <img 
                    src={caseStudies[activeCaseStudy].image} 
                    alt={caseStudies[activeCaseStudy].title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge style={{ backgroundColor: `${NEON_COLORS.amber}20`, color: NEON_COLORS.amber, borderColor: `${NEON_COLORS.amber}40` }}>
                      {caseStudies[activeCaseStudy].category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span className="text-[10px] uppercase tracking-wider text-slate-400">
                      {caseStudies[activeCaseStudy].location}
                    </span>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                    {caseStudies[activeCaseStudy].title}
                  </h3>

                  {/* Challenge & Solution Accordion */}
                  <Accordion type="multiple" defaultValue={["challenge", "solution"]} className="space-y-2 mb-6">
                    <AccordionItem value="challenge" className="border-white/10 rounded-lg overflow-hidden">
                      <AccordionTrigger className="text-sm text-white hover:text-amber-400 py-3 px-4 bg-white/5 hover:bg-white/10 transition-colors rounded-lg">
                        <span className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          <span className="text-[10px] uppercase tracking-wider font-semibold">Challenge</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-3 pb-2 px-4">
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {caseStudies[activeCaseStudy].challenge}
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="solution" className="border-white/10 rounded-lg overflow-hidden">
                      <AccordionTrigger className="text-sm text-white hover:text-emerald-400 py-3 px-4 bg-white/5 hover:bg-white/10 transition-colors rounded-lg">
                        <span className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span className="text-[10px] uppercase tracking-wider font-semibold">Solution</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-3 pb-2 px-4">
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {caseStudies[activeCaseStudy].solution}
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefits" className="border-white/10 rounded-lg overflow-hidden">
                      <AccordionTrigger className="text-sm text-white hover:text-cyan-400 py-3 px-4 bg-white/5 hover:bg-white/10 transition-colors rounded-lg">
                        <span className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                          <span className="text-[10px] uppercase tracking-wider font-semibold">Broker Benefits</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-3 pb-2 px-4">
                        <div className="space-y-2">
                          {caseStudies[activeCaseStudy].brokerBenefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Results Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(caseStudies[activeCaseStudy].results).map(([key, value], i) => (
                      <div key={i} className="text-center p-3 rounded-lg bg-white/5">
                        <div className="text-lg font-bold text-amber-400">{value}</div>
                        <div className="text-[9px] uppercase tracking-wider text-slate-400">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Program - Paddle Sport Operators */}
      <section 
        id="paddle-sports" 
        data-animate 
        className="py-24 relative overflow-hidden"
        data-testid="section-paddle-program-highlights"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[120px] animate-pulse bg-cyan-500/15" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-[100px] animate-pulse bg-blue-500/10" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-[80px] animate-pulse bg-teal-500/8" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-1.5 bg-cyan-500/20 text-cyan-400 border-cyan-500/40" style={{ boxShadow: '0 0 15px rgba(6, 182, 212, 0.3)' }}>
              <Star className="w-3 h-3 mr-1" />
              Featured Program
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight" data-testid="heading-paddle-program-highlights">
              Paddle Sport{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400">
                Operators
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive coverage for whitewater outfitters, sea kayak tours, SUP rentals, and canoe liveries across all skill levels.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Left Column - Highlights & Risk Types */}
            <div className="lg:col-span-7 space-y-6">
              {/* Main Card with Accordions */}
              <Card className="p-8 bg-slate-900/60 border-cyan-500/20 backdrop-blur-sm relative overflow-hidden" data-testid="card-paddle-program-details">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-400 to-teal-500" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center" style={{ boxShadow: '0 0 25px rgba(6, 182, 212, 0.25)' }}>
                    <Waves className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Paddle Program Details</h3>
                    <p className="text-sm text-cyan-400">Up to $5M limits available</p>
                  </div>
                </div>

                <Accordion type="multiple" defaultValue={["highlights"]} className="space-y-3">
                  {/* Program Highlights Accordion */}
                  <AccordionItem value="highlights" className="border-white/10 rounded-lg overflow-hidden">
                    <AccordionTrigger className="text-base text-white hover:text-cyan-400 py-4 px-5 bg-white/5 hover:bg-white/10 transition-colors [&[data-state=open]]:bg-cyan-500/10 rounded-lg">
                      <span className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400" />
                        <span className="font-semibold">Coverage Highlights</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <ul className="space-y-3">
                        {[
                          { text: "Guide Professional Liability", highlight: true },
                          { text: "Up to $5,000,000 CGL", highlight: true },
                          { text: "Watercraft Hull Coverage", highlight: false },
                          { text: "Participant Accident Medical", highlight: false },
                          { text: "Swift Water Rescue Extension", highlight: true },
                          { text: "Equipment Floater (paddles, PFDs, gear)", highlight: false },
                          { text: "Remote Evacuation Coverage", highlight: false },
                          { text: "Trip Cancellation Protection", highlight: false },
                          { text: "Hired & Non-Owned Auto", highlight: false },
                          { text: "Coverage for Class I-V rapids", highlight: false },
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 group">
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${item.highlight ? 'bg-cyan-400' : 'bg-slate-500'}`} />
                            <span className={`text-sm ${item.highlight ? 'text-cyan-300 font-medium' : 'text-slate-300'} group-hover:text-white transition-colors`}>
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Risk Types Accordion */}
                  <AccordionItem value="risk-types" className="border-white/10 rounded-lg overflow-hidden">
                    <AccordionTrigger className="text-base text-white hover:text-cyan-400 py-4 px-5 bg-white/5 hover:bg-white/10 transition-colors [&[data-state=open]]:bg-blue-500/10 rounded-lg">
                      <span className="flex items-center gap-3">
                        <Target className="w-5 h-5 text-blue-400" />
                        <span className="font-semibold">Operations We Cover</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "Whitewater Rafting Outfitters",
                          "Sea Kayak Tour Operators",
                          "SUP Rental Operations",
                          "Canoe Liveries",
                          "Kayak Fishing Guides",
                          "Multi-Day Float Trips",
                          "Paddleboard Yoga Classes",
                          "River Guide Services",
                          "Kayak Instruction Schools",
                          "Corporate Team Building",
                        ].map((risk, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors group">
                            <ArrowRight className="w-3 h-3 text-blue-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
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
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
                    onClick={() => setApplicationModalOpen(true)}
                    data-testid="button-start-paddle-application"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Request Appointment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </Card>

              {/* Paddling Travel Program Card */}
              <Card className="p-6 bg-[#0D1B2A] border-blue-500/40 relative overflow-hidden group hover:border-blue-400/50 transition-all duration-500" data-testid="card-paddle-travel-program">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-teal-900/20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/15 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform" style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}>
                      <Plane className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Paddling Travel Program</h3>
                      <p className="text-blue-400 text-sm font-medium">International & Domestic Coverage</p>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    Specialized travel insurance for paddle sport expeditions including kayak touring trips, international whitewater destinations, and multi-day river adventures with emergency evacuation coverage.
                  </p>
                  <Button
                    variant="outline"
                    className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                    onClick={() => setApplicationModalOpen(true)}
                    data-testid="button-paddle-travel-contact"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact for Details
                  </Button>
                </div>
              </Card>
            </div>

            {/* Right Column - Image & Quick Facts */}
            <div className="lg:col-span-5 space-y-6">
              {/* Hero Image */}
              <Card className="relative overflow-hidden border-cyan-500/30 h-64" data-testid="card-paddle-hero-image">
                <img 
                  src={whitewaterGuidedTourImg} 
                  alt="Guided whitewater rafting tour" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/40">
                    <Camera className="w-3 h-3 mr-1" />
                    Rapid Media Film Festival Partner
                  </Badge>
                </div>
              </Card>

              {/* Quick Facts Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-5 bg-slate-800/50 border-slate-700 hover:border-cyan-500/40 transition-all group" data-testid="card-paddle-quick-fact-1">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 text-cyan-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">24-48hr</p>
                  <p className="text-slate-400 text-sm">Quote Turnaround</p>
                </Card>
                <Card className="p-5 bg-slate-800/50 border-slate-700 hover:border-blue-500/40 transition-all group" data-testid="card-paddle-quick-fact-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Globe className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">50 States</p>
                  <p className="text-slate-400 text-sm">National Coverage</p>
                </Card>
                <Card className="p-5 bg-slate-800/50 border-slate-700 hover:border-teal-500/40 transition-all group" data-testid="card-paddle-quick-fact-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Shield className="w-5 h-5 text-teal-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">A-Rated</p>
                  <p className="text-slate-400 text-sm">Carrier Partners</p>
                </Card>
                <Card className="p-5 bg-slate-800/50 border-slate-700 hover:border-cyan-500/40 transition-all group" data-testid="card-paddle-quick-fact-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5 text-cyan-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">Class I-V</p>
                  <p className="text-slate-400 text-sm">Rapids Covered</p>
                </Card>
              </div>

              {/* Contact Card */}
              <Card className="p-5 bg-slate-800/50 border-slate-700" data-testid="card-paddle-contact-info">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  Need More Information?
                </h4>
                <p className="text-slate-400 text-sm mb-3">
                  Reach out to our paddle sports specialists for program details.
                </p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:support@matterhornprotects.com" className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    support@matterhornprotects.com
                  </a>
                  <a href="tel:1-844-600-0611" className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    1-844-600-0611
                  </a>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </section>

      {/* Adventure Travel Programs Section */}
      <section 
        id="adventure-travel" 
        data-animate 
        className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-b from-[#0D1B2A] to-[#0A1628]' : 'bg-gradient-to-b from-gray-50 to-white'}`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[150px] animate-pulse bg-sky-500/10" />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full blur-[120px] animate-pulse bg-orange-500/8" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className={`text-center mb-16 ${getAnimationClass("adventure-travel")}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[1px]" style={{ background: `linear-gradient(to right, transparent, #0ea5e9)` }} />
              <Badge className="text-[10px] uppercase tracking-widest px-4 bg-sky-500/20 text-sky-400 border-sky-500/40">
                <Plane className="w-3 h-3 mr-1" />
                Travel Programs
              </Badge>
              <div className="w-12 h-[1px]" style={{ background: `linear-gradient(to left, transparent, #0ea5e9)` }} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Adventure{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-orange-400">
                Travel Programs
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Embedded travel protection solutions for tour operators, booking platforms, and adventure travel companies.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Left Column - Program Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <Card className="p-8 bg-slate-900/60 border-sky-500/20 backdrop-blur-sm relative overflow-hidden" data-testid="card-adventure-travel-details">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-cyan-400 to-orange-400" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-sky-500/20 flex items-center justify-center" style={{ boxShadow: '0 0 25px rgba(14, 165, 233, 0.25)' }}>
                    <Globe className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.3em] text-sky-400/70 font-medium">Embedded Solutions</p>
                    <h3 className="text-xl font-bold text-white">Adventure Travel Coverage</h3>
                  </div>
                </div>

                <Accordion type="multiple" defaultValue={["highlights"]} className="space-y-3">
                  {/* Program Highlights Accordion */}
                  <AccordionItem value="highlights" className="border-white/10 rounded-lg overflow-hidden">
                    <AccordionTrigger className="text-base text-white hover:text-sky-400 py-4 px-5 bg-white/5 hover:bg-white/10 transition-colors rounded-lg" data-testid="accordion-travel-highlights">
                      <span className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-sky-400" />
                        <span className="font-semibold">Program Highlights</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          { icon: Shield, title: "Trip Cancellation & Interruption", desc: "Cancel for any reason (CFAR) and covered reasons protection" },
                          { icon: Heart, title: "Emergency Medical Coverage", desc: "Up to $500K medical evacuation and repatriation" },
                          { icon: Compass, title: "Adventure Activity Coverage", desc: "Hazardous sports endorsements for high-risk activities" },
                          { icon: Plane, title: "Travel Delay Protection", desc: "Missed connections, delays, and itinerary changes" },
                          { icon: Package, title: "Baggage & Equipment", desc: "Specialized gear and equipment protection for adventurers" },
                          { icon: Clock, title: "24/7 Assistance Services", desc: "Global support and emergency coordination" },
                        ].map((item, idx) => {
                          const IconComponent = item.icon;
                          return (
                            <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                              <div className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 bg-sky-500/20">
                                <IconComponent className="w-4 h-4 text-sky-400" />
                              </div>
                              <div className="flex-1">
                                <span className="text-sm font-semibold text-white block">{item.title}</span>
                                <p className="text-xs text-slate-400">{item.desc}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Who We Build Programs For */}
                  <AccordionItem value="clients" className="border-white/10 rounded-lg overflow-hidden">
                    <AccordionTrigger className="text-base text-white hover:text-cyan-400 py-4 px-5 bg-white/5 hover:bg-white/10 transition-colors rounded-lg" data-testid="accordion-travel-clients">
                      <span className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-cyan-400" />
                        <span className="font-semibold">Who We Build Programs For</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "Adventure Tour Operators",
                          "Expedition Companies",
                          "Eco-Tourism Outfitters",
                          "Specialty Travel Agencies",
                          "Group Travel Organizers",
                          "Cruise & Yacht Charters",
                          "Wellness Retreat Centers",
                          "Photography Tour Leaders",
                          "Cycling & Hiking Tours",
                          "Scuba & Diving Operations",
                        ].map((client, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors group">
                            <ArrowRight className="w-3 h-3 text-cyan-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                            <span>{client}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Platform Integration */}
                  <AccordionItem value="integration" className="border-white/10 rounded-lg overflow-hidden">
                    <AccordionTrigger className="text-base text-white hover:text-orange-400 py-4 px-5 bg-white/5 hover:bg-white/10 transition-colors rounded-lg" data-testid="accordion-travel-integration">
                      <span className="flex items-center gap-3">
                        <Layers className="w-5 h-5 text-orange-400" />
                        <span className="font-semibold">Booking Platform Integration</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <div className="space-y-4">
                        <p className="text-sm text-slate-300 leading-relaxed">
                          We design custom travel protection programs that integrate directly into your booking flow—whether you're using a custom platform, third-party reservation system, or managing annual trip schedules.
                        </p>
                        <div className="grid grid-cols-1 gap-3">
                          {[
                            { icon: Globe, title: "API Integration", desc: "Seamless embedding into your booking platform checkout" },
                            { icon: Calendar, title: "Annual Schedule Programs", desc: "Blanket coverage for recurring trips and seasonal schedules" },
                            { icon: FileText, title: "White-Label Solutions", desc: "Branded insurance products under your company identity" },
                            { icon: Zap, title: "Real-Time Quotes", desc: "Instant pricing based on trip details and participant count" },
                          ].map((feature, idx) => {
                            const IconComponent = feature.icon;
                            return (
                              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                                <div className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 bg-orange-500/20">
                                  <IconComponent className="w-4 h-4 text-orange-400" />
                                </div>
                                <div className="flex-1">
                                  <span className="text-sm font-semibold text-white block">{feature.title}</span>
                                  <p className="text-xs text-slate-400">{feature.desc}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all duration-300"
                    onClick={() => setApplicationModalOpen(true)}
                    data-testid="button-adventure-travel-apply"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Discuss Your Program
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Right Column - Benefits & Stats */}
            <div className="lg:col-span-5 space-y-6">
              {/* Annual Programs Card */}
              <Card className="p-6 bg-slate-900/90 border-amber-500/40 relative overflow-hidden" data-testid="card-annual-programs">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center mb-4" style={{ boxShadow: '0 0 30px rgba(245, 158, 11, 0.4)' }}>
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Annual Schedule Programs</h3>
                  <p className="text-amber-400 text-lg font-medium mb-4">Blanket Coverage for Tour Operators</p>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">
                    Perfect for operators with recurring trips. One policy covers your entire season—no per-trip administration required.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Cover unlimited departures per season",
                      "Simplified participant enrollment",
                      "Predictable annual premium",
                      "Custom coverage tiers available",
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                        <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-5 bg-slate-800/50 border-slate-700 hover:border-sky-500/40 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center mb-3">
                    <Globe className="w-5 h-5 text-sky-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">180+</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">Countries Covered</p>
                </Card>
                <Card className="p-5 bg-slate-800/50 border-slate-700 hover:border-cyan-500/40 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-3">
                    <Shield className="w-5 h-5 text-cyan-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">$500K</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">Medical Evac Limit</p>
                </Card>
                <Card className="p-5 bg-slate-800/50 border-slate-700 hover:border-orange-500/40 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5 text-orange-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">API</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">Integration Ready</p>
                </Card>
                <Card className="p-5 bg-slate-800/50 border-slate-700 hover:border-sky-500/40 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center mb-3">
                    <Award className="w-5 h-5 text-sky-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">White</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">Label Options</p>
                </Card>
              </div>

              {/* Contact Card */}
              <Card className="p-5 bg-slate-800/50 border-slate-700">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-400" />
                  Travel Programs Team
                </h4>
                <p className="text-slate-400 text-sm mb-3">
                  Ready to discuss custom travel protection for your operation?
                </p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:support@matterhornprotects.com" className="text-sky-400 text-sm hover:text-sky-300 transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    support@matterhornprotects.com
                  </a>
                  <a href="tel:1-844-600-0611" className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    1-844-600-0611
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <BrokerApplicationModal 
        open={applicationModalOpen}
        onOpenChange={setApplicationModalOpen}
      />
    </div>
  );
}
