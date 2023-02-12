import React from "react";
import { Route, Routes } from "react-router-dom";
import Chart from "./components/Chart";
import Login from "./components/Login";
import Home from "./containers/Home";
import Dashboard from "./pages/Dashboard";
import Homiylar from "./pages/Homiylar";

function App() {
  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/homiylar" element={<Homiylar />} />
      </Routes>
    </div>
  );
}

export default App;
