import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

interface Props {
  keyword: string;
  onChange: (keyword: string) => void;
}

export default function SearchBar({ keyword, onChange }: Props) {
  return (
    <SearchField>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        aria-label="search"
        key="search-bar"
        onChange={(e) => onChange(e.target.value)}
      />
    </SearchField>
  );
}

const SearchField = styled.div`
  position: relative;
  transition: 1.5s 1.3s ease;
  margin-right: 1rem;
  &:hover {
    width: 14rem;
  }
  margin-left: 0;
  width: 100%;
`;

const StyledInputBase = styled.input`
  padding-left: 0.4rem;
  padding: 0.4rem 0.4rem;
  border-radius: 2rem;
  border: 0.075rem solid #333;
  transition: 0.3s 0.3s ease;
  width: 100%;
  border-radius: 2rem;
  @media (max-width: 1090px) {
    display: none;
    :hover {
      display: block;
    }
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  display: flex;
  right: -0.4rem;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: 0.3s 0.3s ease;
  &:focus {
    width: 10rem;
  }
`;
