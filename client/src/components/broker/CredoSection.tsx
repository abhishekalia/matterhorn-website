import { Card } from "@/components/ui/card";
import { Lightbulb, Cpu, UserCheck } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const pillars = [
  {
    icon: Lightbulb,
    title: "Program Design",
    description:
      "Strategic market analysis, structure design, filings, and go-to-market planning.",
  },
  {
    icon: Cpu,
    title: "Operational AI",
    description:
      "AI-driven intake, triage, rating, and policy servicing for maximum efficiency.",
  },
  {
    icon: UserCheck,
    title: "Human Underwriting",
    description:
      "Experienced underwriters making final decisions with direct communication.",
  },
];

export function CredoSection() {
  return (
    <section
      id="about"
      className="py-24 bg-background"
      data-testid="section-credo"
    >
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-serif font-semibold mb-6"
              data-testid="text-credo-title"
            >
              Who We Are
            </h2>
            <p
              className="text-lg text-muted-foreground"
              data-testid="text-credo-description"
            >
              Matterhorn Insurance Group (MIG) works exclusively with brokers to
              design and manage specialty insurance programs. We pair modern,
              AI‑based operations with human underwriting expertise to deliver
              speed, precision, and scale.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <Card
                  className="p-8 hover-elevate transition-all duration-300 h-full"
                  data-testid={`card-pillar-${index}`}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-md flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3
                    className="text-xl font-serif font-semibold mb-3"
                    data-testid={`text-pillar-title-${index}`}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-muted-foreground"
                    data-testid={`text-pillar-description-${index}`}
                  >
                    {pillar.description}
                  </p>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
