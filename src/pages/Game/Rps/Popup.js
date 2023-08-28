import React from 'react';
import styled from 'styled-components';
import Logo from '../../../components/Logo';
import {Link} from "react-router-dom";

import SideBar from "../../../components/SideBar/SideBar";
import SideBarContents from "../../../components/SideBar/SideBarContents";


const PopupContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    justify-content: flex-start;
    color: black;
    background-color: #1D1D1D;
    
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 9px;
    border: 0.5px solid #FFF;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.15) 100%);
    text-align: center;
    padding: 0 59px;
    font-size: 22px;
    margin-top: 70px;
    color: white;
    @media (max-width: 350px) {
        font-size: 17px;
        width: 130px;
      }

`;

const Button = styled.button`
    border-radius: 8px;
    background: #7000FF;
    border: none;
    margin: 80px 3px;
    width: 160px;
    height: 50px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 94px;

    @media (max-width: 350px) {
        width: 90px;
      }
`

const Popup = ({ title, message, remainingAttempts }) => {

    return (
        <PopupContainer>
            <Logo/>
            <SideBar><SideBarContents/></SideBar>
            <ModalContent>
                <div style={{ marginTop: "60px", fontSize: "40px", fontWeight: "bold", fontFamily:"Pretendard_Bold" }}>{title}</div>
                <div style={{ marginTop: "30px", marginBottom: "80px" }}>{message}</div>
                {remainingAttempts !== undefined && (
                    <div style={{ fontSize: "16px", marginBottom: "15px" }}>남은 횟수: {remainingAttempts}</div>
                )}
                </ModalContent>
                <div>
                    <Link to="/"><Button style={{border:"1px solid #7000FF", backgroundColor:"#1D1D1D"}}>그만하기</Button></Link>
                    <Link to="/rock-paper-scissors"><Button>한번 더!</Button></Link>
                </div>
        </PopupContainer>

    );
};

export default Popup;
