import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import ScrollToTop from "./assets/utils/scrollToTop";

export default function App() {
  return (
    <>
      <StyledLayout>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </StyledLayout>
    </>
  );
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;
