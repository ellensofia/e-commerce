import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";
import styled from "styled-components";
import { products } from "../../data";
import ProductCard from "./ProductCard";

export default function ProductCarousel() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = (direction: string) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    if (direction === "left") {
      setCurrentItemIndex((prevIndex) =>
        prevIndex === 0 ? products.length * 2 - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setCurrentItemIndex((prevIndex) =>
        prevIndex === products.length * 2 - 1 ? 0 : prevIndex + 1
      );
    }

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const shouldShowSecondContainer = currentItemIndex >= products.length;
  const shouldShowSecondContainerAsString =
    shouldShowSecondContainer.toString();
  const shouldHideSecondContainerAsString =
    (!shouldShowSecondContainer).toString();

  return (
    <CarouselContainer>
      <OuterBox>
        <InnerContainer visible={shouldHideSecondContainerAsString}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              currentItemIndex={currentItemIndex}
              index={index}
            />
          ))}
        </InnerContainer>
        <InnerContainer visible={shouldShowSecondContainerAsString}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              currentItemIndex={currentItemIndex - products.length}
              index={index}
            />
          ))}
        </InnerContainer>
      </OuterBox>
      <NavigationsLeft>
        <StyledButton onClick={() => navigate("left")}>
          <ArrowBackIosNewOutlinedIcon />
        </StyledButton>
      </NavigationsLeft>
      <NavigationsRight>
        <StyledButton onClick={() => navigate("right")}>
          <ArrowForwardIosOutlinedIcon />
        </StyledButton>
      </NavigationsRight>
    </CarouselContainer>
  );
}

const OuterBox = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-top: 1px solid var(--clr-dark-grey);
  border-bottom: 1px solid var(--clr-dark-grey);

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const InnerContainer = styled.div<{ visible: string }>`
  height: 37.5rem;
  margin: 0 auto;
  padding: 0 4rem 0 5rem;
  display: ${({ visible }) => (visible === "true" ? "block" : "none")};

  @media (max-width: 600px) {
    height: 25.5rem;
    padding: 0 3rem;
  }

  @media (max-width: 460px) {
    padding: 0 3rem;
  }

  @media (max-width: 430px) {
    padding: 0 2rem;
  }
`;

const NavigationsLeft = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0rem;
  height: calc(100% - 2px);
  display: flex;
  background-color: var(--clr-white);
  align-items: center;
  padding-left: 1rem;

  @media (max-width: 600px) {
    left: 0rem;
    padding-left: 0.4rem;
  }

  @media (max-width: 460px) {
    padding-left: 0.1rem;
  }
`;

const NavigationsRight = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0rem;
  height: calc(100% - 2px);
  background-color: var(--clr-white);
  padding-right: 1rem;

  @media (max-width: 600px) {
    right: 0rem;
    padding-right: 0.4rem;
  }

  @media (max-width: 460px) {
    padding-right: 0.1rem;
  }
`;

const StyledButton = styled.button`
  padding: 0rem;
  font-size: 2rem;
  cursor: pointer;
  position: relative;
  color: #333;
  background: transparent;
`;
