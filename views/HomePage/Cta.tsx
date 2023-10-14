import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroupTwo from 'components/ButtonGroupTwo';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';
import Image from 'next/image';

export default function Cta() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <Image src="/app.png" width={645} height={367} alt="Picture of the author" />
          <NewDiv>
            <OverTitle>Coming Soon</OverTitle>

            <SectionTitle>Download our Rebucom Mobile app for free!</SectionTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae accusamus deleniti nihil quas tempora numquam, vitae
              culpa.
            </Description>
            <ButtonGroupTwo>
              <NextLink href="#early-access" passHref>
                <Button>Join Waitlsit</Button>
              </NextLink>
            </ButtonGroupTwo>
          </NewDiv>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const NewDiv = styled.div`
  z-index: 2;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;
  z-index: 0;

  & > :first-child {
    margin-top: 4rem;
    position: absolute;
    top: 250px;
    z-index: 1;
  }
  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: #d10121;
`;
