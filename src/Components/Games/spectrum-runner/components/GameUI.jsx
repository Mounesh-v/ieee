import { WAVELENGTHS } from "../useGameEngine";

export default function GameUI({
  score,
  level,
  currentWavelength,
  currentPowerup,
}) {
  return (
    <div className="mt-5 w-full max-w-[1100px] mx-auto flex justify-between px-4 flex-wrap text-base sm:text-lg">
      <div className="m-2">
        Wavelength:{" "}
        <span
          className="font-semibold"
          style={{
            color:
              currentWavelength === "VISIBLE"
                ? "white"
                : WAVELENGTHS[currentWavelength].color,
          }}
        >
          {WAVELENGTHS[currentWavelength].name}
        </span>
      </div>

      <div className="m-2">Score: {score}</div>

      <div className="m-2">Level: {level}</div>

      <div className="m-2">
        Power-up:{" "}
        <span className="text-green-400">{currentPowerup || "None"}</span>
      </div>
    </div>
  );
}
