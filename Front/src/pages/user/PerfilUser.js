import React, { useState } from "react";
import BarraLateral from "../../components/BarraLateral";
import "../../css/perfil.css";
import { buscarUsuarioId } from "../../controllers/UserControllers";

const PerfilUser = () => {
  const [arrendatario, setArrendatario] = useState([]);

  const getArrendatario = async () => {
    await buscarUsuarioId(parseInt(localStorage.getItem("id"))).then((data) => {
      setArrendatario(data);
    });
    console.log(arrendatario);
  };

  return (
    <div className="d-flex" style={{ minHeight: "78.6vh" }}>
      <div className="div-barra">
        <BarraLateral />
      </div>
      <div className="d-flex flex-row flex-wrap" style={{ width: "100%" }}>
        <div style={{ width: "62%" }}>
          <div className="d-flex flex-column">
            <div className="mb-2 pt-4 pb-2 d-flex">
              <div className="info-div ps-5">
                <label className="mb-2">Usuario</label>
                <div className="form-control">{arrendatario.nombre_usuario}</div>
              </div>
              <div className="info-div ps-5">
                <label className="mb-2">Identificación</label>
                <div className="form-control">Contenido del div</div>
              </div>
            </div>
            <div className="info-div1 ps-5">
              <label className="mb-2">Nombre</label>
              <div className="form-control">Contenido del div</div>
            </div>
            <div className="mb-2 py-3 d-flex">
              <div className="info-div ps-5">
                <label className="mb-2">Teléfono</label>
                <div className="form-control">Contenido del div</div>
              </div>
              <div className="info-div ps-5">
                <label className="mb-2">Correo electrónico</label>
                <div className="form-control">Contenido del div</div>
              </div>
            </div>
            <div className="mb-4 d-flex">
              <div className="info-div ps-5">
                <label className="mb-2">Estado</label>
                <div className="form-control">Contenido del div</div>
              </div>
              <div className="info-div ps-5">
                <label className="mb-2">Valor del arriendo</label>
                <div className="form-control">Contenido del div</div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex ms-5 mt-4 div-foto-grande justify-content-center align-items-center">
          <div className="py-3 px-5">
            <i className="bi bi-person-fill" style={{ fontSize: "12rem" }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilUser;
