import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronDown, Truck, Package, Zap, Users, Plane, Mountain, Building2, ArrowRight } from "lucide-react";
import { BrokerApplicationModal } from "./BrokerApplicationModal";
import matterhornHero from "@assets/generated_images/Matterhorn_mountains_hero_background_315f6fa4.png";

export default function HeroSection() {
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-subtle-zoom"
        style={{ backgroundImage: `url(${matterhornHero})` }}
        data-testid="hero-background"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/90 via-[#1B2A41]/85 to-[#0A1628]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>
      
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/8 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '4s' }} />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-cyan-400/60 rounded-full animate-bounce" style={{ animationDuration: '3s', animationDelay: '0s' }} />
        <div className="absolute top-40 right-[15%] w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-[20%] w-1 h-1 bg-blue-400/40 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <div className="absolute top-1/3 right-[25%] w-2.5 h-2.5 bg-cyan-300/30 rounded-full animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-[10%] w-1.5 h-1.5 bg-purple-300/40 rounded-full animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />
        
        {/* Animated gradient lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        
        {/* Vertical accent lines */}
        <div className="absolute top-0 bottom-0 left-[10%] w-px bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />
        <div className="absolute top-0 bottom-0 right-[10%] w-px bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Decorative badge above heading */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/50" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/80 font-medium px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
            Specialty Insurance
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/50" />
        </div>

        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          data-testid="hero-heading"
        >
          Your{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient">
              Hybrid MGU + MGA
            </span>
            {/* Underline glow effect */}
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-purple-500/0 blur-sm" />
          </span>{" "}
          Partner
        </h1>

        <p
          className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto font-medium tracking-wide"
          data-testid="hero-subheading"
        >
          <span className="text-cyan-300">Your Markets.</span>{" "}
          <span className="text-blue-300">Your Solutions.</span>{" "}
          <span className="text-purple-300">Your Team.</span>
        </p>

        <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed" data-testid="hero-description">
          Custom programs designed for brokers. Instant quotes. Curated markets. Technology that makes coverage effortless.
        </p>

        <div className="flex justify-center items-center mb-10">
          <Button
            size="lg"
            className="relative group text-base px-12 py-7 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 text-white font-bold rounded-full overflow-visible transition-all duration-500 hover:scale-105 active:scale-95"
            style={{
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
            }}
            onClick={() => setApplicationModalOpen(true)}
            data-testid="button-connect"
          >
            {/* Animated glow ring */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
            {/* Shimmer effect */}
            <span className="absolute inset-0 rounded-full overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </span>
            <span className="relative z-10 flex items-center gap-2">
              Connect with Our Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>

        {/* Featured Programs - Enhanced */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-white/20" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-medium">Featured Programs</p>
            <div className="h-px flex-1 max-w-20 bg-gradient-to-l from-transparent to-white/20" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/transportation/motor-carrier-application">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/60 hover:text-amber-400 hover:border-amber-500/40 hover:bg-amber-500/10 transition-all duration-300 cursor-pointer group" data-testid="link-motor-carrier">
                <Truck className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                Motor Carriers
              </span>
            </Link>
            <Link href="/transportation/logistics-application">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/60 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300 cursor-pointer group" data-testid="link-logistics">
                <Package className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                Logistics
              </span>
            </Link>
            <Link href="/pickleball">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/60 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all duration-300 cursor-pointer group" data-testid="link-pickleball">
                <Zap className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                Pickleball
              </span>
            </Link>
            <Link href="/youth-sports">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/60 hover:text-green-400 hover:border-green-500/40 hover:bg-green-500/10 transition-all duration-300 cursor-pointer group" data-testid="link-youth-sports">
                <Users className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                Youth Sports
              </span>
            </Link>
            <Link href="/sports-organizations">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/60 hover:text-teal-400 hover:border-teal-500/40 hover:bg-teal-500/10 transition-all duration-300 cursor-pointer group" data-testid="link-sports-organizations">
                <Building2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                Sports Orgs
              </span>
            </Link>
            <Link href="/adventure-sports">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/60 hover:text-orange-400 hover:border-orange-500/40 hover:bg-orange-500/10 transition-all duration-300 cursor-pointer group" data-testid="link-adventure-sports">
                <Mountain className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                Adventure
              </span>
            </Link>
            <Link href="/travel">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/60 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all duration-300 cursor-pointer group" data-testid="link-travel">
                <Plane className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                Travel
              </span>
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("why-matterhorn")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white/90 transition-colors animate-bounce"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      <BrokerApplicationModal 
        open={applicationModalOpen} 
        onOpenChange={setApplicationModalOpen} 
      />
    </section>
  );
}
