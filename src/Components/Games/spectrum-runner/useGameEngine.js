import { useRef, useEffect } from "react";

export const WAVELENGTHS = {
  IR: { color: "#ff4500", name: "Infrared (IR)" },
  VISIBLE: { color: "white", name: "Visible Light" },
  UV: { color: "#9400d3", name: "Ultraviolet (UV)" },
};

export const POWERUPS = {
  SHIELD: { name: "Shield", duration: 5000, color: "#00ff00" },
  SLOW_TIME: { name: "Slow Time", duration: 3000, color: "#ffff00" },
  DOUBLE_POINTS: { name: "Double Points", duration: 10000, color: "#ff00ff" },
};

export default function useGameEngine({
  canvasRef,
  gameState,
  setGameState,
  setScore,
  setLevel,
  setCurrentWavelength,
  setCurrentPowerup,
}) {
  const animationRef = useRef();
  const keysRef = useRef({});
  const obstaclesRef = useRef([]);
  const powerupsRef = useRef([]);

  const particlesRef = useRef([]);

  const moveUp = () => {
      photonRef.current.y -= photonRef.current.speed;
    };

    const moveDown = () => {
      photonRef.current.y += photonRef.current.speed;
    };

  const photonRef = useRef({
    x: 50,
    y: 250,
    radius: 15,
    speed: 5,
    wavelength: "VISIBLE",
    shielded: false,
    powerup: null,
    powerupEndTime: 0,
  });

  const scoreRef = useRef(0);
  const levelRef = useRef(1);
  const obstacleSpeedRef = useRef(3);
  const frameCountRef = useRef(0);

  /* ================= GAME LOOP ================= */

  useEffect(() => {
    if (gameState !== "running") return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const parentWidth = canvas.parentElement.offsetWidth;

    canvas.width = 1100;
    canvas.height = 500;

    function drawBackground() {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#000033");
      gradient.addColorStop(1, "#000011");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function spawnParticle() {
      const bandHeight = 120; // thickness of particle strip
      const centerY = canvas.height / 2;

      particlesRef.current.push({
        x: canvas.width,
        y: centerY - bandHeight / 2 + Math.random() * bandHeight,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 2 + 1,
      });
    }

    function updateParticles() {
      particlesRef.current.forEach((p) => {
        p.x -= p.speed;
      });

      particlesRef.current = particlesRef.current.filter((p) => p.x > 0);
    }

    function drawParticles() {
      particlesRef.current.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "white";
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    }

    

    function updatePhoton() {
      const photon = photonRef.current;
      const keys = keysRef.current;

      if (keys["ArrowUp"] && photon.y > photon.radius) photon.y -= photon.speed;

      if (keys["ArrowDown"] && photon.y < canvas.height - photon.radius)
        photon.y += photon.speed;
    }

    function drawPhoton() {
      const photon = photonRef.current;

      ctx.beginPath();
      ctx.arc(photon.x, photon.y, photon.radius, 0, Math.PI * 2);

      if (photon.wavelength === "VISIBLE") {
        const gradient = ctx.createLinearGradient(
          photon.x - photon.radius,
          photon.y,
          photon.x + photon.radius,
          photon.y,
        );
        gradient.addColorStop(0, "red");
        gradient.addColorStop(0.5, "green");
        gradient.addColorStop(1, "blue");
        ctx.fillStyle = gradient;
      } else {
        ctx.fillStyle = WAVELENGTHS[photon.wavelength].color;
      }

      ctx.shadowBlur = 15;
      ctx.shadowColor = ctx.fillStyle;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    function spawnObstacle() {
      obstaclesRef.current.push({
        x: canvas.width,
        y: Math.random() * (canvas.height - 80),
        width: 30,
        height: 80,
        type: ["mirror", "heat_cloud", "uv_barrier"][
          Math.floor(Math.random() * 3)
        ],
      });
    }

    function updateObstacles() {
      const photon = photonRef.current;

      obstaclesRef.current.forEach((o) => {
        o.x -= obstacleSpeedRef.current;

        const collided =
          photon.x + photon.radius > o.x &&
          photon.x - photon.radius < o.x + o.width &&
          photon.y + photon.radius > o.y &&
          photon.y - photon.radius < o.y + o.height;

        if (collided) {
          let shouldCollide = true;

          if (o.type === "mirror" && photon.wavelength === "VISIBLE")
            shouldCollide = false;

          if (o.type === "heat_cloud" && photon.wavelength === "IR")
            shouldCollide = false;

          if (o.type === "uv_barrier" && photon.wavelength === "UV")
            shouldCollide = false;

          if (shouldCollide) {
            setGameState("gameover");
          }
        }
      });

      obstaclesRef.current = obstaclesRef.current.filter((o) => o.x > -50);
    }

    function drawObstacles() {
      obstaclesRef.current.forEach((o) => {
        ctx.fillStyle =
          o.type === "mirror"
            ? "rgba(200,200,255,0.8)"
            : o.type === "heat_cloud"
              ? "rgba(255,100,0,0.6)"
              : "rgba(150,0,255,0.7)";

        ctx.fillRect(o.x, o.y, o.width, o.height);
      });
    }

    function updateScoreSystem() {
      scoreRef.current += 0.05;
      setScore(Math.floor(scoreRef.current));

      const newLevel = Math.floor(scoreRef.current / 30) + 1;

      if (newLevel > levelRef.current) {
        levelRef.current = newLevel;
        setLevel(newLevel);
        obstacleSpeedRef.current += 0.5;
      }
    }

    function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawBackground();
      updatePhoton();
      drawPhoton();

      if (frameCountRef.current % 100 === 0) spawnObstacle();

      updateObstacles();
      drawObstacles();
      updateScoreSystem();

      frameCountRef.current++;

      animationRef.current = requestAnimationFrame(gameLoop);

      if (frameCountRef.current % 3 === 0) spawnParticle();

      updateParticles();
      drawParticles();
    }

    gameLoop();

    return () => cancelAnimationFrame(animationRef.current);
  }, [gameState]);

  /* ================= CONTROLS ================= */

  useEffect(() => {
    const handleKeyDown = (e) => {
      keysRef.current[e.key] = true;

      if (e.key === "1") changeWavelength("IR");
      if (e.key === "2") changeWavelength("VISIBLE");
      if (e.key === "3") changeWavelength("UV");
    };

    const handleKeyUp = (e) => {
      keysRef.current[e.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const changeWavelength = (type) => {
    photonRef.current.wavelength = type;
    setCurrentWavelength(type);
  };

  const resetGame = () => {
    obstaclesRef.current = [];
    powerupsRef.current = [];
    scoreRef.current = 0;
    levelRef.current = 1;
    obstacleSpeedRef.current = 3;
    frameCountRef.current = 0;

    photonRef.current = {
      x: 50,
      y: 250,
      radius: 15,
      speed: 5,
      wavelength: "VISIBLE",
      shielded: false,
      powerup: null,
      powerupEndTime: 0,
    };

    setScore(0);
    setLevel(1);
    setCurrentWavelength("VISIBLE");
    setCurrentPowerup(null);
  };

  return { resetGame, changeWavelength, moveUp, moveDown };
}
