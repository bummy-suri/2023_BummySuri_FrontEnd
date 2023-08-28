import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'; 

import suri from "../../../assets/Game/Rps.png";
import rock from "../../../assets/Game/rock.png";
import paper from "../../../assets/Game/paper.png";
import scissors from "../../../assets/Game/scissors.png";

import Popup from "./Popup";

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


const Who = styled.div`
    font-size: 25px;
    font-weight: 800;
`

const ResultBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 106px;
    height: 102px;
    border-radius: 4px; 
    background-color: #7000FF;
    font-weight: bold;
    margin-top: 11px;
`

const Image = styled.img`
    width: 110px;
    margin: -15%;
`

const MessageContainer = styled.div`
    white-space: pre-line;
`;


const getRandomChoice = () => {
    const choices = ['바위', '보', '가위'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const Rps = () => {
    const location = useLocation(); 
    const selectedChoice = location.state?.selectedChoice || '';  //이전 페이지에서 선택한 rps값 가져오기
    const opponentChoice = getRandomChoice();

    const [showResultText, setShowResultText] = useState(false);
    const [showWinPopup, setShowWinPopup] = useState(false);
    const [showLosePopup, setShowLosePopup] = useState(false);
    const [showSamePopup, setShowSamePopup] = useState(false);

    //이미지랑 매핑..
    const choicesMap = {
        바위: { text: '바위', image: rock },
        보: { text: '보', image: paper },
        가위: { text: '가위', image: scissors },
    };

    const opponentImage = choicesMap[opponentChoice].image;
    const opponentText = choicesMap[opponentChoice].text;
    const myImage = choicesMap[selectedChoice].image;

    useEffect(() => { 
        const delay = 1500;  //팝업 뜨는 시간

        const timeoutId = setTimeout(() => {
            setShowResultText(true);

            if (selectedChoice === opponentText) {
                setShowSamePopup(true);
            } else if (
                (selectedChoice === "바위" && opponentText === "가위") ||
                (selectedChoice === "보" && opponentText === "바위") ||
                (selectedChoice === "가위" && opponentText === "보")
            ) {
                setShowWinPopup(true);
            } else {
                setShowLosePopup(true);
            }
        }, delay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    

    return (        
        <Background>
            <MainLogo>가위바위보</MainLogo>

            <Who style={{ marginTop: "60px", display: "flex", alignItems: "center" }}>
                <img src={suri} style={{ width: "20vw"}} />
                수리
            </Who>
            
            <ResultBox>
                {opponentText}
                <Image src={opponentImage} style={{transform:"rotate(180deg)"}} alt="수리 선택" />
            </ResultBox>

            <ResultBox style={{marginTop:"190px"}}>
                <Image src={myImage} alt="나의 선택" />
                {selectedChoice}
            </ResultBox>
            <Who style={{ marginTop: "20px", marginBottom:"50px" }}>나의 선택</Who>
            


            {showSamePopup && <Popup 
            title="무승부"
            message={<MessageContainer>무승부예요.<br/>다시 한 번 해볼까요?</MessageContainer>} 
            remainingAttempts={3} />}

            {showWinPopup && <Popup 
            title={<MessageContainer style={{color:"#FFE500"}}>승리!</MessageContainer>} 
            message={<MessageContainer>축하합니다!<br/>100P를 얻었습니다!</MessageContainer>} 
            remainingAttempts={3} />}

            {showLosePopup && <Popup 
            title={<MessageContainer style={{color:"#C2C2C2"}}>패배</MessageContainer>} 
            message={<MessageContainer>수리한테 졌어요...<br/>한 번 더 도전해보세요!</MessageContainer>} 
            remainingAttempts={3} />}

        </Background>
        );
}

export default Rps;

