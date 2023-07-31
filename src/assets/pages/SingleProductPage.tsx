import { Container } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { products } from "../../data";
import SingleProduct from "../components/SingleProduct";

export default function SingleProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  return (
    <Container>
      <InnerContainer>
        <Top>
          <ShopTitle>Shop</ShopTitle>
          <Link to={`/shop/`}>Back</Link>
        </Top>
        {/* {product && (
          <ProductGrid>
            <span>{product.product_name}</span>
            <Product key={product.id} product={product} />
          </ProductGrid>
        )} */}
        <SingleProduct />
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

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
