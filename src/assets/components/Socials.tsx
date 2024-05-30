import styled from "styled-components";
import arrow from "../images/arrow.svg";
import img1 from "../images/inst.jpg";
import img2 from "../images/inst.png";
import img3 from "../images/inst3.jpg";
import img4 from "../images/inst4.jpg";

export default function Socials() {
  return (
    <OuterBox>
      <InnerBox>
        <h2>Follow us</h2>
        <Imgs>
          <img src={img3} alt="" />
          <img src={img2} alt="" />
          <img src={img1} alt="" />
          <img src={img4} alt="" />
        </Imgs>
        <Bottom>
          <span>Instagram</span>
          <img src={arrow} />
        </Bottom>
      </InnerBox>
    </OuterBox>
  );
}

const OuterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--margin-xxlg);
  margin-top: var(--margin-lg);
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: var(--margin-xsm);
  padding: 0 var(--margin-md);

  h2 {
    font-size: var(--font-size-xl);
    //text-align: center;
  }

  @media (max-width: 640px) {
    padding: 0 var(--margin-sm);
  }
`;

const Imgs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--margin-sm);

  & img {
    width: 100%;
  }

  @media (max-width: 1240px) {
    gap: var(--margin-xsm);
  }

  @media (max-width: 640px) {
    gap: var(--margin-xxsm);
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &:hover {
    text-decoration: underline;
    color: var(--clr-black);
    & img {
      transition: 0.2s ease;
      transform: translateX(0.5rem);
    }
  }

  display: flex;
  gap: var(--margin-xxsm);
  align-items: center;

  span {
    font-weight: 400;
    cursor: pointer;
    text-decoration: underline;
  }

  & img {
    width: 1.25rem;
  }

  @media (max-width: 640px) {
    span {
      font-size: var(--font-size-sm);
    }

    & img {
      width: 1rem;
    }
  }
`;
