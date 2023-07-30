import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FormRegistroPost = () => {
    const [IDUsuario, setIDUsuario] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
  const [TypeUser, setTypeUser] = useState("");
  const [Identification, setIdentification] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const [PhoneNumber, setphoneNumber] = useState("");
  const [Gmail, setGmail] = useState("");
  const [LeaseDate, setLeaseDate] = useState("");
  const [State1, setState1] = useState("");
  /* agregar arrendatarios */
  
  return (
    <div>
      <div className="card text-center">
        <div className="card-header">Gestion de Arrendatario</div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              ID del Usuario{" "}
            </span>
            <input
              type="number"
              value={IDUsuario}
              onChange={(event) => {
                setIDUsuario(event.target.value);
              }}
              className="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Nombre{" "}
            </span>
            <input
              type="text"
              value={Nombre}
              onChange={(event) => {
                setNombre(event.target.value);
              }}
              className="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Apellido{" "}
            </span>
            <input
              type="text"
              value={Apellido}
              onChange={(event) => {
                setApellido(event.target.value);
              }}
              className="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Tipo de Usuario{" "}
            </span>
            <input
              type="text"
              value={TypeUser}
              onChange={(event) => {
                setTypeUser(event.target.value);
              }}
              className="form-control"
              aria-label="Username"
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
              Identificacion
            </span>
            <input
              type="text"
              value={Identification}
              onChange={(event) => {
                setIdentification(event.target.value);
              }}
              className="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Correo Electronico
            </span>
            <input
              type="text"
              value={Gmail}
              onChange={(event) => {
                setGmail(event.target.value);
              }}
              className="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Numero de telefono
            </span>
            <input
              type="number"
              value={PhoneNumber}
              onChange={(event) => {
                setphoneNumber(event.target.value);
              }}
              className="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              fecha de arriendo
            </span>
            <input
              type="text"
              value={LeaseDate}
              onChange={(event) => {
                setLeaseDate(event.target.value);
              }}
              className="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Estado de arriendo
            </span>
            <input
              type="text"
              value={State1}
              onChange={(event) => {
                setState1(event.target.value);
              }}
              className="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="card-footer text-body-secondary">
          {/* aqui esta el boton de editar */}
        </div>
      </div>
    </div>
  );
};

export default FormRegistroPost;
