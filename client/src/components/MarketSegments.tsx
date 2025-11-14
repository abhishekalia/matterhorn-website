import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import sportsImage from "@assets/generated_images/Sports_field_aerial_view_3eb581a1.png";
import transportationImage from "@assets/generated_images/Transportation_truck_on_highway_2832b6de.png";
import travelImage from "@assets/generated_images/Travel_airplane_above_clouds_7d7258d4.png";

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
];

export default function MarketSegments() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-background" id="markets" data-testid="section-markets">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-markets">
            Curated Markets. Built-in Tech. Bigger Wins.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="description-markets">
            One application connects you to curated specialty markets for Sports, Transportation, and Travel with technology that delivers coverage with ease.
          </p>
        </div>

        <div className="space-y-8">
          {markets.map((market, index) => (
            <Card
              key={market.id}
              className="overflow-hidden hover-elevate transition-all group"
              data-testid={`market-card-${market.id}`}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div
                  className="relative h-64 md:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${market.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/60 to-transparent" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-foreground mb-4" data-testid={`market-name-${market.id}`}>
                    {market.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`market-description-${market.id}`}>
                    {market.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {market.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-start gap-2" data-testid={`market-stat-${market.id}-${idx}`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span className="text-sm text-foreground">{stat}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <Button onClick={() => scrollToSection(market.id)} data-testid={`button-explore-${market.id}`}>
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
