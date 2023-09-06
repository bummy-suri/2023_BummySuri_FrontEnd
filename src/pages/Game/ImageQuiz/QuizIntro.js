import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import SideBar from "../../../components/SideBar/SideBar";
import SideBarContents from "../../../components/SideBar/SideBarContents";
import { API } from "../../../config";
import axios from "axios";

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
    width: 70vw;
    margin-top:50px;
`

const Title = styled.div`
    font-size: 25px;
    font-family: "Pretendard_bold";
    font-weight: bold;
    margin-top: 45px;
    @media(max-width: 300px){
        font-size: 18px;
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
  margin-top: 56px;
  margin-bottom: 29px;
  color: #FFFFFF;
  @media (max-width: 350px) {
    width: 80vw;
  }
`;

//제한횟수 도달
const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1D1D1D;
  border-radius: 8px;
  width:260px;
  height: 90px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 350px) {
    width: 80vw;
  }
`;

const PopupContainer = styled.div`
  width:260px;
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
  @media (max-width: 300px) {
    font-size: 14px;
  }
`;

const QuizIntro = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const [quizTimes, setquizTimes] = useState(true);
    const accessToken = sessionStorage.getItem("bummySuri");

    useEffect(() => {
        axios.get(`${API}/minigame`, {
          headers:{
            Authorization: `bearer ${accessToken}`
            }
          })
            .then(response => {
                console.log(response.data);
                const {quiz} = response.data;
                setquizTimes(quiz);
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
    }, []); 

    const handleQuizButtonClick = () => {
        if (quizTimes === true) {
            window.location.href = '/ImageQuiz';
        } else {
            setPopupOpen(true);
        }
    };

    return (
        <div style={{backgroundColor:"#1D1D1D"}}>
        <Background>
            <MainLogo>넌센스 그림퀴즈</MainLogo>
            <SideBar><SideBarContents/></SideBar>
            <Title>버미의 넌센스 그림퀴즈</Title>
            <MainText>30초 안에 버미가 내는 문제를 맞춰봐!</MainText>
            <Image src={`${process.env.PUBLIC_URL}/assets/Game/randomImage/bummyInQuiz.png`}/>
            
            {popupOpen &&(
                <Popup>
                    <PopupContainer>
                        아쉽지만 제한 횟수에 도달했어요.
                        <button
                            onClick={() => setPopupOpen(false)}
                            style={{backgroundColor:"#7000FF", color:"white", width:"65px", height:"23px", border:"none", borderRadius:"4px", marginTop: "10px"}}>
                            닫기
                        </button>
                    </PopupContainer>
                </Popup>
            )}
            <Btn onClick={handleQuizButtonClick}>그림 퀴즈 시작!</Btn>
        </Background>
        </div>
        );
}

export default QuizIntro;
