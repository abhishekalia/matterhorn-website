import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import techImage from "@assets/generated_images/Edgy_modern_sports_visual_1cd3bb51.png";

const features = [
  'We deploy only what each client needs—no forced "platform."',
  "APIs into carrier/broker/TPA/CRM systems.",
  "In‑site embeddable purchase flows (iframe), rapid experiments.",
  "Automated email sequences, reminders, and underwriting follow‑ups.",
  "Custom broker admin consoles—or full admin managed by us.",
];

export function TechnologySection() {
  return (
    <section
      id="technology"
      className="py-24 bg-background"
      data-testid="section-technology"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-4xl md:text-5xl font-serif font-semibold mb-6"
              data-testid="text-tech-title"
            >
              Technology that Fits the Client—Not the Other Way Around
            </h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                  data-testid={`feature-${index}`}
                >
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="overflow-hidden h-96 relative group">
            <div className="absolute inset-0">
              <img
                src={techImage}
                alt="Advanced Insurance Technology Platform"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-all duration-700" />
            </div>

            <div className="relative h-full flex items-end p-8">
              <div className="space-y-2">
                <div className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
                  <span className="text-xs font-semibold text-primary tracking-wider">
                    AI-POWERED OPERATIONS
                  </span>
                </div>
                <p className="text-sm text-muted-foreground max-w-md">
                  Cutting-edge technology stack designed specifically for modern
                  insurance program management
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
