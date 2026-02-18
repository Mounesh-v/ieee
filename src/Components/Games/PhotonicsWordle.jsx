import { useEffect, useState } from "react";

const levelWords = [
  "OPTIC",
  "TAPER",
  "PROBE",
  "XENON",
  "MODAL",
  "QDOTS",
  "SPECT",
  "BRAGG",
  "KERMA",
  "ZBLAN",
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
      })),
    );

  const [board, setBoard] = useState(createEmptyBoard());
  const [currentRow, setCurrentRow] = useState(0);
  const [currentTile, setCurrentTile] = useState(0);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [keyStates, setKeyStates] = useState({});

  /*  INIT  */

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

  /*  INPUT  */

  useEffect(() => {
    const handleKey = (e) => {
      if (gameOver || levelComplete) return;

      if (e.key === "Enter") handleEnter();
      else if (e.key === "Backspace") handleBackspace();
      else if (/^[a-zA-Z]$/.test(e.key)) handleLetter(e.key.toUpperCase());
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

  /*  EVALUATION  */

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
        { level: currentLevel + 1, word: targetWord },
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

  /*  STYLES  */

  const getTileStyle = (state) => {
    if (state === "correct") return "bg-green-500 border-green-500 text-white";
    if (state === "present")
      return "bg-yellow-400 border-yellow-400 text-white";
    if (state === "absent") return "bg-gray-700 border-gray-700 text-gray-400";
    if (state === "filled") return "border-blue-400";
    return "border-gray-600";
  };

  const getKeyStyle = (key) => {
    const state = keyStates[key];
    if (state === "correct") return "bg-green-500";
    if (state === "present") return "bg-yellow-400";
    if (state === "absent") return "bg-gray-800 text-gray-500";
    return "bg-gray-700 hover:bg-gray-600";
  };

  return (
    <div className="min-h-screen bg-[#05071a] text-white flex flex-col items-center px-4 py-6 sm:py-8 overflow-x-hidden">
      {/* TITLE */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4af] drop-shadow-[0_0_25px_#4af] mb-4 text-center">
        PHOTONICS WORDLE
      </h1>

      {/* LEVEL BADGE */}
      <div className="mb-6 px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full border border-[#4af]">
        LEVEL: {currentLevel + 1}/10
      </div>

      {/* COMPLETED LEVELS PANEL */}
      {completedLevels.length > 0 && (
        <div className="mb-8 w-full max-w-xl bg-[#0f1b3d] border border-blue-400 rounded-xl p-4 shadow-lg">
          <h3 className="text-blue-300 font-semibold mb-3 text-sm sm:text-base">
            Completed Levels
          </h3>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {completedLevels.map((item, index) => (
              <div
                key={index}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base bg-green-500 text-white rounded-md font-semibold"
              >
                L{item.level}: {item.word}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* BOARD */}
      <div className="grid grid-rows-6 gap-2 sm:gap-3 mb-8">
        {board.map((row, r) => (
          <div key={r} className="grid grid-cols-5 gap-2 sm:gap-3">
            {row.map((tile, c) => (
              <div
                key={c}
                className={`
              aspect-square
              w-10 sm:w-12 md:w-14 lg:w-16
              flex items-center justify-center
              text-lg sm:text-xl md:text-2xl
              font-bold rounded-md border-2
              transition-all duration-300
              ${getTileStyle(tile.state)}
            `}
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
          className="mb-8 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-105 transition-all font-semibold"
        >
          Next Level →
        </button>
      )}

      {/* KEYBOARD */}
      <div className="space-y-2 w-full max-w-md sm:max-w-xl mx-auto">
        {["QWERTYUIOP", "ASDFGHJKL"].map((row, idx) => (
          <div key={idx} className="flex justify-center gap-1">
            {row.split("").map((k) => (
              <button
                key={k}
                onClick={() => handleLetter(k)}
                className={`
            flex-1
            max-w-[32px] sm:max-w-[40px] md:max-w-[48px]
            h-10 sm:h-12 md:h-14
            text-xs sm:text-sm md:text-base
            rounded-md
            font-semibold
            ${getKeyStyle(k)}
          `}
              >
                {k}
              </button>
            ))}
          </div>
        ))}

        <div className="flex justify-center gap-1">
          <button
            onClick={handleEnter}
            className="px-2 sm:px-3 md:px-4
                 h-10 sm:h-12 md:h-14
                 text-[10px] sm:text-xs md:text-sm
                 bg-gray-700 rounded-md font-semibold"
          >
            ENTER
          </button>

          {"ZXCVBNM".split("").map((k) => (
            <button
              key={k}
              onClick={() => handleLetter(k)}
              className={`
          flex-1
          max-w-[32px] sm:max-w-[40px] md:max-w-[48px]
          h-10 sm:h-12 md:h-14
          text-xs sm:text-sm md:text-base
          rounded-md
          font-semibold
          ${getKeyStyle(k)}
        `}
            >
              {k}
            </button>
          ))}

          <button
            onClick={handleBackspace}
            className="px-2 sm:px-3 md:px-4
                 h-10 sm:h-12 md:h-14
                 text-xs sm:text-sm
                 bg-gray-700 rounded-md font-semibold"
          >
            ⌫
          </button>
        </div>
      </div>
    </div>
  );
}
