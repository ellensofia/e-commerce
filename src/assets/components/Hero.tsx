import styled from "styled-components";
import Carousel from "./Carousel";

export default function Hero() {
  return (
    <StyledLayout>
      <Carousel />
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 57px);
`;
