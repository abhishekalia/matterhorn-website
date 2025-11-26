import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap, Rocket, TrendingUp, Mountain, ArrowRight, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "wouter";
import { ContactFormModal } from "./ContactFormModal";

const steps = [
  {
    icon: CheckCircle2,
    number: "01",
    title: "Apply & Get Approved",
    description: "Complete our streamlined broker application. Our team reviews and approves qualified applicants within 24 hours.",
    stat: "24h approval",
  },
  {
    icon: Zap,
    number: "02",
    title: "Instant Market Access",
    description: "Get immediate access to 30+ A-rated markets, our digital platform, and automated management tools the same day.",
    stat: "30+ markets",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Submit & Win Business",
    description: "Start submitting through our consolidated application. Our AI-powered platform matches risks to optimal markets.",
    stat: "AI-powered",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Scale Effortlessly",
    description: "Leverage automation for COI issuance, billing, and client management. Focus on growth while we handle operations.",
    stat: "100% automated",
  },
];

export default function ProcessSection() {
  const { isVisible, elementRef } = useScrollAnimation();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-32 bg-gradient-to-br from-[#0A1628] via-[#1B2A41] to-[#0A1628] relative overflow-hidden" data-testid="section-process" ref={elementRef}>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      {/* Animated light sweeps */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slower" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mountain className="w-5 h-5 text-primary" />
            <Badge className="bg-primary/20 text-white border-primary/30 backdrop-blur-sm">
              Getting Started
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="heading-process">
            Your Path to Success
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-6" data-testid="description-process">
            From application to submission in 24 hours. Our streamlined process gets you selling faster.
          </p>
          <div className="flex items-center justify-center gap-3 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-white font-medium">24h Approval</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-white font-medium">30+ Markets</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Glowing progress rail */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-cyan-400 to-primary opacity-30" />
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent blur-sm" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  data-testid={`process-step-${index}`}
                >
                  {/* Glowing waypoint */}
                  <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center">
                    <div className="absolute w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cyan-400 p-0.5 shadow-lg shadow-primary/50">
                      <div className="w-full h-full rounded-full bg-[#0A1628] flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Glassmorphic card */}
                  <div className="ml-24">
                    <Card className="p-8 bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="text-sm font-bold text-primary mb-2 tracking-wider">STEP {step.number}</div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors" data-testid={`process-title-${index}`}>
                              {step.title}
                            </h3>
                          </div>
                          <Badge className="bg-primary/20 text-white border-primary/30 text-xs">
                            {step.stat}
                          </Badge>
                        </div>
                        <p className="text-base text-white/80 leading-relaxed" data-testid={`process-description-${index}`}>
                          {step.description}
                        </p>
                      </div>

                      {/* Animated checkmark on hover */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 text-lg px-10 py-7"
            asChild
            data-testid="button-become-broker"
          >
            <Link href="/brokers">
              Become a Broker
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-7"
            onClick={() => setContactModalOpen(true)}
            data-testid="button-contact-us"
          >
            Contact Us
          </Button>
        </div>
      </div>

      <ContactFormModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen} 
      />
    </section>
  );
}
