import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { CityTemplate } from "./pages/CityTemplate";
import { City } from "./pages/City";
import GlobalStyle from "./globalStyles";
import { AppContainer, Background } from "./App.styles";

function App() {
  return (
    <AppContainer>
      <Background />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="city" element={<CityTemplate />}>
          <Route path=":name" element={<City />} />
        </Route>
      </Routes>
    </AppContainer>
  );
}

export default App;
