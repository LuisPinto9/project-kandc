import React, { useState, useEffect } from "react";
import { add, update } from "../controllers/UserControllers";
import "../css/modal.css";

import Swal from "sweetalert2";

const UserForm = ({ modoEdicion, usuario, getArrendatarios }) => {
  const initialState = {
    IDUsuario: "",
    Nombre: "",
    MetodoRenta: "",
    ExtensionDias: "",
    Telefono: "",
    NombreUsuario: "",
    Contraseña: "",
    Correo: "",
    TipoUsuario: "",
  };

  const [values, setValues] = useState(initialState);
  const [errorMessages, setErrorMessages] = useState({ ...initialState });
  const [editado, setEditado] = useState(false)

  useEffect(() => {
    if (modoEdicion) {
      setValues(usuario);
    } else {
      setValues(initialState);
    }
    // eslint-disable-next-line
  }, [usuario, modoEdicion]);

  const validateField = (fieldName) => {
    const value = values[fieldName];
    const updatedErrorMessages = { ...errorMessages };
    switch (fieldName) {
      case "IDUsuario":
        const idPattern = /^\d+$/;
        if (!idPattern.test(value) || parseInt(value, 10) === 0) {
          updatedErrorMessages[fieldName] =
            "El campo IDUsuario debe contener solo números y no ser igual a cero.";
        } else {
          updatedErrorMessages[fieldName] = "";
        }
        break;

      case "Nombre":
        const nombrePattern = /^[\p{L}ÁÉÍÓÚáéíóúÑñ\s]+$/u;
        const nombreParts = value.trim().split(/\s+/); // Dividir el valor en palabras

        if (
          !nombrePattern.test(value) || // Comprueba que solo contiene letras y espacios
          nombreParts.length < 2 || // Comprueba que haya al menos dos palabras (nombres y apellidos)
          nombreParts.length > 4 // Limita a un máximo de cuatro palabras (por si hay doble apellido)
        ) {
          updatedErrorMessages[fieldName] =
            "Debe contener letras y espacios y ser Un nombre valido";
        } else {
          updatedErrorMessages[fieldName] = "";
        }
        break;

      case "MetodoRenta":
        const metodoRentaPattern = /^[A-Za-z]+$/;
        if (!metodoRentaPattern.test(value)) {
          updatedErrorMessages[fieldName] =
            "El campo Método de Renta debe contener solo letras sin espacios.";
        } else {
          updatedErrorMessages[fieldName] = "";
        }
        break;

      case "ExtensionDias":
        const extensionDiasPattern = /^\d+$/;
        const numericValue = parseInt(value, 10); // Convertir el valor a un número entero
        if (!extensionDiasPattern.test(value) || numericValue > 365) {
          updatedErrorMessages[fieldName] =
            "Debe contener solo números y no debe ser mayor de 365 días.";
        } else {
          updatedErrorMessages[fieldName] = "";
        }
        break;

      case "Telefono":
        const telefonoPattern = /^\d{10}$/;
        if (!telefonoPattern.test(value)) {
          updatedErrorMessages[fieldName] =
            "Debe contener exactamente 10 dígitos.";
        } else {
          updatedErrorMessages[fieldName] = "";
        }
        break;

      case "NombreUsuario":
        const nombreUsuarioPattern = /^[A-Za-z0-9]+$/;
        if (!nombreUsuarioPattern.test(value)) {
          updatedErrorMessages[fieldName] =
            "Debe contener solo letras y números sin caracteres especiales.";
        } else {
          updatedErrorMessages[fieldName] = "";
        }
        break;

      case "Contraseña":
        // Contraseña debe cumplir con los requisitos
        const contraseñaPattern =
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!contraseñaPattern.test(value)) {
          updatedErrorMessages[fieldName] =
            "Debe contener: 8 caracteres: especiales, Mayuscula, Minuscula, Numeros";
        } else {
          updatedErrorMessages[fieldName] = "";
        }
        break;

      case "Correo":
        const gmailPattern = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
        const yahooPattern = /^[A-Za-z0-9._%+-]+@yahoo\.com$/;
        const hotmailPattern = /^[A-Za-z0-9._%+-]+@hotmail\.com$/;

        if (!(gmailPattern.test(value) || yahooPattern.test(value) || hotmailPattern.test(value)) || value.length > 100) {
          updatedErrorMessages[fieldName] =
            "Debe ser una dirección de correo electrónico válida de Gmail, Yahoo Mail o Hotmail.";
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
    validateField("IDUsuario");
    validateField("Nombre");
    validateField("MetodoRenta");
    validateField("ExtensionDias");
    validateField("Telefono");
    validateField("NombreUsuario");
    validateField("Contraseña");
    validateField("Correo");
    validateField("TipoUsuario");
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
        values.IDUsuario === "" ||
        values.Nombre === "" ||
        values.MetodoRenta === "" ||
        values.ExtensionDias === "" ||
        values.Telefono === "" ||
        values.NombreUsuario === "" ||
        values.Contraseña === "" ||
        values.Correo === "" ||
        values.TipoUsuario === ""
      ) {
        mostrarMensajeError();
      } else {
        if (modoEdicion) {
          await update(values);
        } else {
          await add(values);
        }
        getArrendatarios();
        setEditado(true)
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
      setValues(usuario)
    } else if (!modoEdicion) {
      setValues(initialState)
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
                {modoEdicion ? "Actualizar Usuario" : "Agregar Usuario"}
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
                  value={values.IDUsuario}
                  disabled={modoEdicion}
                  onChange={(event) => {
                    setValues({ ...values, IDUsuario: event.target.value });
                  }}
                  onKeyUp={() => {
                    validateField("IDUsuario");
                  }}
                  className="form-control"
                  aria-label="id"
                  aria-describedby="basic-addon1"
                />
                {errorMessages.IDUsuario && (
                  <div className="text-danger">{errorMessages.IDUsuario}</div>
                )}
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">Nombre</span>
                <input
                  type="text"
                  value={values.Nombre}
                  onChange={(event) => {
                    setValues({ ...values, Nombre: event.target.value });

                  }}
                  onKeyUp={() => {
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
                  Método de Renta
                </span>
                <select
                  value={values.MetodoRenta}
                  onChange={(event) => {
                    setValues({ ...values, MetodoRenta: event.target.value });
                  }}
                  className="form-select"
                  aria-label="metodo-renta"
                  aria-describedby="basic-addon1"
                >
                  <option value="">Selecciona el método de renta</option>
                  <option value="Arriendo">Arriendo</option>
                  <option value="Compra">Compra</option>
                  <option value="Leasing">Leasing</option>
                  <option value="Alquiler">Alquiler</option>
                  {/* Agrega más opciones según tus necesidades */}
                </select>
                {errorMessages.MetodoRenta && (
                  <div className="text-danger">{errorMessages.MetodoRenta}</div>
                )}
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Extensión de Días
                </span>
                <input
                  type="text"
                  value={values.ExtensionDias}
                  onChange={(event) => {
                    setValues({ ...values, ExtensionDias: event.target.value });

                  }}
                  onKeyUp={() => {
                    validateField("ExtensionDias");
                  }}
                  className="form-control"
                  aria-label="extension"
                  aria-describedby="basic-addon1"
                />
                {errorMessages.ExtensionDias && (
                  <div className="text-danger">
                    {errorMessages.ExtensionDias}
                  </div>
                )}
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Teléfono
                </span>
                <input
                  type="text"
                  value={values.Telefono}
                  onChange={(event) => {
                    console.log("Nuevo valor del campo Teléfono:", event.target.value);
                    setValues({ ...values, Telefono: event.target.value });

                  }}
                  onKeyUp={() => {
                    validateField("Telefono");
                  }}
                  className="form-control"
                  aria-label="Phone Number"
                  aria-describedby="basic-addon1"
                />
                {errorMessages.Telefono && (
                  <div className="text-danger">{errorMessages.Telefono}</div>
                )}
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Nombre de Usuario
                </span>
                <input
                  type="text"
                  value={values.NombreUsuario}
                  onChange={(event) => {
                    setValues({ ...values, NombreUsuario: event.target.value });

                  }}
                  onKeyUp={() => {
                    validateField("NombreUsuario");
                  }}
                  className="form-control"
                  aria-label="nombre-usuario"
                  aria-describedby="basic-addon1"
                />
                {errorMessages.NombreUsuario && (
                  <div className="text-danger">
                    {errorMessages.NombreUsuario}
                  </div>
                )}
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Contraseña
                </span>
                <input
                  type="text"
                  value={values.Contraseña}
                  onChange={(event) => {
                    setValues({ ...values, Contraseña: event.target.value });

                  }}
                  onKeyUp={() => {
                    validateField("Contraseña");
                  }}
                  className="form-control"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                />
                {errorMessages.Contraseña && (
                  <div className="text-danger">{errorMessages.Contraseña}</div>
                )}
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Correo
                </span>
                <input
                  type="text"
                  value={values.Correo}
                  onChange={(event) => {
                    setValues({ ...values, Correo: event.target.value });

                  }}
                  onKeyUp={() => {
                    validateField("Correo");
                  }}
                  className="form-control"
                  aria-label="correo"
                  aria-describedby="basic-addon1"
                />
                {errorMessages.Correo && (
                  <div className="text-danger">{errorMessages.Correo}</div>
                )}
              </div>

              <div className="input-group mb-3">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelectTipoUsuario"
                >
                  Tipo de Usuario
                </label>
                <select
                  className="form-select"
                  id="inputGroupSelectTipoUsuario"
                  value={values.TipoUsuario}
                  onChange={(event) => {
                    setValues({ ...values, TipoUsuario: event.target.value });

                  }}
                  onKeyUp={() => {
                    validateField("TipoUsuario");
                  }}
                >
                  <option value="" disabled>
                    Selecciona un tipo de usuario
                  </option>
                  <option value="Arrendatario">Arrendatario</option>
                  <option value="Administrador">Administrador</option>
                </select>
                {errorMessages.TipoUsuario && (
                  <div className="text-danger">{errorMessages.TipoUsuario}</div>
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

export default UserForm;
