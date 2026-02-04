import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BrokerApplicationModal } from "@/components/BrokerApplicationModal";
import {
  Shield,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Mountain,
  Sun,
  Moon,
  ChevronDown,
  Star,
  Trophy,
  DollarSign,
  Clock,
  Globe,
  Zap,
  Heart,
  Target,
  FileText,
  Handshake,
} from "lucide-react";
import heroBg from "@assets/stock_images/youth_sports_hero.jpg";

export default function NAYSPartnershipPage() {
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

  const benefits = [
    {
      icon: DollarSign,
      title: "Exclusive Member Rates",
      description: "NAYS members receive preferential pricing with up to 20% savings on comprehensive youth sports coverage.",
      color: "#00ff88",
    },
    {
      icon: Shield,
      title: "Enhanced Coverage Limits",
      description: "Access to $5,000,000 CGL limits with specialized abuse & molestation coverage included.",
      color: "#00d4ff",
    },
    {
      icon: Clock,
      title: "Priority Processing",
      description: "NAYS members get expedited 24-hour quote turnaround and same-day certificate generation.",
      color: "#ff00ff",
    },
    {
      icon: Award,
      title: "NAYS Compliance Ready",
      description: "All coverage packages meet NAYS certification requirements and safety standards.",
      color: "#00ff88",
    },
    {
      icon: Users,
      title: "Volunteer Protection",
      description: "Comprehensive coverage for coaches, volunteers, and board members at no additional cost.",
      color: "#00d4ff",
    },
    {
      icon: Zap,
      title: "Digital Platform Access",
      description: "Online enrollment, instant COI generation, and real-time policy management tools.",
      color: "#ff00ff",
    },
  ];

  const testimonials = [
    {
      quote: "Matterhorn's partnership with NAYS has been transformative for our league. We saved 22% on premiums while getting better coverage.",
      author: "Sarah Mitchell",
      role: "League Director, Metro Youth Soccer",
      rating: 5,
    },
    {
      quote: "The instant certificate generation alone has saved us countless hours. Being a NAYS member made the whole process seamless.",
      author: "David Chen",
      role: "Executive Director, Pacific Coast Youth Baseball",
      rating: 5,
    },
    {
      quote: "Finally, an insurance partner that understands youth sports. The NAYS member benefits made our decision easy.",
      author: "Jennifer Adams",
      role: "President, Midwest Youth Football Alliance",
      rating: 5,
    },
  ];

  const coverageTypes = [
    "General Liability up to $5M",
    "Abuse & Molestation ($1M)",
    "Directors & Officers",
    "Participant Accident Medical",
    "Equipment & Property",
    "Event Cancellation",
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#0A1628] text-white' : 'bg-white text-gray-900'}`}>
      <BrokerApplicationModal 
        open={applicationModalOpen} 
        onOpenChange={setApplicationModalOpen} 
      />

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-[#0A1628]/90' : 'bg-white/90'} backdrop-blur-md border-b ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" data-testid="link-home-nays">
              <div className="flex items-center gap-3 cursor-pointer">
                <Mountain className="w-7 h-7 text-primary" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold leading-tight">MATTERHORN</span>
                  <span className={`text-[10px] font-medium tracking-widest uppercase ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>Insurance Group</span>
                </div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/youth-sports" className={`text-sm font-medium ${isDarkMode ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                Youth Sports
              </Link>
              <button 
                onClick={() => scrollToSection("benefits")}
                className={`text-sm font-medium ${isDarkMode ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection("coverage")}
                className={`text-sm font-medium ${isDarkMode ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
              >
                Coverage
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'} transition-colors`}
                data-testid="button-theme-toggle-nays"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Button 
                onClick={() => scrollToSection("apply")}
                className="bg-[#00ff88] text-black"
                data-testid="button-get-quote-nays"
              >
                Get NAYS Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 animate-[subtle-zoom_20s_ease-in-out_infinite_alternate]"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/95" />
        
        {/* Animated Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff88]/15 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00d4ff]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff00ff]/8 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Partnership Badge */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Handshake className="w-5 h-5 text-[#00ff88]" />
              <span className="text-sm font-medium text-white">Official NAYS Insurance Partner</span>
            </div>
          </div>

          <Badge className="mb-6 bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30 backdrop-blur-sm px-6 py-2 text-sm">
            Exclusive Member Benefits
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" data-testid="heading-nays-hero">
            <span className="inline-block">NAYS</span>
            <br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#ff00ff]">Partnership</span>
          </h1>

          <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Helping National Alliance for Youth Sports members secure the best coverage 
            at the best possible rates. Exclusive benefits designed for youth sports excellence.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00ff88]">20%</div>
              <div className="text-[11px] uppercase tracking-wider text-white/50">Member Savings</div>
            </div>
            <div className="w-[1px] h-10 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00d4ff]">$5M</div>
              <div className="text-[11px] uppercase tracking-wider text-white/50">Liability Limits</div>
            </div>
            <div className="w-[1px] h-10 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-[#ff00ff]">24hr</div>
              <div className="text-[11px] uppercase tracking-wider text-white/50">Priority Quotes</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              onClick={() => scrollToSection("apply")}
              className="bg-[#00ff88] text-black px-8 group"
              data-testid="button-nays-get-started"
            >
              Get Your NAYS Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/5 backdrop-blur-sm border-white/30 text-white px-8"
              onClick={() => scrollToSection("benefits")}
            >
              Explore Benefits
            </Button>
          </div>

          <div className="flex flex-col items-center gap-2 mt-12 animate-bounce">
            <span className="text-[9px] tracking-[0.3em] uppercase text-white/30">Scroll</span>
            <ChevronDown className="w-4 h-4 text-white/30" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 relative overflow-hidden" style={{ background: isDarkMode ? 'linear-gradient(to bottom, #0A1628, #0F1D32)' : '#f9fafb' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-80 h-80 rounded-full blur-[150px] animate-pulse bg-[#00ff88]/10" />
          <div className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full blur-[120px] animate-pulse bg-[#00d4ff]/8" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#00ff88]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00ff88]">Member Advantages</span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#00ff88]" />
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-nays-benefits">
              NAYS Member{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#ff00ff]">
                Exclusive Benefits
              </span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
              As an official NAYS insurance partner, we provide exclusive benefits designed to protect youth sports organizations while maximizing value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card 
                key={idx}
                className={`p-6 relative overflow-hidden group transition-all duration-500 ${isDarkMode ? 'bg-white/5 border-white/10 hover:border-white/20' : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg'}`}
                data-testid={`card-nays-benefit-${idx}`}
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
                  style={{ background: `linear-gradient(to right, ${benefit.color}, transparent)` }}
                />
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${benefit.color}20` }}
                >
                  <benefit.icon className="w-7 h-7" style={{ color: benefit.color }} />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{benefit.title}</h3>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="coverage" className={`py-24 ${isDarkMode ? 'bg-[#0F1D32]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30 mb-6">
                Comprehensive Protection
              </Badge>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-testid="heading-nays-coverage">
                Coverage That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">
                  Protects Everything
                </span>
              </h2>
              <p className={`text-lg mb-8 ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                NAYS members get access to our complete coverage suite with enhanced limits and preferential rates. Every policy meets NAYS certification requirements.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {coverageTypes.map((coverage, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00ff88] flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>{coverage}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className={`p-8 relative overflow-hidden ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200 shadow-xl'}`}>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#ff00ff]" />
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#00ff88]/20 mb-4" style={{ boxShadow: '0 0 40px rgba(0, 255, 136, 0.3)' }}>
                  <Trophy className="w-10 h-10 text-[#00ff88]" />
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>NAYS Member Package</h3>
                <p className={`text-sm ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>Exclusive pricing for verified members</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className={`flex justify-between items-center p-3 rounded-lg ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
                  <span className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>General Liability Limits</span>
                  <span className="font-bold text-[#00ff88]">Up to $5M</span>
                </div>
                <div className={`flex justify-between items-center p-3 rounded-lg ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
                  <span className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Abuse & Molestation</span>
                  <span className="font-bold text-[#00d4ff]">$1M Included</span>
                </div>
                <div className={`flex justify-between items-center p-3 rounded-lg ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
                  <span className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Member Discount</span>
                  <span className="font-bold text-[#ff00ff]">Up to 20%</span>
                </div>
                <div className={`flex justify-between items-center p-3 rounded-lg ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
                  <span className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Commission</span>
                  <span className="font-bold text-[#00ff88]">15%</span>
                </div>
              </div>

              <Button 
                size="lg"
                className="w-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold"
                onClick={() => scrollToSection("apply")}
                data-testid="button-nays-package-cta"
              >
                Get Your NAYS Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-24 ${isDarkMode ? 'bg-[#0A1628]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30 mb-6">
              Member Success Stories
            </Badge>
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              What NAYS Members Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card 
                key={idx}
                className={`p-6 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}`}
                data-testid={`card-testimonial-${idx}`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#00ff88] text-[#00ff88]" />
                  ))}
                </div>
                <p className={`text-sm mb-6 leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{testimonial.author}</p>
                  <p className={`text-xs ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-24 relative overflow-hidden" style={{ background: isDarkMode ? 'linear-gradient(135deg, #0A1628 0%, #0F1D32 100%)' : '#f9fafb' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[300px] animate-pulse bg-[#00ff88]/10" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Badge className="bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30 mb-6">
            Ready to Get Started?
          </Badge>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Get Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#ff00ff]">
              NAYS Member Quote
            </span>
          </h2>
          <p className={`text-lg mb-10 max-w-2xl mx-auto ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
            As a NAYS member, you qualify for exclusive rates and enhanced coverage. Start your application today and receive a quote within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              asChild
              className="bg-[#00ff88] text-black px-10 group"
              data-testid="button-nays-apply"
            >
              <a href="https://form.jotform.com/260276518705056" target="_blank" rel="noopener noreferrer">
                Start NAYS Application
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className={`px-10 ${isDarkMode ? 'bg-white/5 border-white/30 text-white' : 'border-gray-300'}`}
              onClick={() => setApplicationModalOpen(true)}
              data-testid="button-nays-contact"
            >
              <Phone className="mr-2 w-5 h-5" />
              Contact Our Team
            </Button>
          </div>

          <div className={`mt-12 flex flex-wrap items-center justify-center gap-8 p-6 rounded-2xl ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 shadow-lg'}`}>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#00ff88]" />
              <span className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>NAYS Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#00ff88]" />
              <span className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>A-Rated Carriers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#00ff88]" />
              <span className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>24hr Quotes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#00ff88]" />
              <span className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>15% Commission</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${isDarkMode ? 'bg-[#050D1A] border-t border-white/10' : 'bg-gray-100 border-t border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Mountain className="w-6 h-6 text-primary" />
              <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>MATTERHORN</span>
              <span className={`text-sm ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>× NAYS Partnership</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:18446000611" className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                <Phone className="w-4 h-4" />
                1-844-600-0611
              </a>
              <a href="mailto:support@matterhornprotects.com" className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                <Mail className="w-4 h-4" />
                support@matterhornprotects.com
              </a>
            </div>
          </div>
          <div className={`mt-8 pt-8 border-t text-center text-sm ${isDarkMode ? 'border-white/10 text-white/40' : 'border-gray-200 text-gray-500'}`}>
            © {new Date().getFullYear()} Matterhorn Insurance Group. All rights reserved. Official NAYS Insurance Partner.
          </div>
        </div>
      </footer>
    </div>
  );
}
