// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Letter from "./components/Letter";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </Router>
  );
};

export default App;
