import { styled } from "styled-components";

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
        <Copy>
          <span>© Copyright 2022 Ellen Dahlgren, All rights reserved</span>
        </Copy>
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
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  margin-top: 2rem;
  align-items: center;
  padding: 3rem 4rem;
  background-color: #dfdfdf;
`;

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  padding-bottom: 3rem;
  border-bottom: 1px solid black;
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
  color: #333;
  font-size: 1.25rem;
`;

const Signup = styled.h4`
  display: flex;
`;

const BottomSection = styled.div`
  padding-top: 3rem;
  display: grid;
  align-items: end;
  grid-template-columns: 1fr 1fr 1fr;
`;

const NewsletterSection = styled.div`
  padding: 1rem;
  grid-column: span 2;
`;

const NewsletterTitle = styled.div`
  grid-column: span 2;
  font-weight: bold;
  padding-bottom: 1rem;
`;

const Copy = styled.div`
  color: #333;
  font-size: 0.8rem;
  padding: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-top: 1rem;
  background-color: transparent;
  width: 14rem;
  border: 1px solid black;
`;

const Button = styled.button`
  margin-top: 1rem;
  border: 1px solid black;
  border-left: transparent;
  background-color: transparent;
  border-radius: 0;
  font-size: 0.8rem;
`;

const Text = styled.p`
  color: #333;
  font-size: 1rem;
`;

const Link = styled.a`
  color: #333;
  font-size: 1rem;
  position: relative;
  cursor: pointer;

  &:hover {
    color: black;
    text-decoration: underline;
  }
`;
