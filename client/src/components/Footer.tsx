import { Phone, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0A1628] text-white" id="contact" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4" data-testid="footer-brand">MATTERHORN</h3>
            <p className="text-white/80 mb-4" data-testid="footer-tagline">
              Your Digital MGA in Specialty Insurance
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              AI-led specialty insurance program design shop working exclusively with brokers in Sports, Transportation, and Travel markets.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-quick-links-heading">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("why-matterhorn")}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-why-matterhorn"
                >
                  Why Matterhorn
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("markets")}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-markets"
                >
                  Markets
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("case-studies")}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-case-studies"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-team"
                >
                  Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("brokers")}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-brokers"
                >
                  Broker Appointment
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-contact-heading">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:18446000611"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                  data-testid="footer-phone"
                >
                  <Phone className="w-4 h-4" />
                  1-844-600-0611
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@matterhornprotects.com"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                  data-testid="footer-email"
                >
                  <Mail className="w-4 h-4" />
                  support@matterhornprotects.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm" data-testid="footer-copyright">
            © {new Date().getFullYear()} Matterhorn Insurance Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-white/60 hover:text-white text-sm transition-colors" data-testid="footer-privacy">
              Privacy Policy
            </button>
            <button className="text-white/60 hover:text-white text-sm transition-colors" data-testid="footer-terms">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
