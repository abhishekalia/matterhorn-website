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
          Digitally Led{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary animate-gradient">
            Program Design Shop
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto font-medium"
          data-testid="hero-subheading"
        >
          Where AI Meets Specialty Insurance Expertise
        </p>

        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed" data-testid="hero-description">
          Custom programs designed for brokers. Instant quotes. Curated markets. Technology that makes coverage effortless.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-base px-8 py-6 bg-primary hover:bg-primary/90"
            asChild
            data-testid="button-connect"
          >
            <a href="mailto:support@matterhornprotects.com">
              Connect with Our Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
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
