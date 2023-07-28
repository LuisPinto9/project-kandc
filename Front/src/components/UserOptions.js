import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../images/User2.png";
import lista from "../images/list.png";
import inicio from "../images/hogar.png";

const UserOptions = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/dashboard-usuario" && (
        <div className="container-fluid div-barra-seleccionado">
          <Link
            className="link-to d-flex align-items-center"
            to="/dashboard-usuario"
          >
            <div>
              <img src={inicio} alt="Logo" width="39" height="38" />
            </div>
            <div className="px-1">Inicio</div>
          </Link>
        </div>
      )}
      {location.pathname !== "/dashboard-usuario" && (
        <div className="container-fluid div-barra-seccion">
          <Link
            className="link-to d-flex align-items-center"
            to="/dashboard-usuario"
          >
            <div>
              <img src={inicio} alt="Logo" width="39" height="38" />
            </div>
            <div className="px-1">Inicio</div>
          </Link>
        </div>
      )}
      {location.pathname === "/dashboard-usuario/perfil" && (
        <div className="container-fluid div-barra-seleccionado">
          <Link
            className="link-to d-flex align-items-center"
            to="/dashboard-usuario/perfil"
          >
            <div>
              <img src={user} alt="Logo" width="39" height="38" />
            </div>
            <div className="px-1">Usuario</div>
          </Link>
        </div>
      )}
      {location.pathname !== "/dashboard-usuario/perfil" && (
        <div className="container-fluid div-barra-seccion">
          <Link
            className="link-to d-flex align-items-center"
            to="/dashboard-usuario/perfil"
          >
            <div>
              <img src={user} alt="Logo" width="39" height="38" />
            </div>
            <div className="px-1">Usuario</div>
          </Link>
        </div>
      )}
      {location.pathname === "/dashboard-usuario/inventario" && (
        <div className="container-fluid div-barra-seleccionado">
          <Link
            className="link-to d-flex align-items-center"
            to="/dashboard-usuario/inventario"
          >
            <div>
              <img src={lista} alt="Logo" width="37" height="42" />
            </div>
            <div className="px-1">Inventario</div>
          </Link>
        </div>
      )}
      {location.pathname !== "/dashboard-usuario/inventario" && (
        <div className="container-fluid div-barra-seccion">
          <Link
            className="link-to d-flex align-items-center"
            to="/dashboard-usuario/inventario"
          >
            <div>
              <img src={lista} alt="Logo" width="37" height="42" />
            </div>
            <div className="px-1">Inventario</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserOptions;
