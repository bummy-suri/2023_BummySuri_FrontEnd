import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lending from "./pages/Lending";
import Login from "./pages/Login";
import Minting from "./pages/Minting";
import Rps from "./pages/Game/Rps/Rps";
import RpsResult from "./pages/Game/Rps/RpsResult";
import BetIntro from "./pages/Bet/BetIntro";
import BetFinish from "./pages/Bet/BetFinish";
import Bet from "./pages/Bet/Bet";
import QuizIntro from "./pages/Game/ImageQuiz/QuizIntro";
import ImageQuiz from "./pages/Game/ImageQuiz/ImageQuiz";
import MyPrediction from "./pages/Bet/MyPrediction";
import GameResult from "./pages/Bet/GameResult";
import BenefitPopup from "./components/Lending/BenefitPopup";
import ScrollToTop from "./components/ScrollToTop";
import Ranking from "./pages/Ranking/Ranking";

function DefaultRouter () {
    return (
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Lending />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Minting" element={<Minting />} />
          <Route path="/rock-paper-scissors" element={<Rps />} />
          <Route path="/rock-paper-scissors/result" element={<RpsResult />} />
          <Route path="/bet/intro" element={<BetIntro />} />
          <Route path="/bet/finish" element={<BetFinish />} />
          <Route path="/bet" element={<Bet/>}/>
          <Route path="/bet/my-prediction" element={<MyPrediction/>}/>
          <Route path="/bet/result" element={<GameResult/>}/>
          <Route path="/imageQuiz/intro" element={<QuizIntro />} />
          <Route path="/imageQuiz" element={<ImageQuiz />} />
          <Route path="/hmpBenefit" element={<BenefitPopup/>}/>
          <Route path="/Ranking" element={<Ranking/>}/>
          
          </Routes>
    </Router>
    );
  };

export default DefaultRouter;