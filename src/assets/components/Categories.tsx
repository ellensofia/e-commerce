import styled from "styled-components";
import arrow from "../images/arrow.svg";
import img1 from "../images/category-1.jpg";
import img2 from "../images/category-2.jpg";
import img3 from "../images/category-3.jpg";
import img4 from "../images/category-4.jpg";
import img5 from "../images/category-5.jpg";

export default function Categories() {
  return (
    <OuterBox>
      <div>
        <Title>Shop by category</Title>
        <InnerBox>
          <ImageContainer>
            <img src={img1} alt="Best sellers" />
            <Text>New in</Text>
            <Overlay></Overlay>
          </ImageContainer>
          <ImageContainer>
            <img src={img2} alt="Eye care" />
            <Text>Best sellers</Text>
            <Overlay></Overlay>
          </ImageContainer>
          <ImageContainer>
            <img src={img3} alt="Eye care" />
            <Text>Sensitive skin</Text>
            <Overlay></Overlay>
          </ImageContainer>
          <ImageContainer>
            <img src={img4} alt="Sensitive skin" />
            <Text>Body care</Text>
            <Overlay></Overlay>
          </ImageContainer>
          <ImageContainer>
            <img src={img5} alt="Eye care" />
            <Text>Cleansers</Text>
            <Overlay></Overlay>
          </ImageContainer>
          <Link>
            <span>Load all categories</span>
            <img src={arrow} alt="arrow icon" />
          </Link>
        </InnerBox>
      </div>
    </OuterBox>
  );
}

const OuterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: var(--margin-md) var(--margin-sm);
  gap: var(--margin-sm);
  align-items: center;
  padding: 0 var(--margin-md);
  @media (max-width: 900px) {
    padding: 0;
    margin: var(--margin-lg) var(--margin-sm);
  }
`;

const InnerBox = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr auto;
  margin: 0 auto;
  gap: var(--margin-sm);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--margin-xsm);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--margin-xxsm);
  }
`;

const ImageContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
`;
const Overlay = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000083;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

const Text = styled.p`
  color: white;
  font-size: var(--font-size-base);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  font-family: var(--font-primary);
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  @media (max-width: 700px) {
    font-size: var(--font-size-sm);
  }
`;

const Title = styled.h3`
  color: #1b1b1b;
  font-size: var(--font-size-lg);
  margin-bottom: var(--margin-sm);
`;

const Link = styled.a`
  color: #1b1b1b;
  font-size: var(--font-size-base);
  width: min-content;
  text-transform: uppercase;
  display: flex;
  gap: var(--margin-md);

  & img {
    width: 1.5rem;
  }

  &:hover {
    text-decoration: underline;
    color: var(--clr-black);
    & img {
      transition: 0.2s ease;
      transform: translateX(0.5rem);
    }
  }

  @media (max-width: 700px) {
    gap: var(--margin-xxsm);
    font-size: var(--font-size-sm);
  }
`;
