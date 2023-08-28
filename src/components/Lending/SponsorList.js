import styled from 'styled-components';
import Partner01 from '../../assets/sponsor/partner01.png';
import Partner02 from '../../assets/sponsor/partner02.png';
import Partner03 from '../../assets/sponsor/partner03.png';
import Partner04 from '../../assets/sponsor/partner04.png';
import Partner05 from '../../assets/sponsor/partner05.png';
import Partner06 from '../../assets/sponsor/partner06.png';
import Management01 from '../../assets/sponsor/management01.png';
import Management02 from '../../assets/sponsor/management02.png';


const SponTitle = styled.div`
  p {
    font-size: 20px;
    color: white;
    font-weight: 800;
    letter-spacing: 2px;
    margin-top: 50px;
  }
  text-align: center;
  margin-bottom: 10px;
  margin-top: 20px;
  @media (min-width: 768px) {
    p {
      font-size: 29px;
      font-weight: 800;
      letter-spacing: 3px;
      margin-top: 90px;
    }
  }
  @media (max-width: 300px) {
    p {
      font-size: 18px;
      font-weight: 800;
      margin-top: 90px;
    }
  }
`;
const SponImgBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;


 const SponImg = styled.div``;

const Sponsor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  margin: 0 auto;
  /* margin-right: 30px; */
  margin-bottom: 40px;
  width: 300px;
  @media (min-width: 768px) {
    height: 600px;
    margin-bottom: 160px;
  }
  @media (max-width: 300px) {
    width: 210px;
  }
`;

const SponImgBox2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PImg = styled.img`
  width: 100px;
  margin: 5px;
  border-radius: 12px;
  @media (min-width: 768px) {
    width: 120px;
    margin: 16px;
  }
  @media (max-width: 300px) {
    width: 60px;
  }
`;

const MImg = styled.img`
  width: 120px;
  @media (min-width: 768px) {
    width: 210px;
    margin: 0 18px;
  }
  @media (max-width: 300px) {
    width: 100px;
  }
`;



const SponsorList = () => {
    return (
        <Sponsor>
            <SponTitle>
              <p>Management</p>
            </SponTitle>
            <SponImgBox>
              <SponImg>
                <MImg src={Management01}alt="img" />
              </SponImg>
              <SponImg>
                <MImg src={Management02} alt="img" />
              </SponImg>
            </SponImgBox>
            <SponTitle>
              <p>Partner</p>
            </SponTitle>
            <SponImgBox>
              <SponImg>
                <PImg src={Partner02}alt="img" />
              </SponImg>
              <SponImg>
                <PImg src={Partner06} alt="img" />
              </SponImg>
              <SponImg>
                <PImg src={Partner03} alt="img" />
              </SponImg>
            </SponImgBox>

            <SponImgBox2>
              <SponImg>
                <PImg src={Partner04} alt="img" />
              </SponImg>
              <SponImg>
                <PImg src={Partner05} alt="img" />
              </SponImg>
            </SponImgBox2>
          </Sponsor>
    );
}

export default SponsorList;