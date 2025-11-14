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
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${matterhornHero})` }}
        data-testid="hero-background"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/90 via-[#1B2A41]/85 to-[#0A1628]/90" />
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
            className="text-base px-8 py-6 bg-primary hover:bg-primary/90"
            onClick={() => scrollToSection("contact")}
            data-testid="button-connect"
          >
            Connect with Our Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
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
