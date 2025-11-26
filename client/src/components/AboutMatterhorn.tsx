import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Cpu, Zap, Shield, Mountain, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ContactFormModal } from "./ContactFormModal";

const features = [
  {
    icon: Building2,
    title: "MGU + MGA Structure",
    description: "We operate as both a Managing General Underwriter and Managing General Agent, giving us unique flexibility to design and deliver specialty programs.",
  },
  {
    icon: Cpu,
    title: "AI-Driven Technology",
    description: "Our proprietary platform uses machine learning to optimize risk selection, automate workflows, and deliver real-time insights across all programs.",
  },
  {
    icon: Zap,
    title: "Design Shop Approach",
    description: "We don't just distribute insurance—we architect custom programs from the ground up, tailored to specific market needs and broker requirements.",
  },
  {
    icon: Shield,
    title: "End-to-End Control",
    description: "From underwriting authority to technology infrastructure, we control every aspect of program delivery for consistent, high-quality results.",
  },
];

export default function AboutMatterhorn() {
  const { isVisible, elementRef } = useScrollAnimation();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section 
      className="py-24 bg-gradient-to-br from-card via-background to-card relative overflow-hidden" 
      id="about"
      ref={elementRef}
      data-testid="section-about"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slower" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mountain className="w-5 h-5 text-primary" />
            <Badge className="bg-primary/10 text-primary border-primary/20">
              About Matterhorn
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-about">
            An AI-Led Insurance Design Shop
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed" data-testid="description-about">
            We're not a traditional MGA. As an MGU + MGA hybrid, we combine underwriting authority with cutting-edge AI technology to design, deliver, and manage specialty insurance programs that actually work for brokers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`p-8 hover-elevate transition-all duration-700 group relative overflow-visible ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                data-testid={`about-feature-${index}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`about-title-${index}`}>
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed" data-testid={`about-description-${index}`}>
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
          <Card className="p-10 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Built Different. Built Better.</h3>
              <p className="text-foreground/70 leading-relaxed mb-2">
                Every program we design is backed by our proprietary AI engine that continuously learns from submission data, claims history, and market performance. This means better risk selection, faster turnaround, and programs that evolve with your business.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Unlike traditional MGAs that simply place business, we architect solutions—combining underwriting expertise, technology infrastructure, and operational excellence into turnkey programs that scale.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => setContactModalOpen(true)}
                data-testid="button-learn-more-about"
              >
                Learn More About Our Approach
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <ContactFormModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen} 
      />
    </section>
  );
}
