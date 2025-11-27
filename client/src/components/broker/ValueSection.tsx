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
    <section 
      className="py-24 relative overflow-hidden" 
      data-testid="section-value"
      style={{ background: 'linear-gradient(to bottom, #1B2A41, #0A1628)' }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              data-testid="text-value-title"
            >
              What We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
                Do
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.05} direction="up">
                <Card
                  className="p-6 transition-all duration-300 h-full bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10"
                  data-testid={`card-value-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-md flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold text-white mb-2"
                        data-testid={`text-value-title-${index}`}
                      >
                        {value.title}
                      </h3>
                      <p
                        className="text-sm text-white/70"
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
