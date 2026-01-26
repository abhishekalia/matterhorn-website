import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ArrowRight, Mountain, ChevronDown, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import sportsImage from "@assets/generated_images/Professional_stadium_aerial_view_1d2bbe4c.png";
import transportationImage from "@assets/generated_images/Interstate_with_transport_trucks_cfc5f42f.png";
import travelImage from "@assets/generated_images/Airplane_over_mountains_d31d9a17.png";
import entertainmentImage from "@assets/generated_images/Videographer_at_race_track_0269301f.png";

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
    segments: [
      "Pro Sports",
      "Amateur Sports",
      "Youth Sports",
      "Collegiate Sports",
      "E-sports",
      "Adventure Sports"
    ],
    clients: [
      "People",
      "Organizations",
      "Events",
      "Facilities"
    ],
    coverages: [
      "General Liability",
      "Accident Medical + ADD",
      "Travel",
      "Property + Gear",
      "Contingency",
      "Embedded"
    ],
    tools: [
      "Participant Management System",
      "Automated Invoicing",
      "Marketing Scrapes",
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
    segments: [
      "Independent Contractors - Occupational Accident, NTL, Physical Damage, EO/DO",
      "Motor Carriers - General Liability, Commercial Auto, Non-Trucking Liability, Motor Truck Cargo",
      "Freight Brokers - General Liability, Truck Broker Liability, Contingent Auto, Cargo Liability"
    ],
    clients: [],
    coverages: [
      "Occupational Accident",
      "Commercial Auto Liability",
      "Motor Truck Cargo",
      "Physical Damage",
      "Workers Compensation",
      "Errors & Omissions",
      "Cyber"
    ],
    tools: [
      "Driver Management System",
      "Automated Invoicing",
      "Marketing Scrapes",
      "Consolidated Digital Application"
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
    segments: [
      "Sports, Recreation, Leisure",
      "Academic",
      "Corporate",
      "High Risk/Adventure",
      "Non-Profit + Faith Based"
    ],
    clients: [],
    coverages: [
      "Trip Protection",
      "Medical + Emergency",
      "Baggage + Equipment",
      "Adventure Travel",
      "Custom Design"
    ],
    tools: [
      "Embedded Platform",
      "Automated Digital Management",
      "API Platform Integrations",
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
    segments: [
      "Live Events & Concerts",
      "Film & Television Production",
      "Talent & Performers",
      "Venues & Theaters",
      "Festivals & Special Events",
      "Production Companies"
    ],
    clients: [
      "Event Producers",
      "Talent Agencies",
      "Production Companies",
      "Venue Operators"
    ],
    coverages: [
      "Event Cancellation",
      "General Liability",
      "Production Insurance",
      "Equipment & Property",
      "Non-Appearance",
      "Weather Protection",
      "Audience Protection"
    ],
    tools: [
      "Event Coverage Management",
      "Automated Policy Issuance",
      "Real-time COI Generation",
      "Consolidated Digital Application"
    ],
    contact: { name: "John Warren", email: "jwarren@matterhornprotects.com" }
  },
];

interface MarketCardProps {
  market: typeof markets[0];
  index: number;
  isVisible: boolean;
}

function MarketCard({ market, index, isVisible }: MarketCardProps) {
  const [isSegmentsOpen, setIsSegmentsOpen] = useState(false);
  const [isCoveragesOpen, setIsCoveragesOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  return (
    <Card
      className={`overflow-hidden transition-all duration-700 group border-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 relative ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
      data-testid={`market-card-${market.id}`}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="grid md:grid-cols-2 gap-0 relative">
        <div
          className="relative h-64 md:h-auto min-h-[300px] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
          style={{ backgroundImage: `url(${market.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/70 to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary/90 text-white border-primary">
              Premium Market
            </Badge>
          </div>
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center relative">
          <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors" data-testid={`market-name-${market.id}`}>
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

          <div className="space-y-2 mb-6">
            <Collapsible open={isSegmentsOpen} onOpenChange={setIsSegmentsOpen}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between text-sm text-white/70 hover:bg-white/10 hover:text-primary transition-colors border border-white/10"
                  data-testid={`button-segments-${market.id}`}
                >
                  <span>Segments ({market.segments.length})</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isSegmentsOpen ? "rotate-180" : ""}`}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 p-3 bg-white/5 rounded-md border border-white/10">
                <ul className="space-y-1.5">
                  {market.segments.map((segment, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-white/80" data-testid={`segment-${market.id}-${idx}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>{segment}</span>
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={isCoveragesOpen} onOpenChange={setIsCoveragesOpen}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between text-sm text-white/70 hover:bg-white/10 hover:text-primary transition-colors border border-white/10"
                  data-testid={`button-coverages-${market.id}`}
                >
                  <span>Coverages ({market.coverages.length})</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isCoveragesOpen ? "rotate-180" : ""}`}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 p-3 bg-white/5 rounded-md border border-white/10">
                <ul className="space-y-1.5">
                  {market.coverages.map((coverage, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-white/80" data-testid={`coverage-${market.id}-${idx}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                      <span>{coverage}</span>
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={isToolsOpen} onOpenChange={setIsToolsOpen}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between text-sm text-white/70 hover:bg-white/10 hover:text-primary transition-colors border border-white/10"
                  data-testid={`button-tools-${market.id}`}
                >
                  <span>Tools & Technology ({market.tools.length})</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isToolsOpen ? "rotate-180" : ""}`}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 p-3 bg-white/5 rounded-md border border-white/10">
                <ul className="space-y-1.5">
                  {market.tools.map((tool, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-white/80" data-testid={`tool-${market.id}-${idx}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button 
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
                className="flex items-center gap-1.5 font-medium text-primary hover:underline"
                data-testid={`link-contact-${market.id}`}
              >
                <Mail className="w-3.5 h-3.5" />
                {market.contact.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function MarketSegments() {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section className="py-24 bg-background" id="markets" ref={elementRef} data-testid="section-markets">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mountain className="w-5 h-5 text-primary" />
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Our Markets
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-markets">
            Curated Markets. Built-in Tech. Bigger Wins.
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto" data-testid="description-markets">
            One application connects you to curated specialty markets for Sports, Transportation, Travel, and Entertainment with technology that delivers coverage with ease.
          </p>
        </div>

        <div className="space-y-8">
          {markets.map((market, index) => (
            <MarketCard
              key={market.id}
              market={market}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
