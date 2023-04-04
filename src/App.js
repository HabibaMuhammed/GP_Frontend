import React from "react";

import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import Labs from "./pages/Labs";
import LabContent from "./pages/LabContent";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/labs" element={<Labs />}></Route>
        <Route path="/content" element={<LabContent />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
