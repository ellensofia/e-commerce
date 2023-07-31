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
  padding: 1rem;
  gap: 2rem;
  @media (max-width: 450px) {
    padding-right: 0;
    padding: 0.5rem 0 0.5rem 0.5rem;
    gap: 1rem;
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
  gap: 2rem;
  padding-left: 1rem;

  @media (max-width: 450px) {
    padding-left: 0px;
    gap: 1.2rem;
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
    gap: 1rem;

    img {
      width: 1.4rem;
    }
    &:hover {
      text-decoration: underline;
      & img {
        transition: 0.2s ease;
        transform: translateX(0.5rem);
      }
    }
    @media (max-width: 450px) {
      gap: 0.2rem;
      width: unset;
    }
  }
`;
