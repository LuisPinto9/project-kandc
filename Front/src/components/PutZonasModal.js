import React, { useState, useEffect } from "react";
import { update } from "../controllers/ZonasControllers";
import "../css/modal.css";

const PutZonasModal = ({ values, getZonas }) => {
  const [Id, setId] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Precio, setPrecio] = useState("");
  const [Acceso, setAcceso] = useState("");

  useEffect(() => {
    setId(values.Id);
    setNombre(values.Nombre);
    setDescripcion(values.Descripcion);
    setPrecio(values.Precio);
    setAcceso(values.Acceso);
  }, [values]);

  const putUser = () => {
    update({ Id, Nombre,Descripcion, Precio,Acceso });
    getZonas();
    limpiarCampos();
  };

  const limpiarCampos = () => {
    setId(values.Id);
    setNombre(values.Nombre);
    setDescripcion("");
    setPrecio(values.Precio);
    setAcceso("");
    getZonas();
  };

  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop-put"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Actualizar Zona
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={limpiarCampos}
              ></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  ID
                </span>
                <input
                  type="text"
                  value={Id}
                  onChange={(event) => {
                    setId(event.target.value);
                  }}
                  className="form-control"
                  aria-label="id"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Nombre</span>
                <input
                  type="text"
                  value={Nombre}
                  onChange={(event) => {
                    setNombre(event.target.value);
                  }}
                  className="form-control"
                  aria-label="nombre"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Descripción
                </span>
                <input
                  type="text"
                  value={Descripcion}
                  onChange={(event) => {
                    setDescripcion(event.target.value);
                  }}
                  className="form-control"
                  aria-label="descripcion"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Precio
                </span>
                <input
                  type="price"
                  value={Precio}
                  onChange={(event) => {
                    setPrecio(event.target.value);
                  }}
                  className="form-control"
                  aria-label="precio"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Tipo de Acceso
                </span>
                <input
                  type="text"
                  value={Acceso}
                  onChange={(event) => {
                    setAcceso(event.target.value);
                  }}
                  className="form-control"
                  aria-label="acceso"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={limpiarCampos}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={putUser}
              >
                Actualizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PutZonasModal;
