import React from "react";
import styled from "styled-components";
//components
import Toggler from "../Toggler";
//utils
import { device } from "../../utils/media";

export default function Footer() {
  return (
    <Container>
      <Author children="maciej szczepański" />
      <ThemeToggler title="theme" />
    </Container>
  );
}

//styles
const Container = styled.footer`
  display: flex;
  align-items: center;
  padding: 20px 0;
  position: relative;
`;
const Author = styled.span`
  width: 100%;
  font-size: 12px;
  font-weight: 400;
  text-transform: capitalize;

  text-align: start;
  padding-left: 40px;
  color: ${({ theme }) => theme.colors.dark};

  @media ${device.tablet} {
    text-align: center;
    padding-left: 0;
  }
`;
const ThemeToggler = styled(Toggler)`
  position: absolute;
  right: 40px;
`;
