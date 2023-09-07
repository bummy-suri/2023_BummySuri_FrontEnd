import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import SideBar from "../../../components/SideBar/SideBar";
import SideBarContents from "../../../components/SideBar/SideBarContents";
import axios from "axios";
import { API } from '../../../config';
import { useNavigate } from 'react-router-dom';

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

const Image = styled.img`
  width: 40vw;
`;

const RandomImage = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
  margin-top: 40px;
  border-radius: 20px;
  
  @media(max-width: 500px){
    width: 65vw;
    height: 65vw;
  }
`;

const MainText = styled.div`
  text-align: center;
  font-size: 20px;
  line-height: 26px; /* 162.5% */
  margin-bottom: 5px;
  
  @media(max-width: 300px){
    font-size: 12px;
    margin-top: 1px;
  }
`;

const Answer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 163px;
  height: 42px;
  margin-right: 10px;
  border-radius: 10px;
  background: #FFF;
  color: black;
  font-weight: bold;
  font-family: "Pretendard_Bold";
  font-size: 24px;
  
  @media(max-width: 250px){
    width: 133px;
    font-size: 20px;
  }
`;

const AnswerInput = styled.input`
  width: 100px;
  height: 40px;
  border: none;
  background-color: transparent;
  color: black;
  font-size: 24px;
  
  @media(max-width: 250px){
    width: 70px;
    font-size: 20px;
  }
`;

const Btn = styled.button`
  width: 334px;
  height: 50px;
  background-color: #7000FF;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
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

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1D1D1D;
  border-radius: 8px;
  width: 260px;
  height: 90px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 350px) {
    width: 80vw;
  }
`;

const PopupContainer = styled.div`
  width: 260px;
  height: 90px;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.15) 100%);
  border: 1px solid white;
  
  @media (max-width: 350px) {
    width: 80vw;
  }
`;

const spin = keyframes`
  50% { transform: rotate(360deg); }
  100% { transform: rotate(720deg); }
`;

const Circle = styled.div`
  width: 18px;
  height: 18px;
  border: 6px solid transparent;
  border-top: 6px solid #7000FF;
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
  margin-bottom: 10px;
`;

const images = [ 
  `${process.env.PUBLIC_URL}/assets/Game/randomImage/candle.png`,
  `${process.env.PUBLIC_URL}/assets/Game/randomImage/cow.png`,
  `${process.env.PUBLIC_URL}/assets/Game/randomImage/fire.png`,
  `${process.env.PUBLIC_URL}/assets/Game/randomImage/greenOni.png`,
  `${process.env.PUBLIC_URL}/assets/Game/randomImage/guitar.png`, 
  `${process.env.PUBLIC_URL}/assets/Game/randomImage/ice.png`,
  `${process.env.PUBLIC_URL}/assets/Game/randomImage/radish.png`,
  `${process.env.PUBLIC_URL}/assets/Game/randomImage/sun.png`,
  `${process.env.PUBLIC_URL}/assets/Game/randomImage/letter.png`,
  `${process.env.PUBLIC_URL}/assets/Game/randomImage/moon.png`,
];
const correctAnswer = ["초음파", "우거지", "화상전화", "파스타", "타악기", "다이빙", "무에타이", "해수면", "편의점", "알쏭달쏭"];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const ImageQuiz = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState(getRandomImage());
  const [isAnswered, setIsAnswered] = useState(false);
  const [remainingTime, setRemainingTime] = useState(30);

  const accessToken = localStorage.getItem("bummySuri");

  const gameResult = (rpsResult) => {
    axios
      .put(`${API}/miniGame`, { 
        result: rpsResult,
        miniGameType: '그림 퀴즈',
      }, {
        headers: {
          Authorization: `bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        const { quiz } = response.data;
        console.log(quiz);
        localStorage.setItem("quiz", quiz);
      })
      .catch((error) => {
        console.error("API Error:", error);
        // 오류 메시지 출력
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

  //타이머
  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0 && !isAnswered) {
        setRemainingTime((prevTime) => prevTime - 1);
      } else if (remainingTime === 0 && !isAnswered) {
        navigate("/imageQuiz/lose");
        setIsAnswered(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isAnswered, remainingTime]);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {
    if (answer.trim() === "") {
      alert("답을 입력하세요.");
    } else {
      const trimmedAnswer = answer.trim(); //공백 제거
      if (correctAnswer.includes(trimmedAnswer)) {
        gameResult("win");
        setTimeout(function() {
          navigate("/imageQuiz/win");
        }, 500); 
      } else {
        gameResult("lose");
        setTimeout(function() {
          navigate("/imageQuiz/lose");
        }, 500); 
      }
      setIsAnswered(true);
    }
  };

  return (
    <div style={{backgroundColor:"#1D1D1D"}}>
      <Background>
        <MainLogo>넌센스 그림퀴즈</MainLogo>
        <SideBar><SideBarContents/></SideBar>
        <RandomImage>
          <img src={image} alt="Random" width="100%" style={{borderRadius:"20px"}}/>
        </RandomImage>
        <Image src={`${process.env.PUBLIC_URL}/assets/Game/randomImage/bummyInQuiz.png`}/>
        <MainText>{remainingTime}</MainText>
        <Answer>
          답:
          <AnswerInput
            type="text"
            placeholder=""
            value={answer}
            onChange={handleAnswerChange}
          />
        </Answer>
        <Btn onClick={handleSubmit}>제출하기!</Btn>
      </Background>
    </div>
  );
}

export default ImageQuiz;
