import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import BasicSectionTwo from 'components/BasicSectionTwo';
import BasicSectionThree from 'components/BasicSectionThree';
import BasicSectionFour from 'components/BasicSectionFour';
import BasicSectionFive from 'components/BasicSectionFive';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesTwo from 'views/HomePage/FeaturesTwo';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';
import { media } from 'utils/media';
import Image from 'next/image';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />

          <BasicSection imageUrl="/Interaction.png" title="How much we care." overTitle="How much we care">
            <p>
              At Rebucom, customer satisfaction is our goal. That’s why we take customer service seriously. As a critical part of our
              business, we are committed to providing you with the best possible experience, and we go above and beyond to ensure that your
              needs are met.
            </p>
          </BasicSection>
          <Features />
          <BasicSectionTwo imageUrl="/frame.png" title="Set up your consumer chain with ease" overTitle="Our Solution">
            <p>
              At Rebucom, customer satisfaction is our goal. That’s why we take customer service seriously. As a critical part of our
              business, we are committed to providing you with the best possible experience, and we go above and beyond to ensure that your
              needs are met.
            </p>
            <ul>
              <li>Automated order entry & real-time tracking</li>
              <br></br>
              <li>optimization, and support for multiple locations</li>
              <br></br>
              <li>Effortless setup, convenience, reliability.</li>
              <br></br>
            </ul>
            <BtnGroup>
              <button>Get Started</button>
            </BtnGroup>
          </BasicSectionTwo>

          <div style={{ backgroundColor: '#fff4ed' }}>
            <BasicSection imageUrl="/img6.png" title="Trusted by the world's best companies" overTitle="Our Solution" reversed>
              <p>
                Rebucom's commitment to excellence earns trust from global leaders, delivering efficiency, reliability, and savings. Join us
                to redefine logistics.
              </p>
            </BasicSection>
          </div>

          <h1 style={{ textAlign: 'center', paddingBottom: '0px', fontSize: '30px' }}>Join a network of providers</h1>
          <p style={{ textAlign: 'center', paddingBottom: '0px', marginTop: '0px', fontSize: '18px' }}>
            {' '}
            Revolutionizing Business Operations with Our Comprehensive Suite of Cutting-Edge SaaS Solutions
          </p>
          <BasicSectionThree imageUrl="/dashboard.png">
            <ul>
              <h3>Order Tracking</h3>
              <li>Automated order entry & real-time tracking</li>
              <br></br>
              <h3>24/7 Services</h3>
              <li>optimization, and support for multiple locations</li>
              <br></br>
              <h3>International Delivery</h3>
              <li>Effortless setup, convenience, reliability.</li>
              <br></br>
            </ul>
          </BasicSectionThree>

          <BasicSectionFour imageUrl="/Group.png" title="Get updates on the fly">
            <p>Stay informed with real-time tracking, ensuring precision and control for your logistics needs.</p>
            <ul>
              <li>Instant Tracking Updates</li>
              <br></br>
              <li>Effortless Monitoring</li>
              <br></br>
              <li>Precision Control</li>
              <br></br>
            </ul>
          </BasicSectionFour>
          <p style={{ textAlign: 'center', paddingBottom: '0px', marginTop: '20px', fontSize: '18px' }}>
            2,157 individuals have praised Rebucom.
          </p>
          <Testimonials />
          <FeaturesTwo />
          <BtnGroupTwo>
            <button>Contact Us</button>
          </BtnGroupTwo>
        </WhiteBackgroundContainer>
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
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
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

const BtnGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    margin-right: 2rem;
    background-color: #d10121;
    border-radius: 10px;
    border: none;
    width: 150px;
    height: 50px;
    color: #ffff;
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

const BtnGroupTwo = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    margin: 0 auto;

    background-color: #d10121;
    border-radius: 10px;
    border: none;
    width: 150px;
    height: 50px;
    color: #ffff;
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

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
