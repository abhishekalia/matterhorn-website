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
    <section className="py-24 bg-background" data-testid="section-marketing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-serif font-semibold mb-4"
            data-testid="text-marketing-title"
          >
            Grow Your Book with AI Marketing
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
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
                className="p-6 transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] active:scale-[0.99]"
                data-testid={`card-marketing-${index}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3
                  className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors"
                  data-testid={`text-marketing-feature-${index}`}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm text-muted-foreground"
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
            className="hover:scale-105 active:scale-95 transition-transform hover:shadow-lg hover:shadow-primary/20"
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
