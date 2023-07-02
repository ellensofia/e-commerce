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
`;

const Burger = styled.div<{ menuOpen: boolean }>`
  width: 2rem;
  height: 0.1rem;
  background-color: #333;
  position: relative;
  background-color: ${({ menuOpen }) => (menuOpen ? "transparent" : "#333")};

  &::after,
  &::before {
    content: "";
    position: absolute;
    background-color: #333;
    width: 2rem;
    height: 0.1rem;
    transition: 0.3s ease;
  }

  &::after {
    top: ${({ menuOpen }) => (menuOpen ? "0" : "-0.6rem")};
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
