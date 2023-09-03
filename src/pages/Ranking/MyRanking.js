import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';

import SideBar from "../../components/SideBar/SideBar";
import SideBarContents from "../../components/SideBar/SideBarContents";
import gold from "../../assets/Ranking/gold.png";
import silver from "../../assets/Ranking/silver.png";
import bronze from "../../assets/Ranking/bronze.png";

import { API } from "../../config";


const RankingBox = styled.div`
    display: flex;
    width: 327px;
    height: 78px;
    align-items: center;
    border-radius: 10px;
    background: white;
    color: black;
    margin-top: 10px;
    margin-bottom: 100px;
    border: none;
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



const MyRanking = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [userPoint, setUserPoint] = useState("");
    const [myRank, setmyRank] = useState("");

    const accessToken = sessionStorage.getItem("accessToken");

  // 나의 정보
  useEffect(() => {
    axios.get('https://api.dev.bummysuri.com/users', {
      headers:{
        Authorization: `bearer ${accessToken}`
        }
      })
        .then(response => {
            const userData = response.data;
            setWalletAddress(userData.cardAddress);
            setUserPoint(userData.totalPoint);
        })
        .catch(error => {
            console.error(error);
        });
}, []); 

    // 나의 순위
    useEffect(() => {
        axios.get(`${API}/ranking/users`, {
          headers:{
            Authorization: `bearer ${accessToken}`
            }
          })
            .then(response => {
                const checkMyRank = response.data;
                setmyRank(checkMyRank.ranking);
            })
            .catch(error => {
                console.error(error);
            });
    }, []); 

    const partOfAddress = walletAddress ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 6)}` : "";

    return (
        <> 
            <div>
                <RankingBox>
                    <Num>{myRank}</Num>
                    <NFTImage src="" alt="NFT 이미지"/>
                    <div>
                        <Address>{partOfAddress}</Address><br />
                        <Point>{userPoint}P</Point>
                    </div>
                </RankingBox>
            </div>
        </>
        );
}

export default MyRanking;
