import styled from "styled-components";

interface BurgerMenuProps {
  onClick: () => void;
  menuopen: string;
}

export default function BurgerMenu({ onClick, menuopen }: BurgerMenuProps) {
  return (
    <StyledBurgerMenu onClick={onClick} menuopen={menuopen}>
      <Burger menuopen={menuopen} />
    </StyledBurgerMenu>
  );
}

const StyledBurgerMenu = styled.div<{ menuopen: string }>`
  cursor: pointer;
  position: relative;
  height: 1.2rem;
  z-index: 104;
`;

const Burger = styled.div<{ menuopen: string }>`
  width: 1.6rem;
  height: 0.094rem;
  background-color: #333;
  position: relative;
  top: 50%;
  background-color: ${({ menuopen }) =>
    menuopen === "true" ? "var(--clr-white)" : "var(--clr-dark-grey)"};

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
    top: ${({ menuopen }) => (menuopen === "true" ? "0" : "-.6rem")};
    transform: ${({ menuopen }) =>
      menuopen === "true" ? "rotate(45deg)" : "0"};
  }

  &::before {
    transform: ${({ menuopen }) =>
      menuopen === "true" ? "rotate(-45deg)" : "rotate(0)"};
    top: 0.6rem;
    top: ${({ menuopen }) => (menuopen === "true" ? "0" : "0.6rem")};
  }

  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;
