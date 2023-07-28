import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Registro from "../pages/Registro";
import DashboardAdmin from "../pages/DashboardAdmin";
import DashboardUsuario from "../pages/DashboardUsuario";
import Login from "../pages/Login";
import PerfilUser from "../pages/PerfilUser";
import InventarioUser from "../pages/InventarioUser";
import Zonas from "../pages/Zonas";
import Componentes from "../pages/Componentes";
import Habitaciones from "../pages/Habitaciones";
import Error404 from "../pages/Error404";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="*" element={<Error404 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard-admin" Component={DashboardAdmin} />
        <Route path="/dashboard-admin/registro" element={<Registro />} />
        <Route path="/dashboard-admin/zonas" element={<Zonas />} />
        <Route path="/dashboard-admin/componentes" element={<Componentes />} />
        <Route
          path="/dashboard-admin/habitaciones"
          element={<Habitaciones />}
        />
        <Route path="/dashboard-usuario/perfil" element={<PerfilUser />} />
        <Route
          path="/dashboard-usuario/inventario"
          element={<InventarioUser />}
        />
        <Route path="/dashboard-usuario" Component={DashboardUsuario} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
