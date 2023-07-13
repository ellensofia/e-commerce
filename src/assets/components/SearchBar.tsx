import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Props {
  keyword: string;
  onChange: (keyword: string) => void;
}

export default function SearchBar({ keyword, onChange }: Props) {
  const [isexpanded, setIsexpanded] = useState(false);
  const searchFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchFieldRef.current &&
        !searchFieldRef.current.contains(event.target as Node)
      ) {
        setIsexpanded(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSearchFocus = () => {
    setIsexpanded(true);
  };

  return (
    <SearchField isexpanded={isexpanded.toString()} ref={searchFieldRef}>
      <SearchIconWrapper
        onClick={handleSearchFocus}
        isexpanded={isexpanded.toString()}
      >
        <SearchIcon />
      </SearchIconWrapper>
      {isexpanded && (
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

const SearchField = styled.div<{ isexpanded: string }>`
  position: relative;
  transition: width 0.3s ease;
  margin-right: 1.6rem;
  display: flex;
  align-items: center;
  width: ${({ isexpanded }) => (isexpanded === "true" ? "14rem" : "1.5rem")};

  @media (max-width: 900px) {
    width: ${({ isexpanded }) => (isexpanded === "true" ? "8rem" : "1.5rem")};
    margin-right: ${({ isexpanded }) =>
      isexpanded === "true" ? "1rem" : "0.6rem"};
  }
`;

const SearchIconWrapper = styled.button<{ isexpanded: string }>`
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
