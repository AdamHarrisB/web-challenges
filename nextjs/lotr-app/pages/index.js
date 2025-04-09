import Link from "next/link";
import styled from "styled-components"

const StyledButton = styled.button`
  position: relative;
  background: ${(props)=>props.$color === "danger" ? "purple" : "green" };
  &:hover {
      background: red;
  }
`;

const StyledLink = styled(Link)`
  background: green;
`
const FlexContainer = styled.section`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`


export default function HomePage() {
  return (
    <div>
      <FlexContainer>
      <h1>Hello from Next.js</h1>
      <StyledButton $variant="outlined">I am a button</StyledButton>
      <StyledButton $color="danger">Help me somebody</StyledButton>
      <StyledLink href="https://www.wikipedia.org/">Click Here</StyledLink>
      </FlexContainer>
    </div>
  );
}
