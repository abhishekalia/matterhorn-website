import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Shield, Award, TrendingUp, CheckCircle2, ChevronDown, Mail } from "lucide-react";
import sportsImage from "@assets/generated_images/Professional_stadium_aerial_view_1d2bbe4c.png";
import transportationImage from "@assets/generated_images/Interstate_with_transport_trucks_cfc5f42f.png";
import travelImage from "@assets/generated_images/Airplane_over_mountains_d31d9a17.png";
import entertainmentImage from "@assets/generated_images/Videographer_at_race_track_0269301f.png";

const marketFeatures = [
  {
    icon: Shield,
    title: "A-Rated Carriers",
    description: "All programs backed by carriers rated A- or better by A.M. Best"
  },
  {
    icon: Award,
    title: "Specialty Expertise",
    description: "Deep underwriting knowledge in transportation, sports, entertainment, and travel"
  },
  {
    icon: TrendingUp,
    title: "Competitive Terms",
    description: "Leverage our volume and relationships to secure the best pricing"
  },
  {
    icon: CheckCircle2,
    title: "Quick Turnaround",
    description: "Streamlined submissions with responses in 24-48 hours"
  }
];

const marketDetails = [
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

interface MarketDetailCardProps {
  market: typeof marketDetails[0];
}

function MarketDetailCard({ market }: MarketDetailCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Card
          className="p-4 cursor-pointer bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:border-primary/40 transition-all duration-300"
          data-testid={`market-detail-${market.id}`}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={market.image}
                alt={market.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-white">{market.name}</h4>
              <p className="text-sm text-white/60 line-clamp-1">{market.description}</p>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
            />
          </div>
        </Card>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="mt-2 p-5 rounded-xl bg-white/5 border border-white/10 space-y-4">
          <p className="text-white/70 text-sm leading-relaxed">
            {market.description}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {market.stats.map((stat, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="justify-start p-2 text-xs border-primary/20 bg-primary/5 text-white/80"
                data-testid={`market-stat-${market.id}-${idx}`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                {stat}
              </Badge>
            ))}
          </div>
          <div className="pt-2 border-t border-white/10">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-white/60">Contact:</span>
              <a
                href={`mailto:${market.contact.email}`}
                className="text-primary hover:underline"
                data-testid={`market-contact-${market.id}`}
              >
                {market.contact.name}
              </a>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function MarketsSection() {
  return (
    <section
      id="markets"
      className="py-24 relative overflow-hidden"
      data-testid="section-markets"
      style={{ background: 'linear-gradient(to bottom, #1B2A41, #0A1628)' }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            data-testid="text-markets-title"
          >
            Specialty{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
              Curated Markets
            </span>
          </h2>
          <p
            className="text-lg text-white/80 max-w-3xl mx-auto mb-8"
            data-testid="text-markets-description"
          >
            Matterhorn maintains deep relationships with A-rated specialty carriers, giving brokers access to innovative underwriting for hard-to-place and specialty risks across our focus verticals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {marketFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/40 transition-all duration-300"
              data-testid={`market-feature-${index}`}
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Market Details</h3>
          <div className="space-y-3">
            {marketDetails.map((market) => (
              <MarketDetailCard key={market.id} market={market} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
