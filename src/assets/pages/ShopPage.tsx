import { useEffect, useState } from "react";
import styled from "styled-components";
import { IProduct, products } from "../../data";
import Filter from "../components/Filter";
import Product from "../components/Product";
import img from "../images/cream.jpg";

export default function ShopPage() {
  const [filteredProducts, setFilteredProducts] =
    useState<IProduct[]>(products);

  const [activeCategoryFilters, setActiveCategoryFilters] = useState<string[]>(
    []
  );
  const [activeSkintypeFilters, setActiveSkintypeFilters] = useState<string[]>(
    []
  );

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
      console.log("hej, alla filtrerade objekt", filtered);
      console.log("hej", activeCategoryFilters);
      console.log("hej", activeSkintypeFilters);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [activeCategoryFilters, activeSkintypeFilters]);

  return (
    <InnerContainer>
      <ShopTitle>Products</ShopTitle>
      <div>
        <Filter
          activeCategoryFilters={activeCategoryFilters}
          activeSkintypeFilters={activeSkintypeFilters}
          setActiveCategoryFilters={setActiveCategoryFilters}
          setActiveSkintypeFilters={setActiveSkintypeFilters}
        />
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
