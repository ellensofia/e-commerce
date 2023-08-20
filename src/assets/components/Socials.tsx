import styled from "styled-components";
import img1 from "../images/inst.jpg";
import img2 from "../images/inst1.jpg";
import img3 from "../images/inst3.jpg";
import img4 from "../images/inst4.jpg";
import img5 from "../images/logo.png";

export default function Socials() {
  return (
    <OuterBox>
      <InnerBox>
        <Top>
          <Title>Follow us</Title>
          <Icons>
            {" "}
            <img src={img5} alt="" />
          </Icons>
        </Top>
        <Imgs>
          <img src={img3} alt="" />
          <img src={img2} alt="" />
          <img src={img1} alt="" />
          <img src={img4} alt="" />
        </Imgs>
      </InnerBox>
    </OuterBox>
  );
}

const OuterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--margin-xxlg);
  @media (max-width: 640px) {
    margin-bottom: var(--margin-xlg);
  }
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: var(--margin-xsm);
  padding: 0 var(--margin-md);

  @media (max-width: 640px) {
    padding: 0 var(--margin-sm);
  }
`;

const Title = styled.h2`
  @media (max-width: 640px) {
    font-size: var(--font-size-base);
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

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: var(--margin-sm);
  & img {
    width: 250px;
  }

  @media (max-width: 640px) {
    gap: var(--margin-xsm);
  }
`;

const Icons = styled.div`
  display: flex;
  gap: var(--margin-sm);
  & img {
    width: 20px;
    height: 20px;

    @media (max-width: 640px) {
      width: 16px;
      height: 16px;
    }
  }
`;
