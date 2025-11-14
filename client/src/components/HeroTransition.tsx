import { useEffect, useState } from "react";
import matterhornHero from "@assets/generated_images/Matterhorn_mountains_hero_background_315f6fa4.png";

export default function HeroTransition() {
  const [scrollY, setScrollY] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      
      // Fade out mountain between 0 and 800px scroll
      const fadeStart = 0;
      const fadeEnd = 800;
      const fadeOpacity = Math.max(
        0,
        Math.min(1, 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart))
      );
      setOpacity(fadeOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
      style={{ 
        opacity,
        transform: `translateY(${scrollY * 0.5}px)`, // Parallax effect
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${matterhornHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/90 via-[#1B2A41]/85 to-[#0A1628]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>
    </div>
  );
}
