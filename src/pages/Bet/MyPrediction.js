import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 


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
    font-size: 25px;
    font-family: "Pretendard_bold";
    font-weight: 800;
    margin-top: 50px;
    margin-bottom: 25px;
    @media(max-width: 300px){
        font-size: 18px;
    }
`;

const Container = styled.div`
    width: 358px;
    height: 548px;
    border-radius: 14px;
    background-color: white;
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    @media(max-width: 365px){
        width: 260px;
        height: 440px;
    }
`;

const Column = styled.div`
    display: flex;
    width: 320px;
    height: 15px;
    justify-content: space-between;
    color: black;
    font-size: 16px;
    font-weight: 500;
    padding: 30px 0px 20px 0px;
    border-bottom: 1px solid rgba(217, 217, 217, 1);
    @media(max-width: 365px){
        width: 250px;
        font-size: 13px;
        padding: 20px 0px 10px 0px;
    }
`;

const Result = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Row = styled.div`
    margin: 20px 0px 10px 0px;
    display: flex;
    width: 290px;
    height: 50px;
    
    justify-content: space-between;
    color: black;
    @media(max-width: 365px){
        width: 230px;
        height: 34px;
    }
`;

const Type = styled.div`
    font-size: 22px;
    font-weight: 800;
    @media(max-width: 365px){
        font-size: 17px;
        margin-left: 5px;
    }
`;

const Predict = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    @media(max-width: 365px){
        margin-right: 13px;
    }
`;

const School = styled.div`
    font-size: 22px;
    font-weight: 700;
    color: rgba(22, 87, 255, 1);
    @media(max-width: 365px){
        font-size: 17px;
    }
`;


const Score = styled.div`
    font-size: 14px;
    font-weight: 400;
    @media(max-width: 365px){
        font-size: 10px;
    }
`;

const PointAmount = styled.div`
    font-size: 18px;
    font-weight: 800;
    margin-right: 10px;
    @media(max-width: 365px){
        font-size: 13px;
        margin-right: 10px;
    }
`;

const BTN = styled.button`
    margin-top: 15px;
    width: 332px;
    height: 50px;
    background-color: rgba(112, 0, 255, 1);
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 10px;
    @media(max-width: 365px){
        width: 230px;
        height: 33px;
        font-size: 11px;
    }

`;


const MyPrediction = () => {
    {/* 
        * 현재는 디자인만 만들어 놓았음 기능 구현해야 됨*

        1. 백에서 나의 예측 값 가져오기 -> 화면에 표시
        2. 연대 / 고대에 따라 폰트 색상 변경
        3. 수정하기 기능 사용 (Bet.js로 보내기)

    */}

    return (
        <div style={{backgroundColor:"#1D1D1D"}}>
        <Background>
            <MainLogo>정기전 경기 예측</MainLogo>
            <SideBar><SideBarContents/></SideBar>
            <Title>나의 예측</Title>

            <Container>
                <Column>
                    <span style={{marginLeft:"20px"}}>종목</span>
                    <span style={{marginLeft:"30px"}}>예측</span>
                    <span style={{marginRight:"15px"}}>배팅 포인트</span>
                </Column>
                <Result>
                    <Row>
                        <Type>야구 ⚾️</Type>
                        <Predict>
                            <School>연대 승</School>
                            <Score>1점차 예상</Score>
                        </Predict>
                        <PointAmount>100p</PointAmount>
                    </Row>
                    <Row>
                        <Type>농구 🏀</Type>
                        <Predict>
                            <School>연대 승</School>
                            <Score>1점차 예상</Score>
                        </Predict>
                        <PointAmount>100p</PointAmount>
                    </Row>
                    <Row>
                        <Type>빙구 🏒</Type>
                        <Predict>
                            <School>연대 승</School>
                            <Score>1점차 예상</Score>
                        </Predict>
                        <PointAmount>100p</PointAmount>
                    </Row>
                    <Row>
                        <Type>럭비 🏉</Type>
                        <Predict>
                            <School>연대 승</School>
                            <Score>1점차 예상</Score>
                        </Predict>
                        <PointAmount>100p</PointAmount>
                    </Row>
                    <Row>
                        <Type>축구 ⚽</Type>
                        <Predict>
                            <School>연대 승</School>
                            <Score>1점차 예상</Score>
                        </Predict>
                        <PointAmount>100p</PointAmount>
                    </Row>
                </Result>
                <BTN>수정하기</BTN>
            </Container>
        </Background>
        </div>
        );
}

export default MyPrediction;
