import React,{useState, useEffect} from "react";
import styled from 'styled-components';
import GameList from "./GameList";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { API } from "../../config";

//사이드바에 들어가는 내용
const Total = styled.div`
    color: #FFFFFF;
    width: 100%;
`

const NFTImage = styled.img`
    margin-top:50px;
    width: 130px;
    height: 130px;
`
const Address = styled.div`
    margin-top: 5px;
`

const Point = styled.div`
    margin-top: 40px;
    font-size: 13px;
`

const PointScore = styled.div`
    margin-top: 8px;
    font-size: 20px;
    font-weight: bold;
`
const GoAnother = styled.button`
    padding-bottom: 10px;
    border: none;
    border-bottom: 1px solid #FFFFFF;
    color: #FFFFFF;
    background: transparent;
    width: 100%;
    font-weight: 800;
    font-size: 16px;
    margin-top:24px;
`

const MiniGameContent = styled.div`
    overflow: hidden;
    max-height: ${props => (props.show ? '1000px' : '0')};
    transition: max-height 0.3s ease-in-out; /* Adjust the transition duration as needed */
    font-size: 18px;
    color: #FFFFFF;
`

const Down = styled.img`
    width: 16px;
    height: 8px;
    float: right;
    margin-right: 31px;
    margin-left: -50px;
    margin-top: 5px;
`

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1D1D1D;
  border-radius: 8px;
  width: 185px; 
  height: 60px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
`;

const PopupContainer = styled.div`
  width: 185px; 
  height: 60px;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.15) 100%);
  border: 1px solid white;

`;

const ClipIntegration = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: white;
  font-size: 12px;
`;

const SideBarContents = ()=> {
    const navigate = useNavigate(); 
    const [shouldRedirectToLogin, setShouldRedirectToLogin] = useState(false);
    const [miniGameVisible, setMiniGameVisible] = useState(false);
    const [walletAddress, setWalletAddress] = useState();
    const [userPoint, setUserPoint] = useState();
    const [isMinted, setIsMinted] = useState(false);

    const [image, setImage] = useState("");
    const [contract, setContract] = useState("");
    


    useEffect(() => {
      axios.get(`${API}/users`, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("bummySuri")}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          setWalletAddress(response.data.cardAddress);
          setUserPoint(response.data.totalPoint);
          setIsMinted(response.data.isMinted);
        })
        .catch((error) => {
          console.error(error);
        });
    
        axios.get(`${API}/ranking/user`, {
          headers: {
            Authorization: `bearer ${localStorage.getItem("bummySuri")}`,
          },
        })
          .then((response) => {
              setImage(response.data.result.image);
              setContract(response.data.result.contractAddr);
            
          })
          .catch((error) => {
            console.error(error);
          });
      }, []
);
      
    const toggleMiniGame = () => {
        setMiniGameVisible(!miniGameVisible);
    };

    const myNFT = isMinted
    ? `https://static.bummysuri.com/asset/${contract}/${image}`
    : `${process.env.PUBLIC_URL}/assets/SideBar/NoNFT.png`;

    const partOfAddress = walletAddress ? `${walletAddress.substring(0, 9)}...${walletAddress.substring(walletAddress.length - 4)}` : "";

    return (
      <Total>
        <NFTImage src={myNFT}></NFTImage>
        <Address>지갑주소 <p style={{ fontSize: "12px" }}>{partOfAddress}</p></Address>
        <Point>보유 포인트</Point>
        <PointScore>{userPoint}P</PointScore>
        
        <Link to="/minting"><GoAnother style={{marginTop:'52px'}}>민팅하기</GoAnother></Link>
        <Link to="/bet/intro"><GoAnother>승부예측</GoAnother></Link>
        <GoAnother onClick={toggleMiniGame}>미니게임
        {miniGameVisible ? <Down src={`${process.env.PUBLIC_URL}/assets/Login/downBtn.png`} style={{transform:"rotate(180deg)"}}/> : <Down src={`${process.env.PUBLIC_URL}/assets/Login/downBtn.png`}/>}
        </GoAnother>
        <MiniGameContent show={miniGameVisible}>
                <GameList/>
        </MiniGameContent>
        <Link to="/Ranking"><GoAnother>Ranking</GoAnother></Link>
      </Total>
    );
  }
  
  export default SideBarContents;