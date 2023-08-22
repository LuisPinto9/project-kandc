import React from "react";
import BarraLateral from "../../components/BarraLateral";
import "../../css/styles.css";
import "../../css/dashboardInicio.css"

const SistemaUsuario = () => {
  return (
    <div>
      <div className="d-flex" style={{ minHeight: "78.6vh" }}>
        <div className="div-barra">
          <BarraLateral />
        </div>
        <div className=" d-flex justify-content-center align-items-center text-center flex-wrap px-3">
          <div className="pagina-inicio">
            <div className="div-blanco m-5">
              <h1>Bienvendio al Modulo de Arrendatario</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SistemaUsuario;
