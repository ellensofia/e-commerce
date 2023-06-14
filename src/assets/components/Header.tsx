import { styled } from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <a>Logotype</a>
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
        <div>searchbar</div>
        <div>menu</div>
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
  padding: 0 2rem;
`;

const StyledListItem = styled.li`
  list-style: none;
`;

const StyledMiddle = styled.ul`
  display: flex;
  gap: 1rem;
`;

const StyledRight = styled.div`
  display: flex;
  gap: 1rem;
`;
