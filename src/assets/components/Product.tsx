import { Rating } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Product } from "../../data";
export interface Props {
  product: Product;
  index: number;
}

export default function Product({ product, index }: Props) {
  const { image, product_name, price, reviews, amount } = product;

  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <OuterBox>
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
        <NavLink to={"/shop/:id"}>Link</NavLink>
        <ShowMoreBtn
          onClick={() => setShowFullDescription((prevState) => !prevState)}
        >
          hej
        </ShowMoreBtn>
        <Details>
          {amount.map((size, i) => (
            <span key={i}>{size}</span>
          ))}
        </Details>
        <span>{price}EUR</span>
        <Button>Buy</Button>
      </ProductText>
    </OuterBox>
  );
}

const ProductText = styled.div`
  display: flex;
  max-width: 36rem;
  flex-direction: column;
  gap: 1rem;
  color: #505050;
  @media (max-width: 1090px) {
    font-size: 0.8rem;
    gap: 0.6rem;
  }

  @media (max-width: 600px) {
    gap: 0.4rem;
  }
`;

const Review = styled.span`
  margin: 0;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  @media (max-width: 900px) {
    font-size: 0.7rem;
  }
`;

const TotalReviews = styled.p`
  font-size: 0.6rem;
  @media (max-width: 900px) {
    font-size: 0.55rem;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.15rem;
  @media (max-width: 1090px) {
    font-size: 1rem;
  }
  @media (max-width: 900px) {
    font-size: 0.75rem;
  }
`;

const ShowMoreBtn = styled.button`
  width: fit-content;
  font-size: 0.6rem;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;
`;

const Details = styled.div`
  margin: 0;
  font-size: 0.781rem;
  display: flex;
  gap: 1rem;
  color: #626262;
`;

const Button = styled.button`
  border: 1px solid #333;
  width: fit-content;
  border-radius: 2rem;
  background-color: #fff;
`;

const OuterBox = styled.div`
  border: 1px solid #333;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  object-fit: contain;
  position: relative;
  max-width: 160px;

  @media (max-width: 900px) {
    width: 120px;
  }
`;
