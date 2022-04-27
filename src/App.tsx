import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { CityTemplate } from "./pages/CityTemplate";
import { City } from "./pages/City";
import GlobalStyle from "./globalStyles";
import { AppContainer, Background, Box } from "./App.styles";
import { Heading } from "./components/heading";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Box>
        <Heading />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="city" element={<CityTemplate />}>
            <Route path=":name" element={<City />} />
          </Route>
        </Routes>
      </Box>
      <Background />
    </AppContainer>
  );
}

export default App;
