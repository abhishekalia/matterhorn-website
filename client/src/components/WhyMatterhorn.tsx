import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Brain, Award, Mountain, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Zap,
    title: "Product Value",
    subtitle: "Broker-Focused Efficiency",
    description: "We make insurance brokers more productive. Increase efficiency, improve performance, and overcome resource constraints to deliver better results for your clients.",
  },
  {
    icon: Brain,
    title: "Technology Innovation",
    subtitle: "AI-Powered Automation",
    description: "Leverage data across the insurance lifecycle with our AI-powered engineering applications. Unlock the value of data with open digital twin software and boost productivity.",
  },
  {
    icon: Award,
    title: "Industry Leadership",
    subtitle: "Curated Markets",
    description: "Partner with the digital delivery leader. Benefit from open standards, open-source technologies, and open APIs so data flows seamlessly across your ecosystem.",
  },
];

export default function WhyMatterhorn() {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section className="py-24 bg-card" id="why-matterhorn" ref={elementRef} data-testid="section-why-matterhorn">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mountain className="w-5 h-5 text-primary" />
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Why Choose Us
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-why-matterhorn">
            Why Matterhorn?
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto" data-testid="description-why-matterhorn">
            Fast, flexible, and built for brokers. We combine curated markets, cutting-edge technology, and industry expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className={`p-8 hover-elevate transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                data-testid={`benefit-card-${index}`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-md flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2" data-testid={`benefit-title-${index}`}>
                  {benefit.title}
                </h3>
                <p className="text-sm font-semibold text-primary mb-3" data-testid={`benefit-subtitle-${index}`}>
                  {benefit.subtitle}
                </p>
                <p className="text-foreground/70 leading-relaxed" data-testid={`benefit-description-${index}`}>
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '450ms' }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => {
              const element = document.getElementById('markets');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            data-testid="button-view-markets-why"
          >
            Explore Our Markets
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
