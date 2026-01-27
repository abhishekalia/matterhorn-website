import matterhornHero from "@assets/generated_images/Matterhorn_mountains_hero_background_315f6fa4.png";

export default function BrokerCTA() {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden" data-testid="section-closing">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${matterhornHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/85 via-[#1B2A41]/80 to-[#0A1628]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6">
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
            data-testid="text-closing-title"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
              MATTERHORN
            </span>
          </h2>
          <p 
            className="text-sm md:text-base lg:text-lg uppercase tracking-[0.3em] mt-2 font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary/80 via-cyan-400/70 to-primary/80"
            data-testid="text-closing-subtitle"
          >
            Insurance Group
          </p>
        </div>
      </div>
    </section>
  );
}
