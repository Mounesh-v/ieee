import { useEffect, useState } from "react";

const levelWords = [
  "OPTIC", "TAPER", "PROBE", "XENON", "MODAL",
  "QDOTS", "SPECT", "BRAGG", "KERMA", "ZBLAN"
];

export default function PhotonicsWordle() {

  const [currentLevel, setCurrentLevel] = useState(0);
  const [targetWord, setTargetWord] = useState(levelWords[0]);
  const [levelComplete, setLevelComplete] = useState(false);
  const [completedLevels, setCompletedLevels] = useState([]);

  const createEmptyBoard = () =>
    Array.from({ length: 6 }, () =>
      Array.from({ length: 5 }, () => ({
        letter: "",
        state: "empty",
      }))
    );

  const [board, setBoard] = useState(createEmptyBoard());
  const [currentRow, setCurrentRow] = useState(0);
  const [currentTile, setCurrentTile] = useState(0);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [keyStates, setKeyStates] = useState({});

  /* ================= INIT ================= */

  useEffect(() => {
    setTargetWord(levelWords[currentLevel]);
    resetGame();
  }, [currentLevel]);

  const resetGame = () => {
    setBoard(createEmptyBoard());
    setCurrentRow(0);
    setCurrentTile(0);
    setGameOver(false);
    setLevelComplete(false);
    setMessage("");
    setKeyStates({});
  };

  /* ================= INPUT ================= */

  useEffect(() => {
    const handleKey = (e) => {
      if (gameOver || levelComplete) return;

      if (e.key === "Enter") handleEnter();
      else if (e.key === "Backspace") handleBackspace();
      else if (/^[a-zA-Z]$/.test(e.key))
        handleLetter(e.key.toUpperCase());
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const handleLetter = (letter) => {
    if (currentTile >= 5) return;

    const newBoard = board.map((row) => row.map((tile) => ({ ...tile })));
    newBoard[currentRow][currentTile] = {
      letter,
      state: "filled",
    };

    setBoard(newBoard);
    setCurrentTile((prev) => prev + 1);
  };

  const handleBackspace = () => {
    if (currentTile <= 0) return;

    const newBoard = board.map((row) => row.map((tile) => ({ ...tile })));
    newBoard[currentRow][currentTile - 1] = {
      letter: "",
      state: "empty",
    };

    setBoard(newBoard);
    setCurrentTile((prev) => prev - 1);
  };

  const handleEnter = () => {
    if (currentTile !== 5) {
      setMessage("Not enough letters");
      return;
    }

    const guess = board[currentRow].map((t) => t.letter).join("");
    evaluateGuess(guess);
  };

  /* ================= EVALUATION ================= */

  const evaluateGuess = (guess) => {
    const targetLetters = targetWord.split("");
    const result = Array(5).fill("absent");

    for (let i = 0; i < 5; i++) {
      if (guess[i] === targetLetters[i]) {
        result[i] = "correct";
        targetLetters[i] = null;
      }
    }

    for (let i = 0; i < 5; i++) {
      if (result[i] === "correct") continue;
      const index = targetLetters.indexOf(guess[i]);
      if (index !== -1) {
        result[i] = "present";
        targetLetters[index] = null;
      }
    }

    const newBoard = board.map((row) => row.map((tile) => ({ ...tile })));

    for (let i = 0; i < 5; i++) {
      newBoard[currentRow][i].state = result[i];

      setKeyStates((prev) => ({
        ...prev,
        [guess[i]]:
          result[i] === "correct"
            ? "correct"
            : result[i] === "present" && prev[guess[i]] !== "correct"
            ? "present"
            : prev[guess[i]] || "absent",
      }));
    }

    setBoard(newBoard);

    if (guess === targetWord) {
      setCompletedLevels((prev) => [
        ...prev,
        { level: currentLevel + 1, word: targetWord }
      ]);
      setLevelComplete(true);
      setGameOver(true);
      return;
    }

    if (currentRow === 5) {
      setMessage(`Game Over! Word was ${targetWord}`);
      setGameOver(true);
      return;
    }

    setCurrentRow((prev) => prev + 1);
    setCurrentTile(0);
  };

  /* ================= STYLES ================= */

  const getTileStyle = (state) => {
    if (state === "correct")
      return "bg-green-500 border-green-500 text-white";
    if (state === "present")
      return "bg-yellow-400 border-yellow-400 text-white";
    if (state === "absent")
      return "bg-gray-700 border-gray-700 text-gray-400";
    if (state === "filled")
      return "border-blue-400";
    return "border-gray-600";
  };

  const getKeyStyle = (key) => {
    const state = keyStates[key];
    if (state === "correct") return "bg-green-500";
    if (state === "present") return "bg-yellow-400";
    if (state === "absent") return "bg-gray-800 text-gray-500";
    return "bg-gray-700 hover:bg-gray-600";
  };

  /* ================= RENDER ================= */

  return (
    <div className="min-h-screen bg-[#05071a] text-white flex flex-col items-center px-4 py-8">

      <h1 className="text-5xl font-bold text-[#4af] drop-shadow-[0_0_25px_#4af] mb-4">
        PHOTONICS WORDLE
      </h1>

      <div className="mb-6 px-6 py-2 rounded-full border border-[#4af]">
        LEVEL: {currentLevel + 1}/10
      </div>

      {/* COMPLETED LEVELS PANEL */}
      {completedLevels.length > 0 && (
        <div className="mb-8 w-full max-w-xl bg-[#0f1b3d] border border-blue-400 rounded-xl p-4 shadow-lg">
          <h3 className="text-blue-300 font-semibold mb-3">
            Completed Levels
          </h3>
          <div className="flex flex-wrap gap-3">
            {completedLevels.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-green-500 text-white rounded-md font-semibold"
              >
                L{item.level}: {item.word}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* BOARD */}
      <div className="grid grid-rows-6 gap-3 mb-8">
        {board.map((row, r) => (
          <div key={r} className="grid grid-cols-5 gap-3">
            {row.map((tile, c) => (
              <div
                key={c}
                className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-2xl font-bold rounded-md border-2 transition-all duration-300 ${getTileStyle(tile.state)}`}
              >
                {tile.letter}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* NEXT BUTTON */}
      {levelComplete && currentLevel < 9 && (
        <button
          onClick={() => setCurrentLevel((prev) => prev + 1)}
          className="mb-8 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-105 transition-all font-semibold"
        >
          Next Level →
        </button>
      )}

      {/* KEYBOARD */}
      <div className="space-y-3 w-full max-w-xl">
        {["QWERTYUIOP", "ASDFGHJKL"].map((row, idx) => (
          <div key={idx} className="flex justify-center gap-2">
            {row.split("").map((k) => (
              <button
                key={k}
                onClick={() => handleLetter(k)}
                className={`w-12 h-12 rounded-md ${getKeyStyle(k)}`}
              >
                {k}
              </button>
            ))}
          </div>
        ))}

        <div className="flex justify-center gap-2">
          <button
            onClick={handleEnter}
            className="px-4 py-3 bg-gray-700 rounded-md"
          >
            ENTER
          </button>

          {"ZXCVBNM".split("").map((k) => (
            <button
              key={k}
              onClick={() => handleLetter(k)}
              className={`w-12 h-12 rounded-md ${getKeyStyle(k)}`}
            >
              {k}
            </button>
          ))}

          <button
            onClick={handleBackspace}
            className="px-4 py-3 bg-gray-700 rounded-md"
          >
            ⌫
          </button>
        </div>
      </div>
    </div>
  );
}
