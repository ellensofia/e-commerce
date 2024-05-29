import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IProduct } from "../../data";
export interface Props {
  product: IProduct;
}

export default function Product({ product }: Props) {
  const { image, id, product_name, prices, reviews } = product;

  const [selectedAmountIndex] = useState(0);

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
            <Bottom>
              <Price>{price}EUR</Price>
              <Review>
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
                      fontSize: "0.9rem !important",
                    },
                  }}
                />
              </Review>
            </Bottom>
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
  gap: var(--margin-sm);
  color: #505050;
  width: 100%;
  font-size: var(--font-size-sm);

  @media (max-width: 600px) {
    gap: var(--margin-xsm);
  }
`;

const Review = styled.span`
  margin: 0;
  font-size: var(--font-size-sm);
  display: flex;
  align-items: center;
  gap: var(--margin-xxsm);
`;

const Bottom = styled.div`
  font-size: var(--font-size-m);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: var(--margin-xsm);
`;

const Price = styled.p`
  font-size: var(--font-size-base);
  font-weight: 300;
`;

const Title = styled.h3`
  margin: 0;
  font-size: var(--font-size-base);
`;

const OuterBox = styled.div`
  display: flex;
  padding: var(--margin-sm) var(--margin-md) var(--margin-md);
  flex-direction: column;
  gap: var(--margin-sm);
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
`;

const StyledLink = styled(Link)`
  border-bottom: 1px solid var(--clr-dark-grey);
  border-right: 1px solid var(--clr-dark-grey);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--clr-light-grey);
  }
`;

const StyledImage = styled.img`
  object-fit: contain;
  position: relative;
  max-width: 160px;
  min-width: 200px;
  max-height: 400px;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 120px;
    height: 40vw;
  }

  @media (max-width: 450px) {
    min-width: 120px;
  }
`;
