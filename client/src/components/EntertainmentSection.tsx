import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Music, Film, Mic2, Theater, Users, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const entertainmentCoverages = [
  {
    icon: Music,
    title: "Live Events & Concerts",
    description: "Comprehensive coverage for concerts, festivals, and live performances with crowd management and equipment protection.",
  },
  {
    icon: Film,
    title: "Film & Production",
    description: "Production insurance, cast coverage, equipment, and location liability for film and television projects.",
  },
  {
    icon: Mic2,
    title: "Talent & Performers",
    description: "Professional liability, accident coverage, and travel protection for performers, artists, and entertainment professionals.",
  },
  {
    icon: Theater,
    title: "Venues & Theaters",
    description: "Property, liability, and event cancellation coverage for entertainment venues, theaters, and performance spaces.",
  },
  {
    icon: Users,
    title: "Audience Protection",
    description: "Spectator liability, medical coverage, and comprehensive protection for attendees at entertainment events.",
  },
  {
    icon: Shield,
    title: "Contingency Coverage",
    description: "Event cancellation, weather protection, and non-appearance coverage for entertainment industry professionals.",
  },
];

const stats = [
  { label: "Entertainment Markets", value: "12+" },
  { label: "Event Coverage", value: "$50M+" },
  { label: "Annual Events Covered", value: "5,000+" },
];

export default function EntertainmentSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="py-24 bg-gradient-to-br from-[#0A1628] to-[#1B2A41] text-white relative overflow-hidden" 
      id="entertainment"
      ref={sectionRef}
      data-testid="section-entertainment"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slower" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge className="mb-4 bg-purple-500/20 text-white border-purple-500/30">
            Entertainment Segment
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-entertainment">
            Entertainment & Live Events Insurance
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto" data-testid="description-entertainment">
            Specialized coverage for the entertainment industry—from concerts and festivals to film production and talent management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`p-6 bg-white/5 backdrop-blur-sm border-white/10 text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid={`entertainment-stat-${index}`}
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {entertainmentCoverages.map((coverage, index) => {
            const Icon = coverage.icon;
            return (
              <Card
                key={index}
                className={`p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                data-testid={`entertainment-coverage-${index}`}
              >
                <div className="w-12 h-12 rounded-md bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3" data-testid={`entertainment-title-${index}`}>
                  {coverage.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed" data-testid={`entertainment-description-${index}`}>
                  {coverage.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '900ms' }}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Matterhorn for Entertainment?</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              The entertainment industry demands specialized insurance solutions. Our curated market access, real-time policy management, and automated claims processing ensure your events, productions, and talent are protected. From single performances to multi-day festivals, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={scrollToContact}
                data-testid="button-entertainment-contact"
              >
                Discuss Entertainment Coverage
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                data-testid="button-entertainment-markets"
              >
                View Market Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
