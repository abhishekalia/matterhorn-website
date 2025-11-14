import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import matterhornHero from "@assets/generated_images/Matterhorn_mountains_hero_background_315f6fa4.png";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A1628] via-[#0F1B2D] to-background">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          data-testid="hero-heading"
        >
          AI-Led Specialty Insurance
          <br />
          <span className="text-white/90">Program Design Shop</span>
        </h1>

        <p
          className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto font-medium"
          data-testid="hero-subheading"
        >
          Working Exclusively with Brokers
        </p>

        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed" data-testid="hero-description">
          We exist to make brokers unstoppable. One application connects you to curated specialty markets, custom program design, and technology that delivers coverage effortlessly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-base px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 border-2 border-primary/50"
            onClick={() => scrollToSection("contact")}
            data-testid="button-connect"
          >
            Connect with Our Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 py-6 bg-white/5 backdrop-blur-md border-2 border-primary/40 text-white hover:bg-primary/10 hover:border-primary/60 shadow-lg shadow-primary/20"
            onClick={() => scrollToSection("markets")}
            data-testid="button-view-markets"
          >
            View Our Markets
          </Button>
        </div>

        <button
          onClick={() => scrollToSection("why-matterhorn")}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 hover:text-white/90 transition-colors animate-bounce"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
