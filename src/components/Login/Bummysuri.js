import React from "react";
import styled, { css } from "styled-components";
import Bummy from "../../assets/bummy.png";
import Suri from "../../assets/suri.png";


//버미수리 이미지
const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  `;

  const Image = styled.img`
  width: 132px;
  transition: width 1s; 
  @media (min-width: 800px) {
    width: 200px;
  }
`;

const Bummisuri = ()=> {
    return (
      <div>
      <ImageContainer>
        <Image src={Bummy} />
        <Image src={Suri} />
      </ImageContainer>
      </div>
    );
  }
  
  export default Bummisuri;