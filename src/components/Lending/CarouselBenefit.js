import Test from '../../assets/test.png';
import styled from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';

import AliceCarousel from 'react-alice-carousel';


const Contain = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 210px;
  overflow: hidden;
  @media (min-width: 800px) {
    width: 600px;
  }
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
    width: 190px;
    margin: 10px;
  }
  @media (min-width: 800px) {
    img{
      width: 200px;
      margin-left: 200px;
      margin-right: 200px;
    }
  }
`;

const benefits = [
  <ItemsContain>
    <ItemsWrap>
      <img src={Test} alt="혜택1" />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <img src={Test} alt="혜택2" />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
  <ItemsWrap>
    <img src={Test} alt="혜택3" />
  </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <img src={Test} alt="혜택4" />
    </ItemsWrap>
  </ItemsContain>,
]


const responsive = {
  0: {
    items: 1,
  },
  800: {
    items: 1,
  },
};

function CarouselBenefit() {
  

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

export default CarouselBenefit;