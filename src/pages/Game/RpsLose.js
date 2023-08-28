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
                <div style={{marginTop:"97px", color: "#C2C2C2", fontSize:"40px", fontWeight:"bold"}}>패배</div>
                <div style={{marginTop:"32px", marginBottom:"98px"}}>안타깝습니다...<br/>한 번 더 도전해보세요!</div>
            </ModalContent>
        </PopupContainer>
    );
};

export default Popup;
