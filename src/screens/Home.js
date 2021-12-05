import React, { useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
//components
import CircleButton from "../components/CircleButton";
import Quote from "../components/Quote";
import Transition from "../components/Transition";
//utils
import { addSingle } from "../redux/quotes.slice";
import { getRndInteger } from "../utils/functions";

export default function Home() {
  const counter = useRef(0);
  const dispatch = useDispatch();
  const { list, displayed, single } = useSelector(({ quotesSlice }) => quotesSlice);

  //handlers
  const handleNext = () => {
    const index = getRndInteger(0, list.length - 1);
    const quote = list[index];
    counter.current = displayed.length - 1;
    dispatch(addSingle(quote));
  };
  const handlePrev = () => {
    if (counter.current < 0) return;
    const quote = displayed[counter.current];
    dispatch(addSingle(quote));
    counter.current--;
  };

  return (
    <Container>
      <Transition />
      <Quote single={single} />
      <Box>
        <CircleButton title="poprzedni" handler={handlePrev} />
        <CircleButton title="następny" handler={handleNext} invert />
      </Box>
    </Container>
  );
}

//styles
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
