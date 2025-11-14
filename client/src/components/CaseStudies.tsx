import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const caseStudies = [
  {
    title: "Independent Contractor",
    challenge: "An Independent Contractor group needed a faster, more efficient way to manage coverage, track drivers, and issue documentation without getting bogged down in manual processes.",
    solution: "We implemented driver management automation, automated COI issuance, and automated billing—all within our digital platform.",
    results: [
      "Reduced coverage cost by 20%",
      "Setup completed in 3 days",
      "Ongoing automation for driver management"
    ],
  },
  {
    title: "Motor Carrier",
    challenge: "A motor carrier needed to onboard a fleet of Independent Contractor drivers quickly and manage the operation at scale.",
    solution: "We delivered an automated onboarding process for IC drivers, a real-time driver management board, and automated agency billing—all synced to policy changes.",
    results: [
      "Fleet fully onboarded within one week",
      "Real-time driver records and COIs",
      "Reduced administrative hours by 40%"
    ],
  },
  {
    title: "League Director",
    challenge: "A league director managing 175 flag football teams across 12 states needed a single system to deliver team, event, and participant coverage without manual tracking.",
    solution: "We integrated an automated insurance package into the event registration platform, bundling team insurance, event organizer coverage, and participant protection—all issued instantly.",
    results: [
      "100% coverage compliance",
      "Freed staff to focus on growth",
      "Instant issuance at registration"
    ],
  },
  {
    title: "Embedded Travel",
    challenge: "A major hockey academy traveling globally needed a streamlined way to embed travel coverage into every trip, ensuring players, staff, and equipment were protected.",
    solution: "We built an embedded travel insurance package covering medical, trip interruption, and equipment protection—automatically added to every trip booking and issued instantly.",
    results: [
      "100% coverage inclusion",
      "Instant automated issuance",
      "Focus on international partnerships"
    ],
  },
];

export default function CaseStudies() {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section className="py-24 bg-card" id="case-studies" ref={elementRef} data-testid="section-case-studies">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-case-studies">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="description-case-studies">
            See how brokers are using Matterhorn to win more business, reduce admin, and serve their clients better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className={`p-8 hover-elevate transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              data-testid={`case-study-${index}`}
            >
              <Badge className="mb-4" data-testid={`case-study-badge-${index}`}>Case Study {index + 1}</Badge>
              <h3 className="text-2xl font-bold text-foreground mb-4" data-testid={`case-study-title-${index}`}>
                {study.title}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Challenge</h4>
                  <p className="text-foreground leading-relaxed" data-testid={`case-study-challenge-${index}`}>
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Solution</h4>
                  <p className="text-foreground leading-relaxed" data-testid={`case-study-solution-${index}`}>
                    {study.solution}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2" data-testid={`case-study-result-${index}-${idx}`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span className="text-foreground font-medium">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
