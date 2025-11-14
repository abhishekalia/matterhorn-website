import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

const marketDetails = [
  {
    id: "sports",
    name: "Sports",
    markets: "10+ A-Rated Markets",
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
    name: "Transportation",
    markets: "17+ A-Rated Markets",
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
    name: "Travel",
    markets: "8+ A-Rated Markets",
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
];

export default function DetailedMarkets() {
  return (
    <section className="py-24 bg-card" data-testid="section-detailed-markets">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-detailed-markets">
            Market Segments
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="description-detailed-markets">
            Deep dive into our specialty markets with comprehensive coverage options and advanced technology
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {marketDetails.map((market, index) => (
            <AccordionItem
              key={market.id}
              value={market.id}
              id={market.id}
              className="border rounded-md"
              data-testid={`accordion-item-${market.id}`}
            >
              <AccordionTrigger className="px-6 hover:no-underline hover-elevate" data-testid={`accordion-trigger-${market.id}`}>
                <div className="flex items-center gap-4 text-left">
                  <div className="text-xl font-bold">{market.name}</div>
                  <div className="text-sm text-muted-foreground">{market.markets}</div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <Card className="p-6">
                    <h4 className="font-semibold text-foreground mb-3">Segments</h4>
                    <ul className="space-y-2">
                      {market.segments.map((segment, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm" data-testid={`segment-${market.id}-${idx}`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                          <span>{segment}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  {market.clients.length > 0 && (
                    <Card className="p-6">
                      <h4 className="font-semibold text-foreground mb-3">Clients</h4>
                      <ul className="space-y-2">
                        {market.clients.map((client, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm" data-testid={`client-${market.id}-${idx}`}>
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                            <span>{client}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  )}

                  <Card className="p-6">
                    <h4 className="font-semibold text-foreground mb-3">Coverages</h4>
                    <ul className="space-y-2">
                      {market.coverages.map((coverage, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm" data-testid={`coverage-${market.id}-${idx}`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                          <span>{coverage}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-semibold text-foreground mb-3">Tools & Technology</h4>
                    <ul className="space-y-2 mb-4">
                      {market.tools.map((tool, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm" data-testid={`tool-${market.id}-${idx}`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                          <span>{tool}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <div className="text-xs text-muted-foreground mb-1">Contact</div>
                      <div className="font-medium text-foreground mb-1">{market.contact.name}</div>
                      <a
                        href={`mailto:${market.contact.email}`}
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                        data-testid={`contact-${market.id}`}
                      >
                        <Mail className="w-3.5 h-3.5" />
                        {market.contact.email}
                      </a>
                    </div>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
