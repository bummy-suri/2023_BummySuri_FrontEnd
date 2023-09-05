import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


import SideBar from "../../components/SideBar/SideBar";
import SideBarContents from "../../components/SideBar/SideBarContents";


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



const SubmitBTN = styled.button`
    background-color: rgba(112, 0, 255, 1);
    border: none;
    border-radius: 10px;
    width: 334px;
    height: 50px;
    color: white;
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: 800;
    margin-top: 100px;
    @media (max-width: 300px)
    {
        width: 250px;
        height: 30px;
        font-size: 12px;
    }
`;




const BetDone = () => {
    const location = useLocation();

    const pointreceived = location.state?.pointreceived || false;
    const point = location.state?.pamount || null;

    return (
        <div style={{ backgroundColor: "#1D1D1D" }}>
            {pointreceived ?
                <Background>
                    <MainLogo>정기전 경기 예측</MainLogo>
                    <SideBar><SideBarContents /></SideBar>
                    <Title>{point}p를 성공적으로 <br />얻었습니다!</Title>
                    <Link to='/'><SubmitBTN>메인 페이지로 돌아가기</SubmitBTN></Link>
                </Background> :
                <Background>
                    <MainLogo>정기전 경기 예측</MainLogo>
                    <SideBar><SideBarContents /></SideBar>
                    <Title>경기 예측이 성공적으로 <br />저장되었습니다!</Title>
                    <Link to='/bet/my-prediction'><SubmitBTN>나의 예측 보러가기</SubmitBTN></Link>
                </Background>}
        </div>
    );
}

export default BetDone;
