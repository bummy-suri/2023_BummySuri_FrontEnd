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

const ToggleButton = styled.button`
  background-color: transparent;
  color: white; 
  border: none;
  cursor: pointer;
  font-size: 22px;
  font-weight: 800;
  display: flex;
  align-items: center;
`;

const DownBtn = styled.img`
  width: 16px;
  height: 8px; 
  transition: transform 0.3s;
`;

const AboutText = styled.div`
  margin-top: 10px;
  overflow: hidden;
  max-height: ${props => (props.showContent ? "700px" : "0")};
  transition: max-height 0.3s ease-in-out;
`;

//AboutKlip 버튼
const AboutKlip = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <AbtKlip>
      <ToggleButton onClick={toggleContent}>
        About Klip
        <span style={{ marginRight: "20px" }}> </span>
        <DownBtn src={downBtn} style={{ transform: showContent ? "rotate(180deg)" : "rotate(0)" }} />
      </ToggleButton>
      <AboutText showContent={showContent}>
        {showContent && <KlipIntro />}
      </AboutText>
    </AbtKlip>
  );
};

export default AboutKlip;
