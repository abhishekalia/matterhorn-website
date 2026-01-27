import { useState } from "react";
import { Mountain } from "lucide-react";
import matterhornHero from "@assets/generated_images/Matterhorn_mountains_hero_background_315f6fa4.png";

export default function BrokerCTA() {
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);
  const letters = "MATTERHORN".split("");

  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden" data-testid="section-closing">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${matterhornHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/85 via-[#1B2A41]/80 to-[#0A1628]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6 group">
          {/* Logo Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 rounded-full scale-150" />
              <Mountain className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-primary group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>

          {/* Interactive Letter Hover Effect */}
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight flex justify-center"
            data-testid="text-closing-title"
          >
            {letters.map((letter, index) => (
              <span
                key={index}
                className="cursor-default transition-all duration-300 ease-out"
                style={{
                  color: hoveredLetter === index 
                    ? '#22d3ee' // cyan-400
                    : hoveredLetter !== null && Math.abs(hoveredLetter - index) === 1
                    ? '#06b6d4' // cyan-500
                    : hoveredLetter !== null && Math.abs(hoveredLetter - index) === 2
                    ? '#0891b2' // cyan-600
                    : '#00a8c7', // primary
                  textShadow: hoveredLetter === index 
                    ? '0 0 30px rgba(34, 211, 238, 0.8), 0 0 60px rgba(34, 211, 238, 0.4)' 
                    : hoveredLetter !== null && Math.abs(hoveredLetter - index) <= 2
                    ? '0 0 20px rgba(34, 211, 238, 0.3)'
                    : 'none',
                  transform: hoveredLetter === index 
                    ? 'translateY(-8px) scale(1.1)' 
                    : hoveredLetter !== null && Math.abs(hoveredLetter - index) === 1
                    ? 'translateY(-4px) scale(1.05)'
                    : 'translateY(0) scale(1)',
                  display: 'inline-block',
                }}
                onMouseEnter={() => setHoveredLetter(index)}
                onMouseLeave={() => setHoveredLetter(null)}
              >
                {letter}
              </span>
            ))}
          </h2>
          
          <p 
            className="text-sm md:text-base lg:text-lg uppercase tracking-[0.3em] mt-4 font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary/80 via-cyan-400/70 to-primary/80"
            data-testid="text-closing-subtitle"
          >
            Insurance Group
          </p>
        </div>
      </div>
    </section>
  );
}
