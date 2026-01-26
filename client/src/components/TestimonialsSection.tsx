import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Matterhorn transformed our sports insurance operation. The automated participant management alone saved us 15 hours per week. We've grown our book by 300% in just 6 months.",
    author: "Sarah Mitchell",
    role: "Managing Broker, Pacific Sports Insurance",
    company: "California",
  },
  {
    quote: "The driver management system is a game-changer. We onboarded 200 drivers in a week with zero manual data entry. Our clients love the instant COI issuance.",
    author: "Marcus Rodriquez",
    role: "VP Operations, Rodriquez Insurance Partners",
    company: "Texas",
  },
  {
    quote: "Access to 17+ A-rated markets through one application? Unheard of. Matterhorn's AI matching puts every submission in front of the right underwriter. Our hit ratio doubled.",
    author: "Jennifer Chen",
    role: "Principal Broker, Northeast Commercial Lines",
    company: "New York",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" data-testid="section-testimonials">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-testimonials">
            Trusted by Leading Brokers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="description-testimonials">
            See what brokers are saying about their experience with Matterhorn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-all group relative overflow-hidden"
              data-testid={`testimonial-card-${index}`}
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-primary" />
              </div>
              <div className="relative">
                <p className="text-foreground leading-relaxed mb-6 italic" data-testid={`testimonial-quote-${index}`}>
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-bold text-foreground" data-testid={`testimonial-author-${index}`}>
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`testimonial-role-${index}`}>
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary font-medium" data-testid={`testimonial-company-${index}`}>
                    {testimonial.company}
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
