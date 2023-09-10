import React, { useState } from "react";
import { add } from "../controllers/HabitacionControllers";
import "../css/modal.css";

import Swal from "sweetalert2";

const PostHabitacionesModal = ({ getHabitaciones }) => {
  const [Id, setId] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Estado, setEstado] = useState("");
  const [Precio, setPrecio] = useState("");
  const [Zona, setZona] = useState("");
  
  const [formularioVisible, setFormularioVisible] = useState(true);
  
    
  const limpiarCampos = () => {
    setId("");
    setNombre("");
    setEstado("");
    setPrecio("");
    setZona("");
    setErrorMessages({
      Id: "",
      Nombre: "",
      Estado: "",
      Precio: "",
      Zona: "",
    });
  };
  const [errorMessages, setErrorMessages] = useState({
    Id: "",
    Nombre: "",
    // Agrega más campos aquí
  });
  const validateField = (fieldName) => {
    switch (fieldName) {
      case "Id":
        const idPattern = /^\d+$/;
        if (!idPattern.test(Id) || parseInt(Id, 10) === 0) {
          setErrorMessages({ ...errorMessages, Id: "El campo Id debe contener solo números y no ser igual a cero." });
        } else {
          setErrorMessages({ ...errorMessages, Id: "" });
        }
        break;
      case "Nombre":
        const nombrePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/u;
        if (!nombrePattern.test(Nombre) || Nombre.trim().length < 1) {
          setErrorMessages({ ...errorMessages, Nombre: "El campo Nombre debe contener solo letras y no puede estar vacío." });
        } else {
          setErrorMessages({ ...errorMessages, Nombre: "" });
        }
        break;
      case "Estado":
        const estadoPattern = /^[A-Za-z\s]+$/;
        if (!estadoPattern.test(Estado) || Estado.trim().length < 1) {
          setErrorMessages({ ...errorMessages, Estado: "El campo Estado debe contener solo letras y no puede estar vacío." });
        } else {
          setErrorMessages({ ...errorMessages, Estado: "" });
        }
        break;
      case "Precio":
        const precioPattern = /^\d+$/;
        if (!precioPattern.test(Precio) || parseInt(Precio, 10) <= 0) {
          setErrorMessages({ ...errorMessages, Precio: "El campo Precio debe contener solo números y ser mayor que cero." });
        } else {
          setErrorMessages({ ...errorMessages, Precio: "" });
        }
        break;
      case "Zona":
        const zonaPattern = /^\d+$/;
        if (!zonaPattern.test(Zona) || Zona.trim().length < 1) {
          setErrorMessages({ ...errorMessages, Zona: "El campo Zona debe contener numeros" });
        } else {
          setErrorMessages({ ...errorMessages, Zona: "" });
        }
        break;
      default:
        break;
    }
  };
  const AddPost = () => {
    validateFields();
    const hasErrors = Object.values(errorMessages).some((message) => message !== "");


    if (!hasErrors) {
      add({
        Id,
        Nombre,
        Estado,
        Precio,
        Zona,
      });

      getHabitaciones();
      limpiarCampos();
      setFormularioVisible(false);
    } else {
      mostrarMensajeError();
     }
  };

  const validateFields = () => {
    validateField("Id");
    validateField("Nombre");
    validateField("Estado");
    validateField("Precio");
    validateField("Zona");
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
      Estado
    </span>
    <input
      type="text"
      value={Estado}
      onChange={(event) => {
        setEstado(event.target.value);
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
      Zona
    </span>
    <input
      type="text"
      value={Zona}
      onChange={(event) => {
        setZona(event.target.value);
      }}
      onBlur={() => {
        validateField("Zona");
      }}
      className="form-control"
      aria-label="Zona"
      aria-describedby="basic-addon1"
    />
    {errorMessages.Zona && (
      <div className="text-danger">{errorMessages.Zona}</div>
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

export default PostHabitacionesModal;
