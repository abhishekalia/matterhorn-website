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
} from "lucide-react";
import CustomCursor from "@/components/CustomCursor";

export default function TravelPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [tripCost, setTripCost] = useState("");
  const [isBrokerSale, setIsBrokerSale] = useState(false);

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
      description: "Get up to 75% of your trip cost back if you cancel for literally any reason—no questions asked.",
    },
    {
      icon: Zap,
      badge: "60-Second Quotes",
      title: "Instant Coverage",
      description: "Enter your trip details. Get a quote instantly. Purchase and receive your policy documents in under a minute.",
    },
    {
      icon: Globe,
      badge: "Full Trip Coverage",
      title: "Comprehensive Protection",
      description: "Medical emergencies, trip delays, baggage loss, evacuations—we've got you covered from departure to return.",
    },
    {
      icon: HeadphonesIcon,
      badge: "Always There",
      title: "24/7 Global Support",
      description: "Emergency assistance anywhere in the world, anytime. Speak with real humans who actually help.",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Get Your Quote",
      description: "Answer a few quick questions about your trip. See your price instantly—no email signup required.",
    },
    {
      step: "02",
      title: "Choose Your Coverage",
      description: "Select from Essential, Enhanced, or Premium protection. Customize with add-ons that fit your needs.",
    },
    {
      step: "03",
      title: "Travel Protected",
      description: "Receive your policy documents via email in under 60 seconds. Access 24/7 support from anywhere.",
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
            "Up to 75% reimbursement (Essential) or 100% (Enhanced/Premium)",
            "Must cancel 48+ hours before departure",
          ],
        },
        {
          title: "Trip Interruption",
          items: [
            "Return home early for any covered reason",
            "Up to 75% of trip cost (Essential) or 150% (Premium)",
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
      quote: "Had to cancel our Italy trip last minute due to a family emergency. Matterhorn's CFAR coverage reimbursed 75% of our $12,000 trip within a week. No hassle, no questions asked.",
      author: "Sarah M.",
      location: "San Francisco",
    },
    {
      quote: "Got sick in Thailand and needed medical evacuation. Matterhorn's 24/7 team arranged everything and covered the $45,000 bill. Can't imagine traveling without them now.",
      author: "James T.",
      location: "Toronto",
    },
    {
      quote: "The quote process took literally 60 seconds. Bought my policy right in the checkout of my travel booking. So easy compared to other insurance sites.",
      author: "Emily R.",
      location: "New York",
    },
  ];

  const faqs = [
    {
      question: "What does 'Cancel For Any Reason' actually mean?",
      answer: "CFAR coverage allows you to cancel your trip for literally any reason and receive up to 75% (Essential) or 100% (Enhanced/Premium) of your non-refundable trip costs back. You must cancel at least 48 hours before your scheduled departure date.",
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

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-[#0A1628]/90' : 'bg-white/90'} backdrop-blur-md border-b ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" data-testid="link-home-travel">
              <div className="flex items-center gap-2 cursor-pointer">
                <Mountain className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold">MATTERHORN</span>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'} transition-colors`}
                data-testid="button-theme-toggle"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className={`relative min-h-screen flex items-center justify-center pt-20 ${isDarkMode ? 'bg-gradient-to-b from-[#0A1628] via-[#0F1D32] to-[#0A1628]' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full ${isDarkMode ? 'bg-primary/10' : 'bg-primary/5'} blur-3xl`} />
          <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full ${isDarkMode ? 'bg-purple-500/10' : 'bg-purple-500/5'} blur-3xl`} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-hero">
            TRAVEL PROTECTED.<br />
            <span className="text-primary">TRAVEL CONFIDENT.</span>
          </h1>

          <p className={`text-xl mb-10 max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`} data-testid="description-hero">
            Cancel For Any Reason travel insurance designed for modern travelers. Get a quote in 60 seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg"
              onClick={() => scrollToSection("quote")}
              className="bg-primary hover:bg-primary/90 px-8"
              data-testid="button-get-instant-quote"
            >
              Get Instant Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("how-it-works")}
              className={`px-8 ${isDarkMode ? 'border-white/30 text-white hover:bg-white/10' : ''}`}
              data-testid="button-how-it-works"
            >
              How It Works
            </Button>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span className={`text-sm font-medium ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>A-Rated Carriers</span>
            </div>
            <span className={`hidden md:block ${isDarkMode ? 'text-white/30' : 'text-gray-300'}`}>|</span>
            <div className="flex items-center gap-2">
              <HeadphonesIcon className="w-5 h-5 text-primary" />
              <span className={`text-sm font-medium ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>24/7 Support</span>
            </div>
            <span className={`hidden md:block ${isDarkMode ? 'text-white/30' : 'text-gray-300'}`}>|</span>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className={`text-sm font-medium ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>60-Second Quotes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-24 ${isDarkMode ? 'bg-[#0F1D32]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              WHY CHOOSE US
            </Badge>
          </div>

          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-why-choose">
              TRAVEL INSURANCE THAT<br />
              <span className="text-primary">ACTUALLY MAKES SENSE</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              No fine print surprises. No hidden fees. Just smart protection when you need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((feature, index) => (
              <Card 
                key={index}
                className={`p-6 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} hover-elevate`}
                data-testid={`card-feature-${index}`}
              >
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                  {feature.badge}
                </Badge>
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
        </div>
      </section>

      {/* Instant Pricing / Quote Form Section */}
      <section id="quote" className={`py-24 ${isDarkMode ? 'bg-[#0A1628]' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              INSTANT PRICING
            </Badge>
          </div>

          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-quote">
              GET YOUR QUOTE IN 60 SECONDS
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              No email required. See your price instantly.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === 1 ? 'bg-primary text-white' : isDarkMode ? 'bg-white/10 text-white/50' : 'bg-gray-200 text-gray-500'}`}>
                  {step}
                </div>
                {step < 4 && <div className={`w-8 h-0.5 ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>

          <Card className={`p-8 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}`}>
            <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Trip Details
            </h3>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label className={isDarkMode ? 'text-white' : ''}>Destination</Label>
                <Select>
                  <SelectTrigger className={isDarkMode ? 'bg-white/5 border-white/20 text-white' : ''} data-testid="select-destination">
                    <SelectValue placeholder="Select destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {destinations.map((dest) => (
                      <SelectItem key={dest} value={dest.toLowerCase().replace(/\//g, '-').replace(/\s+/g, '-')}>
                        {dest}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className={isDarkMode ? 'text-white' : ''}>Trip Cost</Label>
                <div className="relative">
                  <span className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>$</span>
                  <Input
                    type="number"
                    placeholder="Include flights, hotels, tours, and activities"
                    value={tripCost}
                    onChange={(e) => setTripCost(e.target.value)}
                    className={`pl-7 ${isDarkMode ? 'bg-white/5 border-white/20 text-white placeholder:text-white/40' : ''}`}
                    data-testid="input-trip-cost"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className={isDarkMode ? 'text-white' : ''}>Departure Date</Label>
                  <Input
                    type="date"
                    className={isDarkMode ? 'bg-white/5 border-white/20 text-white' : ''}
                    data-testid="input-departure-date"
                  />
                </div>
                <div className="space-y-2">
                  <Label className={isDarkMode ? 'text-white' : ''}>Return Date</Label>
                  <Input
                    type="date"
                    className={isDarkMode ? 'bg-white/5 border-white/20 text-white' : ''}
                    data-testid="input-return-date"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="broker-sale"
                  checked={isBrokerSale}
                  onCheckedChange={(checked) => setIsBrokerSale(checked as boolean)}
                  data-testid="checkbox-broker-sale"
                />
                <Label htmlFor="broker-sale" className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  This is a broker sale
                </Label>
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90"
                data-testid="button-continue"
              >
                Continue
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </Card>
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
              THREE STEPS TO PEACE OF MIND
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
      <section className={`py-24 ${isDarkMode ? 'bg-[#0A1628]' : 'bg-white'}`}>
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
              TRUSTED BY TRAVELERS WORLDWIDE
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
                    onClick={() => scrollToSection('quote')}
                    className={`text-sm hover:text-primary transition-colors ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}
                  >
                    Get Quote
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
                  Broker Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
