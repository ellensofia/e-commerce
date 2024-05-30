import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import arrow from "../../assets/images/arrow.svg";
import { categories, skintypes } from "../../data";

interface Props {
  setActiveCategoryFilters: Dispatch<SetStateAction<string[]>>;
  setActiveSkintypeFilters: Dispatch<SetStateAction<string[]>>;
  activeCategoryFilters: string[];
  activeSkintypeFilters: string[];
}

export default function Filter({
  setActiveCategoryFilters,
  setActiveSkintypeFilters,
  activeCategoryFilters,
  activeSkintypeFilters,
}: Props) {
  const [categoriesExpanded, setCategoriesExpanded] = useState(false);
  const [skintypeExpanded, setSkintypeExpanded] = useState(false);
  const [expandedFilter, setExpandedFilter] = useState(true);

  const applyCategoryFilter = (selectedFilter: string) => {
    setActiveCategoryFilters((prevFilters) =>
      prevFilters.includes(selectedFilter)
        ? prevFilters.filter((filter) => filter !== selectedFilter)
        : [...prevFilters, selectedFilter]
    );
  };

  const applySkintypeFilter = (selectedFilter: string) => {
    setActiveSkintypeFilters((prevFilters) =>
      prevFilters.includes(selectedFilter)
        ? prevFilters.filter((filter) => filter !== selectedFilter)
        : [...prevFilters, selectedFilter]
    );
  };

  useEffect(() => {
    if (window.innerWidth < 500) {
      setExpandedFilter(false);
    }
  }, []);

  return (
    <Container $expandedFilter={expandedFilter}>
      <Top $expandedFilter={expandedFilter}>
        <h4>Filter</h4>
        <ToggleFilterOpenButton
          onClick={() => setExpandedFilter(!expandedFilter)}
          $expandedFilter={expandedFilter}
        />
      </Top>
      {expandedFilter ? (
        <>
          <ExpandFilterOptionsButton
            $expandedFilterOption={categoriesExpanded}
            onClick={() => setCategoriesExpanded(!categoriesExpanded)}
          >
            Select category
            <img src={arrow} alt="" />
          </ExpandFilterOptionsButton>

          <CategoryOptions
            $categoriesExpanded={categoriesExpanded}
            $expandedFilter={expandedFilter}
          >
            {categoriesExpanded &&
              categories.map((category, i) => (
                <div
                  key={i}
                  className={
                    activeCategoryFilters.includes(category.name)
                      ? "active"
                      : ""
                  }
                >
                  <label htmlFor={category.name}>{category.name}</label>
                  <Checkbox
                    type="checkbox"
                    id={category.name}
                    name={category.name}
                    checked={activeCategoryFilters.includes(category.name)}
                    onChange={() => applyCategoryFilter(category.name)}
                  />
                </div>
              ))}
          </CategoryOptions>
          <ExpandFilterOptionsButton
            $expandedFilterOption={skintypeExpanded}
            onClick={() => setSkintypeExpanded(!skintypeExpanded)}
          >
            Select skintype
            <img src={arrow} alt="" />
          </ExpandFilterOptionsButton>
          <SkintypeOptions
            $skintypeExpanded={skintypeExpanded}
            $expandedFilter={expandedFilter}
          >
            {skintypeExpanded &&
              skintypes.map((skintype, i) => (
                <div
                  key={i}
                  className={
                    activeSkintypeFilters.includes(skintype) ? "active" : "ee"
                  }
                >
                  <label htmlFor={skintype}>{skintype}</label>
                  <Checkbox
                    type="checkbox"
                    id={skintype}
                    name={skintype}
                    checked={activeSkintypeFilters.includes(skintype)}
                    onChange={() => applySkintypeFilter(skintype)}
                  />
                </div>
              ))}
          </SkintypeOptions>
        </>
      ) : (
        <Closed onClick={() => setExpandedFilter(!expandedFilter)}>
          Open filter
        </Closed>
      )}
    </Container>
  );
}

const Container = styled.div<{ $expandedFilter: boolean }>`
  display: flex;
  flex-direction: column;
  width: 250px;
  border-bottom: 1px solid var(--clr-dark-grey);
  width: ${({ $expandedFilter }) => ($expandedFilter ? "250px" : "2.2rem")};
  @media (max-width: 660px) {
    width: ${({ $expandedFilter }) => ($expandedFilter ? "180px" : "2.2rem")};
  }
`;

const Top = styled.div<{ $expandedFilter: boolean }>`
  display: flex;
  justify-content: ${({ $expandedFilter }) =>
    $expandedFilter ? "space-between" : "center"};
  align-items: center;
  border-top: 1px solid var(--clr-dark-grey);
  border-bottom: 1px solid var(--clr-dark-grey);
  padding: ${({ $expandedFilter }) =>
    $expandedFilter ? "0 var(--margin-md)" : "0"};

  h4 {
    padding: var(--margin-sm) 0;
    transform-origin: 25%;
    display: ${({ $expandedFilter }) => ($expandedFilter ? "flex" : "none")};
  }

  @media (max-width: 660px) {
    padding: ${({ $expandedFilter }) => ($expandedFilter ? "0 1rem" : "0")};
  }
`;

const Closed = styled.div`
  display: flex;
  rotate: 90deg;
  padding-left: 1.5rem;
  font-family: var(--font-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
  cursor: pointer;
`;

const ToggleFilterOpenButton = styled.button<{ $expandedFilter: boolean }>`
  border: none;
  position: relative;
  width: 1.25rem;
  height: 0.07rem;
  display: flex;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
  background-color: transparent;

  &::after,
  &::before {
    content: "";
    position: absolute;
    background-color: var(--clr-dark-grey);
    width: inherit;
    height: inherit;
    width: ${({ $expandedFilter }) =>
      $expandedFilter ? "inherit" : "0.85rem"};
    top: 50%;
    transition: 0.6s ease;
    transform-origin: center;
  }

  &::after {
    transform: ${({ $expandedFilter }) =>
      $expandedFilter ? "rotate(-45deg)" : "rotate(40deg)"};
    top: ${({ $expandedFilter }) => ($expandedFilter ? "50%" : "36%")};
  }

  &::before {
    top: ${({ $expandedFilter }) => ($expandedFilter ? "50%" : "61%")};
    transform: ${({ $expandedFilter }) =>
      $expandedFilter ? "rotate(45deg)" : "rotate(-40deg)"};
  }
`;

const Checkbox = styled.input`
  accent-color: var(--clr-dark-grey);
  transform: scale(1.5);
  -webkit-transform: scale(1.5);
  &::checked {
    background-color: #ccc;
  }
`;

const ExpandFilterOptionsButton = styled.button<{
  $expandedFilterOption: boolean;
}>`
  font-size: var(--font-size-base);
  color: var(--clr-dark-grey);
  width: 100%;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease;
  border-bottom: 1px solid var(--clr-dark-grey);
  background-color: #fff0;
  border-radius: 0;
  min-height: 70px;
  padding: 0 var(--margin-md);

  @media (max-width: 660px) {
    padding: 0 1rem;
  }

  img {
    width: 1rem;
    transform-origin: center;
    transition: transform 0.3s ease;
    transform: ${({ $expandedFilterOption }) =>
      $expandedFilterOption ? "rotate(90deg)" : "rotate(0deg)"};

    @media (max-width: 660px) {
      display: none;
    }
  }
`;

const CategoryOptions = styled.div<{
  $categoriesExpanded: boolean;
  $expandedFilter: boolean;
}>`
  display: flex;
  flex-direction: column;
  position: relative;
  border-bottom: ${({ $categoriesExpanded }) =>
    $categoriesExpanded ? "1px solid var(--clr-dark-grey)" : "none"};
  max-height: ${({ $categoriesExpanded }) =>
    $categoriesExpanded ? "fit-content" : "0px"};
  transition: max-height 0.3s ease, padding 0.3s ease, opacity 0.3s ease;
  opacity: ${({ $categoriesExpanded }) => ($categoriesExpanded ? 1 : 0)};
  gap: 1rem;
  padding: ${({ $categoriesExpanded }) =>
    $categoriesExpanded ? "1rem 0" : "0"};

  &.active {
    text-decoration: underline;
    font-size: 3rem;
  }

  div {
    width: 100%;
    padding: 1rem var(--margin-md);
    text-align: left;
    border-radius: 0;
    display: flex;
    font-weight: 100;
    text-underline-position: under;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--margin-md);
    font-family: var(--font-primary);
    & label {
      width: 100%;
      cursor: pointer;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SkintypeOptions = styled.div<{
  $skintypeExpanded: boolean;
  $expandedFilter: boolean;
}>`
  display: flex;
  flex-direction: column;
  position: relative;
  border-bottom: ${({ $skintypeExpanded }) =>
    $skintypeExpanded ? "1px solid var(--clr-dark-grey)" : "none"};
  max-height: ${({ $skintypeExpanded }) =>
    $skintypeExpanded ? "fit-content" : "0px"};
  transition: max-height 0.3s ease, padding 0.3s ease, opacity 0.3s ease;
  opacity: ${({ $skintypeExpanded }) => ($skintypeExpanded ? 1 : 0)};
  gap: 1rem;
  padding: ${({ $skintypeExpanded }) => ($skintypeExpanded ? "1rem 0" : "0")};

  div {
    width: 100%;
    padding: 1rem var(--margin-md);
    text-align: left;
    border-radius: 0;
    display: flex;
    gap: 0.75rem;
    font-weight: 100;
    text-underline-position: under;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--margin-md);
    font-family: var(--font-primary);

    & label {
      width: 100%;
      cursor: pointer;
    }
    & checkbox {
      cursor: pointer;
    }
    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 660px) {
      label {
        font-size: 14px;
      }
      padding: 0 1rem;
    }
  }
`;
