import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 


import SideBar from "../../../components/SideBar/SideBar";
import SideBarContents from "../../../components/SideBar/SideBarContents";

import bummy from "../../../assets/Game/bummyInQuiz.png";

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
    width:450px;
    height: 450px;
    background-color: white;
    margin-top: 20px;
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




const ImageQuiz = () => {
    const [answer, setAnswer] = useState(""); //답 입력

    const handleAnswerChange = (event) => {
      setAnswer(event.target.value);
    };

    return (
        <div style={{backgroundColor:"#1D1D1D"}}>
        <Background>
            <MainLogo>넌센스 그림퀴즈</MainLogo>
            <SideBar><SideBarContents/></SideBar>
            <RandomImage></RandomImage>
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
            <Link to="/ImageQuiz"><Btn>제출하기!</Btn></Link>
        </Background>
        </div>
        );
}

export default ImageQuiz;
