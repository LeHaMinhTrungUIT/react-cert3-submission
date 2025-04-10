import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";
import Exercise3 from "./pages/Exercise3";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise-1" element={<Exercise1 />} />
          <Route path="/exercise-2" element={<Exercise2 />} />
          <Route path="/exercise-3" element={<Exercise3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
