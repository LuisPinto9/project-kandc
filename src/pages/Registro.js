import React, { useState } from "react";
import BarraLateral from "../components/BarraLateral";
import "../css/styles.css";
import "../css/registro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Axios from "axios";

function Registro() {
  /* datos de los arrendatarios */
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

  const [Editar, setEditar] = useState(false);
  const [ArrendatarioList, setArrendatario] = useState([]);

  /* agregar arrendatarios */
  const add = () => {
    Axios.post("http://localhost:3001/create", {
      IDUsuario: IDUsuario,
      Nombre: Nombre,
      PhoneNumber: PhoneNumber,
    }).then(() => {
      getArrendatario();
      alert("se registro bro");
    });
  };

  /* es para actualizar */
  const EditarArrendatarios = (val) => {
    setEditar(true);
    /*  setIDUsuario(val.ID); */
    setIDUsuario(val.ID);
    setNombre(val.nombre);
    setphoneNumber(val.telefono)

  }
  const update = () => {
    Axios.put("http://localhost:3001/update", {
      IDUsuario: IDUsuario,
      Nombre: Nombre,
      PhoneNumber: PhoneNumber,
    }).then(() => {
      getArrendatario();
      alert("se actualizo bro");
      limpiarCampos();
    });
  };

  const limpiarCampos=()=>  {
    setIDUsuario("");
    setNombre("");
    setphoneNumber("");
    setEditar(false);
  }


  /* mostrar arrendatarios */
  const getArrendatario = () => {
    Axios.get("http://localhost:3001/arrendatarios").then((res) => {
      setArrendatario(res.data);
      console.log(res.data);
    });
  };

  return (
    <div>
      <div className="d-flex">
        <div className="col-2 div-barra">
          <BarraLateral />
        </div>
        <div className="container">
          <div className="card text-center">
            <div className="card-header">Gestion de Arrendatario</div>
            <div className="card-body">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  ID del Usuario{" "}
                </span>
                <input
                  type="number" value={IDUsuario}
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
                  type="text" value={Nombre}
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
                  type="text" value={Apellido}
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
                  type="text" value={TypeUser}
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
                  type="text" value={Contraseña}
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
                  type="text" value={Identification}
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
                  type="text" value={Gmail}
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
                  type="number" value={PhoneNumber}
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
                  type="text" value={LeaseDate}
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
                  type="text" value={State1}
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
              {
                Editar == true ?
                  <div>

                    <button className="btn btn-warning m-2" onClick={update}>
                      {" "}
                      Actualizar{" "}
                    </button>
                    <button className="btn btn-warning m-2" onClick={limpiarCampos}>
                      {" "}
                      cancelar{" "}
                    </button>


                  </div>

                  :

                  <button className="btn btn-success m-2" onClick={add}>
                    {" "}
                    Registrar{" "}
                  </button>

              }

              <button className="btn btn-success m-2" onClick={getArrendatario}>
                {" "}
                Listar{" "}
              </button>
            </div>
          </div>
          {/* aqui empieza la tabla  */}
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID Usuario</th>
                <th scope="col">Nombre</th>
                <th scope="col">Telefono</th>
                <th scope="col">Accciones</th>

              </tr>
            </thead>
            <tbody>
              {ArrendatarioList.map((val, key) => {
                return (
                  <tr key={key}>
                    <th scope="row">{val.ID}</th>
                    {/* van los nombres de la base de datos en si */}
                    <td>{val.ID}</td>
                    <td>{val.nombre}</td>
                    <td>{val.telefono}</td>
                    <td>
                      <div className="btn-group" role="group" aria-label="Basic example">

                        <button type="button" onClick={() => {
                          EditarArrendatarios(val);

                        }}
                          className="btn btn-info">actualizar</button>
                        <button type="button" className="btn btn-danger">borrar</button>

                      </div>

                    </td>

                  </tr>
                );
              })}
              {/* 
              {ArrendatarioList.map((val, key) => {
                return (
                  <tr key={key}>
                    <th scope="row">{val.IDUsuario}</th>
                    <td>{val.ID}</td>
                    <td>{val.nombre}</td>
                    <td>{val.telefono}</td>
                  </tr>
                );
              })} */}

            </tbody>
          </table>
        </div>
        {/*   cierra container */}
      </div>
    </div>
  );
}

export default Registro;
