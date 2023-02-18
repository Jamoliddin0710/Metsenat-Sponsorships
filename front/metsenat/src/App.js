import React from "react";
import { Route, Routes } from "react-router-dom";
import JShUser from "./components/JShUser";
import Login from "./components/Login";
import Student from "./components/Student";
import StudentPlus from "./components/StudentPlus";
import YUser from "./components/YUser";
import Home from "./containers/Home";
import Ariza from "./pages/Ariza";
import Dashboard from "./pages/Dashboard";
import Homiylar from "./pages/Homiylar";
import Talabalar from "./pages/Talabalar";

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
      <Route path="/talaba" element={<Student />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Ariza />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/homiy" element={<JShUser />} />
        <Route path="/yshahs" element={<YUser />} />
        <Route path="/homiylar" element={<Homiylar />} />
        <Route path="/talabalar" element={<Talabalar />} />
        <Route path="/plus" element={<StudentPlus />} />
      </Routes>
    </div>
  );
}

export default App;
