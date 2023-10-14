import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/iconchatIcon.png',
    title: 'Innovative Solutions',
    description:
      'We thrive on innovation, crafting cutting-edge logistics solutions that redefine industry standards, ensuring your business stays ahead',
  },
  {
    imageUrl: '/grid-icons/iconspark.png',
    title: 'Personalized Strategies',
    description:
      'Our strength lies in tailoring approaches to your unique business, providing logistics solutions as distinctive as your brand.',
  },
  {
    imageUrl: '/grid-icons/iconchart.png',
    title: 'Collaborative Partnership',
    description:
      "We're more than a service provider; we're your trusted logistics partner, working closely with you to achieve shared success.",
  },
  {
    imageUrl: '/grid-icons/iconsmile.png',
    title: 'Connect with customers',
    description:
      'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
  },
  {
    imageUrl: '/grid-icons/iconmenu1.png',
    title: 'Cutting-Edge Technology',
    description: 'Leveraging the latest tech, we optimize your supply chain, giving you a competitive edge in a rapidly evolving industry.',
  },
  {
    imageUrl: '/grid-icons/iconlove.png',
    title: 'Data-Driven Decisions',
    description:
      'We empower your decisions with actionable insights from comprehensive data analysis, guiding you toward efficiency and growth.',
  },
];

export default function Features2() {
  return (
    <Container>
      <h1 style={{ textAlign: 'center', marginTop: '40px' }}>How we work at Rebucom</h1>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>Our shared values keep us connected and guide us as one team.</p>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
