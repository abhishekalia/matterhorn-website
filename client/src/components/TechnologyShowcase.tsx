import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck, Code2, Puzzle, Sparkles, LayoutDashboard, Cog, Mountain, ArrowRight } from "lucide-react";
import { ContactFormModal } from "./ContactFormModal";

const capabilities = [
  {
    icon: Cog,
    title: "Custom Technology Solutions",
    description: "We're not a pre-set platform. We work with brokers and clients to design, build, or select the best technology stack for each product's unique requirements.",
    badge: "Adaptable",
  },
  {
    icon: Sparkles,
    title: "AI-Enhanced Development",
    description: "We use AI to enhance our system developments—automating workflows, improving risk matching, and continuously learning from data to deliver smarter solutions.",
    badge: "AI-Powered",
  },
  {
    icon: Truck,
    title: "Driver Management Systems",
    description: "Industry-leading driver management for the transportation sector. Massive efficiency gains and full customization to automate process steps that used to be entirely manual.",
    badge: "Transportation",
  },
  {
    icon: Puzzle,
    title: "Embedded Product Integration",
    description: "We help brokers embed insurance products directly into client offerings—seamless integration that makes coverage part of the customer experience, not an afterthought.",
    badge: "Integration",
  },
  {
    icon: LayoutDashboard,
    title: "Custom POS Dashboards",
    description: "Tailored point-of-sale dashboards designed for your specific products. Give your team and clients the exact tools they need to quote, bind, and manage policies efficiently.",
    badge: "Customization",
  },
  {
    icon: Code2,
    title: "API & Platform Flexibility",
    description: "Open APIs, white-label options, and platform integrations that connect to your existing systems. We build technology that fits your workflow, not the other way around.",
    badge: "Developer",
  },
];

export default function TechnologyShowcase() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  return (
    <section className="py-24 bg-gradient-to-br from-[#0A1628] to-[#1B2A41] text-white relative overflow-hidden" data-testid="section-technology">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mountain className="w-5 h-5 text-primary" />
            <Badge className="bg-primary/20 text-white border-primary/30">
              Technology That Adapts
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-testid="heading-technology">
            Built Around Your Needs
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="description-technology">
            We use technology to deliver and manage complex client cases. No cookie-cutter platforms—we design, build, and customize solutions that fit how you actually work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all group"
                data-testid={`tech-card-${index}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-md bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-primary/20 text-white border-primary/30 text-xs">
                    {cap.badge}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold text-white mb-3" data-testid={`tech-title-${index}`}>
                  {cap.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed" data-testid={`tech-description-${index}`}>
                  {cap.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16">
          <Card className="p-8 md:p-10 bg-white/5 backdrop-blur-sm border-white/10">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Technology That Works For You</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                Every broker and client is different. That's why we don't force you into a one-size-fits-all system. Whether you need a full driver management platform, an embedded quoting widget, or a custom dashboard for a specific product line—we build it.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                Our team combines deep insurance expertise with modern development practices. We automate the manual work that slows you down and create tools that make complex cases manageable.
              </p>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                onClick={() => setIsContactOpen(true)}
                data-testid="button-request-demo"
              >
                Let's Talk Technology
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
      
      <ContactFormModal 
        open={isContactOpen} 
        onOpenChange={setIsContactOpen} 
      />
    </section>
  );
}
