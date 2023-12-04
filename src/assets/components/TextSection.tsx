import styled from "styled-components";

export default function TextSection() {
  return (
    <>
      <OuterBox>
        <Text>
          Elevate your skin's vitality through a modern approach. Align{" "}
          <span className="italic">&</span> rejuvenate body, mind,{" "}
          <span className="italic">&</span> inner well-being.
        </Text>
        <button id="button">Our story</button>
      </OuterBox>
    </>
  );
}

const Text = styled.h2`
  font-size: var(--font-size-xxl);
  line-height: 1.3;
  text-align: center;
  max-width: 65rem;
  padding: 0 var(--margin-md) var(--margin-md);

  span {
    font-family: "Roslindale";
    font-style: italic;
    font-weight: 300;

    span .thickitalic {
      font-weight: 500;
      text-decoration: underline;
      color: pink;
      border: 1px solid black;
    }
  }
  @media (max-width: 1024px) {
    max-width: 55rem;

    font-size: var(--font-size-xl);
    padding: 0 var(--margin-sm) var(--margin-sm);
  }
`;

const OuterBox = styled.div`
  margin: var(--margin-xxlg) 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    margin: var(--margin-xlg) 0;
  }
`;
