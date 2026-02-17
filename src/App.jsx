import React from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import MainLayout from "./Layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import "./input.css";
import NotFound from "./Components/NotFound/NotFound";
import Execome from "./Components/Execome";
import Events from "./Components/Events";
import Projects from "./Components/Projects";
import Membership from "./Components/Membership";
import Game from "./Components/Games/Games";
import Gallery from "./Components/Gallery/Gallery";
import PhotoQuizPro from "./Components/Games/PhotoQuizPro";
import LaserMazeGame from "./Components/Games/LaserMazeGame";
import SpectrumRunner from "./Components/Games/spectrum-runner/SpectrumRunner";
import PhotonicsWordle from "./Components/Games/PhotonicsWordle";
import PhotonCatcher from "./Components/Games/PhotonCatcher";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="execome" element={<Execome />} />
        <Route path="events" element={<Events />} />
        <Route path="projects" element={<Projects />} />
        <Route path="membership" element={<Membership />} />
        <Route path="game" element={<Game />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="laser" element={<LaserMazeGame />} />
        <Route path="spectrum" element={<SpectrumRunner />} />
        <Route path="wordle" element={<PhotonicsWordle />} />

        <Route path="*" element={<NotFound />} />

        <Route path="game/quiz-game" element={<PhotoQuizPro />} />
      </Route>
      <Route path="catcher" element={<PhotonCatcher />} />
    </Routes>
  );
};

export default App;
