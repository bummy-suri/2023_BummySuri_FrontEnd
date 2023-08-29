import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 


import SideBar from "../../components/SideBar/SideBar";
import SideBarContents from "../../components/SideBar/SideBarContents";
import Sports from "./Sports";


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



const Bet = () => {

    const [day, setDay] = useState("9월 8일");

    const [point, setPoint] = useState(500);
    
    const [sportuniv1, setsportuniv1] = useState('고대');
    const [sportopt1, setsportopt1] = useState(0);
    const [sportpoint1, setsportpoint1] = useState(100);
    const [sportuniv2, setsportuniv2] = useState('고대');
    const [sportopt2, setsportopt2] = useState(0);
    const [sportpoint2, setsportpoint2] = useState(100);
    const [sportuniv3, setsportuniv3] = useState("고대");
    const [sportopt3, setsportopt3] = useState(0);
    const [sportpoint3, setsportpoint3] = useState(100);
    const [sportuniv4, setsportuniv4] = useState("고대");
    const [sportopt4, setsportopt4] = useState(0);
    const [sportpoint4, setsportpoint4] = useState(100);
    const [sportuniv5, setsportuniv5] = useState("고대");
    const [sportopt5, setsportopt5] = useState(0);
    const [sportpoint5, setsportpoint5] = useState(100);


    const DayChange = (event) => {
        if(event.target.innerHTML === day)
        {
            return;
        }
        setDay(event.target.innerHTML);
    };


    const handleData = (data) => {   //handleData([gameType, school, score, betPoint]);
        if(data[0] === "baseball"){
            if(sportuniv1 !== data[1])
            {
                setsportuniv1(data[1]);
            }
            if(sportopt1 !== data[2])
            {
                setsportopt1(data[2]);
            }
            if(sportpoint1 !== data[3])
            {
                setsportpoint1(data[3]);
            }
        }
        else if(data[0] === "basketball"){
            if(sportuniv2 !== data[1])
            {
                setsportuniv2(data[1]);
            }
            if(sportopt2 !== data[2])
            {
                setsportopt2(data[2]);
            }
            if(sportpoint2 !== data[3])
            {
                setsportpoint2(data[3]);
            }
        }
        else if(data[0] === "hocky"){
            if(sportuniv3 !== data[1])
            {
                setsportuniv3(data[1]);
            }
            if(sportopt3 !== data[2])
            {
                setsportopt3(data[2]);
            }
            if(sportpoint3 !== data[3])
            {
                setsportpoint3(data[3]);
            }
        }
        else if(data[0] === "rugby"){
            if(sportuniv4 !== data[1])
            {
                setsportuniv4(data[1]);
            }
            if(sportopt4 !== data[2])
            {
                setsportopt4(data[2]);
            }
            if(sportpoint4 !== data[3])
            {
                setsportpoint4(data[3]);
            }
        }
        else if(data[0] === "soccer"){
            if(sportuniv5 !== data[1])
            {
                setsportuniv5(data[1]);
            }
            if(sportopt5 !== data[2])
            {
                setsportopt5(data[2]);
            }
            if(sportpoint5 !== data[3])
            {
                setsportpoint5(data[3]);
            }
        }
    };


    useEffect(() => {
        setPoint(sportpoint1 + sportpoint2 + sportpoint3 +sportpoint4 + sportpoint5);
    }, [sportpoint1, sportpoint2, sportpoint3, sportpoint4, sportpoint5])




    return (
        <div style={{backgroundColor:"#1D1D1D"}}>
        <Background>
            <MainLogo>정기전 경기 예측</MainLogo>
            <SideBar><SideBarContents/></SideBar>

            <DaySelectDiv>
                <p>날짜를 선택해주세요.</p>
                <DaySelect>
                    <DayBTN isActive={day === '9월 8일'} onClick={DayChange}>9월 8일</DayBTN>
                    <DayBTN isActive={day === '9월 9일'} onClick={DayChange}>9월 9일</DayBTN>
                </DaySelect>
            </DaySelectDiv>

            {day === "9월 8일" ? 
                (<div>
                    <Sports gameType="baseball" handleData={handleData} currentschool={sportuniv1} currentscore={sportopt1} currentbetpoint={sportpoint1}/>
                    <Sports gameType="basketball" handleData={handleData} currentschool={sportuniv2} currentscore={sportopt2} currentbetpoint={sportpoint2}/>
                    <Sports gameType="hocky" handleData={handleData} currentschool={sportuniv3} currentscore={sportopt3} currentbetpoint={sportpoint3}/>
                </div>
                ) : null}
            {day === "9월 9일" ? 
                (<div>
                    <Sports gameType="rugby" handleData={handleData} currentschool={sportuniv4} currentscore={sportopt4} currentbetpoint={sportpoint4}/>
                    <Sports gameType="soccer" handleData={handleData} currentschool={sportuniv5} currentscore={sportopt5} currentbetpoint={sportpoint5}/>
                </div>
                ) : null}

            <div style={{fontSize:"22px", fontWeight:"500", margin:"50px 0px 30px 0px",}}>총 지불 포인트 : {point}p</div>
            <SubmitBTN>제출하기</SubmitBTN>
            <div style={{fontSize:"12px", fontWeight:"500px", marginBottom:"70px", width:"80%", textAlign:"center"}}>제출 후에도 경기 시작 1시간 전까지 예측을 변경할 수 있어요.</div>


            
        </Background>

        </div>
    );

}

export default Bet;