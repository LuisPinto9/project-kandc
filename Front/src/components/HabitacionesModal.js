import React, { useState, useEffect } from "react";
import { add, update } from "../controllers/HabitacionControllers";
import "../css/modal.css";
import Swal from "sweetalert2"


const HabitacionesForm = ({ modoEdicion, habitacion, getHabitaciones, ZonasList, UsuarioList }) => {
    const initialState = {
        Id: "",
        Nombre: "",
        Estado: "",
        Precio: "",
        Zona: "",
        IdUsuarios: "",
    };

    const [values, setValues] = useState(initialState);
    const [errorMessages, setErrorMessages] = useState({ ...initialState });

    useEffect(() => {
        if (modoEdicion && habitacion) {
            setValues(habitacion);
            console.log("Valor actual de IdUsuarios:", habitacion.IdUsuarios);
        } else {
            setValues(initialState);
        }
    }, [modoEdicion, habitacion]);

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

            case "Estado":
                const estadoPattern = /^[A-Za-z]+$/;
                if (!estadoPattern.test(value) || value.length < 3) {
                    updatedErrorMessages[fieldName] =
                        "El campo Estado debe contener solo letras y tener al menos 3 caracteres.";
                } else {
                    updatedErrorMessages[fieldName] = "";
                }
                break;

            case "Precio":
                const precioPattern = /^\d+(\.\d{1,2})?$/;
                if (!precioPattern.test(value) || parseInt(value) <= 0) {
                    updatedErrorMessages[fieldName] =
                        "El campo Precio debe ser un número mayor que cero y puede contener hasta dos decimales.";
                } else {
                    updatedErrorMessages[fieldName] = "";
                }
                break;

            case "Zona":
                // Validación para el campo Zona de la habitación
                break;

            case "IdUsuarios":
                // Validación para el campo IdUsuarios de la habitación
                break;

            default:
                break;
        }

        setErrorMessages(updatedErrorMessages);
    };



    const validateFields = () => {
        validateField("Id");
        validateField("Nombre");
        validateField("Estado");
        validateField("Precio");
        validateField("Zona");
        validateField("IdUsuarios");
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
                values.Estado === "" ||
                values.Precio === "" ||
                values.Zona === "" ||
                values.IdUsuarios === ""
            ) {
                mostrarMensajeError();
            } else {
                if (modoEdicion) {
                    await update(values);
                } else {
                    await add(values);
                }
                getHabitaciones();
                limpiarCampos();
            }
        } else {
            mostrarMensajeError();
        }
    };

    const limpiarCampos = () => {
        setValues(initialState);
        setErrorMessages({ ...initialState });
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
                                {modoEdicion ? "Actualizar habitacion" : "Agregar habitacion"}
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
                                <label
                                    className="input-group-text"
                                    htmlFor="inputGroupSelectZona"
                                >
                                    Zona
                                </label>
                                <select
                                    className="form-select"
                                    id="inputGroupSelectZona"
                                    value={values.Zona}
                                    onChange={(event) => {
                                        setValues({ ...values, Zona: event.target.value });
                                    }}
                                    onBlur={() => {
                                        validateField("Zona");
                                    }}
                                >
                                    <option value="" disabled>
                                        Selecciona una zona
                                    </option>
                                    {ZonasList.map((Zona) => (
                                        <option key={Zona.id} value={Zona.id}>
                                            {Zona.id}
                                        </option>
                                    ))}
                                </select>
                                {errorMessages.Zona && (
                                    <div className="text-danger">{errorMessages.Zona}</div>
                                )}
                            </div>

                            <div className="input-group mb-3">
                                <label
                                    className="input-group-text"
                                    htmlFor="inputGroupSelectZona"
                                >
                                    Usuario
                                </label>
                                <select
                                    className="form-select"
                                    id="inputGroupSelectUsuario"
                                    value={values.IdUsuarios}
                                    onChange={(event) => {
                                        setValues({ ...values, IdUsuarios: event.target.value });
                                    }}
                                    onBlur={() => {
                                        validateField("IdUsuarios");
                                    }}
                                >
                                    <option value="" disabled>
                                        Selecciona un usuario
                                    </option>
                                    {UsuarioList.map((IdUsuarios) => (
                                        <option key={IdUsuarios.id} value={IdUsuarios.id}>
                                            {IdUsuarios.id}
                                        </option>
                                    ))}
                                </select>
                                {errorMessages.IdUsuarios && (
                                    <div className="text-danger">{errorMessages.IdUsuarios}</div>
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
                                data-bs-dismiss="modal"
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
export default HabitacionesForm;
