import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Cpu, Target, Mountain } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    icon: Layers,
    title: "Curated Markets",
    description: "We don't just connect you to carriers—we've hand-selected A-rated markets that understand specialty risk. Each market in our portfolio has been vetted for their appetite, responsiveness, and willingness to write the complex risks your clients bring to the table. One application opens doors to 10, 12, even 17+ markets depending on the segment.",
    highlights: [
      "A-Rated carrier partners across all segments",
      "Pre-negotiated appetites for specialty risks",
      "Markets that speak broker language",
      "Relationships built over decades"
    ]
  },
  {
    icon: Cpu,
    title: "Innovative Technology",
    description: "We built Matterhorn because brokers were drowning in administrative work. Our platform automates the tedious stuff—submissions, invoicing, participant management—so you can focus on what you do best: serving clients. Real-time quoting, API integrations, and digital workflows that actually work.",
    highlights: [
      "Automated submission and invoicing",
      "Real-time quoting and COI generation",
      "API integrations for seamless workflows",
      "Participant and driver management systems"
    ]
  },
  {
    icon: Target,
    title: "Market Expertise",
    description: "Our team has spent decades placing and rating specialty risks. We know how to present your submissions in the language carriers need to hear. When you partner with Matterhorn, you're not just getting access to markets—you're getting a team that knows how to get deals done for complex, unique clients.",
    highlights: [
      "Decades of specialty insurance experience",
      "Deep knowledge of carrier appetites",
      "Expert guidance on risk presentation",
      "Hands-on support from industry veterans"
    ]
  },
];

export default function WhyMatterhorn() {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section className="py-24 bg-card" id="why-matterhorn" ref={elementRef} data-testid="section-why-matterhorn">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mountain className="w-5 h-5 text-primary" />
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Why Choose Us
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-why-matterhorn">
            Why Matterhorn?
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto" data-testid="description-why-matterhorn">
            Three pillars that set us apart: access to the right markets, technology that works for you, and expertise that gets deals done.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card 
                key={index} 
                className={`p-8 hover-elevate transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                data-testid={`pillar-card-${index}`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-md flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4" data-testid={`pillar-title-${index}`}>
                  {pillar.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-6" data-testid={`pillar-description-${index}`}>
                  {pillar.description}
                </p>
                <ul className="space-y-2">
                  {pillar.highlights.map((highlight, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-2 text-sm text-foreground/80"
                      data-testid={`pillar-highlight-${index}-${idx}`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
