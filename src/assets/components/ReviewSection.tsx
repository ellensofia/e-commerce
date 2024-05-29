import { Rating } from "@mui/material";
import styled from "styled-components";
import { IProduct } from "../../data";

interface Props {
  product: IProduct;
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
                  fontSize: "var(--font-size-base)",
                },
              }}
            />
          </Review>

          <span>Avrage ratings {product.reviews.average_rating}</span>
          <span>Total reviews {product.reviews.total_reviews}</span>
          <Testimonials>
            {product.reviews.text_reviews.map((review, i) => (
              <TestimonialsText key={i}>
                <UserInfo>
                  <h6>{review.name}</h6>
                  <span>{review.date}</span>
                </UserInfo>
                <p>{review.text}</p>
              </TestimonialsText>
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
  gap: var(--margin-sm);
  width: 100%;
  padding: var(--margin-md) 0;
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
  gap: var(--margin-sm);
  border-bottom: 1px solid var(--clr-dark-grey);
  padding: var(--margin-md) 0;
  font-size: var(--font-size-base);

  display: flex;
  flex-direction: column;
  &:last-child {
    border-bottom: none;
  }
`;
const UserInfo = styled.span`
  gap: var(--margin-sm);
  display: flex;
  flex-direction: column;

  span {
    font-size: var(--font-size-sm);
  }

  h6 {
    font-size: var(--font-size-sm);
  }
`;

const Title = styled.h3`
  font-size: var(--font-size-md);
  color: var(--text-clr-light);
`;

const Review = styled.span`
  margin: 0;
  font-size: var(--font-size-sm);
  display: flex;
  align-items: center;
  gap: 0 var(--margin-xsm);
`;
