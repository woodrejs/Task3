import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
//components
import Toggle from "react-toggle";
//utils
import { toggleTheme } from "../../redux/app.slice";

export default function Toggler({ className, title }) {
  //hooks
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  //handlers
  const handleChange = () => setIsActive(!isActive);

  useEffect(() => {
    const theme = isActive ? "dark" : "light";
    dispatch(toggleTheme(theme));
  }, [isActive]);

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
  color: ${({ theme }) => theme.colors.dark};
`;
