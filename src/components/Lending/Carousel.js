import Bumy from '../../assets/bummy.png';
import Suri from '../../assets/suri.png';

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
    width: 750px;
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
      width: 250px;
    }
  }
`;


const items = [
  <ItemsContain>
    <ItemsWrap>
      <img src={Suri} alt="수리" />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <img src={Bumy} alt="버미" />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
  <ItemsWrap>
    <img src={Suri} alt="수리" />
  </ItemsWrap>
</ItemsContain>,
<ItemsContain>
    <ItemsWrap>
      <img src={Bumy} alt="버미" />
    </ItemsWrap>
</ItemsContain>,
];


const responsive = {
  0: {
    items: 1,
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
        items={items}
        responsive={responsive}
        touchTracking={false}
        
      />
    </Contain>
  );
}

export default Carousel;