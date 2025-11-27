import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function ExpertiseSection() {
  return (
    <section className="py-24 bg-card" data-testid="section-expertise">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 text-center">
            <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
            <blockquote
              className="text-3xl md:text-4xl font-serif font-semibold mb-8"
              data-testid="text-quote"
            >
              "Technology accelerates decisions. Underwriters make them."
            </blockquote>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              data-testid="text-expertise-description"
            >
              Work directly with our experienced underwriting teams. We
              communicate and quote over email when that's fastest.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
