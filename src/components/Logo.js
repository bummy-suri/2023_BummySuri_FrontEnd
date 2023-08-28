import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";

//Bummy&Suri 공통 로고 컴포넌트

const MainLogo = styled.div`
  display: fixed;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
  margin-top: 74px;
  font-family: "Pretendard_Medium";
`;

const Logo = ()=> {
    return (
      <MainLogo>
        <Link to="/" style={{  fontSize: '16px',  color: 'white', textDecoration:'none'}}>BUMMY & SURI</Link>
      </MainLogo>
    );
  }
  
  export default Logo;