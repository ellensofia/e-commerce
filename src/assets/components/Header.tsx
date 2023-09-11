import { useState } from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { useMenuContext } from "../context/MenuContest";
import LogoImg from "./../../assets/images/oasis-logo.png";
import BurgerMenu from "./BurgerMenu";
import Menu from "./Menu";
import SearchBar from "./SearchBar";

export default function Header() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const { menuOpen } = useMenuContext();

  return (
    <StyledHeader>
      <NavLink to={"/"}>
        <Logotype>
          <img src={LogoImg} alt="" />
        </Logotype>
      </NavLink>
      <nav>
        <StyledMiddle $menuOpen={menuOpen}>
          <StyledListItem $menuOpen={menuOpen}>
            <NavLink to={"/shop"}>Shop</NavLink>
          </StyledListItem>
          <StyledListItem $menuOpen={menuOpen}>
            <a href="/categories">Categories</a>
          </StyledListItem>
          <StyledListItem $menuOpen={menuOpen}>
            <a href="/sale">Special Offers</a>
          </StyledListItem>
          <StyledListItem $menuOpen={menuOpen}>
            <NavLink to={"/sale"}>Sale</NavLink>
          </StyledListItem>
          <StyledListItem $menuOpen={menuOpen}>
            <NavLink to={"/contact"}>Contact</NavLink>
          </StyledListItem>
          <StyledListItem $menuOpen={menuOpen}>
            <NavLink to={"/about"}>About us</NavLink>
          </StyledListItem>
        </StyledMiddle>
        <Menu />
      </nav>
      <StyledRight $isExpanded={isSearchExpanded.toString()}>
        <a>
          <span className="material-symbols-outlined account_circle">
            account_circle
          </span>
        </a>
        <a>
          <span className="material-symbols-outlined shopping_basket">
            shopping_bag
          </span>
        </a>
        <SearchBar
          isExpanded={isSearchExpanded}
          setIsexpanded={setIsSearchExpanded}
        ></SearchBar>
        <BurgerMenu />
      </StyledRight>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  height: var(--header-height);
  background-color: var(--clr-white);
  width: 100%;
  z-index: 1000;
  justify-content: space-between;
  top: 0;
  border-bottom: 1px solid var(--clr-dark-grey);
  align-items: center;
  padding: 0rem calc(var(--margin-md) - 1.25rem) 0rem var(--margin-md);

  @media (max-width: 900px) {
    padding: 0rem var(--margin-sm);
  }
`;

const StyledListItem = styled.li<{ $menuOpen: boolean }>`
  list-style: none;

  a {
    color: var(--clr-dark-grey);
    display: flex;
    gap: var(--margin-sm);

    &:hover {
      text-decoration: underline;
      color: var(--clr-black);
    }
  }
`;

const StyledMiddle = styled.ul<{ $menuOpen: boolean }>`
  display: ${({ $menuOpen }) => ($menuOpen ? "none" : "flex")};
  gap: var(--margin-lg);
  padding: 0;
  top: calc(var(--header-height) - 3px);
  text-transform: uppercase;
  left: 0;
  font-size: var(--font-size-base);
  @media (max-width: 1190px) {
    gap: var(--margin-sm);
    font-size: var(--font-size-sm);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Logotype = styled.p`
  & img {
    width: 80px;
  }
`;

const StyledRight = styled.div<{ $isExpanded: string }>`
  display: flex;
  align-items: center;
  gap: var(--margin-sm);

  & a {
    display: flex;
  }
  .shopping_basket {
    margin-right: ${({ $isExpanded }) =>
      $isExpanded === "true" ? "0" : "var(--margin-md)"};
  }
`;
