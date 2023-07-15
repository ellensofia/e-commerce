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

  return (
    <CarouselContainer>
      <OuterBox>
        <InnerContainer visible={!shouldShowSecondContainer}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              currentItemIndex={currentItemIndex}
              index={index}
            />
          ))}
        </InnerContainer>
        <InnerContainer visible={shouldShowSecondContainer}>
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
  border-top: 1px solid #5e5e5e;
  border-bottom: 1px solid #5e5e5e;
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const InnerContainer = styled.div<{ visible: boolean }>`
  height: 37.5rem;
  margin: 0 auto;
  display: ${({ visible }) => (visible ? "block" : "none")};

  @media (max-width: 600px) {
    height: 25.5rem;
  }
`;

const NavigationsLeft = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1rem;
  z-index: 1;
  @media (max-width: 600px) {
    left: 0rem;
  }
`;

const NavigationsRight = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  z-index: 1;
  @media (max-width: 600px) {
    right: 0rem;
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
