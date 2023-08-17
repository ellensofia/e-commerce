import { NavLink } from "react-router-dom";
import styled from "styled-components";
import arrow from "../images/arrow.svg";
import img from "./../../assets/images/category-img6.jpg";

interface Props {
  openMenu: string;
}

export default function Menu({ openMenu }: Props) {
  return (
    <OuterContainer openMenu={openMenu}>
      <nav>
        <StyledList>
          <StyledListItem>
            <NavLink to={"/shop"}>
              Shop
              <img src={arrow} alt="" />
            </NavLink>
          </StyledListItem>
          <StyledListItem>
            <NavLink to={"/shop"}>
              View all categories
              <img src={arrow} alt="" />
            </NavLink>
          </StyledListItem>
          <StyledListItem>
            <NavLink to={"/about"}>
              Special Offers <img src={arrow} alt="" />
            </NavLink>
          </StyledListItem>
          <StyledListItem>
            <NavLink to={"/about"}>
              Sale
              <img src={arrow} alt="" />
            </NavLink>
          </StyledListItem>
          <StyledListItem>
            <a href="">
              Consultation
              <img src={arrow} alt="" />
            </a>
          </StyledListItem>
          <StyledListItem>
            <a href="">
              About us
              <img src={arrow} alt="" />
            </a>
          </StyledListItem>
        </StyledList>
      </nav>
      <MenuImg src={img} alt=""></MenuImg>
    </OuterContainer>
  );
}

const OuterContainer = styled.div<{ openMenu: string }>`
  display: ${({ openMenu }) => (openMenu === "true" ? "flex" : "none")};
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
