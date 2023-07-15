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
              <p>1</p>
              <p>Ingredients Pure essential oils</p>
            </li>
            <li>
              <p>2</p>
              <p>Aroma Floral, spicy or sweet</p>
            </li>
            <li>
              <p>3</p>
              <p>Simple No unnecessary additives</p>
            </li>
            <li>
              <p>4</p>
              <p>Production Packaging and production located in Australia </p>
            </li>
          </ul>
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

  p:first-of-type {
    padding-right: 1rem;
    height: 100%;
    width: 2rem;
    font-size: 1.8rem;
    @media (max-width: 900px) {
      font-size: 1rem;
      padding-right: 0.5rem;
    }
  }

  p {
    @media (max-width: 900px) {
      font-size: 0.8rem;
    }
  }
  ul {
    padding: 1rem 0 0 0;
    padding: 1rem;
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
      background-color: #afafaf;
      left: 0;
      margin-bottom: 1rem;
      bottom: 0;
    }
  }
`;

const CustomerTitle = styled.h2`
  font-size: 1.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #afafaf;
  @media (max-width: 900px) {
    padding-bottom: 1rem;
    font-size: 1.25rem;
  }
`;
