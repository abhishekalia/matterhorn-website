import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function ExpertiseSection() {
  return (
    <section 
      className="py-24 relative overflow-hidden" 
      data-testid="section-expertise"
      style={{ background: 'linear-gradient(to bottom, #1B2A41, #0A1628)' }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 text-center bg-white/5 backdrop-blur-md border-white/10">
            <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
            <blockquote
              className="text-3xl md:text-4xl font-bold text-white mb-8"
              data-testid="text-quote"
            >
              "Technology accelerates decisions.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
                Underwriters make them.
              </span>"
            </blockquote>
            <p
              className="text-lg text-white/80 max-w-2xl mx-auto"
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
