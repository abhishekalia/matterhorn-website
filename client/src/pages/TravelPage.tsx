import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Shield,
  Clock,
  Zap,
  HeadphonesIcon,
  ArrowRight,
  Phone,
  Mail,
  Mountain,
  Moon,
  Sun,
  Plane,
  Calendar,
  DollarSign,
  Users,
  Building2,
  CheckCircle,
  Globe,
  Code,
  Briefcase,
  Star,
  Award,
  FileText,
  MessageSquare,
  ChevronRight,
  Quote,
  Luggage,
  Heart,
  AlertCircle,
  MapPin,
  Target,
  ChevronDown,
} from "lucide-react";
import { BrokerApplicationModal } from "@/components/BrokerApplicationModal";
import CustomCursor from "@/components/CustomCursor";

// Neon color palette for Travel
const NEON_COLORS = {
  skyBlue: '#00d4ff',
  sunset: '#ff8c00',
  magenta: '#ff00ff',
  gold: '#ffd700',
};

export default function TravelPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whyChooseUs = [
    {
      icon: Shield,
      badge: "Ultimate Flexibility",
      title: "Cancel For Any Reason",
      description: "Offer your clients up to 100% trip cost reimbursement for any cancellation reason—a key differentiator for your agency.",
    },
    {
      icon: DollarSign,
      badge: "Competitive Commission",
      title: "15% Commission",
      description: "Earn industry-leading commissions on every travel policy sold. Quick payouts and transparent reporting.",
    },
    {
      icon: Globe,
      badge: "Full Trip Coverage",
      title: "Comprehensive Protection",
      description: "Medical emergencies, trip delays, baggage loss, evacuations—complete coverage solutions for your clients.",
    },
    {
      icon: HeadphonesIcon,
      badge: "Broker Support",
      title: "Dedicated Team",
      description: "Priority access to our underwriting team. Get fast answers and custom solutions for complex travel risks.",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Submit Your Risk",
      description: "Send us your client's travel details. We'll review and provide competitive coverage options quickly.",
    },
    {
      step: "02",
      title: "Choose Coverage",
      description: "Select from Essential, Enhanced, or Premium protection. Customize with add-ons to fit your client's needs.",
    },
    {
      step: "03",
      title: "Bind & Earn",
      description: "Receive policy documents within 24-48 hours. Commission paid promptly on every bound policy.",
    },
  ];

  const coverageTabs = [
    {
      id: "cancellation",
      label: "Trip Cancellation & Interruption",
      content: [
        {
          title: "Cancel For Any Reason",
          items: [
            "Up to 100% reimbursement available",
            "Must cancel 48+ hours before departure",
          ],
        },
        {
          title: "Trip Interruption",
          items: [
            "Return home early for any covered reason",
            "Up to 150% of trip cost",
          ],
        },
        {
          title: "Trip Delay",
          items: [
            "$100-200 per day for delays 12+ hours",
            "Covers meals, accommodation, alternate transport",
          ],
        },
        {
          title: "Missed Connection",
          items: [
            "Up to $1,000 for connections missed due to delay",
          ],
        },
      ],
    },
    {
      id: "medical",
      label: "Medical & Evacuation",
      content: [
        {
          title: "Emergency Medical",
          items: [
            "Up to $100,000 coverage for medical emergencies abroad",
            "Includes hospitalization, surgery, and prescriptions",
          ],
        },
        {
          title: "Medical Evacuation",
          items: [
            "Up to $500,000 for emergency medical evacuation",
            "Transport to nearest adequate medical facility",
          ],
        },
        {
          title: "Repatriation",
          items: [
            "Coverage for return of remains if needed",
            "Family travel assistance included",
          ],
        },
      ],
    },
    {
      id: "baggage",
      label: "Baggage & Delays",
      content: [
        {
          title: "Baggage Loss",
          items: [
            "Up to $2,500 for lost, stolen, or damaged baggage",
            "Per-item limits apply to valuables",
          ],
        },
        {
          title: "Baggage Delay",
          items: [
            "Up to $500 for essential items during delay",
            "Covers toiletries, clothing, and necessities",
          ],
        },
        {
          title: "Personal Effects",
          items: [
            "Coverage for electronics, jewelry, and documents",
            "Includes rental equipment protection",
          ],
        },
      ],
    },
    {
      id: "assistance",
      label: "24/7 Assistance",
      content: [
        {
          title: "Travel Assistance",
          items: [
            "24/7 emergency hotline worldwide",
            "Multilingual support staff",
          ],
        },
        {
          title: "Concierge Services",
          items: [
            "Restaurant and event reservations",
            "Travel arrangement assistance",
          ],
        },
        {
          title: "Emergency Services",
          items: [
            "Legal referrals and bail assistance",
            "Emergency cash transfer coordination",
          ],
        },
      ],
    },
  ];

  const enterpriseFeatures = [
    {
      icon: DollarSign,
      title: "VOLUME DISCOUNTS",
      description: "Save up to 30% on group policies for 10+ employees or members",
    },
    {
      icon: Users,
      title: "DEDICATED ACCOUNT MANAGER",
      description: "White-glove service with a dedicated insurance specialist",
    },
    {
      icon: FileText,
      title: "FLEXIBLE PAYMENT TERMS",
      description: "Quarterly or annual billing options with net-30 terms",
    },
    {
      icon: Zap,
      title: "STREAMLINED ADMINISTRATION",
      description: "Easy enrollment portal and automated certificate generation",
    },
  ];

  const platformIntegrations = [
    "Travel Booking Platforms",
    "Corporate Travel Management",
    "Tour Operators & DMCs",
    "Travel Agencies",
    "OTAs & Metasearch",
    "Event Management",
  ];

  const integrationFeatures = [
    {
      icon: Code,
      title: "API INTEGRATION",
      description: "RESTful API with comprehensive documentation for seamless integration",
    },
    {
      icon: Globe,
      title: "WHITE-LABEL SOLUTION",
      description: "Fully customizable UI components to match your brand identity",
    },
    {
      icon: Zap,
      title: "INSTANT QUOTES",
      description: "Real-time pricing engine with sub-second response times",
    },
    {
      icon: CheckCircle,
      title: "EMBEDDED CHECKOUT",
      description: "Drop-in widget for frictionless policy purchase flow",
    },
  ];

  const testimonials = [
    {
      quote: "CFAR coverage is a game-changer for my high-net-worth clients. Matterhorn's 100% reimbursement gives them peace of mind on luxury trips, and the 15% commission helps my bottom line.",
      author: "Jennifer M.",
      location: "Premier Travel Partners, Chicago",
    },
    {
      quote: "Had a client need emergency evacuation from a remote destination. Matterhorn's team coordinated everything seamlessly. That kind of support makes me look great to my clients.",
      author: "David K.",
      location: "Global Adventures Insurance, Miami",
    },
    {
      quote: "Fast turnaround, competitive rates, and a dedicated underwriting team that actually answers the phone. Matterhorn has become my go-to for all travel insurance placements.",
      author: "Rachel T.",
      location: "Coastal Insurance Group, Boston",
    },
  ];

  const faqs = [
    {
      question: "What does 'Cancel For Any Reason' actually mean?",
      answer: "CFAR coverage allows you to cancel your trip for literally any reason and receive up to 100% of your non-refundable trip costs back. You must cancel at least 48 hours before your scheduled departure date.",
    },
    {
      question: "When do I need to purchase insurance?",
      answer: "For the best coverage options including CFAR, purchase within 14-21 days of your initial trip deposit. Some benefits may not be available if purchased later. Standard coverage can be purchased up to the day before departure.",
    },
    {
      question: "How quickly will I receive my policy?",
      answer: "Instantly! Once you complete your purchase, you'll receive your policy documents via email within 60 seconds. You can also access them immediately through your online account.",
    },
    {
      question: "What's covered under medical emergencies?",
      answer: "Emergency medical coverage includes hospitalization, surgery, physician visits, prescription medications, and ambulance services. Coverage limits range from $50,000 to $250,000 depending on your plan level.",
    },
    {
      question: "Can I add travelers to my policy later?",
      answer: "Yes, you can add additional travelers to your policy before your departure date. Each traveler will need their own premium based on their age and trip details. Contact us to make changes to your policy.",
    },
    {
      question: "What if I need to file a claim?",
      answer: "Filing a claim is simple. Log into your account, select 'File a Claim,' and follow the guided process. You'll need to provide documentation of your loss. Most claims are processed within 5-10 business days.",
    },
  ];

  const brokerBenefits = [
    {
      icon: DollarSign,
      title: "INSTANT COMMISSIONS",
      description: "Earn competitive commissions on every policy sold",
    },
    {
      icon: Zap,
      title: "AUTO-CREDITING",
      description: "Sales automatically credited to your email on file",
    },
    {
      icon: Globe,
      title: "REAL-TIME DASHBOARD",
      description: "Track your sales and earnings in real-time",
    },
    {
      icon: CheckCircle,
      title: "INSTANT APPROVAL",
      description: "Get activated immediately upon registration",
    },
  ];

  const destinations = [
    "United States",
    "Europe",
    "Caribbean",
    "Mexico",
    "Canada",
    "Asia Pacific",
    "South America",
    "Africa",
    "Middle East",
    "Australia/New Zealand",
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#0A1628] text-white' : 'bg-white text-gray-900'}`}>
      <CustomCursor />

      {/* Header with Neon Branding */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-[#0A1628]/95' : 'bg-white/90'} backdrop-blur-md border-b ${isDarkMode ? 'border-[#00d4ff]/20' : 'border-gray-200'} ${isDarkMode ? 'shadow-lg shadow-[#00d4ff]/5' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" data-testid="link-home-travel">
              <div className="flex items-center gap-3 cursor-pointer group">
                <Plane className="w-7 h-7 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.6)] transition-all duration-300" style={{ color: NEON_COLORS.skyBlue }} />
                <div className="flex flex-col">
                  <span className="text-xl font-bold leading-tight" style={{ color: NEON_COLORS.skyBlue, textShadow: '0 0 10px rgba(0,212,255,0.3)' }}>MATTERHORN</span>
                  <span className={`text-[10px] font-medium tracking-widest uppercase ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`} style={{ color: `${NEON_COLORS.skyBlue}99` }}>Travel</span>
                </div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-3">
              {["Program", "Coverages", "Groups", "Platforms"].map((item) => (
                <Button 
                  key={item}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className={`px-4 py-1.5 text-[10px] uppercase tracking-widest font-medium rounded-full border transition-all duration-300 ${
                    isDarkMode 
                      ? 'text-white/70 border-white/20 hover:text-[#00d4ff] hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10' 
                      : 'text-gray-600 border-gray-300 hover:border-primary hover:bg-primary/10'
                  }`}
                  data-testid={`nav-${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </Button>
              ))}
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
                onClick={() => scrollToSection("broker")}
                className="hidden md:flex text-[10px] uppercase tracking-widest font-bold"
                style={{ 
                  backgroundColor: NEON_COLORS.skyBlue, 
                  color: '#000',
                  boxShadow: '0 0 20px rgba(0,212,255,0.4)'
                }}
                data-testid="nav-start-now"
              >
                Start Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Neon Accents */}
      <section id="hero" className={`relative min-h-screen flex items-center justify-center pt-20 ${isDarkMode ? 'bg-gradient-to-b from-[#0A1628] via-[#0F1D32] to-[#0A1628]' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        {/* Neon glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.skyBlue}15` }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[100px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.sunset}10`, animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]" style={{ backgroundColor: `${NEON_COLORS.magenta}08` }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Travel Badge */}
          <Badge className="mb-6 px-4 py-1.5" style={{ 
            backgroundColor: `${NEON_COLORS.skyBlue}20`, 
            color: NEON_COLORS.skyBlue, 
            borderColor: `${NEON_COLORS.skyBlue}40`,
            boxShadow: `0 0 15px ${NEON_COLORS.skyBlue}30`
          }}>
            <Plane className="w-3 h-3 mr-1" />
            Travel Insurance Reimagined
          </Badge>

          <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-hero">
            TRAVEL INSURANCE<br />
            <span className="text-transparent bg-clip-text" style={{ 
              backgroundImage: `linear-gradient(90deg, ${NEON_COLORS.skyBlue}, ${NEON_COLORS.sunset}, ${NEON_COLORS.magenta})`
            }}>FOR BROKERS.</span>
          </h1>

          <p className={`text-xl mb-10 max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`} data-testid="description-hero">
            Cancel For Any Reason coverage, comprehensive protection, and competitive commissions. Partner with Matterhorn to serve your travel clients better.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg"
              onClick={() => setApplicationModalOpen(true)}
              className="px-8 font-bold group"
              style={{ 
                backgroundColor: NEON_COLORS.skyBlue, 
                color: '#000',
                boxShadow: `0 0 25px ${NEON_COLORS.skyBlue}50`
              }}
              data-testid="button-connect-team"
            >
              Connect With Our Team
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("program")}
              className={`px-8 ${isDarkMode ? 'border-white/30 text-white hover:bg-white/10 hover:border-[#00d4ff]/50' : ''}`}
              data-testid="button-view-program"
            >
              View Program Details
            </Button>
          </div>

          {/* Feature Badges with Neon Colors */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 hover:scale-105 transition-transform">
              <Award className="w-5 h-5" style={{ color: NEON_COLORS.skyBlue }} />
              <span className={`text-sm font-medium ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>A-Rated Carriers</span>
            </div>
            <span className={`hidden md:block ${isDarkMode ? 'text-white/30' : 'text-gray-300'}`}>|</span>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform">
              <DollarSign className="w-5 h-5" style={{ color: NEON_COLORS.sunset }} />
              <span className={`text-sm font-medium ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>15% Commission</span>
            </div>
            <span className={`hidden md:block ${isDarkMode ? 'text-white/30' : 'text-gray-300'}`}>|</span>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform">
              <Clock className="w-5 h-5" style={{ color: NEON_COLORS.magenta }} />
              <span className={`text-sm font-medium ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>24-48hr Turnaround</span>
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
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-[#0A1628] via-[#0F1D32]/30 to-[#0A1628]' : 'bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50'}`} />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[120px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.skyBlue}15` }} />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-[100px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.sunset}10`, animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-[80px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.magenta}08`, animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-1.5" style={{ 
              backgroundColor: `${NEON_COLORS.skyBlue}20`, 
              color: NEON_COLORS.skyBlue, 
              borderColor: `${NEON_COLORS.skyBlue}40`,
              boxShadow: `0 0 15px ${NEON_COLORS.skyBlue}30`
            }}>
              <Star className="w-3 h-3 mr-1" />
              Broker Program
            </Badge>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-program-highlights">
              Program{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(90deg, ${NEON_COLORS.skyBlue}, ${NEON_COLORS.sunset}, ${NEON_COLORS.magenta})` }}>
                Highlights & Enhancements
              </span>
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
              Comprehensive travel coverage with CFAR protection, competitive broker commissions, and dedicated underwriting support.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Left Column - Highlights & Risk Types */}
            <div className="lg:col-span-7 space-y-6">
              {/* Main Card with Accordions */}
              <Card className={`p-8 backdrop-blur-sm relative overflow-hidden ${isDarkMode ? 'bg-[#0F1D32]/60 border-white/10' : 'bg-white border-gray-200'}`} data-testid="card-program-details">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${NEON_COLORS.skyBlue}, ${NEON_COLORS.sunset}, ${NEON_COLORS.magenta})` }} />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${NEON_COLORS.skyBlue}20`, boxShadow: `0 0 25px ${NEON_COLORS.skyBlue}25` }}>
                    <Plane className="w-6 h-6" style={{ color: NEON_COLORS.skyBlue }} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Travel Program Details</h3>
                    <p className="text-sm" style={{ color: NEON_COLORS.skyBlue }}>CFAR Coverage Available</p>
                  </div>
                </div>

                <Accordion type="multiple" defaultValue={["highlights"]} className="space-y-3">
                  {/* Program Highlights Accordion */}
                  <AccordionItem value="highlights" className={`rounded-lg overflow-hidden ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
                    <AccordionTrigger className={`text-base hover:no-underline py-4 px-5 transition-colors rounded-lg ${isDarkMode ? 'text-white bg-white/5 hover:bg-white/10' : 'text-gray-900 bg-gray-50 hover:bg-gray-100'}`}>
                      <span className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5" style={{ color: NEON_COLORS.skyBlue }} />
                        <span className="font-semibold">Highlights & Enhancements</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <ul className="space-y-3">
                        {[
                          { text: "Cancel For Any Reason (CFAR) - Up to 100% Reimbursement", highlight: true },
                          { text: "High Value Trip Coverage - Up to $1M Per Trip", highlight: true },
                          { text: "Trip Interruption - Up to 150% of Trip Cost", highlight: true },
                          { text: "Emergency Medical - Up to $500,000", highlight: false },
                          { text: "Medical Evacuation - Up to $1,000,000", highlight: false },
                          { text: "Trip Delay - $200/day (12+ hours)", highlight: false },
                          { text: "Baggage Loss/Delay Coverage", highlight: false },
                          { text: "24/7 Global Assistance", highlight: false },
                          { text: "Adventure Sports Coverage Available", highlight: false },
                          { text: "Pre-Existing Condition Waiver", highlight: false },
                          { text: "15% Commission", highlight: true },
                          { text: "A-Rated Carrier Partners", highlight: false },
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 group">
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0`} style={{ backgroundColor: item.highlight ? NEON_COLORS.skyBlue : isDarkMode ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)' }} />
                            <span className={`text-sm ${item.highlight ? 'font-medium' : ''} group-hover:opacity-100 transition-colors`} style={{ color: item.highlight ? NEON_COLORS.skyBlue : isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)' }}>
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Coverage Types Accordion */}
                  <AccordionItem value="coverage-types" className={`rounded-lg overflow-hidden ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
                    <AccordionTrigger className={`text-base hover:no-underline py-4 px-5 transition-colors rounded-lg ${isDarkMode ? 'text-white bg-white/5 hover:bg-white/10' : 'text-gray-900 bg-gray-50 hover:bg-gray-100'}`}>
                      <span className="flex items-center gap-3">
                        <Target className="w-5 h-5" style={{ color: NEON_COLORS.sunset }} />
                        <span className="font-semibold">Travel Types Covered</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "Leisure & Vacation Travel",
                          "Business Travel",
                          "Adventure & Expedition",
                          "Cruise Coverage",
                          "International Travel",
                          "Domestic Travel",
                          "Group Tours",
                          "Family Vacations",
                          "Honeymoons & Destination Weddings",
                          "Student Travel",
                        ].map((type, idx) => (
                          <div key={idx} className={`flex items-center gap-2 text-sm transition-colors group ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                            <ArrowRight className="w-3 h-3 flex-shrink-0 group-hover:translate-x-1 transition-transform" style={{ color: NEON_COLORS.sunset }} />
                            <span>{type}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* CTA Button */}
                <div className={`mt-8 pt-6 ${isDarkMode ? 'border-t border-white/10' : 'border-t border-gray-200'}`}>
                  <Button
                    size="lg"
                    className="w-full text-black font-semibold shadow-lg transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(90deg, ${NEON_COLORS.skyBlue}, ${NEON_COLORS.sunset})`,
                      boxShadow: `0 0 25px ${NEON_COLORS.skyBlue}40`
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
              <Card className={`p-6 relative overflow-hidden group transition-all duration-500 ${isDarkMode ? '' : 'bg-white'}`} style={{ 
                background: isDarkMode ? `linear-gradient(135deg, ${NEON_COLORS.skyBlue}15 0%, ${NEON_COLORS.sunset}10 100%)` : undefined,
                borderColor: isDarkMode ? `${NEON_COLORS.skyBlue}30` : undefined
              }} data-testid="card-competitive-advantage">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl transition-all" style={{ backgroundColor: `${NEON_COLORS.skyBlue}20` }} />
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-2xl" style={{ backgroundColor: `${NEON_COLORS.sunset}15` }} />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: NEON_COLORS.skyBlue, boxShadow: `0 0 30px ${NEON_COLORS.skyBlue}40` }}>
                    <Shield className="w-7 h-7 text-black" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>CFAR Advantage</h3>
                  <p className="text-lg font-medium mb-4" style={{ color: NEON_COLORS.skyBlue }}>
                    Cancel For Any Reason Coverage
                  </p>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                    Give your clients the ultimate flexibility with up to 100% reimbursement for any cancellation reason. A key differentiator that closes more deals.
                  </p>
                </div>
              </Card>

              {/* Quick Facts Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className={`p-5 transition-all group ${isDarkMode ? 'bg-[#0F1D32]/50 border-white/10 hover:border-white/30' : 'bg-white border-gray-200 hover:border-gray-300'}`} data-testid="card-quick-fact-1">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${NEON_COLORS.skyBlue}20` }}>
                    <Clock className="w-5 h-5" style={{ color: NEON_COLORS.skyBlue }} />
                  </div>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>24-48hr</p>
                  <p className={`text-sm ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>Quote Turnaround</p>
                </Card>
                <Card className={`p-5 transition-all group ${isDarkMode ? 'bg-[#0F1D32]/50 border-white/10 hover:border-white/30' : 'bg-white border-gray-200 hover:border-gray-300'}`} data-testid="card-quick-fact-2">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${NEON_COLORS.sunset}20` }}>
                    <Globe className="w-5 h-5" style={{ color: NEON_COLORS.sunset }} />
                  </div>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>50 States</p>
                  <p className={`text-sm ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>National Coverage</p>
                </Card>
                <Card className={`p-5 transition-all group ${isDarkMode ? 'bg-[#0F1D32]/50 border-white/10 hover:border-white/30' : 'bg-white border-gray-200 hover:border-gray-300'}`} data-testid="card-quick-fact-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${NEON_COLORS.magenta}20` }}>
                    <Award className="w-5 h-5" style={{ color: NEON_COLORS.magenta }} />
                  </div>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>A-Rated</p>
                  <p className={`text-sm ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>Carrier Partners</p>
                </Card>
                <Card className={`p-5 transition-all group ${isDarkMode ? 'bg-[#0F1D32]/50 border-white/10 hover:border-white/30' : 'bg-white border-gray-200 hover:border-gray-300'}`} data-testid="card-quick-fact-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${NEON_COLORS.skyBlue}20` }}>
                    <DollarSign className="w-5 h-5" style={{ color: NEON_COLORS.skyBlue }} />
                  </div>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>15%</p>
                  <p className={`text-sm ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>Commission</p>
                </Card>
              </div>

              {/* Contact Card */}
              <Card className={`p-5 ${isDarkMode ? 'bg-[#0F1D32]/50 border-white/10' : 'bg-white border-gray-200'}`} data-testid="card-contact-info">
                <h4 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <Mail className="w-4 h-4" style={{ color: NEON_COLORS.skyBlue }} />
                  Need More Information?
                </h4>
                <p className={`text-sm mb-3 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                  Reach out to our team for program details and custom quotes.
                </p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:support@matterhornprotects.com" className="text-sm hover:opacity-80 transition-colors flex items-center gap-2" style={{ color: NEON_COLORS.skyBlue }}>
                    <Mail className="w-4 h-4" />
                    support@matterhornprotects.com
                  </a>
                  <a href="tel:1-844-600-0611" className="text-sm hover:opacity-80 transition-colors flex items-center gap-2" style={{ color: NEON_COLORS.sunset }}>
                    <Phone className="w-4 h-4" />
                    1-844-600-0611
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Neon */}
      <section className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-[#0F1D32]' : 'bg-gray-50'}`}>
        {/* Neon glows */}
        {isDarkMode && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full blur-[120px]" style={{ backgroundColor: `${NEON_COLORS.skyBlue}10` }} />
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full blur-[100px]" style={{ backgroundColor: `${NEON_COLORS.sunset}08` }} />
          </div>
        )}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Badge className="px-4 py-1.5" style={{ 
              backgroundColor: `${NEON_COLORS.skyBlue}20`, 
              color: NEON_COLORS.skyBlue, 
              borderColor: `${NEON_COLORS.skyBlue}40`,
              boxShadow: `0 0 15px ${NEON_COLORS.skyBlue}30`
            }}>
              WHY CHOOSE US
            </Badge>
          </div>

          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-why-choose">
              TRAVEL INSURANCE THAT<br />
              <span className="text-transparent bg-clip-text" style={{ 
                backgroundImage: `linear-gradient(90deg, ${NEON_COLORS.skyBlue}, ${NEON_COLORS.sunset}, ${NEON_COLORS.magenta})`
              }}>ACTUALLY MAKES SENSE</span>
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              No fine print surprises. No hidden fees. Just smart protection when you need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {whyChooseUs.map((feature, index) => {
              const neonColors = [NEON_COLORS.skyBlue, NEON_COLORS.sunset, NEON_COLORS.magenta, NEON_COLORS.gold];
              const neonColor = neonColors[index % neonColors.length];
              return (
                <Card 
                  key={index}
                  className={`p-8 relative overflow-visible group transition-all duration-500 hover-elevate ${isDarkMode ? 'bg-[#1B2A41]/60 border-white/10 backdrop-blur-sm' : 'bg-white border-gray-200'}`}
                  data-testid={`card-feature-${index}`}
                >
                  {/* Hover glow effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${neonColor}15 0%, transparent 60%)` }}
                  />
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${neonColor}, transparent)` }}
                  />
                  
                  <div className="relative z-10">
                    <Badge className="mb-4 px-3 py-1" style={{ 
                      backgroundColor: `${neonColor}20`, 
                      color: neonColor, 
                      borderColor: `${neonColor}40`
                    }}>
                      {feature.badge}
                    </Badge>
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300"
                      style={{ backgroundColor: `${neonColor}20`, boxShadow: `0 0 25px ${neonColor}25` }}
                    >
                      <feature.icon className="w-7 h-7" style={{ color: neonColor }} />
                    </div>
                    <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white group-hover:text-[#00d4ff]' : 'text-gray-900'} transition-colors`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className={`py-24 ${isDarkMode ? 'bg-[#0F1D32]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              HOW IT WORKS
            </Badge>
          </div>

          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-how-it-works">
              THREE STEPS TO PLACE COVERAGE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center" data-testid={`step-${index + 1}`}>
                <div className="text-6xl font-bold text-primary/30 mb-4">{step.step}</div>
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}
                </h3>
                <p className={`${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Details Section */}
      <section id="coverage" className={`py-24 ${isDarkMode ? 'bg-[#0A1628]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              COVERAGE DETAILS
            </Badge>
          </div>

          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-coverage">
              COMPREHENSIVE PROTECTION<br />
              <span className="text-primary">FOR EVERY JOURNEY</span>
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              What's covered when you choose Matterhorn
            </p>
          </div>

          <Tabs defaultValue="cancellation" className="w-full">
            <TabsList className={`w-full flex flex-wrap justify-center mb-8 ${isDarkMode ? 'bg-white/5' : 'bg-gray-100'}`}>
              {coverageTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="text-sm px-4 py-2"
                  data-testid={`tab-${tab.id}`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {coverageTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tab.content.map((item, index) => (
                    <Card
                      key={index}
                      className={`p-6 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}`}
                    >
                      <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {item.title}
                      </h4>
                      <ul className="space-y-2">
                        {item.items.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <span className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Enterprise Solutions Section */}
      <section id="enterprise" className={`py-24 ${isDarkMode ? 'bg-[#0F1D32]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              ENTERPRISE SOLUTIONS
            </Badge>
          </div>

          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-enterprise">
              GROUP ENROLLMENT
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Protect your entire team with customized coverage plans and enterprise-grade support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {enterpriseFeatures.map((feature, index) => (
              <Card
                key={index}
                className={`p-6 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}
                data-testid={`card-enterprise-${index}`}
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Group Quote Form */}
          <Card className={`max-w-2xl mx-auto p-8 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}>
            <h3 className={`text-xl font-semibold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Request Group Quote
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className={isDarkMode ? 'text-white' : ''}>COMPANY NAME</Label>
                  <Input
                    placeholder="Enter company name"
                    className={isDarkMode ? 'bg-white/5 border-white/20 text-white placeholder:text-white/40' : ''}
                    data-testid="input-company-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label className={isDarkMode ? 'text-white' : ''}>WORK EMAIL</Label>
                  <Input
                    type="email"
                    placeholder="Enter work email"
                    className={isDarkMode ? 'bg-white/5 border-white/20 text-white placeholder:text-white/40' : ''}
                    data-testid="input-work-email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className={isDarkMode ? 'text-white' : ''}>NUMBER OF EMPLOYEES</Label>
                  <Input
                    type="number"
                    placeholder="Enter number"
                    className={isDarkMode ? 'bg-white/5 border-white/20 text-white placeholder:text-white/40' : ''}
                    data-testid="input-employees"
                  />
                </div>
                <div className="space-y-2">
                  <Label className={isDarkMode ? 'text-white' : ''}>PHONE NUMBER</Label>
                  <Input
                    type="tel"
                    placeholder="Enter phone number"
                    className={isDarkMode ? 'bg-white/5 border-white/20 text-white placeholder:text-white/40' : ''}
                    data-testid="input-phone-group"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                data-testid="button-get-group-quote"
              >
                GET GROUP QUOTE
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Platform Integration Section */}
      <section id="integration" className={`py-24 ${isDarkMode ? 'bg-[#0A1628]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              PLATFORM INTEGRATION
            </Badge>
          </div>

          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-integration">
              EMBED COVERAGE<br />
              <span className="text-primary">IN YOUR PLATFORM</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Monetize your travel platform with seamless insurance integration. Offer protection at the point of booking.
            </p>
          </div>

          {/* Platform Types */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {platformIntegrations.map((platform, index) => (
              <Badge
                key={index}
                className={`px-4 py-2 ${isDarkMode ? 'bg-white/10 text-white border-white/20' : 'bg-gray-100 text-gray-700 border-gray-200'}`}
              >
                {platform}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90" data-testid="button-view-docs">
              VIEW DOCUMENTATION
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={isDarkMode ? 'border-white/30 text-white hover:bg-white/10' : ''}
              data-testid="button-contact-team"
            >
              CONTACT OUR TEAM
            </Button>
          </div>

          {/* Integration Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {integrationFeatures.map((feature, index) => (
              <Card
                key={index}
                className={`p-6 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}`}
                data-testid={`card-integration-${index}`}
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Integration Support Box */}
          <Card className={`max-w-2xl mx-auto p-6 ${isDarkMode ? 'bg-primary/10 border-primary/30' : 'bg-primary/5 border-primary/20'}`}>
            <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Integration Support
            </h3>
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Our technical team provides comprehensive onboarding, sandbox environment access, and 24/7 developer support.
            </p>
            <p className={`text-sm font-medium ${isDarkMode ? 'text-primary' : 'text-primary'}`}>
              Average integration time: 2-3 days
            </p>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-24 ${isDarkMode ? 'bg-[#0F1D32]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              TESTIMONIALS
            </Badge>
          </div>

          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-testimonials">
              TRUSTED BY BROKERS NATIONWIDE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`p-6 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}
                data-testid={`card-testimonial-${index}`}
              >
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className={`text-sm mb-6 italic ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    — {testimonial.author}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
                    {testimonial.location}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>A-Rated Carriers</div>
            </div>
            <div className="text-center">
              <div className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>Licensed in 51 States</div>
            </div>
            <div className="text-center">
              <div className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>100K+ Policies Issued</div>
            </div>
            <div className="text-center">
              <div className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>4.8/5 Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-24 ${isDarkMode ? 'bg-[#0A1628]' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              FREQUENTLY ASKED QUESTIONS
            </Badge>
          </div>

          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-faq">
              YOUR QUESTIONS, ANSWERED
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className={`border rounded-lg px-6 ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}
              >
                <AccordionTrigger className={`text-left ${isDarkMode ? 'text-white hover:text-primary' : 'text-gray-900 hover:text-primary'}`} data-testid={`faq-trigger-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Expert Guidance Section */}
      <section id="contact" className={`py-24 ${isDarkMode ? 'bg-[#0F1D32]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              EXPERT GUIDANCE
            </Badge>
          </div>

          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-contact">
              CONNECT WITH OUR UNDERWRITERS
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Need custom coverage? Complex trip requirements? Our team of travel insurance experts is here to help craft the perfect policy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className={`p-6 text-center ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}>
              <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                CALL US
              </h3>
              <p className="text-primary font-bold mb-1">1-800-MATTERHORN</p>
              <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
                Mon-Fri 8AM-8PM EST
              </p>
            </Card>

            <Card className={`p-6 text-center ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}>
              <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                EMAIL US
              </h3>
              <p className="text-primary font-bold mb-1">underwriters@</p>
              <p className="text-primary font-bold">matterhornprotects.com</p>
            </Card>

            <Card className={`p-6 text-center ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}>
              <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                SCHEDULE CONSULTATION
              </h3>
              <Button className="bg-primary hover:bg-primary/90 mb-1" data-testid="button-book-call">
                Book a Call
              </Button>
              <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
                15-minute expert review
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className={isDarkMode ? 'border-white/30 text-white hover:bg-white/10' : ''}
              data-testid="button-schedule-call"
            >
              SCHEDULE A CALL
            </Button>
          </div>
        </div>
      </section>

      {/* Broker Program Section */}
      <section id="broker" className={`py-24 ${isDarkMode ? 'bg-[#0A1628]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              BROKER PROGRAM
            </Badge>
          </div>

          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-broker">
              BECOME A BROKER PARTNER
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Join our network of insurance brokers and earn commissions on every sale. Register your email and start earning today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {brokerBenefits.map((benefit, index) => (
              <Card
                key={index}
                className={`p-6 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}`}
                data-testid={`card-broker-${index}`}
              >
                <benefit.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {benefit.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Broker Registration Form */}
          <Card className={`max-w-xl mx-auto p-8 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}`}>
            <h3 className={`text-xl font-semibold mb-2 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Register as a Broker
            </h3>
            <p className={`text-sm text-center mb-6 ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
              BROKER EMAIL ADDRESS
            </p>
            <form className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your broker email"
                  className={isDarkMode ? 'bg-white/5 border-white/20 text-white placeholder:text-white/40' : ''}
                  data-testid="input-broker-email"
                />
                <p className={`text-xs ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                  This email will be used to credit all sales and commission payments
                </p>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                data-testid="button-register-broker"
              >
                REGISTER NOW
              </Button>
              <p className={`text-xs text-center ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                By registering, you agree to our Broker Terms & Conditions. You'll receive instant access to your broker dashboard upon registration.
              </p>
            </form>
            <p className={`text-sm text-center mt-6 ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
              Questions about the broker program?{" "}
              <a href="mailto:brokers@matterhornprotects.com" className="text-primary hover:underline">
                Contact our broker team
              </a>
            </p>
          </Card>
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
                    onClick={() => scrollToSection('program')}
                    className={`text-sm hover:text-primary transition-colors ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}
                  >
                    Program
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('coverage')}
                    className={`text-sm hover:text-primary transition-colors ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}
                  >
                    Coverage
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
                <li className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>Cancel For Any Reason</li>
                <li className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>Medical & Evacuation</li>
                <li className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>Baggage Protection</li>
                <li className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>Trip Delay</li>
                <li className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>24/7 Assistance</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact Us</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:18006288376"
                    className={`flex items-center gap-2 text-sm hover:text-primary transition-colors ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}
                  >
                    <Phone className="h-4 w-4" />
                    1-800-MATTERHORN
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:underwriters@matterhornprotects.com"
                    className={`flex items-center gap-2 text-sm hover:text-primary transition-colors ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}
                  >
                    <Mail className="h-4 w-4" />
                    underwriters@matterhornprotects.com
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => setApplicationModalOpen(true)}
                  data-testid="button-footer-contact"
                >
                  Contact Our Team
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
                  Broker Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Broker Application Modal */}
      <BrokerApplicationModal 
        open={applicationModalOpen} 
        onOpenChange={setApplicationModalOpen} 
      />
    </div>
  );
}
