import React from "react";
import { useLocation } from "react-router-dom";
import AdminOptions from "./AdminOptions";
import UserOptions from "./UserOptions";

const BarraLateral = () => {
  const location = useLocation();
  return (
    <aside className="text-center">
      <div className="d-flex">
        {location.pathname === "/dashboard-admin" && <AdminOptions />}
        {location.pathname === "/dashboard-admin/registro" && <AdminOptions />}
        {location.pathname === "/dashboard-admin/zonas" && <AdminOptions />}
        {location.pathname === "/dashboard-admin/habitaciones" && <AdminOptions />}
        {location.pathname === "/dashboard-admin/componentes" && <AdminOptions />}
        {location.pathname === "/dashboard-usuario" && <UserOptions />}
        {location.pathname === "/dashboard-usuario/perfil" && <UserOptions />}
        {location.pathname === "/dashboard-usuario/inventario" && (
          <UserOptions />
        )}
      </div>
    </aside>
  );
};

export default BarraLateral;
