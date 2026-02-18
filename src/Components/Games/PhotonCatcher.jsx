import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const photonFacts = [
  "Photons have zero rest mass but carry energy.",
  "Photonics is the science of light generation, detection, and manipulation.",
  "LEDs and lasers are key photonics technologies.",
  "Fiber optics rely on photonics for high-speed data transmission.",
  "Photons exhibit wave-particle duality.",
  "Einstein won a Nobel Prize for explaining the photoelectric effect.",
];

export default function PhotonCatcher() {
  const [score, setScore] = useState(0);
  const [photons, setPhotons] = useState([]);
  const [running, setRunning] = useState(false);
  const [showFact, setShowFact] = useState(false);
  const [fact, setFact] = useState("");
  const collectorRef = useRef(null);

  const navigate = useNavigate();

  function startGame() {
    setScore(0);
    setPhotons([]);
    setShowFact(false);
    setRunning(true);
  }

  function endGame() {
    setRunning(false);
    setPhotons([]);

    const randomFact =
      photonFacts[Math.floor(Math.random() * photonFacts.length)];

    setFact(randomFact);
    setShowFact(true);
  }

  // Mouse Control
  useEffect(() => {
    const move = (e) => {
      if (!running || !collectorRef.current) return;
      const x = e.clientX - 60;
      collectorRef.current.style.left = `${x}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [running]);

  // Spawn photons
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      const id = Date.now();
      const isDark = Math.random() < 0.25;
      const left = Math.random() * (window.innerWidth - 30);

      setPhotons((prev) => [...prev, { id, isDark, left }]);

      setTimeout(() => {
        setPhotons((prev) => prev.filter((p) => p.id !== id));
      }, 4000);
    }, 700);

    return () => clearInterval(interval);
  }, [running]);

  // Collision detection
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      const collector = collectorRef.current?.getBoundingClientRect();
      if (!collector) return;

      setPhotons((prev) =>
        prev.filter((p) => {
          const el = document.getElementById(`p-${p.id}`);
          if (!el) return true;

          const rect = el.getBoundingClientRect();

          const hit =
            rect.bottom >= collector.top &&
            rect.left < collector.right &&
            rect.right > collector.left;

          if (hit) {
            if (p.isDark) {
              endGame();
              return false;
            } else {
              setScore((s) => s + 1);
              return false;
            }
          }

          return true;
        }),
      );
    }, 40);

    return () => clearInterval(interval);
  }, [running]);

  const handleExit = () => {
    navigate("/game");
  };

  return (
    <div className="w-screen h-screen bg-black overflow-hidden relative select-none text-white">
      {/* Start Screen */}
      {!running && !showFact && score === 0 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
          <h1 className="text-4xl font-bold">⚡ Photon Catcher</h1>
          <button
            onClick={startGame}
            className="px-8 py-3 bg-cyan-400 text-black rounded-xl text-lg hover:bg-cyan-300 transition"
          >
            Play
          </button>
          <button
            onClick={handleExit}
            className="px-8 py-3 bg-red-500 text-black rounded-xl text-lg hover:bg-red-600 transition"
          >
            Exit
          </button>
        </div>
      )}

      {/* Score */}
      {running && (
        <div className="absolute top-4 left-4 text-2xl font-semibold">
          Score: {score}
        </div>
      )}

      {/* Collector */}
      {running && (
        <div
          ref={collectorRef}
          className="absolute bottom-8 w-[120px] h-[25px] rounded-full 
                     bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"
        />
      )}

      {/* Photons */}
      {photons.map((p) => (
        <div
          key={p.id}
          id={`p-${p.id}`}
          style={{
            left: p.left,
            animation: "fall 4s linear forwards",
          }}
          className={`absolute top-0 w-[30px] h-[30px] rounded-full shadow-lg
            ${p.isDark ? "bg-red-700" : "bg-yellow-400"}`}
        />
      ))}

      {/* Fact UI After Losing */}
      {showFact && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 bg-black text-center">
          <h2 className="text-3xl font-bold">Did You Know?</h2>
          <p className="text-lg text-gray-300 max-w-xl px-6">{fact}</p>
          <button
            onClick={startGame}
            className="px-8 py-3 bg-cyan-400 text-black rounded-xl text-lg hover:bg-cyan-300 transition"
          >
            Continue
          </button>
          <button
            onClick={handleExit}
            className="px-8 py-3 bg-red-500 text-black rounded-xl text-lg hover:bg-red-300 transition"
          >
            Exit
          </button>
        </div>
      )}

      {/* Animation */}
      <style>
        {`
          @keyframes fall {
            from { transform: translateY(0); }
            to { transform: translateY(100vh); }
          }
        `}
      </style>
    </div>
  );
}
