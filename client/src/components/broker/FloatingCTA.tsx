import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

interface FloatingCTAProps {
  onGetAppointedClick: () => void;
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
        onClick={onGetAppointedClick}
        size="lg"
        className="shadow-lg"
        data-testid="button-floating-appointed"
      >
        Apply to Get Appointed
      </Button>
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        size="icon"
        variant="secondary"
        className="shadow-lg ml-auto"
        data-testid="button-scroll-top"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </div>
  );
}
