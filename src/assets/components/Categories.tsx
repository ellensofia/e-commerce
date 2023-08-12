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
  margin: 2rem 1rem;
  gap: 1rem;
  align-items: center;
`;

const InnerBox = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr auto;
  margin: 0 auto;
  gap: 1rem;

  @media (max-width: 900px) {
    gap: 0.6rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
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
  background-color: #18181845;
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
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  @media (max-width: 700px) {
    font-size: var(--font-size-sm);
  }
`;

const Title = styled.h3`
  color: #1b1b1b;
  font-size: var(--font-size-lg);
  margin-bottom: 1rem;
`;

const Link = styled.a`
  color: #1b1b1b;
  font-size: var(--font-size-base);
  width: min-content;
  text-transform: uppercase;
  display: flex;
  gap: 1.5rem;

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
    gap: 0.5rem;
    font-size: var(--font-size-sm);
  }
`;
