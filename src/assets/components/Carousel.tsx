import { useEffect, useState } from "react";
import styled from "styled-components";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

const images = [image1, image2, image3];

interface StyledButtonProps {
  isActive: boolean;
}

interface StyledItemProps {
  zIndex: number;
  isActive: boolean;
}

export default function Carousel() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [delay, setDelay] = useState(8000);
  let interval: ReturnType<typeof setInterval>;

  const navigate = (direction: string) => {
    // Stop the interval
    clearInterval(interval);

    if (direction === "left") {
      setCurrentItemIndex(0);
    } else if (direction === "middle") {
      setCurrentItemIndex(1);
    } else if (direction === "right") {
      setCurrentItemIndex(2);
    }
    // Restart the interval after a short delay (e.g., 2 seconds)
    setTimeout(() => {
      interval = setInterval(() => {
        setCurrentItemIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, delay);
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay]);

  return (
    <>
      <OuterBox>
        <InnerContainer>
          {images.map((image, index) => (
            <StyledCarouselItem
              key={index}
              zIndex={currentItemIndex === index ? 1 : 0}
              isActive={currentItemIndex === index}
            >
              <StyledImage src={image} alt={image} key={index} />
              <TextBox>
                <h3>Special offer</h3>
                <p>50% off</p>
              </TextBox>
            </StyledCarouselItem>
          ))}
        </InnerContainer>
        <Navigations>
          <StyledButton
            isActive={currentItemIndex === 0}
            onClick={() => navigate("left")}
          ></StyledButton>
          <StyledButton
            isActive={currentItemIndex === 1}
            onClick={() => navigate("middle")}
          ></StyledButton>
          <StyledButton
            isActive={currentItemIndex === 2}
            onClick={() => navigate("right")}
          ></StyledButton>
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
  font-size: var(--font-size-xl);
  color: var(--clr-white);
  font-weight: 400;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    width: 90vw;
  }
`;

const InnerContainer = styled.div`
  height: 80vh;
  width: 100%;
`;

const StyledCarouselItem = styled.div<StyledItemProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  transition: opacity 0.5s ease-in-out;
  z-index: ${({ zIndex }) => zIndex};
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
  padding: 1rem 0;
`;

const StyledButton = styled.button<StyledButtonProps>`
  width: 2.4rem;
  height: 0.8rem;
  padding: 0;
  background-color: #ffffffa4;
  background-color: ${({ isActive }) => (isActive ? "#2a2a2a" : "#ffffffa4")};
  border-radius: 0;
  border: 1px solid #2a2a2a;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#2a2a2a" : "#ffffffbd")};
  }
`;
