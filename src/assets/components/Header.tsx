import { useState } from "react";
import { styled } from "styled-components";
import BurgerMenu from "./BurgerMenu";
import SearchBar from "./SearchBar";

export default function Header() {
  const [menuopen, setMenuopen] = useState("false");
  const toggleMenuopen = () => {
    setMenuopen((prevMenuopen) => (prevMenuopen === "true" ? "false" : "true"));
  };

  return (
    <StyledHeader>
      <Logotype>Logotype</Logotype>
      <nav>
        <StyledMiddle menuopen={menuopen}>
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
        <BurgerMenu onClick={toggleMenuopen} menuopen={"true"} />
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

const StyledMiddle = styled.ul<{ menuopen: string }>`
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
    max-height: ${({ menuopen }) => (menuopen === "true" ? "800px" : "0")};
    display: ${({ menuopen }) => (menuopen === "true" ? "flex" : "none")};
    position: ${({ menuopen }) => (menuopen === "true" ? "absolute" : "unset")};
    background-color: ${({ menuopen }) =>
      menuopen === "true" ? "#fff" : "unset"};
    width: ${({ menuopen }) => (menuopen === "true" ? "100%" : "unset")};
    padding: ${({ menuopen }) => (menuopen === "true" ? "3rem 0" : "0")};
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
