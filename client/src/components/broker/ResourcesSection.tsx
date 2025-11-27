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
      className="py-24 bg-card"
      data-testid="section-resources"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-serif font-semibold mb-4"
            data-testid="text-resources-title"
          >
            Resources & Downloads
          </h2>
          <p
            className="text-lg text-muted-foreground"
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
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-resource-${index}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3
                  className="text-lg font-serif font-semibold mb-2"
                  data-testid={`text-resource-title-${index}`}
                >
                  {resource.title}
                </h3>
                <p
                  className="text-sm text-muted-foreground mb-4"
                  data-testid={`text-resource-description-${index}`}
                >
                  {resource.description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full"
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
