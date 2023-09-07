import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import BummySuriTitle from '../components/Logo';
import axios from 'axios';
import SideBar from '../components/SideBar/SideBar';
import SideBarContents from '../components/SideBar/SideBarContents';
import { API } from '../config';


const Minting = () => {
  // 대학 선택 후 민팅
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  const handleUniversityClick = (university) => {
    setSelectedUniversity(university);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mintingFailure, setMintingFailure] = useState(false);
  const [mintingError, setMintingError] = useState(false);
  const AccessToken = localStorage.getItem('bummySuri');

  const handleMintButtonClick = () => {
    const university = selectedUniversity === '고려대학교' ? 'KOREA' : 'YONSEI';

    setIsLoading(true);

    console.log(`selected university: ${university}`);

    axios
      .post(
        `${API}/mint/${university}`,
        null,

        {
          headers: {
            Authorization: `bearer ${AccessToken}`,
          },
          timeout: 20000,
        }
      )
      .then((response) => {
        const newAccessToken = response.data.accessToken;

        console.log(`data: ${response.data}`);
        console.log(`status: ${response.status}`);

        setIsLoading(false);

        if (response.status === 200) {
            localStorage.setItem('bummySuri', newAccessToken);

          setIsPopupOpen(true);
          setTimeout(() => {
            setIsPopupOpen(false);
          }, 2000);
        } else if (response.status === 202) {
          setMintingFailure(true);
          setTimeout(() => {
            setMintingFailure(false);
          }, 2000);
        }
      })
      .catch((error) => {
        console.error('NFT 민팅에서 에러가 발생했습니다.', error);

        console.log(`data: ${error.data}`);
        console.log(`status: ${error.status}`);

        setMintingError(true);
        setTimeout(() => {
          setMintingError(false);
        }, 3000);
        setIsLoading(false);
      });
  };
  // 남은 NFT 수량
  const [BummyAmount, setBummyAmount] = useState();
  const [SuriAmount, setSuriAmount] = useState();
  const teamType = ['KOREA', 'YONSEI'];

  useEffect(() => {
    axios
      .get(`${API}/mint/${teamType[0]}`, {
        headers: {
          Authorization: `bearer ${AccessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        const bummyNFTAmount = 5000-response.data.count;
        setBummyAmount(bummyNFTAmount);
        if (bummyNFTAmount === 0) {
          setBummyMinting(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(`${API}/mint/${teamType[1]}`, {
        headers: {
          Authorization: `bearer ${AccessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        const suriNFTAmount = 5000-response.data.count;
        setSuriAmount(suriNFTAmount);
        if (suriNFTAmount === 0) {
          setSuriMinting(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });



      if (SuriAmount === 0 && BummyAmount === 0) {
        setBummySuriMinting(true);
      }
  }, [SuriAmount, BummyAmount]);

  const BummyGraphHeight = (BummyAmount / 5000) * 177;
  const SuriGraphHeight = (SuriAmount / 5000) * 177;

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
  // 민팅 종료시
  const [bummyMinting, setBummyMinting] = useState(false);
  const [suriMinting, setSuriMinting] = useState(false);
  const [bummySuriMinting, setBummySuriMinting] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <Container>
        <BummySuriTitle />
        <SideBar>
          <SideBarContents />
        </SideBar>
        {!bummySuriMinting && (
          <KoYonDiv>
            나만의 <KoYonDivRed>버미</KoYonDivRed>와
            <KoYonDivBlue>수리</KoYonDivBlue>
            를 <br />
            만나는 이 시간!
          </KoYonDiv>
        )}
        {!bummySuriMinting && (
          <UnderKoYonDivText>
            학교를 선택하고 친구를 만나봐요!
            <br />
            설렘 가득한 순간이 당신을 기다립니다
          </UnderKoYonDivText>
        )}
        {bummySuriMinting && <EndMessage>민팅이 종료되었습니다.</EndMessage>}

        {selectedUniversity ? (
          selectedUniversity === '고려대학교' ? (
            <ThreeImageBummy src={`${process.env.PUBLIC_URL}/assets/Minting/bummyquestionmark.PNG`} alt="버미 물음표 이미지" />
          ) : (
            <ThreeImageSuri src={`${process.env.PUBLIC_URL}/assets/Minting/suriquestionmark.PNG`} alt="수리 물음표 이미지" />
          )
        ) : (
          <ThreeImageRandombox
            src={`${process.env.PUBLIC_URL}/assets/Minting/randombox.png`}
            alt="랜덤박스 이미지"
          />
        )}

        <SelectBox>
          <SelectText style={{ textAlign: 'left !important' }}>
            학교를 선택해주세요.
          </SelectText>
          <SelectUniv>
            {!bummyMinting && (
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
            )}
            {bummyMinting && (
              <SelectKu style={{ backgroundColor: '#4d4b4b' }}>
                고려대학교
              </SelectKu>
            )}
            {!suriMinting && (
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
            )}
            {suriMinting && (
              <SelectYu style={{ backgroundColor: '#4d4b4b' }}>
                연세대학교
              </SelectYu>
            )}
          </SelectUniv>
        </SelectBox>

        {!bummySuriMinting && (
          <MintButton onClick={handleMintButtonClick}>NFT 민팅하기</MintButton>
        )}

        {bummySuriMinting && <DarkMintButton>NFT 민팅하기</DarkMintButton>}

        {isLoading && (
          <Popup>
            <PopupContainer>
              <Circle>
                <div></div>
              </Circle>
              민팅 중입니다...
            </PopupContainer>
          </Popup>
        )}
        {isPopupOpen && (
          <Popup>
            <PopupContainer>민팅 완료!</PopupContainer>
          </Popup>
        )}
        {mintingFailure && (
          <Popup>
            <PopupContainer>이미 민팅이 완료되었습니다!</PopupContainer>
          </Popup>
        )}

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

const EndMessage = styled.div`
    width: 325px;
    height: 67px;
    background: linear-gradient(
      97deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.15) 100%
    );
    border-radius: 9px;
    border: 0.5px white solid;
    text-align:center;
    color;white;
    font-size:28px;
    font-weight:500;
    line-height:67px;
    margin-top:67px;
    margin-bottom:67px;
    @media (max-width: 330px) {
      width: 90vw;
      font-size: 24px;
    }
    @media (max-width: 300px) {
      width: 90vw;
      font-size: 20px;
    }

  `;

//3가지 이미지 부분
const ThreeImageRandombox = styled.img`
  width: 100vw;
  height: 100vw;
  margin-bottom: 62px;
  @media (min-width: 430px) {
    width: 400px;
    height: 400px;
  }
`;

const ThreeImageBummy = styled.img`
  width: 100vw;
  height: 100vw;
  margin-bottom: 62px;
  @media (min-width: 430px) {
    width: 400px;
    height: 400px;
  }
`;

const ThreeImageSuri = styled.img`
  width: 100vw;
  height: 100vw;
  margin-bottom: 62px;
  @media (min-width: 430px) {
    width: 400px;
    height: 400px;
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
  box-shadow: 0px 0px 10px 0px #0b0018;
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

const DarkMintButton = styled.div`
  width: 334px;
  height: 50px;
  background-color: #431a75;
  box-shadow: 0px 0px 10px 0px #0b0018;
  border-radius: 8px;
  border: none;
  text-align: center;
  color: #828080;
  font-size: 16px;
  line-height: 50px;
  font-weight: 800;
  margin-bottom: 50px;
  @media (max-width: 350px) {
    width: 90vw;
  }
`;
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
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border: 1px solid white;
  @media (max-width: 350px) {
    width: 80vw;
  }
`;

const PopupContainerSmallText = styled.div`
  width: 260px;
  height: 90px;
  text-align: center;
  font-size: 12px;
  display: flex;

  flex-direction: column;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.15) 100%
  );
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
  border-top: 6px solid #7000ff;
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
  margin-bottom: 10px;
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
const GraphSetting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
export default Minting;