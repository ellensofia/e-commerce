import { useEffect, useRef } from "react";
import styled from "styled-components";

interface Props {
  keyword: string;
  onChange: (keyword: string) => void;
  isExpanded: boolean;
  setIsexpanded: (isExpanded: boolean) => void;
}

export default function SearchBar({
  keyword,
  onChange,
  isExpanded,
  setIsexpanded,
}: Props) {
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
    <SearchField
      isexpanded={isExpanded ? "true" : "false"}
      ref={searchFieldRef}
    >
      <SearchFieldInner>
        {isExpanded && (
          <StyledInput
            isexpanded={isExpanded.toString()}
            placeholder="Search…"
            aria-label="search"
            key="search-bar"
            onChange={(e) => onChange(e.target.value)}
          />
        )}
        <SearchIconBtn
          onClick={handleSearchFocus}
          isexpanded={isExpanded.toString()}
        >
          <span className="material-symbols-outlined">search</span>
        </SearchIconBtn>
      </SearchFieldInner>
    </SearchField>
  );
}

const SearchField = styled.div<{ isexpanded?: string }>`
  position: relative;
  transition: width 0.2s ease;
  display: flex;
  align-items: center;

  @media (max-width: 400px) {
    ${({ isexpanded }) =>
      isexpanded === "true"
        ? `
      top: 3.8rem;
      position: fixed;
      background-color: white;
      left: 0;
      width: 100%;
      z-index: 999;
      padding: 2rem 1rem 2.6rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    `
        : ""}
    > div:first-of-type {
      position: absolute;
      input {
        width: 14rem;
      }
    }
  }
`;

const SearchFieldInner = styled.div<{ isexpanded?: string }>`
  @media (max-width: 400px) {
    > div:first-of-type {
      position: absolute;
    }
  }
`;

const StyledInput = styled.input<{ isexpanded: string }>`
  padding-left: 0.4rem;
  padding: 0.4rem 0.4rem;
  border-radius: 2rem;
  border: 0.075rem solid #333;
  position: relative;
  width: 8rem;
`;

const SearchIconBtn = styled.button<{ isexpanded: string }>`
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 0;
  ${({ isexpanded }) =>
    isexpanded === "true"
      ? `
        right: .4rem;
        top: .1rem;
        `
      : `
        right: 0rem;
        top: -.8rem;`};
`;
