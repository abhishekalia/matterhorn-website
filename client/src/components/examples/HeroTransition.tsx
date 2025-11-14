import HeroTransition from "../HeroTransition";

export default function HeroTransitionExample() {
  return (
    <div className="min-h-[200vh]">
      <HeroTransition />
      <div className="relative z-10">
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Hero Section</h1>
        </div>
        <div className="min-h-screen bg-background p-8">
          <h2 className="text-3xl font-bold mb-4">Content Below</h2>
          <p className="text-lg">Scroll to see the mountain fade into falling snow...</p>
        </div>
      </div>
    </div>
  );
}
