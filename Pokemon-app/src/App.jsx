import React from "react";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PkmDetail from "./pages/PkmDetail";
import "./App.css";
const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/detail" element={<PkmDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
