import React from 'react';
import styled from 'styled-components';
import BummySuriTitle from '../components/Logo';
import CountDown from '../components/Minting/CountDown';
import bummyimage from '../assets/bummy.png';
import suriimage from '../assets/suri.png';

//사이드바
import SideBar from '../components/SideBar/SideBar';
import SideBarContents from '../components/SideBar/SideBarContents';


const Minting = () => {
  const targetDate = '2023-09-01T03:00:00';
  // 민팅 일자는 언제? 수정해야 함!
  const BummyAmount = 3000;
  const SuriAmount = 5000;
  // 남은 버미, 수리 NFT 개수 받아오기! 임의로 그냥 3000개로 해두고 Test 해봤음.
  const BummyGraphHeight = (BummyAmount / 5000) * 177;
  const SuriGraphHeight = (SuriAmount / 5000) * 177;

  const Container = styled.div`
    background-color: black;
    max-width: 100%;
    min-height: 100vh;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  `;

  const KoYonDiv = styled.div`
    width: 100vw;
    height: 62px;
    display: flex;
    justify-content: center;
    margin-bottom: 35px;
  `;

  const KoYonDivWhite = styled.div`
    text-align: center;
    color: white;
    font-size: 30px;
    font-weight: 800;
    margin-top: 35px;
    margin-left: 10px;
    font-family: 'Inter';
  `;

  const KoYonDivRed = styled.div`
    text-align: center;
    color: red;
    font-size: 30px;
    font-weight: 800;
    margin-top: 35px;
    margin-left: 10px;
    font-family: 'Inter';
  `;

  const KoYonDivBlue = styled.div`
    text-align: center;
    color: blue;
    font-size: 30px;
    font-weight: 800;
    margin-top: 35px;
    margin-left: 10px;
    font-family: 'Inter';
  `;

  const NewEventDiv = styled.div`
    width: 301px;
    height: 34px;
    background-color: #f1edf2;
    border-radius: 10px;
    text-align: center;
    color: black;
    font-size: 25px;
    font-family: 'Inter';
    font-weight: 800;
    margin-top: 30px;
    line-height: 34px;
  `;

  const CarouselBox = styled.div`
    width: 100vw;
    margin-top: 40px;
  `;

  const MintButton = styled.button`
    width: 300px;
    height: 80px;
    background-color: #7000ff;
    border-radius: 10px;
    text-align: center;
    color: white;
    font-family: 'Inter-Bold';
    font-size: 35px;
    font-weight: 700;
    margin-top: 15px;
  `;

  const NFTCountDiv = styled.div`
    width: 339px;
    height: 492px;
    background: linear-gradient(180deg, #f8ecfc 14%, #746e6e 92%);
    border-radius: 20px;
    margin-top: 40px;
    margin-bottom: 97px;
  `;

  const ImageGraphDiv = styled.div`
    display: flex;
    justify-content: center;
  `;

  const GraphSetting = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `;

  const BummyGraph = styled.div`
    width: 52px;
    height: ${BummyGraphHeight}px;
    line-height: ${BummyGraphHeight}px;
    background-color: #ef1919;
    color: #f5f5f5;
    text-align: center;
    font-size: 16px;
    font-family: 'Inter';
    font-weight: 800;
    margin-right: 50px;
    margin-top: 20px;
  `;
  const SuriGraph = styled.div`
    width: 52px;
    height: ${SuriGraphHeight}px;
    line-height: ${SuriGraphHeight}px;
    background-color: #3239e7;
    color: #f5f5f5;
    text-align: center;
    font-size: 16px;
    font-family: 'Inter';
    font-weight: 800;
    margin-left: 50px;
    margin-top: 20px;
  `;
  const Line = styled.div`
    display: flex;
    justify-content: center;
  `;
  const GraphLine = styled.div`
    width: 265px;
    border: 1px solid black;
  `;

  const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  `;

  const UnderGraphTextFirst = styled.div`
    width: 265px;
    height: 24px;
    text-align: center;
    color: black;
    font-size: 20px;
    font-family: 'Inter';
    font-weight: 800;
    margin-bottom: 10px;
  `;

  const UnderGraphTextSecond = styled.div`
    width: 265px;
    height: 24px;
    text-align: center;
    color: black;
    font-size: 20px;
    font-family: 'Inter';
    font-weight: 300;
  `;

  return (
    <>
      <Container>
        <BummySuriTitle />
        <SideBar><SideBarContents/></SideBar>
        <KoYonDiv>
          <KoYonDivWhite>2023</KoYonDivWhite>
          <KoYonDivRed>KO</KoYonDivRed>
          <KoYonDivWhite>-</KoYonDivWhite>
          <KoYonDivBlue>YON</KoYonDivBlue>
          <KoYonDivWhite>Collection</KoYonDivWhite>
        </KoYonDiv>
        <CountDown targetDate={targetDate} />
        <NewEventDiv>NFT EVENT!</NewEventDiv>
        <MintButton>Mint!</MintButton>
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
                transform: 'scaleX(-1)',
              }}
              src={suriimage}
              alt="Suri"
            ></img>
          </ImageGraphDiv>
          <ImageGraphDiv>
            <GraphSetting>
              <BummyGraph>{BummyAmount}</BummyGraph>
            </GraphSetting>
            <GraphSetting>
              <SuriGraph>{SuriAmount}</SuriGraph>
            </GraphSetting>
          </ImageGraphDiv>
          <Line>
            <GraphLine></GraphLine>
          </Line>
          <TextDiv>
            <UnderGraphTextFirst>남은 수량</UnderGraphTextFirst>
            <UnderGraphTextSecond>
              버미와 수리가
              <br />
              친구를 기다리고 있어요!
            </UnderGraphTextSecond>
          </TextDiv>
        </NFTCountDiv>
      </Container>
    </>
  );
};

export default Minting;