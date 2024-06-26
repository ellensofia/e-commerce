import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import image1Desktop from "../images/image1-desktop.jpg";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

interface StyledButtonProps {
  $isActive: boolean;
}

interface StyledItemProps {
  zindex: string;
  $isActive: boolean;
}

export default function HeroCarousel() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [delay] = useState(6000);
  let interval: ReturnType<typeof setInterval>;

  function getImages() {
    return window.innerWidth > 900
      ? [image1Desktop, image2, image3]
      : [image1, image2, image3];
  }

  const navigate = (direction: string) => {
    if (direction === "left") {
      setCurrentItemIndex(0);
    } else if (direction === "middle") {
      setCurrentItemIndex(1);
    } else if (direction === "right") {
      setCurrentItemIndex(2);
    }
    clearInterval(interval);
  };

  useEffect(() => {
    const updateImgSizes = () => {
      if (window.innerWidth > 900) {
        getImages();
      }
    };

    window.addEventListener("resize", updateImgSizes);
    return window.removeEventListener("resize", updateImgSizes);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % getImages().length);
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <OuterBox>
        <InnerContainer>
          {getImages().map((image, index) => (
            <StyledCarouselItem
              key={index}
              zindex={currentItemIndex === index ? "1" : "0"}
              $isActive={currentItemIndex === index}
            >
              <StyledImage src={image} alt={image} key={index} />
              <TextBox>
                <h2>Special offer</h2>
                <p>50% off selected items</p>
                <SaleButton to="/sale">Go to sale</SaleButton>
              </TextBox>
            </StyledCarouselItem>
          ))}
        </InnerContainer>
        <Navigations>
          <StyledButton
            $isActive={currentItemIndex === 0}
            onClick={() => {
              navigate("left");
            }}
          />
          <StyledButton
            $isActive={currentItemIndex === 1}
            onClick={() => navigate("middle")}
          />
          <StyledButton
            $isActive={currentItemIndex === 2}
            onClick={() => navigate("right")}
          />
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
  padding-left: 10vw;

  & p {
    font-size: var(--font-size-md);
  }
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
  opacity: ${({ $isActive }) => ($isActive ? "1" : "0")};
  transition: opacity 0.6s ease-in-out;
  z-index: ${({ zindex }) => zindex};
`;

const StyledImage = styled.img`
  width: 100vw;
  object-fit: cover;
  position: relative;
  overflow: hidden;
  max-height: 100%;
  height: 80vh;
  left: 0;
  object-position: ${({ src }) => src?.includes("image3") && "50% 75%"};

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
  gap: var(--margin-sm);
  padding: var(--margin-sm) 0;
`;

const StyledButton = styled.button<StyledButtonProps>`
  width: 2.4rem;
  height: 0.8rem;
  padding: 0;
  background-color: #ffffffa4;
  background-color: ${({ $isActive }) => ($isActive ? "#2a2a2a" : "#ffffffa4")};
  border-radius: 0;
  border: 1px solid #2a2a2a;
  cursor: pointer;
  z-index: 10;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${({ $isActive }) =>
      $isActive ? "#2a2a2a" : "#ffffffbd"};
  }
`;

const SaleButton = styled(NavLink)`
  width: fit-content;
  border-radius: 2rem;
  padding: 0.8rem 1.8rem;
  font-size: var(--font-size-base);
  background-color: transparent;
  border: 1px solid var(--clr-white);
  color: var(--clr-white);
  margin-top: var(--margin-xsm);

  &:hover {
    background-color: var(--clr-white);
    color: var(--clr-dark-grey);
  }
`;
