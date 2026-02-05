import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, TrendingUp, Target, Shield, Zap, CheckCircle2, Award, Globe, Mountain } from "lucide-react";

const partnerships = [
  {
    name: "NAYS",
    fullName: "National Alliance for Youth Sports",
    logo: "NAYS",
    category: "Youth Sports",
    reach: "5M+ Youth Athletes",
    description: "Exclusive Youth Sports Program crafted in partnership with NAYS, giving brokers a leading solution for leagues, coaches, and participants nationwide.",
    partnershipDetails: [
      "Exclusive insurance program designed specifically for NAYS member organizations",
      "Direct integration with NAYS membership system for seamless enrollment",
      "Endorsed by NAYS leadership and promoted to 2,500+ member organizations",
      "Co-branded marketing materials and broker support resources",
      "Access to NAYS annual conference and regional training events"
    ],
    brokerBenefits: [
      "Instant credibility through NAYS endorsement and national recognition",
      "Pre-qualified leads from 2,500+ leagues actively seeking coverage",
      "Automated enrollment reduces manual work by 90%",
      "Built-in renewal pipeline with 85%+ retention rates",
      "White-label option to brand the program as your own",
      "Dedicated NAYS partnership account manager for support"
    ],
    programFeatures: [
      "Team, league, and participant coverage in one package",
      "Instant certificate generation for compliance requirements",
      "Season-based pricing with flexible payment options",
      "Coverage for practices, games, and sanctioned tournaments",
      "Accident medical coverage up to $50K per participant",
      "General liability coverage up to $2M per occurrence"
    ],
    stats: [
      { label: "Member Organizations", value: "2,500+" },
      { label: "Youth Athletes", value: "5M+" },
      { label: "States Covered", value: "All 50" }
    ]
  },
  {
    name: "PLACT",
    fullName: "Play Like a Champion Today",
    logo: "PLACT",
    category: "Faith-Based Athletics",
    reach: "500+ Catholic Schools",
    description: "Custom-built athletics program for Catholic school boards and archdioceses, providing brokers a direct path into a defined and trusted network.",
    partnershipDetails: [
      "Exclusive partnership with PLACT's national Catholic athletics network",
      "Program designed in collaboration with archdiocese risk management teams",
      "Aligned with Catholic school board compliance and safety requirements",
      "Co-branded materials featuring PLACT's trusted brand and values",
      "Access to PLACT's annual coaching clinics and school administrator events"
    ],
    brokerBenefits: [
      "Direct access to 500+ Catholic schools and archdiocese networks",
      "Pre-approved program simplifies sales conversations and shortens sales cycles",
      "Built-in trust from PLACT endorsement accelerates close rates by 40%",
      "Multi-year contracts common due to archdiocese procurement processes",
      "Automated enrollment for all teams within a school or diocese",
      "Consolidated billing for entire school districts or archdioceses",
      "Referral opportunities to other faith-based organizations"
    ],
    programFeatures: [
      "Coverage for all athletic programs within a school or diocese",
      "Student-athlete accident medical coverage up to $100K",
      "General liability coverage for coaches, schools, and volunteers",
      "Abuse and molestation coverage aligned with USCCB standards",
      "Instant certificate issuance for league and tournament registration",
      "Seasonal or annual coverage options for school budgets"
    ],
    stats: [
      { label: "Catholic Schools", value: "500+" },
      { label: "Student-Athletes", value: "200K+" },
      { label: "Archdioceses", value: "75+" }
    ]
  },
];

export default function PartnershipsSection() {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section 
      className="py-24 bg-gradient-to-br from-background via-card/50 to-background relative overflow-hidden" 
      data-testid="section-partnerships"
      ref={elementRef}
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse-slower" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mountain className="w-5 h-5 text-primary" />
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Strategic Partnerships
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-partnerships">
            Growing Together
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto" data-testid="description-partnerships">
            Our partnerships fuel broker success by aligning with trusted organizations to deliver exclusive programs with built-in distribution and credibility
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {partnerships.map((partner, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden transition-all duration-700 border-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              data-testid={`partnership-card-${index}`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-primary" data-testid={`partnership-logo-${index}`}>
                      {partner.logo}
                    </span>
                  </div>
                  <Badge className="mb-2 bg-primary/10 text-primary border-primary/20 text-xs">
                    {partner.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground mb-1" data-testid={`partnership-name-${index}`}>
                    {partner.fullName}
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Globe className="w-4 h-4" />
                    {partner.reach}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 text-center" data-testid={`partnership-description-${index}`}>
                  {partner.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {partner.stats.map((stat, idx) => (
                    <div key={idx} className="text-center p-3 rounded-md bg-background/50 border border-border">
                      <div className="text-lg font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Accordions */}
                <Accordion type="multiple" className="space-y-2">
                  <AccordionItem value="details" className="border rounded-md bg-background/50">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover-elevate text-sm" data-testid={`accordion-details-${index}`}>
                      <div className="flex items-center gap-2 font-semibold">
                        <Shield className="w-4 h-4 text-primary" />
                        Partnership Details
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <ul className="space-y-2">
                        {partner.partnershipDetails.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm" data-testid={`partnership-detail-${index}-${idx}`}>
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="benefits" className="border rounded-md bg-background/50">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover-elevate text-sm" data-testid={`accordion-benefits-${index}`}>
                      <div className="flex items-center gap-2 font-semibold">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        Broker Benefits
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <ul className="space-y-2">
                        {partner.brokerBenefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm" data-testid={`broker-benefit-${index}-${idx}`}>
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="features" className="border rounded-md bg-background/50">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover-elevate text-sm" data-testid={`accordion-features-${index}`}>
                      <div className="flex items-center gap-2 font-semibold">
                        <Zap className="w-4 h-4 text-primary" />
                        Program Features
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <ul className="space-y-2">
                        {partner.programFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm" data-testid={`program-feature-${index}-${idx}`}>
                            <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Target className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Ready to Leverage These Partnerships?</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              These partnerships give you instant access to pre-qualified markets, trusted brand endorsements, and automated program delivery. Contact us to learn how you can start writing business through these exclusive channels.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
