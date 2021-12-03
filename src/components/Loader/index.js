import React from "react";
import styled from "styled-components";

export default function Loader() {
  return (
    <Container>
      <Title children="Loading ..." />
    </Container>
  );
}

//styles
const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1366px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 10px;
`;
