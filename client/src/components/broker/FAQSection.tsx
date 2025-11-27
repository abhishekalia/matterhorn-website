import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are you application‑agnostic?",
    answer:
      "Yes. We accept any application and submit across our platform or directly to carriers. You can use your existing forms or we can provide ours.",
  },
  {
    question: "Do you build custom intake forms?",
    answer:
      "Yes. We can build tailored forms per program that integrate directly with our underwriting platform and your systems.",
  },
  {
    question: "How fast can we launch a new program?",
    answer:
      "Often within weeks for well‑defined programs. We handle filings, market placement, and technical setup in parallel to accelerate go‑to‑market.",
  },
  {
    question: "Do you offer admin consoles for brokers?",
    answer:
      "Yes. We can provide custom broker portals for policy management, or MIG can handle all administration on your behalf.",
  },
  {
    question: "How do you communicate with brokers?",
    answer:
      "Directly with underwriting teams via email and portal as needed. We prioritize speed and clarity—if email is fastest, that's what we use.",
  },
  {
    question: "Which markets do you access?",
    answer:
      "We maintain relationships with 30+ curated, innovative underwriting partners across multiple specialty lines and hard‑to‑place risks.",
  },
  {
    question: "What is your technology stack?",
    answer:
      "We deploy only what each client needs—no forced platform. Our solutions include APIs, embeddable iframes, automated workflows, and custom integrations.",
  },
  {
    question: "How do I get started?",
    answer:
      "Complete our appointment application below. We'll verify your credentials, schedule a brief intro call, and you can start submitting immediately upon approval.",
  },
];

export function FAQSection() {
  return (
    <section 
      id="faq" 
      className="py-24 relative overflow-hidden" 
      data-testid="section-faq"
      style={{ background: 'linear-gradient(to bottom, #0A1628, #1B2A41)' }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            data-testid="text-faq-title"
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
              Questions
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/10 rounded-md px-6 bg-white/5 backdrop-blur-md"
                data-testid={`accordion-faq-${index}`}
              >
                <AccordionTrigger
                  className="text-left hover:no-underline text-white"
                  data-testid={`accordion-trigger-${index}`}
                >
                  <span className="font-bold">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent
                  className="text-white/70"
                  data-testid={`accordion-content-${index}`}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
