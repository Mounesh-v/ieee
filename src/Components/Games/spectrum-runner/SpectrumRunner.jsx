import { useRef, useState, useEffect } from "react";
import useGameEngine from "./useGameEngine";
import StartScreen from "./components/StartScreen";
import GameCanvas from "./components/GameCanvas";
import GameUI from "./components/GameUI";
import GameOverScreen from "./components/GameOverScreen";

export default function SpectrumRunner() {
  const canvasRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  const [gameState, setGameState] = useState("start");
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [currentWavelength, setCurrentWavelength] = useState("VISIBLE");
  const [currentPowerup, setCurrentPowerup] = useState(null);

  const { resetGame, changeWavelength, moveUp, moveDown } = useGameEngine({
    canvasRef,
    gameState,
    setGameState,
    setScore,
    setLevel,
    setCurrentWavelength,
    setCurrentPowerup,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
   <div className="min-h-screen bg-[#0a0a1a] text-white flex flex-col items-center justify-center px-4">
      {gameState === "start" && (
        <StartScreen onStart={() => setGameState("running")} />
      )}

      {gameState === "running" && (
        <div className="text-center">
          <GameCanvas canvasRef={canvasRef} />
          <GameUI
            score={score}
            level={level}
            currentWavelength={currentWavelength}
            currentPowerup={currentPowerup}
          />
        </div>
      )}

      {isMobile && gameState === "running" && (
        <div className="w-full max-w-[1100px] mx-auto mt-6 flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <button
              onClick={() => changeWavelength("IR")}
              className="bg-red-500 px-5 py-3 rounded-lg text-white"
            >
              IR
            </button>

            <button
              onClick={() => changeWavelength("VISIBLE")}
              className="bg-white text-black px-5 py-3 rounded-lg"
            >
              Visible
            </button>

            <button
              onClick={() => changeWavelength("UV")}
              className="bg-purple-600 px-5 py-3 rounded-lg text-white"
            >
              UV
            </button>
          </div>

          <div className="flex gap-6">
            <button
              onClick={moveUp}
              className="bg-blue-600 px-6 py-3 rounded-lg text-white"
            >
              ↑
            </button>

            <button
              onClick={moveDown}
              className="bg-blue-600 px-6 py-3 rounded-lg text-white"
            >
              ↓
            </button>
          </div>
        </div>
      )}

      {gameState === "gameover" && (
        <GameOverScreen
          score={score}
          onRestart={() => {
            resetGame();
            setGameState("running");
          }}
        />
      )}
    </div>
  );
}
