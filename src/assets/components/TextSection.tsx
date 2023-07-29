import styled from "styled-components";

export default function TextSection() {
  return (
    <>
      <Text>
        Oasis offers a holistic, gentle approach to personal wellbeing. It helps
        you revitalise and harmonise body, spirit and soul.
      </Text>
    </>
  );
}

const Text = styled.h2`
  font-size: 3rem;
  line-height: 1.4;
  text-align: center;
  max-width: 55rem;
  margin: 4rem auto;

  @media (max-width: 900px) {
    font-size: 2rem;
    padding: 4rem;
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
    padding: 2rem;
  }
`;
