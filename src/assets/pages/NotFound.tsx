import styled from "styled-components";

export default function NotFound() {
  return (
    <Container>
      <h1>404 Error</h1>
      <h2>Page not found</h2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  margin: calc(var(--margin-xxxlg) + var(--header-height)) 0;
  margin-bottom: var(--margin-xxxlg);

  h1 {
    font-size: var(--font-size-xxxl);
  }
`;
