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

  const [formIsValid, setFormIsValid] = useState(true);

  //const [errorIDUsuario, setErrorIDUsuario] = useState("");
 // const [errorNombre, setErrorNombre] = useState("");
  //  Resto de los mensajes de error


  const [errorMessages, setErrorMessages] = useState({
    IDUsuario: "",
    Nombre: "",
    // Agrega más campos aquí
  });

  /* const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validación de IDUsuario
    if (!/^[1-9]\d*$/.test(IDUsuario) || IDUsuario.length < 1) {
      newErrors.IDUsuario = "IDUsuario debe ser un número mayor a cero";
      isValid = false;
    } else {
      newErrors.IDUsuario = "";
    }

    // Validación de Nombre
    if (!/^[a-zA-Z ]{3,}$/.test(Nombre)) {
      newErrors.Nombre = "Nombre debe contener al menos 3 letras y no números";
      isValid = false;
    } else {
      newErrors.Nombre = "";
    }

    // Agrega más validaciones para otros campos aquí

    setErrors(newErrors);
    return isValid;
  };
 */



/* 
  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };

    // Validación de IDUsuario
    if (fieldName === "IDUsuario") {
      if (!/^[1-9]\d*$/.test(value) || value.length < 1) {
        newErrors.IDUsuario = "IDUsuario debe ser un número mayor a cero";
      } else {
        newErrors.IDUsuario = "";
      }
    }

    // Validación de Nombre
    if (fieldName === "Nombre") {
      if (!/^[a-zA-Z ]{3,}$/.test(value)) {
        newErrors.Nombre = "Nombre debe contener al menos 3 letras y no números";
      } else {
        newErrors.Nombre = "";
      }
    }

    // Agrega más validaciones para otros campos aquí

    setErrors(newErrors);
  };
 */

/*
  const validateFields = () => {
    const idPattern = /^\d+$/;
    const nombrePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (!idPattern.test(IDUsuario) || parseInt(IDUsuario, 10) === 0) {
      Swal.fire({
        icon: "error",
        title: "Campo IDUsuario inválido",
        text: "El campo IDUsuario debe contener solo números y no ser igual a cero.",
      });
      return false;
    }

    if (!nombrePattern.test(Nombre) || Nombre.length < 3) {
      Swal.fire({
        icon: "error",
        title: "Campo Nombre inválido",
        text: "El campo Nombre debe contener solo letras y tener al menos 3 caracteres.",
      });
      return false;
    }

    // Otras validaciones aquí...

    return true;
  };

*/
const validateFields = () => {
  const idPattern = /^\d+$/;
  const nombrePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  let isValid = true;
  const newErrorMessages = { IDUsuario: "", Nombre: "" };

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

  // Agrega más validaciones aquí...

  setErrorMessages(newErrorMessages);
  return isValid;
};

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
  };
/*
  const AddPost = () => {
    //aqui
     const idUsuarioValidationRegex = /^(?=.*[1-9])\d+$/;
    const nombreValidationRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;

    if (!IDUsuario) {
      setErrorIDUsuario("Este campo no puede estar vacío");
      return;
    }
    
    if (!idUsuarioValidationRegex.test(IDUsuario)) {
      setErrorIDUsuario("ID_Usuario debe contener al menos un número distinto de 0 y no permite caracteres");
      return;
    }

    if (!Nombre) {
      setErrorNombre("Este campo no puede estar vacío");
      return;
    }
    if (!nombreValidationRegex.test(Nombre)) {
      setErrorNombre("Nombre no debe contener números ni caracteres especiales");
      return;
    }

    if (Nombre.length < 3) {
      setErrorNombre("Nombre debe tener al menos 3 letras");
      return;
    } 
    
     
    add({ IDUsuario, Nombre, MetodoRenta,ExtensionDias, Telefono,NombreUsuario,Contraseña, Correo,TipoUsuario });
    getArrendatarios();
    getArrendatarios();
    limpiarCampos();
    

    // Agregar las demás validaciones para los otros campos aqui jeje
    if (validateForm()) {
      add({
        IDUsuario,
        Nombre,
        MetodoRenta,
        ExtensionDias,
        Telefono,
        NombreUsuario,
        Contraseña,
        Correo,
        TipoUsuario,
      });
      getArrendatarios();
      getArrendatarios();
      limpiarCampos();
    }
   
  };

*/
 
/*
const handleBlur = (fieldName, value) => {
  validateField(fieldName, value);
};
*/

/* 
const AddPost = () => {
    const formIsValid = Object.values(errors).every((error) => !error);

    if (formIsValid) {
      add({
        IDUsuario,
        Nombre,
        MetodoRenta,
        ExtensionDias,
        Telefono,
        NombreUsuario,
        Contraseña,
        Correo,
        TipoUsuario,
      });
      getArrendatarios();
      limpiarCampos();
    } else {
      Swal.fire({
        icon: "error",
        title: "Campos Inválidos",
        text: "Por favor, revise los campos con errores.",
        confirmButtonText: "Entendido",
      });
    }
  };

 */

 /* 
  const AddPost = () => {
    //const formIsValid = Object.values(errors).every((error) => !error);
  
    const isValid = validateFields();

    if (isValid) {
      add({
        IDUsuario,
        Nombre,
        MetodoRenta,
        ExtensionDias,
        Telefono,
        NombreUsuario,
        Contraseña,
        Correo,
        TipoUsuario,
      });
      getArrendatarios();
      limpiarCampos();
    } else {
      setFormIsValid(false);
      Swal.fire({
        icon: "error",
        title: "Campos Inválidos",
        text: "Por favor, revise los campos con errores.",
        confirmButtonText: "Entendido",
      });
    }
  };
 */

  const AddPost = () => {
    if (validateFields()) {
      add({
        IDUsuario,
        Nombre,
        MetodoRenta,
        ExtensionDias,
        Telefono,
        NombreUsuario,
        Contraseña,
        Correo,
        TipoUsuario,
      });
      getArrendatarios();
      limpiarCampos();
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
                    validateFields();
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
                    validateFields();
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
                  className="form-control"
                  aria-label="metodo-renta"
                  aria-describedby="basic-addon1"
                />
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
                  className="form-control"
                  aria-label="extension"
                  aria-describedby="basic-addon1"
                />
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
                  className="form-control"
                  aria-label="Phone Number"
                  aria-describedby="basic-addon1"
                />
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
                  className="form-control"
                  aria-label="nombre-usuario"
                  aria-describedby="basic-addon1"
                />
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
                  className="form-control"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
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
                  className="form-control"
                  aria-label="correo"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Tipo de Usuario
                </span>
                <input
                  type="text"
                  value={TipoUsuario}
                  onChange={(event) => {
                    setTipoUsuario(event.target.value);
                  }}
                  className="form-control"
                  aria-label="tipo-usuario"
                  aria-describedby="basic-addon1"
                />
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
