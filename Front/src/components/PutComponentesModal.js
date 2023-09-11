import React, { useState, useEffect } from "react";
import { update } from "../controllers/ComponentesControllers";
import "../css/modal.css";

const PutComponentesModal = ({ values, getComponentes }) => {
  const [Id, setId] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Marca, setMarca] = useState("");
  const [Cantidad, setCantidad] = useState("");
  const [Costo, setCosto] = useState("");
  const [Estado, setEstado] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Observacion, setObservacion] = useState("");
  const [Habitacion, setHabitacion] = useState("");

  useEffect(() => {
    setId(values.Id);
    setNombre(values.Nombre);
    setMarca(values.Marca);
    setCantidad(values.Cantidad);
    setCosto(values.Costo);
    setEstado(values.Estado);
    setDescripcion(values.Descripcion);
    setObservacion(values.Observacion);
    setHabitacion(values.Habitacion);
  }, [values]);

  const putUser = async () => {
    await update({
      Id,
      Nombre,
      Marca,
      Cantidad,
      Costo,
      Estado,
      Descripcion,
      Observacion,
      Habitacion,
    });
    await getComponentes();
    limpiarCampos();
  };

  const limpiarCampos = () => {
    setId(values.Id);
    setNombre(values.Nombre);
    setMarca(values.Marca);
    setCantidad(values.Cantidad);
    setCosto(values.Costo);
    setEstado(values.Estado);
    setDescripcion(values.Descripcion);
    setObservacion(values.Observacion);
    setHabitacion(values.Habitacion);
    getComponentes("");
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
                Actualizar Componente
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
                  Marca
                </span>
                <input
                  type="text"
                  value={Marca}
                  onChange={(event) => {
                    setMarca(event.target.value);
                  }}
                  className="form-control"
                  aria-label="marca"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Cantidad
                </span>
                <input
                  type="text"
                  value={Cantidad}
                  onChange={(event) => {
                    setCantidad(event.target.value);
                  }}
                  className="form-control"
                  aria-label="cantidad"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Costo
                </span>
                <input
                  type="text"
                  value={Costo}
                  onChange={(event) => {
                    setCosto(event.target.value);
                  }}
                  className="form-control"
                  aria-label="costo"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Estado
                </span>
                <input
                  type="text"
                  value={Estado}
                  onChange={(event) => {
                    setEstado(event.target.value);
                  }}
                  className="form-control"
                  aria-label="estado"
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
                  Observación
                </span>
                <input
                  type="text"
                  value={Observacion}
                  onChange={(event) => {
                    setObservacion(event.target.value);
                  }}
                  className="form-control"
                  aria-label="observacion"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Habitación
                </span>
                <input
                  type="text"
                  value={Habitacion}
                  onChange={(event) => {
                    setHabitacion(event.target.value);
                  }}
                  className="form-control"
                  aria-label="habitacion"
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

export default PutComponentesModal;
