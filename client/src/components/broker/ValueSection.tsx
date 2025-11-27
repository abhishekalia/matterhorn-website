import { Card } from "@/components/ui/card";
import {
  BarChart3,
  Zap,
  Network,
  FileCheck,
  Code,
  TrendingUp,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const values = [
  {
    icon: BarChart3,
    title: "Program Strategy",
    description: "Market analysis, structure, filings, and go‑to‑market.",
  },
  {
    icon: Zap,
    title: "AI‑Driven Operations",
    description:
      "Intake, triage, rating, and policy servicing optimized by AI.",
  },
  {
    icon: Network,
    title: "Curated Markets",
    description:
      "Access to 30+ innovative underwriting partners for hard‑to‑place risks.",
  },
  {
    icon: FileCheck,
    title: "Agnostic Applications",
    description:
      "We accept any application and submit across our platform and carriers.",
  },
  {
    icon: Code,
    title: "Custom Intake & APIs",
    description:
      "Build bespoke forms, API connections, and in‑site purchase iframes.",
  },
  {
    icon: TrendingUp,
    title: "Broker Growth Engine",
    description:
      "AI tools to build lists and launch compliant marketing campaigns.",
  },
];

export function ValueSection() {
  return (
    <section className="py-24 bg-card" data-testid="section-value">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-serif font-semibold mb-4"
              data-testid="text-value-title"
            >
              What We Do
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.05} direction="up">
                <Card
                  className="p-6 hover-elevate transition-all duration-300 h-full"
                  data-testid={`card-value-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-serif font-semibold mb-2"
                        data-testid={`text-value-title-${index}`}
                      >
                        {value.title}
                      </h3>
                      <p
                        className="text-sm text-muted-foreground"
                        data-testid={`text-value-description-${index}`}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
