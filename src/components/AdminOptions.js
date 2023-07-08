import React from "react";
import { Link } from "react-router-dom";
import zonas from "../images/Company.png";
import habitaciones from "../images/Living Room.png";
import componentes from "../images/TV.png";
import usuarios from "../images/User.png";

const AdminOptions = () => {
  return (
    <div>
      <div className="container-fluid div-zonas">
        <Link className="link-zonas d-flex align-items-center" to="#1">
          <div>
            <img src={zonas} alt="Logo" width="39" height="38" />
          </div>
          <div className="px-1">Zonas</div>
        </Link>
      </div>
      <div className="container-fluid div-habitaciones">
        <Link className="link-habitaciones d-flex align-items-center" to="#2">
          <div>
            <img src={habitaciones} alt="Logo" width="37" height="42" />
          </div>
          <div className="px-1">Habitaciones</div>
        </Link>
      </div>
      <div className="container-fluid div-componentes">
        <Link className="link-componentes d-flex align-items-center" to="#3">
          <div>
            <img src={componentes} alt="Logo" width="34" height="40" />
          </div>
          <div className="px-1">Componentes</div>
        </Link>
      </div>
      <div className="container-fluid div-usuarios">
        <Link className="link-usuarios d-flex align-items-center" to="#4">
          <div className="">
            <img src={usuarios} alt="Logo" width="33" height="37" />
          </div>
          <div className="px-1">Usuarios</div>
        </Link>
      </div>
    </div>
  );
};

export default AdminOptions;
