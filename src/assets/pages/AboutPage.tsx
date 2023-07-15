import { Container } from "@mui/material";
import { styled } from "styled-components";

export default function AboutPage() {
  return (
    <>
      <Container>
        <InnerContainer>
          <AboutTitle>About us</AboutTitle>
          <AboutText>
            At Oasis, we draw inspiration from the natural wonder of oases -
            lush and serene havens amidst the desert landscape. An oasis is a
            sanctuary, a place where life thrives and flourishes even in the
            harshest conditions. Similarly, we believe that your skincare
            routine should be a sanctuary, a transformative experience that
            brings out the radiance within you. Our mission is to provide you
            with exceptional products that nurture your skin and unlock its true
            potential. We have carefully curated a collection of skincare
            essentials, each formulated with premium ingredients and innovative
            techniques. Just as an oasis offers respite and renewal, our
            products are designed to pamper your skin and deliver visible
            results. Like the creation of an oasis, where the convergence of
            natural elements gives birth to a lush and vibrant ecosystem, we
            have harnessed the power of nature and science to create skincare
            formulations that truly rejuvenate your skin. We believe that the
            key to radiant skincare lies in harnessing the nourishing properties
            of botanical extracts, the replenishing effects of hydration, and
            the rejuvenating power of advanced skincare technologies.
          </AboutText>
        </InnerContainer>
      </Container>
    </>
  );
}

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7rem 0 2rem;
  gap: 1rem;
  justify-content: center;
  /* color: #505050; */
  @media (max-width: 1090px) {
    font-size: 0.8rem;
    gap: 0.6rem;
  }

  @media (max-width: 600px) {
    gap: 0.4rem;
  }
`;

const AboutText = styled.div`
  display: flex;
  max-width: 36rem;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  color: #505050;
  @media (max-width: 1090px) {
    font-size: 0.8rem;
    gap: 0.6rem;
  }

  @media (max-width: 600px) {
    gap: 0.4rem;
  }
`;
const AboutTitle = styled.h1`
  display: flex;
  max-width: 36rem;
  font-size: 2rem;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  color: #505050;
  @media (max-width: 1090px) {
    font-size: 0.8rem;
    gap: 0.6rem;
  }

  @media (max-width: 600px) {
    gap: 0.4rem;
  }
`;
