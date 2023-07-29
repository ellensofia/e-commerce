import { Container } from "@mui/material";
import styled from "styled-components";
import { products } from "../../data";
import Product from "../components/Product";

export default function ShopPage() {
  return (
    <Container>
      <InnerContainer>
        <ShopTitle>Shop</ShopTitle>
        <AllCategories>Filter by category</AllCategories>
        <ProductGrid>
          {products.map((product, index) => (
            <Product key={index} product={product} index={index} />
          ))}
        </ProductGrid>
      </InnerContainer>
    </Container>
  );
}

const InnerContainer = styled.div`
  margin-top: 6rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  color: #333;

  &::after {
    position: absolute;
    content: "";
    left: 0;
    bottom: -0.1rem;
    background-color: #333;
    width: 100%;
    height: 1px;
  }
`;
