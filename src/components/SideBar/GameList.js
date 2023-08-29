import React from "react";
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

const GameList = ()=> {
    return (
      <div>
        <Link to="/rock-paper-scissors"><GotoGame style={{marginTop:"15px"}}>가위바위보</GotoGame></Link>
        <Link to="/ImageQuiz/intro"><GotoGame>그림 퀴즈</GotoGame></Link>
        <GotoGame>사다리 타기</GotoGame>
      </div>
    );
  }
  
  export default GameList;