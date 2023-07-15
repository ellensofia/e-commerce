import { useEffect, useState } from "react";
import styled from "styled-components";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

const images = [image1, image2, image3];

export default function Carousel() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [delay, setDelay] = useState(8000);
  const [carouselImages, setCarouselImages] = useState(images);

  const navigate = (direction: string) => {
    if (direction === "left") {
      if (currentItemIndex === 0) {
        const newImageIndex = currentItemIndex % images.length;
        const newImage = images[newImageIndex];
        setCarouselImages((prevImages) => [...prevImages, newImage]);
        setCurrentItemIndex(currentItemIndex - 1);
      } else {
        setCurrentItemIndex(currentItemIndex - 1);
      }
    } else if (direction === "right") {
      const newImageIndex = currentItemIndex % images.length;
      const newImage = images[newImageIndex];
      setCarouselImages((prevImages) => [...prevImages, newImage]);
      setCurrentItemIndex(currentItemIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newImageIndex = currentItemIndex % images.length;
      const newImage = images[newImageIndex];
      setCarouselImages((prevImages) => [...prevImages, newImage]);
      setCurrentItemIndex(currentItemIndex + 1);
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [currentItemIndex, delay, carouselImages]);

  return (
    <>
      <OuterBox>
        <InnerContainer>
          {carouselImages.map((image, index) => (
            <StyledCarouselItem key={index}>
              <div
                key={index}
                style={{
                  transform: `translateX(${(index - currentItemIndex) * 100}%)`,
                  transition: "transform 1.6s ease-in-out",
                }}
              >
                <StyledImage src={image} alt={image} key={index} />
                <TextBox>
                  <h3>Special offer</h3>
                  <p>50% off</p>
                </TextBox>
              </div>
            </StyledCarouselItem>
          ))}
        </InnerContainer>
        <Navigations>
          <StyledButton onClick={() => navigate("left")}></StyledButton>
          <StyledButton onClick={() => navigate("")}></StyledButton>
          <StyledButton onClick={() => navigate("right")}></StyledButton>
        </Navigations>
      </OuterBox>
    </>
  );
}

const OuterBox = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 90vw;
  }
`;

const TextBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.6rem;
  color: #fff;
  font-weight: 400;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    width: 90vw;
    font-size: 2rem;
  }
`;

const InnerContainer = styled.div`
  height: 80vh;
  width: 100%;
`;

const StyledCarouselItem = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100vw;
  object-fit: cover;
  position: relative;
  max-height: 100%;
  height: 80vh;
  @media (max-width: 600px) {
    width: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #e9cccc50;
  }
`;

const Navigations = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
  background-color: #e9cccc6b;
  padding: 1rem 0;
`;

const StyledButton = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  background-color: #ffffffa4;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #ffffffbd;
  }
`;
