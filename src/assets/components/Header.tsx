import { useState } from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import LogoImg from "./../../assets/images/oasis-logo.png";
import BurgerMenu from "./BurgerMenu";
import SearchBar from "./SearchBar";

export default function Header() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [menuOpen, setMenuopen] = useState("false");

  const toggleMenuopen = () => {
    setMenuopen((prevMenuopen) => (prevMenuopen === "true" ? "false" : "true"));
  };

  return (
    <StyledHeader>
      <NavLink to={"/"}>
        <Logotype>
          <img src={LogoImg} alt="" />
        </Logotype>
      </NavLink>
      <nav>
        <StyledMiddle menuOpen={menuOpen}>
          <StyledListItem>
            <NavLink to={"/shop"}>Shop</NavLink>
          </StyledListItem>
          <StyledListItem>
            <NavLink to={"/about"}>About</NavLink>
          </StyledListItem>
          <StyledListItem>
            <a href="">Contact</a>
          </StyledListItem>
          <StyledListItem>
            <a href="">Find us</a>
          </StyledListItem>
        </StyledMiddle>
      </nav>
      <StyledRight isExpanded={isSearchExpanded.toString()}>
        <a>
          <span className="material-symbols-outlined account_circle">
            account_circle
          </span>
        </a>
        <a>
          <span className="material-symbols-outlined shopping_basket">
            shopping_basket
          </span>
        </a>
        <SearchBar
          keyword={"keyword"}
          isExpanded={isSearchExpanded}
          setIsexpanded={setIsSearchExpanded}
          onChange={function (keyword: string): void {
            throw new Error("Function not implemented.");
          }}
        ></SearchBar>
        <BurgerMenu onClick={toggleMenuopen} menuopen={menuOpen} />
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

  @media (max-width: 800px) {
    padding: 1rem 1rem;
  }
`;

const StyledListItem = styled.li`
  list-style: none;
  a {
    color: #000;
  }
`;

const StyledMiddle = styled.ul<{ menuOpen: string }>`
  display: flex;
  gap: 2.6rem;
  padding: 0;
  top: 57px;
  text-transform: uppercase;
  left: 0;
  font-size: 0.85rem;
  transition: 0.3s 0.8s ease;
  @media (max-width: 900px) {
    gap: 1rem;
  }

  @media (max-width: 800px) {
    display: none;
    flex-direction: column;
    text-decoration: ${({ menuOpen }) =>
      menuOpen === "true" ? "underline" : "none"};
    justify-content: center;
    z-index: 100;
    max-height: ${({ menuOpen }) => (menuOpen === "true" ? "800px" : "0")};
    display: ${({ menuOpen }) => (menuOpen === "true" ? "flex" : "none")};
    position: ${({ menuOpen }) => (menuOpen === "true" ? "absolute" : "unset")};
    background-color: ${({ menuOpen }) =>
      menuOpen === "true" ? "#fff" : "unset"};
    width: ${({ menuOpen }) => (menuOpen === "true" ? "100%" : "unset")};
    padding: ${({ menuOpen }) => (menuOpen === "true" ? "3rem 2rem" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

const Logotype = styled.p`
  text-transform: uppercase;
  color: #333;
  & img {
    width: 80px;
  }
`;

const StyledRight = styled.div<{ isExpanded: string }>`
  display: flex;
  align-items: center;
  gap: 1rem;

  & a {
    color: #333;
    white-space: nowrap;
    align-items: center;
    display: flex;
  }
  .shopping_basket {
    margin-right: ${({ isExpanded }) => (isExpanded === "true" ? "0" : "2rem")};
  }
`;
