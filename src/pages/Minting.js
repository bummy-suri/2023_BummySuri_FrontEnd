import React from 'react';
import styled from 'styled-components';
import BummySuriTitle from '../components/Logo';
import ImageSlider from '../components/Minting/ImageSlider';
import CountDown from '../components/Minting/CountDown';
import bummyimage from '../assets/bummy.png';
import suriimage from '../assets/suri.png';

import Carousel from "../components/Lending/Carousel";
import CarouselBenefit from "../components/Lending/CarouselBenefit";


const Minting = () => {
  const images = ['../assets/bummy.png', '../assets/suri.png'];

  const targetDate = '2023-09-01T00:00:00';
  // 민팅 일자는 언제? 수정해야 함!

  return (
    <>
      <Container>
        <BummySuriTitle />
        <KoYonDiv>2023 KO-YON Collection</KoYonDiv>
        <MintButton>Mint!</MintButton>
        <CarouselBox>
            <Carousel/>
          </CarouselBox>
        <KoYonDiv>민팅 D-Day 카운트다운</KoYonDiv>
        <CountDown targetDate={targetDate} />
        <NFTCountDiv>
          <ImageGraphDiv>
            <img
              style={{
                width: '150px',
                height: '150px',
                marginRight: '10px',
                marginLeft: '19px',
                marginTop: '23px',
              }}
              src={bummyimage}
              alt="Bummy"
            ></img>
            <img
              style={{
                width: '150px',
                height: '150px',
                marginRight: '19px',
                marginLeft: '10px',
                marginTop: '23px',
              }}
              src={suriimage}
              alt="Suri"
            ></img>
          </ImageGraphDiv>
          <ImageGraphDiv>
            <BummyGraph></BummyGraph>
            <SuriGraph></SuriGraph>
          </ImageGraphDiv>
          <GraphLine></GraphLine>
          <TextDiv></TextDiv>
        </NFTCountDiv>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const KoYonDiv = styled.div`
  width: 100vw;
  height: 62px;
  text-align: center;
  color: white;
  font-size: 25px;
  font-weight: 700;
  margin-top: 35px;
`;

const CarouselBox = styled.div`
  width: 100vw;
  margin-top: 40px;
`;

const MintButton = styled.button`
  width: 301px;
  height: 45px;
  background-color: #c565e7;
  border-radius: 10px;
  text-align: center;
  color: white;
  font-size: 25px;
  font-weight: 700;
  margin-top: 15px;
`;

const NFTCountDiv = styled.div`
  width: 339px;
  height: 492px;
  background-color: #f7e9e9;
  border-radius: 20px;
  margin-top: 40px;
  margin-bottom: 97px;
`;

const ImageGraphDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const BummyGraph = styled.div`
  width: 52px;
  height: 177px;
  background-color: #ef1919;
  margin-right: 50px;
  margin-top: 20px;
`;

const SuriGraph = styled.div`
  width: 52px;
  height: 177px;
  background-color: #3239e7;
  margin-left: 50px;
  margin-top: 20px;
`;

const GraphLine = styled.div`
  width: 265px;
  border: 1px solid black;
`;
export default Minting;