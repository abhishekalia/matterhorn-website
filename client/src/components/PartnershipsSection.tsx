import { Card } from "@/components/ui/card";

const partnerships = [
  {
    name: "NAYS",
    fullName: "National Alliance for Youth Sports",
    description: "Exclusive Youth Sports Program crafted in partnership with NAYS, giving brokers a leading solution for leagues, coaches, and participants nationwide."
  },
  {
    name: "TIE",
    fullName: "Truckers Integral to our Economy",
    description: "Providing deep advocacy for independent contractors and fleets, helping address compliance, protection, and growth needs in the transportation sector."
  },
  {
    name: "PLACT",
    fullName: "Play Like a Champion Today",
    description: "Custom-built athletics program for Catholic school boards and archdioceses, providing brokers a direct path into a defined and trusted network."
  },
];

export default function PartnershipsSection() {
  return (
    <section className="py-24 bg-background" data-testid="section-partnerships">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-partnerships">
            Growing Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="description-partnerships">
            Our partnerships fuel broker success by aligning with trusted organizations to deliver exclusive programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerships.map((partner, index) => (
            <Card key={index} className="p-8 text-center hover-elevate transition-all" data-testid={`partnership-card-${index}`}>
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary" data-testid={`partnership-logo-${index}`}>
                  {partner.name}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2" data-testid={`partnership-name-${index}`}>
                {partner.fullName}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`partnership-description-${index}`}>
                {partner.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
