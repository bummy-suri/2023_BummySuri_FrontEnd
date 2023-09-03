import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';

import SideBar from "../../components/SideBar/SideBar";
import SideBarContents from "../../components/SideBar/SideBarContents";
import gold from "../../assets/Ranking/gold.png";
import silver from "../../assets/Ranking/silver.png";
import bronze from "../../assets/Ranking/bronze.png";

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
    //`${API}/ranking/top10`
const Ranking = () => {
    const [top10Rankings, setTop10Rankings] = useState([]);

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");

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
                {index === 0 && <RankImage src={gold} alt="1등"/>}
                {index === 1 && <RankImage src={silver} alt="2등" />}
                {index === 2 && <RankImage src={bronze} alt="3등" />}
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
            <MyRankingText style={{textAlign:"left !important"}}>나의 랭킹</MyRankingText>
            <MyRanking/>
            
            

        </Background>
        </div>
        );
}

export default Ranking;
