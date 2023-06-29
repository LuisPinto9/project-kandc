import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import App from "../App";
import Login from "../components/Login";
import inventario from "../pages/inventario";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/app" Component={App} />
        <Route path="/login" element={<Login />} />
        <Route path="/inventario" Component={inventario} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
