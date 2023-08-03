import styled from "styled-components";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <StyledLayout>
      <HeroCarousel />
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 57px);
`;
