import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Mountain } from "lucide-react";

const JOTFORM_URL = "https://form.jotform.com/250985130794060";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Sectors", id: "sectors" },
    { label: "Technology", id: "technology" },
    { label: "Markets", id: "markets" },
    { label: "Programs", id: "programs" },
    { label: "Resources", id: "resources" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A1628]/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
      data-testid="header-main"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" data-testid="logo-header">
          <div className="flex items-center gap-2 cursor-pointer group">
            <Mountain className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-primary">MATTERHORN</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors"
              data-testid={`link-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden lg:flex bg-primary hover:bg-primary/90"
            data-testid="button-get-appointed-header"
          >
            <a href={JOTFORM_URL} target="_blank" rel="noopener noreferrer">
              Get Appointed
            </a>
          </Button>

          <button
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden bg-[#0A1628]/95 backdrop-blur-md border-t border-white/10"
          data-testid="mobile-menu"
        >
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2 text-left text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md"
                data-testid={`link-mobile-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              asChild
              className="mt-2 bg-primary hover:bg-primary/90"
              data-testid="button-get-appointed-mobile"
            >
              <a href={JOTFORM_URL} target="_blank" rel="noopener noreferrer">
                Get Appointed
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
