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
        <span>
          <span>Reviews </span>

          <span>{reviews.average_rating}</span>
        </span>
        <Review>
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
              },
            }}
          />
        </Review>
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
`;

const ProductText = styled.div`
  padding: 1rem 6rem 1rem 1rem;
  display: flex;
  max-width: 36rem;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  color: #505050;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const Review = styled.h5`
  margin: 0;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.1rem;

  p {
    padding-top: 2px;
    padding-right: 5px;
  }
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
  padding: 2rem;
  @media (max-width: 1090px) {
    width: 25%;
  }
`;
