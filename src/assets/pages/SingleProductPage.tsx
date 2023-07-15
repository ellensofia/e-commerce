import { Container } from "@mui/material";
import styled from "styled-components";
import { products } from "../../data";
import Product from "../components/Product";

export default function SingleProductPage() {
  return (
    <Container>
      <InnerContainer>
        <ShopTitle>Shop</ShopTitle>
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
  margin-top: 9rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 3rem;
  gap: 1.6rem;
`;

const ShopTitle = styled.h1`
  display: flex;
  font-size: 2rem;
  grid-column: 1/3;
`;
