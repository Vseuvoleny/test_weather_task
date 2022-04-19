import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CityTemplate } from "./pages/CityTemplate";
import { City } from "./pages/City";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="city" element={<CityTemplate />}>
        <Route path=":name" element={<City />} />
      </Route>
    </Routes>
  );
}

export default App;
