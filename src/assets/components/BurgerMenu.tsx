import styled from "styled-components";
import { useMenuContext } from "../context/MenuContest";

export default function BurgerMenu() {
  const { menuOpen, toggleMenuOpen, setMenuOpen, burgerRef } = useMenuContext();

  const handleBurgerClicked = () => {
    console.log();
    if (menuOpen === true) {
      console.log("burger");
      setMenuOpen(true);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <nav ref={burgerRef}>
      <StyledBurgerMenu
        menuopen={menuOpen}
        onClick={handleBurgerClicked}
        //  ref={burgerRef}
      >
        <Burger menuopen={menuOpen} />
      </StyledBurgerMenu>
    </nav>
  );
}

const StyledBurgerMenu = styled.div<{ menuopen: boolean }>`
  cursor: pointer;
  position: relative;
  height: 1.2rem;
  z-index: 104;
`;

const Burger = styled.div<{ menuopen: boolean }>`
  width: 1.5rem;
  height: 0.07rem;
  background-color: #333;
  position: relative;
  top: 50%;
  background-color: ${({ menuopen }) =>
    menuopen === true ? "var(--clr-white)" : "var(--clr-dark-grey)"};

  &::after,
  &::before {
    content: "";
    position: absolute;
    background-color: var(--clr-dark-grey);
    width: inherit;
    height: inherit;
    top: 0;
    transition: 0.3s ease;
  }

  &::after {
    top: ${({ menuopen }) => (menuopen === true ? "0" : "-.6rem")};
    transform: ${({ menuopen }) => (menuopen === true ? "rotate(45deg)" : "0")};
  }

  &::before {
    transform: ${({ menuopen }) =>
      menuopen === true ? "rotate(-45deg)" : "rotate(0)"};
    top: 0.6rem;
    top: ${({ menuopen }) => (menuopen === true ? "0" : "0.6rem")};
  }

  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;
