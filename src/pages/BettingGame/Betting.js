import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router";

import Logo from "../../components/Logo";
import SideBar from "../../components/SideBar/SideBar";
import SideBarContents from "../../components/SideBar/SideBarContents";



const Container = styled.div`
  max-width: 100%;
  background-color: rgba(29, 29, 29, 1);
  color:rgba(255, 255, 255, 1);
  margin: 0px;
  padding: 20px; //간격조정
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
`;

const SubTitle = styled.div`
  font-family: NanumSquare;
  font-size: 25px;
  font-weight: 800;
  line-height: 40px;
  text-align: center;
  margin: 60px 0px 30px 0px;

  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 40px;
    margin: 70px 0px 60px 0px;
  }
`;

const Content = styled.div`
    margin-top: 40px;
    width: 90%;
    background-color: white;
    border-radius: 14px;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 500px) {
        margin-top: 20px;
        width: 360px;
  }
`;

const BTN = styled.button`
  background-color: rgba(197, 101, 231, 1);
  color: white;
  margin: 30px auto;
  width: 90%;
  height: 45px;
  border-radius: 15px;
  font-family: Inter;
  font-size: 13px;
  font-weight: 800;
  line-height: 22px;
  border: none;
  @media (min-width: 500px) {
    font-size: 15px;
    line-height: 25px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 160px;
    width: 360px;
    height: 50px;
  }
`;

const SportsBet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: black;
  margin: 20px 0px;
  
`;

const Sports = styled.span`
  font-size: 25px;
  font-weight: 800;
  margin-right: 30px;
`;

const Selected = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: rgba(138, 136, 140, 1);
  margin: 0 auto;

`;

const Playing = styled.span`
  font-size: 25px;
  font-weight: 800;
  margin-left: 30px;
`;


const Betting = ()=> {
    const getCurrentDate = () => {
      const today = new Date();
      const day = today.getDate();
      return `${day}`;
    }
    const [day, setDay] = useState("");
    const sportsList = [["야구", "빙구", "농구"], ["럭비", "축구"]]

    useEffect(() => {
      setDay(getCurrentDate());
      console.log(day);
    },[]);

    const navigate = useNavigate();

    const gotoPredictingPage = () => {
      navigate('/betting/predict', { state: { day } });
    }


    return (
      <Container>
        <SideBar>
            <SideBarContents/>
        </SideBar>
        <Logo/>

        <SubTitle>9월 {`${day}`}일 경기 예측</SubTitle>

        <Content>
          {day === "27" ? 
            sportsList[0].map((sports)=> <SportsBet><Sports>{`${sports}`}</Sports><Selected>선택 전</Selected><Playing>경기 전</Playing></SportsBet>):
            sportsList[1].map((sports) => <SportsBet><Sports>{`${sports}`}</Sports><Selected>선택 전</Selected><Playing>경기 전</Playing></SportsBet>)
          }
        </Content>

        <BTN onClick={gotoPredictingPage}>승부 예측하기!</BTN>

      </Container>
    );
  }
  
  export default Betting;