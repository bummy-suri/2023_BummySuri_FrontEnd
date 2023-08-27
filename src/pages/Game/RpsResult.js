import React, { useState } from "react";
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'; 
import Logo from "../../components/Logo";

import rock from "../../assets/Game/rock.png";
import paper from "../../assets/Game/paper.png";
import scissors from "../../assets/Game/scissors.png";

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

const Who = styled.div`
    font-size: 25px;
    font-weight: 800;
`

const ResultBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 115px;
    height: 30px;
    border-radius: 10px; 
    background-color: rgba(255, 255, 255, 0.40);
    font-weight: bold;
    margin-top: 11px;
`

const Image = styled.img`
    margin-top:92px;
    width: 230px;
`

const ResultText = styled.div`
    font-size: 20px;
    margin-top: 20px;
`

const getRandomChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const Rps = () => {
    const location = useLocation(); 
    const selectedChoice = location.state?.selectedChoice || '';  //이전 페이지에서 선택한 rps값 가져오기
  
    const opponentChoice = getRandomChoice();

    //이미지랑 매핑..
    const choicesMap = {
        rock: { text: '바위', image: rock },
        paper: { text: '보', image: paper },
        scissors: { text: '가위', image: scissors },
    };

    const opponentImage = choicesMap[opponentChoice].image;
    const opponentText = choicesMap[opponentChoice].text;


    const getResultText = () => {
        if (selectedChoice === opponentText) {
            return "비겼습니다!";
        } else if (
            (selectedChoice === "바위" && opponentText === "가위") ||
            (selectedChoice === "보" && opponentText === "바위") ||
            (selectedChoice === "가위" && opponentText === "보")
        ) {
            return "이겼습니다!";
        } else {
            return "졌습니다!";
        }
    };


    return (        
        <Background>
            <Logo />
            <Who style={{ marginTop: "60px" }}>상대</Who>
            <ResultBox style={{ backgroundColor: "#D9D9D9", color: "black" }}>
                {opponentText}
            </ResultBox>
            <Image src={opponentImage} alt="Opponent's Choice" />
            <Who style={{ marginTop: "60px" }}>나의 선택</Who>
            <ResultBox style={{ marginBottom: "0px" }}>{selectedChoice}</ResultBox>
            <ResultText>{getResultText()}</ResultText>
        </Background>
        );
}

export default Rps;
