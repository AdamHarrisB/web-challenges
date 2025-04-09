import { BoxComponent } from "@/components/BoxWithStyledComponents.js";
import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function HomePage() {
  return (
    <StyledBox>
      <BoxComponent />
      <BoxComponent $isBlack />
      <BoxComponent />
      <BoxComponent $isBlack />
    </StyledBox>
  );
}
