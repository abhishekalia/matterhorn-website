import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen dark bg-background">
      <CustomCursor />
      <Navigation />
      
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1B2A41] to-[#0A1628]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mountain className="w-5 h-5 text-primary" />
              <Badge className="bg-primary/20 text-white border-primary/30 backdrop-blur-sm">
                Legal
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80">
              Last Updated: November 2025
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-white/5 backdrop-blur-md border-white/10">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-white/80">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                  <p className="leading-relaxed">
                    Matterhorn Insurance Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                  <p className="leading-relaxed mb-3">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Contact information (name, email address, phone number)</li>
                    <li>Business information (company name, license details)</li>
                    <li>Application and submission data</li>
                    <li>Communication preferences</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                  <p className="leading-relaxed mb-3">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Process broker applications and appointments</li>
                    <li>Provide and improve our services</li>
                    <li>Communicate with you about our services</li>
                    <li>Comply with legal obligations</li>
                    <li>Protect against fraud and unauthorized activity</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
                  <p className="leading-relaxed">
                    We do not sell your personal information. We may share your information with insurance carriers, service providers, and as required by law or to protect our rights and the rights of others.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                  <p className="leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                  <p className="leading-relaxed">
                    If you have questions about this Privacy Policy, please contact us at{" "}
                    <a 
                      href="mailto:support@matterhornprotects.com" 
                      className="text-primary hover:underline"
                      data-testid="link-privacy-contact"
                    >
                      support@matterhornprotects.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
