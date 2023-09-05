import React, { useState, useEffect } from "react";
import styled from 'styled-components';
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
    border: 1px solid ${props => { //테두리
        if (props.isGold) return '#FFE264';
        if (props.isSilver) return '#C2C8CC';
        if (props.isBronze) return '#EBB257';
        return 'no';
    }};
    @media (max-width: 330px) {
        width: 300px;
    }
    @media (max-width: 310px) {
        width: 270px;
    }
    @media (max-width: 280px) {
        width: 240px;
    }
    @media (max-width: 241px) {
        width: 220px;
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

`
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
`

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
`

const Address = styled.span`
    font-size: 14px;
    @media (max-width: 330px) {
        font-size: 12px;
    }
    @media (max-width: 280px) {
        width: 8px;
    }
`
const Point = styled.span`
    font-size: 20px;
    font-weight: bold;
    @media (max-width: 330px) {
        font-size: 16px;
    }
    @media (max-width: 280px) {
        width: 14px;
    }
    
`

const Text = styled.div`
    text-align: center;
    font-size: 16px;
    margin-top: 70px;
    font-weight: 500;
    line-height: 30px;
`

const BoxText = styled.div`
    text-align: center;
    font-size: 10px;
    margin-top: 20px;
    font-weight: 400;
    border: 0.5px solid #FFF;
    border-radius: 8px;
    padding: 10px 0;
    width: 315px;
    @media (max-width: 330px) {
        width: 300px;
    }
    @media (max-width: 310px) {
        width: 270px;
    }
    @media (max-width: 280px) {
        width: 240px;
        font-size: 8px;
    }
    @media (max-width: 241px) {
        width: 220px;
        font-size: 8px;
    }
`

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
`
    // 'https://api.dev.bummysuri.com/ranking/top10' `${API}/ranking/top10`
const Ranking = () => {
    const [top10Rankings, setTop10Rankings] = useState([]);

  useEffect(() => {
    const accessToken = sessionStorage.getItem("bummySuri");

    // 탑10 api
    axios.get(`${API}/ranking/top10`, {
      headers: {
        Authorization: `bearer ${accessToken}`,
      },
    })
    .then(response => {
      setTop10Rankings(response.data);
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
        <div style={{backgroundColor:"#1D1D1D"}}>
        <Background>
            <MainLogo>Ranking</MainLogo>
            <SideBar><SideBarContents/></SideBar>
            <div>
            {top10Rankings.map((ranking, index) => (
                <RankingBox
                    key={index}
                    isGold={index === 0}
                    isSilver={index === 1}
                    isBronze={index === 2}
                >
                {index === 0 && <RankImage src={`${process.env.PUBLIC_URL}/assets/Ranking/gold.png`} alt="1등"/>}
                {index === 1 && <RankImage src={`${process.env.PUBLIC_URL}/assets/Ranking/silver.png`} alt="2등" />}
                {index === 2 && <RankImage src={`${process.env.PUBLIC_URL}/assets/Ranking/bronze.png`} alt="3등" />}
                {(index !== 0 && index !== 1 && index !== 2) && <Num>{index + 1}</Num>}
                    <NFTImage src="" alt="NFT 이미지"/>
                    <div>
                        <Address>{formatUserCardAddress(ranking.userCardAddress)}</Address><br />
                        <Point>{ranking.totalPoint}P</Point>
                    </div>
                </RankingBox>
            ))}
            </div>
            <Text>
                포인트를 가장 많이 모은 10명에게 <br/>
                경품을 드립니다!
            </Text>
            <BoxText>※ 동점이더라도 먼저 포인트를 획득한 유저가 더 높은 순위에 기록됩니다!</BoxText>
            <MyRankingText style={{textAlign:"left !important"}}>나의 랭킹</MyRankingText>
            <MyRanking/>
            
            

        </Background>
        </div>
        );
}

export default Ranking;
