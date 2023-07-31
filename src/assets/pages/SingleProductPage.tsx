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
          <BreadCrumbs>...</BreadCrumbs>
          <Link to={`/shop/`}>Back</Link>
        </Top>
        <SingleProduct />
      </InnerContainer>
    </Container>
  );
}

const InnerContainer = styled.div`
  margin-top: 7rem;
`;

const BreadCrumbs = styled.h3`
  display: flex;
  font-size: var(--font-size-base);
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
