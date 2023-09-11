import styled, { keyframes } from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';

import AliceCarousel from 'react-alice-carousel';

import Booost from '../../assets/sponsor/booost.jpg';
import BSDG from '../../assets/sponsor/bsdg.jpg';
import HMP from '../../assets/sponsor/hmp.png';
import INF from '../../assets/sponsor/inflab.png';
import Renk from '../../assets/sponsor/renk.jpg';


const Contain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 360px;
  max-width: 98%;
  background-color: white;
  overflow: hidden;
  
  margin-bottom: 80px;

  position: relative; 
  top: -140px; 

`;



const ItemsContain = styled.div`
  /* width: 300px; */
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const ItemsWrap = styled.div`
  /* width: 100%; */
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 100px;

  img {
    overflow: hidden;
    width: 100px;
    margin: 10px;
    position: relative;
  }
`;



const benefits = [
  <ItemsContain>
    <ItemsWrap>
      <img src={HMP} alt="hmp img" />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <img src={INF} alt="inf img" />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <img src={BSDG} alt="bdsg img" />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <img src={Renk} alt="renk img" />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <img src={Booost} alt="booost img" />
    </ItemsWrap>
  </ItemsContain>,
]


const responsive = {
  0: {
    items: 3,
  },
  800: {
    items: 3,
  },
};

function Carousel() {


  return (
    <Contain>
      <AliceCarousel
        infinite={true}
        animationDuration={1500}
        autoPlayInterval={1500}
        disableDotsControls
        disableButtonsControls
        autoPlay={true}
        items={benefits}
        responsive={responsive}
        touchTracking={false}
      />
    </Contain>
  );
}

export default Carousel;
