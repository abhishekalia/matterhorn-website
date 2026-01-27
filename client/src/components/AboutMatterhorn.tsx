import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbulb, Users, Rocket, Quote, Mountain, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BrokerApplicationModal } from "./BrokerApplicationModal";

const storyPoints = [
  {
    icon: Lightbulb,
    title: "The Opportunity",
    description: "We saw brokers struggling to place unique risks for complex clients. They had the relationships but lacked access to innovative carrier markets and couldn't speak the language carriers needed to hear.",
  },
  {
    icon: Users,
    title: "The Gap",
    description: "Traditional MGAs weren't built for the modern broker. Administrative headaches, slow turnarounds, and one-size-fits-all programs left specialty markets underserved and brokers frustrated.",
  },
  {
    icon: Rocket,
    title: "The Solution",
    description: "We combined decades of underwriting expertise with cutting-edge technology to create something new—a design shop that speaks both broker and carrier, built to move fast and solve real problems.",
  },
];

export default function AboutMatterhorn() {
  const { isVisible, elementRef } = useScrollAnimation();
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);

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
              Our Story
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-about">
            How Matterhorn Was Built
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed" data-testid="description-about">
            Matterhorn started with a simple observation: brokers needed more than just markets—they needed a partner who could innovate alongside them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {storyPoints.map((point, index) => {
            const Icon = point.icon;
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
                    {point.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed" data-testid={`about-description-${index}`}>
                    {point.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
          <Card className="p-10 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 italic">
                    "We founded Matterhorn because we believed the MGA space was ready for a new kind of partner. Brokers were telling us they couldn't find carriers who understood their unique clients, and carriers were telling us brokers weren't presenting risks in ways they could price. We built the bridge.
                  </blockquote>
                  <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 italic">
                    Our team has decades of experience in specialty insurance, but we're not stuck in the old ways. We combined that expertise with technology that actually makes brokers' lives easier—from automated submissions to real-time quoting. Some people said old dogs can't learn new tricks. We say the old dogs are the ones building the most innovative business in the industry."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="font-bold text-foreground text-lg">Steve Mueller</div>
                      <div className="text-primary">CEO & Co-Founder, Matterhorn Insurance Group</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '700ms' }}>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Today, Matterhorn serves brokers across Sports, Transportation, Travel, and Entertainment—bringing world-class coverage to unique market segments through innovation, technology, and deep expertise in market placing and rating.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => setApplicationModalOpen(true)}
            data-testid="button-learn-more-about"
          >
            Partner With Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      <BrokerApplicationModal 
        open={applicationModalOpen} 
        onOpenChange={setApplicationModalOpen} 
      />
    </section>
  );
}
