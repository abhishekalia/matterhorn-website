import { Phone, Mail, Mountain, MapPin, ArrowRight } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Footer() {
  const marketTabs = [
    { name: "Home", route: "/" },
    { name: "Transportation", route: "/transportation" },
    { name: "Sports", route: "/sports" },
    { name: "Travel", route: "/travel" },
    { name: "Entertainment", route: "/entertainment" },
  ];

  return (
    <footer className="relative overflow-hidden" id="contact" data-testid="footer">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1B2A41] to-[#0A1628]" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      {/* Animated light effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <Mountain className="w-7 h-7 text-primary" />
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-white leading-tight" data-testid="footer-brand">MATTERHORN</h3>
                <span className="text-[10px] font-medium text-white/60 tracking-widest uppercase">Insurance Group</span>
              </div>
            </div>
            <Badge className="bg-primary/20 text-white border-primary/30 backdrop-blur-sm mb-4">
              Hybrid MGU + MGA
            </Badge>
            <p className="text-white/80 text-base mb-6 leading-relaxed" data-testid="footer-tagline">
              Custom programs designed for brokers. Instant quotes. Curated markets. Technology that makes coverage effortless.
            </p>
            <div className="flex items-center gap-3">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30"
                asChild
                data-testid="footer-cta-broker"
              >
                <Link href="/brokers">
                  Become a Broker
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <a 
                href="https://linkedin.com/company/matterhorn-insurance" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-colors group"
                data-testid="footer-linkedin"
              >
                <SiLinkedin className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Markets Navigation - Micro Font Tabs */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white mb-6 text-lg" data-testid="footer-markets-heading">Markets</h4>
            <div className="flex flex-wrap gap-2">
              {marketTabs.map((tab) => (
                <Link key={tab.name} href={tab.route}>
                  <button 
                    className="text-[9px] font-semibold uppercase tracking-[0.15em] px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 text-white/70 hover:bg-primary/20 hover:border-primary/30 hover:text-white transition-all"
                    data-testid={`footer-tab-${tab.name.toLowerCase()}`}
                  >
                    {tab.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-5">
            <h4 className="font-bold text-white mb-6 text-lg" data-testid="footer-contact-heading">Get in Touch</h4>
            <Card className="p-6 bg-white/5 backdrop-blur-md border-white/10">
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:18446000611"
                    className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors group"
                    data-testid="footer-phone"
                  >
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-white/60 mb-0.5">Call us</div>
                      <div className="text-sm font-medium">1-844-600-0611</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@matterhornprotects.com"
                    className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors group"
                    data-testid="footer-email"
                  >
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-white/60 mb-0.5">Email us</div>
                      <div className="text-sm font-medium">support@matterhornprotects.com</div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-white/60 mb-0.5">Location</div>
                      <div className="text-sm font-medium">United States</div>
                    </div>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/60 text-sm" data-testid="footer-copyright">
              © {new Date().getFullYear()} Matterhorn Insurance Group. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-white/60 hover:text-primary text-sm transition-colors" data-testid="footer-privacy">
                Privacy Policy
              </Link>
              <span className="text-white/30">•</span>
              <Link href="/terms" className="text-white/60 hover:text-primary text-sm transition-colors" data-testid="footer-terms">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
