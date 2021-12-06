import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//components
import CircleButton from "../components/CircleButton";

export default function Page404() {
  return (
    <Container>
      <Title children="404" />
      <SubTitle children="Strona o podanym adresie nie istnieje." />
      <Link to="/Task3">
        <CircleButton />
      </Link>
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
  color: ${({ theme }) => theme.colors.dark};
`;
const SubTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 800;
  opacity: 0.55;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.dark};
`;
