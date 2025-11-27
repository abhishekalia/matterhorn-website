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
      className="py-24 relative overflow-hidden"
      data-testid="section-markets"
      style={{ background: 'linear-gradient(to bottom, #1B2A41, #0A1628)' }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            data-testid="text-markets-title"
          >
            Access to 30+{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
              Curated Markets
            </span>
          </h2>
          <p
            className="text-lg text-white/80 max-w-2xl mx-auto"
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
                className="px-4 py-2 text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
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
