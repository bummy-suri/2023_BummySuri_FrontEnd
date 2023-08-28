import React, { useEffect,  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, {keyframes} from 'styled-components';

import Benefit0201 from '../assets/benefit0201.png';
import Benefit0202 from '../assets/benefit0202.png';
import Insta from "../assets/insta.png";
import Arrow01 from "../assets/arrow01.png";
import Arrow02 from "../assets/arrow02.png";
import BummySuri from "../assets/BummySuri.png";


import SideBar from "../components/SideBar/SideBar";
import SideBarContents from "../components/SideBar/SideBarContents";


import CarouselBenefit from "../components/Lending/CarouselBenefit";
import SponsorList from "../components/Lending/SponsorList";
//import Logo from "../components/Logo";






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
  font-family: Pretendard;
`;

const SubContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
`;


const MainTitle = styled.h1`
  font-weight:500;
  font-size:16px;
  position: absolute;
  top:16px;
  @media (max-width: 300px) {
    font-size: 13px;
  }
`;

const LoginBTN = styled.button`
  position: absolute;
  /* top: 28px; */
  right: 20px;
  font-size: 14px;
  background-color: rgba(29, 29, 29, 1);
  border: 1px solid white;
  border-radius: 17px;
  width: 66px;
  height: 26px;
  color: rgb(255,255,255);
  @media (max-width: 400px) {
    width: 50px;
    height: 20px;
    font-size: 11px;
  }
`;


const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  line-height: 40px;
  text-align: center;
  margin: 0px 0px 20px 0px;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
  @media (max-width: 300px) {
    font-size: 20px;
  }
`;


const SubTitle = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: 800;
  line-height: 40px;
  text-shadow: 0px 0px 10px rgba(112, 0, 255, 1);
  margin-top: 60px;
  margin-bottom: 10px;
`;

const Content = styled.div`
  font-size: 18px;
  font-weight: 800;
  line-height: 30px;
  text-align: center;
  margin: 40px 0px 0px 0px;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
  @media (max-width: 300px) {
    font-size: 15px;
  }
`;

const SubContent = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  text-align: center;
  margin-top: 30px;
  @media (max-width: 300px) {
    font-size: 12px;
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
  background-color: rgba(112, 0, 255, 1);
  border: none;
  margin: 0 auto;
  margin-bottom: 45px;
  width: 334px;
  height: 50px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 800;
  @media (max-width: 400px) {
    width: 95%;
    font-size: 14px;
    height: 40px;
  }
  @media (min-width: 768px) {
    font-size: 17px;
    line-height: 25px;
    margin: 0 auto;
    margin-top: 30px;
    width: 350px;
    height: 70px;
  }
`;


const CarouselBox = styled.div`
  width: 100vw;
  margin-top: 40px;
`;

const Tiger = styled.span`
  color: rgba(253, 38, 38, 1);
  font-size: 32px;
  @media (max-width: 300px) {
    font-size: 23px;
  }
`;

const Eagle = styled.span`
  color : rgba(22, 87, 255, 1);
  font-size: 32px;
  @media (max-width: 300px) {
    font-size: 23px;
  }
`;

const ColoredText = styled.span`
  color: rgba(213, 180, 255, 1);
  font-weight: 800;
`;


const InstaDiv = styled.div`
  width: 248px;
  height: 132px;
  border-radius: 12px;
  border: 1px solid white;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img{
    width: 46px;
    height: 46px;
    margin-bottom: 17px;
  }
  div{
  font-size: 16px;
  font-weight: 700;
  }
`;

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const Arrow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width: 29px;
    position: relative;
    animation: ${moveUpDown} 1s linear infinite;
  }
  @media (max-width: 300px) {
    img{
      width: 25px;
    }
  }
`;




const Lending = ()=> {
    const [loggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate();

    const menuClick = () => {
      navigate('/Login');
    }
    

    return (
      <Container>
        {/* 로그인 */}
          <Menu>
          <MainTitle><Link to="/" style={{textDecoration:"none", color:"white"}}>BUMMY & SURI</Link></MainTitle>
          {loggedIn ? 
            <SideBar>
              <SideBarContents/>
            </SideBar>
            : <LoginBTN onClick={menuClick}>로그인</LoginBTN>
          }
          </Menu>

        {/* <Logo/> */}


        <SubContainer>
          {/* 이미지 추후 변경 / 수정 될 듯 */}
          <img src={BummySuri} style={{margin:"0 auto", overflow:"hidden", width:"80vw"}} alt="버미수리이미지" />
          <Title>
            <Tiger>버미</Tiger>와 <Eagle>수리</Eagle>가
            <br />
            다시 돌아왔습니다!
          </Title>
          <Content>
            귀여운 나만의 버미, 수리와 함께 <br />
            2023 고려대 - 연세대 정기전을 <br />
            즐겨봐요! (•̀ᴗ•́)و ̑̑ <br />
          </Content>

        </SubContainer>
        <BTN><Link to="/Minting" style={{ textDecoration: 'none', color: 'white' }}>버미와 수리 만나러 가기!</Link></BTN>

        
        <SubContainer>
          <SubContent>
            버미와 수리를 더 알고 싶다면<br />
            밑으로 스크롤 ( ⸝•ᴗ•⸝)<br />
          </SubContent>
          <Arrow>
            <img src={Arrow01} style={{top: '10px'}} alt="화살표" />
            <img src={Arrow02}  alt="화살표" />
          </Arrow>
        </SubContainer>

        <SubContainer>
          <SubTitle>
            Q. 버미와 수리란?
          </SubTitle>
          <SubContent>
            버미와 수리는 고려대-연세대 정기전을 기념하여<br />
            2022년 처음으로 찾아온 캐릭터 NFT입니다.<br />
            모두 다른 모습으로 제작되어 더욱 특별한,<br />
            <ColoredText>나만의 버미와 수리</ColoredText>를 만나보세요!<br />
          </SubContent>
        </SubContainer>


        <SubContainer>
          <SubTitle>
            버미와 수리 첫 번째 혜택!
          </SubTitle>

          <CarouselBox>
            <CarouselBenefit/> {/* 혜택 사진들 슬라이드 */}
          </CarouselBox>

          <SubContent>
          NFT 소유자는 버미와 수리를 보여주고 <br />
          하이드미플리즈의 할인 혜택을 받을 수 있어요. <br />
          <br />
          버미와 수리를 통해 다양한<br />
          <ColoredText>할인 혜택</ColoredText>을 받아가세요! <br />
          </SubContent>

        </SubContainer>


        <SubContainer>
          <SubTitle>
            버미와 수리 두 번째 혜택!
          </SubTitle> 
          <Benefit02>
            <img src={Benefit0201} alt="경기장" />
            <img src={Benefit0202} alt="가위바위보" />
          </Benefit02>
          <SubContent>
          NFT 소유자는 정기 교류전 <ColoredText>경기 예측</ColoredText>과 <br />
          <ColoredText>가위바위보 게임</ColoredText>에 참여할 수 있어요. <br />
          <br />
          포인트를 가장 많이 모은 10명에게 <br />
          경품을 드립니다! <br />
          </SubContent>
        </SubContainer>


        <SubContainer>
          <SubTitle>
            버미와 수리 세 번째 혜택!
          </SubTitle> 
          <InstaDiv>
            <img src={Insta} alt="인스타그램 로고" />
            <div>@bummy_suri_official</div>
          </InstaDiv>
          <SubContent>
            버미와 수리를 가지기만 해도 선물이 팡팡?<br />
            <ColoredText>버미와 수리 공식 인스타그램</ColoredText>에서<br />
            다양한 이벤트를 만나보실 수 있어요.<br />
          </SubContent>
        </SubContainer>


        <SponsorList/>


      </Container>
    );
  }
  
  export default Lending;






