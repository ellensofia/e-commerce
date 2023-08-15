import { styled } from "styled-components";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

export default function AboutPage() {
  return (
    <>
      <Container>
        <InnerContainer>
          <Copy>
            <AboutTitle>Our story</AboutTitle>
            <AboutText>
              <p>
                At Oasis, we draw inspiration from the natural wonder of oases -
                lush and serene havens amidst the desert landscape. An oasis is
                a sanctuary, a place where life thrives and flourishes even in
                the harshest conditions. Similarly, we believe that your
                skincare routine should be a sanctuary, a transformative
                experience that brings out the radiance within you.
              </p>
              <p>
                We believe that the key to radiant skincare lies in harnessing
                the nourishing properties of botanical extracts, the
                replenishing effects of hydration, and the rejuvenating power of
                advanced skincare technologies.
              </p>
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 1090px) {
    gap: 0.6rem;
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-top: calc(var(--header-height) + var(--margin-xlarge));
  margin-bottom: var(--margin-xlarge);
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: unset;
    margin-top: calc(var(--header-height) + var(--margin-large));
    margin-bottom: var(--margin-large);
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
  font-size: var(--font-size-xxl);
`;

const AboutText = styled.p`
  color: var(--clr-dark-grey);
  font-size: var(--font-size-base);
  p:first-of-type {
    padding-bottom: var(--margin-small);
  }
`;

const AboutImg = styled.div`
  display: flex;
  gap: var(--margin-small);
  & img {
    max-width: 400px;
    object-fit: cover;
  }
`;
