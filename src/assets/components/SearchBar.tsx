import { useEffect, useRef } from "react";
import styled from "styled-components";

interface Props {
  isExpanded: boolean;
  setIsexpanded: (isExpanded: boolean) => void;
}

export default function SearchBar({ isExpanded, setIsexpanded }: Props) {
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
  transition: width 0.8s 0.8s ease-in-out;

  @media (max-width: 640px) {
    input {
      width: calc(100vw - 1.4rem);
      width: 0px;
      border: none;
    }

    /** background to search field */
    ${({ isexpanded }) =>
      isexpanded === "true"
        ? `
      top: var(--header-height);
      position: fixed;
      background-color: white;
      left: 0;
      width: 100%;
      z-index: 999;
      padding: var(--margin-md) var(--margin-xsm);
      border-bottom: 1px solid var(--clr-dark-grey);
    `
        : ""}
    > div:first-of-type {
      position: absolute;
      input {
        width: calc(100vw - 1.4rem);
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
  width: 1rem;
  width: ${({ isexpanded }) => (isexpanded === "true" ? "250px" : "1.4rem")};
`;

const SearchIconBtn = styled.button<{ isexpanded: string }>`
  background: none;
  display: flex;
  transition: none;
  /* transition: 0.4s ; */
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 0;
  ${({ isexpanded }) =>
    isexpanded === "true"
      ? `
        right: .1rem;
        top: 0rem;
        `
      : `
        right: 0rem;
        top: -.9rem;`};
`;
