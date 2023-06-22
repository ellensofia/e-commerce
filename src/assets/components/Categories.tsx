import styled from "styled-components";
import img1 from "../images/cateory-img1.jpg";
import img2 from "../images/cateory-img2.jpg";
import img3 from "../images/cateory-img3.jpg";
import img4 from "../images/cateory-img4.jpg";

export default function Categories() {
  return (
    <OuterBox>
      <div>
        <Title>Categories</Title>
        <InnerBox>
          <ImageContainer>
            <img src={img1} alt="Best sellers" />
            <Text>Best sellers</Text>
            <Overlay></Overlay>
          </ImageContainer>
          <ImageContainer>
            <img src={img2} alt="Sensitive skin" />
            <Text>Sensitive skin</Text>
            <Overlay></Overlay>
          </ImageContainer>
          <ImageContainer>
            <img src={img3} alt="Best sellers" />
            <Text>Best sellers</Text>
            <Overlay></Overlay>
          </ImageContainer>
          <ImageContainer>
            <img src={img4} alt="Eye care" />
            <Text>Eye care</Text>
            <Overlay></Overlay>
          </ImageContainer>
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
  display: flex;
  margin: 0 auto;
  gap: 1rem;

  img {
    flex: 1;
    width: 100%;
    height: auto;

    &:hover {
      background-color: #18181845;
      cursor: pointer;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    height: auto;
  }
`;
const Overlay = styled.div`
  position: absolute;
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
  font-size: 1.2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  white-space: nowrap;
`;

const Title = styled.h3`
  color: #1b1b1b;
  font-size: 2rem;
  margin-bottom: 1rem;
`;
