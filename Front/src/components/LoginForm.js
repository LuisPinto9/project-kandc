import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/form.css";
import { verificar } from "../controllers/LoginController";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const SaveLocalStorage = (key, item) => {
    //conseguir elementos en localStorage
    let elementos = JSON.parse(localStorage.getItem(key));
    //comprar si es un array
    if (Array.isArray(elementos)) {
      elementos.push(item);
    } else {
      //crear array
      elementos = [item];
    }
    //guardar en el localStorage
    localStorage.setItem(key, JSON.stringify([elementos]));
  };

  const handleCheckChange = () => {
    setShowPassword(!showPassword);
  };

  const limpiarCampos = () => {
    setNombreUsuario("");
    setContraseña("");
  };

  const handleClick = (e) => {
    e.preventDefault();
    verificar({ nombreUsuario, contraseña })
      .then((data) => {
        SaveLocalStorage("auth", data.token);
        if (data.tipo.toLowerCase() === "administrador") {
          navigate("/dashboard-admin");
        } else if (data.tipo.toLowerCase() === "arrendatario") {
          navigate("/dashboard-usuario");
        }
      })
      .catch(() => {
        // Maneja cualquier error que pueda ocurrir
        mostrarMensajeError();
        console.error("Usuario o contraseña incorrectos");
      });
    limpiarCampos();
  };

const mostrarMensajeError = () => {
    Swal.fire({
      title: "No puede ingresar",
      text: "Usuario o contraseña invalido",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
    });
  };

  return (
    <div
      className="row justify-content-center m-5"
      style={{ minHeight: "63.9vh" }}
    >
      <div className="form-rectangle col-7 p-4 pb-2 justify-content-center">
        <div className="div-titulo-login">
          <h1 className="titulo-login">Iniciar Sesión</h1>
        </div>
        <div className="px-5 pt-4">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Nombre de usuario
            </label>
            <div className="text-input-login">
              <div className="input-group mb-2">
                <div className="input-group-gray">
                  <span
                    className="input-group-text input-login px-1 py-0"
                    id="basic-addon1"
                  >
                    <i
                      className="bi bi-person"
                      style={{ fontSize: "1.6rem" }}
                    ></i>
                  </span>
                </div>
                <input
                  type="email"
                  value={nombreUsuario}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="user123"
                  onChange={(event) => {
                    setNombreUsuario(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="InputPassword" className="form-label">
              Contraseña
            </label>
            <div className="text-input-login">
              <div className="input-group mb-0">
                <div className="input-group-gray">
                  <span
                    className="input-group-text input-login px-2 pt-1 pb-1"
                    id="basic-addon1"
                  >
                    <i
                      className="bi bi-lock"
                      style={{ fontSize: "1.3rem" }}
                    ></i>
                  </span>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="InputPassword"
                  value={contraseña}
                  onChange={(event) => {
                    setContraseña(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="Check"
              onChange={handleCheckChange}
            />
            <label className="form-check-label" htmlFor="Check">
              Mostrar contraseña
            </label>
          </div>
          <div className="d-flex justify-content-center">
            <div className="px-5">
              <Link to="/" className="btn btn-danger form-button shadow-sm">
                Volver
              </Link>
            </div>
            <div className="px-5">
              <button
                type="submit"
                className="btn btn-primary form-button"
                onClick={handleClick}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
