import { useState, useEffect } from "react";
import VictoryScreen from "./VictoryScreen";
import { useNavigate } from "react-router-dom";

const GRID_SIZE = 10;

/*  LEVEL CONFIG  */

const levels = [
  {
    bombs: [
      [0, 9],
      [8, 8],
    ],
  },
  {
    bombs: [
      [0, 9],
      [8, 8],
      [9, 0],
      [4, 5],
      [8, 4],
    ],
  },
  {
    bombs: [
      [3, 0],
      [5, 4],
      [1, 1],
      [0, 8],
      [6, 9],
      [8, 8],
      [9, 0],
    ],
  },
  {
    bombs: [
      [1, 0],
      [1, 9],
      [4, 8],
      [5, 0],
      [6, 9],
      [7, 7],
      [9, 0],
      [9, 8],
    ],
  },
  {
    bombs: [
      [0, 3],
      [0, 9],
      [2, 1],
      [2, 6],
      [4, 0],
      [4, 7],
      [5, 5],
      [6, 3],
      [6, 7],
      [9, 3],
      [9, 8],
    ],
  },
  {
    bombs: [
      [0, 2],
      [1, 5],
      [2, 1],
      [3, 3],
      [4, 6],
      [5, 0],
      [5, 2],
      [5, 9],
      [6, 4],
      [6, 7],
      [8, 2],
      [9, 8],
    ],
  },
  {
    bombs: [
      [0, 2],
      [0, 7],
      [2, 0],
      [2, 3],
      [2, 8],
      [3, 5],
      [4, 2],
      [4, 5],
      [5, 0],
      [5, 3],
      [7, 7],
      [8, 2],
      [8, 8],
      [9, 8],
    ],
  },
  {
    bombs: [
      [0, 2],
      [0, 8],
      [1, 5],
      [2, 1],
      [2, 2],
      [2, 5],
      [3, 8],
      [4, 0],
      [4, 4],
      [5, 2],
      [6, 0],
      [6, 3],
      [7, 5],
      [7, 7],
      [8, 2],
      [9, 8],
    ],
  },
  {
    bombs: [
      [1, 2],
      [2, 7],
      [3, 0],
      [3, 4],
      [4, 3],
      [4, 8],
      [5, 1],
      [5, 6],
      [6, 3],
      [6, 9],
      [7, 1],
      [7, 0],
      [7, 7],
      [8, 2],
      [9, 5],
      [9, 8],
      [0, 4],
      [0, 8],
    ],
  },
  {
    bombs: [
      [0, 2],
      [0, 9],
      [2, 0],
      [2, 2],
      [1, 4],
      [1, 8],
      [3, 5],
      [4, 1],
      [5, 3],
      [5, 5],
      [5, 7],
      [5, 9],
      [6, 1],
      [7, 5],
      [7, 9],
      [8, 2],
      [8, 7],
      [9, 1],
      [9, 6],
      [9, 8],
    ],
  },
];

export default function LaserMazeGame() {
  const navigate = useNavigate();
  const [level, setLevel] = useState(0);
  const [mirrors, setMirrors] = useState({});
  const [laserPath, setLaserPath] = useState([]);
  const [selectedMirror, setSelectedMirror] = useState(null);
  const [won, setWon] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  const bombs = levels[level].bombs;

  const placeMirror = (row, col) => {
    if (!selectedMirror) return;
    if (row === 0 && col === 0) return;
    if (row === GRID_SIZE - 1 && col === GRID_SIZE - 1) return;
    if (bombs.some(([r, c]) => r === row && c === col)) return;

    const key = `${row}-${col}`;
    setMirrors((prev) => ({
      ...prev,
      [key]: selectedMirror,
    }));
  };

  /*  LASER TRACE  */

  useEffect(() => {
    traceLaser();
  }, [mirrors, level]);

  const traceLaser = () => {
    let x = 0;
    let y = 0;
    let direction = "right";
    let path = [];

    while (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
      path.push(`${x}-${y}`);

      if (x === GRID_SIZE - 1 && y === GRID_SIZE - 1) {
        setWon(true);
        break;
      }

      if (bombs.some(([r, c]) => r === x && c === y)) {
        break;
      }

      const key = `${x}-${y}`;
      if (mirrors[key]) {
        direction = reflect(direction, mirrors[key]);
      }

      if (direction === "right") y++;
      else if (direction === "left") y--;
      else if (direction === "down") x++;
      else if (direction === "up") x--;
    }

    setLaserPath(path);
  };

  const reflect = (dir, type) => {
    if (type === "slash") {
      if (dir === "right") return "up";
      if (dir === "left") return "down";
      if (dir === "up") return "right";
      if (dir === "down") return "left";
    } else {
      if (dir === "right") return "down";
      if (dir === "left") return "up";
      if (dir === "up") return "left";
      if (dir === "down") return "right";
    }
    return dir;
  };

  const reset = () => {
    setMirrors({});
    setWon(false);
    setLaserPath([]);
  };

  const nextLevel = () => {
    if (level < levels.length - 1) {
      setLevel(level + 1);
      reset();
    } else {
      setGameCompleted(true);
    }
  };

  const restartGame = () => {
    setLevel(0);
    setGameCompleted(false);
    reset();
  };

  /*  UI  */

  if (gameCompleted) {
    return <VictoryScreen restartGame={restartGame} />;
  }

  const exitBtn = () => {
    navigate("/game");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617]" />
      <div className="absolute inset-0 opacity-40 blur-3xl bg-[radial-gradient(circle_at_30%_30%,#9333ea,transparent_40%),radial-gradient(circle_at_70%_70%,#06b6d4,transparent_40%)]" />

      <div className="relative z-10 text-center w-full max-w-7xl">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 text-yellow-400 drop-shadow-[0_0_25px_rgba(255,255,0,0.9)]">
          LASER MAZE GAME
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold">
          Level {level + 1}
        </h2>

        <p className="mb-8 sm:mb-10 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          ~ Redirect the laser beam to the exit door using mirrors. Avoid
          obstacles and solve the puzzle.
        </p>

        <div className="flex flex-col xl:flex-row gap-8 sm:gap-10 items-center justify-center">
          {/* GRID */}
          <div className="bg-gray-800/80 backdrop-blur-xl p-4 sm:p-6 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.3)]">
            <div className="grid grid-cols-10 gap-[2px] sm:gap-1">
              {[...Array(GRID_SIZE)].map((_, row) =>
                [...Array(GRID_SIZE)].map((_, col) => {
                  const key = `${row}-${col}`;
                  const isBomb = bombs.some(([r, c]) => r === row && c === col);
                  const isLaser = laserPath.includes(key);

                  return (
                    <div
                      key={key}
                      onClick={() => placeMirror(row, col)}
                      className={`
                    aspect-square 
                    w-7 sm:w-9 md:w-11 lg:w-12
                    flex items-center justify-center
                    border border-white/20 rounded-sm
                    transition-all duration-300
                    ${row === 0 && col === 0 ? "bg-red-600 shadow-[0_0_15px_red]" : ""}
                    ${row === GRID_SIZE - 1 && col === GRID_SIZE - 1 ? "bg-green-600 shadow-[0_0_15px_lime]" : ""}
                    ${isBomb ? "bg-purple-700" : ""}
                    ${isLaser ? "bg-red-500 shadow-[0_0_20px_red]" : "bg-gray-700/60"}
                  `}
                    >
                      {row === 0 && col === 0 && "🔴"}
                      {row === GRID_SIZE - 1 && col === GRID_SIZE - 1 && "🎯"}
                      {isBomb && "💣"}

                      {mirrors[key] === "slash" && (
                        <div className="rotate-45 text-cyan-300 text-sm sm:text-base md:text-xl drop-shadow-[0_0_10px_cyan]">
                          /
                        </div>
                      )}

                      {mirrors[key] === "backslash" && (
                        <div className="-rotate-45 text-cyan-300 text-sm sm:text-base md:text-xl drop-shadow-[0_0_10px_cyan]">
                          \
                        </div>
                      )}
                    </div>
                  );
                }),
              )}
            </div>
          </div>

          {/* CONTROLS PANEL */}
          <div className="bg-gray-900/80 backdrop-blur-xl p-6 sm:p-8 rounded-2xl w-full sm:w-80 shadow-[0_0_40px_rgba(0,255,0,0.2)]">
            <h3 className="text-xl sm:text-2xl mb-6 font-bold">Add Mirrors</h3>

            <div className="flex justify-center gap-6 mb-6">
              <button
                onClick={() => setSelectedMirror("slash")}
                className="bg-gray-700 hover:bg-gray-600 px-5 sm:px-6 py-2 sm:py-3 rounded-lg text-lg sm:text-xl"
              >
                /
              </button>

              <button
                onClick={() => setSelectedMirror("backslash")}
                className="bg-gray-700 hover:bg-gray-600 px-5 sm:px-6 py-2 sm:py-3 rounded-lg text-lg sm:text-xl"
              >
                \
              </button>
            </div>

            <button
              onClick={reset}
              className="bg-gray-700 hover:bg-gray-600 w-full py-2 sm:py-3 rounded-lg mb-4"
            >
              Reset
            </button>

            <button
              onClick={exitBtn}
              className="bg-red-700 hover:bg-red-600 w-full py-2 sm:py-3 rounded-lg mb-6"
            >
              Exit
            </button>

            {won && (
              <>
                <p className="text-green-400 text-lg sm:text-xl mb-4 drop-shadow-[0_0_10px_lime]">
                  You Win! 🎉
                </p>

                <button
                  onClick={nextLevel}
                  className="bg-green-500 hover:bg-green-600 w-full py-2 sm:py-3 rounded-lg shadow-[0_0_15px_lime]"
                >
                  Next Level
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
