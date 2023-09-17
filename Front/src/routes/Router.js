import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Registro from "../pages/admin/Registro";
import DashboardAdmin from "../pages/admin/DashboardAdmin";
import DashboardUsuario from "../pages/user/DashboardUsuario";
import Zonas from "../pages/admin/Zonas";
import Componentes from "../pages/admin/Componentes";
import Habitaciones from "../pages/admin/Habitaciones";
import Login from "../pages/Login";
import PerfilUser from "../pages/user/PerfilUser";
import InventarioUser from "../pages/user/InventarioUser";
import Error404 from "../pages/Error404";
import Check from "../middleware/TypeUserAuthentication";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas para administradores */}
        <Route
          path="/dashboard-admin"
          element={
            <Check tipoRequerido="Administrador">
              <DashboardAdmin />
            </Check>
          }
        />
        <Route
          path="/dashboard-admin/zonas"
          element={
            <Check tipoRequerido="Administrador">
              <Zonas />
            </Check>
          }
        />
        <Route
          path="/dashboard-admin/habitaciones"
          element={
            <Check tipoRequerido="Administrador">
              <Habitaciones />
            </Check>
          }
        />
        <Route
          path="/dashboard-admin/componentes"
          element={
            <Check tipoRequerido="Administrador">
              <Componentes />
            </Check>
          }
        />
        <Route
          path="/dashboard-admin/registro"
          element={
            <Check tipoRequerido="Administrador">
              <Registro />
            </Check>
          }
        />

        {/* Rutas para arrendatarios */}
        <Route
          path="/dashboard-usuario"
          element={
            <Check tipoRequerido="Arrendatario">
              <DashboardUsuario />
            </Check>
          }
        />
        <Route
          path="/dashboard-usuario/perfil"
          element={
            <Check tipoRequerido="Arrendatario">
              <PerfilUser />
            </Check>
          }
        />
        <Route
          path="/dashboard-usuario/inventario"
          element={
            <Check tipoRequerido="Arrendatario">
              <InventarioUser />
            </Check>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
