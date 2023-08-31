
import React, { useState } from "react";
import styled from 'styled-components';

import HMPLogo from "../../assets/sponsor/partner02.png";


const Popup = styled.div`
  min-width:100vw;
  min-height: 100vh;
  background-color: #1D1D1D;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0px;
`;

const BenefitContainer = styled.div`
  width:332px;
  height: 850px;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(97.14deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.15) 100%);
  
  border: 1px solid white;
  position: relative;
  @media (max-width: 300px) {
    width:250px;
    height: 750px;
  }
`;


const BenefitTitle = styled.div`
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  @media (max-width: 300px) {
    font-size: 15px;
  }
`;


const Benefit = styled.div`
  margin: 10px 0px 10px 0px;
`;


const Circle = styled.div`
    width: 20px;
    height: 20px;
    background-color: #1265E9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-right: 25px;
    margin-left: 5px;
    @media (max-width: 300px) {
        width: 14px;
        height: 14px;
        margin-right: 15px;
    }
`

const ListContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 16px;
    @media (max-width: 300px) {
    font-size: 13px;
    margin-top: 15px;
    }
`

const ListContainer2 = styled.div`
    margin-top: 40px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 16px;
    @media (max-width: 300px) {
    font-size: 12.5px;
    margin-top: 35px;
    }
`


const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    font-family: "Pretendard_Thin";
`
const List2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 18px;
`



const PopupAlert = styled.div`
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
  @media (min-width: 300px) {
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

const BTN = styled.button`
    color: white;
    width: 300px;
    height: 50px;
    border: none;
    border-radius: 10px;
    margin-top: 10px;
    background-color:rgba(112, 0, 255, 1);
    font-size: 16px;
    font-weight: 800;
    @media (max-width: 300px) {
        font-size: 12px;
        width: 210px;
        height: 39px;
        border-radius: 7px;
    }
`;

const Stress = styled.div`
    font-weight: 700;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

const SubList = styled.ul`
    font-size: 15px;
    font-family: "Pretendard_Thin";
    margin-left: 25px;
    margin-top: 0px;
    li{
        margin-bottom: 5px;
    }
    @media (max-width: 300px) {
        font-size: 12px;
        margin-left: 8px;
    }
`;


const CloseBTN = styled.button`
    border: none;
    background-color: rgba(0,0,0,0);
    position: absolute;
    right: 5px;
    top: 5px;
    color: rgba(170,170,170,1);
`;

const BenefitPopup = () => {
    const [popupOpen, setPopupOpen] = useState(false); 

    const DownloadClick = () => {
      
        const userAgent = navigator.userAgent;
  
        // iOS인 경우  --> 잘 되는지 확인 필요
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          window.location.href = 'https://apps.apple.com/kr/app/%ED%95%98%EC%9D%B4%EB%93%9C%EB%AF%B8%ED%94%8C%EB%A6%AC%EC%A6%88/id1663171012';
        }
  
        // Android인 경우
        else if (/android/i.test(userAgent)) {
          window.location.href = 'https://play.google.com/store/apps/details?id=com.kr.hideme&hl=ko-KR'; // Google Play 스토어 링크로 이동
        }
  
        else{
          setPopupOpen(true);
        }
      }


    return (
        <Popup>
            <BenefitContainer>
              <CloseBTN onClick={() => window.history.back()}>X</CloseBTN>
              <Benefit>
                <BenefitTitle>버미와 수리 X 하이드미플리즈 혜택</BenefitTitle>
                <ListContainer>
                  <List>
                    <Circle>1</Circle>
                    <Content>
                    하이드미플리즈 카페<br />
                    <Stress>매일 음료 한 잔 20% 할인</Stress>
                    </Content>
                  </List>
                  <List>
                    <Circle>2</Circle>
                    <Content>
                    홍제동 금야포차<br />
                    <Stress>테이블 전체 금액 10% 할인</Stress>
                    </Content>
                  </List>
                  <List>
                    <Circle>3</Circle>
                    <Content>
                    기타 블루체크맵<br />
                    <Stress>제휴 공간들 다양한 혜택 제공</Stress>
                    </Content>
                  </List>
                  <SubList>
                        <li>삼각지 STIR (커피&위스키바)</li>
                        <li>성수동 오색칠 (카페)</li>
                        <li>이태원 경리단길 (갤러리바)</li>
                        <li>용산 에헤야서울 (카페)</li>
                  </SubList>
                </ListContainer>
            
              </Benefit>


              
              <Benefit>
                <BenefitTitle>하이드미플리즈에서 클립 연동하기</BenefitTitle>
                <ListContainer2>
                  <List2>
                      <Circle>1</Circle>
                      <img src={HMPLogo} style={{width: "20px", height: "20px", marginRight: "9px"}}/>
                      하이드미플리즈 어플 실행
                  </List2>
                  <List2>
                      <Circle>2</Circle>
                      메타마스크 지갑 생성 및 연결
                  </List2>
                  <List2>
                      <Circle>3</Circle>
                      좌측 상단에 프로필 이미지를 눌러주세요
                  </List2>
                  <List2>
                      <Circle>4</Circle>
                      [프로필 수정] 을 누르세요 
                  </List2>
                  <List2>
                      <Circle>5</Circle>
                      클립 지갑을 연동해주세요
                  </List2>
                </ListContainer2>
              </Benefit>
              <BTN onClick={DownloadClick}>하이드미플리즈 다운로드 받기!</BTN>
              {popupOpen && (
                <PopupAlert>
                    <PopupContainer>
                        모바일로 접속해주세요!
                        <button onClick={() => setPopupOpen(false)}
                        style={{backgroundColor:"#7000FF", color:"white", width:"65px", height:"23px", border:"none", borderRadius:"4px", marginTop: "10px"}}>
                        닫기</button>
                    </PopupContainer>
                </PopupAlert>
               )}
            </BenefitContainer>
          </Popup>
    )

}

export default BenefitPopup;
