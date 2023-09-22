import React, { useState, useEffect } from "react";
import { add, update } from "../controllers/ZonasControllers";
import "../css/modal.css";
import Swal from "sweetalert2";

const ZonasForm = ({ modoEdicion, zona, getZonas }) => {
  const initialState = {
    Id: "",
    Nombre: "",
    Descripcion: "",
    Precio: "",
    Acceso: "",
  };

  const [values, setValues] = useState(initialState);
  const [errorMessages, setErrorMessages] = useState({ ...initialState });
  const [editado, setEditado] = useState(false);

  useEffect(() => {
    if (modoEdicion) {
      setValues(zona);
    } else {
      setValues(initialState);
    }
    // eslint-disable-next-line
  }, [zona, modoEdicion]);

  const validateField = (fieldName) => {
    const value = values[fieldName];
    const updatedErrorMessages = { ...errorMessages };
    switch (fieldName) {
      case "Id":
        const idPattern = /^\d+$/;
        if (!idPattern.test(value) || parseInt(value, 10) === 0) {
          updatedErrorMessages[fieldName] =
            "El campo Id debe contener solo números y no ser igual a cero.";
        } else {
          updatedErrorMessages[fieldName] = "";
        }
        break;

      case "Nombre":
        const nombrePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s0-9]+$/u;
        if (!nombrePattern.test(value) || value.trim().length < 1) {
          updatedErrorMessages[fieldName] =
            "El campo Nombre debe contener letras y números y no puede estar vacío.";
        } else {
          updatedErrorMessages[fieldName] = "";
        }
        break;

      case "Precio":
        const precioPattern = /^[0-9]+(\.[0-9]+)?$/;
        const precioValue = parseInt(value, 10);

        if (!precioPattern.test(value) ||
          precioValue < 100 || precioValue > 10000000) {
          updatedErrorMessages[fieldName] =
            "El campo Precio debe contener solo números y estar en el rango de 100 a 10,000,000.";
        } else {
          updatedErrorMessages[fieldName] = "";
        }
        break;

      case "Acceso2":
        const accesoPattern = /^[A-Za-z\s]+$/;
        if (!accesoPattern.test(value) || value.trim().length < 1) {
          updatedErrorMessages[fieldName] =
            "El campo Acceso debe contener solo letras y no puede estar vacío.";
        } else {
          updatedErrorMessages[fieldName] = "";
        }
        break;

      default:
        break;
    }
    setErrorMessages(updatedErrorMessages);
  };

  const validateFields = () => {
    validateField("Id");
    validateField("Nombre");
    validateField("Precio");
    validateField("Acceso");
  };

  const mostrarMensajeError = () => {
    Swal.fire({
      title: "Campos inválidos",
      text: "Uno o más campos contienen datos inválidos. Por favor, corrige los errores.",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
    });
  };

  const submitForm = async () => {
    validateFields();

    const hasErrors = Object.values(errorMessages).some(
      (message) => message !== ""
    );

    if (!hasErrors) {
      if (
        values.Id === "" ||
        values.Nombre === "" ||
        values.Descripcion === "" ||
        values.Precio === "" ||
        values.Acceso === ""
      ) {
        mostrarMensajeError();
      } else {
        if (modoEdicion) {
          await update(values);
        } else {
          await add(values);
        }
        getZonas();
        setEditado(true);
        limpiarCampos();
      }
    } else {
      mostrarMensajeError();
    }
  };

  const limpiarCampos = () => {
    if (editado) {
      setValues(initialState);
      setErrorMessages({ ...initialState });
    } else if (!editado && modoEdicion) {
      setValues(zona);
    } else if (!modoEdicion) {
      setValues(initialState);
    }
  };

  return (
    <div>
      <div
        className="modal fade"
        id={modoEdicion ? "staticBackdrop-put" : "staticBackdrop-post"}
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
                {modoEdicion ? "Actualizar Zona" : "Agregar Zona"}
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
                  value={values.Id}
                  className="form-control"
                  aria-label="id"
                  aria-describedby="basic-addon1"
                  disabled={modoEdicion}
                  onChange={(event) => {
                    setValues({ ...values, Id: event.target.value });
                  }}
                  onBlur={() => {
                    validateField("Id");
                  }}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Nombre</span>
                <input
                  type="text"
                  value={values.Nombre}
                  onChange={(event) => {
                    setValues({ ...values, Nombre: event.target.value });
                  }}
                  onBlur={() => {
                    validateField("Nombre");
                  }}
                  className="form-control"
                  aria-label="nombre"
                  aria-describedby="basic-addon1"
                />
                {errorMessages.Nombre && (
                  <div className="text-danger">{errorMessages.Nombre}</div>
                )}
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Descripción
                </span>
                <input
                  type="text"
                  value={values.Descripcion}
                  onChange={(event) => {
                    setValues({ ...values, Descripcion: event.target.value });
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
                  type="text"
                  value={values.Precio}
                  onChange={(event) => {
                    setValues({ ...values, Precio: event.target.value });
                  }}
                  onBlur={() => {
                    validateField("Precio");
                  }}
                  className="form-control"
                  aria-label="Precio"
                  aria-describedby="basic-addon1"
                />
                {errorMessages.Precio && (
                  <div className="text-danger">{errorMessages.Precio}</div>
                )}
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Acceso
                </span>
                <select
                  value={values.Acceso}
                  onChange={(event) => {
                    setValues({ ...values, Acceso: event.target.value });
                  }}
                  className="form-select"
                  aria-label="acceso"
                  aria-describedby="basic-addon1"
                >
                  <option value="">Selecciona el método de acceso</option>
                  <option value="Acceso Público">Acceso Público</option>
                  <option value="Acceso Privado">Acceso Privado</option>
                  {/* Agrega más opciones según tus necesidades */}
                </select>
                {errorMessages.Acceso && (
                  <div className="text-danger">{errorMessages.Acceso}</div>
                )}
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
                data-bs-dismiss={modoEdicion ? "modal" : null}
                onClick={submitForm}
              >
                {modoEdicion ? "Actualizar" : "Agregar"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZonasForm;
