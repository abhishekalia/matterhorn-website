import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import techImage from "@assets/generated_images/technology_realistic.jpg";

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
      className="py-24 relative overflow-hidden"
      data-testid="section-technology"
      style={{ background: 'linear-gradient(to bottom, #0A1628, #1B2A41)' }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              data-testid="text-tech-title"
            >
              Technology that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
                Fits the Client
              </span>
              —Not the Other Way Around
            </h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                  data-testid={`feature-${index}`}
                >
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-white/80">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="overflow-hidden h-96 relative group bg-white/5 backdrop-blur-md border-white/10">
            <div className="absolute inset-0">
              <img
                src={techImage}
                alt="Advanced Insurance Technology Platform"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/50 to-transparent" />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-all duration-700" />
            </div>

            <div className="relative h-full flex items-end p-8">
              <div className="space-y-2">
                <div className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
                  <span className="text-xs font-semibold text-primary tracking-wider">
                    AI-POWERED OPERATIONS
                  </span>
                </div>
                <p className="text-sm text-white/70 max-w-md">
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
