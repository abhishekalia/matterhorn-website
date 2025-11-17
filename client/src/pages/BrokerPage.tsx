import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  BarChart3,
  Clock,
  DollarSign,
  Briefcase,
  ArrowRight,
  Mountain
} from "lucide-react";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Commissions",
    description: "Industry-leading commission structures with transparent pricing and fast payouts.",
  },
  {
    icon: Zap,
    title: "Same-Day Access",
    description: "Get approved and start selling within 24 hours with immediate platform access.",
  },
  {
    icon: Users,
    title: "30+ A-Rated Markets",
    description: "Access to diverse specialty markets covering all major risk categories.",
  },
  {
    icon: Shield,
    title: "E&O Coverage",
    description: "Comprehensive errors and omissions protection for your peace of mind.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track submissions, quotes, and commissions with advanced reporting tools.",
  },
  {
    icon: Briefcase,
    title: "Dedicated Support",
    description: "Expert underwriting support and account management for your success.",
  },
];

const requirements = [
  "Active insurance broker license in good standing",
  "Minimum 2 years of commercial insurance experience",
  "E&O insurance coverage ($1M minimum)",
  "Professional references from carriers or MGAs",
  "Clean regulatory record",
  "Commitment to technology adoption",
];

export default function BrokerPage() {
  const scrollToApply = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen dark bg-background">
      <CustomCursor />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1B2A41] to-[#0A1628]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mountain className="w-5 h-5 text-primary" />
              <Badge className="bg-primary/20 text-white border-primary/30 backdrop-blur-sm">
                Broker Partnership
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Partner with Matterhorn
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Join an elite network of brokers leveraging cutting-edge technology and exclusive specialty markets to grow their business.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30"
                onClick={scrollToApply}
                data-testid="button-apply-hero"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => window.history.back()}
                data-testid="button-back"
              >
                Back to Home
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <Card className="p-6 bg-white/5 backdrop-blur-md border-white/10 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">24h</div>
              <div className="text-sm text-white/70">Approval Time</div>
            </Card>
            <Card className="p-6 bg-white/5 backdrop-blur-md border-white/10 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">30+</div>
              <div className="text-sm text-white/70">A-Rated Markets</div>
            </Card>
            <Card className="p-6 bg-white/5 backdrop-blur-md border-white/10 text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-white/70">Digital Platform</div>
            </Card>
            <Card className="p-6 bg-white/5 backdrop-blur-md border-white/10 text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">Full</div>
              <div className="text-sm text-white/70">E&O Coverage</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-background via-card to-background relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Broker with Matterhorn
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Access exclusive benefits designed to accelerate your growth and streamline your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover-elevate transition-all group"
                  data-testid={`benefit-card-${index}`}
                >
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 bg-gradient-to-br from-[#0A1628] via-[#1B2A41] to-[#0A1628] relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Broker Requirements
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We partner with experienced, professional brokers committed to excellence.
            </p>
          </div>

          <Card className="p-8 bg-white/5 backdrop-blur-md border-white/10">
            <div className="space-y-4">
              {requirements.map((req, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-md hover:bg-white/5 transition-colors"
                  data-testid={`requirement-${index}`}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90 text-lg">{req}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Application CTA Section */}
      <section className="py-24 bg-gradient-to-br from-background via-card to-background relative" id="apply">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
            Complete our streamlined broker application and join Matterhorn's elite network today.
          </p>
          
          <Card className="p-8 mb-8 bg-card/50 backdrop-blur-sm border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">1</div>
                <div className="text-sm font-medium text-foreground">Submit Application</div>
                <div className="text-xs text-foreground/60 mt-1">5 minutes to complete</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">2</div>
                <div className="text-sm font-medium text-foreground">Quick Review</div>
                <div className="text-xs text-foreground/60 mt-1">24-hour response time</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">3</div>
                <div className="text-sm font-medium text-foreground">Start Selling</div>
                <div className="text-xs text-foreground/60 mt-1">Immediate platform access</div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30"
              asChild
              data-testid="button-apply-now"
            >
              <a href="https://form.jotform.com/250985130794060" target="_blank" rel="noopener noreferrer">
                Submit Broker Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </Card>

          <p className="text-sm text-foreground/60">
            Questions? Email us at <a href="mailto:brokers@matterhornprotects.com" className="text-primary hover:underline">brokers@matterhornprotects.com</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
