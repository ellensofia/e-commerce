import styled from "styled-components";
import { useMenuContext } from "../context/MenuContest";

export default function BurgerMenu() {
  const { menuOpen, toggleMenuOpen, setMenuOpen, burgerRef } = useMenuContext();

  const handleBurgerClicked = () => {
    console.log();
    if (menuOpen === true) {
      setMenuOpen(true);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <nav ref={burgerRef}>
      <StyledBurgerMenu
        $menuOpen={menuOpen}
        onClick={handleBurgerClicked}
        //  ref={burgerRef}
      >
        <Burger $menuOpen={menuOpen} />
      </StyledBurgerMenu>
    </nav>
  );
}

const StyledBurgerMenu = styled.div<{ $menuOpen: boolean }>`
  cursor: pointer;
  position: relative;
  height: 1.2rem;
  z-index: 104;
`;

const Burger = styled.div<{ $menuOpen: boolean }>`
  width: 1.5rem;
  height: 0.07rem;
  background-color: #333;
  position: relative;
  top: 50%;
  background-color: ${({ $menuOpen }) =>
    $menuOpen ? "var(--clr-white)" : "var(--clr-dark-grey)"};

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
    top: ${({ $menuOpen }) => ($menuOpen ? "0" : "-.6rem")};
    transform: ${({ $menuOpen }) => ($menuOpen ? "rotate(45deg)" : "0")};
  }

  &::before {
    transform: ${({ $menuOpen }) =>
      $menuOpen ? "rotate(-45deg)" : "rotate(0)"};
    top: 0.6rem;
    top: ${({ $menuOpen }) => ($menuOpen ? "0" : "0.6rem")};
  }

  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;
