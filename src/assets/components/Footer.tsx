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
  padding: var(--margin-lg) var(--margin-xlg) var(--margin-md);
  background-color: var(--clr-light-grey);

  @media (max-width: 900px) {
    padding: var(--margin-lg) var(--margin-sm) var(--margin-md);
  }

  @media (max-width: 600px) {
    padding: var(--margin-lg) 0 var(--margin-md);
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
  padding: var(--margin-sm);
  justify-content: space-between;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--margin-xsm);
  padding: 0;
`;

const Title = styled.h4`
  color: var(--text-clr-dark);
  font-weight: bold;
  font-size: var(--font-size-base);
`;

const Signup = styled.h4`
  display: flex;
`;

const BottomSection = styled.div`
  padding-top: var(--margin-md);
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
  padding: var(--margin-sm);
  grid-column: span 2;
  @media (max-width: 600px) {
    padding-bottom: var(--margin-md);
  }
`;

const NewsletterTitle = styled.h3`
  grid-column: span 2;
  font-weight: 400;
  padding-bottom: var(--margin-sm);
  font-size: var(--font-size-md);
  color: var(--text-clr-dark);
`;

const Logo = styled.div`
  display: flex;
  align-items: flex-start;
  padding: var(--margin-sm);

  img {
    width: 100px;
  }
`;

const Copy = styled.div`
  color: var(--clr-dark-grey);
  font-size: var(--font-size-sm);
  margin-top: var(--margin-md);
  padding-top: var(--margin-md);
  border-top: 1px solid var(--clr-dark-grey);
  @media (max-width: 600px) {
    text-align: center;
    padding-bottom: 0rem;
  }
`;

const Input = styled.input`
  padding: var(--margin-xsm);
  margin-top: var(--margin-sm);
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
  margin-top: var(--margin-sm);
  border: 1px solid black;
  border-left: transparent;
  background-color: transparent;
  border-radius: 0;
  font-size: var(--font-size-sm);
  white-space: nowrap;
  color: var(--clr-dark-grey);
`;

const Text = styled.p`
  color: var(--clr-dark-grey);
  font-size: var(--font-size-sm);
`;

const Link = styled.a`
  color: var(--clr-dark-grey);
  font-weight: 400;
  font-size: var(--font-size-base);

  position: relative;
  cursor: pointer;

  &:hover {
    color: var(--clr-black);
    text-decoration: underline;
    cursor: pointer;
  }
`;
