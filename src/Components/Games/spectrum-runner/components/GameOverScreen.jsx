export default function GameOverScreen({ score, onRestart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a1a] text-white text-center px-4">
      <h1 className="text-5xl text-[#00f7ff] drop-shadow-[0_0_25px_#00f7ff] mb-6 animate-pulse">
        Spectrum Runner
      </h1>

      <h2 className="text-3xl text-white mb-4">Game Over!</h2>

      <p className="text-xl mb-4">Your Score: {score}</p>

      <p className="text-[#00f7ff] italic mb-8">
        Visible light is the only part of the electromagnetic spectrum humans
        can see!
      </p>

      <button
        onClick={onRestart}
        className="bg-[#1e66f5] hover:bg-[#0055dd] px-8 py-3 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,102,255,0.5)]"
      >
        Play Again
      </button>
    </div>
  );
}
