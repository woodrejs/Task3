import React from "react";
import styled from "styled-components";
import { device } from "../../utils/media";

const q =
  "Czym jest życie, co w nim jest najważniejsze, co się liczy, co jest wartościowe, po co żyjemy, co to jest szczęście, czym jest miłość, ile warte jest zdrowie?";
export default function Quote({ className }) {
  return (
    <Container className={className}>
      <Title children={`"${q}"`} />
    </Container>
  );
}

//styles
const Container = styled.div`
  margin-bottom: 50px;
`;
const Title = styled.h1`
  padding: 10px;
  font-size: 18px;
  line-height: 160%;
  max-width: 90%;
  font-weight: 00;
  text-align: center;
  margin: 0 auto;

  @media ${device.tablet} {
    font-size: 27px;
    line-height: 150%;
  }
`;
