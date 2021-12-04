import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
//components
import CircleButton from "../CircleButton";
//utils
import { closeError } from "../../redux/error.slice";

export default function Error() {
  const message = useSelector(({ errorSlice }) => errorSlice.message);
  const dispatch = useDispatch();

  const handleBtn = () => dispatch(closeError());

  return (
    <Container>
      <Box>
        <Title children="Error" />
        <Message children={message} />
        <CircleButton handler={handleBtn} invert />
      </Box>
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
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 10px;
`;
const Message = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 800;
  opacity: 0.55;
  margin-bottom: 40px;
`;
