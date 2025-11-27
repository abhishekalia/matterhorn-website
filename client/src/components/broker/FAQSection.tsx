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
    <section id="faq" className="py-24 bg-background" data-testid="section-faq">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-serif font-semibold mb-4"
            data-testid="text-faq-title"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-md px-6 bg-card"
                data-testid={`accordion-faq-${index}`}
              >
                <AccordionTrigger
                  className="text-left hover:no-underline"
                  data-testid={`accordion-trigger-${index}`}
                >
                  <span className="font-serif font-semibold">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent
                  className="text-muted-foreground"
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
