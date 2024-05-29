import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IProduct } from "../../data";
export interface Props {
  product: IProduct;
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
              "& .MuiRating-icon svg": {
                color: "#555555 !important",
              },
              "& .MuiRating-root svg": {
                color: "#555555 !important",
              },
              "& .MuiRating-iconFilled SVG": {
                color: "#555555 !important",
              },
              "& .MuiRating-icon ": {
                color: "#555",
                fontSize: "0.9rem !important",

                "@media (max-width: 640px)": {
                  fontSize: "0.8rem",
                },
              },
            }}
          />
        </Review>
        <DescriptionContainer>
          <ProductDescription $showFullDescription={showFullDescription}>
            {product_description}
          </ProductDescription>
          <ShowMoreBtn
            $showFullDescription={showFullDescription}
            onClick={() => setShowFullDescription((prevState) => !prevState)}
          >
            {showFullDescription ? (
              <span>Show Less</span>
            ) : (
              <>
                <Ellipse>...</Ellipse>
                <span id="showMore">Show More</span>
              </>
            )}
          </ShowMoreBtn>
        </DescriptionContainer>

        <Amounts>
          {amount.map((size, i) => (
            <AmountBtn
              key={i}
              onClick={() => setSelectedAmountIndex(i)}
              selected={i === selectedAmountIndex}
            >
              <span key={i}>{size}</span>
            </AmountBtn>
          ))}
        </Amounts>
        <span>{price} EUR</span>

        <Link to={`/shop/${product.id}`} key={index}>
          <span>View product</span>
        </Link>

        <Button id="button">Add to cart</Button>
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
  gap: 6%;
  padding: 0 6%;

  &:last-of-type {
    border-right: 1px solid var(--clr-dark-grey);
  }

  @media (min-width: 1450px) {
    width: 870px;
  }

  @media (max-width: 1090px) {
    width: 65%;
  }

  @media (max-width: 600px) {
    width: calc(100% - 4rem);
    padding: 0 6% 0 6%;
    gap: 4%;
  }

  @media (max-width: 330px) {
    padding: 0 4% 0 2%;
    gap: 3%;
  }
`;

const ProductText = styled.div`
  display: flex;
  max-width: 31rem;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;
  color: #505050 !important;
  font-size: var(--font-size-base);
  @media (max-width: 1090px) {
    gap: 0.7rem;
  }
`;

const Review = styled.span`
  margin: 0;
  font-size: var(--font-size-sm);
  display: flex;
  align-items: center;
  gap: var(--margin-xxxsm);
`;

const AmountBtn = styled.button<{ selected: boolean }>`
  background-color: transparent;
  border-radius: 0;
  padding: 0;
  border: none;
  position: relative;
  padding-bottom: var(--margin-xxxs);
  color: var(--clr-dark-grey);

  &:first-child {
    margin-right: var(--margin-xsm);
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
`;

const Title = styled.h3`
  margin: 0;
  font-size: var(--font-size-md);
  @media (max-width: 640px) {
    font-size: var(--font-size-base);
  }
`;

const ProductDescription = styled.p<{ $showFullDescription: boolean }>`
  @media (max-width: 900px) {
    font-size: 0.75rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: ${({ $showFullDescription }) =>
      $showFullDescription ? "visible" : "hidden"};
    -webkit-line-clamp: ${({ $showFullDescription }) =>
      $showFullDescription ? "" : "3"};
    text-overflow: ellipsis;
  }
`;
const DescriptionContainer = styled.div`
  position: relative;
`;

const ShowMoreBtn = styled.button<{ $showFullDescription: boolean }>`
  width: fit-content;
  font-size: 0.6rem;
  background-color: transparent;
  padding: 0;
  display: none;
  background-color: #fff;
  right: 0;
  bottom: 1px;
  color: var(--clr-dark-grey);

  #showMore {
    padding: 0 1.3rem 0 6px;
  }
  span {
    text-decoration: underline;
    cursor: pointer;
  }
  position: ${({ $showFullDescription }) =>
    $showFullDescription ? "unset" : "absolute"};

  @media (max-width: 900px) {
    display: flex;
    gap: 1px;
  }
`;

const Ellipse = styled.p`
  text-decoration: none;
`;

const Amounts = styled.div`
  margin: 0;
  font-size: 0.781rem;
  display: flex;
  gap: 1rem;
  color: #626262;
  @media (max-width: 1024px) {
    gap: 0rem;
  }
`;

const Button = styled.button`
  @media (max-width: 640px) {
    padding: 0.3rem 0.6rem;
  }
`;

const StyledImage = styled.img`
  max-height: 22.25rem;
  object-fit: cover;
  position: relative;

  @media (max-width: 1090px) {
    width: 180px;
  }

  @media (max-width: 600px) {
    width: 140px;
  }

  @media (max-width: 460px) {
    width: 100px;
  }

  @media (max-width: 360px) {
    width: 20vw;
  }
`;
