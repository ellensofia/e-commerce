import { useEffect, useState } from "react";
import styled from "styled-components";
import arrow from "../../assets/images/arrow-down.svg";
import { IProduct, categories, products, skintypes } from "../../data";
import Product from "../components/Product";
import img from "../images/cream.jpg";

export default function ShopPage() {
  const [categoriesExpanded, setCategoriesExpanded] = useState(false);
  const [skintypeExpanded, setSkintypeExpanded] = useState(false);
  const [filteredProducts, setFilteredProducts] =
    useState<IProduct[]>(products);
  const [activeCategoryFilters, setActiveCategoryFilters] = useState<string[]>(
    []
  );
  const [activeSkintypeFilters, setActiveSkintypeFilters] = useState<string[]>(
    []
  );

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
    if (activeCategoryFilters.length > 0 || activeSkintypeFilters.length > 0) {
      const filtered = products.filter((product) => {
        const matchesCategory =
          activeCategoryFilters.length === 0 ||
          activeCategoryFilters.some((filter) =>
            product.category.includes(filter)
          );
        const matchesSkintype =
          activeSkintypeFilters.length === 0 ||
          activeSkintypeFilters.some((filter) =>
            product.skinType.includes(filter)
          );
        return matchesCategory && matchesSkintype;
      });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [activeCategoryFilters, activeSkintypeFilters]);

  return (
    <InnerContainer>
      <ShopTitle>Products</ShopTitle>
      <div>
        <Filter>
          <FilterTitle>Filter</FilterTitle>
          <ExpandFilterButton
            $expanded={categoriesExpanded}
            onClick={() => setCategoriesExpanded(!categoriesExpanded)}
          >
            Select category
            <img src={arrow} alt="" />
          </ExpandFilterButton>
          <CategoryOptions $categoriesExpanded={categoriesExpanded}>
            {categoriesExpanded &&
              categories.map((category, i) => (
                <div
                  onClick={() => applyCategoryFilter(category.name)}
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
                    readOnly
                  />
                </div>
              ))}
          </CategoryOptions>
          <ExpandFilterButton
            $expanded={skintypeExpanded}
            onClick={() => setSkintypeExpanded(!skintypeExpanded)}
          >
            Select skintype
            <img src={arrow} alt="" />
          </ExpandFilterButton>
          <SkintypeOptions $skintypeExpanded={skintypeExpanded}>
            {skintypeExpanded &&
              skintypes.map((skintype, i) => (
                <div
                  onClick={() => applySkintypeFilter(skintype)}
                  key={i}
                  className={
                    activeSkintypeFilters.includes(skintype) ? "active" : ""
                  }
                >
                  <label htmlFor={skintype}>{skintype}</label>
                  <Checkbox
                    type="checkbox"
                    id={skintype}
                    name={skintype}
                    checked={activeSkintypeFilters.includes(skintype)}
                    readOnly
                  />
                </div>
              ))}
          </SkintypeOptions>
        </Filter>
        <ProductGrid>
          {filteredProducts &&
            filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          <div>
            <img className="img" src={img} alt="" />
          </div>
        </ProductGrid>
      </div>
    </InnerContainer>
  );
}

const InnerContainer = styled.div`
  margin: calc(var(--margin-xlg) + 4px) 0 var(--margin-xlg);

  > div {
    display: flex;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  border-top: 1px solid var(--clr-dark-grey);
  border-left: 1px solid var(--clr-dark-grey);
  flex: 1;

  .img {
    width: calc(100% - 1px);
    height: 100%;
    object-fit: cover;
    border-bottom: 1px solid var(--clr-dark-grey);
    border-right: 1px solid var(--clr-dark-grey);
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;

const ShopTitle = styled.h1`
  font-size: var(--font-size-lg);
  padding: var(--margin-sm) var(--margin-md);
`;

const Checkbox = styled.input`
  accent-color: var(--clr-dark-grey);
  transform: scale(1.5);
  -webkit-transform: scale(1.5);
  &::checked {
    background-color: #ccc;
  }
`;

const FilterTitle = styled.h4`
  display: flex;
  padding: var(--margin-sm) var(--margin-md);
  border-top: 1px solid var(--clr-dark-grey);
  border-bottom: 1px solid var(--clr-dark-grey);
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  border-bottom: 1px solid var(--clr-dark-grey);
`;

const ExpandFilterButton = styled.button<{ $expanded: boolean }>`
  font-size: var(--font-size-base);
  color: var(--clr-dark-grey);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease;
  border-bottom: 1px solid var(--clr-dark-grey);
  background-color: #fff0;
  border-radius: 0;
  min-height: 70px;
  padding: 0 var(--margin-md);

  img {
    width: 1rem;
    transform-origin: center;
    transition: transform 0.3s ease;
    transform: ${({ $expanded }) =>
      $expanded ? "rotate(-180deg)" : "rotate(0deg)"};
  }
`;

const CategoryOptions = styled.div<{ $categoriesExpanded: boolean }>`
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

const SkintypeOptions = styled.div<{ $skintypeExpanded: boolean }>`
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
  }
`;
