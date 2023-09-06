import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

import SideBar from "../../components/SideBar/SideBar";
import SideBarContents from "../../components/SideBar/SideBarContents";

import { API } from "../../config";
import MyRanking from "./MyRanking";

const Background = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: #1D1D1D;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const MainLogo = styled.div`
  display: fixed;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
  margin-top: 74px;
  margin-bottom: 33px;
  font-family: "Pretendard_Regular";
`;

const RankingBox = styled.div`
  display: flex;
  width: 327px;
  height: 78px;
  align-items: center;
  border-radius: 10px;
  background: linear-gradient(97deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.15) 100%);
  margin-top: 10px;
  border: none;
  border: 1px solid ${props => {
    if (props.isGold) return '#FFE264';
    if (props.isSilver) return '#C2C8CC';
    if (props.isBronze) return '#EBB257';
    return 'no';
  }};
  @media (max-width: 345px) {
    width: 90vw;
  }
`;

const RankImage = styled.img`
  width: 47px;
  margin-right: 10px;
  margin-left: 10px;
  @media (max-width: 330px) {
    width: 44px;
    margin-left: none;
  }
  @media (max-width: 300px) {
    width: 15vw;
    margin-left: none;
  }

`;

const Num = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 67px;
  font-size: 16px;
  font-weight: 700;
  @media (max-width: 330px) {
    width: 64px;
  }
  @media (max-width: 300px) {
    width: 24vw;
    margin-left: none;
  }
`;

const NFTImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 17px;
  @media (max-width: 330px) {
    margin-right: 13px;
  }
  @media (max-width: 279px) {
    width: 55px;
    height: 55px;
    margin-right: 10px;
  }
  @media (max-width: 255px) {
    width: 20vw;
    height: 20vw;
    margin-right: 5px;
  }
  @media (max-width: 245px) {
    width: 17vw;
    height: 17vw;
    margin-right: none;
  }
`;

const Address = styled.span`
  font-size: 14px;
  @media (max-width: 330px) {
    font-size: 12px;
  }
  @media (max-width: 280px) {
    width: 8px;
  }
`;

const Point = styled.span`
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 330px) {
    font-size: 16px;
  }
  @media (max-width: 280px) {
    width: 14px;
  }
`;

const Text = styled.div`
  text-align: center;
  font-size: 16px;
  margin-top: 70px;
  font-weight: 500;
  line-height: 30px;
`;

const BoxText = styled.div`
  text-align: center;
  font-size: 10px;
  margin-top: 20px;
  font-weight: 400;
  border: 0.5px solid #FFF;
  border-radius: 8px;
  padding: 10px 0;
  width: 315px;
  @media (max-width: 345px) {
    width: 90vw;
  }
`;

const MyRankingText = styled.div`
  text-align: left;
  font-size: 14px;
  margin-top: 70px;
  font-weight: 500;
  line-height: 30px;
  width: 280px;
  @media (max-width: 330px) {
    width: 250px;
  }
  @media (max-width: 310px) {
    width: 220px;
  }
  @media (max-width: 280px) {
    width: 190px;
  }
  @media (max-width: 220px) {
    width: 140px;
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1D1D1D;
  border-radius: 8px;
  width: 260px;
  height: 90px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 350px) {
    80vw;
  }
`;

const PopupContainer = styled.div`
  width: 260px;
  height: 90px;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.15) 100%);
  border: 1px solid white;
  @media (max-width: 350px) {
    width: 80vw;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(360deg); }
  100% {transform: rotate(720deg);}
`;

const Circle = styled.div`
  width: 18px;
  height: 18px;
  border: 6px solid transparent;
  border-top: 6px solid #7000FF;
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
  margin-bottom: 10px;
`;

const Ranking = () => {
  const [top10Rankings, setTop10Rankings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("bummySuri");

    // 탑10
    axios.get(`${API}/ranking/top10`, {
      headers: {
        Authorization: `bearer ${accessToken}`,
      },
    })
    .then(response => {
      setTop10Rankings(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.error('top10 API 호출 오류', error);
    });
  }, []);

  const formatUserCardAddress = (address) => {
    const frontPart = address.substring(0, 6);
    const endPart = address.substring(address.length - 6);
    return `${frontPart}...${endPart}`;
  };

  return (
    <div style={{ backgroundColor: "#1D1D1D" }}>
      {loading ?
        <Background>
          <Popup>
            <PopupContainer>
              <Circle><div></div></Circle>
              랭킹 불러오는 중...
            </PopupContainer>
          </Popup>
        </Background> :
        <Background>
          <MainLogo>Ranking</MainLogo>
          <SideBar><SideBarContents /></SideBar>
          <div>
            {top10Rankings.map((ranking, index) => (
              <RankingBox
                key={index}
                isGold={index === 0}
                isSilver={index === 1}
                isBronze={index === 2}
              >
                {index === 0 && <RankImage src={`${process.env.PUBLIC_URL}/assets/Ranking/gold.png`} alt="1등" />}
                {index === 1 && <RankImage src={`${process.env.PUBLIC_URL}/assets/Ranking/silver.png`} alt="2등" />}
                {index === 2 && <RankImage src={`${process.env.PUBLIC_URL}/assets/Ranking/bronze.png`} alt="3등" />}
                {(index !== 0 && index !== 1 && index !== 2) && <Num>{index + 1}</Num>}
                <NFTImage src="" />
                <div>
                  <Address>{formatUserCardAddress(ranking.userCardAddress)}</Address><br />
                  <Point>{ranking.totalPoint}P</Point>
                </div>
              </RankingBox>
            ))}
          </div>
          <Text>
            포인트를 가장 많이 모은 10명에게 <br />
            경품을 드립니다!
          </Text>
          <BoxText>※ 동점이더라도 먼저 포인트를 획득한 유저가 더 높은 순위에 기록됩니다!</BoxText>
          <MyRankingText style={{ textAlign: "left !important" }}>나의 랭킹</MyRankingText>
          <MyRanking />
        </Background>}
    </div>
  );
}

export default Ranking;
