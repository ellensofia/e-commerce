import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  keyword: string;
  onChange: (keyword: string) => void;
}

export default function SearchBar({ keyword, onChange }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SearchField isExpanded={isExpanded}>
      <SearchIconWrapper onClick={handleToggle} isExpanded={isExpanded}>
        <SearchIcon />
      </SearchIconWrapper>
      {isExpanded && (
        <StyledInputBase
          placeholder="Search…"
          aria-label="search"
          key="search-bar"
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </SearchField>
  );
}

const SearchField = styled.div<{ isExpanded: boolean }>`
  position: relative;
  transition: width 0.3s ease;
  margin-right: 0.3rem;
  display: flex;
  align-items: center;
  width: ${({ isExpanded }) => (isExpanded ? "14rem" : "1.5rem")};
`;

const SearchIconWrapper = styled.button<{ isExpanded: boolean }>`
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: fit-content;
  right: -0.4rem;
  z-index: 10;
  transition: width 0.3s ease;
  padding: 0;
`;

const StyledInputBase = styled.input`
  padding-left: 0.4rem;
  padding: 0.4rem 0.4rem;
  border-radius: 2rem;
  border: 0.075rem solid #333;
  transition: width 0.3s ease;
  width: 100%;
  border-radius: 2rem;
  position: absolute;
`;
