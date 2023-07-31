import React, { useState, useEffect } from "react";
import { update } from "../controllers/UserControllers";
import "../css/modal.css";

const PutRegistroModal = ({ values, getArrendatario }) => {
  const [IDUsuario, setIDUsuario] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
  const [TypeUser, setTypeUser] = useState("");
  const [Identification, setIdentification] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Gmail, setGmail] = useState("");
  const [LeaseDate, setLeaseDate] = useState("");
  const [State1, setState1] = useState("");

  useEffect(() => {
    setIDUsuario(values.IDUsuario);
    setNombre(values.Nombre);
    setPhoneNumber(values.PhoneNumber);
  }, [values]);

  const putUser = () => {
    update({ IDUsuario, Nombre, PhoneNumber });
    getArrendatario();
    limpiarCampos();
  };

  const limpiarCampos = () => {
    setIDUsuario(values.IDUsuario);
    setNombre(values.Nombre);
    setPhoneNumber(values.PhoneNumber);
  };

  return (
    <div>
      <div
        className="modal fade"
        // id={id}
        id="staticBackdrop"
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
                Actualización
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
                  ID del Usuario
                </span>
                <input
                  type="number"
                  value={IDUsuario}
                  onChange={(event) => {
                    setIDUsuario(event.target.value);
                  }}
                  className="form-control"
                  aria-label="Username"
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
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Número de Teléfono
                </span>
                <input
                  type="tel"
                  value={PhoneNumber}
                  onChange={(event) => {
                    setPhoneNumber(event.target.value);
                  }}
                  className="form-control"
                  aria-label="Phone Number"
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
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={putUser}
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PutRegistroModal;
