import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import SideBar from "../../../components/SideBar/SideBar";
import SideBarContents from "../../../components/SideBar/SideBarContents";

import bummy from "../../../assets/Game/bummyInQuiz.png";

import candle from "../../../assets/Game/randomImage/candle.png";
import cow from "../../../assets/Game/randomImage/cow.png";
import fire from "../../../assets/Game/randomImage/fire.png";
import greenOni from "../../../assets/Game/randomImage/greenOni.png";
import guitar from "../../../assets/Game/randomImage/guitar.png";
import ice from "../../../assets/Game/randomImage/ice.png";
import radish from "../../../assets/Game/randomImage/radish.png";
import sun from "../../../assets/Game/randomImage/sun.png";
import letter from "../../../assets/Game/randomImage/letter.png";
import moon from "../../../assets/Game/randomImage/moon.png";

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
    width: 40vw;
`

const RandomImage = styled.div`
    width:400px;
    height: 400px;
    background-color: white;
    margin-top: 40px;
    @media(max-width: 500px){
        width: 65vw;
        height: 65vw;
    }
`;


const MainText = styled.div`
    text-align: center;
    font-size: 14px;
    line-height: 26px; /* 162.5% */
    margin-top: 5px;
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

const images = [ candle, cow, fire, greenOni, guitar, ice, radish, sun, letter, moon,];
const correctAnswer = ["초음파", "우거지", "화상전화", "파스타", "타악기", "다이빙", "무에타이", "해수면", "편의점", "알쏭달쏭"];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};


const ImageQuiz = () => {
    const [answer, setAnswer] = useState("");
    const [image, setImage] = useState(getRandomImage());
    const [isAnswered, setIsAnswered] = useState(false);

    //수정
    useEffect(() => {
      const timer = setTimeout(() => {
        if (!isAnswered) {
          alert("시간이 초과되었습니다.");
        }
      }, 30000);
  
      return () => clearTimeout(timer);
    }, [isAnswered]);

    const handleAnswerChange = (event) => {
      setAnswer(event.target.value);
    };

    const handleSubmit = () => {
      if (answer.trim() === "") {
        alert("답을 입력하세요.");
      } else if (correctAnswer.includes(answer)) { // 정답 배열에 포함되어 있는지 확인
        alert("정답!");
      } else {
        alert("오답!");
      }
      setIsAnswered(true);
    };
  
    const handleNextImage = () => {
      setImage(getRandomImage());
      setAnswer("");
      setIsAnswered(false);
    };

    return (
        <div style={{backgroundColor:"#1D1D1D"}}>
        <Background>
            <MainLogo>넌센스 그림퀴즈</MainLogo>
            <SideBar><SideBarContents/></SideBar>
            <RandomImage><img src={image} alt="Random" width="100%" /></RandomImage>
            <Image src={bummy}/>
            <MainText>30초시계</MainText>
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
