import { Card } from "@/components/ui/card";
import { AppointmentForm } from "./AppointmentForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-background"
      data-testid="section-contact"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-serif font-semibold mb-4"
            data-testid="text-contact-title"
          >
            Apply to Get Appointed
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-contact-description"
          >
            Complete the form below to start your partnership with Matterhorn
            Insurance Group.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto p-8 md:p-12">
          <AppointmentForm />
        </Card>
      </div>
    </section>
  );
}
