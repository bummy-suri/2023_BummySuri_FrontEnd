import React from "react";
import styled from 'styled-components';
import Bummi from "../../assets/bummi.png";
import Suri from "../../assets/suri.png";

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 264px;
  margin-top:60px;
  `;

const Image = styled.img`
  width: 132px;
  height: 128px;
`;

const Bummisuri = ()=> {
    return (
      <div>
      <ImageContainer>
        <Image src={Bummi} />
        <Image src={Suri} />
      </ImageContainer>
      </div>
    );
  }
  
  export default Bummisuri;