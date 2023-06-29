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
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  margin-top: 2rem;
  align-items: center;
  padding: 2rem 4rem;
  background-color: #dfdfdf;
`;

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
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
