import React from "react";
import styled from 'styled-components';


//Bummy&Suri 공통 로고 컴포넌트

const MainLogo = styled.div`
  display: flex;
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
        BUMMY & SURI
      </MainLogo>
    );
  }
  
  export default Logo;