import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "30+", label: "A-Rated Markets" },
  { value: "50", label: "States Covered" },
  { value: "100+", label: "Years Combined Experience" },
  { value: "55+", label: "Coverages" },
];

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-background" ref={sectionRef} data-testid="section-stats">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`p-8 text-center hover-elevate transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid={`stat-card-${index}`}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3" data-testid={`stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
