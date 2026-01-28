import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronDown, Truck, Package, Zap, Users, Plane } from "lucide-react";
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
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slower" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          data-testid="hero-heading"
        >
          Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary animate-gradient">
            Hybrid MGU + MGA
          </span>{" "}
          Partner
        </h1>

        <p
          className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto font-medium"
          data-testid="hero-subheading"
        >
          Your Markets. Your Authority. Your Platform.
        </p>

        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed" data-testid="hero-description">
          Custom programs designed for brokers. Instant quotes. Curated markets. Technology that makes coverage effortless.
        </p>

        <div className="flex justify-center items-center mb-10">
          <Button
            size="lg"
            className="text-base px-10 py-6 bg-primary hover:bg-primary/90"
            onClick={() => setApplicationModalOpen(true)}
            data-testid="button-connect"
          >
            Connect with Our Team
          </Button>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href="/transportation/motor-carrier-application">
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/50 hover:text-amber-400 transition-colors cursor-pointer group" data-testid="link-motor-carrier">
              <Truck className="w-3 h-3 group-hover:scale-110 transition-transform" />
              Motor Carriers + IC
            </span>
          </Link>
          <Link href="/transportation/logistics-application">
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/50 hover:text-cyan-400 transition-colors cursor-pointer group" data-testid="link-logistics">
              <Package className="w-3 h-3 group-hover:scale-110 transition-transform" />
              Logistics + Freight Brokers
            </span>
          </Link>
          <Link href="/pickleball">
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/50 hover:text-emerald-400 transition-colors cursor-pointer group" data-testid="link-pickleball">
              <Zap className="w-3 h-3 group-hover:scale-110 transition-transform" />
              Pickleball
            </span>
          </Link>
          <Link href="/youth-sports">
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/50 hover:text-green-400 transition-colors cursor-pointer group" data-testid="link-youth-sports">
              <Users className="w-3 h-3 group-hover:scale-110 transition-transform" />
              Youth Sports
            </span>
          </Link>
          <Link href="/travel">
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/50 hover:text-sky-400 transition-colors cursor-pointer group" data-testid="link-travel">
              <Plane className="w-3 h-3 group-hover:scale-110 transition-transform" />
              Travel
            </span>
          </Link>
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
