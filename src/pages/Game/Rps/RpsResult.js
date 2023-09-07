import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'; 
import axios from "axios";
import Popup from "./Popup";
import { API } from '../../../config';

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

const Suri = styled.img`
  width: 8vw;
  @media(max-width: 800px){
    width: 10vw;
  }
  @media(max-width: 500px){
    width: 15vw;
  }
  @media(max-width: 400px){
    width: 20vw;
  }
  @media(max-width: 300px){
    width: 25vw;
  }
`

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

const RpsResult = () => {
  const location = useLocation(); 
  const selectedChoice = location.state?.selectedChoice || '';  //이전 페이지에서 선택한 rps값 가져오기
  const opponentChoice = getRandomChoice(); 
  const [showResultText, setShowResultText] = useState(false);
  const [showWinPopup, setShowWinPopup] = useState(false);
  const [showLosePopup, setShowLosePopup] = useState(false);
  const [showSamePopup, setShowSamePopup] = useState(false);
  const [showOpponentChoice, setShowOpponentChoice] = useState(false);
  const [opponentBoxColor, setOpponentBoxColor] = useState("#333"); // 수리 결과
  const [showOpponentImage, setShowOpponentImage] = useState(false);
  const [remainingAttempts, setRemainingAttempts] = useState(); //잔여 횟수

  //이미지랑 매핑
  const choicesMap = {
    바위: { text: '바위', image: `${process.env.PUBLIC_URL}/assets/Game/Rps/rock.png` },
    보: { text: '보', image: `${process.env.PUBLIC_URL}/assets/Game/Rps/paper.png` },
    가위: { text: '가위', image: `${process.env.PUBLIC_URL}/assets/Game/Rps/scissors.png` },
  };

  const [opponentImage, setOpponentImage] = useState(choicesMap[opponentChoice].image);
  const [opponentText, setOpponentText] = useState(choicesMap[opponentChoice].text);
  const myImage = choicesMap[selectedChoice].image;
  const accessToken = localStorage.getItem("bummySuri");

  const gameResult = (rpsResult) => {
    axios
      .put(`${API}/minigame`, { 
        result: rpsResult,
        miniGameType: '가위바위보',
      }, {
        headers: {
          Authorization: `bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        const {times} = response.data;
        setRemainingAttempts(times);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Response Data:", error.response.data);
          console.error("Status Code:", error.response.status);
        } else if (error.request) {
          console.error("Request:", error.request);
        } else {
          console.error("Error Message:", error.message);
        }
      });
  };
  
  //수리의 가위바위보 선택
  useEffect(() => {
    const delay = 1000;


    axios.get(`${API}/minigame`, {
      headers:{
        Authorization: `bearer ${accessToken}`
      }
    })
    .then(response => {
      const { times } = response.data;
      if (times >= 4){
        alert("잘못된 접근입니다");
        window.location.href="/";
      }
    })
    .catch(error => {
      if (error.response) {
        console.error("Response Data:", error.response.data);
        console.error("Status Code:", error.response.status);
      } else if (error.request) {
        console.error("Request:", error.request);
      } else {
        console.error("Error Message:", error.message);
      }
    });

    const timeoutId = setTimeout(() => {
      setShowOpponentChoice(true);
      setOpponentBoxColor("#7000FF");
      setShowOpponentImage(true);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  //가위바위보 결과 팝업
  useEffect(() => { 
    const delay = 2500;

    const timeoutId = setTimeout(() => {
      setShowResultText(true);

      if (selectedChoice === opponentText) {
        setShowSamePopup(true);
      } else if (
        (selectedChoice === "바위" && opponentText === "가위") ||
        (selectedChoice === "보" && opponentText === "바위") ||
        (selectedChoice === "가위" && opponentText === "보")
      ) {
        gameResult("win");
        setShowWinPopup(true);
      } else {
        gameResult("lose");
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
        <Suri src={`${process.env.PUBLIC_URL}/assets/Game/Rps/Rps.png`} />
        수리
      </Who>
      <ResultBox style={{ backgroundColor: opponentBoxColor }}>
        {showOpponentImage ? (
          <>
            {opponentText}
            <Image src={opponentImage} style={{transform: "rotate(180deg)"}} alt="수리 선택" />
          </>
        ) : ( 
          <div style={{fontSize:"40px"}}>?</div>
        )}
      </ResultBox>
      <ResultBox style={{marginTop:"190px"}}>
        <Image src={myImage} alt="나의 선택" />
        {selectedChoice}
      </ResultBox>
      <Who style={{ marginTop: "20px", marginBottom:"50px" }}>나의 선택</Who>
      
      {showSamePopup && <Popup 
        title="무승부"
        message={<MessageContainer>무승부예요.<br/>다시 한 번 해볼까요?</MessageContainer>} 
        remainingAttempts={remainingAttempts} />} 

      {showWinPopup && <Popup 
        title={<MessageContainer style={{color:"#FFE500"}}>승리!</MessageContainer>} 
        message={<MessageContainer>축하합니다!<br/>100P를 얻었습니다!</MessageContainer>} 
        remainingAttempts={3 - remainingAttempts} />}

      {showLosePopup && <Popup 
        title={<MessageContainer style={{color:"#C2C2C2"}}>패배</MessageContainer>} 
        message={<MessageContainer>수리한테 졌어요...<br/>한 번 더 도전해보세요!</MessageContainer>} 
        remainingAttempts={3 - remainingAttempts} />}

    </Background>
  );
}

export default RpsResult;
