import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import arrow from "../../assets/images/arrow-down.svg";
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
  const [showFullDirection, setShowFullDirection] = useState(false);

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
              >
                Show more
              </ShowMoreBtn>
              <Directions
                showFullDirection={showFullDirection}
                onClick={() => setShowFullDirection(!showFullDirection)}
              >
                <div>
                  <h4>Directions</h4>
                  <img src={arrow} alt="" />
                </div>
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
              <Price>
                <span>{price}EUR</span>
              </Price>
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
  margin-top: 10%;
  margin-bottom: 15%;
  font-size: var(--font-size-base);

  @media (max-width: 900px) {
    margin-top: var(--margin-md);
    margin-bottom: var(--margin-xlg);
    max-width: none;
  }
`;

const ProductContainer = styled.span`
  display: flex;
  gap: var(--margin-lg);

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: var(--font-size-lg);
  padding-bottom: var(--margin-sm);
`;

const Price = styled.div`
  font-size: var(--font-size-base);
`;

const ShowMoreBtn = styled.button`
  width: fit-content;
  font-size: 0.6rem;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;
  display: none;
  color: var(--clr-dark-grey);

  @media (max-width: 900px) {
    display: block;
  }
`;
const ProductDescription = styled.p<{ showFullDescription: boolean }>`
  font-size: var(--font-size-base);
  @media (max-width: 900px) {
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
  color: var(--clr-dark-grey);
  border-radius: 0;
  cursor: pointer;
  border-bottom: ${({ selected }) => (selected ? "1px solid black" : "none")};
`;

const Directions = styled.div<{ showFullDirection: boolean }>`
  margin: 0;
  font-size: var(--font-size-base);
  display: flex;
  flex-direction: column;
  gap: var(--margin-sm);
  border-top: 1px solid var(--clr-dark-grey);
  border-bottom: 1px solid var(--clr-dark-grey);
  padding: var(--margin-sm) 0 0 0;
  overflow: hidden;
  padding-right: var(--margin-sm);

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  img {
    width: 1.2rem;
    transform-origin: center;
    transition: transform 0.3s ease;
    transform: ${({ showFullDirection }) =>
      showFullDirection ? "rotate(-180deg)" : "rotate(0deg)"};
  }

  p {
    max-height: ${({ showFullDirection }) =>
      showFullDirection ? "1000px" : "0px"};
    transition: max-height 0.2s ease, padding 0.2s ease, opacity 0.2s ease;
    padding: ${({ showFullDirection }) =>
      showFullDirection ? "0 0 1rem 0" : "0"};
    opacity: ${({ showFullDirection }) => (showFullDirection ? 1 : 0)};
    overflow: hidden;
  }
`;

const Details = styled.div`
  margin: 0;
  font-size: var(--font-size-sm);
  display: flex;
  gap: var(--margin-sm);
  border-bottom: 1px solid var(--clr-dark-grey);
  padding: 0.4rem 0 1.5rem 0;
`;

const Button = styled.button`
  border: 1px solid #333;
  width: fit-content;
  border-radius: 2rem;
  background-color: #fff;
  color: var(--clr-dark-grey);
`;

const OuterBox = styled.div`
  padding: var(--margin-sm) var(--margin-md) var(--margin-md);
  gap: var(--margin-sm);
  display: flex;
  justify-content: center;
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const StyledImage = styled.img`
  object-fit: contain;
  position: relative;
  max-width: 20vw;
  display: flex;
  align-self: flex-start;
  padding-bottom: var(--margin-sm);

  @media (max-width: 900px) {
    width: 220px;
    max-width: 70vw;
    justify-self: center;
    padding-bottom: 0;
  }
`;
