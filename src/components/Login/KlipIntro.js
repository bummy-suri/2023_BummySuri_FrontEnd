import React from "react";
import styled from 'styled-components';
import KlipLogo from "../../assets/Login/KlipLogo.png";
import KakaoLogo from "../../assets/Login/KakaoLogo.png";
import menu from "../../assets/Login/menu.png";

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
`;

const Image = styled.img`
    width: 99.31px;
    height: 100px;
    margin-top: 26px;
`;

const Klipis = styled.div`
    font-size: 16px;
    text-align: center;
    margin-top: 19px;
`;

const Bold = styled.span`
    font-weight: bold;
`

const FromKaKao = styled.div`
    font-size: 21px;
    margin-top: 41px;
`

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

const NumberContent = styled.div`
`


const KlipIntro = () => {
    return (
        <Total>
            <What>Klip이란?</What>
            <Image src={KlipLogo}></Image>
            <Klipis>
                <Bold>클립</Bold>은 클레이튼과 이더리움 네트워크 자산을<br/>안전하고 편리하게 관리할 수 있는<br/>카카오 기반 지갑입니다.
            </Klipis>

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
