import React from "react";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import "./App.css";
import { PokemonProvider } from "./contexts/PokemonContext";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <PokemonProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dex" element={<Dex />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </PokemonProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
