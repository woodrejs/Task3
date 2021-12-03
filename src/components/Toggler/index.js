import React, { useState } from "react";
import styled from "styled-components";
//components
import Toggle from "react-toggle";

export default function Toggler({ className, title }) {
  //hooks
  const [isActive, setIsActive] = useState(false);
  //handlers
  const handleChange = () => setIsActive(!isActive);

  return (
    <Container className={className}>
      <Box>
        <Toggle defaultChecked={isActive} icons={false} onChange={handleChange} />
        <Title children={title} />
      </Box>
    </Container>
  );
}

//styles
const Container = styled.div``;
const Box = styled.label`
  display: flex;
  align-items: center;
`;
const Title = styled.span`
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  opacity: 0.55;
  margin-left: 10px;
`;
