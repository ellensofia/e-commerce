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
    }, 150);
  };

  const shouldShowSecondContainer = currentItemIndex >= products.length;
  const shouldShowSecondContainerAsString =
    shouldShowSecondContainer.toString();
  const shouldHideSecondContainerAsString =
    (!shouldShowSecondContainer).toString();

  return (
    <OuterBox>
      <CarouselContainer>
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
      </CarouselContainer>
      <NavigationsLeft>
        <NavBtn onClick={() => navigate("left")}>
          <ArrowBackIosNewOutlinedIcon />
        </NavBtn>
      </NavigationsLeft>
      <NavigationsRight>
        <NavBtn onClick={() => navigate("right")}>
          <ArrowForwardIosOutlinedIcon />
        </NavBtn>
      </NavigationsRight>
    </OuterBox>
  );
}

const OuterBox = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  max-width: 1800px;
  margin: 0 auto;
`;

const CarouselContainer = styled.div`
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

const InnerContainer = styled.div<{ visible: string }>`
  height: 37.5rem;
  margin: 0 auto;
  padding: 0 4rem 0 5rem;
  display: ${({ visible }) => (visible === "true" ? "block" : "none")};

  @media (max-width: 600px) {
    height: 25.5rem;
    padding: 0 2rem;
  }
`;

const Navigations = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: calc(100% - 2px);
  background-color: var(--clr-white);
  padding: 0 1rem;
  @media (max-width: 600px) {
    padding: 0;
  }
`;

const NavigationsLeft = styled(Navigations)`
  left: 0;
`;

const NavigationsRight = styled(Navigations)`
  right: 0;
`;

const NavBtn = styled.button`
  padding: 0rem;
  font-size: 2rem;
  cursor: pointer;
  position: relative;
  color: var(--clr-dark-grey);
  background-color: var(--clr-white);
  padding: 0.4rem;
  height: 100%;
  @media (max-width: 600px) {
    svg {
      font-size: 1rem;
    }
  }
`;
