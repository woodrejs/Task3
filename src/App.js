import React, { useEffect } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Home from "./screens/Home";
import Page404 from "./screens/404.js";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
//utils
import useDB from "./hooks/db";
import { dark, light } from "./utils/theme";

export default function App() {
  //hooks
  const { getData, quotes } = useDB();
  const error = useSelector(({ errorSlice }) => errorSlice.isOpen);
  const theme = useSelector(({ appSlice }) => appSlice.theme);

  useEffect(() => getData(), []);

  if (error) return <Error />;

  if (!quotes.length) return <Loader />;

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <Container>
        <Header />
        <Router>
          <Routes>
            <Route path={"/Task3"} element={<Home />} exact />
            <Route path={"*"} element={<Page404 />} />
          </Routes>
        </Router>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

//styles
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bck};
`;
