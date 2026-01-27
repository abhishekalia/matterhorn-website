import matterhornHero from "@assets/generated_images/Matterhorn_mountains_hero_background_315f6fa4.png";

export default function BrokerCTA() {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden" data-testid="section-closing">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${matterhornHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>
      
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6">
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            data-testid="text-closing-title"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/90 via-white/70 to-white/40">
              Matterhorn
            </span>
          </h2>
          <p 
            className="text-lg md:text-xl lg:text-2xl uppercase tracking-[0.3em] mt-3 text-transparent bg-clip-text bg-gradient-to-r from-white/70 via-white/50 to-white/30 font-medium"
            data-testid="text-closing-subtitle"
          >
            Insurance Group
          </p>
        </div>
      </div>
    </section>
  );
}
