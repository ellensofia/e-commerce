import styled from "styled-components";
import image1 from "../../assets/images/product3.jpg";

export default function CustomerPick() {
  return (
    <OuterBox>
      <InnerBox>
        <img src={image1} alt="" />
        <TextBox>
          <CustomerTitle>Loved by Skincare Enthusiasts</CustomerTitle>
          <ul>
            <li>
              <h3>01</h3>
              <p>Ingredients Pure essential oils</p>
            </li>
            <li>
              <h3>02</h3>
              <p>Aroma Floral, spicy or sweet</p>
            </li>
            <li>
              <h3>03</h3>
              <p>Simple No unnecessary additives</p>
            </li>
            <li>
              <h3>04</h3>
              <p>Production Packaging and production located in Australia </p>
            </li>
          </ul>
          <StyledButton>Read more</StyledButton>
        </TextBox>
      </InnerBox>
    </OuterBox>
  );
}

const OuterBox = styled.div`
  margin: 2rem 0 0 0;
  width: 100%;
  padding: 2rem 0;
  background-color: #f8f8f7;
`;

const InnerBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  & img {
    width: 40%;
    object-fit: contain;
    @media (max-width: 900px) {
      width: 30%;
    }
  }
  @media (max-width: 900px) {
    gap: 1rem;
  }
  @media (max-width: 600px) {
    & img {
      width: 80%;
    }
    flex-wrap: wrap;
    padding: 1rem;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 200px;
  padding: 1rem;
  font-size: var(--font-size-base);

  h3 {
    padding-right: 1rem;
    height: 100%;
    width: 2rem;
    font-size: var(--font-size-md);
    color: var(--clr-dark-grey);
    @media (max-width: 900px) {
      padding-right: 0.5rem;
    }
  }

  ul {
    padding: 1rem 0 0 0;
    list-style: none;
  }

  li {
    padding-bottom: 2rem;
    align-items: center;
    position: relative;
    display: flex;

    &::after {
      position: absolute;
      content: "";
      height: 1px;
      width: 100%;
      background-color: var(--clr-medium-grey);
      left: 0;
      margin-bottom: 1rem;
      bottom: 0;
    }
  }
`;

const CustomerTitle = styled.h2`
  font-size: var(--font-size-lg);
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--clr-medium-grey);
  @media (max-width: 900px) {
    padding-bottom: 1rem;
  }
`;

const StyledButton = styled.button`
  border: 1px solid #333;
  width: fit-content;
  border-radius: 2rem;
  background-color: #fff;
`;
