import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import brokerImage from "@assets/generated_images/Broker_partnership_handshake_a257f9da.png";

export default function BrokerCTA() {
  return (
    <section className="py-24 bg-card relative overflow-hidden" id="brokers" data-testid="section-broker-cta">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${brokerImage})` }}
      />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="heading-broker-cta">
          Getting Started with Matterhorn
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="description-broker-cta">
          Quick application, get approved, gain access
        </p>

        <div className="bg-background/50 backdrop-blur-sm border border-border rounded-md p-8 mb-8">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            Ready to join Matterhorn's broker network? Simply complete the broker application below. Our team will review your submission and select top applicants for appointment. Once approved, you'll gain immediate access to Matterhorn's markets, programs, and technology.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Same-day market access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Immediate appointments</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Full platform access</span>
            </div>
          </div>
        </div>

        <Button size="lg" className="text-base px-8 py-6" asChild data-testid="button-apply-now">
          <a href="https://form.jotform.com/250985130794060" target="_blank" rel="noopener noreferrer">
            Get Appointed
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
