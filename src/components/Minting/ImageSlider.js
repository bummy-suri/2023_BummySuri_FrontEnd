import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';


const SliderContainer = styled.div`
  overflow: hidden;
  width: 100vw;
  position: relative;
`;

const slideAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const SlidesWrapper = styled.div`
  display: flex;
  animation: ${slideAnimation} 10s linear infinite;
`;

const Slide = styled.img`
  width: 100%;
  height: auto;
`;

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <SliderContainer>
      <SlidesWrapper
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
        }}
      >
        {images.map((image, index) => (
          <Slide key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </SlidesWrapper>
    </SliderContainer>
  );
};

export default ImageSlider;