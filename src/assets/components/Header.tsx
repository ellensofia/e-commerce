import { styled } from "styled-components";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <StyledHeader>
      <Logotype>Logotype</Logotype>
      <nav>
        <StyledMiddle>
          <StyledListItem>
            <a href="">Home</a>
          </StyledListItem>
          <StyledListItem>
            <a href="">About</a>
          </StyledListItem>
          <StyledListItem>
            <a href="">Contact</a>
          </StyledListItem>
          <StyledListItem>
            <a href="">Find us</a>
          </StyledListItem>
        </StyledMiddle>
      </nav>
      <StyledRight>
        <a>My account</a>
        <SearchBar
          keyword={"keyword"}
          onChange={function (keyword: string): void {
            throw new Error("Function not implemented.");
          }}
        ></SearchBar>
        <BurgerMenu>
          <Burger></Burger>
        </BurgerMenu>
      </StyledRight>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: fixed;
  display: flex;
  justify-content: space-between;
  top: 0;
  border-bottom: 1px solid black;
  align-items: center;
  padding: 1rem 2rem;
`;

const StyledListItem = styled.li`
  list-style: none;
  a {
    color: #000;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const StyledMiddle = styled.ul`
  display: flex;
  gap: 2.6rem;
  padding: 0;
`;

const Logotype = styled.a`
  font-family: "bugaki";
`;

const BurgerMenu = styled.div``;

const Burger = styled.div`
  padding: 0;
  width: 2rem;
  height: 0.1rem;
  background-color: #333;
  position: relative;

  &::after,
  &::before {
    content: "";
    position: absolute;
    background-color: #333;
    width: 2rem;
    height: 0.1rem;
    top: -0.6rem;
  }

  &::after {
    top: 0.6rem;
  }
`;

const StyledRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & a {
    color: #333;
    white-space: nowrap;
    font-size: 0.8rem;
  }
`;
