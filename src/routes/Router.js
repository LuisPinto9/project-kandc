import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import App from "../App";
import Inventario from "../pages/Inventario";
import SistemaUsuario from "../pages/SistemaUsuario";
import Login from "../components/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/app" Component={App} />
        <Route path="/login" element={<Login />} />
        <Route path="/inventario" Component={Inventario} />
        <Route path="/sistema-usuario" Component={SistemaUsuario} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
