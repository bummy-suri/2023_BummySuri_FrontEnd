import React from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    color: black;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    padding: 0 59px;
    font-size: 25px;
`;

const Popup = () => {

    return (
        <PopupContainer>
            <ModalContent>
                <div style={{marginTop:"97px", color: "#EBBC18", fontSize:"40px", fontWeight:"bold"}}>승리!</div>
                <div style={{marginTop:"32px", marginBottom:"98px"}}>축하합니다!<br/>100P를 얻었습니다!</div>
            </ModalContent>
        </PopupContainer>
    );
};

export default Popup;
