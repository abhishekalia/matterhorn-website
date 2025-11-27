import { Card } from "@/components/ui/card";
import { FileText, PhoneCall, Rocket } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "1",
    title: "Apply",
    description:
      "Complete our straightforward application form with your brokerage details.",
  },
  {
    icon: PhoneCall,
    number: "2",
    title: "Verification & Brief Call",
    description:
      "We verify your credentials and schedule a quick intro call to discuss programs.",
  },
  {
    icon: Rocket,
    number: "3",
    title: "Start Submitting",
    description:
      "Get immediate access to submit applications across our specialty programs.",
  },
];

export function AppointmentProcessSection() {
  return (
    <section
      className="py-24 bg-card"
      data-testid="section-appointment-process"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-serif font-semibold mb-4"
            data-testid="text-process-title"
          >
            Get Appointed in Three Steps
          </h2>
          <p
            className="text-lg text-muted-foreground"
            data-testid="text-process-description"
          >
            Immediate onboarding for qualified brokers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover-elevate transition-all duration-300"
                data-testid={`card-step-${index}`}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-sm text-primary font-semibold mb-2">
                  STEP {step.number}
                </div>
                <h3
                  className="text-xl font-serif font-semibold mb-3"
                  data-testid={`text-step-title-${index}`}
                >
                  {step.title}
                </h3>
                <p
                  className="text-muted-foreground"
                  data-testid={`text-step-description-${index}`}
                >
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
