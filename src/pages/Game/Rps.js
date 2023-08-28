import React, { useState } from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 
import Logo from '../../components/Logo';
import RpsImage from "../../assets/Game/Rps.png";

import SideBar from "../../components/SideBar/SideBar";
import SideBarContents from "../../components/SideBar/SideBarContents";

import rock from "../../assets/Game/rock.png";
import paper from "../../assets/Game/paper.png";
import scissors from "../../assets/Game/scissors.png";


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
    width: 80vw;
`;

const Title = styled.div`
    font-size: 25px;
    font-family: "Pretendard_bold";
    font-weight: bold;
    margin-top: 49px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 22px;
`;

const ChoiceButton = styled.button`
    background-color: ${props => props.isSelected ? "#7000FF" : "#333"};
    justify-content: flex-start; 
    align-items: center;
    display: flex;
    flex-direction: column;
    color: white;
    border: none;
    width: 110px;
    height: 106px;
    margin: 51px 3px 0px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease-in-out, color 0.2s ease-in-out;
    @media (max-width: 350px) {
        width: 80px;
        }

    `;

const RPSimg = styled.img`
    width: 110px;
    margin: -17%;
    @media (max-width: 280px) {
        width: 100px;
        }
`

const Text = styled.div`
    margin-top: 48px;
    font-size: 14px;
    @media (max-width: 280px) {
        font-size: 11px;
        }
`

const ConfirmButton = styled.button`
    width: 334px;
    height: 50px;
    background-color: #7000FF;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 14px;
    cursor: pointer;
    margin-top: 12px;
    margin-bottom: 100px;
    color: #FFFFFF;

    @media (max-width: 350px) {
    width: 230px;
    }
`;


const Rps = () => {
    const [selectedChoice, setSelectedChoice] = useState("");
    const navigate = useNavigate();

    const handleChoiceClick = (choice) => {
        setSelectedChoice(choice);
    };

    const handleConfirmClick = () => {
        if (selectedChoice) {
            navigate('/rock-paper-scissors/result', { state: { selectedChoice } });
        } else {
            alert("가위, 바위, 보 중 하나를 선택하세요.");
        }
    };

    return (
        <div style={{backgroundColor:"#1D1D1D"}}>
        <Background>
            <Logo /> {/*수정필요..*/}
            <SideBar><SideBarContents/></SideBar>
            <Title>수리와 가위바위보 하기</Title>
            <Text style={{marginTop:"12px"}}>수리를 이길 수 있을까?</Text>
            <Image src={RpsImage} alt="수리이미지" />
            


            <ButtonContainer>
                <ChoiceButton isSelected={selectedChoice === "가위"} onClick={() => handleChoiceClick("가위")}>
                    <RPSimg src={scissors}/>가위
                </ChoiceButton>
                <ChoiceButton isSelected={selectedChoice === "바위"} onClick={() => handleChoiceClick("바위")}>
                    <RPSimg src={rock}/>바위
                </ChoiceButton>
                <ChoiceButton isSelected={selectedChoice === "보"} onClick={() => handleChoiceClick("보")}>
                    <RPSimg src={paper}/>보
                </ChoiceButton>
            </ButtonContainer>

            <Text>가위바위보에서 이기면 100P를 얻을 수 있어요!</Text>
            <ConfirmButton onClick={handleConfirmClick}>가위바위보 !</ConfirmButton>
        </Background>
        </div>
        );
}

export default Rps;
