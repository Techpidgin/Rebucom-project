import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/img1.png',
    title: 'Real-Time Tracking',
    description:
      "We understand that visibility into your shipments is crucial. That's why we offer real-time tracking, giving you peace of mind and keeping your customers informed.",
  },
  {
    imageUrl: '/grid-icons/img2.png',
    title: 'Global Reach, Local Expertise',
    description:
      "Whether you're shipping locally or internationally, we've got you covered. With our extensive network and local expertise, we ensure your products reach their destination efficiently and on time.",
  },
  {
    imageUrl: '/grid-icons/img3.png',
    title: 'Cost-Efficiency',
    description:
      "Our logistics solutions are not just reliable; they're cost-effective too. We optimize routes, minimize waste, and help you save on shipping costs.",
  },
  {
    imageUrl: '/grid-icons/img4.png',
    title: 'Dedicated Support',
    description:
      "When you partner with us, you're not just a number. Our dedicated support team is here to address your specific needs and provide tailored solutions.",
  },
];

export default function Features() {
  return (
    <Container>
      <h1 style={{ textAlign: 'center', paddingBottom: '40px' }}>What we Offer</h1>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 30rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
