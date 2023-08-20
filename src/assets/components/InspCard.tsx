import styled from "styled-components";
import { Ingredient } from "../../data";

export interface Props {
  ingredient: Ingredient;
  currentItemIndex: number;
  index: number;
}

export default function InspCard({
  ingredient,
  currentItemIndex,
  index,
}: Props) {
  const { image, name, info } = ingredient;

  return (
    <StyledCarouselItem
      index={index}
      style={{
        transform: `translateX(calc(${(index - currentItemIndex) * 104}%)`,
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <StyledImage src={image} alt={name} key={name} />
      <Overlay key={index}>
        <h2>{name}</h2>
        <p>{info}</p>
        <a href="">
          read more
          <ArrowSVG />
        </a>
      </Overlay>
    </StyledCarouselItem>
  );
}

const StyledCarouselItem = styled.div<{ index: number }>`
  position: absolute;
  height: 100%;
  width: 20%;
  left: 8%;
  overflow: hidden;
  background-color: var(--clr-light-grey);
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    width: 30%;
  }

  @media (max-width: 640px) {
    width: 50%;
    left: 19%;
  }
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: relative;
  object-position: 50% 50%;
  opacity: 0.9;
`;

const Overlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--margin-xsm);
  height: 100%;
  width: 100%;
  transition: 0.6s ease;

  p {
    display: none;
  }

  a {
    display: flex;
    gap: var(--margin-xxsm);
    transition: translate 0.2s ease;

    svg {
      width: 1.5rem;
      stroke: var(--clr-dark-grey);
    }

    &:hover {
      font-weight: 400;
      text-decoration: underline;
      svg {
        transform: translateX(var(--margin-xxxsm));
      }
    }
  }

  &:hover {
    background-color: #00000083;

    h2,
    p,
    a,
    svg {
      display: flex;
      color: var(--clr-white);
    }
    svg line {
      stroke: var(--clr-white);
    }
  }
`;

export const ArrowSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="41.003"
    height="23.756"
    viewBox="0 0 41.003 23.756"
  >
    <g
      id="Group_56"
      data-name="Group 56"
      transform="translate(-2644.125 -4086.622)"
    >
      <g
        id="Group_55"
        data-name="Group 55"
        transform="translate(100.75 488.25)"
      >
        <line
          id="Line_42"
          data-name="Line 42"
          x2="39.875"
          transform="translate(2543.375 3610.25)"
          fill="none"
          stroke="var(--clr-dark-grey)"
          strokeWidth="1.6"
        />
        <line
          id="Line_43"
          data-name="Line 43"
          x1="9.214"
          y1="10.75"
          transform="translate(2574.036 3599.5)"
          fill="none"
          stroke="var(--clr-dark-grey)"
          strokeLinecap="square"
          strokeWidth="1.6"
        />
        <line
          id="Line_44"
          data-name="Line 44"
          y1="10.75"
          x2="9.214"
          transform="translate(2574.036 3610.25)"
          fill="none"
          stroke="var(--clr-dark-grey)"
          strokeLinecap="square"
          strokeWidth="1.6"
        />
      </g>
    </g>
  </svg>
);
