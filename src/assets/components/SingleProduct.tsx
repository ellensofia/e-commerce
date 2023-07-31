import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Product, products } from "../../data";
import ReviewSection from "./ReviewSection";

export interface Props {
  product: Product;
}

export default function SingleProduct() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  const [showFullDescription, setShowFullDescription] = useState(false);
  const [selectedAmountIndex, setSelectedAmountIndex] = useState(0);

  useEffect(() => {
    setPrice(product?.prices[selectedAmountIndex]);
  }, [selectedAmountIndex, product?.prices]);

  const [price, setPrice] = useState(product?.prices[selectedAmountIndex]);
  if (!product) {
    return (
      <>
        <h4>Product could not be found</h4>
      </>
    );
  } else {
    return (
      <OuterBox>
        <InnerBox>
          <ProductContainer>
            <StyledImage
              src={product.image}
              alt={product.product_name}
              key={id}
            />
            <ProductText>
              <Title>{product.product_name}</Title>

              <ProductDescription showFullDescription={showFullDescription}>
                {product.product_description}
              </ProductDescription>
              <ShowMoreBtn
                onClick={() =>
                  setShowFullDescription((prevState) => !prevState)
                }
              ></ShowMoreBtn>
              <Directions>
                <h4>Directions</h4>
                <p>{product.directions}</p>
              </Directions>
              <Details>
                {product.amount.map((size, i) => (
                  <AmountBtn
                    key={i}
                    onClick={() => setSelectedAmountIndex(i)}
                    selected={i === selectedAmountIndex}
                  >
                    <span key={i}>{size}</span>
                  </AmountBtn>
                ))}
              </Details>
              <span>{price}EUR</span>
              <Button>Buy</Button>
            </ProductText>
          </ProductContainer>
          <ReviewSection product={product} />
        </InnerBox>
      </OuterBox>
    );
  }
}

const ProductText = styled.div`
  display: flex;
  max-width: 36rem;
  flex-direction: column;
  gap: 1rem;
  color: #505050;
  font-size: var(--font-size-sm);

  @media (max-width: 1090px) {
    gap: 0.6rem;
  }

  @media (max-width: 600px) {
    gap: 0.4rem;
  }
`;

const ProductContainer = styled.span`
  padding: 1rem 0;
  display: flex;
  gap: 3rem;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: var(--font-size-lg);
  padding-bottom: 1rem;
`;

const ShowMoreBtn = styled.button`
  width: fit-content;
  font-size: 0.6rem;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;
const ProductDescription = styled.p<{ showFullDescription: boolean }>`
  @media (max-width: 900px) {
    font-size: 0.75rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: ${({ showFullDescription }) =>
      showFullDescription ? "visible" : "hidden"};
    -webkit-line-clamp: ${({ showFullDescription }) =>
      showFullDescription ? "" : "3"};
    text-overflow: ellipsis;
  }
`;

const AmountBtn = styled.button<{ selected: boolean }>`
  width: fit-content;
  font-size: var(--font-size-sm);
  background-color: transparent;
  padding: 0;
  border-radius: 0;
  cursor: pointer;
  border-bottom: ${({ selected }) => (selected ? "1px solid black" : "none")};
`;

const Directions = styled.div`
  margin: 0;
  font-size: var(--font-size-sm);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid var(--clr-dark-grey);
  padding: 1rem 0 0 0;
`;

const Details = styled.div`
  margin: 0;
  font-size: var(--font-size-sm);
  display: flex;
  gap: 1rem;
  border-top: 1px solid var(--clr-dark-grey);
  border-bottom: 1px solid var(--clr-dark-grey);
  padding: 1rem 0;
`;

const Button = styled.button`
  border: 1px solid #333;
  width: fit-content;
  border-radius: 2rem;
  background-color: #fff;
`;

const OuterBox = styled.div`
  padding: 2rem 2rem 2rem 1rem;
  gap: 1rem;
  display: flex;
  align-items: center;
`;

const InnerBox = styled.div`
  /* gap: 2rem; */
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const StyledImage = styled.img`
  object-fit: contain;
  position: relative;
  max-width: 20vw;

  @media (max-width: 900px) {
    width: 120px;
  }
`;
