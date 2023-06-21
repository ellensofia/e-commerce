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
        {/* <SearchBar keyword={keyword} onChange={updateKeyword} /> */}
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
  gap: 1rem;
  padding: 0;
`;

const StyledRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
