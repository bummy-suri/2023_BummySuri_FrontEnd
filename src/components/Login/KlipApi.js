import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import QRcode from "qrcode.react";
import axios from "axios";

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

const getKlipAccessUrl = (method, request_key) => {
  if (method === "QR") {
    return `https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
  }
  return `kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
};

const KlipBtn = () => {
  const [qrvalue_auth, setQrvalue_auth] = useState(DEFAULT_QR_CODE);
  const [accessToken, setAccessToken] = useState("");

  const getUserData = async () => {
    try {
      // prepare
      const prepareResponse = await axios.post(A2P_API_PREPARE_URL, {
        bapp: {
          name: APP_NAME,
        },
        type: "auth",
      });
      const { request_key } = prepareResponse.data;

      // request
      if (isMobile) {
        window.location.href = getKlipAccessUrl("deeplink", request_key);
      } else {
        setQrvalue_auth(getKlipAccessUrl("QR", request_key));
      }


      const backendResponse = await axios.post("/user", {
        requestKey: request_key,
      });

      const { accessToken } = backendResponse.data;
      setAccessToken(accessToken);
  
      console.log(accessToken);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // 여기서 액세스 토큰을 활용하여 추가적인 API 요청을 할 수 있습니다
    // 예를 들어, axios를 위한 인증 헤더로 설정할 수 있습니다
    // axios.defaults.headers.common["Authorization"] = `bearer ${accessToken}`;
  }, [accessToken]);

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
