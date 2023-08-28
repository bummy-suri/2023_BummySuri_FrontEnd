import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lending from "./pages/Lending";
import Login from "./pages/Login";
import Minting from "./pages/Minting";
import Rps from "./pages/Game/Rps";
import RpsResult from "./pages/Game/RpsResult";


function DefaultRouter () {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Lending />} />
          {/*
          <Route path="/Login" element={<Login />} />
          <Route path="/Minting" element={<Minting />} />
    
          <Route path="/rock-paper-scissors" element={<Rps />} />
          <Route path="/rock-paper-scissors/result" element={<RpsResult />} />
        */}
          </Routes>
    </Router>
    );
  };

export default DefaultRouter;