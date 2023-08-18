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
              <div>
                <p>Ingredients</p>
                <p>Pure essential oils</p>
              </div>
            </li>
            <li>
              <h3>02</h3>
              <div>
                <p>Aroma </p>
                <p>Floral, spicy or sweet</p>
              </div>
            </li>
            <li>
              <h3>03</h3>
              <div>
                <p>Simple</p>
                <p> No unnecessary additives</p>
              </div>
            </li>
            <li>
              <h3>04</h3>
              <div>
                <p>Production</p>
                <p> Packaging and production located in Australia </p>
              </div>
            </li>
          </ul>
          <StyledButton id="button">Read more</StyledButton>
        </TextBox>
      </InnerBox>
    </OuterBox>
  );
}

const OuterBox = styled.div`
  width: 100%;
  padding: var(--margin-lg) 0;
  background-color: #f8f8f7;
`;

const InnerBox = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--margin-xlg);
  @media (max-width: 640px) {
    padding: 0 var(--margin-md);
  }

  & img {
    width: 40%;
    object-fit: contain;
    @media (max-width: 900px) {
      width: 30%;
    }
  }
  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: var(--margin-md);

    & img {
      width: 70%;
    }
  }

  @media (max-width: 640px) {
    & img {
      width: 100%;
    }
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 200px;
  font-size: var(--font-size-base);

  h3 {
    padding-right: var(--margin-sm);
    height: 100%;
    width: 2rem;
    font-size: var(--font-size-md);
    color: var(--clr-dark-grey);

    @media (max-width: 900px) {
      padding-right: var(--margin-sm);
    }
  }

  ul {
    padding: 1rem 0;
    list-style: none;
  }

  li {
    padding-bottom: var(--margin-lg);
    align-items: center;
    position: relative;
    display: flex;
    gap: var(--margin-sm);

    p:first-of-type {
      font-weight: bold;
    }

    &::after {
      position: absolute;
      content: "";
      height: 1px;
      width: 100%;
      background-color: var(--clr-medium-grey);
      left: 0;
      margin-bottom: var(--margin-sm);
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
  width: fit-content;
  border-radius: 2rem;
  background-color: transparent;
  border: 1px solid var(--clr-dark-grey);
  color: var(--clr-dark-grey);
`;
