import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import image1 from "../images/about.jpg";
import image2 from "../images/arrow.svg";

export default function AboutPage() {
  return (
    <>
      <Container>
        <Copy>
          <AboutTitle>Our story</AboutTitle>
          <AboutText>
            <p>
              At Oasis, we draw inspiration from the natural wonder of oases -
              lush and serene havens amidst the desert landscape. An oasis is a
              sanctuary, a place where life thrives and flourishes even in the
              harshest conditions. Similarly, we believe that your skincare
              routine should be a sanctuary, a transformative experience that
              brings out the radiance within you.
            </p>
            <p>
              We believe that the key to radiant skincare lies in harnessing the
              nourishing properties of botanical extracts, the replenishing
              effects of hydration, and the rejuvenating power of advanced
              skincare technologies.
            </p>
            <StyledLink>
              <NavLink to="/contact">
                Get in contact with us{" "}
                <img className="arrow" src={image2} alt="arrow" />
              </NavLink>
            </StyledLink>
          </AboutText>
        </Copy>
        <img className="img" src={image1} alt="" />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: calc(var(--header-height) + var(--margin-xlg));
  margin-bottom: var(--margin-xlg);
  padding: 0 var(--margin-xlg);
  display: flex;
  gap: var(--margin-lg);
  justify-content: space-between;
  align-items: center;

  &.img {
    height: 66vh;
    object-fit: cover;
    width: auto;
  }

  @media (max-width: 1040px) {
    & img {
      height: auto;
      width: 50%;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0 var(--margin-md);

    & img {
      width: 100%;
    }
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--margin-sm);
  width: 50%;
  max-width: 36rem;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const AboutTitle = styled.h1`
  font-size: var(--font-size-xxl);
`;

const AboutText = styled.div`
  color: var(--clr-dark-grey);
  font-size: var(--font-size-base);
  p {
    padding-bottom: var(--margin-sm);
  }
`;

const StyledLink = styled.span`
  list-style: none;
  text-transform: uppercase;
  font-size: var(--font-size-base);

  a {
    color: var(--clr-dark-grey);
    display: flex;
    justify-content: flex-start;
    gap: var(--margin-sm);
    margin-top: var(--margin-sm);
    img {
      width: 1.4rem;
    }
    &:hover {
      text-decoration: underline;
      & img {
        transition: 0.2s ease;
        transform: translateX(var(--margin-xxxsm));
      }
    }
  }
`;
