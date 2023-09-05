import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';


import SideBar from "../../components/SideBar/SideBar";
import SideBarContents from "../../components/SideBar/SideBarContents";

import Betbummy from "../../assets/Bet/betBummy.png";
import Betsuri from "../../assets/Bet/betSuri.png";

import axios from "axios";

import { API } from '../../config';

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
  font-family: "Pretendard_Regular";
`;

const TitleContent = styled.div`
    display: flex;
    align-items: center;
    margin-top: 42px;
`

const Image = styled.img`
    width: 25vw;
`

const Title = styled.div`
    font-size: 25px;
    font-family: "Pretendard_bold";
    font-weight: bold;
    @media(max-width: 300px){
        font-size: 18px;
    }
`;


const MainText = styled.div`
    text-align: center;
    font-size: 16px;
    line-height: 26px; /* 162.5% */
    margin-top: 40px;
    @media(max-width: 300px){
        font-size: 13px;
    }
`

const Klipbtn = styled.button`
  width: 334px;
  height: 50px;
  background-color: #7000FF;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 56px;
  margin-bottom: 29px;
  color: #FFFFFF;

  @media (max-width: 350px) {
    width: 230px;
  }

  @media (max-width: 235px) {
    padding-left: 30px;
    padding-right: 30px;
    width: 100%;
    font-size: 13px;
  }

`;

const Btn = styled.button`
  width: 334px;
  height: 50px;
  background-color: #7000FF;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 183px;
  margin-bottom: 29px;
  color: #FFFFFF;

  @media (max-width: 350px) {
    width: 230px;
  }

  @media (max-width: 235px) {
    padding-left: 30px;
    padding-right: 30px;
    width: 100%;
    font-size: 13px;
  }

`;


const FinishTitle = styled.div`
    margin-top: 209px;
    font-size: 25px;
    text-align: center;
    font-family: "Pretendard_bold";
    font-weight: bold;
    @media(max-width: 300px){
        font-size: 18px;
    }
`;

const FinishMainText = styled.div`
    margin-top: 33px;
    font-size: 16px;
    line-height: 26px; /* 162.5% */
    margin-top: 40px;
    @media(max-width: 300px){
        font-size: 13px;
    }
`


const BetIntro = () => {
    useEffect(() => {
        axios.get(`${API}/users`, {
          headers:{
            Authorization: `bearer ${sessionStorage.getItem("accessToken")}`
            }
          })
            .then(response => {
                const userData = response.data;
                console.log(userData);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const currentDate = new Date();
    const cutoffDate = new Date("2023-09-08T10:00:00");
    // const cutoffDate = new Date("2023-09-05T23:40:50"); test
    const [redirectToBet, setRedirectToBet] = useState(false);

    const handleBetButtonClick = () => {
        async function checkSelected() {
            try { // 만약 참여 이력 있으면 나의 예측 페이지로
                const response = await axios.get(`${API}/betting/baseball`, {
                    headers: { Authorization: `bearer ${sessionStorage.getItem("accessToken")}` }
                });
                const userData = response.data;
                if (userData.selected === true) {
                    navigate('/bet/my-prediction');
                }
            } catch (error) { // 참여 이력 없지만 참여 가능 시간 지난 경우 bet/intro로 (종료 문구 뜸), 시간 내인 경우 베팅 페이지로
                //console.log(error);
                const time = new Date();
                if (time >= cutoffDate) {
                    setRedirectToBet(true);
                }
                else{
                    navigate('/bet');
                }
            }
        }
        checkSelected();
    }

    const navigate = useNavigate();

    const endDate = new Date("2023-09-09T20:00:00"); // 경기 종료 시점
    // const endDate = new Date("2023-09-05T23:41:30"); test

    // 종료 문구 뜬 경우의 페이지에서 나의 예측으로 가는 버튼 클릭
    const goToMyPrediction = () => {


        async function checkSelected() {
            try { // 참여 이력 있으면 나의 예측 페이지로
                const response = await axios.get(`${API}/betting/baseball`, {
                    headers: { Authorization: `bearer ${sessionStorage.getItem("accessToken")}` }
                });
                const userData = response.data;
                if (userData.selected === true) {
                    if(currentDate >= endDate)
                    {
                        
                        navigate('/bet/result', { state: { permitted : true } });
                    }
                    else{
                        navigate('/bet/my-prediction');
                    }
                }
            } catch (error) { // 없으면 not found 페이지로
                navigate('/bet/notfound');
            }
        }
        checkSelected();
    }


    
    useEffect(() => {
        if(redirectToBet)
        {
            navigate('/bet/intro');
        }
    },[redirectToBet]);


    return (
        <div style={{ backgroundColor: "#1D1D1D" }}>
            <Background>
                {(currentDate < cutoffDate) ? (
                    <>
                        <MainLogo>정기전 경기 예측</MainLogo>
                        <SideBar><SideBarContents /></SideBar>
                        <TitleContent>
                            <Image src={Betsuri} />
                            <Title>경기 예측이란?</Title>
                            <Image src={Betbummy} style={{ transform: "scaleX(-1)" }} />
                        </TitleContent>
                        <MainText>
                            버미와 수리를 가지고 있는 <br />
                            연세대 학생, 고려대 학생이라면 누구나<br />
                            경기 예측 이벤트에 참여할 수 있어요!<br /><br />

                            어떤 학교가 이길지,<br />
                            몇 점 차이일지,<br />
                            몇 포인트를 배팅할지 선택해봐요!<br /><br />

                            예측에 성공하면 <br />
                            배팅한 포인트의 ✨3배✨를 얻을 수 있습니다.<br />
                        </MainText>
                        <Klipbtn onClick={handleBetButtonClick}>경기 예측하기</Klipbtn>
                    </>
                ) : (
                    <>
                        <MainLogo>정기전 경기 예측</MainLogo>
                        <SideBar><SideBarContents /></SideBar>
                        <FinishTitle>경기 예측 이벤트가 <br />종료되었습니다.</FinishTitle>
                        <FinishMainText>
                            나의 예측은 성공할 것인가 ˚✧₊( ˘ω˘ )⁎⁺˳✧༚
                        </FinishMainText>
                        <Btn onClick={goToMyPrediction}>{(currentDate >= endDate) ? "베팅 결과 보러가기": "나의 예측 보러가기"}</Btn></>
                )}
            </Background>
        </div>
    )
}

export default BetIntro;











    // 테스트 
    // const gameTypes = ["baseball", "basketball", "hockey", "rugby", "soccer"];

    // useEffect(() => {
    //     async function fetchGameInfo() {
    //         for (let i = 0; i < 5; i++) {
    //             try {
    //                 await axios({
    //                     url: `${API}/game/${gameTypes[i]}`,
    //                     method: 'put',
    //                     data: {
    //                         playing: "경기 종료",
    //                         KoreaScore: 10,
    //                         YonseiScore: 11
    //                     },
    //                     headers: {
    //                         Authorization: `bearer ${sessionStorage.getItem("accessToken")}`
    //                     },
    //                 })
    //             } catch (error) {
    //                 console.error(error);
    //             }
    //         }
    //     }
    //     fetchGameInfo();
    // }, []);
    //