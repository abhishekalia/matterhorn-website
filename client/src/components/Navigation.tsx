import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Mountain } from "lucide-react";
import { BrokerApplicationModal } from "./BrokerApplicationModal";

const sectors = [
  { name: "Transportation", id: "transportation", route: "/transportation" },
  { name: "Sports", id: "sports", route: "/sports" },
  { name: "Entertainment", id: "entertainment", route: null },
  { name: "Travel", id: "travel", route: "/travel" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    
    if (location !== "/") {
      setLocation(`/#${id}`);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleRequestAppointment = () => {
    setIsMobileMenuOpen(false);
    setApplicationModalOpen(true);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
        data-testid="nav-main"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-8">
            <Link href="/" data-testid="link-home">
              <div className="flex items-center gap-3 cursor-pointer group">
                <Mountain className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <div className="text-xl font-bold text-primary leading-tight">MATTERHORN</div>
                  <div className="text-[10px] font-medium text-primary/70 tracking-widest uppercase">Insurance Group</div>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-3">
              {sectors.map((sector) => (
                sector.route ? (
                  <Link
                    key={sector.id}
                    href={sector.route}
                    className="px-4 py-1.5 text-[10px] uppercase tracking-widest font-medium text-foreground/70 border border-foreground/20 rounded-full hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    data-testid={`nav-${sector.id}`}
                  >
                    {sector.name}
                  </Link>
                ) : (
                  <button
                    key={sector.id}
                    onClick={() => scrollToSection(sector.id)}
                    className="px-4 py-1.5 text-[10px] uppercase tracking-widest font-medium text-foreground/70 border border-foreground/20 rounded-full hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    data-testid={`nav-${sector.id}`}
                  >
                    {sector.name}
                  </button>
                )
              ))}

              <Button 
                onClick={handleRequestAppointment} 
                size="sm"
                className="ml-4 text-[10px] uppercase tracking-widest"
                data-testid="button-request-appointment"
              >
                Request Appointment
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
            <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {sectors.map((sector) => (
                  sector.route ? (
                    <Link
                      key={sector.id}
                      href={sector.route}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-1.5 text-[10px] uppercase tracking-widest font-medium text-foreground/70 border border-foreground/20 rounded-full hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                      data-testid={`mobile-nav-${sector.id}`}
                    >
                      {sector.name}
                    </Link>
                  ) : (
                    <button
                      key={sector.id}
                      onClick={() => scrollToSection(sector.id)}
                      className="px-4 py-1.5 text-[10px] uppercase tracking-widest font-medium text-foreground/70 border border-foreground/20 rounded-full hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                      data-testid={`mobile-nav-${sector.id}`}
                    >
                      {sector.name}
                    </button>
                  )
                ))}
              </div>
              <Button 
                onClick={handleRequestAppointment} 
                className="w-full text-[10px] uppercase tracking-widest" 
                data-testid="mobile-button-request-appointment"
              >
                Request Appointment
              </Button>
            </div>
          )}
        </div>
      </nav>

      <BrokerApplicationModal 
        open={applicationModalOpen} 
        onOpenChange={setApplicationModalOpen} 
      />
    </>
  );
}
