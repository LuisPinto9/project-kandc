import React from "react";
import { useLocation } from "react-router-dom";
import AdminOptions from "./AdminOptions";
import UserOptions from "./UserOptions";

const BarraLateral = () => {
  const location = useLocation();
  return (
    <aside className="text-center">
      <div>
        {location.pathname === "/inventario" && <AdminOptions />}
        {location.pathname === "/sistema-usuario" && <UserOptions />}
      </div>
    </aside>
  );
};

export default BarraLateral;
