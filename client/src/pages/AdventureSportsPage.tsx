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
} from "lucide-react";
import { BrokerApplicationModal } from "@/components/BrokerApplicationModal";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import adventureHero from "@/assets/images/adventure-hiking-hero.jpg";
import kayakingImg from "@/assets/images/kayaking-rapids.jpg";
import rockClimbingImg from "@/assets/images/rock-climbing.jpg";
import flyFishingImg from "@/assets/images/fly-fishing.jpg";
import scubaDivingImg from "@/assets/images/scuba-diving.jpg";
import skydivingImg from "@/assets/images/skydiving.jpg";
import bcFishingTripImg from "@/assets/images/bc-fishing-trip.png";
import mountainHuntingImg from "@/assets/images/mountain-hunting-trip.png";
import seaKayakingImg from "@/assets/images/sea-kayaking.png";
import bushplaneLandingImg from "@/assets/images/bushplane-landing.png";
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
      activities: ["Whitewater Rafting", "Sea Kayaking", "SUP Tours", "Surf Schools", "Scuba Operations"],
    },
    {
      title: "Backcountry Fishing",
      description: "Fly-in lodges, remote fishing camps, guided river trips, and backcountry fishing operations.",
      icon: Fish,
      activities: ["Fly-In Lodges", "River Guides", "Backcountry Camps", "Saltwater Charters", "Ice Fishing"],
    },
    {
      title: "Aerial Adventures",
      description: "Zip line operations, paragliding instruction, skydiving centers, and aerial adventure parks.",
      icon: Wind,
      activities: ["Zip Line Tours", "Paragliding", "Hang Gliding", "Skydiving", "Canopy Tours"],
    },
    {
      title: "Hunting Outfitters",
      description: "Big game hunting guides, waterfowl operations, upland bird hunts, and remote hunting camps.",
      icon: Crosshair,
      activities: ["Big Game Guides", "Waterfowl Hunts", "Upland Birds", "Remote Camps", "Trophy Hunts"],
    },
    {
      title: "Eco-Tourism & Wildlife",
      description: "Wildlife viewing tours, eco-lodges, bird watching expeditions, and nature photography trips.",
      icon: TreePine,
      activities: ["Safari Tours", "Bird Watching", "Photo Tours", "Eco-Lodges", "Nature Walks"],
    },
    {
      title: "Motorized Adventures",
      description: "ATV tours, snowmobile operations, jet ski rentals, and off-road adventure experiences.",
      icon: Navigation,
      activities: ["ATV Tours", "Snowmobile Tours", "Jet Ski Rentals", "Dune Buggies", "4x4 Adventures"],
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
      title: "Multi-State Whitewater Rafting Company",
      category: "Water Sports",
      location: "Colorado / Utah / Idaho",
      challenge: "A premier rafting operation running trips across three western states faced fragmented coverage with different carriers per location, inconsistent limits, and gaps in guide professional liability.",
      solution: "We consolidated all operations under a single master program with unified $5M limits, enhanced guide E&O, and added remote evacuation coverage for their most challenging river runs.",
      results: { premium: "$185K", guides: "45+", locations: "12 Put-ins" },
      image: kayakingImg,
      brokerBenefits: [
        "Single carrier relationship across states",
        "Streamlined renewal process",
        "Priority underwriting on consolidated placement",
      ],
    },
    {
      title: "Big Game Hunting Outfitter Network",
      category: "Hunting Outfitters",
      location: "Montana / Wyoming / Colorado",
      challenge: "A network of three big game hunting outfitters with backcountry camps, horse pack strings, and guided hunts across three western states needed unified coverage with firearms liability and remote evacuation.",
      solution: "Designed a master program with unified $5M limits across all operations, firearms liability, livestock coverage for pack horses, and remote wilderness evacuation endorsements.",
      results: { premium: "$145K", camps: "8", hunters: "400+" },
      image: rockClimbingImg,
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
      image: flyFishingImg,
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
          style={{ backgroundImage: `url(${adventureHero})` }}
        >
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-[#0A1628]/90 via-[#0A1628]/80 to-[#1B2A41]/85' : 'bg-gradient-to-br from-white/80 via-white/70 to-gray-100/85'}`} />
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-t from-[#0A1628] via-transparent to-transparent' : 'bg-gradient-to-t from-white via-transparent to-transparent'}`} />
        </div>
        
        {/* Neon accent glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.amber}15` }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.emerald}10`, animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full blur-[80px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.cyan}15`, animationDelay: '2s' }} />
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
                  <a href="mailto:adventure@matterhornprotects.com" className="text-sm hover:opacity-80 transition-colors flex items-center gap-2" style={{ color: NEON_COLORS.amber }}>
                    <Mail className="w-3 h-3" />
                    adventure@matterhornprotects.com
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

      {/* Adventure Travel Programs Section */}
      <section 
        id="travel" 
        data-animate 
        className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-[#0D1B2A]' : 'bg-gray-50'}`}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-12 ${getAnimationClass("travel")}`}>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-medium mb-2" style={{ color: NEON_COLORS.emerald }}>
              Adventure Travel Programs
            </p>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Coverage for Every{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                Adventure
              </span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
              Specialized programs tailored to the unique risks of each adventure sector, from water sports to aerial adventures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adventureTravelPrograms.map((program, index) => (
              <Card 
                key={index}
                className={`p-6 group transition-all duration-500 ${
                  isDarkMode 
                    ? 'bg-[#1B2A41]/50 border-white/10 hover:border-emerald-500/40' 
                    : 'bg-white border-gray-200 hover:border-emerald-500/40'
                }`}
                style={{
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${NEON_COLORS.emerald}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${NEON_COLORS.emerald}20` }}>
                  <program.icon className="w-6 h-6" style={{ color: NEON_COLORS.emerald }} />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{program.title}</h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>{program.description}</p>
                <div className="flex flex-wrap gap-2">
                  {program.activities.slice(0, 3).map((activity, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className={`text-[10px] ${isDarkMode ? 'border-white/20 text-white/70' : 'border-gray-300 text-gray-600'}`}
                    >
                      {activity}
                    </Badge>
                  ))}
                  {program.activities.length > 3 && (
                    <Badge variant="outline" className={`text-[10px] ${isDarkMode ? 'border-emerald-500/30 text-emerald-400' : 'border-emerald-500/30 text-emerald-600'}`}>
                      +{program.activities.length - 3} more
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Program - Paddle Sport Operators */}
      <section 
        id="paddle-sports" 
        data-animate 
        className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-b from-[#0D1B2A] to-[#0A1628]' : 'bg-gradient-to-b from-gray-50 to-white'}`}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-[150px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.cyan}08` }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-12 ${getAnimationClass("paddle-sports")}`}>
            <Badge className="mb-4 px-4 py-1.5" style={{ backgroundColor: `${NEON_COLORS.cyan}20`, color: NEON_COLORS.cyan, borderColor: `${NEON_COLORS.cyan}40` }}>
              <Star className="w-3 h-3 mr-2" />
              Featured Program
            </Badge>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Paddle Sport{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                Operators
              </span>
            </h2>
          </div>

          <Card className={`relative overflow-hidden ${isDarkMode ? 'bg-[#1B2A41]/60 border-cyan-500/30' : 'bg-white border-cyan-200'}`}>
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={kayakingImg} 
                  alt="Paddle Sports" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-transparent to-[#1B2A41]' : 'bg-gradient-to-r from-transparent to-white'} lg:block hidden`} />
                <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-t from-[#1B2A41] to-transparent' : 'bg-gradient-to-t from-white to-transparent'} lg:hidden`} />
              </div>
              
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <Waves className="w-8 h-8 text-cyan-500" />
                  <div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Comprehensive Paddle Coverage</h3>
                    <p className="text-cyan-500 font-medium">Rafting • Kayaking • SUP • Canoeing</p>
                  </div>
                </div>

                <p className={`mb-6 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Our paddle sport program provides specialized coverage for whitewater outfitters, sea kayak tours, SUP rental operations, and canoe liveries. From calm flatwater to Class V rapids, we understand the unique exposures of water-based adventures.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {["Guide Professional Liability", "Watercraft Hull Coverage", "Participant Accident Medical", "Swift Water Rescue Extension", "Equipment Floater", "Remote Evacuation"].map((item, i) => (
                    <div key={i} className={`flex items-center gap-2 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                      <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Rapid Media Film Festival Partnership */}
                <Card className={`p-4 mb-6 ${isDarkMode ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-cyan-50 border-cyan-200'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Camera className="w-5 h-5 text-cyan-500" />
                    <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Official Partner: Rapid Media Film Festival</span>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                    Matterhorn is proud to partner with the International Rapid Media Film Festival, celebrating the art and adventure of paddle sports. As the official insurance partner, we support the global paddling community and help protect the operators who make these adventures possible.
                  </p>
                </Card>

                <Button
                  size="lg"
                  onClick={() => setApplicationModalOpen(true)}
                  className="bg-cyan-500 text-black font-bold"
                  data-testid="button-paddle-quote"
                >
                  Get Paddle Sports Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Expeditions & Hunting Section */}
      <section 
        id="expeditions" 
        data-animate 
        className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-[#0A1628]' : 'bg-white'}`}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-12 ${getAnimationClass("expeditions")}`}>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-medium mb-2" style={{ color: NEON_COLORS.orange }}>
              Specialty Programs
            </p>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Expeditions &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                Hunting
              </span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
              Specialized coverage for hunting outfitters, fishing guides, and expedition operators serving adventurous travelers worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {expeditionsCoverage.map((item, index) => (
              <Card 
                key={index}
                className={`p-6 group transition-all duration-500 ${
                  isDarkMode 
                    ? 'bg-[#1B2A41]/50 border-white/10 hover:border-orange-500/40' 
                    : 'bg-white border-gray-200 hover:border-orange-500/40'
                }`}
                style={{ boxShadow: 'none' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${NEON_COLORS.orange}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${NEON_COLORS.orange}20` }}>
                    <item.icon className="w-6 h-6" style={{ color: NEON_COLORS.orange }} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                    <p className={`text-sm mb-4 ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, i) => (
                        <Badge 
                          key={i}
                          className="text-[10px]"
                          style={{ backgroundColor: `${NEON_COLORS.orange}20`, color: NEON_COLORS.orange, borderColor: `${NEON_COLORS.orange}30` }}
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Expedition Travel Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: bcFishingTripImg, label: "Remote Fishing - BC" },
              { img: mountainHuntingImg, label: "Mountain Hunting" },
              { img: seaKayakingImg, label: "Sea Kayaking" },
              { img: bushplaneLandingImg, label: "Bushplane Access" },
            ].map((item, i) => (
              <div key={i} className="relative h-40 rounded-xl overflow-hidden group">
                <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover" />
                <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-t from-[#0A1628] via-transparent to-transparent' : 'bg-gradient-to-t from-black/50 via-transparent to-transparent'}`} />
                <div className="absolute bottom-3 left-3">
                  <span className="text-white text-sm font-medium">{item.label}</span>
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
        className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-[#0D1B2A]' : 'bg-gray-50'}`}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-12 ${getAnimationClass("case-studies")}`}>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-medium mb-2" style={{ color: NEON_COLORS.amber }}>
              Success Stories
            </p>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Adventure{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-emerald-500">
                Case Studies
              </span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
              Real-world examples of how we've helped adventure operators and their brokers solve complex coverage challenges.
            </p>
          </div>

          {/* Case Study Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {caseStudies.map((study, index) => (
              <button
                key={index}
                onClick={() => setActiveCaseStudy(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCaseStudy === index
                    ? 'bg-amber-500 text-black'
                    : isDarkMode
                    ? 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
                data-testid={`tab-case-study-${index}`}
              >
                {study.category}
              </button>
            ))}
          </div>

          {/* Active Case Study */}
          <Card className={`overflow-hidden ${isDarkMode ? 'bg-[#1B2A41]/50 border-amber-500/20' : 'bg-white border-amber-200'}`}>
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <img 
                  src={caseStudies[activeCaseStudy].image} 
                  alt={caseStudies[activeCaseStudy].title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-transparent to-[#1B2A41]' : 'bg-gradient-to-r from-transparent to-white'} lg:block hidden`} />
              </div>
              
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <Badge style={{ backgroundColor: `${NEON_COLORS.amber}20`, color: NEON_COLORS.amber, borderColor: `${NEON_COLORS.amber}40` }}>
                    {caseStudies[activeCaseStudy].category}
                  </Badge>
                  <span className={`text-sm ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                    <MapPin className="w-3 h-3 inline mr-1" />
                    {caseStudies[activeCaseStudy].location}
                  </span>
                </div>

                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {caseStudies[activeCaseStudy].title}
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-amber-500 font-semibold text-sm mb-1">Challenge</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                      {caseStudies[activeCaseStudy].challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-emerald-500 font-semibold text-sm mb-1">Solution</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                      {caseStudies[activeCaseStudy].solution}
                    </p>
                  </div>
                </div>

                {/* Results Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(caseStudies[activeCaseStudy].results).map(([key, value], i) => (
                    <div key={i} className={`text-center p-3 rounded-lg ${isDarkMode ? 'bg-white/5' : 'bg-gray-100'}`}>
                      <div className="text-lg font-bold text-amber-500">{value}</div>
                      <div className={`text-[10px] uppercase tracking-wider ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Broker Benefits */}
                <div>
                  <h4 className={`font-semibold text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Broker Benefits</h4>
                  <div className="space-y-2">
                    {caseStudies[activeCaseStudy].brokerBenefits.map((benefit, i) => (
                      <div key={i} className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Leadership Section */}
      <section 
        id="leadership" 
        data-animate 
        className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-[#0A1628]' : 'bg-white'}`}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-12 ${getAnimationClass("leadership")}`}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Leadership
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card 
                key={index}
                className={`p-6 text-center transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-[#1B2A41]/50 border-white/10 hover:border-amber-500/30' 
                    : 'bg-white border-gray-200 hover:border-amber-500/30'
                }`}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-amber-500/30">
                  <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{leader.name}</h3>
                <p className="text-amber-500 text-sm font-medium mb-3">{leader.title}</p>
                <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>{leader.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-b from-[#0A1628] to-[#0D1B2A]' : 'bg-gradient-to-b from-white to-gray-50'}`}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px]" style={{ backgroundColor: `${NEON_COLORS.amber}08` }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Ready to Protect Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-emerald-500">
              Adventure Operation?
            </span>
          </h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
            Connect with our adventure sports specialists to discuss your coverage needs. 
            We'll design a program that protects your business while supporting your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setApplicationModalOpen(true)}
              className="bg-amber-500 text-black font-bold"
              data-testid="button-cta-apply"
            >
              Request Appointment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={`${isDarkMode ? 'border-white/30 text-white hover:bg-white/10' : 'border-gray-300 text-gray-900 hover:bg-gray-100'}`}
              data-testid="button-cta-contact"
            >
              <Phone className="mr-2 w-5 h-5" />
              1-844-600-0611
            </Button>
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
