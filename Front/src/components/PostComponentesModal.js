import React, { useState } from "react";
import { add } from "../controllers/ComponentesControllers";
import "../css/modal.css";
import Swal from "sweetalert2";

const PostComponentesModal = ({ getComponentes, HabitacionesList }) => {
  /* const PostComponentesModal = ({ getComponentes }) => { */
  const [Id, setId] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Marca, setMarca] = useState("");
  const [Cantidad, setCantidad] = useState("");
  const [Costo, setCosto] = useState("");
  const [Estado, setEstado] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Observacion, setObservacion] = useState("");
  const [Habitacion, setHabitacion] = useState("");

  const [formularioVisible, setFormularioVisible] = useState(true);




  const limpiarCampos = () => {
    setId("");
    setNombre("");
    setMarca("");
    setCantidad("");
    setCosto("");
    setEstado("");
    setDescripcion("");
    setObservacion("");
    setHabitacion("");
    setErrorMessages({
      Id: "",
      Nombre: "",
      Marca: "",
      Cantidad: "",
      Costo: "",
      Estado: "",
      Descripcion: "",
      Observacion: "",
      Habitacion: "",
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
        const idPattern = /^[0-9]+$/;
        if (!idPattern.test(Id) || parseInt(Id, 10) < 0 || parseInt(Id, 10) > 200) {
          setErrorMessages({ ...errorMessages, Id: "El campo ID debe contener solo números y no ser igual a cero." });
        } else {
          setErrorMessages({ ...errorMessages, Id: "" });
        }
        break;

      case "Nombre":
        const nombrePattern = /^[A-Za-z\sÁÉÍÓÚáéíóúÑñ]+$/u;
        if (!nombrePattern.test(Nombre)) {
          setErrorMessages({ ...errorMessages, Nombre: "Este campo debe contener solo letras y tener al menos 3 caracteres." });
        } else {
          setErrorMessages({ ...errorMessages, Nombre: "" });
        }
        break;

      case "Marca":
        const marcaPattern = /^[A-Za-z]+$/;
        if (!marcaPattern.test(Marca)) {
          setErrorMessages({
             ...errorMessages,
              Marca:
               "Este campo debe contener solo letras y tener al menos 3 caracteres."
               });
        } else {
          setErrorMessages({ ...errorMessages, Marca: "" });
        }
        break;

      case "Cantidad":
        const cantidadPattern = /^[0-9]+$/;
        const cantidadValue = parseInt(Cantidad, 10);
        if (!cantidadPattern.test(Cantidad) || cantidadValue < 1 || cantidadValue > 20) {
          setErrorMessages({
            ...errorMessages,
            Cantidad: "Este campo debe contener solo números y estar en el rango de 1 a 20.",
          });
        } else {
          setErrorMessages({ ...errorMessages, Cantidad: "" });
        }
        break;

      case "Costo":
        const costoPattern = /^[0-9]+(\.[0-9]+)?$/;
        const costoValue = parseFloat(Costo.replace(",", ".")); // Reemplaza comas por puntos y convierte a número decimal
        if (!costoPattern.test(Costo) || costoValue < 100 || costoValue > 20000000) {
          setErrorMessages({
            ...errorMessages,
            Costo: "Este campo debe contener solo números y estar en el rango de 100 a 20,000,000.",
          });
        } else {
          setErrorMessages({ ...errorMessages, Costo: "" });
        }
        break;

      case "Estado":
        const estadoPattern = /^[A-Za-z]+$/;
        if (!estadoPattern.test(Estado)) {
          setErrorMessages({ ...errorMessages, Estado: "Este campo debe contener solo letras y tener al menos 3 caracteres." });
        } else {
          setErrorMessages({ ...errorMessages, Estado: "" });
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
        const habitacionValue = parseInt(Habitacion, 10);
        if (!habitacionPattern.test(Habitacion) || habitacionValue < 1 || habitacionValue > 50) {
          setErrorMessages({
            ...errorMessages,
            Habitacion: "Este campo debe contener solo números y estar en el rango de 1 a 50, recuerde que la habitacion debe existir",
          });
        } else {
          setErrorMessages({ ...errorMessages, Habitacion: "" });
        }
        break;

      default:
        break;
    }
  };

  const validateFields = () => {
    validateField("Id");
    validateField("Nombre");
    validateField("Marca");
    validateField("Cantidad");
    validateField("Costo");
    validateField("Estado");
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


  const AddPost = () => {

    validateFields(); // Validar campos antes de agregar

    // Verificar si hay algún mensaje de error en los campos
    const hasErrors = Object.values(errorMessages).some((message) => message !== "");


    if (!hasErrors) {

      if (Id === "" ||
        Nombre === "" ||
        Marca === "" ||
        Cantidad === "" ||
        Costo === "" ||
        Estado === "" ||
        Descripcion === "" ||
        Observacion === "" ||
        Habitacion === ""
      ) {
        mostrarMensajeError();
      } else {
        add({
          Id,
          Nombre,
          Marca,
          Cantidad,
          Costo,
          Estado,
          Descripcion,
          Observacion,
          Habitacion,
        });
        getComponentes();
        limpiarCampos();
        setFormularioVisible(false);
      }

    } else {
      mostrarMensajeError();
    }
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
                Registrar Componente Nuevo
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
                  Marca
                </span>
                <input
                  type="text"
                  value={Marca}
                  onChange={(event) => {
                    setMarca(event.target.value);
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
                  value={Cantidad}
                  onChange={(event) => {
                    setCantidad(event.target.value);
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
                  value={Costo}
                  onChange={(event) => {
                    setCosto(event.target.value);
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
                  Descripción
                </span>
                <input
                  type="text"
                  value={Descripcion}
                  onChange={(event) => {
                    setDescripcion(event.target.value);
                  }}
                  onBlur={() => {
                    validateField("Descripcion");
                  }}
                  className="form-control"
                  aria-label="descripcion"
                  aria-describedby="basic-addon1"
                />

              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Observación
                </span>
                <input
                  type="text"
                  value={Observacion}
                  onChange={(event) => {
                    setObservacion(event.target.value);
                  }}
                  onBlur={() => {
                    validateField("Observacion");
                  }}
                  className="form-control"
                  aria-label="observacion"
                  aria-describedby="basic-addon1"
                />
              </div>
              {/* 
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Habitación
                </span>
                <input
                  type="text"
                  value={Habitacion}
                  onChange={(event) => {
                    setHabitacion(event.target.value);
                  }}
                  onBlur={() => {
                    validateField("Habitacion");
                  }}
                  className="form-control"
                  aria-label="habitacion"
                  aria-describedby="basic-addon1"
                />
                {errorMessages.Habitacion && (
                  <div className="text-danger">{errorMessages.Habitacion}</div>
                )}
              </div>
 */}
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelectHabitacion">
                  Habitación
                </label>
                <select
                  className="form-select"
                  id="inputGroupSelectHabitacion"
                  value={Habitacion}
                  onChange={(event) => {
                    setHabitacion(event.target.value);
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
export default PostComponentesModal;