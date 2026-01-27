import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
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
          One Platform. Full Authority. Broker-First Always.
        </p>

        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="hero-description">
          Custom programs designed for brokers. Instant quotes. Curated markets. Technology that makes coverage effortless.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["Sports", "Transportation", "Travel", "Entertainment"].map((segment) => (
            <button
              key={segment}
              onClick={() => {
                const element = document.getElementById("markets");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-4 py-1.5 text-[10px] uppercase tracking-widest font-medium text-white/70 border border-white/20 rounded-full hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              data-testid={`tab-segment-${segment.toLowerCase()}`}
            >
              {segment}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-base px-8 py-6 bg-primary hover:bg-primary/90"
            onClick={() => setApplicationModalOpen(true)}
            data-testid="button-connect"
          >
            Connect with Our Team
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            onClick={() => setApplicationModalOpen(true)}
            data-testid="button-request-appointment"
          >
            Request Appointment
          </Button>
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
