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
  height: 90px;
  width: 360px;
  max-width: 98%;
  background-color: white;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 80px;

  position: relative; /* 위치 설정을 위해 relative 사용 */
  top: -120px; /* 이미지를 50px 높게 위치시킴 */

`;



const HMPIMG = styled.img`
  position: relative;
  height: 70px;
  overflow: hidden;
`;
const INFIMG = styled.img`
  height: 70px;
  overflow: hidden;
  position: relative;
`;
const BDSGIMG = styled.img`
  height: 70px;
  overflow: hidden;
  position: relative;
`;
const RenkIMG = styled.img`
  height: 70px;
  overflow: hidden;
  position: relative;
`;
const BooostIMG = styled.img`
  height: 70px;
  overflow: hidden;
  position: relative;
`;


const ItemsContain = styled.div`
  /* width: 300px; */
  height: 100%;
  overflow: hidden;
`;

const ItemsWrap = styled.div`
  /* width: 100%; */
  overflow: hidden;

  img {
    overflow: hidden;
    width: 100px;
    margin: 10px;
  }
`;



const benefits = [
  <ItemsContain>
    <ItemsWrap>
      <HMPIMG src={HMP} alt="hmp img" />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <INFIMG src={INF} alt="inf img" />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <BDSGIMG src={BSDG} alt="bdsg img" />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <RenkIMG src={Renk} alt="renk img" />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <BooostIMG src={Booost} alt="booost img" />
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
