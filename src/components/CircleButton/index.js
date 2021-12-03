import React from "react";
import styled from "styled-components";
//assets
import arrow_icon from "./arrow_icon.svg";

export default function CircleButton({ invert = false, handler = null }) {
  return (
    <Container onClick={handler}>
      <Icon src={arrow_icon} alt="arrow_button" invert={invert} />
    </Container>
  );
}

//styles

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.2);

  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin: 0 20px;
`;
const Icon = styled.img`
  height: 50px;
  width: 50px;
  transform: ${({ invert }) => (invert ? "rotateZ(180deg)" : "unset")};
`;
