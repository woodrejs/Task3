import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { device } from "../../utils/media";

export default function Quote({ className, single }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(ref.current, { opacity: 0 }, { duration: 2, opacity: 1, ease: "power2" });
  });

  if (!single) return null;

  return (
    <Container className={className} ref={ref}>
      <Title children={`"${single.quote}"`} />
      <Author children={single.author} />
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
  font-weight: 800;
  text-align: center;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.dark};

  @media ${device.tablet} {
    font-size: 27px;
    line-height: 150%;
  }
`;
const Author = styled.h5`
  padding: 10px;
  font-size: 18px;
  font-style: italic;
  max-width: 90%;
  font-weight: 400;
  text-align: center;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.dark};
`;
