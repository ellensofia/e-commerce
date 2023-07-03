import { Rating } from "@mui/material";
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
        <p>{product_description}</p>
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
  padding-left: 10%;
  display: flex;
  gap: 2rem;
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

    p {
      max-height: 4rem;
      overflow: hidden;
    }
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  @media (max-width: 1090px) {
    font-size: 1rem;
  }
  @media (max-width: 900px) {
    font-size: 0.85rem;
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
  padding: 0.8rem 1.8rem;
  border: 1px solid #333;
  width: fit-content;
  border-radius: 2rem;
  font-size: 1.25;
  background-color: #fff;
`;

const StyledImage = styled.img`
  max-height: 25.25rem;
  object-fit: cover;
  position: relative;
  /* @media (max-width: 1090px) {
    width: 25%;
  } */
  @media (max-width: 1090px) {
    width: 45%;
  }
`;
