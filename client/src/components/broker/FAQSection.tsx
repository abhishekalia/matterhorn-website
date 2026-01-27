import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    category: "Platform",
    question: "Are you application-agnostic?",
    answer:
      "Yes. We accept any application and submit across our platform or directly to carriers. You can use your existing forms or we can provide ours.",
  },
  {
    category: "Technology",
    question: "Do you build custom intake forms?",
    answer:
      "Yes. We can build tailored forms per program that integrate directly with our underwriting platform and your systems.",
  },
  {
    category: "Timeline",
    question: "How fast can we launch a new program?",
    answer:
      "Often within weeks for well-defined programs. We handle filings, market placement, and technical setup in parallel to accelerate go-to-market.",
  },
  {
    category: "Tools",
    question: "Do you offer admin consoles for brokers?",
    answer:
      "Yes. We can provide custom broker portals for policy management, or MIG can handle all administration on your behalf.",
  },
  {
    category: "Communication",
    question: "How do you communicate with brokers?",
    answer:
      "Directly with underwriting teams via email and portal as needed. We prioritize speed and clarity—if email is fastest, that's what we use.",
  },
  {
    category: "Markets",
    question: "Which markets do you access?",
    answer:
      "We maintain relationships with 30+ curated, innovative underwriting partners across multiple specialty lines and hard-to-place risks.",
  },
  {
    category: "Technology",
    question: "What is your technology stack?",
    answer:
      "We deploy only what each client needs—no forced platform. Our solutions include APIs, embeddable iframes, automated workflows, and custom integrations.",
  },
  {
    category: "Getting Started",
    question: "How do I get started?",
    answer:
      "Complete our appointment application below. We'll verify your credentials, schedule a brief intro call, and you can start submitting immediately upon approval.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-24 relative overflow-hidden" 
      data-testid="section-faq"
      style={{ background: 'linear-gradient(to bottom, #0A1628, #1B2A41)' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-primary/8 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500/6 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-[1px] bg-gradient-to-r from-primary to-transparent" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary/80">
                  Support
                </span>
              </div>
              
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                data-testid="text-faq-title"
              >
                Frequently
                <br />
                Asked{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
                  Questions
                </span>
              </h2>
              
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                Everything you need to know about partnering with Matterhorn. 
                Can't find what you're looking for? Reach out to our team.
              </p>

              <div className="pt-4 hidden lg:block">
                <div className="flex items-center gap-3 p-4 rounded-md bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/40 font-medium">Still have questions?</p>
                    <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">Contact our team</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-2 hidden lg:flex">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">{faqs.length}</p>
                  <p className="text-[9px] uppercase tracking-wider text-white/40">Questions</p>
                </div>
                <div className="w-[1px] h-10 bg-white/10" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">24h</p>
                  <p className="text-[9px] uppercase tracking-wider text-white/40">Response</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`group relative rounded-lg border transition-all duration-500 overflow-hidden ${
                    openIndex === index 
                      ? "bg-primary/15 border-primary/40 shadow-lg shadow-primary/10" 
                      : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                  }`}
                  data-testid={`accordion-faq-${index}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 flex items-start gap-4"
                    data-testid={`accordion-trigger-${index}`}
                  >
                    {/* Number Badge */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      openIndex === index 
                        ? "bg-primary text-white" 
                        : "bg-white/10 text-white/50 group-hover:bg-primary/30 group-hover:text-primary"
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge 
                          variant="outline" 
                          className={`text-[9px] uppercase tracking-wider px-2 py-0 h-4 border-none transition-colors ${
                            openIndex === index 
                              ? "bg-primary/30 text-primary" 
                              : "bg-white/10 text-white/40"
                          }`}
                        >
                          {faq.category}
                        </Badge>
                      </div>
                      <h3 className={`font-semibold text-base transition-colors ${
                        openIndex === index ? "text-white" : "text-white/80 group-hover:text-white"
                      }`}>
                        {faq.question}
                      </h3>
                    </div>

                    {/* Expand Icon */}
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index 
                        ? "bg-primary/30 rotate-180" 
                        : "bg-white/10 group-hover:bg-white/20"
                    }`}>
                      <ChevronDown className={`w-4 h-4 transition-colors ${
                        openIndex === index ? "text-primary" : "text-white/50"
                      }`} />
                    </div>
                  </button>

                  {/* Answer */}
                  {openIndex === index && (
                    <div 
                      className="overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300"
                      data-testid={`accordion-content-${index}`}
                    >
                      <div className="px-5 pb-5 pl-[4.5rem]">
                        <p className="text-sm text-white/60 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                    openIndex === index ? "opacity-100" : "opacity-0"
                  }`}>
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Contact Card */}
            <div className="mt-8 lg:hidden">
              <div className="flex items-center gap-3 p-4 rounded-md bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40 font-medium">Still have questions?</p>
                  <p className="text-sm font-medium text-white">Contact our team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
