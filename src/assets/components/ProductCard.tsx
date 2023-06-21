import styled from "styled-components";
interface Props {
  image: string;
  currentItemIndex: number;
  index: number;
}

export default function productCard({ image, currentItemIndex, index }: Props) {
  return (
    <>
      <StyledCarouselItem
        key={index}
        style={{
          transform: `translateX(${(index - currentItemIndex) * 80}%)`,
          transition: "transform 1.6s ease-in-out",
        }}
      >
        <StyledImage src={image} alt={image} key={index} />
        <ProductText>
          <Title>Product title</Title>
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
    </>
  );
}

const StyledCarouselItem = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
`;

const ProductText = styled.div`
  width: 400px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  border-right: 1px solid #333;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 3rem;
`;

const Details = styled.div`
  margin: 0;
  font-size: 1.2rem;
  display: flex;
  gap: 1rem;
  color: #626262;
`;

const Button = styled.button`
  padding: 0.8rem 1.8rem;
  border: 1px solid;
  width: fit-content;
`;

const StyledImage = styled.img`
  width: 24rem;
  object-fit: cover;
  position: relative;
  max-height: 100%;
  height: 60vh;
  @media (max-width: 600px) {
    width: 25%;
  }
`;
