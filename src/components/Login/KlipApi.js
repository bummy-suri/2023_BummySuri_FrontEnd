import React, { useState, useRef } from "react";

import styled from 'styled-components';
import QRcode from "qrcode.react";
import axios from "axios";

import { prepare, request } from 'klip-sdk';
const SUCCESSLINK = '/';
const FAILLINK = '/login';

const Klipbtn = styled.button`
  width: 334px;
  height: 50px;
  background-color: #7000FF;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 56px;
  margin-bottom: 29px;
  color: #FFFFFF;

  @media (max-width: 350px) {
    width: 230px;
  }

  @media (max-width: 235px) {
    padding-left: 30px;
    padding-right: 30px;
    width: 100%;
    font-size: 13px;
  }

`;

const QRContainer = styled.div`
  padding: 10px;
  margin: 30px;
`;

const DEFAULT_QR_CODE = "DEFAULT";
const A2P_API_PREPARE_URL = "https://a2a-api.klipwallet.com/v2/a2a/prepare";
const APP_NAME = "BUMMY & SURI";
const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(window.navigator.userAgent);
const SendRequestKey_URL = "https://api.dev.bummysuri.com/";

const getKlipAccessUrl = (method, request_key) => {
  if (method === "QR") {
      return `https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
    }
    return `kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
  };

const KlipBtn = () => {
  const [qrvalue_auth, setQrvalue_auth] = useState(DEFAULT_QR_CODE);
  const walletAddress = useRef('');

  const getUserData = () => {

    // Prepare
    axios
      .post(A2P_API_PREPARE_URL, {
        bapp: {
          name: APP_NAME,
        },
        type: "auth",
      })
      .then((response) => {
        const { request_key } = response.data;
        console.log(request_key);
        sessionStorage.setItem("requestKey", request_key);

        // Request
        if (isMobile) {
          window.location.href = getKlipAccessUrl("deeplink", request_key);
        } else {
          setQrvalue_auth(getKlipAccessUrl("QR", request_key));
        }
        
        
        let timerId = setInterval(() => {
          sendRequestKey(request_key);
          console.log(response.data)
          clearInterval(timerId);
        }, 10000);
        })
        .catch((error) => {
          console.error(error);
        });
  };


  const sendRequestKey = (request_key) => {
    axios
      .post('https://api.dev.bummysuri.com/users', {
        requestKey: request_key,
      })
      .then(response => {
        
        const { accessToken } = response.data;
        sessionStorage.setItem("accessToken", accessToken);
        console.log("accessToken", accessToken);
        let timerId = setInterval(() => {
        window.location.href = "/";
        clearInterval(timerId);
      }, 1000);
      })
      .catch((error) => {
        if (error.response) {
          console.error("응답 오류:", error.response.status, error.response.data);
        } else {
          console.error("요청 오류:", error.message);
        }
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
};

export default KlipBtn;