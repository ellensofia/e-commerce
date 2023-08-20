import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Product } from "../../data";
export interface Props {
  product: Product;
  currentItemIndex: number;
  index: number;
}

export default function productCard({
  product,
  currentItemIndex,
  index,
}: Props) {
  const { image, product_name, prices, reviews, product_description, amount } =
    product;

  const [showFullDescription, setShowFullDescription] = useState(false);
  const [selectedAmountIndex, setSelectedAmountIndex] = useState(0);

  useEffect(() => {
    setPrice(prices[selectedAmountIndex]);
  }, [selectedAmountIndex, prices]);

  const [price, setPrice] = useState(prices[selectedAmountIndex]);

  return (
    <StyledCarouselItem
      index={index}
      style={{
        transform: `translateX(${(index - currentItemIndex) * 100}%)`,
        transition: "transform 1s ease-in-out",
      }}
    >
      <StyledImage src={image} alt={product_name} key={index} />
      <ProductText>
        <Title>{product_name}</Title>
        <Review>
          <span>Reviews </span>
          <span>{reviews.average_rating}</span>
          <Rating
            name={`rating-${index}`}
            value={parseFloat(reviews.average_rating.toFixed(1))}
            precision={0.5}
            readOnly
            sx={{
              paddingLeft: ".6rem",
              "& .MuiRating-iconFilled": {
                color: "#555555",
              },
              "& .MuiRating-iconHover": {
                color: "pink",
              },
              "& .MuiRating-icon SVG": {
                color: "var(--clr-dark-grey)",
                fontSize: "0.9rem",
              },
            }}
          />
        </Review>
        <ProductDescription showFullDescription={showFullDescription}>
          {product_description}
        </ProductDescription>
        <ShowMoreBtn
          onClick={() => setShowFullDescription((prevState) => !prevState)}
        >
          {showFullDescription ? "Show Less" : "Show More"}
        </ShowMoreBtn>

        <Details>
          {amount.map((size, i) => (
            <AmountBtn
              key={i}
              onClick={() => setSelectedAmountIndex(i)}
              selected={i === selectedAmountIndex}
            >
              <span key={i}>{size}</span>
            </AmountBtn>
          ))}
        </Details>
        <span>{price} EUR</span>
        <Button id="button">Buy</Button>
      </ProductText>
    </StyledCarouselItem>
  );
}

const StyledCarouselItem = styled.div<{ index: number }>`
  position: absolute;
  height: 100%;
  width: 70%;
  overflow: hidden;
  display: flex;
  align-items: center;
  display: flex;
  border-left: 1px solid var(--clr-dark-grey);
  gap: 3rem;

  &:last-of-type {
    border-right: 1px solid var(--clr-dark-grey);
  }

  @media (min-width: 1450px) {
    width: 870px;
  }

  @media (max-width: 1090px) {
    width: 78%;
    gap: 1rem;
    padding-right: 6%;
  }
  @media (max-width: 600px) {
    width: calc(100% - 6rem);
  }

  @media (max-width: 460px) {
    padding-right: 1rem;
    padding-right: 3%;

    width: calc(100% - 4rem);
  }
`;

const ProductText = styled.div`
  display: flex;
  max-width: 31rem;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;
  color: #505050;
  font-size: var(--font-size-base);
  @media (max-width: 1090px) {
    gap: 0.6rem;
    @media (max-width: 640px) {
      gap: 0.4rem;
    }
  }
`;

const Review = styled.span`
  margin: 0;
  font-size: var(--font-size-sm);
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const AmountBtn = styled.button<{ selected: boolean }>`
  background-color: transparent;
  border-radius: 0;
  padding: 0;
  border: none;
  position: relative;
  padding-bottom: 0.3rem;

  &:first-child {
    margin-right: 1rem;
  }

  &::after {
    content: "";
    background-color: var(--clr-dark-grey);
    height: 1px;
    width: 100%;
    left: 0;
    bottom: 0;
    display: ${({ selected }) => (selected ? "block" : "none")};
    position: absolute;
  }
  @media (max-width: 900px) {
    font-size: 0.55rem;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: var(--font-size-md);
  @media (max-width: 640px) {
    font-size: var(--font-size-base);
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

const Details = styled.div`
  margin: 0;
  font-size: 0.781rem;
  display: flex;
  gap: 1rem;
  color: #626262;
  @media (max-width: 600px) {
    gap: 0rem;
  }
`;

const Button = styled.button`
  border: 1px solid var(--clr-dark-grey);
  width: fit-content;
  border-radius: 2rem;
  background-color: #fff;
`;

const StyledImage = styled.img`
  max-height: 25.25rem;
  object-fit: cover;
  position: relative;
  padding-left: 3rem;

  @media (max-width: 1090px) {
    width: 200px;
    padding-left: 2rem;
  }

  @media (max-width: 600px) {
    width: 140px;
    padding-left: 1rem;
  }

  @media (max-width: 460px) {
    width: 100px;
    padding-left: 0rem;
  }
`;
