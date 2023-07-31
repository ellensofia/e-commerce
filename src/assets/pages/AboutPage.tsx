import { Container } from "@mui/material";
import { styled } from "styled-components";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

export default function AboutPage() {
  return (
    <>
      <Container>
        <InnerContainer>
          <Copy>
            <AboutTitle>About us</AboutTitle>
            <AboutText>
              At Oasis, we draw inspiration from the natural wonder of oases -
              lush and serene havens amidst the desert landscape. An oasis is a
              sanctuary, a place where life thrives and flourishes even in the
              harshest conditions. Similarly, we believe that your skincare
              routine should be a sanctuary, a transformative experience that
              brings out the radiance within you. Our mission is to provide you
              with exceptional products that nurture your skin and unlock its
              true potential. We have carefully curated a collection of skincare
              essentials, each formulated with premium ingredients and
              innovative techniques. We believe that the key to radiant skincare
              lies in harnessing the nourishing properties of botanical
              extracts, the replenishing effects of hydration, and the
              rejuvenating power of advanced skincare technologies.
            </AboutText>
          </Copy>
          <AboutImg>
            <img src={image2} alt="" />
            <img src={image3} alt="" />
          </AboutImg>
        </InnerContainer>
      </Container>
    </>
  );
}

const InnerContainer = styled.div`
  display: flex;
  margin: 7rem 0 2rem;
  gap: 2rem;

  @media (max-width: 1090px) {
    gap: 0.6rem;
  }

  @media (max-width: 600px) {
    gap: 0.4rem;
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 36rem;
`;

const AboutTitle = styled.h1`
  font-size: var(--font-size-lg);
`;

const AboutText = styled.p`
  color: var(--clr-dark-grey);
  font-size: var(--font-size-base);
`;

const AboutImg = styled.div`
  & img {
    max-width: 400px;
  }
`;
