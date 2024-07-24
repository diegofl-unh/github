import React from "react";
// import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Inicio from "./pages/Inicio";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
