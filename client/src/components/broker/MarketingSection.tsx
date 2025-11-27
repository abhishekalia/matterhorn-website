import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Mail, BarChart3, FileText, Zap } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "List Building",
    description: "Create targeted prospect lists with AI-powered research",
  },
  {
    icon: Target,
    title: "Segmentation",
    description: "Smart audience segmentation for personalized outreach",
  },
  {
    icon: Mail,
    title: "Compliant Outreach",
    description: "Automated campaigns that follow all regulations",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Real-time performance tracking and optimization",
  },
  {
    icon: FileText,
    title: "Campaign Templates",
    description: "Pre-built templates for quick deployment",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Set it and forget it campaign automation",
  },
];

export function MarketingSection() {
  return (
    <section 
      id="marketing"
      className="py-24 relative overflow-hidden" 
      data-testid="section-marketing"
      style={{ background: 'linear-gradient(to bottom, #0A1628, #1B2A41)' }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            data-testid="text-marketing-title"
          >
            Grow Your Book with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
              AI Marketing
            </span>
          </h2>
          <p
            className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
            data-testid="text-marketing-description"
          >
            Leverage our AI-powered marketing tools to identify prospects,
            launch campaigns, and track performance—all while staying compliant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 transition-all duration-300 cursor-pointer group bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:border-primary/40"
                data-testid={`card-marketing-${index}`}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-md flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors"
                  data-testid={`text-marketing-feature-${index}`}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm text-white/70"
                  data-testid={`text-marketing-description-${index}`}
                >
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            onClick={() => console.log("Launch Campaign clicked")}
            data-testid="button-launch-campaign"
          >
            Launch a Campaign
          </Button>
        </div>
      </div>
    </section>
  );
}
