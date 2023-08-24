import React, { useState } from "react";
import styled from 'styled-components';
import KlipIntro from "./KlipIntro";
import downBtn from "../../assets/Login/downBtn.png";

const AbtKlip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  font-size: 22px;
`;

// 수정된 부분: ToggleButton 스타일 변경
const ToggleButton = styled.button`
  background-color: transparent;
  color: white; 
  border: none;
  cursor: pointer;
  font-size: 22px;
  font-weight: 800;
`;

const DownBtn = styled.img`
  width: 16px;
  height: 8px; 
`

const AboutText = styled.div`
  margin-top: 10px;
`;

const AboutKlip = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <AbtKlip>
      <ToggleButton onClick={toggleContent}>About Klip
        <span style={{marginRight:"20px"}}> </span>
        {showContent ? <DownBtn src={downBtn} style={{transform:"rotate(180deg)"}}/> : <DownBtn src={downBtn}/>}
      </ToggleButton>
      {showContent && (
        <AboutText>
          <KlipIntro/>
        </AboutText>
      )}
    </AbtKlip>
  );
};

export default AboutKlip;
