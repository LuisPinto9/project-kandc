import React from "react";
import { Link } from "react-router-dom";
import user from "../images/User2.png";
import lista from "../images/list.png";
import inicio from "../images/hogar.png";

const UserOptions = () => {
  return (
    <div>
      <div className="container-fluid div-inicio">
        <Link
          className="link-zonas d-flex align-items-center"
          to="/dashboard-usuario"
        >
          <div>
            <img src={inicio} alt="Logo" width="39" height="38" />
          </div>
          <div className="px-1">Inicio</div>
        </Link>
      </div>
      <div className="container-fluid div-zonas">
        <Link className="link-zonas d-flex align-items-center" to="#1">
          <div>
            <img src={user} alt="Logo" width="39" height="38" />
          </div>
          <div className="px-1">Perfil</div>
        </Link>
      </div>
      <div className="container-fluid div-habitaciones">
        <Link className="link-habitaciones d-flex align-items-center" to="#2">
          <div>
            <img src={lista} alt="Logo" width="37" height="42" />
          </div>
          <div className="px-1">Inventario</div>
        </Link>
      </div>
    </div>
  );
};

export default UserOptions;
