import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

interface FloatingCTAProps {
  onGetAppointedClick?: () => void;
}

export function FloatingCTA({ onGetAppointedClick }: FloatingCTAProps) {
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
        size="lg"
        onClick={onGetAppointedClick}
        className="shadow-lg shadow-primary/30 bg-primary hover:bg-primary/90"
        data-testid="button-floating-appointed"
      >
        Apply to Get Appointed
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
