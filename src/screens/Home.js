import React from "react";
import styled from "styled-components";
//components
import CircleButton from "../components/CircleButton";
import Quote from "../components/Quote";
/* background-color: ${({ theme }) => theme.colors.bck}; */

const Container = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Box = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Home() {
  return (
    <Container>
      <Quote />
      <Box>
        <CircleButton title="poprzedni" />
        <CircleButton title="następny" invert />
      </Box>
    </Container>
  );
}
