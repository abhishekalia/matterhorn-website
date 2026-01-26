import {
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Mountain,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative overflow-hidden border-t border-white/10"
      style={{ background: '#0A1628' }}
      data-testid="footer-main"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="relative container mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          {/* Brand section - takes up more space */}
          <div className="lg:col-span-5">
            <div
              className="flex items-center gap-3 mb-6"
              data-testid="logo-footer"
            >
              <Mountain className="w-8 h-8 text-primary" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary leading-tight">MATTERHORN</span>
                <span className="text-[10px] font-medium text-primary/70 tracking-widest uppercase">Insurance Group</span>
              </div>
            </div>
            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-md">
              Specialty insurance program design and management with AI-driven
              operations. We partner with brokers to deliver innovative
              solutions across diverse sectors.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:support@matterhornprotects.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 bg-primary/20 rounded-md flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>support@matterhornprotects.com</span>
              </a>
              <a
                href="tel:+18446000611"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 bg-primary/20 rounded-md flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>1-844-600-0611</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <div className="w-9 h-9 bg-primary/20 rounded-md flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">
                Navigation
              </h4>
              <nav className="flex flex-col gap-3">
                {[
                  { id: "about", label: "About Us" },
                  { id: "programs", label: "Programs" },
                  { id: "technology", label: "Technology" },
                  { id: "markets", label: "Markets" },
                  { id: "faq", label: "FAQ" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-white/60 hover:text-white text-left transition-colors group flex items-center gap-2"
                    data-testid={`link-footer-${item.id}`}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">
                Resources
              </h4>
              <nav className="flex flex-col gap-3">
                <button
                  onClick={() => scrollToSection("case-studies")}
                  className="text-sm text-white/60 hover:text-white text-left transition-colors group flex items-center gap-2"
                  data-testid="link-footer-case-studies"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  <span>Case Studies</span>
                </button>
                <button
                  onClick={() => scrollToSection("marketing")}
                  className="text-sm text-white/60 hover:text-white text-left transition-colors group flex items-center gap-2"
                  data-testid="link-footer-marketing"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  <span>Marketing Tools</span>
                </button>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors group flex items-center gap-2"
                  data-testid="link-terms"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  <span>Terms of Service</span>
                </a>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors group flex items-center gap-2"
                  data-testid="link-privacy"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  <span>Privacy Policy</span>
                </a>
              </nav>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">
                Connect
              </h4>
              <div className="flex gap-3 mb-6">
                <a
                  href="https://www.linkedin.com/company/matterhorn-protects/posts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/10 rounded-md flex items-center justify-center transition-all group border border-white/20 hover:bg-white/20"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/10 rounded-md flex items-center justify-center transition-all group border border-white/20 hover:bg-white/20"
                  data-testid="link-twitter"
                >
                  <Twitter className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
                <p className="text-xs font-semibold mb-2 text-white uppercase tracking-wider">
                  Get Started
                </p>
                <p className="text-xs text-white/60 mb-3">
                  Ready to partner with us?
                </p>
                <Button
                  size="sm"
                  onClick={() => scrollToSection("appointment")}
                  className="w-full bg-primary hover:bg-primary/90"
                  data-testid="button-footer-cta"
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} MTRHRN Brokers. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <span>Built with precision</span>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <span>Powered by AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
