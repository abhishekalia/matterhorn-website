import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  DollarSign,
  Users,
  Shield,
  Zap,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

interface CaseStudy {
  id: string;
  title: string;
  sector: string;
  challenge: string;
  solution: string;
  clientBenefits: Array<{ icon: any; text: string; metric?: string }>;
  brokerBenefits: Array<{ icon: any; text: string; metric?: string }>;
  gradient: string;
  accentColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "transportation-ic",
    title: "Independent Contractor Fleet Program",
    sector: "Transportation",
    challenge:
      "Regional broker needed competitive coverage for 500+ independent contractors with varying risk profiles and tight deadlines.",
    solution:
      "Custom-designed IC program with tiered pricing, instant online quotes, and digital certificate issuance within 24 hours.",
    clientBenefits: [
      {
        icon: Shield,
        text: "Comprehensive coverage with flexible limits",
        metric: "$1M-$5M",
      },
      { icon: Zap, text: "Instant certificate delivery", metric: "24hrs" },
      {
        icon: DollarSign,
        text: "Competitive pricing reduction",
        metric: "18%",
      },
    ],
    brokerBenefits: [
      { icon: TrendingUp, text: "Annual commission growth", metric: "$125K+" },
      { icon: Users, text: "Client retention increase", metric: "94%" },
      { icon: Award, text: "New accounts generated", metric: "67" },
    ],
    gradient: "from-blue-600/20 via-cyan-600/20 to-blue-900/20",
    accentColor: "text-blue-400",
  },
  {
    id: "sports-pickleball",
    title: "National Pickleball League Program",
    sector: "Sports",
    challenge:
      "Broker approached us with a rapidly growing pickleball organization that could not find adequate coverage from traditional carriers.",
    solution:
      "Developed specialized pickleball program covering 85+ facilities nationwide with tournament liability, equipment coverage, and professional liability.",
    clientBenefits: [
      { icon: Shield, text: "Tailored pickleball-specific coverage" },
      { icon: Users, text: "Multi-location package discount", metric: "25%" },
      { icon: Zap, text: "Tournament event add-ons", metric: "On-demand" },
    ],
    brokerBenefits: [
      { icon: DollarSign, text: "First-year commission", metric: "$89K" },
      {
        icon: TrendingUp,
        text: "Referral business generated",
        metric: "23 accounts",
      },
      { icon: Award, text: "Market differentiation advantage" },
    ],
    gradient: "from-green-600/20 via-emerald-600/20 to-teal-900/20",
    accentColor: "text-green-400",
  },
  {
    id: "entertainment-influencer",
    title: "Social Media Influencer Portfolio",
    sector: "Entertainment",
    challenge:
      "Boutique broker wanted to tap into the creator economy but lacked products for influencers and content creators.",
    solution:
      "Created influencer-focused program with media liability, equipment coverage, cyber protection, and E&O - all with creator-friendly terms.",
    clientBenefits: [
      { icon: Shield, text: "Comprehensive digital creator protection" },
      { icon: Zap, text: "Equipment replacement coverage", metric: "Same-day" },
      {
        icon: DollarSign,
        text: "Affordable monthly payments",
        metric: "$99/mo",
      },
    ],
    brokerBenefits: [
      { icon: TrendingUp, text: "New market segment penetration" },
      { icon: Users, text: "Influencer accounts added", metric: "142" },
      { icon: DollarSign, text: "Annual recurring revenue", metric: "$168K+" },
    ],
    gradient: "from-fuchsia-600/20 via-purple-600/20 to-pink-900/20",
    accentColor: "text-fuchsia-400",
  },
  {
    id: "travel-adventure",
    title: "Adventure Travel Operator Program",
    sector: "Travel",
    challenge:
      "Broker client operated extreme adventure tours but faced coverage denials from standard carriers due to high-risk activities.",
    solution:
      "Engineered adventure-specific program including search and rescue, medical evacuation, hazardous activities coverage, and crisis management.",
    clientBenefits: [
      { icon: Shield, text: "High-risk activity coverage included" },
      { icon: Zap, text: "Global emergency response", metric: "24/7" },
      { icon: Users, text: "Participant coverage up to", metric: "500/trip" },
    ],
    brokerBenefits: [
      { icon: DollarSign, text: "Account premium volume", metric: "$425K" },
      { icon: Award, text: "Industry recognition as specialist" },
      { icon: TrendingUp, text: "Similar accounts closed", metric: "11" },
    ],
    gradient: "from-sky-600/20 via-blue-600/20 to-indigo-900/20",
    accentColor: "text-sky-400",
  },
  {
    id: "sports-youth",
    title: "Regional Youth Sports Association",
    sector: "Sports",
    challenge:
      "Multi-sport youth organization needed comprehensive coverage with sexual abuse protection but faced astronomical premiums.",
    solution:
      "Designed custom youth sports program with built-in abuse & molestation coverage, accident medical, and GL - all at competitive pricing.",
    clientBenefits: [
      { icon: Shield, text: "Sexual abuse & molestation included" },
      { icon: DollarSign, text: "Premium savings vs. market", metric: "32%" },
      { icon: Users, text: "Participants covered", metric: "8,500+" },
    ],
    brokerBenefits: [
      { icon: TrendingUp, text: "Client retention", metric: "100%" },
      { icon: DollarSign, text: "Annual commission income", metric: "$67K" },
      { icon: Award, text: "Youth sports niche dominance" },
    ],
    gradient: "from-orange-600/20 via-amber-600/20 to-yellow-900/20",
    accentColor: "text-orange-400",
  },
  {
    id: "transportation-rideshare",
    title: "Rideshare Driver Fleet Program",
    sector: "Transportation",
    challenge:
      "Broker needed scalable solution for gig economy drivers requiring commercial coverage between personal and platform policies.",
    solution:
      "Built rideshare gap coverage program with instant quote engine, monthly payment options, and automated certificate delivery.",
    clientBenefits: [
      { icon: Shield, text: "Gap coverage for all platforms" },
      { icon: Zap, text: "Instant online binding", metric: "<5 min" },
      { icon: DollarSign, text: "Monthly payment plans available" },
    ],
    brokerBenefits: [
      { icon: Users, text: "Drivers enrolled", metric: "1,240+" },
      { icon: TrendingUp, text: "Monthly recurring revenue", metric: "$18K" },
      { icon: Award, text: "Gig economy market leader" },
    ],
    gradient: "from-purple-600/20 via-pink-600/20 to-purple-900/20",
    accentColor: "text-purple-400",
  },
];

const sectorColors: Record<string, string> = {
  Transportation: "text-blue-400 border-blue-400/30",
  Sports: "text-green-400 border-green-400/30",
  Travel: "text-sky-400 border-sky-400/30",
  Entertainment: "text-fuchsia-400 border-fuchsia-400/30",
};

export function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="py-24 bg-background relative overflow-hidden"
      data-testid="section-case-studies"
    >
      {/* Edgy animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse pointer-events-none"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 text-sm px-4 py-2"
              data-testid="badge-success-stories"
            >
              <Award className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h2
              className="text-4xl md:text-5xl font-serif font-semibold mb-4"
              data-testid="text-case-studies-title"
            >
              Case Studies
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              data-testid="text-case-studies-description"
            >
              Real examples of custom programs we have designed and how they
              have driven success for both clients and brokers.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.id} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="relative overflow-hidden hover-elevate transition-all duration-500 group h-full"
                  data-testid={`card-case-study-${study.id}`}
                >
                  {/* Dynamic gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700`}
                  />

                  {/* Animated glow effect */}
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150" />

                  <div className="relative p-6 flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-6">
                      <Badge
                        variant="outline"
                        className={`mb-3 text-xs ${sectorColors[study.sector]}`}
                        data-testid={`badge-sector-${study.id}`}
                      >
                        {study.sector}
                      </Badge>
                      <h3
                        className="text-2xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors"
                        data-testid={`text-case-study-title-${study.id}`}
                      >
                        {study.title}
                      </h3>
                    </div>

                    {/* Challenge */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1 h-4 bg-destructive rounded" />
                        <h4 className="text-sm font-semibold text-destructive">
                          Challenge
                        </h4>
                      </div>
                      <p
                        className="text-sm text-muted-foreground pl-3"
                        data-testid={`text-challenge-${study.id}`}
                      >
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1 h-4 bg-primary rounded" />
                        <h4 className="text-sm font-semibold text-primary">
                          Solution
                        </h4>
                      </div>
                      <p
                        className="text-sm text-muted-foreground pl-3"
                        data-testid={`text-solution-${study.id}`}
                      >
                        {study.solution}
                      </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mt-auto">
                      {/* Client Benefits */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-2">
                          <Shield className="w-3 h-3" />
                          Client Benefits
                        </h4>
                        <div className="space-y-2">
                          {study.clientBenefits.map((benefit, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-xs"
                              data-testid={`text-client-benefit-${study.id}-${idx}`}
                            >
                              <benefit.icon
                                className={`w-4 h-4 mt-0.5 flex-shrink-0 ${study.accentColor}`}
                              />
                              <div>
                                <p className="text-foreground">
                                  {benefit.text}
                                </p>
                                {benefit.metric && (
                                  <p
                                    className={`font-semibold ${study.accentColor}`}
                                  >
                                    {benefit.metric}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Broker Benefits */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-2">
                          <TrendingUp className="w-3 h-3" />
                          Broker Benefits
                        </h4>
                        <div className="space-y-2">
                          {study.brokerBenefits.map((benefit, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-xs"
                              data-testid={`text-broker-benefit-${study.id}-${idx}`}
                            >
                              <benefit.icon className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                              <div>
                                <p className="text-foreground">
                                  {benefit.text}
                                </p>
                                {benefit.metric && (
                                  <p className="font-semibold text-primary">
                                    {benefit.metric}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full group/btn"
                        onClick={() =>
                          console.log(`Learn more about ${study.title}`)
                        }
                        data-testid={`button-learn-more-${study.id}`}
                      >
                        Discuss Similar Program
                        <TrendingUp className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>

                  {/* Corner shine effect */}
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center">
            <Card className="inline-block p-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 relative overflow-hidden group">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-serif font-semibold mb-2">
                  Ready to Create Your Success Story?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Let us design a custom program that drives revenue for you and
                  value for your clients.
                </p>
                <Button
                  variant="default"
                  size="lg"
                  className="group/cta"
                  data-testid="button-start-conversation"
                >
                  Start the Conversation
                  <Zap className="w-4 h-4 ml-2 group-hover/cta:rotate-12 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
