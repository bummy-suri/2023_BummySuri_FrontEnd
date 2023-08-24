import React, { useState } from "react";
import styled from 'styled-components';
import KlipIntro from "./KlipIntro";

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
`;

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
      <ToggleButton onClick={toggleContent}>About Klip&nbsp;
        {showContent ? "˄" : "˅"}
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
