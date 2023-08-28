import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lending from "./pages/Lending";
import Login from "./pages/Login";
import Minting from "./pages/Minting";
import Rps from "./pages/Game/Rps";
import RpsResult from "./pages/Game/RpsResult";
import BetIntro from "./pages/Bet/BetIntro";
import BetFinish from "./pages/Bet/BetFinish";

function DefaultRouter () {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Lending />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Minting" element={<Minting />} />
          <Route path="/rock-paper-scissors" element={<Rps />} />
          <Route path="/rock-paper-scissors/result" element={<RpsResult />} />
          <Route path="/bet/intro" element={<BetIntro />} />
          <Route path="/bet/finish" element={<BetFinish />} />
          
          </Routes>
    </Router>
    );
  };

export default DefaultRouter;