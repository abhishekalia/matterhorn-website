import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, Users, Zap, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    title: "Independent Contractor Fleet",
    industry: "Transportation",
    premium: "$2.4M",
    challenge: "An Independent Contractor group needed a faster, more efficient way to manage coverage for 500+ drivers, track real-time fleet changes, and issue documentation without drowning in manual processes.",
    solution: "We implemented our complete driver management automation platform, integrating automated COI issuance, real-time driver board updates, and automated billing synchronized to policy changes.",
    brokerBenefits: [
      "20% reduction in coverage cost increased competitive positioning",
      "Complete setup in 3 days vs. industry standard 4-6 weeks",
      "Zero manual driver tracking—all automated through dashboard",
      "Real-time commission tracking and reporting",
      "Automated renewal management and driver updates"
    ],
    clientBenefits: [
      "Instant COI generation for any driver, any time",
      "Self-service driver portal reduced admin calls by 85%",
      "Real-time compliance tracking across entire fleet",
      "Automated billing aligned with driver adds/removals",
      "Mobile-first platform accessible anywhere"
    ],
    results: [
      "500+ drivers onboarded in 72 hours",
      "40% reduction in administrative time",
      "Zero compliance violations in first year"
    ],
  },
  {
    title: "Multi-State Youth Sports League",
    industry: "Sports",
    premium: "$850K",
    challenge: "A league director managing 175 flag football teams across 12 states needed a single system to deliver team, event, and participant coverage without manual tracking nightmares.",
    solution: "We built a fully integrated insurance package embedded into their event registration platform, bundling team insurance, event organizer coverage, and participant protection—all issued automatically at checkout.",
    brokerBenefits: [
      "Automated enrollment = zero manual data entry",
      "Commission paid automatically on each registration",
      "Built-in renewal management for returning teams",
      "Real-time dashboard showing all active coverages",
      "Scalable to unlimited teams without operational overhead"
    ],
    clientBenefits: [
      "100% coverage compliance across all 175 teams",
      "Instant proof of insurance at registration",
      "Parents receive coverage details immediately via email",
      "Easy certificate access through online portal",
      "No additional paperwork for league administrators"
    ],
    results: [
      "100% coverage compliance achieved",
      "League staff freed to focus on growth instead of admin",
      "Expanded to 250 teams the following season"
    ],
  },
  {
    title: "Global Hockey Academy Travel",
    industry: "Travel",
    premium: "$425K",
    challenge: "A major hockey academy traveling globally needed seamless travel coverage embedded into every trip, ensuring players, coaches, and equipment were protected without manual policy management.",
    solution: "We architected an embedded travel insurance package covering medical, trip interruption, and equipment protection—automatically included in every trip booking and issued instantly via API integration.",
    brokerBenefits: [
      "Zero manual policy issuance—fully API-driven",
      "Automatic commission on every trip booked",
      "Real-time reporting on all active policies",
      "Built-in claims support handled by our team",
      "White-label option with broker branding"
    ],
    clientBenefits: [
      "Coverage automatically included in trip cost",
      "Instant policy delivery via email after booking",
      "24/7 emergency assistance while traveling",
      "Equipment replacement coverage up to $50K",
      "Trip cancellation protection for medical emergencies"
    ],
    results: [
      "100% coverage inclusion rate across all trips",
      "Academy expanded international partnerships by 300%",
      "Zero uninsured travel incidents in 2 years"
    ],
  },
  {
    title: "Regional Motor Carrier",
    industry: "Transportation",
    premium: "$1.8M",
    challenge: "A motor carrier needed to rapidly onboard 200+ Independent Contractor drivers while maintaining compliance, managing real-time fleet changes, and automating agency billing.",
    solution: "We delivered an end-to-end automated onboarding system with a live driver management board, automated COI generation, and billing synced to policy additions and removals.",
    brokerBenefits: [
      "Entire fleet onboarded within one week",
      "Real-time driver status dashboard with instant updates",
      "Automated monthly billing reconciliation",
      "Built-in compliance monitoring and alerts",
      "Easy addition of new carriers to the program"
    ],
    clientBenefits: [
      "Drivers receive COIs within minutes of approval",
      "Self-service portal for driver document access",
      "Automated compliance tracking for DOT requirements",
      "Pay-as-you-go billing aligned with driver count",
      "Dedicated account manager for fleet support"
    ],
    results: [
      "200+ drivers fully onboarded in 7 days",
      "Administrative hours reduced by 40%",
      "Zero coverage gaps during fleet scaling"
    ],
  },
];

export default function CaseStudies() {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section className="py-24 bg-card relative overflow-hidden" id="case-studies" ref={elementRef} data-testid="section-case-studies">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Proven Results
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-case-studies">
            Real-World Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="description-case-studies">
            See how brokers are using Matterhorn to win more business, reduce admin, and deliver exceptional value to their clients
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden transition-all duration-700 border-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              data-testid={`case-study-${index}`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4 gap-4 flex-wrap">
                  <div>
                    <Badge className="mb-2 bg-primary/10 text-primary border-primary/20" data-testid={`case-study-industry-${index}`}>
                      {study.industry}
                    </Badge>
                    <h3 className="text-2xl font-bold text-foreground" data-testid={`case-study-title-${index}`}>
                      {study.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Premium</div>
                    <div className="text-2xl font-bold text-primary">{study.premium}</div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      Challenge
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm" data-testid={`case-study-challenge-${index}`}>
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Solution
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm" data-testid={`case-study-solution-${index}`}>
                      {study.solution}
                    </p>
                  </div>
                </div>

                <Accordion type="multiple" className="space-y-2">
                  <AccordionItem value="broker-benefits" className="border rounded-md bg-background/50">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover-elevate text-sm" data-testid={`accordion-broker-benefits-${index}`}>
                      <div className="flex items-center gap-2 font-semibold">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        Benefits to Brokers
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <ul className="space-y-2">
                        {study.brokerBenefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm" data-testid={`broker-benefit-${index}-${idx}`}>
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="client-benefits" className="border rounded-md bg-background/50">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover-elevate text-sm" data-testid={`accordion-client-benefits-${index}`}>
                      <div className="flex items-center gap-2 font-semibold">
                        <Users className="w-4 h-4 text-primary" />
                        Benefits to Clients
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <ul className="space-y-2">
                        {study.clientBenefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm" data-testid={`client-benefit-${index}-${idx}`}>
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="text-sm font-bold text-foreground mb-3">Key Results</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-2" data-testid={`case-study-result-${index}-${idx}`}>
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
