import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain } from "lucide-react";

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-xl text-white/80">
              Last Updated: November 2025
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-white/5 backdrop-blur-md border-white/10">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-white/80">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
                  <p className="leading-relaxed">
                    By accessing and using Matterhorn Insurance Group's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Broker Requirements</h2>
                  <p className="leading-relaxed mb-3">
                    To become an appointed broker with Matterhorn, you must:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Maintain an active insurance broker license in good standing</li>
                    <li>Have minimum required E&O insurance coverage</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Adhere to our underwriting guidelines and procedures</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Use of Platform</h2>
                  <p className="leading-relaxed">
                    Our digital platform is provided for the exclusive use of appointed brokers. You agree to use the platform only for legitimate business purposes and in accordance with our acceptable use policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                  <p className="leading-relaxed">
                    All content, features, and functionality on our platform are owned by Matterhorn Insurance Group and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                  <p className="leading-relaxed">
                    Matterhorn Insurance Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
                  <p className="leading-relaxed">
                    We reserve the right to terminate or suspend your access to our services at any time, with or without cause, with or without notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                  <p className="leading-relaxed">
                    For questions about these Terms of Service, please contact us at{" "}
                    <a 
                      href="mailto:support@matterhornprotects.com" 
                      className="text-primary hover:underline"
                      data-testid="link-terms-contact"
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
