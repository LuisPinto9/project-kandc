import React, { useState } from "react";
import { add } from "../controllers/HabitacionControllers";
import "../css/modal.css";

const PostHabitacionesModal = ({ getHabitaciones }) => {
  const [Id, setId] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Estado, setEstado] = useState("");
  const [Precio, setPrecio] = useState("");
  const [Zona, setZona] = useState("");

  const limpiarCampos = () => {
    setId("");
    setNombre("");
    setEstado("");
    setPrecio("");
    setZona("");
  };

  const AddPost = () => {
    add({ Id, Nombre, Estado,Precio, Zona });    
    getHabitaciones();
    getHabitaciones();
    limpiarCampos();
  };

  return (
    <div>
      <i
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop-post"
        className="bi bi-plus-circle-fill btn-add"
      />
      <div
        className="modal fade"
        id="staticBackdrop-post"
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
                Registrar Habitación Nueva
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
                  Precio
                </span>
                <input
                  type="text"
                  value={Precio}
                  onChange={(event) => {
                    setPrecio(event.target.value);
                  }}
                  className="form-control"
                  aria-label="Precio"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Zona
                </span>
                <input
                  type="text"
                  value={Zona}
                  onChange={(event) => {
                    setZona(event.target.value);
                  }}
                  className="form-control"
                  aria-label="Zona"
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
                onClick={AddPost}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHabitacionesModal;
