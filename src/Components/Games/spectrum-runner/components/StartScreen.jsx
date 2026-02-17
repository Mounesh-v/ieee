export default function StartScreen({ onStart }) {
  return (
    <div className="text-center max-w-[800px] w-full">

      <h1 className="text-[#00f7ff] text-4xl mb-5 drop-shadow-[0_0_10px_rgba(0,247,255,0.5)]">
        Spectrum Runner
      </h1>

      <p className="mb-6">
        Switch wavelengths to avoid obstacles and collect power-ups!
      </p>

      <button
        onClick={onStart}
        className="bg-[#0066ff] hover:bg-[#0055dd] px-6 py-3 rounded transition-transform hover:scale-105"
      >
        Start Game
      </button>

      {/* Controls */}
      <div className="mt-8 text-left p-4 bg-[rgba(0,0,50,0.5)] rounded border-l-4 border-[#00f7ff]">
        <p className="font-bold mb-2">Controls:</p>
        <p>1 = Infrared (IR) - Passes heat clouds</p>
        <p>2 = Visible Light - Passes mirrors</p>
        <p>3 = Ultraviolet (UV) - Passes UV barriers</p>
        <p>Arrow Up / Down = Move</p>
      </div>

    </div>
  );
}
