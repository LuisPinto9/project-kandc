import React from "react";
import BarraLateral from "../../components/BarraLateral";

const DashboardAdmin = () => {
  return (
    <div
      className="d-flex flex-column flex-md-row"
      style={{ minHeight: "78.6vh" }}
    >
      <div className="div-barra">
        <BarraLateral />
      </div>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <div className="error-404" >
          <h1>Edificio K&C</h1>
          <div className="subtitulo">
            <h2>Administración</h2>
            <div className="linea"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
