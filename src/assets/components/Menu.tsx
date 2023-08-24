import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import arrow from "../images/arrow.svg";
import img from "./../../assets/images/ingredient2.jpg";

interface Props {
  menuOpen: string;
  toggleMenu: () => void;
}

export default function Menu({ menuOpen, toggleMenu }: Props) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuOpen === "true") {
        if (
          menuRef.current &&
          !(menuRef.current as HTMLElement).contains(event.target as Node)
        ) {
          toggleMenu();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);
  const menuRef = useRef(null);
  const handleLinkClick = () => {
    toggleMenu();
  };

  return (
    <OuterContainer menuOpen={menuOpen}>
      <nav ref={menuRef}>
        <StyledList>
          <StyledListItem>
            <NavLink to={"/shop"} onClick={handleLinkClick}>
              Shop
              <img src={arrow} alt="" />
            </NavLink>
          </StyledListItem>
          <StyledListItem>
            <NavLink to={"/404"} onClick={handleLinkClick}>
              View all categories
              <img src={arrow} alt="" />
            </NavLink>
          </StyledListItem>
          <StyledListItem>
            <NavLink to={"/404"} onClick={handleLinkClick}>
              Special Offers <img src={arrow} alt="" />
            </NavLink>
          </StyledListItem>
          <StyledListItem>
            <NavLink to={"/sale"} onClick={handleLinkClick}>
              Sale
              <img src={arrow} alt="" />
            </NavLink>
          </StyledListItem>
          <StyledListItem>
            <NavLink to={"/contact"} onClick={handleLinkClick}>
              Contact <img src={arrow} alt="" />
            </NavLink>
          </StyledListItem>
          <StyledListItem>
            <NavLink to={"/about"} onClick={handleLinkClick}>
              About us
              <img src={arrow} alt="" />
            </NavLink>
          </StyledListItem>
        </StyledList>
      </nav>
      <MenuImg src={img} alt=""></MenuImg>
    </OuterContainer>
  );
}

const OuterContainer = styled.div<{ menuOpen: string }>`
  display: ${({ menuOpen }) => (menuOpen === "true" ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 102;
  top: var(--header-height);
  left: 0;
  right: 0;
  background-color: var(--clr-white);
  border-top: 1px solid var(--clr-dark-grey);
  border-bottom: 1px solid var(--clr-dark-grey);
  padding: var(--margin-sm);
  gap: var(--margin-md);
  @media (max-width: 450px) {
    padding-right: 0;
    padding: var(--margin-xsm) 0 var(--margin-xsm) var(--margin-xsm);
    gap: var(--margin-xsm);
  }
`;
const MenuImg = styled.img`
  height: 22rem;
  width: 50vw;
  object-fit: cover;
  @media (max-width: 350px) {
    width: 40vw;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--margin-md);
  padding-left: var(--margin-sm);

  @media (max-width: 450px) {
    padding-left: 0px;
    gap: var(--margin-sm);
  }
`;

const StyledListItem = styled.li`
  list-style: none;
  text-transform: uppercase;
  font-size: var(--font-size-base);

  a {
    color: #000;
    display: flex;
    width: calc(50vw - 3rem);
    justify-content: space-between;
    gap: var(--margin-xxxsm);

    img {
      width: 1.4rem;
    }
    &:hover {
      text-decoration: underline;
      & img {
        transition: 0.2s ease;
        transform: translateX(var(--margin-xxxsm));
      }
    }
    @media (max-width: 450px) {
      width: unset;
    }
  }
`;
