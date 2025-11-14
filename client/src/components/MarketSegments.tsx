import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import sportsImage from "@assets/generated_images/Edgy_modern_sports_visual_1cd3bb51.png";
import transportationImage from "@assets/generated_images/Edgy_transportation_visual_3a94fd09.png";
import travelImage from "@assets/generated_images/Edgy_travel_visual_cd89b49b.png";
import entertainmentImage from "@assets/generated_images/Edgy_entertainment_industry_visual_37f091ea.png";

const markets = [
  {
    id: "sports",
    name: "Sports Market",
    description: "Comprehensive coverage across all sports with 10+ A-Rated markets and fast digital submissions.",
    image: sportsImage,
    stats: [
      "10+ A-Rated Markets",
      "Participant Management System",
      "Automated Invoicing",
      "Consolidated Digital Application"
    ],
    contact: { name: "Wayne Gutridge", email: "wgutridge@matterhornprotects.com" }
  },
  {
    id: "transportation",
    name: "Transportation Market",
    description: "Programs built for independent contractors, motor carriers, and freight brokers with comprehensive coverage.",
    image: transportationImage,
    stats: [
      "17+ A-Rated Markets",
      "Driver Management System",
      "Automated Invoicing",
      "Marketing Scrapes"
    ],
    contact: { name: "Stephen Mueller", email: "smueller@matterhornprotects.com" }
  },
  {
    id: "travel",
    name: "Travel Market",
    description: "Global capacity with comprehensive suite of products and automated platform integrations.",
    image: travelImage,
    stats: [
      "8+ A-Rated Markets",
      "Embedded Platform",
      "API Integrations",
      "White Label Package"
    ],
    contact: { name: "John Warren", email: "jwarren@matterhornprotects.com" }
  },
  {
    id: "entertainment",
    name: "Entertainment Market",
    description: "Specialized coverage for live events, concerts, film production, and talent management with comprehensive protection.",
    image: entertainmentImage,
    stats: [
      "12+ A-Rated Markets",
      "Event Coverage to $50M+",
      "Production Insurance",
      "Talent & Venue Protection"
    ],
    contact: { name: "John Warren", email: "jwarren@matterhornprotects.com" }
  },
];

export default function MarketSegments() {
  const { isVisible, elementRef } = useScrollAnimation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-background" id="markets" ref={elementRef} data-testid="section-markets">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-markets">
            Curated Markets. Built-in Tech. Bigger Wins.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="description-markets">
            One application connects you to curated specialty markets for Sports, Transportation, Travel, and Entertainment with technology that delivers coverage with ease.
          </p>
        </div>

        <div className="space-y-8">
          {markets.map((market, index) => (
            <Card
              key={market.id}
              className={`overflow-hidden transition-all duration-700 group border-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 relative ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              data-testid={`market-card-${market.id}`}
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="grid md:grid-cols-2 gap-0 relative">
                <div
                  className="relative h-64 md:h-auto bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url(${market.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/70 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-white border-primary">
                      Premium Market
                    </Badge>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center relative">
                  <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors" data-testid={`market-name-${market.id}`}>
                    {market.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`market-description-${market.id}`}>
                    {market.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {market.stats.map((stat, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="justify-start p-2 text-xs border-primary/20 bg-primary/5"
                        data-testid={`market-stat-${market.id}-${idx}`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {stat}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <Button 
                      onClick={() => scrollToSection(market.id)} 
                      className="group-hover:scale-105 transition-transform"
                      data-testid={`button-explore-${market.id}`}
                    >
                      Explore Market
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <div className="text-sm">
                      <div className="text-muted-foreground">Contact</div>
                      <a
                        href={`mailto:${market.contact.email}`}
                        className="font-medium text-primary hover:underline"
                        data-testid={`link-contact-${market.id}`}
                      >
                        {market.contact.name}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
