import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
      data-testid="nav-main"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-2xl font-bold text-primary">MATTERHORN</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="flex items-center gap-1 text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md transition-colors"
                  data-testid="button-solutions-menu"
                >
                  Solutions <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem
                  onClick={() => scrollToSection("sports")}
                  data-testid="menu-item-sports"
                >
                  Sports
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => scrollToSection("transportation")}
                  data-testid="menu-item-transportation"
                >
                  Transportation
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => scrollToSection("travel")}
                  data-testid="menu-item-travel"
                >
                  Travel
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => scrollToSection("brokers")}
              className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md transition-colors"
              data-testid="button-brokers"
            >
              Brokers
            </button>

            <button
              onClick={() => scrollToSection("case-studies")}
              className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md transition-colors"
              data-testid="button-case-studies"
            >
              Case Studies
            </button>

            <button
              onClick={() => scrollToSection("team")}
              className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md transition-colors"
              data-testid="button-team"
            >
              Team
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md transition-colors"
              data-testid="button-contact"
            >
              Contact
            </button>

            <Button asChild data-testid="button-get-appointed">
              <a href="https://form.jotform.com/250985130794060" target="_blank" rel="noopener noreferrer">
                Get Appointed
              </a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 space-y-2">
            <button
              onClick={() => scrollToSection("sports")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover-elevate rounded-md"
              data-testid="mobile-menu-sports"
            >
              Sports
            </button>
            <button
              onClick={() => scrollToSection("transportation")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover-elevate rounded-md"
              data-testid="mobile-menu-transportation"
            >
              Transportation
            </button>
            <button
              onClick={() => scrollToSection("travel")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover-elevate rounded-md"
              data-testid="mobile-menu-travel"
            >
              Travel
            </button>
            <button
              onClick={() => scrollToSection("brokers")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover-elevate rounded-md"
              data-testid="mobile-menu-brokers"
            >
              Brokers
            </button>
            <button
              onClick={() => scrollToSection("case-studies")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover-elevate rounded-md"
              data-testid="mobile-menu-case-studies"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover-elevate rounded-md"
              data-testid="mobile-menu-team"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover-elevate rounded-md"
              data-testid="mobile-menu-contact"
            >
              Contact
            </button>
            <Button asChild className="w-full mt-4" data-testid="mobile-button-get-appointed">
              <a href="https://form.jotform.com/250985130794060" target="_blank" rel="noopener noreferrer">
                Get Appointed
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
