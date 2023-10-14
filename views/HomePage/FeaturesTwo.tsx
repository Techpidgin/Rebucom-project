import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCardTwo from 'components/BasicCardTwo';
import Container from 'components/Container';
import { media } from 'utils/media';
import Image from 'next/image';

const FEATURES = [
  {
    imageUrl: '/empty.png',
    title: '1. What services does Rebucom offer?',
    description:
      'Rebucom offers a wide range of logistics services, including transportation (road, rail, sea, and air), warehousing and distribution, supply chain management, and industry-specific solutions tailored to your needs.',
  },
  {
    imageUrl: '/empty.png',
    title: '2. How can I request a quote for your services?',
    description:
      'Requesting a quote is easy. You can either fill out our online quote request form on our website, contact our sales team directly at [phone number], or send an email to [email address].',
  },
  {
    imageUrl: '/empty.png',
    title: '3. Can you handle international shipments?',
    description:
      'Yes, we specialise in both domestic and international logistics. We have extensive experience in handling customs documentation, international regulations, and coordinating shipments worldwide.',
  },
  {
    imageUrl: '/empty.png',
    title: '4. How do you ensure the safety and security of my goods',
    description:
      'We prioritise the safety and security of your goods. Our facilities are equipped with state-of-the-art security systems, and we work with trusted carriers to ensure safe transportation. We also offer specialised services for fragile or hazardous cargo.',
  },
  {
    imageUrl: '/empty.png',
    title: '5. What technology do you use for tracking and visibility?',
    description:
      "We leverage advanced tracking and visibility technologies that allow you to monitor the status and location of your shipments in real-time. You'll have access to a secure online portal where you can track your inventory and shipments.",
  },
  {
    imageUrl: '/empty.png',
    title: '6. Can you handle temperature-sensitive or perishable goods?',
    description:
      'Absolutely. We have temperature-controlled storage and transportation solutions to ensure the integrity of your temperature-sensitive or perishable goods throughout the supply chain.',
  },
];

export default function FeaturesTwo() {
  return (
    <Container>
      <p style={{ textAlign: 'center', paddingBottom: '40px', fontSize: '2.2rem' }}>Questions You Might Be Wondering About</p>
      <h1 style={{ textAlign: 'center', paddingBottom: '40px', fontSize: '5.2rem' }}>Frequently asked questions</h1>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCardTwo key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;
  justify-content: left;
  text-align: left;
  width: 70%;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
