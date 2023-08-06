import styled from "styled-components";
import { Product } from "../../data";
import img1 from "../images/insp-img-1.jpg";
import img2 from "../images/insp-img-2.jpg";
import img3 from "../images/insp-img-3.jpg";

export interface Props {
  product: Product;
  currentItemIndex: number;
  index: number;
}

export default function InspCard({ product, currentItemIndex, index }: Props) {
  const { image, product_name } = product;
  const images = [img1, img2, img3];

  return (
    <StyledCarouselItem
      index={index}
      style={{
        transform: `translateX(calc(${
          (index - currentItemIndex) * 104
        }% - 2rem))`,
        transition: "transform 1.6s ease-in-out",
      }}
    >
      <StyledImage src={images[index]} alt={product_name} key={index} />
    </StyledCarouselItem>
  );
}

const StyledCarouselItem = styled.div<{ index: number }>`
  position: absolute;
  height: 100%;
  width: 21%;
  left: 10pc;
  overflow: hidden;
  background-color: var(--clr-light-grey);
  display: flex;
  align-items: center;
  /* margin-right: 2rem; */

  &:last-of-type {
    border-right: 1px solid var(--clr-dark-grey);
  }

  /* @media (max-width: 1090px) {
    width: 25%;
    gap: 1rem;
    padding-right: 6%;
  }
  @media (max-width: 600px) {
    gap: 0rem;
    padding-right: 2rem;
    width: calc(100% - 8rem);
  }*/
`;
const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: relative;
  object-position: 50% 50%;

  /* @media (max-width: 1090px) {
    width: 300px;
    padding-left: 2rem;
  }

  @media (max-width: 600px) {
    width: 140px;
    padding-left: 1rem;
  }*/

  @media (max-width: 460px) {
    width: 300px;
  }
`;
