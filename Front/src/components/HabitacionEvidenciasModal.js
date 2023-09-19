import React, { useState, useEffect } from "react";
import { add, update } from "../controllers/HabitacionEvidenciaController";
import "../css/modal.css";
import Swal from "sweetalert2";

const HabitacionEvidenciaForm = ({ modoEdicion, evidenciaHabitacionSeleccionada, getHabitacionesEvidencias }) => {
    const initialState = {
        Id2: "",
        Nombre2: "",
        Descripcion: "",
        Url: "",
        Habitacion: "",
    };

    const [values, setValues] = useState(initialState);
    const [errorMessages, setErrorMessages] = useState({ ...initialState });

    useEffect(() => {
        if (modoEdicion && evidenciaHabitacionSeleccionada) {
            setValues(evidenciaHabitacionSeleccionada);
        } else {
            setValues(initialState);
        }
    }, [modoEdicion, evidenciaHabitacionSeleccionada]);

    const validateField = (fieldName) => {
        const value = values[fieldName];
        const updatedErrorMessages = { ...errorMessages };

        switch (fieldName) {
            case "Id":
                // Validación para el campo Id (similar a la de HabitacionesForm)
                break;

            case "Nombre":
                // Validación para el campo Nombre (similar a la de HabitacionesForm)
                break;

            case "Descripcion":
                // Validación para el campo Descripcion (similar a la de HabitacionesForm)
                break;

            case "Url":
                // Validación para el campo Url (similar a la de HabitacionesForm)
                break;

            case "Habitacion":
                // Validación para el campo Habitacion (similar a la de HabitacionesForm)
                break;

            default:
                break;
        }

        setErrorMessages(updatedErrorMessages);
    };

    const validateFields = () => {
        validateField("Id");
        validateField("Nombre");
        validateField("Descripcion");
        validateField("Url");
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
            if (
                values.Id2 === "" ||
                values.Nombre2 === "" ||
                values.Descripcion === "" ||
                values.Url === "" ||
                values.Habitacion === ""
            ) {
                mostrarMensajeError();
            } else {
                if (modoEdicion) {
                    await update(values);
                } else {
                    await add(values);
                    //console.log("entro a agregar evidencia nombre");
                    // console.log("entro a agregar evidencia nombre",values.Nombre2);
                    //console.log("entro a agregar evidencia descripcion",values.Descripcion);
                    //console.log("entro a agregar evidencia id",values.Id2);
                }
                //getHabitacionEvidencias();
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

    //para imagen
    /*     const [url, setUrl] = useState(""); // Agregar estado para la URL de la imagen
    
        // Manejar la carga de archivos
        const handleFileChange = (e) => {
            const file = e.target.files[0]; // Obtener el archivo seleccionado
            const reader = new FileReader();
    
            reader.onload = (event) => {
                // Cuando se carga el archivo, obtener la URL de la imagen
                setUrl(event.target.result);
            };
    
            if (file) {
                reader.readAsDataURL(file); // Leer el archivo como una URL de datos
            }
        }; */

    return (
        <div>
            <div
                className="modal fade"
                id={modoEdicion ? "staticBackdrop-put-evidencia" : "staticBackdrop-post-evidencia"}
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
                                {modoEdicion ? "Actualizar evidencia de habitación" : "Agregar evidencia de habitación"}
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
                                    value={values.Id2}
                                    onChange={(event) => {
                                        setValues({ ...values, Id2: event.target.value });
                                    }}
                                    onBlur={() => {
                                        validateField("Id");
                                    }}
                                    className="form-control"
                                    aria-label="id"
                                    aria-describedby="basic-addon1"
                                />
                                {errorMessages.Id2 && (
                                    <div className="text-danger">{errorMessages.Id2}</div>
                                )}
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text">Nombre</span>
                                <input
                                    type="text"
                                    value={values.Nombre2}
                                    onChange={(event) => {
                                        setValues({ ...values, Nombre2: event.target.value });
                                    }}
                                    onBlur={() => {
                                        validateField("Nombre");
                                    }}
                                    className="form-control"
                                    aria-label="nombre"
                                    aria-describedby="basic-addon1"
                                />
                                {errorMessages.Nombre2 && (
                                    <div className="text-danger">{errorMessages.Nombre2}</div>
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
                                    URL
                                </span>
                                <input
                                    type="text"
                                    value={values.Url}
                                    onChange={(event) => {
                                        setValues({ ...values, Url: event.target.value });
                                    }}
                                    onBlur={() => {
                                        validateField("Url");
                                    }}
                                    className="form-control"
                                    aria-label="url"
                                    aria-describedby="basic-addon1"
                                />
                                {errorMessages.Url && (
                                    <div className="text-danger">{errorMessages.Url}</div>
                                )}
                            </div> 
                        


                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    Habitación
                                </span>
                                <input
                                    type="text"
                                    value={values.Habitacion}
                                    onChange={(event) => {
                                        setValues({ ...values, Habitacion: event.target.value });
                                    }}
                                    onBlur={() => {
                                        validateField("Habitacion");
                                    }}
                                    className="form-control"
                                    aria-label="url"
                                    aria-describedby="basic-addon1"
                                />
                                {errorMessages.Habitacion && (
                                    <div className="text-danger">{errorMessages.Habitacion}</div>
                                )}
                            </div>

                            {/*
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
                                    {HabitacionesList.map((Habitacion) => (
                                        <option key={Habitacion.id} value={Habitacion.id}>
                                            {Habitacion.nombre}
                                        </option>
                                    ))}
                                </select>
                                {errorMessages.Habitacion && (
                                    <div className="text-danger">{errorMessages.Habitacion}</div>
                                )}
                            </div>

                     */}




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

export default HabitacionEvidenciaForm;