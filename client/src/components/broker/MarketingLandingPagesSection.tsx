import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

interface LandingPage {
  name: string;
  description: string;
  sector: string;
  gradient: string;
  url: string;
}

const landingPages: LandingPage[] = [
  {
    name: "IC Transportation Program",
    description:
      "Comprehensive coverage for independent contractors in the trucking industry",
    sector: "Transportation",
    gradient: "from-blue-600/20 via-cyan-600/20 to-blue-800/20",
    url: "/landing/ic-transportation",
  },
  {
    name: "Ride Share Economy Program",
    description:
      "Specialized insurance solutions for rideshare drivers and platforms",
    sector: "Transportation",
    gradient: "from-purple-600/20 via-pink-600/20 to-purple-800/20",
    url: "/landing/rideshare",
  },
  {
    name: "Pickleball Program",
    description: "Tailored coverage for the fastest-growing sport in America",
    sector: "Sports",
    gradient: "from-green-600/20 via-emerald-600/20 to-teal-800/20",
    url: "/landing/pickleball",
  },
  {
    name: "Youth Sports Program",
    description:
      "Comprehensive protection for youth sports organizations and events",
    sector: "Sports",
    gradient: "from-orange-600/20 via-amber-600/20 to-yellow-800/20",
    url: "/landing/youth-sports",
  },
  {
    name: "Travel Program",
    description:
      "Complete travel insurance solutions for groups and individuals",
    sector: "Travel",
    gradient: "from-sky-600/20 via-blue-600/20 to-indigo-800/20",
    url: "/landing/travel",
  },
  {
    name: "Influencer Entertainment Program",
    description: "Modern coverage for content creators and digital influencers",
    sector: "Entertainment",
    gradient: "from-fuchsia-600/20 via-purple-600/20 to-pink-800/20",
    url: "/landing/influencer",
  },
];

const sectorColors = {
  Transportation: "text-blue-400",
  Sports: "text-green-400",
  Travel: "text-sky-400",
  Entertainment: "text-fuchsia-400",
};

export function MarketingLandingPagesSection() {
  const groupedBySize = [
    landingPages.slice(0, 2),
    landingPages.slice(2, 4),
    landingPages.slice(4, 6),
  ];

  return (
    <section
      id="landing-pages"
      className="py-24 bg-background relative overflow-hidden"
      data-testid="section-landing-pages"
    >
      {/* Edgy background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 text-sm px-4 py-2"
              data-testid="badge-marketing"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Marketing Excellence
            </Badge>
            <h2
              className="text-4xl md:text-5xl font-serif font-semibold mb-4"
              data-testid="text-landing-pages-title"
            >
              Example Broker Landing Pages
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              data-testid="text-landing-pages-description"
            >
              Pre-built, professional landing pages designed to help you attract
              more business. Launch your program marketing in minutes.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                Built & launched for brokers to market with
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {groupedBySize.map((group, groupIndex) => (
            <ScrollReveal key={groupIndex} delay={groupIndex * 0.1}>
              <div className="grid md:grid-cols-2 gap-6">
                {group.map((page, index) => (
                  <motion.div
                    key={page.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className={`relative overflow-hidden transition-all duration-500 group h-full cursor-pointer border-2 border-transparent hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] active:scale-[0.99]`}
                      data-testid={`card-landing-page-${page.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {/* Gradient background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${page.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      {/* Animated border glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative p-6 flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <Badge
                              variant="outline"
                              className={`mb-3 text-xs ${sectorColors[page.sector as keyof typeof sectorColors]}`}
                              data-testid={`badge-sector-${page.name.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              {page.sector}
                            </Badge>
                            <h3
                              className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors"
                              data-testid={`text-landing-page-name-${page.name.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              {page.name}
                            </h3>
                            <p
                              className="text-sm text-muted-foreground mb-4"
                              data-testid={`text-landing-page-description-${page.name.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              {page.description}
                            </p>
                          </div>
                        </div>

                        {/* Feature highlights */}
                        <div className="flex flex-wrap justify-center gap-2 mb-6 flex-1">
                          <div className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                            Mobile Optimized
                          </div>
                          <div className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                            SEO Ready
                          </div>
                          <div className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                            Lead Capture
                          </div>
                        </div>

                        <div className="flex gap-3 mt-auto">
                          <Button
                            variant="default"
                            className="flex-1 group/btn hover:scale-[1.02] active:scale-[0.98] transition-all"
                            onClick={() => window.open(page.url, "_blank")}
                            data-testid={`button-view-landing-${page.name.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            Access Now
                            <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => console.log(`Clone ${page.name}`)}
                            data-testid={`button-clone-${page.name.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            <Sparkles className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                    </Card>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <Card className="inline-block p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <p className="font-semibold mb-1">
                    Need a custom landing page?
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Contact us to build one tailored to your brand
                  </p>
                </div>
                <Button
                  variant="default"
                  className="ml-4"
                  data-testid="button-request-custom-landing"
                >
                  Get Started
                </Button>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
