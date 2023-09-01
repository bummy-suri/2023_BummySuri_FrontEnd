import React, {useState} from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";

//사이드바 미니게임 누르면 토글내용
const GotoGame = styled.button`
    padding-bottom: 10px;
    border: none;
    color: #FFFFFF;
    background: transparent;
    width: 100%;
    font-size: 16px;
    font-family: 'NanumSquare_acL';

    
`

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1D1D1D;
  border-radius: 8px;
  width: 185px; 
  height: 60px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
`;

const PopupContainer = styled.div`
  width: 185px; 
  height: 60px;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.15) 100%);
  border: 1px solid white;

`;

const GameList = ()=> {
    const [mintingPopupOpen, setMintingPopupOpen] = useState(false);
    return (
      <div>
        {/*
        <Link to="/rock-paper-scissors"><GotoGame  onClick={() => setMintingPopupOpen(true)} style={{marginTop:"15px"}}>가위바위보</GotoGame></Link>*/}
        
        
        <GotoGame  onClick={() => setMintingPopupOpen(true)} style={{marginTop:"15px"}}>가위바위보</GotoGame>
        {mintingPopupOpen && (
                <Popup style={{width:""}}>
                    <PopupContainer>
                        9월 6일 오전 9시에 만나요!
                        <button
                            onClick={() => setMintingPopupOpen(false)}
                            style={{ backgroundColor: "#7000FF", color: "white", width: "55px", height: "23px", border: "none", borderRadius: "4px", marginTop: "10px" }}>
                            닫기
                        </button>
                    </PopupContainer>
                </Popup>
            )}

        <GotoGame onClick={() => setMintingPopupOpen(true)}>그림 퀴즈</GotoGame>
        {/*    
        <Link to="/ImageQuiz/intro"><GotoGame>그림 퀴즈</GotoGame></Link>
        <GotoGame>사다리 타기</GotoGame>*/}
      </div>
    );
  }
  
  export default GameList;