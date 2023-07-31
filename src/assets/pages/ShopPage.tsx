import styled from "styled-components";
import { products } from "../../data";
import Product from "../components/Product";

export default function ShopPage() {
  return (
    <InnerContainer>
      <ShopTitle>Shop</ShopTitle>
      <AllCategories>Filter by category</AllCategories>
      <ProductGrid>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductGrid>
    </InnerContainer>
  );
}

const InnerContainer = styled.div`
  margin: 6rem 0 3rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  margin-top: 2rem;
  border-top: 1px solid var(--clr-dark-grey);
  border-left: 1px solid var(--clr-dark-grey);
`;

const ShopTitle = styled.h1`
  display: flex;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AllCategories = styled.span`
  font-size: 1.2rem;
  position: relative;
  color: var(--clr-dark-grey);

  &::after {
    position: absolute;
    content: "";
    left: 0;
    bottom: -0.1rem;
    background-color: var(--clr-dark-grey);
    width: 100%;
    height: 1px;
  }
`;
