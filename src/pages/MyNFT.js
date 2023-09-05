import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

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

const NFTbox = styled.div`
    margin-top: 23px;
    width: 80vw;
    height: 80vw;
    border-radius: 30px;
    border: 2px solid #FAFAFA;
    background: radial-gradient(92.29% 92.44% at 50.16% 63.19%, #FEC0FF 2.08%, #6256E9 61.38%, #1512A5 100%);
    @media(min-width: 400px){
        width: 360px;
        height: 360px;
    }
`;

const Textbox = styled.div`
    margin-top: 45px;
    width: 75vw;
    height: 80vw;
    border-radius: 10px;
    background: linear-gradient(134deg, rgba(99, 93, 93, 0.89) 1.59%, rgba(42, 40, 40, 0.15) 100%);
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

const MyNFT = () => {
    return (
        <div style={{backgroundColor:"#1D1D1D"}}>
        <Background>
            <MainLogo>나의 버미(나의 수리)</MainLogo>
            <NFTbox></NFTbox>
            <Textbox></Textbox>
            <Link to="/ImageQuiz"><Btn>닫기</Btn></Link>
        </Background>
        </div>
        );
}
export default MyNFT;
