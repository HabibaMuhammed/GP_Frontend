import React from "react";

import Landing from "./pages/Landing";
import { Header } from "./containers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CTA, Brand, Navbar } from "./components";

import "./App.css";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
