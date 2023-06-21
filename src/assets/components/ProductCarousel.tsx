import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";
import styled from "styled-components";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import ProductCard from "./ProductCard";

const images = [image1, image2, image3];

export default function ProductCarousel() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
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

  return (
    <>
      <OuterBox>
        <InnerContainer>
          {carouselImages.map((image, index) => (
            <ProductCard
              key={index}
              image={image}
              currentItemIndex={currentItemIndex}
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
  display: flex;
  width: 90vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid #5e5e5e;
  border-bottom: 1px solid #5e5e5e;
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const InnerContainer = styled.div`
  /* padding: 1.6rem 4rem 0; */
  height: 50vh;
  width: 100%;
`;

const Navigations = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  width: 110%;
  justify-content: space-between;
  gap: 1rem;
`;

const StyledButton = styled.button`
  padding: 1rem;
  font-size: 2rem;
  cursor: pointer;
  position: relative;
  color: #333;
  border: 1px solid #fff;
  background: transparent;
`;
