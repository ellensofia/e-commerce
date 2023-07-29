import { styled } from "styled-components";
import logo from "../../assets/images/oasis-logo.png";

export default function Footer() {
  return (
    <OuterContainer>
      <InnerContainer>
        <LinkSection>
          <List>
            <Title>Company</Title>
            <Link>About us</Link>
            <Link>Careers</Link>
            <Link>Giving Back</Link>
            <Link>Sustainability and More Initiatives</Link>
          </List>
        </LinkSection>
        <LinkSection>
          <List>
            <Title>Help</Title>
            <Link>Track Your Order</Link>
            <Link>Contact Us & FAQ</Link>
            <Link>Returns</Link>
            <Link>Check eGift Card Balance</Link>
          </List>
        </LinkSection>
        <LinkSection>
          <List>
            <Title>Services</Title>
            <Link>Find a Skincare Provider</Link>
            <Link>Free Skincare Consultation</Link>
          </List>
        </LinkSection>
      </InnerContainer>
      <BottomSection>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <NewsletterSection>
          <NewsletterTitle>Sign up for our newsletter. </NewsletterTitle>
          <Text>
            Unlock special offers, new product sneak peeks, event invites, tips
            and more.
          </Text>
          <Signup>
            <Input placeholder="email adress"></Input>
            <Button>Sign up</Button>
          </Signup>
        </NewsletterSection>
      </BottomSection>
      <Copy>
        <span>© Copyright 2022 Oasis, All rights reserved</span>
      </Copy>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  align-items: center;
  padding: 2rem 4rem;
  background-color: var(--clr-medium-grey);

  @media (max-width: 900px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 600px) {
    padding: 1rem 0rem;
  }
`;

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--clr-black);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const LinkSection = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0;
`;

const Title = styled.h4`
  color: var(--clr-dark-grey);
  font-size: var(--font-size-base);
`;

const Signup = styled.h4`
  display: flex;
`;

const BottomSection = styled.div`
  padding-top: 2rem;
  display: grid;
  align-items: end;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    display: flex;
    align-items: unset;
    flex-direction: column-reverse;
  }
`;

const NewsletterSection = styled.div`
  padding: 1rem;
  grid-column: span 2;
  @media (max-width: 600px) {
    padding-bottom: 2rem;
  }
`;

const NewsletterTitle = styled.h3`
  grid-column: span 2;
  font-weight: 400;
  padding-bottom: 0.6rem;
  font-size: var(--font-size-md);
`;

const Logo = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;

  img {
    width: 100px;
  }
`;

const Copy = styled.div`
  color: var(--clr-dark-grey);
  font-size: var(--font-size-sm);
  margin-top: 2rem;
  padding-top: 2rem;
  padding: 1rem;
  border-top: 1px solid var(--clr-dark-grey);
  @media (max-width: 600px) {
    text-align: center;
    padding-bottom: 0rem;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-top: 1rem;
  background-color: transparent;
  width: 20rem;
  border: 1px solid var(--clr-black);
  &::placeholder {
    color: var(--clr-dark-grey);
  }
  @media (max-width: 600px) {
    max-width: 14rem;
    width: 100%;
  }
`;

const Button = styled.button`
  margin-top: 1rem;
  border: 1px solid black;
  border-left: transparent;
  background-color: transparent;
  border-radius: 0;
  font-size: var(--font-size-sm);
  white-space: nowrap;
`;

const Text = styled.p`
  color: var(--clr-dark-grey);
  font-size: var(--font-size-sm);
`;

const Link = styled.a`
  color: var(--clr-dark-grey);
  font-size: var(--font-size-sm);
  position: relative;
  cursor: pointer;

  &:hover {
    color: var(--clr-black);
    text-decoration: underline;
    cursor: pointer;
  }
`;
