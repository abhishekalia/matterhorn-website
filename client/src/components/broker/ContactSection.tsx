import { Card } from "@/components/ui/card";
import { AppointmentForm } from "./AppointmentForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      data-testid="section-contact"
      style={{ background: 'linear-gradient(to bottom, #1B2A41, #0A1628)' }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            data-testid="text-contact-title"
          >
            Apply to Get{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
              Appointed
            </span>
          </h2>
          <p
            className="text-lg text-white/80 max-w-2xl mx-auto"
            data-testid="text-contact-description"
          >
            Complete the form below to start your partnership with Matterhorn
            Insurance Group.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto p-8 md:p-12 bg-white/5 backdrop-blur-md border-white/10">
          <AppointmentForm />
        </Card>
      </div>
    </section>
  );
}
