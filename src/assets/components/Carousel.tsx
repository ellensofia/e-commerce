import { useEffect, useState } from "react";
import styled from "styled-components";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

const images = [image1, image2, image3];

export default function Carousel() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [delay, setDelay] = useState(4500);

  const navigate = (direction: string) => {
    if ("left") {
      setCurrentItemIndex(
        currentItemIndex === 0 ? images.length - 1 : currentItemIndex - 1
      );
    } else if ("right") {
      setCurrentItemIndex((currentItemIndex + 1) % images.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((currentItemIndex + 1) % images.length);
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [currentItemIndex, delay]);

  //   const next = (current + 1) % slides.length;
  //   const id = setTimeout(() => setCurrent(next), time);
  //   return () => clearTimeout(id);
  // }, [current]);

  return (
    // <OuterBox>
    <InnerContainer>
      {images.map((image, index) => (
        <StyledCarouselItem>
          <div
            key={index}
            style={{
              transform: `translateX(${(index - currentItemIndex) * 100}%)`,
              transition: "transform 1.3s ease-in-out",
            }}
          >
            <StyledImage src={image} alt={image} />
            <a href="">{images[index]}</a>
          </div>
        </StyledCarouselItem>
      ))}
      <Navigations>
        <button onClick={() => navigate("left")}>left</button>
        <button onClick={() => navigate("right")}>right</button>
      </Navigations>
    </InnerContainer>
    // </OuterBox>
  );
}

const InnerContainer = styled.div`
  border: 1px solid black;
  position: relative;
  height: 50vh;
  display: flex;
  width: 60vw;
`;

const StyledCarouselItem = styled.div`
  border: 1px solid black;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #e9cccc50;
  overflow: hidden;
`;

const StyledImage = styled.img`
  border: 1px solid black;
  width: auto;
  max-height: 100%;
  object-fit: cover;
  position: relative;
  height: 50vh;
  width: 60vw;
`;

const Navigations = styled.div`
  border: 1px solid black;
  position: relative;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
`;
