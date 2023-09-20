import React, { useState, useEffect } from "react";
import { add, update } from "../controllers/ComponenteEvidenciaController"
import "../css/modal.css";
import Swal from "sweetalert2";

const ComponenteEvidenciaForm = ({ modoEdicion, evidenciaComponentesSeleccionada, getComponentesEvidencias }) => {

    const initialState = {
        Id2: "",
        Nombre2: "",
        Descripcion2: "",
        Url: "",
        Componente: "",
    };

    const [values, setValues] = useState(initialState);
    const [errorMessages, setErrorMessages] = useState({ ...initialState });

    useEffect(() => {
        if (modoEdicion) {
            setValues(evidenciaComponentesSeleccionada);
        } else {
            setValues(initialState);
        }
        // eslint-disable-next-line
    }, [modoEdicion, evidenciaComponentesSeleccionada]);

    const validateField = (fieldName) => {
        // const value = values[fieldName];
        const updatedErrorMessages = { ...errorMessages };

        switch (fieldName) {
            case "Id2":
                // Validación para el campo Id (similar a la de HabitacionesForm)
                break;

            case "Nombre2":
                // Validación para el campo Nombre (similar a la de HabitacionesForm)
                break;
            case "Descripcion2":
                // Validación para el campo Descripcion (similar a la de HabitacionesForm)
                break;

            case "Url":
                // Validación para el campo Url (similar a la de HabitacionesForm)
                break;

            case "Componente":
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
        validateField("Componente");
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
                values.Id2 === ""
                /* values.Nombre2 === "" ||
                values.Descripcion2 === "" ||
                values.Url === "" ||
                values.Componente === "" */
            ) {
                mostrarMensajeError();
            } else {
                if (modoEdicion) {
                    await update(values);
                } else {
                   // guardarImagen(values.Url, `${values.Id2}.png`);
                    await add(values);
                    console.log("entro a agregar evidencia nombre");
                    // console.log("entro a agregar evidencia nombre",values.Nombre2);
                    //console.log("entro a agregar evidencia descripcion",values.Descripcion2);
                    //console.log("entro a agregar evidencia id",values.Id2);
                }
                getComponentesEvidencias();
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




    // Función para guardar la imagen en la carpeta del proyecto
    const guardarImagen = (id2, formData) => {
        // Verifica si hay una imagen seleccionada
        if (formData.get("file")) {
          // Aquí debes implementar la lógica para guardar la imagen en la carpeta del proyecto
          // Puedes usar las API de JavaScript para trabajar con archivos o una biblioteca como 'axios' si es necesario enviarla al servidor
          // Ejemplo:
          // Reemplaza la URL de la carpeta con la ruta correcta de tu proyecto
          fetch(`./images/carpetaHabitaciones/${id2}.png`, {
            method: "POST", // Puedes usar 'PUT' o 'POST' según tus necesidades
            body: formData,
          })
            .then((response) => {
              if (response.ok) {
                console.log("Imagen guardada con éxito");
              } else {
                console.error("Error al guardar la imagen");
              }
            })
            .catch((error) => {
              console.error("Error al guardar la imagen:", error);
            });
        }
      };
    
      // Función para manejar la selección de la imagen
      const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          // Genera la URL basada en el ID2 y el nombre de la imagen
          const imageUrl = `./images/carpetaHabitaciones/${values.Id2}.png`;
    
          // Actualiza 'values.ImageUrl' con la URL generada
          setValues({ ...values, ImageUrl: imageUrl });
    
          // Crea un objeto FormData y adjunta el archivo
          const formData = new FormData();
          formData.append("file", file);
    
          // Llama a la función para guardar la imagen en la carpeta del proyecto
          guardarImagen(values.Id2, formData);
        }
      };
    /*  */

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
                                        validateField("Id2");
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
                                        validateField("Nombre2");
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
                                    value={values.Descripcion2}
                                    onChange={(event) => {
                                        setValues({ ...values, Descripcion2: event.target.value });
                                    }}
                                    onBlur={() => {
                                        validateField("Descripcion");
                                    }}
                                    className="form-control"
                                    aria-label="descripcion2"
                                    aria-describedby="basic-addon1"
                                />
                                {errorMessages.Descripcion2 && (
                                    <div className="text-danger">{errorMessages.Descripcion2}</div>
                                )}
                            </div>


                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    URL
                                </span>
                                <input
                                    type="file" // Cambiar a tipo 'file' para permitir la selección de archivos
                                    onChange={handleImageChange}
                                    className="form-control"
                                    aria-label="url"
                                    aria-describedby="basic-addon1"
                                />

                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    Habitación
                                </span>
                                <input
                                    type="text"
                                    value={values.Componente}
                                    onChange={(event) => {
                                        setValues({ ...values, Componente: event.target.value });
                                    }}
                                    onBlur={() => {
                                        validateField("Componente");
                                    }}
                                    className="form-control"
                                    aria-label="url"
                                    aria-describedby="basic-addon1"
                                />
                                {errorMessages.Componente && (
                                    <div className="text-danger">{errorMessages.Componente}</div>
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

export default ComponenteEvidenciaForm;