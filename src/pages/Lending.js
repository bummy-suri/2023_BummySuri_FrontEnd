import React, { useEffect,  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';

import Benefit0201 from '../assets/benefit0201.png';
import Benefit0202 from '../assets/benefit0202.png';
import Menu from '../assets/menu.png';


import Carousel from "../components/Lending/Carousel";
import CarouselBenefit from "../components/Lending/CarouselBenefit";
import SponsorList from "../components/Lending/SponsorList";
import Logo from "../components/Logo";




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
`;

const SubContainer = styled.div`
  margin-bottom: 40px;
`;

const MenuBar = styled.span`
  position: absolute;
  top: 15px;
  right: 17px;
  button{
    font-size: 10px;
    background-color: rgba(29, 29, 29, 1);
    border: 1px solid gray;
    border-radius: 5px;
    padding: 5px 10px;
    color: rgb(200,200,200);
  }
  img{
    width: 25px;
  }
`;

const SubTitle = styled.div`
  font-family: NanumSquare;
  font-size: 25px;
  font-weight: 800;
  line-height: 40px;
  text-align: center;
  margin: 70px 0px 20px 0px;

  @media (min-width: 768px) {
    font-size: 45px;
    line-height: 70px;
    margin: 100px 0px 60px 0px;
  }
`;

const Content = styled.div`
  font-family: NanumSquare;
  font-size: 16px;
  font-weight: 800;
  line-height: 30px;
  text-align: center;
  margin: 40px 0px;
  @media (min-width: 768px) {
    font-size: 25px;
    line-height: 40px;
    margin: 70px 0px 130px 0px;
  }
`;

const SubContent = styled.div`
  font-family: NanumSquare;
  font-size: 14.5px;
  font-weight: 400;
  line-height: 25px;
  text-align: center;
  margin: 40px 0px;
  @media (min-width: 768px) {
    font-size: 23px;
    line-height: 35px;
    font-weight: 465;
    margin: 60px 0px 150px 0px;
  }
`;

const Benefit02 = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  img {
    width: 40%;
    margin: 10px;
  }
`;

const BTN = styled.button`
  background-color: rgba(197, 101, 231, 1);
  margin: 30px auto;
  width: 320px;
  height: 51px;
  border-radius: 15px;
  font-family: Inter;
  font-size: 15px;
  font-weight: 800;
  line-height: 22px;
  @media (min-width: 768px) {
    font-size: 17px;
    line-height: 25px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 160px;
    width: 350px;
    height: 70px;
  }
`;


const CarouselBox = styled.div`
  width: 100vw;
  margin-top: 40px;
`;

const Tiger = styled.span`
  color: rgba(241, 11, 11, 1);
`;

const Eagle = styled.span`
  color : rgba(18, 13, 246, 1);
`;




const Lending = ()=> {
    const [loggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate();

    const menuClick = () => {
      if(loggedIn){
        // 메뉴바
        alert("메뉴바");
      }
      else{
        // 로그인바
        navigate('/Login');
      }
    }
    

    return (
      <Container>
        {/* 로그인 */}
        <MenuBar>
          {loggedIn ? 
            <img src={Menu} alt="메뉴버튼" onClick={menuClick}/> : <button onClick={menuClick}>로그인</button>
          }
        </MenuBar>

        <Logo/>


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
          버미와 수리는 <br /> <br /> 
          고려대학교 블록체인 학회 <br />  Blockchain Valley와 <br /> <br /> 
          연세대학교 블록체인 학회 <br />  Blockchian At Yonsei의 <br /> <br /> 
          NFT 협업 프로젝트입니다! <br />
          </SubContent>
        </SubContainer>


        <SubContainer>
          <SubTitle>
            <Tiger>버미</Tiger>와 <Eagle>수리</Eagle> <br />첫 번째 혜택!
          </SubTitle>

          <CarouselBox>
            <CarouselBenefit/> {/* 혜택 사진들 슬라이드 */}
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


        <BTN><Link to="/Minting" style={{ textDecoration: 'none', color: 'white' }}>버미와 수리 만나러 가기!</Link></BTN>

        <SponsorList/>


      </Container>
    );
  }
  
  export default Lending;






