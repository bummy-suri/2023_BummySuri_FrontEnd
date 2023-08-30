import React from "react";
import styled from 'styled-components';
import KlipLogo from "../../assets/Login/KlipLogo.png";
import KakaoLogo from "../../assets/Login/KakaoLogo.png";
import menu from "../../assets/Login/menu.png";
import Klip from "../../assets/Login/Klip.png";

//AboutKlip 누르면 나오는 토글내용
const Total = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
`;

const What = styled.div`
    padding-top: 25px;
    font-size: 21px;
    border-top:1px solid #FFFFFF;
    width: 100%;
    text-align: center;
    font-family: "Pretendard_Light";
    font-weight: bold;
`;

const Image = styled.img`
    width: 169px;
    height: 115px;
`;

const Klipis = styled.div`
    font-size: 14px;
    text-align: center;
    margin-top: 19px;
    font-family: "Pretendard_Thin";
    line-height: 18px;
`;

const Bold = styled.span`
    font-weight: bold;
`

const FromKaKao = styled.div`
    font-size: 21px;
    margin-top: 41px;
    font-family: "Pretendard_Light";
    font-weight: bold;
`
const Btn = styled.button`
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


const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 34px;
    font-size: 16px;
`

const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 28px;
    font-family: "Pretendard_Thin";
`

const Circle = styled.div`
    width: 20px;
    height: 20px;
    background-color: #1265E9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-right: 38px;
`

const KlipIntro = () => {
    return (
        <Total>
            <What>Klip이란?</What>
            <Image src={Klip}></Image>
            <Klipis>
            클립은 클레이튼, 이더리움, 폴리곤 네트워크 자산을 <br/>
            안전하고 편리하게 관리할 수 있는 디지털 자산 지갑입니다.
            </Klipis>
            <a href="https://klipwallet.com/" target="_blank"><Btn style={{marginTop:"10px", textDecoration:"none"}}>자세히 알아보기</Btn></a>
            <FromKaKao>
                카카오톡에서 클립 바로가기
            </FromKaKao>

            <ListContainer>
                <List>
                    <Circle>1</Circle>
                    <img src={KakaoLogo} style={{width: "20px", height: "20px", marginRight: "9px"}}/>카카오톡 실행
                </List>
                <List>
                    <Circle>2</Circle>
                    하단 메뉴의 [···]를 누르세요
                </List>
                <List>
                    <Circle>3</Circle>
                    <img src={menu} style={{width: "17px", height: "17px", marginRight: "9px"}}/>[전체서비스]를 누르세요
                </List>
                <List>
                    <Circle>4</Circle>
                    <img src={KlipLogo} style={{width: "20px", height: "20px", marginRight: "9px"}}/>클립을 실행해주세요
                </List>
            </ListContainer>
        </Total>
    );
}

export default KlipIntro;