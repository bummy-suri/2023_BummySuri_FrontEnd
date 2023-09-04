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
        <Link to="/rock-paper-scissors"><GotoGame style={{marginTop:"15px"}}>가위바위보</GotoGame></Link>
        <Link to="/imageQuiz/intro"><GotoGame>그림 퀴즈</GotoGame></Link>

      </div>
    );
  }
  
  export default GameList;