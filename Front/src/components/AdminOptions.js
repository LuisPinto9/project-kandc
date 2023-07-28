import React from "react";
import { Link, useLocation } from "react-router-dom";
import zonas from "../images/Company.png";
import habitaciones from "../images/Living Room.png";
import componentes from "../images/TV.png";
import usuarios from "../images/User.png";
import inicio from "../images/hogar.png";

const AdminOptions = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/dashboard-admin" && (
        <div className="container-fluid div-barra-seleccionado">
          <Link
            className="link-to d-flex align-items-center"
            to="/dashboard-admin"
          >
            <div>
              <img src={inicio} alt="Logo" width="39" height="38" />
            </div>
            <div className="px-1">Inicio</div>
          </Link>
        </div>
      )}
      {location.pathname !== "/dashboard-admin" && (
        <div className="container-fluid div-barra-seccion">
          <Link
            className="link-to d-flex align-items-center"
            to="/dashboard-admin"
          >
            <div>
              <img src={inicio} alt="Logo" width="39" height="38" />
            </div>
            <div className="px-1">Inicio</div>
          </Link>
        </div>
      )}
      {location.pathname === "/dashboard-admin/zonas" && (
        <div className="container-fluid div-barra-seleccionado">
          <Link
            className="link-to d-flex align-items-center"
            to="/dashboard-admin/zonas"
          >
            <div>
              <img src={zonas} alt="Logo" width="39" height="38" />
            </div>
            <div className="px-1">Zonas</div>
          </Link>
        </div>
      )}
      {location.pathname !== "/dashboard-admin/zonas" && (
        <div className="container-fluid div-barra-seccion">
          <Link
            className="link-to d-flex align-items-center"
            to="/dashboard-admin/zonas"
          >
            <div>
              <img src={zonas} alt="Logo" width="39" height="38" />
            </div>
            <div className="px-1">Zonas</div>
          </Link>
        </div>
      )}
      {location.pathname === "/dashboard-admin/habitaciones" && (
        <div className="container-fluid div-barra-seleccionado">
          <Link
            className="link-to d-flex align-items-center"
            to="/dashboard-admin/habitaciones"
          >
            <div>
              <img src={habitaciones} alt="Logo" width="39" height="38" />
            </div>
            <div className="px-1">Habitaciones</div>
          </Link>
        </div>
      )}
      {location.pathname !== "/dashboard-admin/habitaciones" && (
        <div className="container-fluid div-barra-seccion">
          <Link
            className="link-to d-flex align-items-center"
            to="/dashboard-admin/habitaciones"
          >
            <div>
              <img src={habitaciones} alt="Logo" width="39" height="38" />
            </div>
            <div className="px-1">Habitaciones</div>
          </Link>
        </div>
      )}
      {location.pathname === "/dashboard-admin/componentes" && (
        <div className="container-fluid div-barra-seleccionado">
          <Link
            className="link-to d-flex align-items-center"
            to="/dashboard-admin/componentes"
          >
            <div>
              <img src={componentes} alt="Logo" width="39" height="38" />
            </div>
            <div className="px-1">Componentes</div>
          </Link>
        </div>
      )}
      {location.pathname !== "/dashboard-admin/componentes" && (
        <div className="container-fluid div-barra-seccion">
          <Link
            className="link-to d-flex align-items-center"
            to="/dashboard-admin/componentes"
          >
            <div>
              <img src={componentes} alt="Logo" width="39" height="38" />
            </div>
            <div className="px-1">Componentes</div>
          </Link>
        </div>
      )}
      {location.pathname === "/dashboard-admin/registro" && (
        <div className="container-fluid div-barra-seleccionado">
          <Link
            className="link-to d-flex align-items-center"
            to="/dashboard-admin/registro"
          >
            <div>
              <img src={usuarios} alt="Logo" width="33" height="37" />
            </div>
            <div className="px-1">Usuarios</div>
          </Link>
        </div>
      )}
      {location.pathname !== "/dashboard-admin/registro" && (
        <div className="container-fluid div-barra-seccion">
          <Link
            className="link-to d-flex align-items-center"
            to="/dashboard-admin/registro"
          >
            <div>
              <img src={usuarios} alt="Logo" width="33" height="37" />
            </div>
            <div className="px-1">Usuarios</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AdminOptions;
