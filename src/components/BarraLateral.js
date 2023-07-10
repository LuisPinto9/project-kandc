import React from "react";
import { useLocation } from "react-router-dom";
import AdminOptions from "./AdminOptions";
import UserOptions from "./UserOptions";

const BarraLateral = () => {
  const location = useLocation();
  return (
    <aside className="text-center">
      <div>
        {location.pathname === "/dashboard-admin" && <AdminOptions />}
        {location.pathname === "/dashboard-admin/registro" && <AdminOptions />}
        {location.pathname === "/dashboard-usuario" && <UserOptions />}
      </div>
    </aside>
  );
};

export default BarraLateral;
