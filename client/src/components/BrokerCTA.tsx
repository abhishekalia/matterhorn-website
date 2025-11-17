import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Mountain, Info } from "lucide-react";
import { Link } from "wouter";
import brokerBg from "@assets/stock_images/professional_busines_8bc823eb.jpg";

export default function BrokerCTA() {
  return (
    <section className="py-32 relative overflow-hidden" id="brokers" data-testid="section-broker-cta">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${brokerBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/95 via-[#1B2A41]/90 to-[#0A1628]/95" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      {/* Animated light effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mountain className="w-5 h-5 text-primary" />
            <Badge className="bg-primary/20 text-white border-primary/30 backdrop-blur-sm">
              Broker Partnership
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="heading-broker-cta">
            Getting Started with Matterhorn
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto" data-testid="description-broker-cta">
            Quick application, get approved, gain access
          </p>
        </div>

        {/* Main Content Card */}
        <Card className="p-8 md:p-12 bg-white/5 backdrop-blur-md border-white/10 mb-8">
          <p className="text-lg text-white/90 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            Ready to join Matterhorn's broker network? Simply complete the broker application below. Our team will review your submission and select top applicants for appointment. Once approved, you'll gain immediate access to Matterhorn's markets, programs, and technology.
          </p>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center text-center p-6 rounded-md bg-white/5 border border-white/10">
              <CheckCircle className="w-8 h-8 text-primary mb-3" />
              <span className="text-base font-semibold text-white">Same-day market access</span>
              <span className="text-sm text-white/60 mt-1">Immediate appointments</span>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-md bg-white/5 border border-white/10">
              <CheckCircle className="w-8 h-8 text-primary mb-3" />
              <span className="text-base font-semibold text-white">30+ A-Rated Markets</span>
              <span className="text-sm text-white/60 mt-1">Diverse specialty coverage</span>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-md bg-white/5 border border-white/10">
              <CheckCircle className="w-8 h-8 text-primary mb-3" />
              <span className="text-base font-semibold text-white">Full platform access</span>
              <span className="text-sm text-white/60 mt-1">100% digital workflow</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 w-full sm:w-auto"
              asChild
              data-testid="button-apply-now"
            >
              <a href="https://form.jotform.com/250985130794060" target="_blank" rel="noopener noreferrer">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto"
              asChild
              data-testid="button-learn-more-broker"
            >
              <Link href="/brokers">
                <Info className="mr-2 w-5 h-5" />
                Learn More About Partnership
              </Link>
            </Button>
          </div>
        </Card>

        <p className="text-center text-sm text-white/60">
          Questions? Email us at <a href="mailto:brokers@matterhornprotects.com" className="text-primary hover:underline">brokers@matterhornprotects.com</a>
        </p>
      </div>
    </section>
  );
}
