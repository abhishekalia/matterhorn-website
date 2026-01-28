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
      <section className="py-16 bg-[#0D1B2A]">
        <div className="max-w-4xl mx-auto px-6">
          {/* Tab Selector */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant={activeTab === "digital" ? "default" : "outline"}
              className={`flex items-center gap-2 ${activeTab === "digital" ? "" : "border-white/20 text-white/70"}`}
              onClick={() => setActiveTab("digital")}
              data-testid="tab-digital"
            >
              <FileText className="w-4 h-4" />
              Complete Digital Application
            </Button>
            <Button
              variant={activeTab === "upload" ? "default" : "outline"}
              className={`flex items-center gap-2 ${activeTab === "upload" ? "" : "border-white/20 text-white/70"}`}
              onClick={() => setActiveTab("upload")}
              data-testid="tab-upload"
            >
              <Upload className="w-4 h-4" />
              Upload Existing Application
            </Button>
          </div>

          {/* Upload Tab */}
          {activeTab === "upload" && (
            <Card className="p-8 bg-[#1B2A41]/60 border-white/10 backdrop-blur-sm">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2 text-white">Upload Your Application</h2>
                <p className="text-white/60">
                  Already have a completed application? Upload it here and we'll process it within 24-48 hours.
                </p>
              </div>

              <form onSubmit={handleUploadSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="upload-name" className="text-white/80">Contact Name *</Label>
                    <Input 
                      id="upload-name" 
                      required 
                      placeholder="Your full name"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                      data-testid="input-upload-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="upload-email" className="text-white/80">Email *</Label>
                    <Input 
                      id="upload-email" 
                      type="email" 
                      required 
                      placeholder="your@email.com"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                      data-testid="input-upload-email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="upload-phone" className="text-white/80">Phone</Label>
                    <Input 
                      id="upload-phone" 
                      type="tel" 
                      placeholder="(555) 123-4567"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                      data-testid="input-upload-phone"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="upload-company" className="text-white/80">Agency/Company</Label>
                    <Input 
                      id="upload-company" 
                      placeholder="Your agency name"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                      data-testid="input-upload-company"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white/80">Upload Application Documents *</Label>
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-[#00d4ff]/50 transition-colors">
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.xls,.xlsx"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                      data-testid="input-file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="w-10 h-10 mx-auto mb-4 text-white/40" />
                      <p className="text-white/70 mb-2">Drag and drop files here, or click to browse</p>
                      <p className="text-xs text-white/40">Accepted formats: PDF, DOC, DOCX, XLS, XLSX</p>
                    </label>
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div className="flex items-center gap-3">
                            <File className="w-4 h-4 text-[#00d4ff]" />
                            <span className="text-sm text-white/80">{file.name}</span>
                            <span className="text-xs text-white/40">({(file.size / 1024).toFixed(1)} KB)</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-white/40 hover:text-red-400 transition-colors"
                            data-testid={`button-remove-file-${index}`}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="upload-notes" className="text-white/80">Additional Notes</Label>
                  <Textarea 
                    id="upload-notes" 
                    placeholder="Any additional information about the submission..."
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 min-h-[100px]"
                    data-testid="input-upload-notes"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full group"
                  disabled={isSubmitting || uploadedFiles.length === 0}
                  style={{ backgroundColor: NEON_COLORS.cyan }}
                  data-testid="button-upload-submit"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          )}

          {/* Digital Form Tab */}
          {activeTab === "digital" && (
            <Card className="p-8 bg-[#1B2A41]/60 border-white/10 backdrop-blur-sm">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2 text-white">Digital Application Form</h2>
                <p className="text-white/60">
                  Complete our streamlined form and receive an indication within 24-48 hours.
                </p>
              </div>

              <form onSubmit={handleDigitalSubmit} className="space-y-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <Users className="w-5 h-5" style={{ color: NEON_COLORS.cyan }} />
                    Contact Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name" className="text-white/80">Contact Name *</Label>
                      <Input 
                        id="contact-name" 
                        required 
                        placeholder="Full name"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        data-testid="input-contact-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email" className="text-white/80">Email *</Label>
                      <Input 
                        id="contact-email" 
                        type="email" 
                        required 
                        placeholder="your@email.com"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        data-testid="input-contact-email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone" className="text-white/80">Phone *</Label>
                      <Input 
                        id="contact-phone" 
                        type="tel" 
                        required 
                        placeholder="(555) 123-4567"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        data-testid="input-contact-phone"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="agency-name" className="text-white/80">Agency Name *</Label>
                      <Input 
                        id="agency-name" 
                        required 
                        placeholder="Your agency"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        data-testid="input-agency-name"
                      />
                    </div>
                  </div>
                </div>

                {/* Business Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <Building2 className="w-5 h-5" style={{ color: NEON_COLORS.amber }} />
                    Business Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="insured-name" className="text-white/80">Named Insured *</Label>
                      <Input 
                        id="insured-name" 
                        required 
                        placeholder="Legal entity name"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        data-testid="input-insured-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mc-number" className="text-white/80">MC/FF Number</Label>
                      <Input 
                        id="mc-number" 
                        placeholder="MC/FF #"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        data-testid="input-mc-number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="annual-revenue" className="text-white/80">Annual Revenue *</Label>
                      <Input 
                        id="annual-revenue" 
                        required 
                        placeholder="e.g., $5,000,000"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        data-testid="input-annual-revenue"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="carrier-count" className="text-white/80">Number of Contracted Carriers</Label>
                      <Input 
                        id="carrier-count" 
                        type="number" 
                        placeholder="Approximate count"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        data-testid="input-carrier-count"
                      />
                    </div>
                  </div>
                </div>

                {/* Operations */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <Package className="w-5 h-5" style={{ color: NEON_COLORS.safetyGreen }} />
                    Operations
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="commodities" className="text-white/80">Primary Commodities Handled</Label>
                      <Input 
                        id="commodities" 
                        placeholder="e.g., Dry goods, refrigerated, etc."
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        data-testid="input-commodities"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="average-load" className="text-white/80">Average Load Value</Label>
                      <Input 
                        id="average-load" 
                        placeholder="e.g., $75,000"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        data-testid="input-average-load"
                      />
                    </div>
                  </div>
                </div>

                {/* Coverage Requested */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <Shield className="w-5 h-5" style={{ color: NEON_COLORS.cyan }} />
                    Coverage Requested
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {coverageTypes.map((coverage, index) => (
                      <label key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 rounded border-white/30"
                          data-testid={`checkbox-coverage-${index}`}
                        />
                        <span className="text-white/80">{coverage}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-2">
                  <Label htmlFor="additional-info" className="text-white/80">Additional Information</Label>
                  <Textarea 
                    id="additional-info" 
                    placeholder="Describe your operations, any unique exposures, or specific coverage needs..."
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 min-h-[120px]"
                    data-testid="input-additional-info"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full group"
                  disabled={isSubmitting}
                  style={{ backgroundColor: NEON_COLORS.cyan }}
                  data-testid="button-digital-submit"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-center text-xs text-white/40">
                  By submitting this form, you agree to be contacted by Matterhorn Protects regarding your application.
                </p>
              </form>
            </Card>
          )}
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
                <a href="mailto:logistics@matterhornprotects.com?subject=Discovery Call Request - Logistics">
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
                <a href="mailto:logistics@matterhornprotects.com?subject=Platform Demo Request - Carrier Management">
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
            <a href="mailto:logistics@matterhornprotects.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <Mail className="w-4 h-4" style={{ color: NEON_COLORS.amber }} />
              <span>logistics@matterhornprotects.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
