import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cpu, Database, Lock, Sparkles, BarChart3, Workflow, Mountain, ArrowRight } from "lucide-react";
import { ContactFormModal } from "./ContactFormModal";

const technologies = [
  {
    icon: Sparkles,
    title: "AI-Powered Risk Matching",
    description: "Our proprietary AI engine analyzes submissions and automatically routes to optimal markets based on historical performance data.",
    badge: "AI/ML",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "End-to-end automation from submission to policy issuance. COI generation, billing, and compliance—all handled automatically.",
    badge: "Automation",
  },
  {
    icon: Database,
    title: "Real-Time Data Sync",
    description: "Driver boards, participant rosters, and policy data update in real-time across all systems. Always current, always accurate.",
    badge: "Integration",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into your book performance, market hit ratios, and revenue trends. Make data-driven decisions instantly.",
    badge: "Analytics",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-level encryption, SOC 2 compliance, and granular access controls. Your data is protected at every level.",
    badge: "Security",
  },
  {
    icon: Cpu,
    title: "API-First Platform",
    description: "Seamlessly integrate with your existing systems. Our open API connects to AMS, CRM, and accounting platforms.",
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
              Cutting-Edge Technology
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-testid="heading-technology">
            Built for the Future of Insurance
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="description-technology">
            Enterprise-grade technology stack powering the next generation of specialty insurance distribution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
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
                    {tech.badge}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold text-white mb-3" data-testid={`tech-title-${index}`}>
                  {tech.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed" data-testid={`tech-description-${index}`}>
                  {tech.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            onClick={() => setIsContactOpen(true)}
            data-testid="button-request-demo"
          >
            Request a Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
      
      <ContactFormModal 
        open={isContactOpen} 
        onOpenChange={setIsContactOpen} 
      />
    </section>
  );
}
