import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 


import SideBar from "../../components/SideBar/SideBar";
import SideBarContents from "../../components/SideBar/SideBarContents";

import Betbummy from "../../assets/Bet/betBummy.png";
import Betsuri from "../../assets/Bet/betSuri.png";

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



const Title = styled.div`
    margin-top: 209px;
    font-size: 25px;
    text-align: center;
    font-family: "Pretendard_bold";
    font-weight: bold;
    @media(max-width: 300px){
        font-size: 18px;
    }
`;


const MainText = styled.div`
    margin-top: 33px;
    font-size: 16px;
    line-height: 26px; /* 162.5% */
    margin-top: 40px;
    text-align: center;
    @media(max-width: 300px){
        font-size: 13px;
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
  margin-top: 183px;
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




const BetNotFound = () => {

    return (
        <div style={{backgroundColor:"#1D1D1D"}}>
        <Background>
            <MainLogo>정기전 경기 예측</MainLogo>
            <SideBar><SideBarContents/></SideBar>
            <Title>경기 예측 이벤트에 참여하지 <br/>않았습니다.</Title>
            <MainText>
            미니 게임을 통해서도 <br />포인트를 얻을 수 있어요 ˚✧₊( ˘ω˘ )⁎⁺˳✧༚
            </MainText>
        </Background>
        </div>
        );
}

export default BetNotFound;
