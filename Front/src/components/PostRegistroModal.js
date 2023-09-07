import React, { useState } from "react";
import { add } from "../controllers/UserControllers";
import "../css/modal.css";

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


  const [errorIDUsuario, setErrorIDUsuario] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
  //  Resto de los mensajes de error

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

  const AddPost = () => {
    //aqui

    if (!IDUsuario) {
      setErrorIDUsuario("Este campo no puede estar vacío");
      return;
    }

    if (!Nombre) {
      setErrorNombre("Este campo no puede estar vacío");
      return;
    }

    // Agregar las demás validaciones para los otros campos aqui jeje

    add({ IDUsuario, Nombre, MetodoRenta,ExtensionDias, Telefono,NombreUsuario,Contraseña, Correo,TipoUsuario });
    getArrendatarios();
    getArrendatarios();
    limpiarCampos();
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
                    setErrorIDUsuario("");
                  }}
                  //aquivalidad
                  onBlur={() => {
                    if (!IDUsuario) {
                      setErrorIDUsuario("Este campo no puede estar vacío");
                    }
                  }}


                  className="form-control"
                  aria-label="id"
                  aria-describedby="basic-addon1"
                />
                  {errorIDUsuario && <div className="error-message">{errorIDUsuario}</div>}
      
              </div>


              <div className="input-group mb-3">
                <span className="input-group-text">Nombre</span>
                <input
                  type="text"
                  value={Nombre}
                  onChange={(event) => {
                    setNombre(event.target.value);
                    setErrorNombre("");
                  }}

                  onBlur={() => {
                    if (!Nombre) {
                      setErrorNombre("Este campo no puede estar vacío");
                    }
                  }}

                  className="form-control"
                  aria-label="nombre"
                  aria-describedby="basic-addon1"
                />
                 {errorNombre && <div className="error-message">{errorNombre}</div>}
      
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
