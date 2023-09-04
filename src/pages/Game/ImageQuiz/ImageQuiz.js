import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import SideBar from "../../../components/SideBar/SideBar";
import SideBarContents from "../../../components/SideBar/SideBarContents";
import axios from "axios";
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

const Image = styled.img`
    width: 40vw;
`

const RandomImage = styled.div`
    width:400px;
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
`

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
`

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
    const [answer, setAnswer] = useState("");
    const [image, setImage] = useState(getRandomImage());
    const [isAnswered, setIsAnswered] = useState(false);
    const [remainingTime, setRemainingTime] = useState(30);

    const accessToken = sessionStorage.getItem("accessToken");

    //`${API}/miniGame` "https://api.dev.bummysuri.com/minigame"
    const gameResult = (rpsResult) => {
      axios
          .put(`${API}/miniGame` , { 
              result: rpsResult,
              miniGameType: '그림 퀴즈',
          }, {
              headers: {
                  Authorization: `bearer ${accessToken}`,
              },
          })
          .then((response) => {
              console.log(response.data);
              //setRemainingAttempts(times);
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
          window.location.href = '/imageQuiz/lose';
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
          window.location.href = '/imageQuiz/win';
        } else {
          gameResult("lose");
          window.location.href = '/imageQuiz/lose';
        }
        setIsAnswered(true);
      }
    };

    return (
        <div style={{backgroundColor:"#1D1D1D"}}>
        <Background>
            <MainLogo>넌센스 그림퀴즈</MainLogo>
            <SideBar><SideBarContents/></SideBar>
            <RandomImage><img src={image} alt="Random" width="100%" style={{borderRadius:"20px"}}/></RandomImage>
            <Image src={`${process.env.PUBLIC_URL}/assets/Game/randomImage/bummyInQuiz.png`}/>
            <MainText>{remainingTime}</MainText>
            <Answer>답:
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
