import styled from "styled-components";

interface BurgerMenuProps {
  onClick: () => void;
  menuOpen: boolean;
}

export default function BurgerMenu({ onClick, menuOpen }: BurgerMenuProps) {
  return (
    <StyledBurgerMenu onClick={onClick} menuOpen={menuOpen}>
      <Burger menuOpen={menuOpen} />
    </StyledBurgerMenu>
  );
}

const StyledBurgerMenu = styled.div<{ menuOpen: boolean }>`
  cursor: pointer;
  position: relative;
  height: 1.2rem;
`;

const Burger = styled.div<{ menuOpen: boolean }>`
  width: 1.6rem;
  height: 0.094rem;
  background-color: #333;
  position: relative;
  top: 50%;
  background-color: ${({ menuOpen }) => (menuOpen ? "transparent" : "#333")};

  &::after,
  &::before {
    content: "";
    position: absolute;
    background-color: #333;
    width: 1.6rem;
    height: 0.1rem;
    top: 0;
    transition: 0.3s ease;
  }

  &::after {
    top: ${({ menuOpen }) => (menuOpen ? "0" : "-.6rem")};
    transform: ${({ menuOpen }) => (menuOpen ? "rotate(45deg)" : "0")};
  }

  &::before {
    transform: ${({ menuOpen }) => (menuOpen ? "rotate(-45deg)" : "rotate(0)")};
    top: 0.6rem;
    top: ${({ menuOpen }) => (menuOpen ? "0" : "0.6rem")};
  }

  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;
