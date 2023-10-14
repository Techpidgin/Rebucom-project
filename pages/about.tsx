import styled from 'styled-components';
import Page from 'components/Page';
import FaqSection from 'views/PricingPage/FaqSection';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';
import BasicSectionFive from 'components/BasicSectionFive';
import BasicSectionSix from 'components/BasicSectionSix';
import BasicSectionAbout from 'components/BasicSectionAbout';
import Features2 from 'views/HomePage/Features2';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import Separator from 'components/Separator';
import { media } from 'utils/media';
import Image from 'next/image';

export default function PricingPage() {
  return (
    <Wrapper>
      <BasicSectionAbout
       
        title="Rebucom is your go-to courier and express delivery partner across Africa."
        overTitle="About Us"
      >
        <p>
          We strive to deliver excellence in logistics and software solutions to solve customer needs. Our services cut across multiple
          verticals including banking, consumer goods, and professional services. We pride ourselves in Efficiency, Reliability, and Speed,
          to meet our customer’s ever growing business demands.
        </p>
      </BasicSectionAbout>
      <Separator />

      
      <BasicSectionSix
        imageUrl="/groupWork.png"
        title="We’re only just getting started on our journey"
        overTitle="Empower Growth, Accelerate Success"
      >
        <div className="image">
          <img src="/content1.png" title="We’re only just getting started on our journey" />
        </div>
      </BasicSectionSix>

      <Features2 />
      <Separator />
      <p style={{ textAlign: 'center' }}>Our work culture</p>
      <SectionTitle>Hear from our team</SectionTitle>
      <p style={{ textAlign: 'center', paddingBottom: '30px', fontSize: '18px' }}>
        Our shared values keep us connected and guide us as one team.
      </p>

      <VideoLayer>
        <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" />
      </VideoLayer>

      <div style={{ backgroundColor: '#D10121', zIndex: '0' }}>
        <VectorImg>
          <Image src="/vector.svg" width={645} height={367} alt="Picture of the author" />
        </VectorImg>
        <BasicSectionFive imageUrl="/app.png" title="Download our Rebucom Mobile app for free!" overTitle="Coming Soon" reversed>
          <BtnGroupThree>
            <button>Join Waitlist</button>
          </BtnGroupThree>
        </BasicSectionFive>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const VideoLayer = styled.div`
  & > :first-child {
    width: 70%;
    margin: 0 auto 10rem auto;
  }
`;
const VectorImg = styled.div`
  height: 20px;

  & > :first-child {
    position: absolute;
    z-index: 1;
    top: 1px;
    width: 70%;
  }
`;

const BtnGroupThree = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    background-color: #101828;
    border-radius: 10px;
    border: none;
    width: 150px;
    height: 50px;
    color: #fff;
    opacity: 1;
    font-size: 1.8rem;
  }

  ${media('<=tablet')} {
    & > * {
      width: 100%;
    }

    & > * {
      margin-bottom: 2rem;
      margin-right: 0rem;
    }
  }
`;
