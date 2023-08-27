import React, { useState } from "react";
import styled from 'styled-components';
import Logo from '../../components/Logo';
import RpsImage from "../../assets/Game/Rps.png";
import PopupWin from "./RpsWin";
import PopupLose from "./RpsLose";


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

const Image = styled.img`
    width: 281px;
    margin-top: 128px;
    @media (max-width: 350px) {
        width: 200px;
        }
`;

const Mychoice = styled.div`
    font-size: 25px;
    font-family: "Pretendard-Bold";
    font-weight: bold;
    margin-top: 69px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 22px;
`;

const ChoiceButton = styled.button`
    background-color: ${props => props.isSelected ? "rgba(255, 255, 255, 0.40)" : "#D9D9D9"};
    color: ${props => props.isSelected ? "white" : "black"};
    border: none;
    width: 115px;
    height: 30px;
    margin: 0 5px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    font-family: "Pretendard-Bold";
    font-weight: bold;
    transition: background-color 0.3s ease-in-out, color 0.2s ease-in-out;
    @media (max-width: 350px) {
        width: 80px;
        }

    `;

const ConfirmButton = styled.button`
    width: 334px;
    height: 50px;
    background-color: #7000FF;
    font-size: 20px;
    font-weight: bold;
    border: none;
    border-radius: 14px;
    cursor: pointer;
    margin-top: 56px;
    margin-bottom: 29px;
    color: #FFFFFF;

    @media (max-width: 350px) {
    width: 230px;
    }
`;


const Rps = () => {
    const [selectedChoice, setSelectedChoice] = useState(""); // State to track the selected choice

    // Function to handle button click and update the selectedChoice state
    const handleChoiceClick = (choice) => {
        setSelectedChoice(choice);
    };
   
    return (
        
        <Background>
            <Logo />
            <Image src={RpsImage} />
            <Mychoice>나의 선택</Mychoice>


            <ButtonContainer>
            <ChoiceButton isSelected={selectedChoice === "가위"} onClick={() => handleChoiceClick("가위")}>가위</ChoiceButton>
                <ChoiceButton isSelected={selectedChoice === "바위"} onClick={() => handleChoiceClick("바위")}>바위</ChoiceButton>
                <ChoiceButton isSelected={selectedChoice === "보"} onClick={() => handleChoiceClick("보")}>보</ChoiceButton>
            </ButtonContainer>


            <ConfirmButton>확인</ConfirmButton>

        </Background>
        );
}

export default Rps;
