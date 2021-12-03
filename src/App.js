import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
//components
import Home from "./screens/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const theme = () => ({
  colors: {
    dark: "#150e0e",
    light: "#F5F5F5",
    bck: "#fbfbfb",
    extra: "0a94f1",
    grey: "#d0d2d3",
  },
});

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bck};
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        {/* place for router */}
        <Home />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// const handler = async () => {
//   const resp = await axios.get(url);
//   const { data } = resp;
//import axios from "axios";
//   const random = getRndInteger(0, data.length);
// const url = `https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json`;
