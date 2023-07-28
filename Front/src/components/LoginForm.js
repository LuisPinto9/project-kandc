import React from "react";
import { Link } from "react-router-dom";
import "../css/form.css";

const LoginForm = () => {
  return (
    <div className="row justify-content-center m-5">
      <div className="form-rectangle col-7 p-4 pb-2 justify-content-center">
        <div className="div-titulo-login">
          <h1 className="titulo-login">Iniciar Sesión</h1>
        </div>
        <div className="px-5 pt-4">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Nombre de usuario
              </label>
              <div className="text-input-login">
                <div class="input-group mb-2">
                  <div className="input-group-gray">
                    <span
                      className="input-group-text input-login px-1 py-0"
                      id="basic-addon1"
                    >
                      <i
                        className="bi bi-at"
                        style={{ fontSize: "1.6rem" }}
                      ></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="user@example.com"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Contraseña
              </label>
              <div className="text-input-login">
                <div class="input-group mb-0">
                  <div className="input-group-gray">
                    <span
                      class="input-group-text input-login px-2 pt-1 pb-1"
                      id="basic-addon1"
                    >
                      <i class="bi bi-lock" style={{ fontSize: "1.3rem" }}></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <div className="d-flex justify-content-center">
              <div className="px-5">
                <Link to="/" className="btn btn-danger form-button shadow-sm">
                  Volver
                </Link>
              </div>
              <div className="px-5">
                <button type="submit" className="btn btn-primary form-button">
                  Aceptar
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-center pt-3">
            <Link to="/dashboard-admin">
              <p>Admin</p>
            </Link>
            <Link to="/dashboard-usuario">
              <p>Usuario</p>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default LoginForm;
