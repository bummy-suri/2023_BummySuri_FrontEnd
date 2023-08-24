import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Bummisuri from "../components/Login/Bummisuri";
import Logo from "../components/Logo";
import AboutKlip from "../components/Login/AboutKlip";

const Total = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #1D1D1D;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Intro = styled.div`
  text-align : center;
  font-size: 25px;
  margin-top: 75px;
`

const Red = styled.span`
  color: rgba(241, 11, 11, 0.82);
`;
const Blue = styled.span`
  color: #120DF6;
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
  const [totalHeight, setTotalHeight] = useState(window.innerHeight);

  const handleScroll = () => {
    setTotalHeight(window.innerHeight + window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Total style={{ minHeight: `${totalHeight}px` }}>
      <Logo/>
      <Intro>
        <Red>Bummi</Red> & <Blue>Suri</Blue> 프로젝트는<br/> 클립과 함께 합니다.
      </Intro>
      <Bummisuri/>
      <AboutKlip/>
      <Klipbtn>Klip 연동하기</Klipbtn>
    </Total>
  );
}

export default Login;
