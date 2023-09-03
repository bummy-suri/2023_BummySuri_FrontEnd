import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';


import SideBar from "../../components/SideBar/SideBar";
import SideBarContents from "../../components/SideBar/SideBarContents";

import gold from "../../assets/Ranking/gold.png";
import silver from "../../assets/Ranking/silver.png";
import bronze from "../../assets/Ranking/bronze.png";

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
    @media (max-width: 330px) {
        width: 270px;
    }
    @media (max-width: 280px) {
        width: 240px;
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
    font-size: 14px;
    margin-top: 70px;
    font-weight: 500;
    line-height: 30px;
`




const Ranking = () => {
    const [top10Rankings, setTop10Rankings] = useState([]);

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");

    // 탑10 api
    axios.get('https://api.dev.bummysuri.com/ranking/top10', {
      headers: {
        Authorization: `bearer ${accessToken}`,
      },
    })
    .then(response => {
      setTop10Rankings(response.data);
    })
    .catch(error => {
      console.error('API 호출 오류', error);
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
                <RankingBox key={index}>
                {index === 0 && <RankImage src={gold} alt="Gold Rank"/>}
                {index === 1 && <RankImage src={silver} alt="Silver Rank" />}
                {index === 2 && <RankImage src={bronze} alt="Bronze Rank" />}
                {(index !== 0 && index !== 1 && index !== 2) && <Num>{index + 1}</Num>}
                    <NFTImage src=""/>
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
            

        </Background>
        </div>
        );
}

export default Ranking;
