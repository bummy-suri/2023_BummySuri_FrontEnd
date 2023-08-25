import React, {useState} from "react";
import styled from 'styled-components';
import * as KlipAPI from "./KlipApi";
import QRcode from "qrcode.react";

import { useUserContext } from "./UserAddress";



const Klipbtn = styled.button`
width: 236px;
height: 50px;
background-color: #C565E7;
font-size: 20px;
border: none;
border-radius: 10px;
cursor: pointer;
margin-top: 56px;
margin-bottom: 29px;
color: #FFFFFF;
`
const DEFAULT_QR_CODE = "DEFAULT";
const DEFAULT_ADDRESS = "0x00000000000000000000000000000";
const DEFAULT_RESULT = "DEFAULT";

const QRContainer = styled.div`
  padding: 10px;
  margin: 30px;
`;

//Klip 연동하기 보라색 버튼
const KlipBtn = ()=> {
    const [qrvalue_auth, setQrvalue_auth] = useState(DEFAULT_QR_CODE);
    const [myAddress, setMyAddress] = useState(DEFAULT_ADDRESS);
    const { setUserAddress } = useUserContext();
    

    const getUserData = () => {
        KlipAPI.getAddress(setQrvalue_auth, async (address) => {
          setMyAddress(address);
          setUserAddress(address); // 컨텍스트에서 사용자 주소 업데이트
        });
      };

    return (
      <div>
        <Klipbtn onClick={getUserData}>Klip 연동하기</Klipbtn>
        <QRContainer>
          {qrvalue_auth !== DEFAULT_QR_CODE && <QRcode value={qrvalue_auth} />}
        </QRContainer>
      </div>
    );
  }
  
  export default KlipBtn;