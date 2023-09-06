import Test from '../../assets/test.png';
import styled from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';

import AliceCarousel from 'react-alice-carousel';

import HMP1 from "../../assets/hidemeplease/hmp1.png";
import HMP2 from "../../assets/hidemeplease/hmp2.png";
import HMP3 from "../../assets/hidemeplease/hmp3.png";
import HMP4 from "../../assets/hidemeplease/hmp4.png";
import HMP5 from "../../assets/hidemeplease/hmp5.png";
import HMP6 from "../../assets/hidemeplease/hmp6.png";


const Contain = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 620px;
  overflow: hidden;
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
    width: 104px;
    margin: 10px;
  }
`;

const benefits = [
  <ItemsContain>
    <ItemsWrap>
      <img src={HMP1} alt="혜택1" />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <img src={HMP2} alt="혜택2" />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
  <ItemsWrap>
    <img src={HMP3} alt="혜택3" />
  </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <img src={HMP4} alt="혜택4" />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
  <ItemsWrap>
    <img src={HMP5} alt="혜택5" />
  </ItemsWrap>
</ItemsContain>,
<ItemsContain>
  <ItemsWrap>
    <img src={HMP6} alt="혜택6" />
  </ItemsWrap>
</ItemsContain>,
]


const responsive = {
  0: {
    items: 5,
  },
  800: {
    items: 5,
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