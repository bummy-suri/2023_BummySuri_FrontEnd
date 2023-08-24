import React from "react";
import styled from 'styled-components';

const MainLogo = styled.div`
  font-size: 25px;
  color: white;
  border: 1px solid white; /* 테두리 설정 */
  border-radius: 70%; /* 타원 형태로 테두리 설정 */
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