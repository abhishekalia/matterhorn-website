import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: CheckCircle2,
    number: "01",
    title: "Apply & Get Approved",
    description: "Complete our streamlined broker application. Our team reviews and approves qualified applicants within 24 hours.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Instant Market Access",
    description: "Get immediate access to 30+ A-rated markets, our digital platform, and automated management tools the same day.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Submit & Win Business",
    description: "Start submitting through our consolidated application. Our AI-powered platform matches risks to optimal markets.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Scale Effortlessly",
    description: "Leverage automation for COI issuance, billing, and client management. Focus on growth while we handle operations.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-card to-background relative overflow-hidden" data-testid="section-process">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-process">
            Your Path to Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="description-process">
            From application to submission in 24 hours. Our streamlined process gets you selling faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all group relative overflow-hidden"
                data-testid={`process-step-${index}`}
              >
                <div className="absolute top-0 right-0 text-[120px] font-bold text-primary/5 leading-none">
                  {step.number}
                </div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">{step.number}</div>
                  <h3 className="text-lg font-bold text-foreground mb-3" data-testid={`process-title-${index}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`process-description-${index}`}>
                    {step.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
