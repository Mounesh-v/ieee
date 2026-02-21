import React, { useEffect } from "react";
import laser from "../../assets/laser maze.png";
import light from "../../assets/light siper.png";
import wordle from "../../assets/wordle.png";
import photon from "../../assets/photon catcher.png";
import quiz from "../../assets/quiz.png";
import run from "../../assets/run.png";
import { useNavigate } from "react-router-dom";

const games = [
  {
    title: "Laser Maze",
    image: laser,
    description: "Align mirrors to guide your laser through complex mazes.",
    link: "/laser",
  },
  {
    title: "Light Sniper",
    image: light,
    description:
      "Navigate through mirrors and lenses using light refraction principles.",
    link: "/sniper",
  },
  {
    title: "Spectrum Runner",
    image: run,
    description:
      "Identify and classify different light spectra patterns and cross the hurdles.",
    link: "/spectrum",
  },
  {
    title: "Photonics Quiz",
    image: quiz,
    description: "Test your photonics knowledge with challenging quizzes.",
    link: "/game/quiz-game",
  },
  {
    title: "Wordle Race",
    image: wordle,
    description: "Solve the wordle using photonics words.",
    link: "/wordle",
  },
  {
    title: "Photon Catcher",
    image: photon,
    description: "Catch photons and score points in this fast-paced game.",
    link: "/catcher",
  },
];

console.log(games[3].link)

const Games = () => {
  useEffect(() => {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="bg-[#F8F9FA] text-[#2D3748] font-sans min-h-screen flex flex-col">
      {/* MAIN */}
      <main className="max-w-[1200px] mx-auto px-5 py-[60px] flex-1">
        {/* Title */}
        <h1 className="text-center text-[32px] font-bold text-[#003B5C] relative mb-8">
          Photonics Games Collection
          <span className="block w-[80px] h-[4px] bg-[#FF7D32] mx-auto mt-4 rounded"></span>
        </h1>

        <p className="text-center text-[#4A5568] text-[18px] max-w-[800px] mx-auto mb-[50px]">
          Explore interactive games that make learning photonics fun and
          engaging!
        </p>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-[rgba(0,59,92,0.1)] transition-all duration-300 hover:-translate-y-3 hover:shadow-lg hover:border-[rgba(0,98,155,0.2)]"
            >
              {/* Image */}
              <div
                className="h-[300px] w-full bg-cover bg-center transition duration-300 hover:opacity-90"
                style={{ backgroundImage: `url(${game.image})` }}
              ></div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-[#003B5C] text-[18px] font-semibold mb-2">
                  {game.title}
                </h3>

                <p className="text-[#4A5568] text-[15px] mb-5">
                  {game.description}
                </p>

                <button
                  onClick={() => navigate(game.link)}
                  className="inline-block bg-[#FF7D32] text-white px-5 py-2 rounded font-semibold transition-all duration-300 hover:bg-[#00629B] hover:-translate-y-1 hover:shadow-md"
                >
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Games;
