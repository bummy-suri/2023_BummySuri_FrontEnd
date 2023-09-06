import React, { useState, useRef } from "react";
import styled from 'styled-components';
import QRcode from "qrcode.react";
import axios from "axios";
import { API } from '../../config';

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
    width: 80vw;
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

const KlipApi = () => {
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
        console.log(response.data);
        localStorage.setItem("requestKey", request_key);

        // Request
        if (isMobile) {
          window.location.href = getKlipAccessUrl("deeplink", request_key);
        } else {
          setQrvalue_auth(getKlipAccessUrl("QR", request_key));
        }

        let timerId = setInterval(() => {
          axios
            .get(
              `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`
            )
            .then((res) => {
              if (res.data.result) {
                console.log(res.data);
                sendRequestKey(request_key);
                clearInterval(timerId);
              }
            });
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const sendRequestKey = (request_key) => {
    axios
      .post(`${API}/users`, {
        requestKey: request_key,
      })
      .then(response => {
        const { accessToken } = response.data;
        localStorage.setItem("bummySuri", accessToken);
        console.log("accessToken", accessToken);
        let timerId = setInterval(() => {
          window.location.href = '/';
          clearInterval(timerId);
        }, 100);
      })
      .catch((error) => {
        if (error.response) {
          console.error(error.response.status, error.response.data);
        } else {
          console.error(error.message);
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

export default KlipApi;
