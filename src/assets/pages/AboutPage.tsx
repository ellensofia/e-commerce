import { styled } from "styled-components";
import image1 from "../images/about.jpg";
import image2 from "../images/cream.jpg";
import image3 from "../images/ingredient2.jpg";

export default function AboutPage() {
  return (
    <>
      <Container>
        <InnerContainer>
          <Top>
            <Copy>
              <AboutTitle>Our story</AboutTitle>
              <AboutText>
                <p>
                  At Oasis, we draw inspiration from the natural wonder of oases
                  - lush and serene havens amidst the desert landscape. An oasis
                  is a sanctuary, a place where life thrives and flourishes even
                  in the harshest conditions. Similarly, we believe that your
                  skincare routine should be a sanctuary, a transformative
                  experience that brings out the radiance within you.
                </p>
                <p>
                  We believe that the key to radiant skincare lies in harnessing
                  the nourishing properties of botanical extracts, the
                  replenishing effects of hydration, and the rejuvenating power
                  of advanced skincare technologies.
                </p>
              </AboutText>
            </Copy>
            <img src={image1} alt="" />
          </Top>
          <Bottom>
            <AboutImgs>
              <img src={image2} alt="" />

              <img src={image3} alt="" />
            </AboutImgs>
            <p>
              We believe that the key to radiant skincare lies in harnessing the
              nourishing properties of botanical extracts, the replenishing
              effects of hydration, and the rejuvenating power of advanced
              skincare technologies.
            </p>
          </Bottom>
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
  margin: calc(var(--margin-xlg) + var(--header-height)) 0;

  @media (max-width: 1090px) {
    gap: 0.6rem;
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const InnerContainer = styled.div`
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: unset;
  }

  @media (max-width: 600px) {
    gap: 0.4rem;
  }
`;

const Top = styled.div`
  display: flex;
  gap: var(--margin-sm);
  padding-bottom: var(--margin-xlg);

  & img {
    width: 50vw;
    max-width: 100%;
    object-fit: cover;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--margin-sm);

  & p {
    font-size: var(--font-size-sm);
    max-width: 621px;
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--margin-sm);
  width: 50vw;
  max-width: 36rem;
`;

const AboutTitle = styled.h1`
  font-size: var(--font-size-xxl);
`;

const AboutText = styled.p`
  color: var(--clr-dark-grey);
  font-size: var(--font-size-base);
  p:first-of-type {
    padding-bottom: var(--margin-sm);
  }
`;

const AboutImgs = styled.div`
  display: flex;
  gap: var(--margin-sm);
  justify-self: flex-end;

  & img {
    width: 300px;
    max-width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 640px) {
    gap: var(--margin-xsm);
  }
`;
