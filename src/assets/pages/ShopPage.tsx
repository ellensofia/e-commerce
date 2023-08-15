import styled from "styled-components";
import { products } from "../../data";
import Product from "../components/Product";
import img from "../images/cream.jpg";

export default function ShopPage() {
  return (
    <InnerContainer>
      <div>
        <ShopTitle>Shop</ShopTitle>
        <AllCategories>Filter by category</AllCategories>
      </div>
      <ProductGrid>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
        <img className="img" src={img} alt="" />
      </ProductGrid>
    </InnerContainer>
  );
}

const InnerContainer = styled.div`
  margin: 6rem 0 3rem;

  div:first-child {
    padding-left: 2rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  margin-top: 2rem;
  border-top: 1px solid var(--clr-dark-grey);
  border-left: 1px solid var(--clr-dark-grey);

  .img {
    min-width: calc(100% - 1px);
    object-fit: cover;
    border-bottom: 1px solid var(--clr-dark-grey);
    border-right: 1px solid var(--clr-dark-grey);
  }
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
