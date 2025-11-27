import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const JOTFORM_URL = "https://form.jotform.com/250985130794060";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
      data-testid="floating-cta"
    >
      <Button
        asChild
        size="lg"
        className="shadow-lg shadow-primary/30 bg-primary hover:bg-primary/90"
        data-testid="button-floating-appointed"
      >
        <a href={JOTFORM_URL} target="_blank" rel="noopener noreferrer">
          Apply to Get Appointed
        </a>
      </Button>
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        size="icon"
        variant="outline"
        className="shadow-lg ml-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
        data-testid="button-scroll-top"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </div>
  );
}
