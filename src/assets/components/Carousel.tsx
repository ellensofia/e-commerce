import styled from "styled-components";

const images = ["bild", "bild"];

export default function Carousel() {
  return (
    <OuterBox>
      <InnerContainer>
        <StyledCarouselItem>
          {images.map((image, index) => (
            <div key={index}>
              <img src="" alt="" />
              <a href="">{images[index]}</a>
            </div>
          ))}
        </StyledCarouselItem>
      </InnerContainer>
    </OuterBox>
  );
}

const InnerContainer = styled.div`
  border: 1px solid black;
  position: relative;
  height: 50vh;
  width: 60vw;
`;

const StyledCarouselItem = styled.div`
  border: 1px solid black;
  position: absolute;
  height: 50vh;
  width: 60vw;
  background-color: #e9cccc50;
`;

const OuterBox = styled.div`
  border: 1px solid black;
  position: absolute;
  height: 50vh;
  width: 60vw;
`;
