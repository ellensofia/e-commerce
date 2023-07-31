import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import LogoImg from "./../../assets/images/oasis-logo.png";
import BurgerMenu from "./BurgerMenu";
import Menu from "./Menu";
import SearchBar from "./SearchBar";

export default function Header() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState("false");

  const toggleMenuopen = () => {
    setMenuOpen((prevMenuopen) => (prevMenuopen === "true" ? "false" : "true"));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen("false");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledHeader>
      <NavLink to={"/"}>
        <Logotype>
          <img src={LogoImg} alt="" />
        </Logotype>
      </NavLink>
      <nav>
        <StyledMiddle menuOpen={menuOpen}>
          <StyledListItem menuOpen={menuOpen}>
            <NavLink to={"/shop"}>Shop</NavLink>
          </StyledListItem>
          <StyledListItem menuOpen={menuOpen}>
            <a href="">Categories</a>
          </StyledListItem>
          <StyledListItem menuOpen={menuOpen}>
            <a href="">Special Offers</a>
          </StyledListItem>
          <StyledListItem menuOpen={menuOpen}>
            <NavLink to={"/about"}>Sale</NavLink>
          </StyledListItem>
          <StyledListItem menuOpen={menuOpen}>
            <a href=""> Consultation</a>
          </StyledListItem>
          <StyledListItem menuOpen={menuOpen}>
            <NavLink to={"/about"}>About us</NavLink>
          </StyledListItem>
        </StyledMiddle>
        <Menu openMenu={menuOpen} />
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
  height: var(--header-height);
  background-color: var(--clr-white);
  width: calc(100% - 2rem);
  z-index: 1000;
  justify-content: space-between;
  top: 0;
  border-bottom: 1px solid var(--clr-dark-grey);
  align-items: center;
  padding: 0rem 3.6rem 0rem 2rem;

  @media (max-width: 900px) {
    padding: 0rem 1rem;
  }
`;

const StyledListItem = styled.li<{ menuOpen: string }>`
  list-style: none;

  a {
    color: var(--clr-dark-grey);
    display: flex;
    gap: 1rem;

    &:hover {
      text-decoration: underline;
      color: var(--clr-black);
    }
  }
`;

const StyledMiddle = styled.ul<{ menuOpen: string }>`
  display: ${({ menuOpen }) => (menuOpen === "false" ? "flex" : "none")};
  gap: 2.6rem;
  padding: 0;
  top: 57px;
  text-transform: uppercase;
  left: 0;
  font-size: var(--font-size-base);
  padding: 0 1rem;
  @media (max-width: 1090px) {
    gap: 1.6rem;
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

const StyledRight = styled.div<{ isExpanded: string }>`
  display: flex;
  align-items: center;
  gap: 1rem;

  & a {
    display: flex;
  }
  .shopping_basket {
    margin-right: ${({ isExpanded }) => (isExpanded === "true" ? "0" : "2rem")};
  }
`;
