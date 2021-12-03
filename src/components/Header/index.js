import React from "react";
import styled from "styled-components";

const Container = styled.header``;
const Box = styled.div`
  display: inline-block;
  padding: 20px 40px;
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 800;
`;
const SubTitle = styled.h3`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 800;
  opacity: 0.55;
`;

export default function Header() {
  return (
    <Container>
      <Box>
        <Title children="zadanie III" />
        <SubTitle children="react" />
      </Box>
    </Container>
  );
}
