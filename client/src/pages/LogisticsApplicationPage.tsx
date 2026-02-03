import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mountain,
  ArrowLeft,
  Upload,
  FileText,
  CheckCircle,
  Package,
  Users,
  Shield,
  Phone,
  Mail,
  ArrowRight,
  Send,
  File,
  X,
  Building2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NEON_COLORS = {
  amber: "#ffaa00",
  cyan: "#00d4ff",
  safetyGreen: "#00ff88",
};

export default function LogisticsApplicationPage() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"upload" | "digital">("digital");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted",
        description: "We've received your application and will be in touch within 24-48 hours.",
      });
      setUploadedFiles([]);
    }, 1500);
  };

  const handleDigitalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted",
        description: "Thank you! Our team will review your submission and contact you shortly.",
      });
    }, 1500);
  };

  const coverageTypes = [
    "Contingent Cargo Liability",
    "Contingent Auto Liability",
    "Errors & Omissions",
    "General Liability",
    "Cyber Liability",
  ];

  return (
    <div className="min-h-screen bg-[#0A1628] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/transportation">
              <div className="flex items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer" data-testid="link-back">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Transportation</span>
              </div>
            </Link>
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer" data-testid="link-home">
                <Mountain className="w-6 h-6 text-primary" />
                <span className="text-lg font-bold">Matterhorn</span>
              </div>
            </Link>
            <div className="w-32" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.cyan}10` }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] animate-pulse" style={{ backgroundColor: `${NEON_COLORS.amber}08` }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Badge className="mb-6 px-4 py-1.5" style={{ 
            backgroundColor: `${NEON_COLORS.cyan}20`, 
            color: NEON_COLORS.cyan, 
            borderColor: `${NEON_COLORS.cyan}40`,
          }}>
            Logistics & Freight Brokers
          </Badge>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text" style={{ 
              backgroundImage: `linear-gradient(90deg, ${NEON_COLORS.cyan}, ${NEON_COLORS.safetyGreen})`
            }}>
              Logistics + Freight Brokers
            </span>{" "}
            Application
          </h1>
          
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Specialized coverage for freight brokers and logistics companies. Protect your operations with 
            comprehensive contingent liability and E&O coverage designed for the modern supply chain.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {coverageTypes.map((coverage, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-white/60">
                <CheckCircle className="w-3 h-3" style={{ color: NEON_COLORS.safetyGreen }} />
                <span>{coverage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#0D1B2A]/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-3 py-1" style={{ 
              backgroundColor: `${NEON_COLORS.safetyGreen}20`, 
              color: NEON_COLORS.safetyGreen, 
              borderColor: `${NEON_COLORS.safetyGreen}40`,
            }}>
              How It Works
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              From Submission to Coverage
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our streamlined process gets your logistics and freight broker accounts quoted quickly—with ongoing support for your operations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Submit Application",
                desc: "Upload your existing application package or complete our digital form. Include financials, carrier agreements, and operations details.",
                color: NEON_COLORS.cyan,
              },
              {
                step: "2",
                title: "UW Review",
                desc: "Our specialized logistics underwriting team reviews your submission and evaluates the risk profile.",
                color: NEON_COLORS.amber,
              },
              {
                step: "3",
                title: "Quote or Clarification",
                desc: "You'll receive an email with either a quote from markets interested in the risk—or a request for additional details needed.",
                color: NEON_COLORS.safetyGreen,
              },
              {
                step: "4",
                title: "Client Management Setup",
                desc: "Once bound, we set up client management to organize operations and provide ongoing carrier management support.",
                color: NEON_COLORS.cyan,
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <Card className="p-6 bg-[#1B2A41]/40 border-white/10 backdrop-blur-sm h-full">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4"
                    style={{ backgroundColor: `${item.color}20`, color: item.color }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </Card>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-white/20" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 bg-[#0D1B2A] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[150px] opacity-30" style={{ backgroundColor: NEON_COLORS.cyan }} />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-[120px] opacity-20" style={{ backgroundColor: NEON_COLORS.amber }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-10">
            <Badge className="mb-4 px-3 py-1" style={{ 
              backgroundColor: `${NEON_COLORS.cyan}20`, 
              color: NEON_COLORS.cyan, 
              borderColor: `${NEON_COLORS.cyan}40`,
            }}>
              Get Started
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Apply?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Complete our streamlined digital application and receive an indication within 24-48 hours.
            </p>
          </div>

          {/* Application Card */}
          <Card className="p-8 bg-[#1B2A41]/60 border-white/10 backdrop-blur-sm max-w-xl mx-auto text-center hover-elevate overflow-visible transition-all duration-300">
            <div 
              className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: `${NEON_COLORS.cyan}20`, boxShadow: `0 0 30px ${NEON_COLORS.cyan}30` }}
            >
              <FileText className="w-8 h-8" style={{ color: NEON_COLORS.cyan }} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Logistics & Freight Broker Application</h3>
            <p className="text-white/60 text-sm mb-6">
              Our broker-friendly form is designed for speed. Apply online and our underwriting team will review your submission promptly.
            </p>
            <ul className="text-left text-sm text-white/70 space-y-2 mb-8 max-w-sm mx-auto">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: NEON_COLORS.safetyGreen }} />
                <span>Quick 10-minute application</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: NEON_COLORS.safetyGreen }} />
                <span>Auto-save progress as you go</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: NEON_COLORS.safetyGreen }} />
                <span>24-48 hour response time</span>
              </li>
            </ul>
            <Button
              size="lg"
              className="w-full group"
              asChild
              style={{ backgroundColor: NEON_COLORS.cyan }}
              data-testid="tab-digital"
            >
              <a href="https://form.jotform.com/251255738573060" target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5 mr-2" />
                Complete Digital Application
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </Card>
        </div>
      </section>

      {/* Discovery Call Section */}
      <section className="py-20 bg-gradient-to-b from-[#0D1B2A] to-[#0A1628]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-3 py-1" style={{ 
              backgroundColor: `${NEON_COLORS.amber}20`, 
              color: NEON_COLORS.amber, 
              borderColor: `${NEON_COLORS.amber}40`,
            }}>
              Talk to Our Team
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Help Getting Started?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Schedule a discovery call with our underwriting team for personalized assistance—or request a demo of our carrier management platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="p-8 bg-[#1B2A41]/50 border-white/10 backdrop-blur-sm hover-elevate overflow-visible transition-all duration-300">
              <div 
                className="w-12 h-12 rounded-md flex items-center justify-center mb-6"
                style={{ backgroundColor: `${NEON_COLORS.cyan}20` }}
              >
                <Phone className="w-6 h-6" style={{ color: NEON_COLORS.cyan }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Discovery Call</h3>
              <p className="text-white/60 text-sm mb-6">
                Connect with our UW team for assistance submitting new business. We'll walk you through our programs, appetite, and help you find the right fit for your accounts.
              </p>
              <Button 
                className="w-full group"
                asChild
              >
                <a href="mailto:support@matterhornprotects.com?subject=Discovery Call Request - Logistics">
                  Schedule a Call
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </Card>

            <Card className="p-8 bg-[#1B2A41]/50 border-white/10 backdrop-blur-sm hover-elevate overflow-visible transition-all duration-300">
              <div 
                className="w-12 h-12 rounded-md flex items-center justify-center mb-6"
                style={{ backgroundColor: `${NEON_COLORS.safetyGreen}20` }}
              >
                <Package className="w-6 h-6" style={{ color: NEON_COLORS.safetyGreen }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Platform Demo</h3>
              <p className="text-white/60 text-sm mb-6">
                See our carrier management platform in action. Request a personalized demo to learn how we streamline operations and automate ongoing support.
              </p>
              <Button 
                variant="secondary"
                className="w-full group"
                asChild
              >
                <a href="mailto:support@matterhornprotects.com?subject=Platform Demo Request - Carrier Management">
                  Request Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-4 text-white">Need Assistance?</h3>
          <p className="text-white/60 mb-6">Our logistics specialists are ready to help with your application.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:1-844-600-0611" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <Phone className="w-4 h-4" style={{ color: NEON_COLORS.cyan }} />
              <span>1-844-600-0611</span>
            </a>
            <a href="mailto:support@matterhornprotects.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <Mail className="w-4 h-4" style={{ color: NEON_COLORS.amber }} />
              <span>support@matterhornprotects.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
