import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/Logo';
import {Link} from "react-router-dom";

import SideBar from "../../components/SideBar/SideBar";
import SideBarContents from "../../components/SideBar/SideBarContents";


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
    border-radius: 10px;
    text-align: center;
    padding: 0 59px;
    font-size: 25px;
    margin-top: 150px;

    @media (max-width: 350px) {
        font-size: 20px;
        margin-top: 50px;
        width: 130px;
      }

`;

const Button = styled.button`
    border-radius: 14px;
    background: #7000FF;
    border: none;
    margin-top: 90px;
    width: 334px;
    height: 50px;
    color: white;
    font-size: 20px;
    margin-bottom: 94px;

    @media (max-width: 350px) {
        width: 220px;
      }
`

const Popup = ({ title, message, remainingAttempts }) => {

    return (
        <PopupContainer>
            <Logo/>
            <SideBar><SideBarContents/></SideBar>
            <ModalContent>
                <div style={{ marginTop: "60px", fontSize: "40px", fontWeight: "bold", fontFamily:"Pretendard_Bold" }}>{title}</div>
                <div style={{ marginTop: "30px", marginBottom: "98px" }}>{message}</div>
                {remainingAttempts !== undefined && (
                    <div style={{ fontSize: "20px", marginBottom: "15px" }}>남은 횟수: {remainingAttempts}</div>
                )}
                </ModalContent>
                <Link to="/rock-paper-scissors"><Button>한번 더!</Button></Link>
        </PopupContainer>

    );
};

export default Popup;
