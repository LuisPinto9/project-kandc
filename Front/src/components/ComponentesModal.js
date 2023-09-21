import React, { useState, useEffect } from "react";
import { add, update } from "../controllers/ComponentesControllers"; // Asegúrate de importar desde los controladores correctos
import "../css/modal.css";
import Swal from "sweetalert2";

const ComponentesForm = ({
  modoEdicion,
  componente,
  getComponentes,
  HabitacionesList,
}) => {
  const initialState = {
    Id: "",
    Nombre: "",
    Marca: "",
    Cantidad: "",
    Costo: "",
    Estado: "",
    Descripcion: "",
    Observacion: "",
    Habitacion: "",
  };

  const [values, setValues] = useState(initialState);
  const [errorMessages, setErrorMessages] = useState({ ...initialState });
  const [editado, setEditado] = useState(false);

  useEffect(() => {
    if (modoEdicion) {
      setValues(componente);
    } else {
      setValues(initialState);
    }
    // eslint-disable-next-line
  }, [componente, modoEdicion]);

  const validateField = (fieldName) => {
    const value = values[fieldName];
    const updatedErrorMessages = { ...errorMessages };

    switch (fieldName) {
      case "Id":
        const idPattern = /^[0-9]+$/;
        if (!idPattern.test(value) || parseInt(value, 10) === 0) {
          updatedErrorMessages[fieldName] =
            "El campo ID debe contener solo números y no ser igual a cero.";
        } else {
          updatedErrorMessages[fieldName] = "";
        }
        break;

      case "Nombre":
        const nombrePattern = /^[\p{L}ÁÉÍÓÚáéíóúÑñ\s]+$/u;
        if (!nombrePattern.test(value) || value.length < 3) {
          updatedErrorMessages[fieldName] =
            "El campo Nombre debe contener solo letras y tener al menos 3 caracteres.";
        } else {
          updatedErrorMessages[fieldName] = "";
        }
        break;

      case "Marca":
        const marcaPattern = /^[A-Za-z]+$/;
        if (!marcaPattern.test(value) || value.length < 3) {
          updatedErrorMessages[fieldName] =
            "El campo Marca debe contener solo letras y tener al menos 3 caracteres.";
        } else {
          updatedErrorMessages[fieldName] = "";
        }
        break;

<<<<<<< HEAD
      case "Cantidad":
        const cantidadPattern = /^[0-9]+$/;
        const cantidadValue = parseInt(value, 10);
        if (
          !cantidadPattern.test(value) ||
          cantidadValue < 1 ||
          cantidadValue > 20
        ) {
          updatedErrorMessages[fieldName] =
            "El campo Cantidad debe contener solo números y estar en el rango de 1 a 20.";
        } else {
          updatedErrorMessages[fieldName] = "";
        }
        break;
=======
            case "Costo":
                const costoPattern = /^[0-9]+(\.[0-9]+)?$/;
                // const costoValue = parseFloat(value.replace(",", ".")); // Reemplaza comas por puntos y convierte a número decimal
                const costoValue = parseInt(value, 10);
                if (!costoPattern.test(value) ||
                    costoValue < 100 || costoValue > 20000000) {
                    updatedErrorMessages[fieldName] =
                        "El campo Costo debe contener solo números y estar en el rango de 100 a 20,000,000.";
                } else {
                    updatedErrorMessages[fieldName] = "";
                }
                break;
>>>>>>> a7c80dd5ca5325df52fbfb1a81e319f8ce948dc3

      case "Costo":
        const costoPattern = /^[0-9]+(\.[0-9]+)?$/;
        // const costoValue = parseFloat(value.replace(",", ".")); // Reemplaza comas por puntos y convierte a número decimal
        const costoValue = parseInt(value, 50);
        if (
          !costoPattern.test(value) ||
          costoValue < 100 ||
          costoValue > 20000000
        ) {
          updatedErrorMessages[fieldName] =
            "El campo Costo debe contener solo números y estar en el rango de 100 a 20,000,000.";
        } else {
          updatedErrorMessages[fieldName] = "";
        }
        break;

      case "Estado":
        const estadoPattern = /^[A-Za-z]+$/;
        if (!estadoPattern.test(value) || value.length < 3) {
          updatedErrorMessages[fieldName] =
            "El campo Estado debe contener solo letras y tener al menos 3 caracteres.";
        } else {
          updatedErrorMessages[fieldName] = "";
        }
        break;

      case "Descripcion":
        // Lógica de validación para el campo Descripcion
        break;

      case "Observacion":
        // Lógica de validación para el campo Observacion
        break;

      case "Habitacion":
        const habitacionPattern = /^[0-9]+$/;
        const habitacionValue = parseInt(value, 10);
        if (
          !habitacionPattern.test(value) ||
          habitacionValue < 1 ||
          habitacionValue > 100000
        ) {
          updatedErrorMessages[fieldName] =
            "El campo Habitacion debe contener solo números y estar en el rango de 1 a 50, recuerde que la habitación debe existir";
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
    validateField("Marca");
    validateField("Cantidad");
    validateField("Costo");
    validateField("Estado");
    validateField("Descripcion");
    validateField("Observacion");
    validateField("Habitacion");
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
      // Validación adicional, verifica que los campos obligatorios estén llenos
      if (
        values.Id === "" ||
        values.Nombre === "" ||
        values.Marca === "" ||
        values.Cantidad === "" ||
        values.Costo === "" ||
        values.Estado === "" ||
        values.Descripcion === "" ||
        values.Observacion === "" ||
        values.Habitacion === ""
      ) {
        mostrarMensajeError();
      } else {
        if (modoEdicion) {
          await update(values);
        } else {
          await add(values);
        }
        getComponentes();
        setEditado(true);
        limpiarCampos();
      }
    } else {
      mostrarMensajeError();
    }
  };

<<<<<<< HEAD
  const limpiarCampos = () => {
    if (editado) {
      setValues(initialState);
      setErrorMessages({ ...initialState });
    } else if (!editado && modoEdicion) {
      setValues(componente);
    } else if (!modoEdicion) {
      setValues(initialState);
    }
  };
=======
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
                                {modoEdicion ? "Actualizar Componente" : "Agregar Componente"}
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
                                    disabled={modoEdicion}
                                    onChange={(event) => {
                                        setValues({ ...values, Id: event.target.value });
                                    }}
                                    onKeyUp={() => {
                                        validateField("Id");
                                    }}
                                    className="form-control"
                                    aria-label="id"
                                    aria-describedby="basic-addon1"
                                />
                                {errorMessages.Id && (
                                    <div className="text-danger">{errorMessages.Id}</div>
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
                                    Marca
                                </span>
                                <input
                                    type="text"
                                    value={values.Marca}
                                    onChange={(event) => {
                                        setValues({ ...values, Marca: event.target.value });
                                    }}
                                    onKeyUp={() => {
                                        validateField("Marca");
                                    }}
                                    className="form-control"
                                    aria-label="marca"
                                    aria-describedby="basic-addon1"
                                />
                                {errorMessages.Marca && (
                                    <div className="text-danger">{errorMessages.Marca}</div>
                                )}
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    Cantidad
                                </span>
                                <input
                                    type="text"
                                    value={values.Cantidad}
                                    onChange={(event) => {
                                        setValues({ ...values, Cantidad: event.target.value });
                                    }}
                                    onKeyUp={() => {
                                        validateField("Cantidad");
                                    }}
                                    className="form-control"
                                    aria-label="cantidad"
                                    aria-describedby="basic-addon1"
                                />
                                {errorMessages.Cantidad && (
                                    <div className="text-danger">{errorMessages.Cantidad}</div>
                                )}
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    Costo
                                </span>
                                <input
                                    type="text"
                                    value={values.Costo}
                                    onChange={(event) => {
                                        setValues({ ...values, Costo: event.target.value });
                                    }}
                                    onKeyUp={() => {
                                        validateField("Costo");
                                    }}
                                    className="form-control"
                                    aria-label="costo"
                                    aria-describedby="basic-addon1"
                                />
                                {errorMessages.Costo && (
                                    <div className="text-danger">{errorMessages.Costo}</div>
                                )}
                            </div>



                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    Estado
                                </span>
                                <select
                                    value={values.Estado}
                                    onChange={(event) => {
                                        setValues({ ...values, Estado: event.target.value });
                                    }}
                                    className="form-select"
                                    aria-label="estado"
                                    aria-describedby="basic-addon1"
                                >
                                    <option value="">Selecciona el estado</option>
                                    <option value="Dañado">Dañado</option>
                                    <option value="Deteriorado">Deteriorado</option>
                                    <option value="Buen estado">Buen estado</option>
                                    <option value="Nuevo">Nuevo</option>
                                    <option value="En reparación">En reparación</option>
                                    {/* Agrega más opciones según tus necesidades */}
                                </select>
                                {errorMessages.Estado && (
                                    <div className="text-danger">{errorMessages.Estado}</div>
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
                                    onKeyUp={() => {
                                        validateField("Descripcion");
                                    }}
                                    className="form-control"
                                    aria-label="descripcion"
                                    aria-describedby="basic-addon1"
                                />
                                {errorMessages.Descripcion && (
                                    <div className="text-danger">{errorMessages.Descripcion}</div>
                                )}
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    Observación
                                </span>
                                <input
                                    type="text"
                                    value={values.Observacion}
                                    onChange={(event) => {
                                        setValues({ ...values, Observacion: event.target.value });
                                    }}
                                    onKeyUp={() => {
                                        validateField("Observacion");
                                    }}
                                    className="form-control"
                                    aria-label="observacion"
                                    aria-describedby="basic-addon1"
                                />
                                {errorMessages.Observacion && (
                                    <div className="text-danger">{errorMessages.Observacion}</div>
                                )}
                            </div>
                            <div className="input-group mb-3">
                                <label
                                    className="input-group-text"
                                    htmlFor="inputGroupSelectHabitacion"
                                >
                                    Habitación
                                </label>
                                <select
                                    className="form-select"
                                    id="inputGroupSelectHabitacion"
                                    value={values.Habitacion}
                                    onChange={(event) => {
                                        setValues({ ...values, Habitacion: event.target.value });
>>>>>>> a7c80dd5ca5325df52fbfb1a81e319f8ce948dc3

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
                {modoEdicion ? "Actualizar Componente" : "Agregar Componente"}
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
                  disabled={modoEdicion}
                  onChange={(event) => {
                    setValues({ ...values, Id: event.target.value });
                  }}
                  onBlur={() => {
                    validateField("Id");
                  }}
                  className="form-control"
                  aria-label="id"
                  aria-describedby="basic-addon1"
                />
                {errorMessages.Id && (
                  <div className="text-danger">{errorMessages.Id}</div>
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
                  Marca
                </span>
                <input
                  type="text"
                  value={values.Marca}
                  onChange={(event) => {
                    setValues({ ...values, Marca: event.target.value });
                  }}
                  onBlur={() => {
                    validateField("Marca");
                  }}
                  className="form-control"
                  aria-label="marca"
                  aria-describedby="basic-addon1"
                />
                {errorMessages.Marca && (
                  <div className="text-danger">{errorMessages.Marca}</div>
                )}
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Cantidad
                </span>
                <input
                  type="text"
                  value={values.Cantidad}
                  onChange={(event) => {
                    setValues({ ...values, Cantidad: event.target.value });
                  }}
                  onBlur={() => {
                    validateField("Cantidad");
                  }}
                  className="form-control"
                  aria-label="cantidad"
                  aria-describedby="basic-addon1"
                />
                {errorMessages.Cantidad && (
                  <div className="text-danger">{errorMessages.Cantidad}</div>
                )}
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Costo
                </span>
                <input
                  type="text"
                  value={values.Costo}
                  onChange={(event) => {
                    setValues({ ...values, Costo: event.target.value });
                  }}
                  onBlur={() => {
                    validateField("Costo");
                  }}
                  className="form-control"
                  aria-label="costo"
                  aria-describedby="basic-addon1"
                />
                {errorMessages.Costo && (
                  <div className="text-danger">{errorMessages.Costo}</div>
                )}
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Estado
                </span>
                <input
                  type="text"
                  value={values.Estado}
                  onChange={(event) => {
                    setValues({ ...values, Estado: event.target.value });
                  }}
                  onBlur={() => {
                    validateField("Estado");
                  }}
                  className="form-control"
                  aria-label="estado"
                  aria-describedby="basic-addon1"
                />
                {errorMessages.Estado && (
                  <div className="text-danger">{errorMessages.Estado}</div>
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
                  onBlur={() => {
                    validateField("Descripcion");
                  }}
                  className="form-control"
                  aria-label="descripcion"
                  aria-describedby="basic-addon1"
                />
                {errorMessages.Descripcion && (
                  <div className="text-danger">{errorMessages.Descripcion}</div>
                )}
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Observación
                </span>
                <input
                  type="text"
                  value={values.Observacion}
                  onChange={(event) => {
                    setValues({ ...values, Observacion: event.target.value });
                  }}
                  onBlur={() => {
                    validateField("Observacion");
                  }}
                  className="form-control"
                  aria-label="observacion"
                  aria-describedby="basic-addon1"
                />
                {errorMessages.Observacion && (
                  <div className="text-danger">{errorMessages.Observacion}</div>
                )}
              </div>
              <div className="input-group mb-3">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelectHabitacion"
                >
                  Habitación
                </label>
                <select
                  className="form-select"
                  id="inputGroupSelectHabitacion"
                  value={values.Habitacion}
                  onChange={(event) => {
                    setValues({ ...values, Habitacion: event.target.value });
                  }}
                  onBlur={() => {
                    validateField("Habitacion");
                  }}
                >
                  <option value="" disabled>
                    Selecciona una habitación
                  </option>
                  {HabitacionesList.map((habitacion) => (
                    <option key={habitacion.id} value={habitacion.id}>
                      {habitacion.id}
                    </option>
                  ))}
                </select>
                {errorMessages.Habitacion && (
                  <div className="text-danger">{errorMessages.Habitacion}</div>
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
export default ComponentesForm;
