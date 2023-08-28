import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Logo from "../components/Logo";
import AboutKlip from "../components/Login/AboutKlip";
import KlipBtn from "../components/Login/KlipApi";
import BummySuriimage from "../assets/BummySuri.png";


const Total = styled.div`
  max-width: 100%;
  min-height: 100vh;
  background-color: #1D1D1D;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

const Intro = styled.div`
  text-align : center;
  font-size: 25px;
  margin-top: 68px;
  transition: font-size 1s;
  font-family: Pretendard_Regular;
  font-weight: bold;
  @media (min-width: 800px) {
    font-size: 30px;
  }
`

const Red = styled.span`
  color: rgba(253, 38, 38, 0.82);
`;
const Blue = styled.span`
  color: #1657FF;
`;

const Klipbtn = styled.button`
width: 236px;
height: 50px;
background-color: #C565E7;
font-size: 20px;
border: none;
border-radius: 10px;
cursor: pointer;
margin-top: 56px;
margin-bottom: 29px;
color: #FFFFFF;
`


const Login = () => {
  return (
    <Total >
      <Logo/>
      <Intro>
        <Red>Bummy</Red>&<Blue>Suri</Blue> 프로젝트는<br/> 클립과 함께 합니다.
      </Intro>
      <img src={BummySuriimage} style={{margin:"0 auto", overflow:"hidden", width:"80vw"}} />
      <AboutKlip/>
      <KlipBtn/>
    </Total>
  );
}

export default Login;
