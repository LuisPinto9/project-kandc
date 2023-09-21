import React, { useState, useEffect } from "react";
import {
  addEvidencia,
  updateEvidencia,
} from "../controllers/ComponenteEvidenciaController";
import "../css/modal.css";
import Swal from "sweetalert2";

const ComponenteEvidenciaForm = ({
  modoEdicion,
  evidenciaComponentesSeleccionada,
  getComponentesEvidencias,
  componentesList,
}) => {
  const initialState = {
    id: "",
    nombre: "",
    descripcion: "",
    url: "",
    componente: "",
  };

  const [values, setValues] = useState(initialState);
  const [errorMessages, setErrorMessages] = useState({ ...initialState });
  const [file, setFile] = useState("");
  const [editado, setEditado] = useState(false);
  const [nombreAnterior, setNombreAnterior] = useState("");

  useEffect(() => {
    if (modoEdicion) {
      setValues(evidenciaComponentesSeleccionada);
      setNombreAnterior(evidenciaComponentesSeleccionada.url);
    } else {
      setValues(initialState);
    }
    // eslint-disable-next-line
  }, [evidenciaComponentesSeleccionada, modoEdicion]);

  const validateField = (fieldName) => {
    const updatedErrorMessages = { ...errorMessages };
    switch (fieldName) {
      case "id":
        // Validación para el campo Id (similar a la de HabitacionesForm)
        break;
      case "nombre":
        // Validación para el campo Nombre (similar a la de HabitacionesForm)
        break;
      case "descripcion":
        // Validación para el campo Descripcion (similar a la de HabitacionesForm)
        break;

      case "url":
        // Validación para el campo url (similar a la de HabitacionesForm)
        break;

      case "componente":
        // Validación para el campo Habitacion (similar a la de HabitacionesForm)
        break;

      default:
        break;
    }
    setErrorMessages(updatedErrorMessages);
  };

  const validateFields = () => {
    validateField("id");
    validateField("nombre");
    validateField("descripcion");
    validateField("url");
    validateField("componente");
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
  // Método botón submit
  const submitForm = async () => {
    validateFields();
    const hasErrors = Object.values(errorMessages).some(
      (message) => message !== ""
    );
    if (!hasErrors) {
      if (
        values.id === "" ||
        values.nombre === "" ||
        values.descripcion === "" ||
        values.url === "" ||
        values.componente === ""
      ) {
        mostrarMensajeError();
      } else {
        if (modoEdicion) {
          await updateEvidencia(values, file, nombreAnterior);
        } else {
          await addEvidencia(values, file);
        }
        await getComponentesEvidencias();
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
      setValues(evidenciaComponentesSeleccionada);
    } else if (!modoEdicion) {
      setValues(initialState);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    values.url = selectedFile.name.toLowerCase();
  };

  return (
    <div>
      <div
        className="modal fade"
        id={
          modoEdicion
            ? "staticBackdrop-put-evidencia"
            : "staticBackdrop-post-evidencia"
        }
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
                {modoEdicion
                  ? "Actualizar evidencia de un componente"
                  : "Agregar evidencia de un componente"}
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
                  id="id"
                  type="text"
                  disabled={modoEdicion}
                  value={values.id}
                  onChange={(event) => {
                    setValues({ ...values, id: event.target.value });
                  }}
                  onBlur={() => {
                    validateField("id");
                  }}
                  className="form-control"
                  aria-label="id"
                  aria-describedby="basic-addon1"
                />
                {errorMessages.id && (
                  <div className="text-danger">{errorMessages.id}</div>
                )}
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Nombre</span>
                <input
                  id="nombre"
                  type="text"
                  value={values.nombre}
                  onChange={(event) => {
                    setValues({ ...values, nombre: event.target.value });
                  }}
                  onBlur={() => {
                    validateField("nombre");
                  }}
                  className="form-control"
                  aria-label="nombre"
                  aria-describedby="basic-addon1"
                />
                {errorMessages.nombre && (
                  <div className="text-danger">{errorMessages.nombre}</div>
                )}
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Descripción
                </span>
                <input
                  id="descripcion"
                  type="text"
                  value={values.descripcion}
                  onChange={(event) => {
                    setValues({
                      ...values,
                      descripcion: event.target.value,
                    });
                  }}
                  onBlur={() => {
                    validateField("Descripcion");
                  }}
                  className="form-control"
                  aria-label="descripcion"
                  aria-describedby="basic-addon1"
                />
                {errorMessages.descripcion && (
                  <div className="text-danger">{errorMessages.descripcion}</div>
                )}
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Url
                </span>
                <input
                  id="image"
                  type="file"
                  className="form-control"
                  aria-label="url"
                  aria-describedby="basic-addon1"
                  onChange={handleFileChange}
                />
              </div>
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="componente">
                  Componentes
                </label>
                <select
                  id="componente"
                  value={values.componente}
                  onChange={(event) => {
                    setValues({ ...values, componente: event.target.value });
                  }}
                  onBlur={() => {
                    validateField("componente");
                  }}
                  className="form-select"
                  aria-label="Seleccionar componente"
                >
                  <option value="">Seleccionar un componente</option>
                  {componentesList.map((componente, index) => (
                    <option key={index} value={componente.id}>
                      {componente.id}
                    </option>
                  ))}
                </select>
                {errorMessages.componente && (
                  <div className="text-danger">{errorMessages.componente}</div>
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
                onClick={() => {
                  submitForm();
                }}
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

export default ComponenteEvidenciaForm;
