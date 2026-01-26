import { Badge } from "@/components/ui/badge";
import { Shield, Award, TrendingUp, CheckCircle2 } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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

        <div className="mt-12 text-center">
          <Badge
            variant="secondary"
            className="px-6 py-3 text-base bg-primary/20 text-primary border border-primary/30"
            data-testid="badge-markets-cta"
          >
            Contact us to learn about our market access for your specific risk
          </Badge>
        </div>
      </div>
    </section>
  );
}
