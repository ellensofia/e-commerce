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
  margin: var(--margin-xxlg) 0 var(--margin-xlg);

  div:first-child {
    padding-left: var(--margin-md);
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  margin-top: var(--margin-md);
  border-top: 1px solid var(--clr-dark-grey);
  border-left: 1px solid var(--clr-dark-grey);

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
  display: flex;
  font-size: var(--font-size-lg);
  margin-bottom: var(--margin-sm);
`;

const AllCategories = styled.span`
  font-size: var(--font-size-base);
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
