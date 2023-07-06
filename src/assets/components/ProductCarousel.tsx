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
    <>
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
        <Navigations>
          <StyledButton onClick={() => navigate("left")}>
            <ArrowBackIosNewOutlinedIcon />
          </StyledButton>
          <StyledButton onClick={() => navigate("right")}>
            <ArrowForwardIosOutlinedIcon />
          </StyledButton>
        </Navigations>
      </OuterBox>
    </>
  );
}

const OuterBox = styled.div`
  position: relative;
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

const InnerContainer = styled.div<{ visible: boolean }>`
  height: 37.5rem;
  margin: 0 auto;
  display: ${({ visible }) => (visible ? "block" : "none")};

  @media (max-width: 600px) {
    height: 25.5rem;
  }
`;

const Navigations = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  z-index: 1;
`;

const StyledButton = styled.button`
  padding: 1rem;
  font-size: 2rem;
  cursor: pointer;
  position: relative;
  color: #333;
  background: transparent;
`;
