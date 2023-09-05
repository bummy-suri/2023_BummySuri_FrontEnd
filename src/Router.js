import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lending from "./pages/Lending";
import Login from "./pages/Login";
import Minting from "./pages/Minting";
import Rps from "./pages/Game/Rps/Rps";
import RpsResult from "./pages/Game/Rps/RpsResult";
import BetIntro from "./pages/Bet/BetIntro";
import BetNotFound from "./pages/Bet/BetNotFound";
import Bet from "./pages/Bet/Bet";
import QuizIntro from "./pages/Game/ImageQuiz/QuizIntro";
import ImageQuiz from "./pages/Game/ImageQuiz/ImageQuiz";
import QuizWin from "./pages/Game/ImageQuiz/QuizWin";
import QuizLose from "./pages/Game/ImageQuiz/QuizLose";
import MyPrediction from "./pages/Bet/MyPrediction";
import GameResult from "./pages/Bet/GameResult";
import BenefitPopup from "./components/Lending/BenefitPopup";
import ScrollToTop from "./components/ScrollToTop";
import Ranking from "./pages/Ranking/Ranking";
import BetDone from "./pages/Bet/BetDone";
import MyNFT from "./pages/MyNFT";

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
          <Route path="/bet/notfound" element={<BetNotFound />} />
          <Route path="/bet" element={<Bet/>}/>
          <Route path="/bet/my-prediction" element={<MyPrediction/>}/>
          <Route path="/bet/done" element={<BetDone/>}/>
          <Route path="/bet/result" element={<GameResult/>}/>
          <Route path="/imageQuiz/intro" element={<QuizIntro />} />
          <Route path="/imageQuiz" element={<ImageQuiz />} />
          <Route path="/imageQuiz/win" element={<QuizWin />} />
          <Route path="/imageQuiz/lose" element={<QuizLose />} />
          <Route path="/hmpBenefit" element={<BenefitPopup/>}/>
          <Route path="/Ranking" element={<Ranking/>}/>
          <Route path="/MyNFT" element={<MyNFT/>}/>
          </Routes>
    </Router>
    );
  };

export default DefaultRouter;