import React, { useState, useEffect } from "react";
import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


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
    height: 548px;
    border-radius: 14px;
    background-color: white;
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    @media(max-width: 365px){
        width: 260px;
        height: 440px;
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
    @media(max-width: 365px){
        font-size: 17px;
        margin-left: 5px;
    }
`;

const Predict = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    @media(max-width: 365px){
        margin-right: 13px;
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
    margin-right: 10px;
    margin-top: 5px;
    @media(max-width: 365px){
        font-size: 13px;
        margin-right: 10px;
    }
`;

const BTN = styled.button`
    margin-top: 15px;
    width: 332px;
    height: 50px;
    background-color: rgba(112, 0, 255, 1);
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 10px;
    @media(max-width: 365px){
        width: 230px;
        height: 33px;
        font-size: 11px;
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



const MyPrediction = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const gameTypes = ["baseball", "basketball", "hockey", "rugby", "soccer"];
    const option =
        [['1점차 예상', '2점차 예상', '3점차 예상', '4점차 이상 예상'],
        ['1-5점차 예상', '6-10점차 예상', '11-15점차 예상', '16점차 이상 예상'],
        ['1점차 예상', '2점차 예상', '3점차 예상', '4점차 이상 예상'],
        ['1-5점차 예상', '6-10점차 예상', '11-15점차 예상', '16점차 이상 예상'],
        ['1점차 예상', '2점차 예상', '3점차 예상', '4점차 이상 예상']];
    const point = [];
    const score = [];
    const school = [];

    // const targetDate = new Date("2023-09-05T01:22:00"); //test
    const targetDate = new Date('2023-09-08T10:00:00'); // 수정 버튼을 비활성화할 날짜와 시간 설정
    
    
    const today = new Date();
    



    const navigate = useNavigate();
    const EditBetting = () => {
        const currentDate = new Date(); // 현재 날짜와 시간 가져오기

        // 현재 날짜가 타겟 날짜 이후인지 확인
        if (currentDate >= targetDate) {
            //console.log(targetDate <= currentDate);
            setPopupOpen(true);
        }
        else {
            navigate('/bet', { state: { isEdit: true} });
        }
    }


    const [winner, setWinner] = useState([]);
    const [betPoint, setBetPoint] = useState([]);
    const [scoreOption, setScoreOption] = useState([]);



    useEffect(() => {
        async function getBetting() {

            point.length = 0;
            score.length = 0;
            school.length = 0;
            for (let i = 0; i < 5; i++) {
                try {
                    const response = await axios.get(`${API}/betting/${gameTypes[i]}`, {
                        headers: { Authorization: `bearer ${localStorage.getItem("bummySuri")}` }
                    });
                    const userData = response.data;
                    point[i] = userData.bettingPoint;
                    const predicted = userData.predictedScore;
                    if (predicted === "") {
                        score[i] = "";
                    }
                    else {
                        score[i] = option[i][parseInt(predicted)];
                    }

                    if (userData.predictedWinner === "YONSEI") {
                        school[i] = "연대 승";
                    }
                    else if (userData.predictedWinner === "KOREA") {
                        school[i] = '고대 승';
                    }
                    else {
                        school[i] = '무승부';
                        score[i] = "";
                    }

                } catch (error) {
                    console.error(error);
                    navigate('/bet/notfound');
                    return;
                }
            }
            setBetPoint(point);
            setScoreOption(score);
            setWinner(school);
            setLoading(false);
        }
        getBetting();


    }, []);

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
                    <Title>나의 예측</Title>

                    <Container>
                        <Column>
                            <span style={{ marginLeft: "20px" }}>종목</span>
                            <span style={{ marginLeft: "30px" }}>예측</span>
                            <span style={{ marginRight: "15px" }}>배팅 포인트</span>
                        </Column>
                        <Result>
                            <Row>
                                <Type>야구 ⚾️</Type>
                                <Predict>
                                    <School style={{ color: getSchoolColor(winner[0]) }}>{winner[0]}</School>
                                    <Score>{scoreOption[0]}</Score>
                                </Predict>
                                <PointAmount>{betPoint[0]}p</PointAmount>
                            </Row>
                            <Row>
                                <Type>농구 🏀</Type>
                                <Predict>
                                    <School style={{ color: getSchoolColor(winner[1]) }}>{winner[1]}</School>
                                    <Score>{scoreOption[1]}</Score>
                                </Predict>
                                <PointAmount>{betPoint[1]}p</PointAmount>
                            </Row>
                            <Row>
                                <Type>빙구 🏒</Type>
                                <Predict>
                                    <School style={{ color: getSchoolColor(winner[2]) }}>{winner[2]}</School>
                                    <Score>{scoreOption[2]}</Score>
                                </Predict>
                                <PointAmount>{betPoint[2]}p</PointAmount>
                            </Row>
                            <Row>
                                <Type>럭비 🏉</Type>
                                <Predict>
                                    <School style={{ color: getSchoolColor(winner[3]) }}>{winner[3]}</School>
                                    <Score>{scoreOption[3]}</Score>
                                </Predict>
                                <PointAmount>{betPoint[3]}p</PointAmount>
                            </Row>
                            <Row>
                                <Type>축구 ⚽</Type>
                                <Predict>
                                    <School style={{ color: getSchoolColor(winner[4]) }}>{winner[4]}</School>
                                    <Score>{scoreOption[4]}</Score>
                                </Predict>
                                <PointAmount>{betPoint[4]}p</PointAmount>
                            </Row>
                        </Result>
                        {(today >= targetDate) ? <div style={{fontWeight:"800", fontSize:"16px", color:"black", marginTop:"25px"}}>경기 진행 중...</div> : <BTN onClick={EditBetting}>수정하기</BTN>}
                        {popupOpen && (
                            <Popup>
                                <PopupContainer>
                                    경기가 시작되어 이제 수정이 불가능해요!
                                    <button
                                        onClick={() => setPopupOpen(false)}
                                        style={{ backgroundColor: "#7000FF", color: "white", width: "65px", height: "23px", border: "none", borderRadius: "4px", marginTop: "10px" }}>
                                        닫기</button>
                                </PopupContainer>
                            </Popup>
                        )}
                    </Container>
                </Background>}
        </div>
    );
}

export default MyPrediction;
