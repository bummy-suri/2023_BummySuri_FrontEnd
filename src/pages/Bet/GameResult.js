import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import SideBar from "../../components/SideBar/SideBar";
import SideBarContents from "../../components/SideBar/SideBarContents";

import axios from "axios";

import { API } from '../../config';


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
    margin-top: 5px;
    margin-right: 10px;
    @media(max-width: 365px){
        font-size: 13px;
        margin-right: 10px;
    }
`;

const TotalP = styled.div`
    margin-top: 25px;
    font-size: 16px;
    font-weight: 700;
    color:black;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    @media(max-width: 365px){
         font-size: 12px;
     }
`;

// const BTN = styled.button`
//     margin-top: 15px;
//     width: 332px;
//     height: 50px;
//     background-color: rgba(112, 0, 255, 1);
//     border: none;
//     color: white;
//     font-size: 16px;
//     border-radius: 10px;
//     @media(max-width: 365px){
//         width: 230px;
//         height: 33px;
//         font-size: 11px;
//     }

// `;


const GameResult = () => {
    {/* 
    
        1. 백에서 경기 결과 값 가져오기 -> 화면에 표시 (경기결과조회)
        2. 연대 / 고대에 따라 폰트 색상 변경 
        3. 총 획득 포인트 계산하여 표시

        베팅조회 -> 베팅결과확인 -> 베팅결과얻은포인트반영하기

    */}
    const gameTypes = ["baseball", "basketball", "hockey", "rugby", "soccer"];

    const success = [];
    const earnedPoint = [];
    const totalPoint = [];

    const winner = [];
    const scoredifference = [];
    const [total, setTotal] = useState(0);

    useEffect(() => {
        async function getBetting() {
            for (let i = 0; i < 5; i++) {
                try {
                    const response = await axios.get(`${API}/betting/${gameTypes[i]}`, {
                        headers: { Authorization: `bearer ${sessionStorage.getItem("accessToken")}` }
                    });
                    const userData = response.data;
                    const bettingresponse = await axios({
                        url: `${API}/bettingResult/${gameTypes[i]}`,
                        method: "post",
                        data: userData,
                        headers: {
                            Authorization: `bearer ${sessionStorage.getItem("accessToken")}`
                        },
                    });
                    const bettingData = bettingresponse.data;
                    success.push(bettingData.success);
                    earnedPoint.push(bettingData.earnedPoint);
                    totalPoint.push(bettingData.totalPoint);
                    const gameresponse = await axios({
                        url: `${API}/game/${gameTypes[i]}`,
                        method: "get",
                        headers: {
                            Authorization: `bearer ${sessionStorage.getItem("accessToken")}`
                        },
                    });
                    const gameData = gameresponse.data;
                    if (gameData.koreaScore > gameData.yonseiScore) {
                        winner.push("고대 승");
                        scoredifference.push(gameData.koreaScore - gameData.yonseiScore);
                    }
                    else if (gameData.koreaScore < gameData.yonseiScore) {
                        winner.push("연대 승");
                        scoredifference.push(gameData.yonseiScore - gameData.koreaScore);
                    }
                    else {
                        winner.push("무승부");
                        scoredifference.push(0);
                    }

                } catch (error) {
                    console.error(error);
                }
            }
        }
        getBetting();
        setTotal(earnedPoint[0] + earnedPoint[1] + earnedPoint[2] + earnedPoint[3] + earnedPoint[4]);

    }, []);

    


    useEffect(() => {
        async function updatePoint() {
            try {
                await axios({
                    url: `${API}/bettingResult`,
                    method: "put",
                    data: {
                        totalEarnedPoint: total,
                    },
                    headers: {
                        Authorization: `bearer ${sessionStorage.getItem("accessToken")}`
                    },
                });
            } catch (error) {console.log(error);}
        }
        updatePoint();
    }, [total]);





    return (
        <div style={{ backgroundColor: "#1D1D1D" }}>
            <Background>
                <MainLogo>정기전 경기 예측</MainLogo>
                <SideBar><SideBarContents /></SideBar>
                <Title>경기 결과</Title>

                <Container>
                    <Column>
                        <span style={{ marginLeft: "20px" }}>종목</span>
                        <span style={{ marginLeft: "30px" }}>결과</span>
                        <span style={{ marginRight: "15px" }}>획득 포인트</span>
                    </Column>
                    <Result>
                        <Row>
                            <Type>야구 ⚾️</Type>
                            <Predict>
                                <School>{winner[0]}</School>
                                <Score>{scoredifference[0]}점차</Score>
                            </Predict>
                            <PointAmount>+{earnedPoint[0]}p</PointAmount>
                        </Row>
                        <Row>
                            <Type>농구 🏀</Type>
                            <Predict>
                                <School>{winner[1]}</School>
                                <Score>{scoredifference[1]}점차</Score>
                            </Predict>
                            <PointAmount>+{earnedPoint[1]}p</PointAmount>
                        </Row>
                        <Row>
                            <Type>빙구 🏒</Type>
                            <Predict>
                                <School>{winner[2]}</School>
                                <Score>{scoredifference[2]}점차</Score>
                            </Predict>
                            <PointAmount>+{earnedPoint[2]}p</PointAmount>
                        </Row>
                        <Row>
                            <Type>럭비 🏉</Type>
                            <Predict>
                                <School>{winner[3]}</School>
                                <Score>{scoredifference[3]}점차</Score>
                            </Predict>
                            <PointAmount>+{earnedPoint[3]}p</PointAmount>
                        </Row>
                        <Row>
                            <Type>축구 ⚽</Type>
                            <Predict>
                                <School>{winner[4]}</School>
                                <Score>{scoredifference[4]}점차</Score>
                            </Predict>
                            <PointAmount>+{earnedPoint[4]}p</PointAmount>
                        </Row>
                    </Result>
                    <TotalP>총 획득 포인트 : {total}p</TotalP>
                </Container>
            </Background>
        </div>
    );
}

export default GameResult;
