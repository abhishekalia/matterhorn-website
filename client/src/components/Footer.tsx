import { Phone, Mail, Mountain, MapPin, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <div className="flex items-center gap-2 mb-6">
              <Mountain className="w-6 h-6 text-primary" />
              <h3 className="text-3xl font-bold text-white" data-testid="footer-brand">MATTERHORN</h3>
            </div>
            <Badge className="bg-primary/20 text-white border-primary/30 backdrop-blur-sm mb-4">
              Digital MGA
            </Badge>
            <p className="text-white/80 text-base mb-6 leading-relaxed" data-testid="footer-tagline">
              AI-led specialty insurance program design shop working exclusively with brokers in Sports, Transportation, and Travel markets.
            </p>
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
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white mb-6 text-lg" data-testid="footer-quick-links-heading">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("why-matterhorn")}
                  className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  data-testid="footer-link-why-matterhorn"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Why Matterhorn
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("markets")}
                  className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  data-testid="footer-link-markets"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Our Markets
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("case-studies")}
                  className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  data-testid="footer-link-case-studies"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  data-testid="footer-link-team"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Our Team
                </button>
              </li>
              <li>
                <Link href="/brokers">
                  <button 
                    className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                    data-testid="footer-link-broker-partnership"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Broker Partnership
                  </button>
                </Link>
              </li>
            </ul>
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
