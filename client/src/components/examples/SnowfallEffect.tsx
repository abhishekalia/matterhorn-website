import SnowfallEffect from "../SnowfallEffect";

export default function SnowfallEffectExample() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900 to-black">
      <SnowfallEffect />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white">Snowfall Effect Demo</h1>
      </div>
    </div>
  );
}
