import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import { useNavigate } from 'react-router-dom'; 
import SideBar from "../../../components/SideBar/SideBar";
import SideBarContents from "../../../components/SideBar/SideBarContents";
import { API } from "../../../config";

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
  width: 105px;
  height: 106px;
  margin: 10px 3px 0px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out, color 0.2s ease-in-out;
  
  @media (max-width: 350px) {
    width: 100px;
  }
  
  @media (max-width: 335px) {
    width: 29vw;
  }
`;

const RPSimg = styled.img`
  width: 110px;
  margin: -17%;
  
  @media (max-width: 280px) {
    width: 100px;
  }
  
  @media (max-width: 280px) {
    width: 100px;
  }
`;

const Text = styled.div`
  margin-top: 48px;
  font-size: 14px;
  
  @media (max-width: 280px) {
    font-size: 11px;
  }
`;

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
    width: 80vw;
  }
`;

// 제한횟수 도달
const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1D1D1D;
  border-radius: 8px;
  width: 260px;
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
  width: 260px;
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

const Rps = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState("");
  const [times, setTimes] = useState();
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("bummySuri");

  useEffect(() => {
    axios.get(`${API}/minigame`, {
      headers:{
        Authorization: `bearer ${accessToken}`
      }
    })
    .then(response => {
      const { times } = response.data;
      setTimes(times);
      console.log(times);
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

  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
  };

  const handleConfirmClick = () => {
    if (selectedChoice) {
      if (times === 3) {
        setPopupOpen(true);
      } else {
        navigate('/rock-paper-scissors/result', { state: { selectedChoice } });
      }
    } else {
      alert("가위, 바위, 보 중 하나를 선택하세요.");
    }
  };

  return (
    <div style={{backgroundColor:"#1D1D1D"}}>
      <Background>
        <MainLogo>가위바위보</MainLogo>
        <SideBar><SideBarContents/></SideBar>
        <Title>수리와 가위바위보 하기</Title>
        <Text style={{marginTop:"12px"}}>수리를 이길 수 있을까?</Text>
        <Image src={`${process.env.PUBLIC_URL}/assets/Game/Rps/Rps.png`} alt="수리이미지" />
        <ButtonContainer>
          <ChoiceButton isSelected={selectedChoice === "가위"} onClick={() => handleChoiceClick("가위")}>
            <RPSimg src={`${process.env.PUBLIC_URL}/assets/Game/Rps/scissors.png`}/>가위
          </ChoiceButton>
          <ChoiceButton isSelected={selectedChoice === "바위"} onClick={() => handleChoiceClick("바위")}>
            <RPSimg src={`${process.env.PUBLIC_URL}/assets/Game/Rps/rock.png`}/>바위
          </ChoiceButton>
          <ChoiceButton isSelected={selectedChoice === "보"} onClick={() => handleChoiceClick("보")}>
            <RPSimg src={`${process.env.PUBLIC_URL}/assets/Game/Rps/paper.png`}/>보
          </ChoiceButton>
        </ButtonContainer>
        <Text>가위바위보에서 이기면 100P를 얻을 수 있어요!</Text>
        
        {popupOpen && (
          <Popup>
            <PopupContainer>
              아쉽지만 제한 횟수에 도달했어요.<br/>
              <span style={{fontSize:"13px", marginTop:"3px", fontWeight:"100"}}>매일 오전 9시에 제한 횟수가 초기화됩니다.</span>
              <button
                onClick={() => setPopupOpen(false)}
                style={{backgroundColor:"#7000FF", color:"white", width:"65px", height:"23px", border:"none", borderRadius:"4px", marginTop: "10px"}}>
                닫기
              </button>
            </PopupContainer>
          </Popup>
        )}
        <ConfirmButton onClick={handleConfirmClick}>가위바위보 !</ConfirmButton>
      </Background>
    </div>
  );
}

export default Rps;
