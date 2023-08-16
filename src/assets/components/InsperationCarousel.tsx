import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";
import styled from "styled-components";
import { products } from "../../data";
import InspCard from "./InspCard";

export default function InsperationCarousel() {
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
          <Text>
            <h3>Get inspired</h3>
            <p>
              Our experts provide personalized advice and answers, prioritizing
              your skin’s well-being. We’re dedicated to equipping you with the
              knowledge and tools for healthy, vibrant skin.
            </p>
          </Text>
          <Posts>
            {products.map((product, index) => (
              <InspCard
                key={index}
                product={product}
                currentItemIndex={currentItemIndex}
                index={index}
              />
            ))}
          </Posts>
        </InnerContainer>
        <InnerContainer visible={shouldShowSecondContainerAsString}>
          <Text>
            <h3>Get inspired</h3>
            <p>
              Our experts provide personalized advice and answers, prioritizing
              your skin’s well-being. We’re dedicated to equipping you with the
              knowledge and tools for healthy, vibrant skin.
            </p>
          </Text>
          <Posts>
            {products.map((product, index) => (
              <InspCard
                key={index}
                product={product}
                currentItemIndex={currentItemIndex - products.length}
                index={index}
              />
            ))}
          </Posts>
        </InnerContainer>
      </OuterBox>
      <Navigations>
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
      </Navigations>
    </CarouselContainer>
  );
}

const OuterBox = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  gap: var(--margin-sm);
  /* border-top: 1px solid var(--clr-dark-grey);
  border-bottom: 1px solid var(--clr-dark-grey); */

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: calc(100px + var(--margin-xlg));
`;

const Posts = styled.div`
  left: 31%;
  bottom: 0;
  position: relative;
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.div<{ visible: string }>`
  height: 25.5rem;
  margin: 0 auto;
  gap: var(--margin-sm);
  display: ${({ visible }) => (visible === "true" ? "flex" : "none")};
`;

const NavigationsLeft = styled.div`
  position: absolute;
  left: 0rem;
  height: 100px;
  display: flex;
  background-color: var(--clr-light-grey);
  align-items: center;
  padding-left: var(--margin-sm);
  z-index: 10;

  @media (max-width: 600px) {
    left: 0rem;
    padding-left: var(--margin-xsm);
  }

  @media (max-width: 460px) {
    padding-left: var(--margin-xxsm);
  }
`;

const Navigations = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  left: 0rem;
  height: 100px;
  display: flex;
  background-color: var(--clr-light-grey);
  align-items: center;
`;

const NavigationsRight = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0rem;
  height: 100px;
  background-color: var(--clr-light-grey);
  padding-right: var(--margin-sm);

  @media (max-width: 600px) {
    right: 0rem;
    padding-right: var(--margin-xsm);
  }

  @media (max-width: 460px) {
    padding-right: 0 var(--margin-xxsm);
  }
`;

const StyledButton = styled.button`
  padding: 0rem;
  font-size: 2rem;
  cursor: pointer;
  position: relative;
  color: var(--clr-dark-grey);
  background: transparent;
`;

const Text = styled.div`
  position: absolute;
  height: 100%;
  width: 39%;
  max-width: 600px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--clr-white);
  z-index: 8;
  padding: var(--margin-lg);

  @media (max-width: 1024px) {
    padding: var(--margin-md);
  }

  @media (max-width: 640px) {
    padding: var(--margin-sm);
    width: 45%;
  }

  & h3 {
    position: relative;
    width: fit-content;
    padding: 0rem 0 2rem;
  }

  & h3::after {
    content: "";
    position: absolute;
    height: 1px;
    background-color: var(--clr-medium-grey);
    width: 100%;
    left: 0;
    bottom: 0;
    margin-bottom: var(--margin-sm);
  }
`;
