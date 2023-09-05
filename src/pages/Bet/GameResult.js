import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


import SideBar from "../../components/SideBar/SideBar";
import SideBarContents from "../../components/SideBar/SideBarContents";

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

const Title = styled.div`
    font-size: 25px;
    font-family: "Pretendard_bold";
    font-weight: 800;
    margin-top: 50px;
    margin-bottom: 25px;
    @media(max-width: 300px){
        font-size: 18px;
    }
`;

const Container = styled.div`
    width: 358px;
    height: 620px;
    border-radius: 14px;
    background-color: white;
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    @media(max-width: 365px){
        width: 260px;
        height: 465px;
    }
`;

const Column = styled.div`
    display: flex;
    width: 320px;
    height: 15px;
    justify-content: space-between;
    color: black;
    font-size: 16px;
    font-weight: 500;
    padding: 30px 0px 20px 0px;
    border-bottom: 1px solid rgba(217, 217, 217, 1);
    @media(max-width: 365px){
        width: 250px;
        font-size: 13px;
        padding: 20px 0px 10px 0px;
    }
`;

const Result = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Row = styled.div`
    margin: 20px 0px 10px 0px;
    display: flex;
    width: 290px;
    height: 50px;
    
    justify-content: space-between;
    color: black;
    @media(max-width: 365px){
        width: 230px;
        height: 34px;
    }
`;

const Type = styled.div`
    font-size: 22px;
    font-weight: 800;
    width: 30%;
    @media(max-width: 365px){
        font-size: 17px;
        margin-left: 5px;
    }
`;

const Predict = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    @media(max-width: 365px){
        margin-left: 5px;
    }
`;

const School = styled.div`
    font-size: 22px;
    font-weight: 700;
    @media(max-width: 365px){
        font-size: 17px;
    }
`;


const Score = styled.div`
    font-size: 14px;
    font-weight: 400;
    @media(max-width: 365px){
        font-size: 10px;
    }
`;

const PointAmount = styled.div`
    font-size: 18px;
    font-weight: 800;
    margin-top: 5px;
    width: 30%;
    text-align: right;
    @media(max-width: 365px){
        font-size: 13px;
        margin-right: 10px;
    }
`;

const TotalP = styled.div`
    margin-top: 20px;
    font-size: 16px;
    font-weight: 800;
    color:black;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    @media(max-width: 365px){
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

const GetPointBTN = styled.button`
    background-color: rgba(112, 0, 255, 1);
    border: none;
    border-radius: 10px;
    width: 300px;
    height: 45px;
    color: white;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 800;
    @media (max-width: 360px)
    {
        width: 220px;
        height: 30px;
        font-size: 12px;
        margin-top: 13px;
        border-radius: 7px;
    }
`;




const GameResult = () => {
    {/* 
    
        1. 백에서 경기 결과 값 가져오기 -> 화면에 표시 (경기결과조회)
        2. 연대 / 고대에 따라 폰트 색상 변경 
        3. 총 획득 포인트 계산하여 표시

        베팅조회 -> 베팅결과확인 -> 베팅결과얻은포인트반영하기

    */}
    const gameTypes = ["baseball", "basketball", "hockey", "rugby", "soccer"];


    const [total, setTotal] = useState(0);
    const [earnedPoint, setEarnedPoint] = useState([0, 0, 0, 0, 0]);
    const [winner, setWinner] = useState([]);
    const [score, setScore] = useState([]);
    const school = [];
    const point = [];
    const scoredifference = [];
    const [loading, setLoading] = useState(true);
    const [getP, setgetP] = useState(false);

    const [popupOpen, setPopupOpen] = useState(false);
    const [popupOpen2, setPopupOpen2] = useState(false);

    const location = useLocation();
    const permitted = location.state?.permitted || false;

    useEffect(() => {
        async function getBetting() {
            school.length = 0;
            scoredifference.length = 0;
            point.length = 0;
            let sum = 0;
            for (let i = 0; i < 5; i++) {
                try {
                    const response = await axios.get(`${API}/bettingResult/${gameTypes[i]}`, {
                        headers: { Authorization: `bearer ${sessionStorage.getItem("bummySuri")}` }
                    });
                    const userData = response.data; // 사용자 베팅 내용 가져오기
                    console.log(userData, gameTypes[i]);

                    scoredifference[i] = userData.difference;
                    point[i] = userData.earnedPoint;
                    sum += point[i];
                    if (userData.winner === "KOREA") {
                        school[i] = "고대 승";
                        console.log("korea", gameTypes[i]);
                    }
                    else if (userData.winner === "YONSEI") {
                        school[i] = "연대 승";
                        console.log("yonsei", gameTypes[i]);
                    }
                    else {
                        school[i] = "무승부";
                        scoredifference[i] = 0;
                        console.log("draw", gameTypes[i]);
                    }


                } catch (error) {
                    console.error(error);
                }
            }
            setWinner(school);
            setScore(scoredifference);
            setEarnedPoint(point);
            setTotal(sum);
            setLoading(false);
        }
        if(!permitted){
            navigate('/bet/notfound', { state: { fromGameResultPage : true} }); //이상한 경로로 들어옴
        }
        else{
            getBetting();
        }

    }, []);



    const navigate = useNavigate();



    const getSchoolColor = (schoolText) => {
        if (schoolText === "연대 승") {
            return "rgba(22, 87, 255, 1)";
        }
        else if (schoolText === "고대 승") {

            return "rgba(253, 38, 38, 1)";
        }
        else {
            return "rgba(112, 0, 255, 1)";
        }
    }

    const getPoint = () => {

        axios({
            url: `${API}/bettingResult`,
            method: "put",
            data: {
                totalEarnedPoint: total,
            },
            headers: {
                Authorization: `bearer ${sessionStorage.getItem("bummySuri")}`
            },
        })
            .then(response => {
                console.log("응답 데이터:", response.data);
                navigate('/bet/done', { state: { pointreceived: true , pamount:total} });
            })
            .catch(error => {
                setPopupOpen(true);
                setgetP(true);
                console.error("오류 발생:", error);
            })

    }


    const deleteme = () => {
        axios.delete(`${API}/users`, {
            headers: {
                Authorization: `bearer ${sessionStorage.getItem("bummySuri")}`,
            },
        })
            .then(response => {
                console.log('DELETE 요청이 성공했습니다.');
                // 서버로부터 성공 응답을 처리할 코드를 여기에 추가
                navigate('/');
            })
            .catch(error => {
                console.error('DELETE 요청이 실패했습니다.');
                // 요청 실패 시 에러를 처리할 코드를 여기에 추가
            });
    }



    return (
        <div style={{ backgroundColor: "#1D1D1D" }}>
            {loading ?
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
                    <Title>경기 결과</Title>

                    <Container>
                        <Column>
                            <span style={{ marginLeft: "20px" }}>종목</span>
                            <span style={{ marginLeft: "30px" }}>결과</span>
                            <span style={{ marginRight: "15px" }}>획득 포인트</span>
                        </Column>
                        <Result>
                            <Row>
                                <Type>야구 ⚾️</Type>
                                <Predict>
                                    <School style={{ color: getSchoolColor(winner[0]) }}>{winner[0]}</School>
                                    <Score>{score[0] === 0 ? "" : `${score[0]} 점차`}</Score>
                                </Predict>
                                <PointAmount>+{earnedPoint[0]}p</PointAmount>
                            </Row>
                            <Row>
                                <Type>농구 🏀</Type>
                                <Predict>
                                    <School style={{ color: getSchoolColor(winner[1]) }}>{winner[1]}</School>
                                    <Score>{score[1] === 0 ? "" : `${score[1]} 점차`}</Score>
                                </Predict>
                                <PointAmount>+{earnedPoint[1]}p</PointAmount>
                            </Row>
                            <Row>
                                <Type>빙구 🏒</Type>
                                <Predict>
                                    <School style={{ color: getSchoolColor(winner[2]) }}>{winner[2]}</School>
                                    <Score>{score[2] === 0 ? "" : `${score[2]} 점차`}</Score>
                                </Predict>
                                <PointAmount>+{earnedPoint[2]}p</PointAmount>
                            </Row>
                            <Row>
                                <Type>럭비 🏉</Type>
                                <Predict>
                                    <School style={{ color: getSchoolColor(winner[3]) }}>{winner[3]}</School>
                                    <Score>{score[3] === 0 ? "" : `${score[3]} 점차`}</Score>
                                </Predict>
                                <PointAmount>+{earnedPoint[3]}p</PointAmount>
                            </Row>
                            <Row>
                                <Type>축구 ⚽</Type>
                                <Predict>
                                    <School style={{ color: getSchoolColor(winner[4]) }}>{winner[4]}</School>
                                    <Score>{score[4] === 0 ? "" : `${score[4]}점차`}</Score>
                                </Predict>
                                <PointAmount>+{earnedPoint[4]}p</PointAmount>
                            </Row>
                        </Result>
                        <TotalP>총 획득 포인트 : {total}p</TotalP>
                        {getP ? <Link to='/'><GetPointBTN>메인 페이지로 돌아가기</GetPointBTN></Link> : <GetPointBTN onClick={getPoint}>포인트 얻기!</GetPointBTN>}
                        {popupOpen && (
                            <Popup>
                                <PopupContainer>
                                    이미 포인트를 받았습니다.
                                    <button
                                        onClick={() => setPopupOpen(false)}
                                        style={{ backgroundColor: "#7000FF", color: "white", width: "65px", height: "23px", border: "none", borderRadius: "4px", marginTop: "10px" }}>
                                        닫기</button>
                                </PopupContainer>
                            </Popup>
                        )}
                    </Container>
                    <button onClick={deleteme}>나 지우기</button>
                </Background>
            }
        </div>
    );
}

export default GameResult;
