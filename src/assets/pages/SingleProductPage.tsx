import { Breadcrumbs, Container, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import SingleProduct from "../components/SingleProduct";

export default function SingleProductPage() {
  return (
    <Container>
      <InnerContainer>
        <Top>
          <Breadcrumbs separator="/" aria-label="breadcrumb">
            <NavLink to="./" color="#333">
              Startpage
            </NavLink>
            <NavLink to="./">Categories</NavLink>
            <Typography>Moisturizer</Typography>{" "}
          </Breadcrumbs>
          <Link to={`/shop/`}>Back</Link>
        </Top>
        <SingleProduct />
      </InnerContainer>
    </Container>
  );
}

const InnerContainer = styled.div`
  margin-top: 5rem;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: #333;
  }
`;
