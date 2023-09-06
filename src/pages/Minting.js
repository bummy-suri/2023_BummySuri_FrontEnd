import React, { useState, useEffect } from 'react';
import styled, {keyframes} from 'styled-components';
import BummySuriTitle from '../components/Logo';
import axios from 'axios';
import SideBar from '../components/SideBar/SideBar';
import SideBarContents from '../components/SideBar/SideBarContents';
import { API } from '../config';
import bummy from '../assets/minting/bummyquestionmark.png';
import suri from '../assets/minting/suriquestionmark.png';

const Minting = () => {
  const Container = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    background-color: #0e0e0e;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  `;
  // 이미지 위 Text 부분
  const KoYonDiv = styled.div`
    text-align: center;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
    color: white;
    font-size: 32px;
    font-weight: 900;
    margin-top: 53px;
    margin-bottom: 23px;
  `;

  const KoYonDivRed = styled.span`
    color: #fd2626;
    font-size: 32px;
    font-weight: 900;
  `;

  const KoYonDivBlue = styled.span`
    color: #1265e9;
    font-size: 32px;
    font-weight: 900;
    margin-top: 35px;
    margin-left: 10px;
  `;
  const UnderKoYonDivText = styled.div`
    text-align: center;
    color: #fafafa;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 34px;
  `;

  //3가지 이미지 부분
  const ThreeImage = styled.img`
    width: 100vw;
    margin-bottom: 62px;
    @media (min-width: 430px) {
      width: 400px;
    }
  `;

  //학교 선택하는 부분
  const SelectBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  `;

  const SelectText = styled.div`
    text-align: left;
    width: 280px;
    @media (max-width: 330px) {
      width: 250px;
    }
    @media (max-width: 310px) {
      width: 220px;
    }
    @media (max-width: 280px) {
      width: 190px;
    }
    @media (max-width: 220px) {
      width: 140px;
    }
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 11px;
  `;

  const SelectUniv = styled.div`
    width: 332px;
    height: 62px;
    background: linear-gradient(
      97deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.15) 100%
    );
    border-radius: 9px;
    border: 0.25px white solid;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 350px) {
      width: 90vw;
    }
  `;

  const SelectKu = styled.div`
    width: 148px;
    height: 42px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    text-align: center;
    color: #fd2626;
    font-size: 16px;
    font-weight: 700;
    line-height: 42px;
    @media (max-width: 350px) {
      width: 40vw;
    }
  `;

  const SelectYu = styled.div`
    width: 148px;
    height: 42px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    text-align: center;
    color: #1657ff;
    font-size: 16px;
    font-weight: 700;
    line-height: 42px;
    @media (max-width: 350px) {
      width: 40vw;
    }
  `;

  //'NFT 민팅하기'버튼
  const MintButton = styled.button`
    width: 334px;
    height: 50px;
    background-color: #7000ff;
    boxshadow: 0px 0px 10px 0px #0b0018;
    border-radius: 8px;
    border: none;
    text-align: center;
    color: white;
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 50px;
    @media (max-width: 350px) {
      width: 90vw;
    }
  `;

  const [isLoading, setIsLoading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const accessToken = localStorage.getItem('bummySuri');

  const handleMintButtonClick = () => {
    const university = selectedUniversity === '고려대학교' ? 'KOREA' : 'YONSEI';


    setIsLoading(true);

    axios
      .post(`${API}/mint`,
         {
            univ: university,
         },
         {
            headers: {
            Authorization: `bearer ${accessToken}`,
            },
         }
      )
      .then((response) => {
         console.log(response.data);
        //const newAccessToken = response.data.accessToken;
        //localStorage.setItem('accessToken', newAccessToken);
        setIsLoading(false);
        setIsPopupOpen(true);

        setTimeout(() => {
          setIsPopupOpen(false);
        }, 1000);
      })
      .catch((error) => {
        console.error('NFT 민팅에서 에러가 발생했습니다.', error);
        if (error.response) {
          console.error('Response Data:', error.response.data);
          console.error('Status Code:', error.response.status);
        } else if (error.request) {
          console.error('Request:', error.request);
        } else {
          console.error('Error Message:', error.message);
        }

        setIsLoading(false);
      });
  };

  const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1D1D1D;
  border-radius: 8px;
  width: 260px;
  height: 90px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 350px) {
    80vw;
  }
`;

const PopupContainer = styled.div`
  width: 260px;
  height: 90px;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.15) 100%);
  border: 1px solid white;
  @media (max-width: 350px) {
    width: 80vw;
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


  const EndPopup = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 332px;
    height: 110px;
    background: linear-gradient(
      97deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.4) 100%
    );
    border: 0.25px white solid;
    border-radius: 9px;
    z-index: 1000;
    text-align: center;
    color: white;
    font-size: 16px;
    font-weight: 700;
    line-height: 110px;
  `;

  // NFT 남은 개수 그래프 부분
  const NFTCountDiv = styled.div`
    width: 339px;
    height: 503px;
    background: linear-gradient(180deg, #1e1e1e 0%, #353535 100%);
    border-radius: 14px;
    margin-bottom: 30px;
    @media (max-width: 350px) {
      width: 90vw;
    }
  `;

  const ImageGraphDiv = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left: 20px;
    margin-right: 20px;
  `;

  const GraphImage = styled.img`
    width: 113px;
    height: 113px;
    margin-top: 29px;
    margin-bottom: 24px;
    @media (max-width: 300px) {
      width: 40vw;
      height: 40vw;
    }
  `;

  const [BummyAmount, setBummyAmount] = useState(0);
  const [SuriAmount, setSuriAmount] = useState(0);

  
  const teamType = ['KOREA', 'YONSEI'];

  useEffect(() => {
    axios
      .get(`${API}/mint/${teamType[0]}`, {
        headers: {
          Authorization: `bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setBummyAmount(response.data.count);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`${API}/mint/${teamType[1]}`, {
        headers: {
          Authorization: `bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setSuriAmount(response.data.count);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const BummyGraphHeight = (BummyAmount / 5000) * 177;
  const SuriGraphHeight = (SuriAmount / 5000) * 177;

  const GraphSetting = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `;

  const BummyGraph = styled.div`
    width: 52px;
    height: ${BummyGraphHeight}px;
    line-height: ${BummyGraphHeight}px;
    background: linear-gradient(
      180deg,
      #7c001a 0%,
      rgba(253, 38, 38, 0.3) 100%
    );
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    color: #f6f6f6;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
  `;

  const SuriGraph = styled.div`
    width: 52px;
    height: ${SuriGraphHeight}px;
    line-height: ${SuriGraphHeight}px;
    background: linear-gradient(
      180deg,
      #003876 0%,
      rgba(22, 87, 255, 0.3) 100%
    );
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    color: #f6f6f6;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
  `;

  const Line = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 23px;
  `;
  const GraphLine = styled.div`
    width: 282px;
    border: 0.5px solid white;
  `;

  const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 24px;
  `;

  const UnderGraphTextFirst = styled.div`
    width: 239px;
    height: 24px;
    text-align: center;
    color: white;
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 35px;
  `;

  const UnderGraphTextSecond = styled.div`
    width: 239px;
    height: 24px;
    text-align: center;
    color: white;
    font-size: 14px;
    font-weight: 300;
  `;

  const [selectedUniversity, setSelectedUniversity] = useState(null);

  const handleUniversityClick = (university) => {
    setSelectedUniversity(university);
  };

  return (
    <>
      <Container>
        <BummySuriTitle />
        <SideBar>
          <SideBarContents />
        </SideBar>

        <KoYonDiv>
          나만의 <KoYonDivRed>버미</KoYonDivRed>와
          <KoYonDivBlue>수리</KoYonDivBlue>
          를 <br />
          만나는 이 시간!
        </KoYonDiv>
        <UnderKoYonDivText>
          학교를 선택하고 친구를 만나봐요!
          <br />
          설렘 가득한 순간이 당신을 기다립니다
        </UnderKoYonDivText>

        {selectedUniversity ? (
          selectedUniversity === '고려대학교' ? (
            <ThreeImage src={bummy} alt="버미 물음표 이미지" />
          ) : (
            <ThreeImage src={suri} alt="수리 물음표 이미지" />
          )
        ) : (
          <ThreeImage
            src={`${process.env.PUBLIC_URL}/assets/Minting/randombox.png`}
            alt="랜덤박스 이미지"
          />
        )}

        <SelectBox>
          <SelectText style={{ textAlign: 'left !important' }}>
            학교를 선택해주세요.
          </SelectText>
          <SelectUniv>
            <SelectKu
              onClick={() => handleUniversityClick('고려대학교')}
              style={{
                backgroundColor:
                  selectedUniversity === '고려대학교'
                    ? 'rgba(255, 255, 255, 0.90)'
                    : 'rgba(255, 255, 255, 0.4)',
              }}
            >
              고려대학교
            </SelectKu>
            <SelectYu
              onClick={() => handleUniversityClick('연세대학교')}
              style={{
                backgroundColor:
                  selectedUniversity === '연세대학교'
                    ? 'rgba(255, 255, 255, 0.90)'
                    : 'rgba(255, 255, 255, 0.4)',
              }}
            >
              연세대학교
            </SelectYu>
          </SelectUniv>
        </SelectBox>

        <MintButton onClick={handleMintButtonClick}>NFT 민팅하기</MintButton>
        {isLoading && (
          <Popup>
          <PopupContainer>
            <Circle><div></div></Circle>
            민팅 중입니다...
          </PopupContainer>
        </Popup>
        )}
        {isPopupOpen && <Popup><PopupContainer>민팅 완료!</PopupContainer></Popup>}

        <NFTCountDiv>
          <ImageGraphDiv>
            <GraphImage
              src={`${process.env.PUBLIC_URL}/assets/Minting/graphbummy.png`}
              alt="Bummy"
            ></GraphImage>
            <GraphImage
              src={`${process.env.PUBLIC_URL}/assets/Minting/graphsuri.png`}
              alt="Suri"
            ></GraphImage>
          </ImageGraphDiv>
          <ImageGraphDiv>
            <GraphSetting>
              <BummyGraph>{BummyAmount}</BummyGraph>
            </GraphSetting>
            <GraphSetting>
              <SuriGraph>{SuriAmount}</SuriGraph>
            </GraphSetting>
          </ImageGraphDiv>
          <Line>
            <GraphLine></GraphLine>
          </Line>
          <TextDiv>
            <UnderGraphTextFirst>남은 수량</UnderGraphTextFirst>
            <UnderGraphTextSecond>
              버미와 수리가 기다리고 있어요!
              <br />
              빨리 데려가라굿 (๑•◡-๑)
            </UnderGraphTextSecond>
          </TextDiv>
        </NFTCountDiv>
      </Container>
    </>
  );
};

export default Minting;
