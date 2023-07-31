import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Product } from "../../data";
export interface Props {
  product: Product;
}

export default function Product({ product }: Props) {
  const { image, id, product_name, prices, reviews, amount } = product;

  const [showFullDescription, setShowFullDescription] = useState(false);
  const [selectedAmountIndex, setSelectedAmountIndex] = useState(0);

  useEffect(() => {
    setPrice(prices[selectedAmountIndex]);
  }, [selectedAmountIndex, prices]);

  const [price, setPrice] = useState(prices[selectedAmountIndex]);

  return (
    <>
      <StyledLink to={`/shop/${product.id}`}>
        <OuterBox>
          <StyledImage src={image} alt={product_name} key={id} />
          <ProductText>
            <Title>{product_name}</Title>
            {/* <Review> */}
            {/* <span>Reviews </span>
          <TotalReviews>({reviews.total_reviews})</TotalReviews>
          <span>{reviews.average_rating}</span>
          <Rating
            name={`rating-${id}`}
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
        </Review> */}
            View details
            {/* <ShowMoreBtn
          onClick={() => setShowFullDescription((prevState) => !prevState)}
        ></ShowMoreBtn> */}
            {/* <Details>
          {amount.map((size, i) => (
            <AmountBtn
              key={i}
              onClick={() => setSelectedAmountIndex(i)}
              selected={i === selectedAmountIndex}
            >
              <span key={i}>{size}</span>
            </AmountBtn>
          ))}
        </Details> */}
            <span>{price}EUR</span>
            <Button>Buy</Button>
          </ProductText>
        </OuterBox>
      </StyledLink>
    </>
  );
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

const Review = styled.span`
  margin: 0;
  font-size: var(--font-size-sm);
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

// const TotalReviews = styled.p`
//   font-size: 0.6rem;
//   @media (max-width: 900px) {
//     font-size: 0.55rem;
//   }
// `;

const Title = styled.h3`
  margin: 0;
  font-size: var(--font-size-base);
`;

// const ShowMoreBtn = styled.button`
//   width: fit-content;
//   font-size: var(--font-size-sm);
//   background-color: transparent;
//   padding: 0;
//   cursor: pointer;
//   text-decoration: underline;
// `;

const AmountBtn = styled.button<{ selected: boolean }>`
  width: fit-content;
  font-size: var(--font-size-sm);
  background-color: transparent;
  padding: 0;
  border-radius: 0;
  cursor: pointer;
  border-bottom: ${({ selected }) => (selected ? "1px solid black" : "none")};
`;

const Details = styled.div`
  margin: 0;
  font-size: var(--font-size-sm);
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
  /* border-bottom: 1px solid var(--clr-dark-grey);
  border-right: 1px solid var(--clr-dark-grey);
  padding: 2rem 2rem 2rem 1rem;
  gap: 1rem;
  height: 100%;
  align-items: center; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  border-bottom: 1px solid var(--clr-dark-grey);
  border-right: 1px solid var(--clr-dark-grey);
  padding: 2rem 2rem 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img`
  object-fit: contain;
  position: relative;
  max-width: 160px;
  min-width: 200px;

  @media (max-width: 900px) {
    width: 120px;
  }
`;
