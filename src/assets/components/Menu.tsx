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
  width: 100vw;
  top: 3.6rem;
  left: 0;
  background-color: var(--clr-white);
  border-top: 1px solid var(--clr-dark-grey);
  border-bottom: 1px solid var(--clr-dark-grey);
  padding: 1rem;
`;
const MenuImg = styled.img`
  height: 22rem;
  width: 50vw;
  object-fit: cover;
`;

const StyledListItem = styled.li`
  list-style: none;

  a {
    color: #000;
    display: flex;
    display: flex;
    width: calc(50vw - 3rem);
    justify-content: space-between;
    gap: 1rem;

    img {
      width: 1.4rem;
    }
    &:hover {
      text-decoration: underline;
      color: var(--clr-black);
      & img {
        transition: 0.2s ease;
        transform: translateX(0.5rem);
      }
    }
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 1rem;
  top: 57px;
  text-transform: uppercase;
  left: 0;
  font-size: var(--font-size-base);
  transition: 0.3s 0.8s ease;

  img {
    width: 10.4rem;
  }
`;
