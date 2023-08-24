import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";
import styled from "styled-components";
import { ingredients } from "../../data";
import InspCard from "./InspCard";

export default function InsperationCarousel() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const calculateNewIndex = (prevIndex: number) => {
    if (window.innerWidth <= 640) {
      return Math.min(prevIndex + 1, ingredients.length - 1);
    } else if (window.innerWidth <= 1024) {
      return Math.min(prevIndex + 1, ingredients.length - 2);
    } else {
      return Math.min(prevIndex + 1, ingredients.length - 3);
    }
  };

  const navigate = (direction: string) => {
    if (direction === "left") {
      setCurrentItemIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    } else if (direction === "right") {
      setCurrentItemIndex((prevIndex) => calculateNewIndex(prevIndex));
    }
  };

  return (
    <CarouselContainer>
      <OuterBox>
        <InnerContainer>
          <Text>
            <h3>Unique Skin, Tailored Care</h3>
            <p>
              Your skin is one of a kind, and so are its needs. Seeking
              hydration, anti-aging, or blemish control? Our ingredient-driven
              approach caters to diverse skincare goals.
            </p>
          </Text>
          <Posts>
            {ingredients.map((ingredient, index) => (
              <InspCard
                key={index}
                ingredient={ingredient}
                currentItemIndex={currentItemIndex}
                index={index}
              />
            ))}
          </Posts>
        </InnerContainer>

        <Navigations>
          <NavigationsLeft index={currentItemIndex}>
            <StyledButton onClick={() => navigate("left")}>
              <ArrowBackIosNewOutlinedIcon />
            </StyledButton>
          </NavigationsLeft>
          <NavigationsRight index={currentItemIndex}>
            <StyledButton onClick={() => navigate("right")}>
              <ArrowForwardIosOutlinedIcon />
            </StyledButton>
          </NavigationsRight>
        </Navigations>
      </OuterBox>
    </CarouselContainer>
  );
}

const OuterBox = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  gap: var(--margin-sm);

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: var(--margin-xlg);
  margin-bottom: var(--margin-xlg);
  max-width: 1500px;
  @media (min-width: 1500px) {
    margin: 0 auto;
    max-width: 1499px;
    margin-bottom: 100px;
    margin-top: var(--margin-xxlg);
  }
`;

const Posts = styled.div`
  left: 31%;
  bottom: 0;
  position: relative;
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.div`
  height: 25.5rem;
  margin: 0 auto;
  z-index: 2;
  gap: var(--margin-sm);
  display: flex;
`;

const Navigations = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 61%;
  left: 39%;
  height: 100px;
  display: flex;
  align-items: center;

  @media (max-width: 640px) {
    width: 100%;
    left: 0;
    height: 80px;
  }
`;

const NavigationsLeft = styled.div<{ index: number }>`
  display: ${({ index }) => (index === 0 ? "none" : "flex")};
`;

const NavigationsRight = styled.div<{ index: number }>`
  position: absolute;
  right: 0rem;
  display: ${({ index }) =>
    index === ingredients.length - 3 ? "none" : "flex"};

  @media (max-width: 1024px) {
    display: ${({ index }) =>
      index === ingredients.length - 2 ? "none" : "flex"};
  }

  @media (max-width: 640px) {
    right: 0rem;
    display: ${({ index }) =>
      index === ingredients.length - 1 ? "none" : "flex"};
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  color: var(--clr-dark-grey);
  background: transparent;
  padding: 0 var(--margin-xsm);

  @media (max-width: 640px) {
    left: 0rem;
    padding: 0 var(--margin-xsm);
  }

  @media (max-width: 460px) {
    padding: 0 var(--margin-xxsm);
  }
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
  border-top: 1px solid var(--clr-medium-grey);
  border-bottom: 1px solid var(--clr-medium-grey);
  z-index: 8;
  padding: var(--margin-lg);

  @media (max-width: 1024px) {
    padding: var(--margin-md);
  }

  @media (max-width: 640px) {
    padding: var(--margin-sm);
    width: 50%;
  }

  & p {
    font-size: var(--font-size-base);
  }

  & h3 {
    position: relative;
    width: fit-content;
    padding: 0rem 0 var(--margin-md);
  }

  & h3::after {
    content: "";
    position: absolute;
    height: 1px;
    background-color: var(--clr-dark-grey);
    width: 100%;
    left: 0;
    bottom: 0;
    margin-bottom: var(--margin-sm);
  }
`;
