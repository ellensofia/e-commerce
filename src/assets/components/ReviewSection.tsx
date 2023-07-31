import { Rating } from "@mui/material";
import styled from "styled-components";
import { Product } from "../../data";

interface Props {
  product: Product;
}

export default function ReviewSection({ product }: Props) {
  const { reviews, id } = product;
  return (
    <OuterContainer>
      {product && (
        <>
          <Review>
            <Title>Reviews </Title>
            {/* <TotalReviews>({reviews.total_reviews})</TotalReviews> */}
            <span>{reviews.average_rating}</span>
            <Rating
              name={`rating-${id}`}
              value={parseFloat(product.reviews.average_rating.toFixed(1))}
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
          </Review>

          <span>Avrage ratings{product.reviews.average_rating}</span>
          <span>Total reviews {product.reviews.total_reviews}</span>
          <Testimonials>
            {product.reviews.text_reviews.map((review, i) => (
              <TestimonialsText key={i}>{review}</TestimonialsText>
            ))}
          </Testimonials>
        </>
      )}
    </OuterContainer>
  );
}

const OuterContainer = styled.span`
  margin: 0;
  font-size: var(--font-size-sm);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 2rem 0;
  border-top: 1px solid var(--clr-dark-grey);
`;

const Testimonials = styled.span`
  margin: 0;
  font-size: var(--font-size-sm);
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--clr-dark-grey);
  border-bottom: 1px solid var(--clr-dark-grey);
`;
const TestimonialsText = styled.span`
  border-bottom: 1px solid var(--clr-dark-grey);
  padding: 2rem 0;
  &:last-child {
    border-bottom: none;
  }
`;

const TotalReviews = styled.p`
  font-size: 0.6rem;
  @media (max-width: 900px) {
    font-size: 0.55rem;
  }
`;

const Title = styled.h3`
  font-size: var(--font-size-md);
  color: var(--text-clr-light);
  @media (max-width: 900px) {
    font-size: 0.55rem;
  }
`;

const Review = styled.span`
  margin: 0;
  font-size: var(--font-size-sm);
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

// const Stars = styled.sta`
//   margin: 0;
//   font-size: var(--font-size-sm);
//   display: flex;
//   align-items: center;
//   gap: 0.2rem;
// `;
