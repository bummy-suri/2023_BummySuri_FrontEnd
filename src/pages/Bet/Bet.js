import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import { useLocation } from 'react-router-dom';


import SideBar from "../../components/SideBar/SideBar";
import SideBarContents from "../../components/SideBar/SideBarContents";
import Sports from "./Sports";

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


const DaySelectDiv = styled.div`
    margin-top: 35px;
    p{
        font-size: 14px;
        font-weight: 500;
    }
    @media (max-width: 300px)
    {
        p{
            font-size: 11px;
        }
    }
`;

const DaySelect = styled.div`
    width: 332px;
    height: 62px;
    background: 
        linear-gradient(97.14deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.15) 100%),
        #1D1D1D;

    border: 0.5px solid white;
    border-radius: 9px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 300px)
    {
        width: 240px;
        height: 50px;
    }
`;

const DayBTN = styled.button`
    border: none;
    width: 148px;
    height: 42px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    background-color: ${(props) => (props.isActive ? 'white' : 'rgba(255, 255, 255, 0.4)')};
    

    @media (max-width: 300px)
    {
        width: 100px;
        height: 35px;
        font-size: 12px;
    }
`;

const SubmitBTN = styled.button`
    background-color: rgba(112, 0, 255, 1);
    border: none;
    border-radius: 10px;
    width: 334px;
    height: 50px;
    color: white;
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: 800;
    @media (max-width: 300px)
    {
        width: 250px;
        height: 30px;
        font-size: 12px;
    }
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1D1D1D;
  border-radius: 8px;
  width:260px;
  height: 90px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  @media (min-width: 350px) {
    width:332px;
    height: 103px;
  }
`;

const PopupContainer = styled.div`
  width:260px;
  height: 90px;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.15) 100%);
  border: 1px solid white;
  @media (min-width: 350px) {
    width:332px;
    height: 103px;
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



const Bet = () => {
    const location = useLocation();
    const isEdit = location.state?.isEdit || false;

    const [day, setDay] = useState("9월 8일");

    const [point, setPoint] = useState(500);

    const [sportunivs, setsportunivs] = useState(['KOREA', 'KOREA', 'KOREA', 'KOREA', 'KOREA']);
    const [sportpoints, setsportpoints] = useState([100, 100, 100, 100, 100]);
    const [sportopts, setsportopts] = useState([0, 0, 0, 0, 0]);

    const [budget, setBudget] = useState(0);
    const [beforepoint, setBeforePoint] = useState(0);

    const gameTypes = ["baseball", "basketball", "hockey", "rugby", "soccer"];

    const [method, setMethod] = useState("post");


    const sportopt = [];
    const sportpoint = [];
    const sportuniv = [];

    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(false);




    useEffect(() => {
        async function getInfo() {
            await axios.get(`${API}/users`, {
                headers: {
                    Authorization: `bearer ${localStorage.getItem("bummySuri")}`
                }
            })
                .then(response => {
                    const userData = response.data;
                    setBudget(userData.totalPoint);
                })
                .catch(error => {
                    console.error(error);
                })


            async function fetchGameInfo() {
                sportopt.length = 0;
                sportpoint.length = 0;
                sportuniv.length = 0;
                let sumpoint = 0;

                for (let i = 0; i < 5; i++) {
                    try {
                        const response = await axios.get(`${API}/betting/${gameTypes[i]}`, {
                            headers: { Authorization: `bearer ${localStorage.getItem("bummySuri")}` }
                        });
                        const userData = response.data;
                        sportopt[i] = parseInt(userData.predictedScore);
                        sportpoint[i] = parseInt(userData.bettingPoint);
                        sportuniv[i] = userData.predictedWinner;
                        if (userData.predictedWinner === "DRAW") {
                            sportopt[i] = -2;
                        }
                        sumpoint += sportpoint[i];
                    } catch (error) {

                        console.error(error);
                    }
                }

                // 모든 게임 정보를 가져온 후에 budget 계산

                setPoint(sumpoint);
                setBeforePoint(sumpoint);

                // 상태 업데이트
                setMethod("put");
                setsportopts(sportopt);
                setsportpoints(sportpoint);
                setsportunivs(sportuniv);
                setLoading(false);

            }

            // 수정하기로 들어온 경우 (포인트 지불 고려해야) else 참여여부 check
            if (isEdit) {
                fetchGameInfo();
            }
            else {
                async function checkSelected() {
                    try {
                        const response = await axios.get(`${API}/betting/baseball`, {
                            headers: { Authorization: `bearer ${localStorage.getItem("bummySuri")}` }
                        });
                        const userData = response.data;
                        if (userData.selected === true) {
                            window.location.href = '/bet/my-prediction';
                        }
                    } catch (error) {
                        //console.log(error); (Betting data not found)
                    }
                }
                checkSelected();
            }

        }
        getInfo();
    }, []);


    // 9/9 , 9/8 날짜 변경
    const DayChange = (event) => {
        if (event.target.innerHTML === day) {
            return;
        }
        setDay(event.target.innerHTML);
    };



    // 선택 값이 변경되었을 때 handle
    const handleData = (data) => {
        for (let i = 0; i < 5; i++) {
            if (data[0] === gameTypes[i]) {
                if (sportunivs[i] !== data[1]) {
                    setsportunivs((prev) => {
                        prev[i] = data[1];
                        return prev;
                    });
                }
                if (sportopts[i] !== data[2]) {
                    setsportopts((prev) => {
                        prev[i] = data[2];
                        return prev;
                    });
                }
                if (sportpoints[i] !== data[3]) {
                    setsportpoints((prev) => {
                        prev[i] = data[3];
                        setPoint(sportpoints[0] + sportpoints[1] + sportpoints[2] + sportpoints[3] + sportpoints[4]);

                        return prev;
                    });
                }
            }
        }
    }





    const [popupOpen, setPopupOpen] = useState(false); // 소지 포인트 부족 팝업
    const [popupOpen2, setPopupOpen2] = useState(false);

    // 제출하기
    const Submit = () => {
        if ((budget + beforepoint) >= point) {

            async function submitBetting() {
                setLoading2(true);
                for (let i = 0; i < 5; i++) {
                    try {
                        const value = {
                            selected: true,
                            playing: "경기 전",
                            predictedWinner: sportunivs[i],
                            predictedScore: sportopts[i] !== -2 ? sportopts[i].toString() : "3",
                            bettingPoint: sportpoints[i].toString(),
                        };
                        await axios({
                            url: `${API}/betting/${gameTypes[i]}`,
                            method: `${method}`,
                            data: value,
                            headers: {
                                Authorization: `bearer ${localStorage.getItem("bummySuri")}`

                            },
                        })

                    } catch (error) {
                        console.log(error, gameTypes[i]);
                        setLoading2(false);
                        setPopupOpen2(true);
                        return;

                    }
                }
                window.location.href = '/bet/done'
            }
            submitBetting();
        }
        else {
            //소지 포인트가 부족
            setPopupOpen(true);
        }
    }




    return (
        <div style={{ backgroundColor: "#1D1D1D" }}>
            {(loading && isEdit) || (loading2) ?
                <Background>
                    <Popup>
                        <PopupContainer>
                            <Circle><div></div></Circle>
                            로딩 중입니다!
                        </PopupContainer>
                    </Popup>
                </Background> :
                <Background>
                    <MainLogo>정기전 경기 예측</MainLogo>
                    <SideBar><SideBarContents /></SideBar>


                    <DaySelectDiv>
                        <p>날짜를 선택해주세요.</p>
                        <DaySelect>
                            <DayBTN isActive={day === '9월 8일'} onClick={DayChange}>9월 8일</DayBTN>
                            <DayBTN isActive={day === '9월 9일'} onClick={DayChange}>9월 9일</DayBTN>
                        </DaySelect>
                    </DaySelectDiv>

                    {day === "9월 8일" ?
                        (<div>
                            <Sports gameType="baseball" handleData={handleData} currentschool={sportunivs[0]} currentscore={sportopts[0]} currentbetpoint={sportpoints[0]} />
                            <Sports gameType="basketball" handleData={handleData} currentschool={sportunivs[1]} currentscore={sportopts[1]} currentbetpoint={sportpoints[1]} />
                            <Sports gameType="hockey" handleData={handleData} currentschool={sportunivs[2]} currentscore={sportopts[2]} currentbetpoint={sportpoints[2]} />
                        </div>
                        ) : null}
                    {day === "9월 9일" ?
                        (<div>
                            <Sports gameType="rugby" handleData={handleData} currentschool={sportunivs[3]} currentscore={sportopts[3]} currentbetpoint={sportpoints[3]} />
                            <Sports gameType="soccer" handleData={handleData} currentschool={sportunivs[4]} currentscore={sportopts[4]} currentbetpoint={sportpoints[4]} />
                        </div>
                        ) : null}

                    <div style={{ fontSize: "22px", fontWeight: "500", margin: "50px 0px 30px 0px", }}>총 지불 포인트 : {point}p</div>
                    <SubmitBTN onClick={Submit}>제출하기</SubmitBTN>
                    <div style={{ fontSize: "12px", fontWeight: "500px", marginBottom: "70px", width: "80%", textAlign: "center" }}>제출 후에도 경기 시작 1시간 전까지 예측을 변경할 수 있어요.</div>


                    {popupOpen && (
                        <Popup>
                            <PopupContainer>
                                보유 포인트가 부족합니다!
                                <button
                                    onClick={() => setPopupOpen(false)}
                                    style={{ backgroundColor: "#7000FF", color: "white", width: "65px", height: "23px", border: "none", borderRadius: "4px", marginTop: "10px" }}>
                                    닫기</button>
                            </PopupContainer>
                        </Popup>
                    )}

                    {popupOpen2 && (
                        <Popup>
                            <PopupContainer>
                                다시 시도해 주세요
                                <button
                                    onClick={() => setPopupOpen2(false)}
                                    style={{ backgroundColor: "#7000FF", color: "white", width: "65px", height: "23px", border: "none", borderRadius: "4px", marginTop: "10px" }}>
                                    닫기</button>
                            </PopupContainer>
                        </Popup>
                    )}


                </Background>}

        </div>
    );

}

export default Bet;