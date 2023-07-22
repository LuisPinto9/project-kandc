import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Registro from "../pages/Registro";
import DashboardAdmin from "../pages/DashboardAdmin";
import DashboardUsuario from "../pages/DashboardUsuario";
import Login from "../pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard-admin" Component={DashboardAdmin} />
        <Route path="/dashboard-admin/registro" element={<Registro />} />
        <Route path="/dashboard-usuario" Component={DashboardUsuario} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
