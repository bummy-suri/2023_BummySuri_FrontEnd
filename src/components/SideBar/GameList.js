import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";


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
        <GotoGame>가위바위보</GotoGame>
        <GotoGame>그림 퀴즈</GotoGame>
        <GotoGame>사다리 타기</GotoGame>
      </div>
    );
  }
  
  export default GameList;