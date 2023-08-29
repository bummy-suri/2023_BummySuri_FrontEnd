import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lending from "./pages/Lending";
import Login from "./pages/Login";
import Minting from "./pages/Minting";
import Rps from "./pages/Game/Rps/Rps";
import Rpswait from "./pages/Game/Rps/RpswaitResult";
import RpsResult from "./pages/Game/Rps/RpsResult";
import BetIntro from "./pages/Bet/BetIntro";
import BetFinish from "./pages/Bet/BetFinish";
import Bet from "./pages/Bet/Bet";

function DefaultRouter () {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Lending />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Minting" element={<Minting />} />
          <Route path="/rock-paper-scissors" element={<Rps />} />
          <Route path="/rock-paper-scissors/wait" element={<Rpswait />} />
          <Route path="/rock-paper-scissors/result" element={<RpsResult />} />
          <Route path="/bet/intro" element={<BetIntro />} />
          <Route path="/bet/finish" element={<BetFinish />} />
          <Route path="/bet" element={<Bet/>}/>
          
          </Routes>
    </Router>
    );
  };

export default DefaultRouter;