import React, { useState } from "react";
import { add } from "../controllers/UserControllers";
import "../css/modal.css";

import Swal from "sweetalert2";

const FormRegistroPost = ({ getArrendatarios }) => {
  const [IDUsuario, setIDUsuario] = useState("");
  const [Nombre, setNombre] = useState("");
  const [MetodoRenta, setMetodoRenta] = useState("");
  const [ExtensionDias, setExtensionDias] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [NombreUsuario, setNombreUsuario] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const [Correo, setCorreo] = useState("");
  const [TipoUsuario, setTipoUsuario] = useState("");

  const limpiarCampos = () => {
    setIDUsuario("");
    setNombre("");
    setMetodoRenta("");
    setExtensionDias("");
    setTelefono("");
    setNombreUsuario("");
    setContraseña("");
    setCorreo("");
    setTipoUsuario("");
    setErrorMessages({
      IDUsuario: "",
      Nombre: "",
      MetodoRenta: "",
      ExtensionDias: "",
      Telefono: "",
      NombreUsuario: "",
      Contraseña: "",
      Correo: "",
      TipoUsuario: "",
    });
  };

  const [errorMessages, setErrorMessages] = useState({
    IDUsuario: "",
    Nombre: "",
    // Agrega más campos aquí
  });
  /* 
    const validateFields = () => {
      const idPattern = /^\d+$/;
      //const nombrePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
      //const nombrePattern = /^([A-Za-zÁÉÍÓÚáéíóúÑñ\s]+ ?)+$/;
      const nombrePattern = /^[\p{L}ÁÉÍÓÚáéíóúÑñ\s]+$/u;
  
      const metodoRentaPattern = /^[A-Za-z]+$/; // Solo letras sin espacios
      const extensionDiasPattern = /^\d+$/;
      const telefonoPattern = /^\d{10}$/; // 10 dígitos
      const nombreUsuarioPattern = /^[A-Za-z0-9]+$/; // Letras y números sin caracteres especiales
      const correoPattern = /^[A-Za-z0-9._%+-]+@gmail\.com$/; // Correo debe terminar en @gmail.com
      const tipoUsuarioPattern = /^(arrendatario|administrador)$/; // Solo 'arrendatario' o 'administrador'
  
      // Contraseña debe cumplir con los requisitos
      const contraseñaPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  
  
      let isValid = true;
      const newErrorMessages = {
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
    
  
      
      if (!idPattern.test(IDUsuario) || parseInt(IDUsuario, 10) === 0) {
        newErrorMessages.IDUsuario =
          "El campo IDUsuario debe contener solo números y no ser igual a cero.";
        isValid = false;
      }
  
      if (!nombrePattern.test(Nombre) || Nombre.length < 3) {
        newErrorMessages.Nombre =
          "El campo Nombre debe contener solo letras y tener al menos 3 caracteres.";
        isValid = false;
      }
  
      if (!metodoRentaPattern.test(MetodoRenta)) {
        newErrorMessages.MetodoRenta =
          "El campo Método de Renta debe contener solo letras sin espacios.";
        isValid = false;
      }
  
      if (!extensionDiasPattern.test(ExtensionDias)) {
        newErrorMessages.ExtensionDias =
          "El campo Extensión de Días debe contener solo números.";
        isValid = false;
      }
  
      if (!telefonoPattern.test(Telefono)) {
        newErrorMessages.Telefono =
          "El campo Teléfono debe contener exactamente 10 dígitos.";
        isValid = false;
      }
  
      if (!nombreUsuarioPattern.test(NombreUsuario)) {
        newErrorMessages.NombreUsuario =
          "El campo Nombre de Usuario debe contener solo letras y números sin caracteres especiales.";
        isValid = false;
      }
  
      if (!correoPattern.test(Correo)) {
        newErrorMessages.Correo =
          "El campo Correo debe ser una dirección de correo electrónico válida que termine en @gmail.com.";
        isValid = false;
      }
  
      if (!tipoUsuarioPattern.test(TipoUsuario.toLowerCase())) { 
        newErrorMessages.TipoUsuario =
          "El campo Tipo de Usuario debe ser 'arrendatario' o 'administrador'.";
        isValid = false;
      }
  
      if (!contraseñaPattern.test(Contraseña)) {
        newErrorMessages.Contraseña =
          "debe tener: 8 caracteres, 2 numeros, almenos una letra minuscula y mayuscula y un caracter especial";
        isValid = false;
      }
  
      setErrorMessages(newErrorMessages);
      return isValid;
    };
   */

  const validateField = (fieldName) => {
    switch (fieldName) {
      case "IDUsuario":
        const idPattern = /^\d+$/;
        if (!idPattern.test(IDUsuario) || parseInt(IDUsuario, 10) === 0) {
          setErrorMessages({
            ...errorMessages,
            IDUsuario:
              "El campo IDUsuario debe contener solo números y no ser igual a cero.",
          });
        } else {
          setErrorMessages({ ...errorMessages, IDUsuario: "" });
        }
        break;

      case "Nombre":
        const nombrePattern = /^[\p{L}ÁÉÍÓÚáéíóúÑñ\s]+$/u;
        if (!nombrePattern.test(Nombre) || Nombre.length < 3) {
          setErrorMessages({
            ...errorMessages,
            Nombre:
              "El campo Nombre debe contener solo letras y tener al menos 3 caracteres.",
          });
        } else {
          setErrorMessages({ ...errorMessages, Nombre: "" });
        }
        break;

      case "MetodoRenta":
        const metodoRentaPattern = /^[A-Za-z]+$/;
        if (!metodoRentaPattern.test(MetodoRenta)) {
          setErrorMessages({
            ...errorMessages,
            MetodoRenta:
              "El campo Método de Renta debe contener solo letras sin espacios.",
          });
        } else {
          setErrorMessages({ ...errorMessages, MetodoRenta: "" });
        }
        break;

      case "ExtensionDias":
        const extensionDiasPattern = /^\d+$/;
        if (!extensionDiasPattern.test(ExtensionDias)) {
          setErrorMessages({
            ...errorMessages,
            ExtensionDias:
              "El campo Extensión de Días debe contener solo números.",
          });
        } else {
          setErrorMessages({ ...errorMessages, ExtensionDias: "" });
        }
        break;

      case "Telefono":
        const telefonoPattern = /^\d{10}$/;
        if (!telefonoPattern.test(Telefono)) {
          setErrorMessages({
            ...errorMessages,
            Telefono: "El campo Teléfono debe contener exactamente 10 dígitos.",
          });
        } else {
          setErrorMessages({ ...errorMessages, Telefono: "" });
        }
        break;

      case "NombreUsuario":
        const nombreUsuarioPattern = /^[A-Za-z0-9]+$/;
        if (!nombreUsuarioPattern.test(NombreUsuario)) {
          setErrorMessages({
            ...errorMessages,
            NombreUsuario:
              "El campo Nombre de Usuario debe contener solo letras y números sin caracteres especiales.",
          });
        } else {
          setErrorMessages({ ...errorMessages, NombreUsuario: "" });
        }
        break;

      case "Contraseña":
        // Contraseña debe cumplir con los requisitos
        const contraseñaPattern =
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!contraseñaPattern.test(Contraseña)) {
          setErrorMessages({
            ...errorMessages,
            Contraseña:
              "La contraseña debe cumplir con los requisitos de seguridad.",
          });
        } else {
          setErrorMessages({ ...errorMessages, Contraseña: "" });
        }
        break;

      case "Correo":
        const correoPattern = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
        const correoParts = Correo.split("@");
        if (!correoPattern.test(Correo) || correoParts[0].length > 20) {
          setErrorMessages({
            ...errorMessages,
            Correo:
              "El campo Correo debe ser una dirección de correo electrónico válida que termine en @gmail.com y con menos de 20 caracteres antes del '@'.",
          });
        } else {
          setErrorMessages({ ...errorMessages, Correo: "" });
        }
        break;

      case "TipoUsuario":
        const tipoUsuarioPattern = /^(Arrendatario|Administrador)$/;
        if (!tipoUsuarioPattern.test(TipoUsuario)) {
          setErrorMessages({
            ...errorMessages,
            TipoUsuario:
              "El campo Tipo de Usuario debe ser 'arrendatario' o 'administrador'.",
          });
        } else {
          setErrorMessages({ ...errorMessages, TipoUsuario: "" });
        }
        break;

      default:
        break;
    }
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

  const AddPost = async () => {
    validateFields(); // Validar campos antes de agregar

    // Verificar si hay algún mensaje de error en los campos
    const hasErrors = Object.values(errorMessages).some(
      (message) => message !== ""
    );

    if (!hasErrors) {
      if (
        IDUsuario === "" ||
        Nombre === "" ||
        MetodoRenta === "" ||
        ExtensionDias === "" ||
        Telefono === "" ||
        NombreUsuario === "" ||
        Contraseña === "" ||
        Correo === "" ||
        TipoUsuario === ""
      ) {
        mostrarMensajeError();
      } else {
        add({
          IDUsuario,
          Nombre,
          MetodoRenta,
          ExtensionDias,
          Telefono,
          NombreUsuario,
          Contraseña,
          Correo,
          TipoUsuario:
            TipoUsuario.charAt(0).toUpperCase() + TipoUsuario.slice(1), // Hacer que la primera letra sea mayúscula
        });
        getArrendatarios();
        limpiarCampos();
       // setFormularioVisible(false);
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
                Registrar Usuario Nuevo
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
                  value={IDUsuario}
                  onChange={(event) => {
                    setIDUsuario(event.target.value);
                  }}
                  onBlur={() => {
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
                  Método de Renta
                </span>
                <input
                  type="text"
                  value={MetodoRenta}
                  onChange={(event) => {
                    setMetodoRenta(event.target.value);
                  }}
                  onBlur={() => {
                    validateField("MetodoRenta");
                  }}
                  className="form-control"
                  aria-label="metodo-renta"
                  aria-describedby="basic-addon1"
                />
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
                  value={ExtensionDias}
                  onChange={(event) => {
                    setExtensionDias(event.target.value);
                  }}
                  onBlur={() => {
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
                  value={Telefono}
                  onChange={(event) => {
                    setTelefono(event.target.value);
                  }}
                  onBlur={() => {
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
                  value={NombreUsuario}
                  onChange={(event) => {
                    setNombreUsuario(event.target.value);
                  }}
                  onBlur={() => {
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
                  value={Contraseña}
                  onChange={(event) => {
                    setContraseña(event.target.value);
                  }}
                  onBlur={() => {
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
                  value={Correo}
                  onChange={(event) => {
                    setCorreo(event.target.value);
                  }}
                  onBlur={() => {
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
                  value={TipoUsuario}
                  onChange={(event) => {
                    setTipoUsuario(event.target.value);
                  }}
                  onBlur={() => {
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
                // data-bs-dismiss="modal"
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

export default FormRegistroPost;
