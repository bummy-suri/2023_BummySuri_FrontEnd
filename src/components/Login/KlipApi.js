import axios from "axios";

//Klip API 코드

const A2P_API_PREPARE_URL = "https://a2a-api.klipwallet.com/v2/a2a/prepare";
const APP_NAME = "BUMMY & SURI";
const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(window.navigator.userAgent);

//QR 링크
const getKlipAccessUrl = (method, request_key) => {
    if (method === "QR") {
      return `https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
    }
    return `kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
  };
  


//지갑 주소 api
export const getAddress = (setQrvalue, callback) => {
    
    //Prepare
    console.log("Is Mobile? "+isMobile)
    axios
      .post(A2P_API_PREPARE_URL, {
        bapp: {
          name: APP_NAME,
        },
        type: "auth",
      })
      .then((response) => {
        const { request_key } = response.data;
        
        //Request
        if (isMobile) {
          window.location.href = getKlipAccessUrl("deeplink", request_key);
        } else {
          setQrvalue(getKlipAccessUrl("QR", request_key));
        } 
        let timerId = setInterval(() => {
          
          //Result 단계
          axios
            .get(
              `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`
            )
            .then((res) => {
              if (res.data.result) {
                console.log(`[Result] ${JSON.stringify(res.data.result)}`);
                callback(res.data.result.klaytn_address);
                clearInterval(timerId);
                setQrvalue("DEFAULT");
              }
            });
        }, 1000);
      });
  };
  
    export {A2P_API_PREPARE_URL,APP_NAME};