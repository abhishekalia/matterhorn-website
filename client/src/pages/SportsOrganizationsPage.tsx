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
  ChevronDown,
  Dumbbell,
  Bike,
  Flag,
  Timer,
  Gamepad2,
  Car,
  Waves,
  TreePine,
  Star,
  Building,
  CircleDot,
  Activity,
} from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
import fitnessCenter from "@/assets/images/fitness-center.jpg";
import trainingFacility from "@/assets/images/training-facility.jpg";
import goKarting from "@/assets/images/go-karting.jpg";
import golfSimulator from "@/assets/images/golf-simulator.jpg";
import wayneGutridgePhoto from "@assets/avatars/wayne_gutridge_avatar.png";
import isaacAllenPhoto from "@assets/avatars/isaac_allen_avatar.png";
import mikeAsselinPhoto from "@assets/avatars/mike_asselin_avatar.png";

export default function SportsOrganizationsPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const leadership = [
    {
      name: "Wayne Gutridge",
      title: "Managing Director",
      description: "A visionary leader in specialty insurance, Wayne founded Matterhorn with a mission to revolutionize program design for sports organizations.",
      territory: "National",
      photo: wayneGutridgePhoto,
    },
    {
      name: "Isaac Allen",
      title: "Managing Director",
      description: "Isaac brings deep expertise in sports risk management and carrier relationships, ensuring our programs meet evolving organizational needs.",
      territory: "National",
      photo: isaacAllenPhoto,
    },
    {
      name: "Mike Asselin",
      title: "Chief Operating Officer",
      description: "Mike's background in sports management and operational excellence drives our sports organization division's growth and success.",
      territory: "National",
      photo: mikeAsselinPhoto,
    },
  ];

  const programHighlights = [
    {
      title: "General Liability Coverage",
      limit: "Up to $5M",
      description: "Comprehensive protection against third-party claims for bodily injury, property damage, and personal injury at your facility or during activities.",
      features: ["Premises Liability", "Products Completed Operations", "Personal & Advertising Injury", "Medical Payments"],
    },
    {
      title: "Professional Liability",
      limit: "Up to $3M",
      description: "Protection for trainers, coaches, and instructors against claims of negligent instruction, improper training methods, or professional errors.",
      features: ["Instructor E&O", "Training Malpractice", "Certification Defense", "Regulatory Coverage"],
    },
    {
      title: "Property & Equipment Coverage",
      limit: "Full Replacement",
      description: "Complete protection for your facility, specialized equipment, and business personal property against damage, theft, and natural disasters.",
      features: ["Building Coverage", "Equipment Breakdown", "Business Interruption", "Inland Marine"],
    },
    {
      title: "Participant Accident Medical",
      limit: "Up to $100K",
      description: "Medical expense coverage for participants injured during activities, regardless of fault, reducing liability exposure and improving customer relations.",
      features: ["No-Fault Coverage", "Excess Medical", "Accidental Death & Dismemberment", "Dental Coverage"],
    },
    {
      title: "Directors & Officers Liability",
      limit: "Up to $2M",
      description: "Protection for board members and management against claims arising from decisions made in their official capacity.",
      features: ["Management Liability", "Employment Practices", "Fiduciary Liability", "Entity Coverage"],
    },
    {
      title: "Cyber & Crime Coverage",
      limit: "Up to $1M",
      description: "Protection against data breaches, cyber attacks, and employee dishonesty that can threaten your organization's financial stability.",
      features: ["Data Breach Response", "Ransomware Protection", "Employee Theft", "Funds Transfer Fraud"],
    },
  ];

  const organizationTypes = [
    {
      title: "Fitness Centers & Gyms",
      icon: Dumbbell,
      description: "Full-service gyms, boutique fitness studios, CrossFit boxes, and specialized workout facilities.",
      coverages: ["Equipment Liability", "Personal Training E&O", "Member Accident Coverage", "24-Hour Access Protection"],
      image: fitnessCenter,
    },
    {
      title: "Training Academies",
      icon: GraduationCap,
      description: "Elite sports training centers, skill development programs, and professional athlete training facilities.",
      coverages: ["Instructor Liability", "Student Accident", "Facility Coverage", "Tournament Protection"],
      image: trainingFacility,
    },
    {
      title: "Indoor Training Facilities",
      icon: Building,
      description: "Indoor sports complexes, practice facilities, and multi-purpose training centers with year-round operations.",
      coverages: ["Premises Liability", "Equipment Coverage", "Event Hosting", "Rental Income Protection"],
      image: trainingFacility,
    },
    {
      title: "Outdoor Training Facilities",
      icon: TreePine,
      description: "Outdoor sports fields, adventure courses, obstacle courses, and open-air training grounds.",
      coverages: ["Environmental Liability", "Weather Cancellation", "Participant Protection", "Ground Operations"],
      image: trainingFacility,
    },
    {
      title: "Golf & Sports Simulators",
      icon: Gamepad2,
      description: "High-tech simulator facilities for golf, baseball, hockey, and other sports training and entertainment.",
      coverages: ["Technology E&O", "Equipment Breakdown", "User Accident", "Data Protection"],
      image: golfSimulator,
    },
    {
      title: "Go-Karting & Racing",
      icon: Car,
      description: "Indoor and outdoor karting tracks, racing schools, and motorsport training facilities.",
      coverages: ["Racing Liability", "Vehicle Coverage", "Participant Waivers", "Event Insurance"],
      image: goKarting,
    },
    {
      title: "Sports Camps",
      icon: Tent,
      description: "Day camps, overnight camps, specialty sports camps, and summer training programs.",
      coverages: ["Camper Accident", "Abuse & Molestation", "Staff Coverage", "Travel Protection"],
      image: trainingFacility,
    },
    {
      title: "Youth Sports Organizations",
      icon: Users,
      description: "Recreational leagues, travel teams, competitive programs, and community sports organizations.",
      coverages: ["League Liability", "Volunteer Coverage", "Tournament Insurance", "Equipment Protection"],
      image: trainingFacility,
    },
    {
      title: "Martial Arts & Combat Sports",
      icon: Target,
      description: "Martial arts dojos, boxing gyms, MMA training centers, and combat sports academies.",
      coverages: ["Sparring Coverage", "Instructor Liability", "Competition Protection", "Student Accident"],
      image: fitnessCenter,
    },
    {
      title: "Aquatic Facilities",
      icon: Waves,
      description: "Swimming pools, aquatic centers, diving facilities, and water sports training centers.",
      coverages: ["Pool Liability", "Lifeguard E&O", "Drowning Coverage", "Facility Operations"],
      image: trainingFacility,
    },
    {
      title: "Dance & Gymnastics Studios",
      icon: Activity,
      description: "Dance academies, gymnastics centers, cheerleading gyms, and performance training facilities.",
      coverages: ["Performance Liability", "Student Accident", "Equipment Coverage", "Competition Protection"],
      image: fitnessCenter,
    },
    {
      title: "Sports Leagues & Associations",
      icon: Trophy,
      description: "Amateur and professional leagues, sports associations, and governing bodies.",
      coverages: ["League Operations", "D&O Coverage", "Event Insurance", "Member Protection"],
      image: trainingFacility,
    },
  ];

  const franchiseProcess = [
    {
      step: 1,
      title: "Discovery & Assessment",
      description: "We begin with a comprehensive analysis of your franchise model, understanding your brand standards, operational requirements, and risk profile across all locations.",
      details: ["Franchise structure review", "Location risk assessment", "Coverage gap analysis", "Competitive benchmarking"],
    },
    {
      step: 2,
      title: "Program Design",
      description: "Our team designs a custom insurance program that meets your brand requirements while providing flexibility for individual franchisee needs.",
      details: ["Custom policy forms", "Branded certificates", "Flexible limits", "Standardized coverage"],
    },
    {
      step: 3,
      title: "Carrier Negotiation",
      description: "We leverage our market relationships to secure the best terms, pricing, and coverage from A-rated carriers for your entire franchise network.",
      details: ["Multi-carrier quotes", "Volume discounts", "Long-term agreements", "Claims handling SLAs"],
    },
    {
      step: 4,
      title: "Implementation & Rollout",
      description: "We execute a seamless rollout across all locations with dedicated support, training, and automated enrollment systems.",
      details: ["Franchisee onboarding", "Certificate automation", "Compliance tracking", "Reporting dashboards"],
    },
    {
      step: 5,
      title: "Ongoing Management",
      description: "Continuous program management including renewals, claims advocacy, risk management support, and quarterly performance reviews.",
      details: ["Annual reviews", "Claims management", "Risk consulting", "Program optimization"],
    },
  ];

  const franchiseCaseStudy = {
    title: "National Fitness Franchise Network",
    locations: "250+ Locations",
    challenge: "A rapidly expanding fitness franchise with 250+ locations across 35 states faced fragmented insurance coverage, inconsistent pricing, and compliance challenges. Each franchisee was obtaining coverage independently, resulting in gaps, redundancies, and significant administrative burden for the corporate team.",
    solution: "Matterhorn designed a comprehensive master insurance program with standardized coverage requirements, volume-based pricing, and centralized administration. We created a branded portal for franchisee enrollment, automated certificate generation, and real-time compliance tracking.",
    implementation: [
      "Consolidated 250+ individual policies into unified program",
      "Reduced average franchisee premium by 28%",
      "Implemented automated certificate of insurance system",
      "Created franchisee onboarding training program",
      "Established 24/7 claims reporting hotline",
    ],
    results: {
      "Premium Savings": "28%",
      "Locations Unified": "250+",
      "States Covered": "35",
      "Compliance Rate": "99.5%",
      "Claims Resolution": "40% faster",
      "Admin Time Saved": "75%",
    },
    testimonial: "Matterhorn transformed our insurance program from a fragmented headache into a competitive advantage. Our franchisees now have better coverage at lower costs, and our corporate team has complete visibility into compliance across the network.",
    testimonialAuthor: "VP of Operations, National Fitness Franchise",
  };

  const whyMatterhorn = [
    {
      title: "Sports Specialty Expertise",
      description: "Deep knowledge of sports facility risks with tailored coverage solutions designed by industry veterans who understand your business.",
      icon: Award,
    },
    {
      title: "60+ Years Experience",
      description: "Over six decades of sports insurance expertise, ensuring comprehensive protection for every type of organization.",
      icon: Trophy,
    },
    {
      title: "Nationwide Coverage",
      description: "Coverage available in all 50 states with programs serving thousands of sports organizations nationwide.",
      icon: Globe,
    },
    {
      title: "Technology-Enabled",
      description: "Digital enrollment, instant certificates, and automated administration for seamless operations.",
      icon: Settings,
    },
  ];

  const caseStudies = [
    {
      title: "Multi-Location Fitness Chain",
      category: "Fitness Centers",
      challenge: "A growing fitness chain with 45 locations needed unified coverage that could scale with their expansion while maintaining compliance with varying state requirements.",
      solution: "We created a master program with automatic new location coverage, standardized limits, and a dedicated claims team familiar with fitness industry exposures.",
      results: { "Premium Savings": "32%", "Locations": "45", "Quote Time": "24hrs" },
      brokerBenefits: ["Single program administration", "Automatic expansion coverage", "Unified billing"],
      clientBenefits: ["Consistent coverage quality", "Reduced compliance burden", "Better claims experience"],
    },
    {
      title: "Elite Training Academy Network",
      category: "Training Academies",
      challenge: "A network of elite sports training academies serving professional and collegiate athletes needed specialized coverage for high-performance training activities and events.",
      solution: "Our team designed a comprehensive program including professional liability for trainers, participant accident coverage, and event-specific policies for competitions.",
      results: { "Coverage Enhanced": "3x", "Academies": "12", "Athletes Covered": "5,000+" },
      brokerBenefits: ["Specialized expertise", "Event coverage flexibility", "Risk management resources"],
      clientBenefits: ["Elite-level protection", "Athlete confidence", "Competition ready"],
    },
    {
      title: "Indoor Entertainment Complex",
      category: "Simulators & Entertainment",
      challenge: "A multi-activity entertainment complex featuring golf simulators, go-karts, and arcade games needed comprehensive coverage that addressed diverse risk exposures under one program.",
      solution: "We structured a tailored program combining general liability, equipment coverage, and participant accident protection with activity-specific endorsements.",
      results: { "Activities Covered": "8+", "Annual Visitors": "100K+", "Claims Reduction": "45%" },
      brokerBenefits: ["Multi-activity expertise", "Custom endorsements", "Streamlined renewal"],
      clientBenefits: ["Comprehensive protection", "Simplified administration", "Risk reduction support"],
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" : "bg-gradient-to-b from-white via-gray-50 to-white"}`}>
      <CustomCursor />
      <BrokerApplicationModal open={applicationModalOpen} onOpenChange={setApplicationModalOpen} />

      {/* Fixed Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${isDarkMode ? "bg-slate-950/90 border-white/10" : "bg-white/90 border-gray-200"}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer group">
                <Mountain className="w-7 h-7 text-emerald-500" />
                <div className="flex flex-col">
                  <span className={`text-xl font-bold leading-tight ${isDarkMode ? "text-white" : "text-gray-900"}`}>MATTERHORN</span>
                  <span className={`text-[10px] font-medium tracking-widest uppercase ${isDarkMode ? "text-white/60" : "text-gray-500"}`}>Insurance Group</span>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-3">
              {["Programs", "Coverage", "Franchise", "Case Studies"].map((item) => (
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
                className="bg-emerald-500 text-white"
                data-testid="button-apply-header"
              >
                Broker Application
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fitnessCenter})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-24 text-center">
          <Badge className="mb-6 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
            <Building2 className="w-3 h-3 mr-1" />
            Sports Organizations Program
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Comprehensive Coverage for
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Sports Organizations
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10">
            From fitness centers to training academies, simulators to go-kart tracks — we provide tailored insurance solutions for every type of sports organization with limits up to $5M and coverage in all 50 states.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-emerald-500 text-white"
              onClick={() => scrollToSection("programs")}
              data-testid="button-hero-explore"
            >
              Explore Programs
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 text-white backdrop-blur-sm"
              onClick={() => setApplicationModalOpen(true)}
              data-testid="button-hero-apply"
            >
              Get a Quote
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "$5M", label: "Maximum Limits" },
              { value: "50", label: "States Covered" },
              { value: "24hrs", label: "Quote Turnaround" },
              { value: "A+", label: "Rated Carriers" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-400">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section id="programs" className={`py-24 ${isDarkMode ? "bg-slate-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
              Program Highlights
            </Badge>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Comprehensive Coverage Solutions
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-white/60" : "text-gray-600"}`}>
              Our sports organizations program offers industry-leading coverage options designed to protect every aspect of your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {programHighlights.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className={`rounded-lg border ${isDarkMode ? "bg-slate-800/50 border-white/10" : "bg-white border-gray-200"}`}
                >
                  <AccordionTrigger className={`px-6 py-4 hover-elevate ${isDarkMode ? "text-white" : "text-gray-900"}`} data-testid={`accordion-${index}`}>
                    <div className="flex items-center gap-4">
                      <Shield className="w-5 h-5 text-emerald-500" />
                      <div className="text-left">
                        <div className="font-semibold">{item.title}</div>
                        <div className={`text-sm ${isDarkMode ? "text-white/50" : "text-gray-500"}`}>Limits: {item.limit}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className={`mb-4 ${isDarkMode ? "text-white/70" : "text-gray-600"}`}>{item.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {item.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          <span className={`text-sm ${isDarkMode ? "text-white/60" : "text-gray-600"}`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Who We Cover Section */}
      <section id="coverage" className={`py-24 ${isDarkMode ? "bg-slate-950" : "bg-white"}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
              Who We Cover
            </Badge>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Coverage for Every Sports Organization
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-white/60" : "text-gray-600"}`}>
              From fitness centers to racing facilities, we provide specialized coverage for the full spectrum of sports and recreational businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizationTypes.map((org, index) => {
              const IconComponent = org.icon;
              return (
                <Card key={index} className={`p-6 ${isDarkMode ? "bg-slate-800/50 border-white/10" : "bg-white border-gray-200"}`}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-emerald-500/20">
                      <IconComponent className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>{org.title}</h3>
                      <p className={`text-sm mb-4 ${isDarkMode ? "text-white/60" : "text-gray-600"}`}>{org.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {org.coverages.slice(0, 2).map((coverage, i) => (
                          <Badge key={i} variant="outline" className={`text-xs ${isDarkMode ? "border-white/20 text-white/70" : "border-gray-300 text-gray-600"}`}>
                            {coverage}
                          </Badge>
                        ))}
                        {org.coverages.length > 2 && (
                          <Badge variant="outline" className={`text-xs ${isDarkMode ? "border-emerald-500/30 text-emerald-400" : "border-emerald-500/50 text-emerald-600"}`}>
                            +{org.coverages.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Matterhorn Section */}
      <section className={`py-24 ${isDarkMode ? "bg-slate-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
              Why Matterhorn
            </Badge>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              The Matterhorn Advantage
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMatterhorn.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className={`p-6 text-center ${isDarkMode ? "bg-slate-800/50 border-white/10" : "bg-white border-gray-200"}`}>
                  <div className="inline-flex p-4 rounded-full bg-emerald-500/20 mb-4">
                    <IconComponent className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className={`font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>{item.title}</h3>
                  <p className={`text-sm ${isDarkMode ? "text-white/60" : "text-gray-600"}`}>{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Franchise Program Section */}
      <section id="franchise" className={`py-24 ${isDarkMode ? "bg-slate-950" : "bg-white"}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30">
              Franchise Programs
            </Badge>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Building Custom Franchise Insurance Programs
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? "text-white/60" : "text-gray-600"}`}>
              We specialize in designing and implementing comprehensive insurance programs for franchise networks of all sizes. Our proven process ensures consistent coverage, competitive pricing, and seamless administration across all locations.
            </p>
          </div>

          {/* Process Steps */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="relative">
              {/* Connection Line */}
              <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${isDarkMode ? "bg-purple-500/30" : "bg-purple-200"}`} />
              
              <div className="space-y-8">
                {franchiseProcess.map((step, index) => (
                  <div key={index} className="relative flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center z-10">
                      <span className="text-xl font-bold text-purple-400">{step.step}</span>
                    </div>
                    <Card className={`flex-1 p-6 ${isDarkMode ? "bg-slate-800/50 border-white/10" : "bg-white border-gray-200"}`}>
                      <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>{step.title}</h3>
                      <p className={`mb-4 ${isDarkMode ? "text-white/60" : "text-gray-600"}`}>{step.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-400" />
                            <span className={`text-sm ${isDarkMode ? "text-white/70" : "text-gray-600"}`}>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Franchise Case Study */}
          <div className="max-w-5xl mx-auto">
            <Card className={`overflow-hidden ${isDarkMode ? "bg-gradient-to-br from-purple-900/30 to-slate-800/50 border-purple-500/20" : "bg-gradient-to-br from-purple-50 to-white border-purple-200"}`}>
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                    <Star className="w-3 h-3 mr-1" />
                    Featured Case Study
                  </Badge>
                  <Badge variant="outline" className={`${isDarkMode ? "border-white/20 text-white/70" : "border-gray-300 text-gray-600"}`}>
                    {franchiseCaseStudy.locations}
                  </Badge>
                </div>

                <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {franchiseCaseStudy.title}
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className={`font-semibold mb-2 flex items-center gap-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      <Target className="w-5 h-5 text-purple-400" />
                      The Challenge
                    </h4>
                    <p className={`${isDarkMode ? "text-white/70" : "text-gray-600"}`}>{franchiseCaseStudy.challenge}</p>
                  </div>

                  <div>
                    <h4 className={`font-semibold mb-2 flex items-center gap-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      <Zap className="w-5 h-5 text-purple-400" />
                      Our Solution
                    </h4>
                    <p className={`mb-4 ${isDarkMode ? "text-white/70" : "text-gray-600"}`}>{franchiseCaseStudy.solution}</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {franchiseCaseStudy.implementation.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5" />
                          <span className={`text-sm ${isDarkMode ? "text-white/60" : "text-gray-600"}`}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-semibold mb-4 flex items-center gap-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      <TrendingUp className="w-5 h-5 text-purple-400" />
                      Results
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(franchiseCaseStudy.results).map(([key, value], i) => (
                        <div key={i} className={`p-4 rounded-lg ${isDarkMode ? "bg-slate-800/50" : "bg-purple-50"}`}>
                          <div className="text-2xl font-bold text-purple-400">{value}</div>
                          <div className={`text-sm ${isDarkMode ? "text-white/60" : "text-gray-600"}`}>{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`p-6 rounded-lg ${isDarkMode ? "bg-slate-800/50" : "bg-purple-50"}`}>
                    <p className={`italic mb-3 ${isDarkMode ? "text-white/80" : "text-gray-700"}`}>
                      "{franchiseCaseStudy.testimonial}"
                    </p>
                    <p className={`text-sm font-medium ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}>
                      — {franchiseCaseStudy.testimonialAuthor}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className={`py-24 ${isDarkMode ? "bg-slate-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
              Case Studies
            </Badge>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Real Results for Real Organizations
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-white/60" : "text-gray-600"}`}>
              See how we've helped sports organizations across the country protect their businesses and grow with confidence.
            </p>
          </div>

          {/* Case Study Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {caseStudies.map((study, index) => (
              <Button
                key={index}
                variant={activeCaseStudy === index ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCaseStudy(index)}
                className={activeCaseStudy === index ? "bg-cyan-500 text-white" : `${isDarkMode ? "border-white/20 text-white/70" : "border-gray-300 text-gray-600"}`}
                data-testid={`case-study-tab-${index}`}
              >
                {study.category}
              </Button>
            ))}
          </div>

          {/* Active Case Study */}
          <Card className={`max-w-4xl mx-auto p-8 ${isDarkMode ? "bg-slate-800/50 border-white/10" : "bg-white border-gray-200"}`}>
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                {caseStudies[activeCaseStudy].category}
              </Badge>
            </div>
            
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              {caseStudies[activeCaseStudy].title}
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className={`font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Challenge</h4>
                <p className={`${isDarkMode ? "text-white/70" : "text-gray-600"}`}>{caseStudies[activeCaseStudy].challenge}</p>
              </div>

              <div>
                <h4 className={`font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Solution</h4>
                <p className={`${isDarkMode ? "text-white/70" : "text-gray-600"}`}>{caseStudies[activeCaseStudy].solution}</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {Object.entries(caseStudies[activeCaseStudy].results).map(([key, value], i) => (
                  <div key={i} className={`text-center p-4 rounded-lg ${isDarkMode ? "bg-slate-700/50" : "bg-gray-50"}`}>
                    <div className="text-2xl font-bold text-cyan-400">{value}</div>
                    <div className={`text-sm ${isDarkMode ? "text-white/60" : "text-gray-600"}`}>{key}</div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className={`font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Broker Benefits</h4>
                  {caseStudies[activeCaseStudy].brokerBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span className={`text-sm ${isDarkMode ? "text-white/70" : "text-gray-600"}`}>{benefit}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className={`font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Client Benefits</h4>
                  {caseStudies[activeCaseStudy].clientBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className={`text-sm ${isDarkMode ? "text-white/70" : "text-gray-600"}`}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Leadership Section */}
      <section className={`py-24 ${isDarkMode ? "bg-slate-950" : "bg-white"}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
              Leadership
            </Badge>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Meet Our Team
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-white/60" : "text-gray-600"}`}>
              Industry veterans with decades of experience in sports insurance and risk management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className={`p-6 text-center ${isDarkMode ? "bg-slate-800/50 border-white/10" : "bg-white border-gray-200"}`}>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-emerald-500/30">
                  <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <h3 className={`font-semibold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>{leader.name}</h3>
                <p className="text-emerald-400 text-sm mb-3">{leader.title}</p>
                <p className={`text-sm ${isDarkMode ? "text-white/60" : "text-gray-600"}`}>{leader.description}</p>
                <Badge variant="outline" className={`mt-4 ${isDarkMode ? "border-white/20 text-white/60" : "border-gray-300 text-gray-500"}`}>
                  {leader.territory}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-24 ${isDarkMode ? "bg-gradient-to-b from-slate-900 to-slate-950" : "bg-gradient-to-b from-gray-50 to-white"}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Ready to Protect Your Sports Organization?
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-10 ${isDarkMode ? "text-white/60" : "text-gray-600"}`}>
            Get a customized quote for your organization in as little as 24 hours. Our team of specialists is ready to help you find the perfect coverage solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-emerald-500 text-white"
              onClick={() => setApplicationModalOpen(true)}
              data-testid="button-cta-apply"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className={`${isDarkMode ? "border-white/30 text-white" : "border-gray-300 text-gray-700"}`}
              data-testid="button-cta-contact"
            >
              <Phone className="mr-2 w-4 h-4" />
              1-844-600-0611
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${isDarkMode ? "bg-slate-950 border-white/10" : "bg-white border-gray-200"}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Mountain className="w-6 h-6 text-emerald-500" />
              <span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Matterhorn Insurance Group</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="mailto:support@matterhornprotects.com" className={`flex items-center gap-2 text-sm hover-elevate ${isDarkMode ? "text-white/60" : "text-gray-600"}`} data-testid="link-footer-email">
                <Mail className="w-4 h-4" />
                support@matterhornprotects.com
              </a>
              <a href="tel:1-844-600-0611" className={`flex items-center gap-2 text-sm hover-elevate ${isDarkMode ? "text-white/60" : "text-gray-600"}`} data-testid="link-footer-phone">
                <Phone className="w-4 h-4" />
                1-844-600-0611
              </a>
            </div>
            <p className={`text-sm ${isDarkMode ? "text-white/40" : "text-gray-500"}`}>
              © 2025 Matterhorn Insurance Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
