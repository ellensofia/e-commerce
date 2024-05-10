import { useState } from "react";
import styled from "styled-components";
import product2 from "./../images/4-products.png";
import product from "./../images/product-group.png";

export default function SpecialOffersPage() {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <OuterBox>
      <Offers>
        <Offer>
          <img src={product} alt="" />
          <Copy>
            <h2>Starter Kit</h2>
            <p>
              Discover the ultimate skincare experience with our Complete
              Skincare Kit. This handpicked selection includes everything you
              need for a revitalizing routine that will leave your skin feeling
              radiant and refreshed.
            </p>
            <Price>149 EUR</Price>

            <ul>
              <li>
                <h3>Brightening Vitamin C Serum</h3>
              </li>
              <li>
                <h3>Anti Aging Night Cream</h3>
              </li>
              <li>
                <h3>Hydrating Face Mist</h3>
              </li>
            </ul>
            <DescriptionContainer>
              <ProductDescription $showFullDescription={showFullDescription}>
                <div className="product">
                  <h4>Brightening Vitamin C Serum 30ml</h4>
                  <p>
                    A powerful serum infused with vitamin C to even out skin
                    tone and provide a radiant glow.
                  </p>
                  <span>Original price: 32.99 EUR</span>{" "}
                  <a href="">view product</a>
                </div>
                <div className="product">
                  <h4>Anti Aging Night Cream 60ml</h4>
                  <p>
                    A night cream enriched with age-defying ingredients to
                    reduce visible signs of aging.
                  </p>
                  <span>Original price: 62.99 EUR</span>{" "}
                  <a href="">view product</a>
                </div>
                <div className="product">
                  <h4>Hydrating Face Mist 100ml</h4>
                  <p>
                    A refreshing face mist that provides instant hydration and a
                    revitalizing sensation throughout the day.
                  </p>
                  <span>Original price: 59.99 EUR</span>{" "}
                  <a href="">view product</a>
                </div>
              </ProductDescription>
              <ShowMoreBtn
                $showFullDescription={showFullDescription}
                onClick={() =>
                  setShowFullDescription((prevState) => !prevState)
                }
              >
                {showFullDescription ? "Close details" : "View details"}
              </ShowMoreBtn>
            </DescriptionContainer>

            <button id="button">Add to Cart</button>
          </Copy>
        </Offer>
        <Offer>
          <img src={product2} alt="" />
          <Copy>
            <h2>Complete Skincare Kit</h2>
            <p>
              Discover the ultimate skincare experience with our Complete
              Skincare Kit. This handpicked selection includes everything you
              need for a revitalizing routine that will leave your skin feeling
              radiant and refreshed.
            </p>
            <Price>199 EUR</Price>

            <ul>
              <li>
                <h3>Brightening Vitamin C Serum</h3>
              </li>
              <li>
                <h3>Anti Aging Night Cream</h3>
              </li>
              <li>
                <h3>Hydrating Face Mist</h3>
              </li>
              <li>
                <h3>Calming Serum</h3>
              </li>
            </ul>
            <DescriptionContainer>
              <ProductDescription $showFullDescription={showFullDescription}>
                <div className="product">
                  <h4>Brightening Vitamin C Serum 30ml</h4>
                  <p>
                    A powerful serum infused with vitamin C to even out skin
                    tone and provide a radiant glow.
                  </p>
                  <span>Original price: 32.99 EUR</span>
                  <a href="">view product</a>
                </div>
                <div className="product">
                  <h4>Anti Aging Night Cream 60ml</h4>
                  <p>
                    A night cream enriched with age-defying ingredients to
                    reduce visible signs of aging.
                  </p>
                  <span>Original price: 62.99 EUR</span>
                  <a href="">view product</a>
                </div>
                <div className="product">
                  <h4>Calming Serum 30ml</h4>
                  <p>
                    A powerful serum infused with vitamin C to even out skin
                    tone and provide a radiant glow.
                  </p>
                  <span>Original price: 32.99 EUR</span>
                  <a href="">view product</a>
                </div>
                <div className="product">
                  <h4>Hydrating Face Mist 100ml</h4>
                  <p>
                    A refreshing face mist that provides instant hydration and a
                    revitalizing sensation throughout the day.
                  </p>
                  <span>Original price: 59.99 EUR</span>
                  <a href="">view product</a>
                </div>
              </ProductDescription>
              <ShowMoreBtn
                $showFullDescription={showFullDescription}
                onClick={() =>
                  setShowFullDescription((prevState) => !prevState)
                }
              >
                {showFullDescription ? "Close details" : "View details"}
              </ShowMoreBtn>
            </DescriptionContainer>

            <button id="button">Add to Cart</button>
          </Copy>
        </Offer>
      </Offers>
    </OuterBox>
  );
}

const OuterBox = styled.div`
  display: flex;
  padding: calc(var(--header-height) + var(--margin-md)) var(--margin-xxlg);

  @media (max-width: 900px) {
    padding: calc(var(--header-height) + var(--margin-md)) var(--margin-xlg);
  }

  @media (max-width: 650px) {
    padding: calc(var(--header-height) + var(--margin-md)) var(--margin-lg);
  }

  @media (max-width: 450px) {
    padding: calc(var(--header-height) + var(--margin-md)) var(--margin-sm);
  }
`;

const Offers = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

const Offer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--margin-lg);
  padding: 4rem 0;
  max-width: 70rem;
  width: 100%;
  border-bottom: 1px solid var(--clr-medium-grey);

  img {
    height: 60vh;

    @media (max-width: 900px) {
      height: auto;
      max-width: 85vw;
    }
  }
`;

const ProductDescription = styled.div<{ $showFullDescription: boolean }>`
  display: ${({ $showFullDescription }) =>
    $showFullDescription ? "flex" : "none"};
  flex-direction: column;

  @media (max-width: 900px) {
    font-size: 0.75rem;
  }
`;

const Price = styled.div`
  font-family: var(--font-primary);
  font-size: var(--font-size-md);
  padding: var(--margin-xsm) 0;
`;

const DescriptionContainer = styled.div`
  .product {
    padding: var(--margin-sm) 0;
    border-bottom: 1px solid var(--clr-medium-grey);
    display: flex;
    flex-direction: column;
    gap: var(--margin-xxsm);

    &:last-child {
      margin-bottom: var(--margin-xsm);
    }
  }

  h4 {
    font-size: var(--font-size-base);
  }

  span,
  p,
  a {
    font-size: var(--font-size-sm);
    color: var(--text-clr-grey);
  }

  a {
    text-decoration: underline;
  }
`;

const ShowMoreBtn = styled.button<{ $showFullDescription: boolean }>`
  width: fit-content;
  font-size: 0.8rem;
  background-color: transparent;
  color: var(--clr-dark-grey);
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
`;

const Copy = styled.div`
  display: flex;
  gap: var(--margin-sm);
  flex-direction: column;
  max-width: 450px;
  ul {
    display: flex;
    flex-direction: column;
    gap: var(--margin-xxsm);
    padding: var(--margin-sm);
    border-top: 1px solid var(--clr-dark-grey);
    border-bottom: 1px solid var(--clr-dark-grey);
    h3 {
      font-size: var(--font-size-base);
      font-family: var(--font-seconday);
      font-weight: 400;
    }
  }

  p {
    color: var(--text-clr-grey);
  }
`;
