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
import heroBg from "@assets/stock_images/youth_soccer_team_ce_56a4b64e.jpg";
import youthLeagueImg from "@assets/stock_images/youth_soccer_practic_7460c554.jpg";
import youthCoachingImg from "@assets/stock_images/youth_basketball_gam_dd1940dd.jpg";
import wayneGutridgePhoto from "@assets/generated_images/Wayne_Gutridge_professional_headshot_bd36310d.png";
import isaacAllenPhoto from "@assets/generated_images/Isaac_Allen_professional_headshot_640e0cbc.png";
import mikeAsselinPhoto from "@assets/generated_images/Mike_Asselin_professional_headshot.png";

export default function YouthSportsPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [zipCode, setZipCode] = useState("");
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  // Leadership team data
  const leadership = [
    {
      name: "Wayne Gutridge",
      title: "CEO & Founder",
      description: "A visionary leader in specialty insurance, Wayne founded Matterhorn with a mission to revolutionize program design for youth organizations.",
      territory: "National",
      photo: wayneGutridgePhoto,
    },
    {
      name: "Isaac Allen",
      title: "President",
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
      title: "NAYS Partnership",
      description: "Exclusive access to NAYS-certified programs with 15-25% savings through group rates and collective bargaining power.",
      icon: Award,
    },
    {
      title: "60+ Years Experience",
      description: "NAYS brings over six decades of youth sports expertise, ensuring comprehensive protection for every program.",
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
      description: "NAYS-certified coverage for local, regional, and national youth league operations.",
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
      solution: "We consolidated all coverage under a single NAYS-certified program with unified limits and centralized administration, reducing their annual premium by 22%.",
      results: { "Premium Savings": "22%", "States Unified": "8", "Renewal Time": "5 Days" },
      brokerBenefits: ["Single point of contact for all states", "Automated certificate generation", "Consolidated billing"],
      clientBenefits: ["Consistent coverage across all programs", "Reduced administrative burden", "Better claims experience"],
    },
    {
      title: "Summer Sports Camp Network",
      category: "Camps",
      challenge: "A network of 15 summer camps needed comprehensive coverage including abuse & molestation, but was struggling to find affordable options with proper limits.",
      solution: "Our NAYS partnership provided access to specialized camp coverage with enhanced A&M limits and integrated background check requirements.",
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

  const naysFeatures = [
    {
      icon: Award,
      title: "NAYS-Certified Coverage",
      description: "Exclusive access to insurance programs specifically designed and approved by the National Alliance for Youth Sports, ensuring comprehensive protection that meets industry standards.",
    },
    {
      icon: DollarSign,
      title: "Negotiated Group Rates",
      description: "Leverage our NAYS partnership to access preferential pricing through bulk purchasing power. Our collective bargaining delivers 15-25% savings compared to individual market rates.",
    },
    {
      icon: Network,
      title: "Nationwide Network",
      description: "Connect with NAYS's network of 3+ million youth sports participants across 50,000+ organizations. Instant credibility and streamlined enrollment for league directors.",
    },
    {
      icon: Cpu,
      title: "Automated Administration",
      description: "NAYS-integrated digital platform handles participant enrollment, certificate generation, and renewal management automatically. Reduce administrative work by 70%.",
    },
    {
      icon: CheckCircle,
      title: "Program Compliance",
      description: "All coverage packages are pre-approved by NAYS, ensuring your programs meet safety and insurance requirements for certification and grant eligibility.",
    },
    {
      icon: HeadphonesIcon,
      title: "Claims Support",
      description: "Dedicated claims team familiar with NAYS standards and youth sports scenarios. Average claim resolution 40% faster than industry standard.",
    },
  ];

  const partnershipSteps = [
    {
      step: 1,
      title: "Collective Negotiation",
      description: "NAYS negotiates directly with A-rated carriers using combined volume from thousands of leagues to secure lower premiums.",
    },
    {
      step: 2,
      title: "Standardized Programs",
      description: "Pre-built coverage packages designed specifically for youth sports eliminate customization costs and streamline underwriting.",
    },
    {
      step: 3,
      title: "Risk Mitigation",
      description: "NAYS safety training and certification requirements reduce claim frequency, resulting in lower rates for all participants.",
    },
    {
      step: 4,
      title: "Technology Integration",
      description: "Our platform integrates with NAYS systems for automated enrollment, reducing administrative overhead and passing savings to you.",
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
    "NAYS General Liability",
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

  const resources = [
    {
      title: "Coverage Summary",
      description: "Comprehensive overview of all NAYS youth sports coverage options, limits, and pricing.",
      type: "PDF Guide",
      size: "2.4 MB",
    },
    {
      title: "Client Brochure",
      description: "Professional client-facing materials explaining youth sports insurance benefits and features.",
      type: "PDF Brochure",
      size: "3.1 MB",
    },
    {
      title: "Marketing Kit",
      description: "Complete marketing package including presentations, one-pagers, and social media assets.",
      type: "ZIP Package",
      size: "8.7 MB",
    },
    {
      title: "NAYS Partnership Guide",
      description: "Detailed explanation of the NAYS partnership benefits and how to leverage group rates.",
      type: "PDF Guide",
      size: "1.8 MB",
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
                onClick={() => scrollToSection("quote")}
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
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/70 via-[#0A1628]/60 to-[#0A1628]/90" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2">
            Official NAYS Partnership • 50,000+ Organizations
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" data-testid="heading-hero">
            Youth Sports Insurance<br />Through NAYS
          </h1>

          <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed" data-testid="description-hero">
            Exclusive NAYS-certified coverage with 15-25% savings through group rates.
            Comprehensive protection for youth leagues, coaches, and participants across all 50 states.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg"
              onClick={() => scrollToSection("quote")}
              className="bg-white text-[#0A1628] px-8"
              data-testid="button-get-started"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-white/30 text-white px-8"
              asChild
              data-testid="button-broker-portal"
            >
              <Link href="/brokers">Broker Portal</Link>
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white" data-testid="stat-markets">30+</div>
              <div className="text-sm text-white/60">A-Rated Markets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white" data-testid="stat-states">50</div>
              <div className="text-sm text-white/60">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white" data-testid="stat-options">55+</div>
              <div className="text-sm text-white/60">Coverage Options</div>
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

      {/* Why Work With Matterhorn Section */}
      <section id="why-matterhorn" className={`py-24 ${isDarkMode ? 'bg-[#0A1628]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30 mb-4">
              Why Matterhorn
            </Badge>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-why-matterhorn">
              The Youth Sports Insurance{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">
                Advantage
              </span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
              Partner with industry leaders to access exclusive programs designed specifically for youth sports organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyMatterhorn.map((item, index) => (
              <Card 
                key={index}
                className={`p-6 group overflow-visible ${isDarkMode ? 'bg-[#1B2A41]/50 border-white/10 hover:border-[#00ff88]/50' : 'bg-gray-50 border-gray-200 hover:border-[#00ff88]/50'} hover-elevate`}
              >
                <div className={`w-12 h-12 rounded-md flex items-center justify-center mb-4 transition-all duration-300 ${isDarkMode ? 'bg-[#00ff88]/20 group-hover:bg-[#00ff88]/30' : 'bg-[#00ff88]/10 group-hover:bg-[#00ff88]/20'}`}>
                  <item.icon className="w-6 h-6 text-[#00ff88]" />
                </div>
                <h3 className={`text-lg font-bold mb-2 group-hover:text-[#00ff88] transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Available Markets Section */}
      <section id="markets" className={`py-24 ${isDarkMode ? 'bg-[#0F1D32]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-[#00d4ff]/20 text-[#00d4ff] border-[#00d4ff]/30 mb-4">
              Available Markets
            </Badge>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-markets">
              Access to A-Rated Carriers
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
              One submission connects you to our curated selection of A-rated markets with specialized youth sports expertise.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-12">
            {availableMarkets.map((market, index) => (
              <div 
                key={index}
                className={`px-6 py-4 rounded-lg border overflow-visible ${isDarkMode ? 'bg-white/5 border-white/10 hover:border-[#00d4ff]/50' : 'bg-white border-gray-200 hover:border-[#00d4ff]/50'} hover-elevate`}
              >
                <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{market.name}</span>
                <Badge className="ml-2 bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30 text-xs">
                  {market.rating}
                </Badge>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
              Plus access to 20+ additional specialty markets for unique risks
            </p>
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
              onClick={() => scrollToSection("quote")}
              data-testid="button-start-application"
            >
              Start Your Application
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* NAYS Partnership Section */}
      <section id="nays-partnership" className={`py-24 ${isDarkMode ? 'bg-[#0F1D32]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              NAYS Partnership
            </Badge>
          </div>

          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-nays">
              Leveraging the Power of NAYS
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Our exclusive partnership with the National Alliance for Youth Sports unlocks unparalleled coverage quality, competitive pricing, and seamless integration for youth leagues nationwide.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {naysFeatures.map((feature, index) => (
              <Card 
                key={index}
                className={`p-6 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} hover-elevate`}
                data-testid={`card-nays-feature-${index}`}
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          {/* How Partnership Works */}
          <div className="mb-16">
            <h3 className={`text-2xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              How the Partnership Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipSteps.map((item, index) => (
                <div key={index} className="text-center" data-testid={`step-${index + 1}`}>
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h4>
                  <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Stats */}
          <div className={`rounded-lg p-8 ${isDarkMode ? 'bg-white/5' : 'bg-primary/5'} mb-12`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15-25%</div>
                <div className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Average savings vs. individual market rates
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
                <div className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Youth organizations in NAYS network
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">3M+</div>
                <div className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Youth participants covered annually
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection("quote")}
              className="bg-primary"
              data-testid="button-get-nays-coverage"
            >
              Get NAYS-Certified Coverage
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage Suite Section */}
      <section id="coverage" className={`py-24 ${isDarkMode ? 'bg-[#0A1628]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-coverage">
              Complete Coverage Suite
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              From general liability to specialized programs, we protect every aspect of youth sports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageSuite.map((coverage, index) => (
              <Card 
                key={index}
                className={`p-6 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} hover-elevate`}
                data-testid={`card-coverage-${index}`}
              >
                <coverage.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {coverage.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  {coverage.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Youth Sports Coverage Programs */}
      <section className={`py-24 ${isDarkMode ? 'bg-[#0F1D32]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-programs">
              NAYS Youth Sports Coverage
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Comprehensive insurance programs exclusively designed for youth sports organizations through our NAYS partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Youth League Programs */}
            <Card className={`overflow-hidden ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`} data-testid="card-youth-league">
              <div className="h-48 overflow-hidden">
                <img 
                  src={youthLeagueImg} 
                  alt="Youth League Programs" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Youth League Programs
                  </h3>
                  <Badge className="bg-primary/20 text-primary border-primary/30">Ages 5-18</Badge>
                </div>
                <p className={`text-sm mb-6 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  NAYS-certified comprehensive coverage for recreational leagues, competitive programs, and travel teams with automated participant management.
                </p>
                <div className="space-y-2 mb-6">
                  {youthLeagueFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className={`text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline"
                  className={`${isDarkMode ? 'border-white/20 text-white' : ''}`}
                  onClick={() => scrollToSection("quote")}
                  data-testid="button-learn-more-league"
                >
                  Learn More
                </Button>
              </div>
            </Card>

            {/* Youth Coaching Coverage */}
            <Card className={`overflow-hidden ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`} data-testid="card-youth-coaching">
              <div className="h-48 overflow-hidden">
                <img 
                  src={youthCoachingImg} 
                  alt="Youth Coaching Coverage" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Youth Coaching Coverage
                  </h3>
                  <Badge className="bg-primary/20 text-primary border-primary/30">Volunteer & Paid Staff</Badge>
                </div>
                <p className={`text-sm mb-6 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Specialized protection for coaches, administrators, and volunteers with NAYS safety certification requirements built-in.
                </p>
                <div className="space-y-2 mb-6">
                  {coachingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className={`text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline"
                  className={`${isDarkMode ? 'border-white/20 text-white' : ''}`}
                  onClick={() => scrollToSection("quote")}
                  data-testid="button-learn-more-coaching"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Territory Search Section */}
      <section className={`py-24 ${isDarkMode ? 'bg-[#0A1628]' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-territory">
            Find Organizations in Your Territory
          </h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
            Search by ZIP code to discover youth sports organizations in your region that need NAYS-certified coverage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <div className="relative w-full sm:w-96">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-white/40' : 'text-gray-400'}`} />
              <Input
                type="text"
                placeholder="Enter ZIP code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className={`pl-10 ${isDarkMode ? 'bg-white/5 border-white/20 text-white placeholder:text-white/40' : ''}`}
                data-testid="input-zip-code"
              />
            </div>
            <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto" data-testid="button-search">
              Search
            </Button>
          </div>

          <p className={`text-sm ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
            Territory search covers all 50 states with real-time organization data
          </p>

          <div className="mt-8">
            <Button 
              variant="outline"
              className={`${isDarkMode ? 'border-white/20 text-white' : ''}`}
              data-testid="button-contact-territory"
            >
              Contact Territory Support
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
                      onClick={() => scrollToSection("quote")}
                      className="group bg-[#00ff88] hover:bg-[#00ff88]/90 text-black"
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

      {/* Built for Brokers Section */}
      <section id="brokers" className={`py-24 ${isDarkMode ? 'bg-[#0F1D32]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-brokers">
              Built for Brokers
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Join our network and access exclusive markets, automation tools, and dedicated support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {brokerBenefits.map((benefit, index) => (
              <Card 
                key={index}
                className={`p-6 text-center ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}
                data-testid={`card-broker-benefit-${index}`}
              >
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {benefit.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary"
              onClick={() => setApplicationModalOpen(true)}
              data-testid="button-become-broker"
            >
              Become a Broker Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className={`py-24 ${isDarkMode ? 'bg-[#0A1628]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-resources">
              Resources & Downloads
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Access client-facing coverage summaries, marketing brochures, and program materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {resources.map((resource, index) => (
              <Card 
                key={index}
                className={`p-6 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} hover-elevate`}
                data-testid={`card-resource-${index}`}
              >
                <FileText className="w-10 h-10 text-primary mb-4" />
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {resource.title}
                </h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  {resource.description}
                </p>
                <div className={`text-xs mb-4 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                  {resource.type} • {resource.size}
                </div>
                <Button 
                  variant="outline"
                  size="sm"
                  className={`w-full ${isDarkMode ? 'border-white/20 text-white' : ''}`}
                  data-testid={`button-download-${index}`}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </Card>
            ))}
          </div>

          <div className={`text-center p-6 rounded-lg ${isDarkMode ? 'bg-white/5' : 'bg-gray-100'}`}>
            <p className={`mb-4 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Need custom marketing materials or additional resources?
            </p>
            <Button 
              variant="outline"
              className={`${isDarkMode ? 'border-white/20 text-white' : ''}`}
              data-testid="button-request-materials"
            >
              Request Custom Materials
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 ${isDarkMode ? 'bg-[#0F1D32]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-contact">
              Speak With Our Team
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Get expert guidance on youth sports insurance. Book a consultation or submit your sports-related inquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className={`p-8 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`} data-testid="card-book-meeting">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Book a Meeting
              </h3>
              <p className={`mb-6 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Schedule a personalized consultation with our youth sports insurance experts. We'll review your needs and create a custom coverage plan.
              </p>
              <Button className="bg-primary hover:bg-primary/90 w-full" data-testid="button-schedule">
                Schedule Consultation
              </Button>
            </Card>

            <Card className={`p-8 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`} data-testid="card-submit-inquiry">
              <MessageSquare className="w-12 h-12 text-primary mb-4" />
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Submit Sports Inquiry
              </h3>
              <p className={`mb-6 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Have a specific question about coverage, claims, or program details? Submit your sports-related inquiry and we'll respond within 24 hours.
              </p>
              <Button 
                variant="outline"
                className={`w-full ${isDarkMode ? 'border-white/20 text-white' : ''}`}
                data-testid="button-submit-inquiry"
              >
                Submit Inquiry
              </Button>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a 
              href="tel:18446000611"
              className="flex items-center gap-2 text-primary hover:underline"
              data-testid="link-phone"
            >
              <Phone className="w-5 h-5" />
              1-844-600-0611
            </a>
            <a 
              href="mailto:support@matterhornprotects.com"
              className="flex items-center gap-2 text-primary hover:underline"
              data-testid="link-email"
            >
              <Mail className="w-5 h-5" />
              support@matterhornprotects.com
            </a>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className={`py-24 ${isDarkMode ? 'bg-[#0A1628]' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-quote">
              Get Your Quote
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <Card className={`p-8 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}`}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className={isDarkMode ? 'text-white' : ''}>Organization Type</Label>
                  <Select>
                    <SelectTrigger className={isDarkMode ? 'bg-white/5 border-white/20 text-white' : ''} data-testid="select-org-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="youth-league">Youth League</SelectItem>
                      <SelectItem value="amateur-club">Amateur Club</SelectItem>
                      <SelectItem value="collegiate">Collegiate</SelectItem>
                      <SelectItem value="facility">Facility</SelectItem>
                      <SelectItem value="event-organizer">Event Organizer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className={isDarkMode ? 'text-white' : ''}>Organization Name</Label>
                  <Input 
                    placeholder="Enter organization name"
                    className={isDarkMode ? 'bg-white/5 border-white/20 text-white placeholder:text-white/40' : ''}
                    data-testid="input-org-name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className={isDarkMode ? 'text-white' : ''}>Number of Participants</Label>
                  <Input 
                    type="number"
                    placeholder="Enter number"
                    className={isDarkMode ? 'bg-white/5 border-white/20 text-white placeholder:text-white/40' : ''}
                    data-testid="input-participants"
                  />
                </div>

                <div className="space-y-2">
                  <Label className={isDarkMode ? 'text-white' : ''}>Coverage Type</Label>
                  <Select>
                    <SelectTrigger className={isDarkMode ? 'bg-white/5 border-white/20 text-white' : ''} data-testid="select-coverage-type">
                      <SelectValue placeholder="Select coverage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general-liability">General Liability</SelectItem>
                      <SelectItem value="accident-medical">Accident Medical</SelectItem>
                      <SelectItem value="travel-insurance">Travel Insurance</SelectItem>
                      <SelectItem value="comprehensive">Comprehensive Package</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className={isDarkMode ? 'text-white' : ''}>Email Address</Label>
                  <Input 
                    type="email"
                    placeholder="Enter email"
                    className={isDarkMode ? 'bg-white/5 border-white/20 text-white placeholder:text-white/40' : ''}
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label className={isDarkMode ? 'text-white' : ''}>Phone Number</Label>
                  <Input 
                    type="tel"
                    placeholder="Enter phone number"
                    className={isDarkMode ? 'bg-white/5 border-white/20 text-white placeholder:text-white/40' : ''}
                    data-testid="input-phone"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className={isDarkMode ? 'text-white' : ''}>Additional Information</Label>
                <Textarea 
                  placeholder="Tell us about your coverage needs..."
                  rows={4}
                  className={isDarkMode ? 'bg-white/5 border-white/20 text-white placeholder:text-white/40' : ''}
                  data-testid="textarea-additional-info"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90"
                data-testid="button-request-quote"
              >
                Request Quote
              </Button>
            </form>
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
              <div className="flex items-center gap-2">
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  Official NAYS Partner
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
                  onClick={() => scrollToSection('quote')}
                  data-testid="button-footer-quote"
                >
                  Get a Quote
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
