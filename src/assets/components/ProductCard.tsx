import { Rating } from "@mui/material";
import { useState } from "react";
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
  const { image, product_name, price, reviews, product_description, amount } =
    product;

  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <StyledCarouselItem
      index={index}
      style={{
        transform: `translateX(${(index - currentItemIndex) * 100}%)`,
        transition: "transform 1.6s ease-in-out",
      }}
    >
      <StyledImage src={image} alt={product_name} key={index} />
      <ProductText>
        <Title>{product_name}</Title>
        <Review>
          <span>Reviews </span>
          <TotalReviews>({reviews.total_reviews})</TotalReviews>
          <span>{reviews.average_rating}</span>
        </Review>
        <Rating
          name={`rating-${index}`}
          value={parseFloat(reviews.average_rating.toFixed(1))}
          precision={0.5}
          readOnly
          sx={{
            "& .MuiRating-iconFilled": {
              color: "#555555",
            },
            "& .MuiRating-iconHover": {
              color: "pink",
            },
            "& .MuiRating-icon SVG": {
              color: "#555",
              fontSize: "0.8rem",
            },
          }}
        />
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
            <span key={i}>{size}</span>
          ))}
        </Details>
        <span>{price}EUR</span>
        <Button>Buy</Button>
      </ProductText>
    </StyledCarouselItem>
  );
}

const StyledCarouselItem = styled.div<{ index: number }>`
  position: absolute;
  height: 100%;
  width: 65%;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-left: 6%;
  display: flex;
  padding-right: 3%;
  margin-left: 6%;
  border-left: 1px solid #333;
  border-collapse: collapse;

  gap: 2rem;

  &:last-of-type {
    border-right: 1px solid #333;
  }

  @media (max-width: 1090px) {
    width: 75%;
    gap: 1rem;
  }
`;

const ProductText = styled.div`
  display: flex;
  max-width: 36rem;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  color: #505050;
  @media (max-width: 1090px) {
    font-size: 0.8rem;
    gap: 0.6rem;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  @media (max-width: 1090px) {
    font-size: 1rem;
  }
  @media (max-width: 900px) {
    font-size: 0.75rem;
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

const Review = styled.span`
  margin: 0;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const TotalReviews = styled.p`
  font-size: 0.6rem;
`;

const Details = styled.div`
  margin: 0;
  font-size: 0.781rem;
  display: flex;
  gap: 1rem;
  color: #626262;
`;

const Button = styled.button`
  /* padding: 0.8rem 1.8rem; */
  border: 1px solid #333;
  width: fit-content;
  border-radius: 2rem;
  background-color: #fff;
`;

const StyledImage = styled.img`
  max-height: 25.25rem;
  object-fit: cover;
  position: relative;
  @media (max-width: 900px) {
    width: 25%;
  }
  @media (max-width: 1090px) {
    width: 40%;
  }
`;
