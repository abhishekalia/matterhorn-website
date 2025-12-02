import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CustomCursor from "@/components/CustomCursor";
import {
  Mountain,
  Sun,
  Moon,
  ArrowRight,
  User,
  Zap,
  MapPin,
  DollarSign,
  Star,
  Shield,
  BarChart3,
  CheckCircle,
  Phone,
  MessageCircle,
  Smartphone,
  Clock,
  FileCheck,
  TrendingUp,
  Users,
  Car,
  AlertTriangle,
  Award,
  Navigation,
  Wallet,
  Globe,
  HeadphonesIcon,
} from "lucide-react";

export default function RideSharePage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const operationSteps = [
    {
      icon: User,
      title: "Create Profile",
      description: "Upload license, insurance, and vehicle info.",
    },
    {
      icon: Zap,
      title: "Connect Instantly",
      description: "Get matched with the right coverage instantly.",
    },
    {
      icon: MapPin,
      title: "Track Real-Time",
      description: "Monitor your coverage and claims in real-time.",
    },
    {
      icon: DollarSign,
      title: "Get Paid",
      description: "Fast claims processing and quick payouts.",
    },
  ];

  const ratingFeatures = [
    {
      icon: Star,
      title: "5-Star Rating System",
      description: "Rate coverage on Response Time, Claims Processing, Customer Service, and Value.",
    },
    {
      icon: AlertTriangle,
      title: "Risk Monitoring",
      description: "Automated compliance reviews and proactive risk management alerts.",
    },
    {
      icon: BarChart3,
      title: "Performance Dashboards",
      description: "Monthly reports visible to drivers for transparent coverage insights.",
    },
  ];

  const carrierFeatures = [
    "Verified and vetted rideshare drivers (Active/Inactive status)",
    "Insurance requirements automatically validated",
    "Real-time coverage tracking & management",
    "Digital documentation & automated billing",
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#0A1628] text-white' : 'bg-white text-gray-900'}`}>
      <CustomCursor />

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-[#0A1628]/90' : 'bg-white/90'} backdrop-blur-md border-b ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" data-testid="link-home-rideshare">
              <div className="flex items-center gap-2 cursor-pointer">
                <Mountain className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold">MATTERHORN</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection("operations")}
                className={`text-sm font-medium ${isDarkMode ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                data-testid="nav-how-it-works"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection("carriers")}
                className={`text-sm font-medium ${isDarkMode ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                data-testid="nav-for-carriers"
              >
                For Fleets
              </button>
              <button 
                onClick={() => scrollToSection("drivers")}
                className={`text-sm font-medium ${isDarkMode ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                data-testid="nav-for-drivers"
              >
                For Drivers
              </button>
              <button 
                onClick={() => scrollToSection("support")}
                className={`text-sm font-medium ${isDarkMode ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                data-testid="nav-support"
              >
                Support
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'} transition-colors`}
                data-testid="button-theme-toggle-rideshare"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Button 
                onClick={() => window.open("https://form.jotform.com/250985130794060", "_blank")}
                className="hidden md:flex bg-primary hover:bg-primary/90"
                data-testid="nav-get-started"
              >
                Get Started
              </Button>
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

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-6">
                  The Future of Rideshare Insurance
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                data-testid="heading-hero-rideshare"
              >
                Drive With <span className="text-primary">Confidence.</span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className={`text-xl mb-8 leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}
                data-testid="description-hero-rideshare"
              >
                Connect instantly with comprehensive rideshare coverage. Real-time tracking, instant quotes, and seamless claims processing.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg"
                  onClick={() => window.open("https://form.jotform.com/250985130794060", "_blank")}
                  className="bg-primary hover:bg-primary/90 px-8"
                  data-testid="button-get-quote-rideshare"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("drivers")}
                  className={`${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-gray-300'}`}
                  data-testid="button-become-driver"
                >
                  Become a Driver
                </Button>
              </motion.div>

              <motion.p variants={fadeInUp} className={`text-sm ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                Trusted by 500+ Rideshare Drivers
              </motion.p>
            </motion.div>

            {/* App Interface Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <Card className={`${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} backdrop-blur-xl p-6 rounded-2xl`}>
                <div className={`${isDarkMode ? 'bg-[#0F1D32]' : 'bg-gray-100'} rounded-xl p-4`}>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Active Coverage
                    </Badge>
                    <span className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>Policy #RS-4829</span>
                  </div>
                  
                  <div className={`${isDarkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-4 mb-4`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Car className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Coverage Status</p>
                        <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>Currently Driving</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className={`${isDarkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3`}>
                      <p className={`text-xs ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>Location</p>
                      <p className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Houston, TX</p>
                    </div>
                    <div className={`${isDarkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3`}>
                      <p className={`text-xs ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>Coverage Type</p>
                      <p className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Full Commercial</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Streamlined Operations Section */}
      <section id="operations" className={`py-24 ${isDarkMode ? 'bg-[#0F1D32]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-primary font-medium mb-4">
              Streamlined Operations
            </motion.p>
            <motion.h2 
              variants={fadeInUp}
              className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              The fragmented rideshare insurance industry,<br />
              <span className="text-primary">finally unified.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              One platform for drivers, fleets, and administrators.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {operationSteps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className={`${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-gray-200 hover:shadow-lg'} backdrop-blur-xl p-6 rounded-2xl transition-all duration-300 h-full`}>
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                  <p className={`${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Assurance / Rating Section */}
      <section id="rating" className={`py-24 ${isDarkMode ? 'bg-[#0A1628]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Rating Card Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className={`${isDarkMode ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/10' : 'bg-gradient-to-br from-gray-50 to-white border-gray-200'} backdrop-blur-xl p-8 rounded-3xl`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                    <Car className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>Driver Rating</p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400'}`} />
                      ))}
                      <span className={`ml-2 font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>4.9</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Safety Score</span>
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>98%</span>
                    </div>
                    <div className={`h-2 rounded-full ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'}`}>
                      <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-primary to-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Claims Response</span>
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>95%</span>
                    </div>
                    <div className={`h-2 rounded-full ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'}`}>
                      <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-green-400 to-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Coverage Compliance</span>
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>100%</span>
                    </div>
                    <div className={`h-2 rounded-full ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'}`}>
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Rating Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp} className="text-primary font-medium mb-4">
                Quality Assurance
              </motion.p>
              <motion.h2 
                variants={fadeInUp}
                className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              >
                Trust, <span className="text-primary">Verified.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className={`text-lg mb-8 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                We've built a comprehensive rating system to ensure professional conduct and safety on every mile.
              </motion.p>

              <motion.div variants={staggerContainer} className="space-y-6">
                {ratingFeatures.map((feature, index) => (
                  <motion.div key={index} variants={fadeInUp} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className={`font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h4>
                      <p className={`${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Fleet Operators Section */}
      <section id="carriers" className={`py-24 ${isDarkMode ? 'bg-[#0F1D32]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp} className="text-primary font-medium mb-4">
                For Fleet Operators
              </motion.p>
              <motion.h2 
                variants={fadeInUp}
                className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              >
                Built for <span className="text-primary">Safety & Speed.</span>
              </motion.h2>

              <motion.ul variants={staggerContainer} className="space-y-4 mb-8">
                {carrierFeatures.map((feature, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className={`${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={fadeInUp}>
                <Button 
                  size="lg"
                  onClick={() => window.open("https://form.jotform.com/250985130794060", "_blank")}
                  className="bg-primary hover:bg-primary/90"
                  data-testid="button-register-fleet"
                >
                  Register Your Fleet
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Fleet Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className={`${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} backdrop-blur-xl p-6 rounded-2xl`}>
                <div className={`${isDarkMode ? 'bg-[#0A1628]' : 'bg-gray-100'} rounded-xl p-4`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Live Fleet View</h4>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Live
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className={`${isDarkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3 text-center`}>
                      <p className={`text-2xl font-bold text-primary`}>24</p>
                      <p className={`text-xs ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>Active Drivers</p>
                    </div>
                    <div className={`${isDarkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3 text-center`}>
                      <p className={`text-2xl font-bold text-green-400`}>98%</p>
                      <p className={`text-xs ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>Compliance</p>
                    </div>
                    <div className={`${isDarkMode ? 'bg-white/5' : 'bg-white'} rounded-lg p-3 text-center`}>
                      <p className={`text-2xl font-bold text-purple-400`}>$0</p>
                      <p className={`text-xs ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>Claims Due</p>
                    </div>
                  </div>

                  <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>Track every driver in real-time.</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fleet Management Section */}
      <section id="fleet" className={`py-24 ${isDarkMode ? 'bg-[#0A1628]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-primary font-medium mb-4">
              Unified Fleet Control
            </motion.p>
            <motion.h2 
              variants={fadeInUp}
              className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Manage Your <span className="text-primary">Entire Fleet</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Whether you're a Fleet Manager handling coverage or a Driver managing your policy, our dashboard puts you in control.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className={`${isDarkMode ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20' : 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20'} backdrop-blur-xl p-8 rounded-2xl h-full`}>
                <div className="w-14 h-14 rounded-xl bg-primary/30 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>For Fleet Managers</h3>
                <p className={`${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Manage multiple active drivers, track total coverage spend, and auto-assign policies based on driver status and needs.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className={`${isDarkMode ? 'bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-purple-500/20' : 'bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20'} backdrop-blur-xl p-8 rounded-2xl h-full`}>
                <div className="w-14 h-14 rounded-xl bg-purple-500/30 flex items-center justify-center mb-6">
                  <Car className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>For Individual Drivers</h3>
                <p className={`${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Manage your own coverage, track vehicle status, and handle consolidated billing for your insurance needs.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* For Drivers Section */}
      <section id="drivers" className={`py-24 ${isDarkMode ? 'bg-[#0F1D32]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Driver Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <Card className={`${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} backdrop-blur-xl p-6 rounded-2xl max-w-md`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Michael R.</p>
                    <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>Certified Rideshare Driver</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>4.9</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className={`${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} rounded-lg p-3`}>
                    <Award className="w-5 h-5 text-primary mb-2" />
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Verified Status</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} rounded-lg p-3`}>
                    <Shield className="w-5 h-5 text-green-400 mb-2" />
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Full Coverage</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Driver Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-1 lg:order-2"
            >
              <motion.p variants={fadeInUp} className="text-primary font-medium mb-4">
                For Rideshare Drivers
              </motion.p>
              <motion.h2 
                variants={fadeInUp}
                className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              >
                Better Coverage.<br />
                <span className="text-primary">Guaranteed Protection.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className={`text-lg mb-8 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Stop worrying about coverage gaps and claim denials. Get comprehensive rideshare insurance instantly.
              </motion.p>

              <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4 mb-8">
                <motion.div variants={fadeInUp} className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className={`${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>Instant Coverage</span>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className={`${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>Verified Status</span>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Button 
                  size="lg"
                  onClick={() => window.open("https://form.jotform.com/250985130794060", "_blank")}
                  className="bg-primary hover:bg-primary/90"
                  data-testid="button-start-driving"
                >
                  Start Driving Protected
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className={`py-24 ${isDarkMode ? 'bg-[#0A1628]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Get Covered in <span className="text-primary">Minutes.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Apply for rideshare insurance to access comprehensive coverage, real-time tracking, and instant claims processing.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              { step: "1", title: "Create Profile", description: "Upload license & insurance.", icon: User },
              { step: "2", title: "Get Verified", description: "We check documents in 24h.", icon: FileCheck },
              { step: "3", title: "Go Drive", description: "Start driving fully covered.", icon: Car },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                <p className={`${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* App Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Card className={`${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'} backdrop-blur-xl px-6 py-4 rounded-xl cursor-pointer transition-all duration-300`}>
              <div className="flex items-center gap-3">
                <Smartphone className="w-8 h-8 text-primary" />
                <div>
                  <p className={`text-xs ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>Download on the</p>
                  <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>App Store</p>
                </div>
              </div>
            </Card>
            <Card className={`${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'} backdrop-blur-xl px-6 py-4 rounded-xl cursor-pointer transition-all duration-300`}>
              <div className="flex items-center gap-3">
                <Globe className="w-8 h-8 text-primary" />
                <div>
                  <p className={`text-xs ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>Get it on</p>
                  <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Google Play</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className={`py-24 ${isDarkMode ? 'bg-[#0F1D32]' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="flex justify-center mb-6">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                24/7 Support
              </Badge>
            </motion.div>
            <motion.h2 
              variants={fadeInUp}
              className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Need help getting <span className="text-primary">set up?</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className={`text-lg mb-10 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Our team is ready to help you integrate your fleet or answer coverage questions.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                onClick={() => window.open("https://form.jotform.com/250985130794060", "_blank")}
                className="bg-primary hover:bg-primary/90"
                data-testid="button-contact-sales"
              >
                <Phone className="mr-2 w-5 h-5" />
                Contact Sales
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className={`${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-gray-300'}`}
                data-testid="button-chat-support"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat with Support
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${isDarkMode ? 'bg-[#0A1628] border-t border-white/10' : 'bg-white border-t border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Mountain className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">MATTERHORN</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="mailto:support@matterhornprotects.com" className={`text-sm ${isDarkMode ? 'text-white/60 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors`}>
                support@matterhornprotects.com
              </a>
              <span className={`${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>|</span>
              <a href="tel:1-844-600-0611" className={`text-sm ${isDarkMode ? 'text-white/60 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors`}>
                1-844-600-0611
              </a>
            </div>

            <p className={`text-sm ${isDarkMode ? 'text-white/40' : 'text-gray-400'}`}>
              © 2025 Matterhorn Protects. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
