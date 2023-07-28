import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Registro from "../pages/admin/Registro";
import DashboardAdmin from "../pages/admin/DashboardAdmin";
import DashboardUsuario from "../pages/user/DashboardUsuario";
import Login from "../pages/Login";
import PerfilUser from "../pages/user/PerfilUser";
import InventarioUser from "../pages/user/InventarioUser";
import Zonas from "../pages/admin/Zonas";
import Componentes from "../pages/admin/Componentes";
import Habitaciones from "../pages/admin/Habitaciones";
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
