import { styled } from "styled-components";

export default function CategoriesPage() {
  return (
    <>
      <Container>
        <Copy>
          <CategoryTitle>Oops</CategoryTitle>
          <p>this page is under development</p>
        </Copy>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: calc(var(--header-height) + var(--margin-lg));
  margin-bottom: var(--margin-lg);
  padding: 0 var(--margin-xlg);
  display: flex;
  gap: var(--margin-lg);
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--margin-sm);
  width: 50%;
  max-width: 36rem;
  padding: 6rem 0 8rem;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const CategoryTitle = styled.h1`
  font-size: var(--font-size-xl);
`;
