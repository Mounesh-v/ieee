import React, { useEffect, useState } from "react";

const questions = [
  {
    question:
      "What is the physical principle behind total internal reflection (TIR) in optical fibers?",
    options: [
      "Snell’s Law at n₁ > n₂, θ > θ_critical",
      "Fresnel reflections at the core-cladding interface",
      "Rayleigh scattering in the core",
      "Modal dispersion in multimode fibers",
    ],
    correctAnswer: "Snell’s Law at n₁ > n₂, θ > θ_critical",
  },
  {
    question:
      "If optical fibers use total internal reflection to transmit light, what would happen if the fiber core and cladding had the same refractive index?",
    options: [
      "Light would travel through the fiber normally",
      "Light would get absorbed and not propagate",
      "Light would escape from the fiber instead of being guided",
      "The fiber would become more efficient in transmitting signals",
    ],
    correctAnswer:
      "Light would escape from the fiber instead of being guided",
  },
];

export default function PhotoQuizPro() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showTimer, setShowTimer] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (showTimer) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setShowTimer(false);
            setTimeLeft(30);
            return 30;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showTimer]);

  const checkAnswer = (option) => {
    setSelectedOption(option);

    if (option === currentQuestion.correctAnswer) {
      setIsCorrect(true);
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex((prev) => prev + 1);
          resetState();
        } else {
          alert("Quiz Completed 🎉");
        }
      }, 1000);
    } else {
      setIsCorrect(false);
      setShowTimer(true);
    }
  };

  const resetState = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setShowTimer(false);
    setTimeLeft(30);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden text-white font-sans">
      
      {/* Animated Rainbow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#2b075e,#38024e,#074675,#4da1e2,#3cde82,#cedf34)] bg-[length:400%_400%] animate-[rainbow_10s_linear_infinite] opacity-50" />

      {/* Sparkle Effect */}
      <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_10%,transparent_10.01%)] bg-[length:20px_20px] animate-pulse opacity-50" />

      {/* Quiz Card */}
      <div className="relative z-10 bg-black/70 p-6 rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.5)] w-[400px] text-center">

        <h1 className="text-2xl mb-5 text-[#00ffcc] drop-shadow-[0_0_10px_#00ffcc]">
          Photo Mastery Quiz
        </h1>

        <p className="mb-5 text-lg">{currentQuestion.question}</p>

        <div className="flex flex-col gap-3">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              onClick={() => !showTimer && checkAnswer(option)}
              className={`p-3 border-2 rounded cursor-pointer transition
                ${
                  selectedOption === option
                    ? isCorrect
                      ? "bg-green-500 border-green-500"
                      : "bg-red-500 border-red-500"
                    : "bg-white/10 border-[#444] hover:bg-white/20 hover:border-[#00ffcc]"
                }
              `}
            >
              {option}
            </div>
          ))}
        </div>

        {showTimer && (
          <div className="mt-5 text-[#ffcc00] text-lg">
            Wait for <span>{timeLeft}</span> seconds before trying again.
          </div>
        )}
      </div>

      {/* Tailwind Custom Animation */}
      <style>
        {`
          @keyframes rainbow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
}
