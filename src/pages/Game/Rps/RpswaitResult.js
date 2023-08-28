import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

import suri from "../../../assets/Game/Rps.png";
import rock from "../../../assets/Game/rock.png";
import paper from "../../../assets/Game/paper.png";
import scissors from "../../../assets/Game/scissors.png";

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


const Rps = () => {
    const location = useLocation(); 
    const navigate = useNavigate();
    const selectedChoice = location.state?.selectedChoice || '';  //이전 페이지에서 선택한 rps값 가져오기


    //이미지랑 매핑..
    const choicesMap = {
        바위: { text: '바위', image: rock },
        보: { text: '보', image: paper },
        가위: { text: '가위', image: scissors },
    };

    const myImage = choicesMap[selectedChoice].image;
    
    useEffect(() => {
        const delay = 1500; // 1.5초
        const timeoutId = setTimeout(() => {
            window.location.href = '/rock-paper-scissors/result'; // 1.5초 후에 페이지 전환
        }, delay);

        return () => clearTimeout(timeoutId);
    }, []);



    return (        
        <Background>
            <MainLogo>가위바위보</MainLogo>

            <Who style={{ marginTop: "60px", display: "flex", alignItems: "center" }}>
                <img src={suri} style={{ width: "20vw"}} />
                수리
            </Who>
            
            <ResultBox style={{backgroundColor:"#333"}}>
               <h1 style={{fontSize:"40px"}}>?</h1>
            </ResultBox>

            <ResultBox style={{marginTop:"190px"}}>
                <Image src={myImage} alt="나의 선택" />
                {selectedChoice}
            </ResultBox>
            <Who style={{ marginTop: "20px", marginBottom:"50px" }}>나의 선택</Who>
            

        </Background>
        );
}

export default Rps;

