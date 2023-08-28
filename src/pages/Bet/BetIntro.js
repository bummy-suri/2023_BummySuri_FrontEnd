import React, { useState } from "react";
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

const TitleContent = styled.div`
    display: flex;
    align-items: center;
    margin-top: 42px;
`

const Image = styled.img`
    width: 25vw;
`

const Title = styled.div`
    font-size: 25px;
    font-family: "Pretendard_bold";
    font-weight: bold;
    @media(max-width: 300px){
        font-size: 18px;
    }
`;


const MainText = styled.div`
    text-align: center;
    font-size: 16px;
    line-height: 26px; /* 162.5% */
    margin-top: 40px;
    @media(max-width: 300px){
        font-size: 13px;
    }
`

const Klipbtn = styled.button`
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
            <MainLogo>정기전 경기 예측</MainLogo>
            <SideBar><SideBarContents/></SideBar>
            <TitleContent>
                <Image src={Betsuri}/>
                <Title>경기 예측이란?</Title>
                <Image src={Betbummy} style={{transform:"scaleX(-1)"}}/>
            </TitleContent>
            <MainText>
                버미와 수리를 가지고 있는 <br/>
                연세대 학생, 고려대 학생이라면 누구나<br/>
                경기 예측 이벤트에 참여할 수 있어요!<br/><br/>

                어떤 학교가 이길지,<br/>
                몇 점 차이일지,<br/>
                몇 포인트를 배팅할지 선택해봐요!<br/><br/>

                예측에 성공하면 <br/>
                배팅한 포인트의 ✨3배✨를 얻을 수 있습니다.<br/>
            </MainText>
            <Link to="/bet"><Klipbtn>경기 예측하기</Klipbtn></Link>
        </Background>
        </div>
        );
}

export default Rps;
