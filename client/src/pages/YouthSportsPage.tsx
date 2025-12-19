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
} from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
import heroBg from "@assets/stock_images/youth_soccer_team_ce_56a4b64e.jpg";
import youthLeagueImg from "@assets/stock_images/youth_soccer_practic_7460c554.jpg";
import youthCoachingImg from "@assets/stock_images/youth_basketball_gam_dd1940dd.jpg";

export default function YouthSportsPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [zipCode, setZipCode] = useState("");
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);

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
    "Accident Medical & ADD",
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
              <div className="flex items-center gap-2 cursor-pointer">
                <Mountain className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold">MATTERHORN</span>
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
                className="bg-primary hover:bg-primary/90"
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
              className="bg-white text-[#0A1628] hover:bg-white/90 px-8"
              data-testid="button-get-started"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8"
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

      {/* NAYS Partnership Section */}
      <section className={`py-24 ${isDarkMode ? 'bg-[#0F1D32]' : 'bg-gray-50'}`}>
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
              className="bg-primary hover:bg-primary/90"
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
                  className={`${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : ''}`}
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
                  className={`${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : ''}`}
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
              className={`${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : ''}`}
              data-testid="button-contact-territory"
            >
              Contact Territory Support
            </Button>
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
              className="bg-primary hover:bg-primary/90"
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
                  className={`w-full ${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : ''}`}
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
              className={`${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : ''}`}
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
                className={`w-full ${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : ''}`}
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
                  className="bg-primary hover:bg-primary/90"
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
