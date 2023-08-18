import styled from "styled-components";

export default function TextSection() {
  return (
    <>
      <OuterBox>
        <Text>
          Oasis offers a holistic, gentle approach to personal wellbeing. It
          helps you revitalise and harmonise body, spirit and soul.
        </Text>
        <StyledButton id="button">Our story</StyledButton>
      </OuterBox>
    </>
  );
}

const Text = styled.h2`
  font-size: var(--font-size-xxl);
  line-height: 1.4;
  text-align: center;
  max-width: 55rem;
  padding: 0 var(--margin-md) var(--margin-md);

  @media (max-width: 1024px) {
    font-size: var(--font-size-xl);
  }

  @media (max-width: 640px) {
    padding-bottom: var(--margin-sm);
  }
`;

export const StyledButton = styled.button`
  width: fit-content;
  border-radius: 2rem;
  background-color: transparent;
  border: 1px solid var(--clr-dark-grey);
  color: var(--clr-dark-grey);
`;

const OuterBox = styled.div`
  margin: var(--margin-xxlg) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
