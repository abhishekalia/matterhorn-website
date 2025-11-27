import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Code, CheckSquare } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Program Sheets",
    description: "Detailed information on all available specialty programs.",
    action: "Request Access",
  },
  {
    icon: CheckSquare,
    title: "Submission Checklist",
    description: "Comprehensive checklist for application submissions.",
    action: "Download PDF",
  },
  {
    icon: Code,
    title: "API Documentation",
    description: "Technical documentation for system integrations.",
    action: "Request Docs",
  },
  {
    icon: Download,
    title: "Application Center",
    description: "Access our online application submission portal.",
    action: "Visit Portal",
  },
];

export function ResourcesSection() {
  return (
    <section
      id="resources"
      className="py-24 relative overflow-hidden"
      data-testid="section-resources"
      style={{ background: 'linear-gradient(to bottom, #0A1628, #1B2A41)' }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            data-testid="text-resources-title"
          >
            Resources &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
              Downloads
            </span>
          </h2>
          <p
            className="text-lg text-white/80"
            data-testid="text-resources-description"
          >
            Everything you need to get started and succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card
                key={index}
                className="p-6 transition-all duration-300 bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10"
                data-testid={`card-resource-${index}`}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-md flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-2"
                  data-testid={`text-resource-title-${index}`}
                >
                  {resource.title}
                </h3>
                <p
                  className="text-sm text-white/70 mb-4"
                  data-testid={`text-resource-description-${index}`}
                >
                  {resource.description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-white/70 hover:text-white hover:bg-white/10"
                  onClick={() => console.log(`${resource.action} clicked`)}
                  data-testid={`button-resource-${index}`}
                >
                  {resource.action}
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
