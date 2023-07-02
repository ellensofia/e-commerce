import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import styled from "styled-components";
interface Props {
  image: string;
  currentItemIndex: number;
  index: number;
}

export default function productCard({ image, currentItemIndex, index }: Props) {
  return (
    <StyledCarouselItem
      key={index}
      style={{
        transform: `translateX(${(index - currentItemIndex) * 80}%)`,
        transition: "transform 1.6s ease-in-out",
      }}
    >
      <StyledImage src={image} alt={image} key={index} />
      <ProductText>
        <Title>Exfoliating serum 10% glycolic acid</Title>
        <Review>
          <p>Reviews</p>
          <StarIcon /> <StarIcon />
          <StarIcon />
          <StarBorderIcon /> <StarBorderIcon />
        </Review>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          molestiae molestias recusandae, aliquam quibusdam praesentium beatae
          illo aspernatur mollitia unde dolore inventore at, dolor eum et
          doloremque numquam ea nemo.
        </p>
        <Details>
          <span>15ml</span>
          <span>30ml</span>
        </Details>

        <Button>Buy</Button>
      </ProductText>
    </StyledCarouselItem>
  );
}

const StyledCarouselItem = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  gap: 20%;
  align-items: center;
`;

const ProductText = styled.div`
  max-width: 400px;
  padding: 1rem;
  display: flex;
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
