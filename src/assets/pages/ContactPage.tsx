import { styled } from "styled-components";
import { StyledButton } from "../components/TextSection";
import image3 from "../images/ingredient6.jpg";

export default function ContactPage() {
  return (
    <Container>
      <InnerContainer>
        <Copy>
          <ContactTitle>Contact</ContactTitle>
          <ContactText>
            <p>
              Have questions about your skincare routine? Need personalized
              advice for your unique skin needs? Our experts are here to help!
            </p>
          </ContactText>
          <Form>
            <label>Name</label>
            <input></input>
            <label>Message</label>
            <textarea></textarea>
            <StyledButton id="button">send</StyledButton>
          </Form>
        </Copy>
        <ContactImg>
          <img src={image3} alt="" />
        </ContactImg>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  margin: calc(var(--margin-xlg) + var(--header-height)) 0;
  margin-bottom: var(--margin-xlg);
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: var(--margin-md);

  @media (max-width: 1024px) {
    align-items: unset;
    margin-top: calc(var(--header-height) + var(--margin-large));
    margin-bottom: var(--margin-large);
  }

  @media (max-width: 640px) {
    gap: var(--margin-xlg);
    flex-direction: column;
    align-items: center;
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--margin-xsm);
  max-width: 30rem;

  @media screen and (max-width: 1024px) {
    max-width: 20rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--margin-xxsm);
  max-width: 30rem;
  font-family: var(--font-secondary);
  position: relative;

  input {
    font-size: var(--font-size-base);
    height: 2rem;
    border-radius: 0;
    border: 1px solid var(--clr-dark-grey);
  }

  textarea {
    height: var(--margin-xxxlg);
    font-family: var(--font-primary);
    font-size: var(--font-size-base);
    resize: none;
    margin-bottom: var(--margin-xxsm);
  }
`;

const ContactTitle = styled.h1`
  font-size: var(--font-size-xxl);
`;

const ContactText = styled.p`
  color: var(--clr-dark-grey);
  font-size: var(--font-size-base);
  p:first-of-type {
    padding-bottom: var(--margin-small);
  }
`;

const ContactImg = styled.div`
  & img {
    width: 400px;
    max-width: 100%;
    object-fit: cover;
    /* @media screen and (max-width: 1024px) {
      min-width: 50%;
    } */
  }
`;

// const StyledButton = styled.button`
//   width: fit-content;
//   border-radius: 0;
//   background-color: transparent;
//   border: 1px solid var(--clr-dark-grey);
//   color: var(--clr-dark-grey);
//   position: absolute;
//   bottom: 0;
//   right: 0;
// `;
