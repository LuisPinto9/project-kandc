import React from "react";
import BarraLateral from "../components/BarraLateral";
import "../css/perfil.css";

const PerfilUser = () => {
  return (
    <div className="d-flex vh-100">
      <div className="col-2 div-barra">
        <BarraLateral />
      </div>
      <div className="info-div mb-3 p-5">
        <label className="mb-3">Usuario</label>
        <div className="form-control">Contenido del div</div>
      </div>
    </div>
  );
};

export default PerfilUser;
