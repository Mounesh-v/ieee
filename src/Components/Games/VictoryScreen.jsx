import { useEffect, useRef } from "react";
import "./victory.css"

export default function VictoryScreen({ restartGame }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    initCanvas();

    let wave = {
      y: canvas.height / 2,
      length: 0.01,
      amplitude: 100,
      frequency: 0.01,
    };

    let increment = wave.frequency;
    let animationFrame;

    const animateWaves = () => {
      animationFrame = requestAnimationFrame(animateWaves);

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let i = 0; i < canvas.width; i++) {
        ctx.lineTo(
          i,
          wave.y +
            Math.sin(i * wave.length + increment) *
              wave.amplitude *
              Math.sin(increment)
        );
      }

      ctx.strokeStyle = `hsl(${Math.abs(
        200 * Math.sin(increment)
      )}, 50%, 50%)`;

      ctx.lineWidth = 2;
      ctx.stroke();

      increment += wave.frequency;
    };

    animateWaves();

    window.addEventListener("resize", initCanvas);

    /* Sparkles */

    const createSparkle = (e) => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";

      const size = Math.random() * 20 + 10;
      const x = e ? e.clientX : Math.random() * window.innerWidth;
      const y = e ? e.clientY : Math.random() * window.innerHeight;

      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;

      document.body.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 1000);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.7) createSparkle();
    }, 300);

    const mouseMoveHandler = (e) => {
      if (Math.random() > 0.8) createSparkle(e);
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearInterval(interval);
      document.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("resize", initCanvas);
    };
  }, []);

  return (
    <div className="victory-wrapper">
      <div className="victory-container">
        <h1 className="game-over">Game Over</h1>
        <h1 className="you-won">- You Won -</h1>

        <button onClick={restartGame} className="restart-btn">
          Restart Game
        </button>
      </div>

      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
