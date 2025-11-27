export function DisclaimerSection() {
  return (
    <section 
      className="py-12 relative" 
      data-testid="section-disclaimer"
      style={{ background: '#0A1628' }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-sm font-semibold mb-3 text-white/50">
            LEGAL DISCLAIMER
          </h3>
          <p
            className="text-xs text-white/40 leading-relaxed"
            data-testid="text-disclaimer"
          >
            Matterhorn Insurance Group is not offering coverage directly to
            consumers on this page. All placements are subject to underwriting
            approval. Coverage terms are determined by the issuing carrier.
            State availability varies. MIG acts as a program manager and
            wholesale broker working exclusively with licensed retail brokers.
            This site is for informational purposes only and does not constitute
            an offer to sell insurance or a solicitation to purchase insurance.
            Please consult with a licensed insurance professional for specific
            coverage needs.
          </p>
        </div>
      </div>
    </section>
  );
}
