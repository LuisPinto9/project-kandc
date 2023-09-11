import React, { useState } from "react";
import { add } from "../controllers/ZonasControllers";
import "../css/modal.css";
import Swal from "sweetalert2";

const PostZonasModal = ({ getZonas }) => {
  const [Id, setId] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Precio, setPrecio] = useState("");
  const [Acceso, setAcceso] = useState("");
  const [setFormularioVisible] = useState(true);

  const limpiarCampos = () => {
    setId("");
    setNombre("");
    setDescripcion("");
    setPrecio("");
    setAcceso("");
  };
  const validateField = (fieldName) => {
    switch (fieldName) {
      case "Id":
        const idPattern = /^\d+$/;
        if (!idPattern.test(Id) || parseInt(Id, 10) === 0) {
          setErrorMessages({
            ...errorMessages,
            Id: "El campo Id debe contener solo números y no ser igual a cero.",
          });
        } else {
          setErrorMessages({ ...errorMessages, Id: "" });
        }
        break;
      case "Nombre":
        const nombrePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/u;
        if (!nombrePattern.test(Nombre) || Nombre.trim().length < 1) {
          setErrorMessages({
            ...errorMessages,
            Nombre:
              "El campo Nombre debe contener solo letras y no puede estar vacío.",
          });
        } else {
          setErrorMessages({ ...errorMessages, Nombre: "" });
        }
        break;
      case "Precio":
        const precioPattern = /^\d+$/;
        if (!precioPattern.test(Precio) || parseInt(Precio, 10) <= 0) {
          setErrorMessages({
            ...errorMessages,
            Precio:
              "El campo Precio debe contener solo números y ser mayor que cero.",
          });
        } else {
          setErrorMessages({ ...errorMessages, Precio: "" });
        }
        break;
      case "Acceso":
        const accesoPattern = /^[A-Za-z\s]+$/;
        if (!accesoPattern.test(Acceso) || Acceso.trim().length < 1) {
          setErrorMessages({
            ...errorMessages,
            Acceso:
              "El campo Acceso debe contener solo letras y no puede estar vacío.",
          });
        } else {
          setErrorMessages({ ...errorMessages, Acceso: "" });
        }
        break;
      default:
        break;
    }
  };
  const AddPost = async () => {
    validateFields();
    const hasErrors = Object.values(errorMessages).some(
      (message) => message !== ""
    );

    if (!hasErrors) {
      if (
        Id === "" ||
        Nombre === "" ||
        Descripcion === "" ||
        Precio === "" ||
        Acceso === ""
      ) {
        mostrarMensajeError();
      } else {
        await add({
          Id,
          Nombre,
          Descripcion,
          Precio,
          Acceso,
        });

        getZonas();
        limpiarCampos();

        setFormularioVisible(false);
      }
    } else {
      mostrarMensajeError();
    }
  };

  const validateFields = () => {
    validateField("Id");
    validateField("Nombre");
    validateField("Precio");
    validateField("Acceso");
  };
  const [errorMessages, setErrorMessages] = useState({
    Id: "",
    Nombre: "",
    Precio: "",
    Acceso: "",
  });
  const mostrarMensajeError = () => {
    Swal.fire({
      title: "Campos inválidos",
      text: "Uno o más campos contienen datos inválidos. Por favor, corrige los errores.",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
    });
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
                Registrar Zona Nueva
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
                  value={Nombre}
                  onChange={(event) => {
                    setNombre(event.target.value);
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
                  Precio
                </span>
                <input
                  type="text"
                  value={Precio}
                  onChange={(event) => {
                    setPrecio(event.target.value);
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
                  Tipo de acceso
                </span>
                <input
                  type="text"
                  value={Acceso}
                  onChange={(event) => {
                    setAcceso(event.target.value);
                  }}
                  onBlur={() => {
                    validateField("Acceso");
                  }}
                  className="form-control"
                  aria-label="acceso"
                  aria-describedby="basic-addon1"
                />
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
                //data-bs-dismiss="modal"
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

export default PostZonasModal;
