import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
} from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
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
    { label: "Coverage", id: "coverage" },
    { label: "Benefits", id: "why-choose" },
    { label: "Franchise", id: "franchise" },
    { label: "Broker", id: "broker-application" },
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
            onClick={() => scrollToSection("broker-application")}
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
                onClick={() => scrollToSection("broker-application")}
                className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30"
                data-testid="button-get-started"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("coverage")}
                className="border-white/30 text-white backdrop-blur-sm bg-white/10"
                data-testid="button-learn-more"
              >
                Learn More
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
                  <a href="https://calendly.com/matterhornprotects/territory" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 mr-2" />
                    Book Your Call Now
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

      {/* Client Marketing Materials Section */}
      <section className="py-20" data-testid="section-marketing-materials">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-materials-title">
              Client Marketing Materials
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Download professional marketing materials to share with your clients. These materials are designed to help you explain coverage benefits and cost savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-slate-800/50 border-slate-700 p-6 flex flex-col" data-testid="card-material-overview">
              <h3 className="text-xl font-bold text-white mb-2 text-center">Coverage Overview</h3>
              <p className="text-slate-400 mb-4 text-center flex-1">Comprehensive one-page guide explaining all nine coverage types and what they protect against.</p>
              <Button variant="outline" className="w-full border-emerald-600 text-emerald-400 hover:bg-emerald-600/20">
                <Download className="w-4 h-4 mr-2" />
                Download Overview
              </Button>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 flex flex-col" data-testid="card-material-comparison">
              <h3 className="text-xl font-bold text-white mb-2 text-center">Cost Comparison</h3>
              <p className="text-slate-400 mb-4 text-center flex-1">Detailed breakdown showing market rates vs. Matterhorn rates with $16,000 annual savings example.</p>
              <Button variant="outline" className="w-full border-emerald-600 text-emerald-400 hover:bg-emerald-600/20">
                <Download className="w-4 h-4 mr-2" />
                Download Comparison
              </Button>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 flex flex-col" data-testid="card-material-benefits">
              <h3 className="text-xl font-bold text-white mb-2 text-center">Benefits Guide</h3>
              <p className="text-slate-400 mb-4 text-center flex-1">Complete benefits guide highlighting why organizations choose Matterhorn and what's included.</p>
              <Button variant="outline" className="w-full border-emerald-600 text-emerald-400 hover:bg-emerald-600/20">
                <Download className="w-4 h-4 mr-2" />
                Download Guide
              </Button>
            </Card>
          </div>

          <Card className="bg-slate-800/50 border-slate-700 p-6" data-testid="card-how-to-use">
            <h3 className="text-xl font-bold text-white mb-4">How to Use These Materials</h3>
            <ul className="space-y-2 text-slate-400">
              <li>• <strong className="text-white">Print or Email:</strong> Each document downloads as a print-ready HTML file that can be saved as PDF or emailed directly to clients</li>
              <li>• <strong className="text-white">Customize:</strong> Open the HTML files in any editor to add your contact information and branding</li>
              <li>• <strong className="text-white">Share:</strong> Use these materials during client meetings, proposals, and renewal presentations</li>
              <li>• <strong className="text-white">Save as PDF:</strong> Open the HTML file in your browser and use Print → Save as PDF for a professional PDF document</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Broker Application Form */}
      <section id="broker-application" className="py-20 bg-slate-900/50" data-testid="section-broker-application">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-application-title">
              Become an Appointed Broker
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Join our network of specialized pickleball insurance brokers. Get access to competitive rates, comprehensive coverage options, and dedicated support.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-slate-300">Full Name *</Label>
                    <Input
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white mt-1"
                      data-testid="input-full-name"
                    />
                  </div>
                  <div>
                    <Label className="text-slate-300">Agency Name *</Label>
                    <Input
                      required
                      value={formData.agencyName}
                      onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white mt-1"
                      data-testid="input-agency-name"
                    />
                  </div>
                  <div>
                    <Label className="text-slate-300">Email Address *</Label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white mt-1"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <Label className="text-slate-300">Phone Number *</Label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white mt-1"
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <Label className="text-slate-300">License Number *</Label>
                    <Input
                      required
                      value={formData.licenseNumber}
                      onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white mt-1"
                      data-testid="input-license-number"
                    />
                  </div>
                  <div>
                    <Label className="text-slate-300">Licensed State *</Label>
                    <Select
                      value={formData.licensedState}
                      onValueChange={(value) => setFormData({ ...formData, licensedState: value })}
                    >
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white mt-1" data-testid="select-licensed-state">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {US_STATES.map((state) => (
                          <SelectItem key={state} value={state}>{state}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-slate-300">Years of Experience *</Label>
                    <Input
                      required
                      value={formData.yearsExperience}
                      onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white mt-1"
                      data-testid="input-years-experience"
                    />
                  </div>
                  <div>
                    <Label className="text-slate-300">Estimated Annual Premium Volume</Label>
                    <Select
                      value={formData.premiumVolume}
                      onValueChange={(value) => setFormData({ ...formData, premiumVolume: value })}
                    >
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white mt-1" data-testid="select-premium-volume">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-100k">Under $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                        <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                        <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="text-slate-300">Current Carriers (Optional)</Label>
                  <Input
                    value={formData.currentCarriers}
                    onChange={(e) => setFormData({ ...formData, currentCarriers: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white mt-1"
                    data-testid="input-current-carriers"
                  />
                </div>

                <div>
                  <Label className="text-slate-300">Areas of Specialization (Optional)</Label>
                  <Input
                    value={formData.specialization}
                    onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white mt-1"
                    data-testid="input-specialization"
                  />
                </div>

                <div>
                  <Label className="text-slate-300">Additional Information (Optional)</Label>
                  <Textarea
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white mt-1"
                    rows={4}
                    data-testid="textarea-additional-info"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 py-6 text-lg"
                  data-testid="button-submit-application"
                >
                  Submit Application
                </Button>
              </form>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 mt-6" data-testid="card-what-happens-next">
              <h3 className="text-xl font-bold text-white mb-4">What Happens Next?</h3>
              <ol className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">1</span>
                  <span>We'll review your application within 2-3 business days</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">2</span>
                  <span>Our team will contact you to discuss appointment details and requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">3</span>
                  <span>Complete the appointment paperwork and carrier contracting process</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">4</span>
                  <span>Receive access to our broker portal, marketing materials, and sales support</span>
                </li>
              </ol>
            </Card>
          </div>
        </div>
      </section>

      {/* 3-Step Process Section */}
      <section className="py-20" data-testid="section-process">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-process-title">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Our streamlined process gets you protected quickly without the hassle of traditional insurance applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 p-8 text-center" data-testid="card-step-1">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Complete Application</h3>
              <p className="text-slate-400 mb-4">Fill out our streamlined application form with your organization details and coverage needs.</p>
              <Badge className="bg-slate-700 text-slate-300">5-10 minutes</Badge>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-8 text-center" data-testid="card-step-2">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Receive Quote</h3>
              <p className="text-slate-400 mb-4">Get your customized quote back quickly with competitive rates tailored to your state and coverage.</p>
              <Badge className="bg-slate-700 text-slate-300">24-48 hours</Badge>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-8 text-center" data-testid="card-step-3">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Get Coverage</h3>
              <p className="text-slate-400 mb-4">Review your options, select your coverage, and get protected. Same-day processing available.</p>
              <Badge className="bg-slate-700 text-slate-300">Same day</Badge>
            </Card>
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
              onClick={() => scrollToSection("broker-application")}
              className="bg-emerald-600 hover:bg-emerald-700 px-8 py-6 text-lg"
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
    </div>
  );
}
