import React, { useEffect,  useState } from "react";
import styled from 'styled-components';

import Benefit0201 from '../assets/benefit0201.png';
import Benefit0202 from '../assets/benefit0202.png';
import Partner01 from '../assets/sponsor/partner01.png';
import Partner02 from '../assets/sponsor/partner02.png';
import Partner03 from '../assets/sponsor/partner03.png';
import Partner04 from '../assets/sponsor/partner04.png';
import Partner05 from '../assets/sponsor/partner05.png';
import Partner06 from '../assets/sponsor/partner06.png';
import Management01 from '../assets/sponsor/management01.png';
import Management02 from '../assets/sponsor/management02.png';
import Menu from '../assets/menu.png';


import Carousel from "../components/Lending/Carousel";
import CarouselBenefit from "../components/Lending/CarouselBenefit";


const Container = styled.div`
  background-color: rgba(29, 29, 29, 1);
  color:rgba(255, 255, 255, 1);
  margin: 0px;
  padding: 20px; //간격조정
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const SubContainer = styled.div`
  margin-bottom: 100px;
`;


const Title = styled.h1`
  font-family: Inter;
  font-size: 25px;
  font-weight: 800;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 1);
  width: 242px;
  height: 67px;
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubTitle = styled.div`
  font-family: NanumSquare;
  font-size: 30px;
  font-weight: 800;
  line-height: 40px;
  text-align: center;
  margin: 50px 0px 20px 0px; // 간격조정

  @media (min-width: 768px) {
    font-size: 45px;
    line-height: 70px;
    margin: 100px 0px 60px 0px; // 간격조정
  }
`;

const Content = styled.div`
  font-family: NanumSquare;
  font-size: 18px;
  font-weight: 800;
  line-height: 30px;
  text-align: center;
  margin: 40px 0px; // 간격조정
  @media (min-width: 768px) {
    font-size: 25px;
    line-height: 40px;
    margin: 70px 0px 130px 0px; // 간격조정
  }
`;

const SubContent = styled.div`
  font-family: NanumSquare;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  margin: 40px 0px; // 간격조정
  @media (min-width: 768px) {
    font-size: 23px;
    line-height: 35px;
    font-weight: 465;
    margin: 60px 0px 150px 0px; // 간격조정
  }
`;

const Benefit02 = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  img {
    width: 45%;
    margin: 9px;
  }
`;

const BTN = styled.button`
  color: rgba(255, 255, 255, 1);
  background-color: rgba(197, 101, 231, 1);
  margin: 30px auto;
  width: 325px;
  height: 51px;
  border-radius: 15px;
  font-family: Inter;
  font-size: 15px;
  font-weight: 800;
  line-height: 22px;
  @media (min-width: 768px) {
    font-size: 23px;
    line-height: 25px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 160px;
    width: 550px;
    height: 90px;
  }
`;


const CarouselBox = styled.div`
  width: 700px;
  margin-top: 70px;
  margin-bottom: 60px;
`;

const Tiger = styled.span`
  color: rgba(241, 11, 11, 1);
`;

const Eagle = styled.span`
  color : rgba(18, 13, 246, 1);
`;

const SponTitle = styled.div`
  p {
    font-size: 20px;
    color: white;
    font-weight: 500;
    letter-spacing: 2px;
    margin-top: 50px;
  }
  text-align: center;
  margin-bottom: 10px;
  margin-top: 20px;
  @media (min-width: 768px) {
    p {
      font-size: 29px;
      font-weight: 600;
      letter-spacing: 3px;
      margin-top: 90px;
    }
  }
`;
const SponImgBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 5px;
  align-items: center;
`;


 const SponImg = styled.div``;

const Sponsor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  margin: 40px auto;
  /* margin-right: 30px; */
  width: 300px;
  @media (min-width: 768px) {
    height: 600px;
    margin-bottom: 160px;
  }
`;

const PImg = styled.img`
  width: 70px;
  margin: 10px;
  @media (min-width: 768px) {
    width: 120px;
    margin: 16px;
  }
`;
const MImg = styled.img`
  width: 120px;
  @media (min-width: 768px) {
    width: 210px;
    margin: 0 18px;
  }
`;

const MenuBar = styled.span`
  position: absolute;
  top: 30px;
  right: 30px;
  span{
    font-size: 13px;
  }
  img{
    width: 25px;
  }
`;


const Lending =()=> {
    const [loggedIn, setLoggedIn] = useState(false);

    const btnClick = () => {
      // 만나러가기 사이트로 이동
      alert("만나러가기~");
    }
    const menuClick = () => {
      // 메뉴 클릭
      alert("hi");
    }
    

    return (
      <Container>
        {/* 로그인 ~~ */}
        <MenuBar>
          {loggedIn ? 
            <img src={Menu} alt="메뉴버튼" onClick={menuClick}/> : <span onClick={menuClick}>로그인</span>
          }
        </MenuBar>

        <Title>BUMMY & SURI</Title>

        <SubContainer>
          <SubTitle>
            <Tiger>버미</Tiger>와 <Eagle>수리</Eagle>가
            <br />
            다시 돌아왔습니다!
          </SubTitle>
          <Content>
            귀여운 나만의 버미, 수리와 함께 <br />
            2023 고려대 - 연세대 정기전을 <br />
            즐겨봐요! (•̀ᴗ•́)و ̑̑ <br />
          </Content>

          <CarouselBox>
            <Carousel/>
          </CarouselBox>

        </SubContainer>

        <SubContainer>
          <SubTitle>
            <Tiger>버미</Tiger>와 <Eagle>수리</Eagle>란?
          </SubTitle>
          <SubContent>
          버미와 수리는 고려대학교 블록체인 학회 <br />
          Blockchain Valley와 연세대학교 블록체인 학회 <br />
          Blockchian At Yonsei의 NFT 협업 프로젝트입니다! <br />
          </SubContent>
        </SubContainer>

        <SubContainer>
          {/* 버미와 수리의 첫 번째 혜택! */}
          <SubTitle>
            <Tiger>버미</Tiger>와 <Eagle>수리</Eagle> <br />첫 번째 혜택!
          </SubTitle>
          {/* 혜택 사진들~~ */}

          <CarouselBox>
            <CarouselBenefit/>
          </CarouselBox>

          <SubContent>
          NFT 소유자는 버미와 수리를 보여주고 <br />
          협력 업체의 할인 혜택을 받을 수 있어요. <br />
          <br />
          버미와 수리를 통해 <br />
          다양한 혜택을 받아가세요! <br />
          </SubContent>
        </SubContainer>

        <SubContainer>
          {/* 버미와 수리의 두 번째 혜택! */}
          <SubTitle>
            <Tiger>버미</Tiger>와 <Eagle>수리</Eagle> <br /> 두 번째 혜택!
          </SubTitle> 
          <Benefit02>
            <img src={Benefit0201} alt="경기장" />
            <img src={Benefit0202} alt="가위바위보" />
          </Benefit02>
          <SubContent>
          NFT 소유자는 정기 교류전 경기 예측과 <br />
          가위바위보 게임에 참여할 수 있어요. <br />
          <br />
          포인트를 가장 많이 모은 10명에게 <br />
          경품을 드립니다! <br />
          </SubContent>
        </SubContainer>

        <BTN onClick={btnClick}>버미와 수리 만나러 가기!</BTN>

        <Sponsor>
            <SponTitle>
              <p>Management</p>
            </SponTitle>
            <SponImgBox>
              <SponImg>
                <MImg src={Management01}alt="img" />
              </SponImg>
              <SponImg>
                <MImg src={Management02} alt="img" />
              </SponImg>
            </SponImgBox>
            <SponTitle>
              <p>Partner</p>
            </SponTitle>
            <SponImgBox>
              <SponImg>
                <PImg src={Partner01} alt="img" />
              </SponImg>
              <SponImg>
                <PImg src={Partner02}alt="img" />
              </SponImg>
              <SponImg>
                <PImg src={Partner03} alt="img" />
              </SponImg>
            </SponImgBox>

            <SponImgBox>
              <SponImg>
                <PImg src={Partner04} alt="img" />
              </SponImg>
              <SponImg>
                <PImg src={Partner05} alt="img" />
              </SponImg>
              <SponImg>
                <PImg src={Partner06} alt="img" />
              </SponImg>
            </SponImgBox>
          </Sponsor>


      </Container>
    );
  }
  
  export default Lending;






