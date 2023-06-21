import styled from "styled-components";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import ProductCarousel from "./assets/components/ProductCarousel";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <StyledLayout>
        <ProductCarousel />
      </StyledLayout>
    </>
  );
}

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 57px);
`;
