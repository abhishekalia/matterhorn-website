import { Badge } from "@/components/ui/badge";

const markets = [
  "Ascot",
  "Argo",
  "Berkley",
  "Chubb",
  "Coalition",
  "Corvus",
  "CRC",
  "Everest",
  "Great American",
  "Hiscox",
  "Liberty Mutual",
  "Markel",
  "Munich Re",
  "Nationwide",
  "OneBeacon",
  "QBE",
  "RLI",
  "Sompo",
  "Starr",
  "Swiss Re",
  "Tokio Marine",
  "Travelers",
  "W.R. Berkley",
  "Zurich",
  "AmTrust",
  "AXA XL",
  "Beazley",
  "CNA",
  "Fairfax",
  "Hanover",
  "Hartford",
  "Progressive Commercial",
];

export function MarketsSection() {
  return (
    <section
      id="markets"
      className="py-24 bg-card overflow-hidden"
      data-testid="section-markets"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-serif font-semibold mb-4"
            data-testid="text-markets-title"
          >
            Access to 30+ Curated Markets
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-markets-description"
          >
            Innovative underwriting for specialty and hard‑to‑place risk.
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {markets.map((market, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm hover-elevate transition-all duration-300"
                data-testid={`badge-market-${index}`}
              >
                {market}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
