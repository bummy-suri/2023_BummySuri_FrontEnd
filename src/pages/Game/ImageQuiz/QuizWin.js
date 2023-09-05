import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import SideBar from "../../../components/SideBar/SideBar";
import SideBarContents from "../../../components/SideBar/SideBarContents";

const PopupContainer = styled.div`
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

const ModalContent = styled.div`
    padding: 20px;
    border-radius: 9px;
    border: 0.5px solid #FFF;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.15) 100%);
    text-align: center;
    padding: 0 59px;
    font-size: 22px;
    margin-top: 150px;
    color: white;
    @media (max-width: 350px) {
        font-size: 17px;
        width: 120px;
      }
    @media (max-width: 300px) {
        font-size: 15px;
        width: 90px;
      }

`;

const Title = styled.div`
    margin-top: 50px;
    font-size: 40px;
    font-weight: bold;
    font-family:"Pretendard_Bold";
    color: #FFE500;
    @media (max-width: 300px) {
        font-size: 30px;
      }

`

const Message = styled.div`
    margin-top: 50px;
    font-size: 22px;
    font-weight: 500;
    @media (max-width: 300px) {
        font-size: 17px;
      }
`

const Times = styled.div`
    margin-top: 34px;
    margin-bottom: 37px;
    font-size: 16px;
    font-weight: 500;
    @media (max-width: 300px) {
        font-size: 17px;
      }
`

const Button = styled.button`
    border-radius: 8px;
    background: #7000FF;
    border: none;
    margin: 80px 3px;
    width: 160px;
    height: 50px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 200px;
`

const QuizWin = () => {
    return (
        <PopupContainer>
            <MainLogo>넌센스 그림퀴즈</MainLogo>
            <SideBar><SideBarContents/></SideBar>
            <ModalContent>
                <Title >승리!</Title>
                <Message>축하합니다!<br/>200P를 얻었습니다!</Message>
                <Times>남은 횟수: 0</Times>
                </ModalContent>
                <div>
                    <Link to="/"><Button style={{border:"1px solid #7000FF", backgroundColor:"#1D1D1D"}}>돌아가기</Button></Link>
                </div>
        </PopupContainer>
    );
};

export default QuizWin;
