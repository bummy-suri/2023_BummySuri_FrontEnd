import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 


import SideBar from "../../../components/SideBar/SideBar";
import SideBarContents from "../../../components/SideBar/SideBarContents";

import bummy from "../../../assets/Game/bummyInQuiz.png";

const Background = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    background-color: #1D1D1D;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const MainLogo = styled.div`
  display: fixed;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
  margin-top: 74px;
  font-family: "Pretendard_Regular";
`;

const TitleContent = styled.div`
    display: flex;
    align-items: center;
    margin-top: 42px;
`

const Image = styled.img`
    width: 70vw;
    margin-top:50px;
`

const Title = styled.div`
    font-size: 25px;
    font-family: "Pretendard_bold";
    font-weight: bold;
    margin-top: 45px;
    @media(max-width: 300px){
        font-size: 18px;
    }
`;


const MainText = styled.div`
    text-align: center;
    font-size: 14px;
    line-height: 26px; /* 162.5% */
    margin-top: 5px;
    @media(max-width: 300px){
        font-size: 12px;
        margin-top: 1px;
    }
`

const Btn = styled.button`
  width: 334px;
  height: 50px;
  background-color: #7000FF;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 56px;
  margin-bottom: 29px;
  color: #FFFFFF;

  @media (max-width: 350px) {
    width: 230px;
  }

  @media (max-width: 235px) {
    padding-left: 30px;
    padding-right: 30px;
    width: 100%;
    font-size: 13px;
  }

`;




const Rps = () => {

    return (
        <div style={{backgroundColor:"#1D1D1D"}}>
        <Background>
            <MainLogo>넌센스 그림퀴즈</MainLogo>
            <SideBar><SideBarContents/></SideBar>
            <Title>버미의 넌센스 그림퀴즈</Title>
            <MainText>30초 안에 버미가 내는 문제를 맞춰봐!</MainText>
            <Image src={bummy}/>
            
            <Link to="/bet"><Btn>그림 퀴즈 시작!</Btn></Link>
        </Background>
        </div>
        );
}

export default Rps;
