import React from "react";
import styled from 'styled-components';

//Bummi&Suri 공통 로고 컴포넌트
const MainLogo = styled.div`
  font-size: 25px;
  color: white;
  border: 1px solid white;
  border-radius: 70%;
  width: 242px;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 79px;
`;

const Logo = ()=> {
    return (
      <MainLogo>
        BUMMY & SURI
      </MainLogo>
    );
  }
  
  export default Logo;