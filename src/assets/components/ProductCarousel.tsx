import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";
import styled from "styled-components";
import { products } from "../../data";
import image3 from "../images/image3.jpg";
import image1 from "../images/product1.jpg";
import image2 from "../images/product2.jpg";
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
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
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
  width: 100%;
  align-items: center;
  /* margin: 2rem; */
  justify-content: center;
  overflow: hidden;
  border-top: 1px solid #5e5e5e;
  border-bottom: 1px solid #5e5e5e;
  @media (max-width: 600px) {
    width: 100vw;
    /* margin: 2rem 0; */
  }
`;

const InnerContainer = styled.div`
  height: 37.5rem;
  margin: 0 auto;
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
