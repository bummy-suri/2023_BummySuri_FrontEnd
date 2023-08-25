import React,{useState, useEffect} from "react";
import styled from 'styled-components';
import GameList from "./GameList";
import downBtn from "../../assets/Login/downBtn.png";
import {Link} from "react-router-dom";
import { useUserContext } from "../Login/UserAddress";


//사이드바에 들어가는 내용
const Total = styled.div`
    color: #FFFFFF;
    width: 100%;
`

const NFTImage = styled.img`
    margin-top:50px;
    width: 175px;
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
`


const SideBarContents = ()=> {
    const [miniGameVisible, setMiniGameVisible] = useState(false);
    const {userAddress} = useUserContext(); // userAddress로 접근하는 부분

    const toggleMiniGame = () => {
        setMiniGameVisible(!miniGameVisible);
    };


    return (
      <Total>
        <NFTImage src=""></NFTImage>
        <Address>지갑주소 <p style={{fontSize:"8px"}}>{userAddress}</p> </Address>
        <Point>보유 포인트</Point>
        <PointScore>1000P(수정)</PointScore>
        
        <Link to="/minting"><GoAnother style={{marginTop:'52px'}}>민팅하기</GoAnother></Link>
        <GoAnother>승부예측</GoAnother>

        <GoAnother onClick={toggleMiniGame}>미니게임
        {miniGameVisible ? <Down src={downBtn} style={{transform:"rotate(180deg)"}}/> : <Down src={downBtn}/>}
        </GoAnother>
        <MiniGameContent show={miniGameVisible}>
                <GameList/>
        </MiniGameContent>

        <GoAnother>Ranking</GoAnother>


      </Total>
    );
  }
  
  export default SideBarContents;