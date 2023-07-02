import { useState } from "react";
import { styled } from "styled-components";
import BurgerMenu from "./BurgerMenu";
import SearchBar from "./SearchBar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <StyledHeader>
      <Logotype>Logotype</Logotype>
      <nav>
        <StyledMiddle menuOpen={menuOpen}>
          <StyledListItem>
            <a href="">Home</a>
          </StyledListItem>
          <StyledListItem>
            <a href="">About</a>
          </StyledListItem>
          <StyledListItem>
            <a href="">Contact</a>
          </StyledListItem>
          <StyledListItem>
            <a href="">Find us</a>
          </StyledListItem>
        </StyledMiddle>
      </nav>
      <StyledRight>
        <a>My account</a>
        <SearchBar
          keyword={"keyword"}
          onChange={function (keyword: string): void {
            throw new Error("Function not implemented.");
          }}
        ></SearchBar>
        <BurgerMenu onClick={toggleMenuOpen} menuOpen={menuOpen} />
      </StyledRight>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  background-color: #fff;
  width: calc(100% - 2rem);
  z-index: 1000;
  justify-content: space-between;
  top: 0;
  border-bottom: 1px solid black;
  align-items: center;
  padding: 1rem 3.6rem 1rem 2rem;

  @media (max-width: 600px) {
    padding: 1rem 1rem;
  }
`;

const StyledListItem = styled.li`
  list-style: none;
  a {
    color: #000;
  }
`;

const StyledMiddle = styled.ul<{ menuOpen: boolean }>`
  display: flex;
  gap: 2.6rem;
  padding: 0;
  top: 57px;
  left: 0;
  padding: 0;
  transition: 0.3s 0.8s ease;

  @media (max-width: 900px) {
    gap: 1rem;
  }

  @media (max-width: 600px) {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    z-index: 100;
    max-height: ${({ menuOpen }) => (menuOpen ? "800px" : "0")};
    display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
    position: ${({ menuOpen }) => (menuOpen ? "absolute" : "unset")};
    background-color: ${({ menuOpen }) => (menuOpen ? "#fff" : "unset")};
    width: ${({ menuOpen }) => (menuOpen ? "100%" : "unset")};
    padding: ${({ menuOpen }) => (menuOpen ? "3rem 0" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
`;

const Logotype = styled.a`
  font-family: "bugaki";
`;

const StyledRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & a {
    color: #333;
    white-space: nowrap;
    font-size: 0.8rem;
  }
`;
