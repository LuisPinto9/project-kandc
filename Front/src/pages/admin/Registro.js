import React, { useState } from "react";
import BarraLateral from "../../components/BarraLateral";
import "../../css/styles.css";
import "../../css/registro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import Axios from "axios";

/* para que los alert se vean bonitos */
import Swal from "sweetalert2";
import SistemaUsuario from "../user/DashboardUsuario";
import { Alert } from "react-bootstrap";
/*import withReactContent from 'sweetalert2-react-content'
const notifica = withReactContent(Swal) */

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
    Axios.post("http://localhost:3001/user/create", {
      IDUsuario: IDUsuario,
      Nombre: Nombre,
      PhoneNumber: PhoneNumber,
    }).then(() => {
      getArrendatario();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Registro exitoso</strong>",
        html:
          "<i>El arrendatario: <strong>" +
          Nombre +
          "</strong> fue registrado</i>",
        icon: "success",
        timer: 2000,
      });
    });
  };

  /* es para actualizar */
  const EditarArrendatarios = (val) => {
    setEditar(true);
    /*  setIDUsuario(val.ID); */
    setIDUsuario(val.ID);

    setNombre(val.nombre);
    setphoneNumber(val.telefono);
  };
  const update = () => {
    Axios.put("http://localhost:3001/user/update", {
      IDUsuario: IDUsuario,
      Nombre: Nombre,
      PhoneNumber: PhoneNumber,
    }).then(() => {
      getArrendatario();
      limpiarCampos();

      Swal.fire({
        title: "<strong>Actualizacion exitosa</strong>",
        html:
          "<i>El arrendatario: <strong>" +
          Nombre +
          "</strong> fue actualizado</i>",
        icon: "success",
        timer: 2000,
      });
    });
  };

  const limpiarCampos = () => {
    setIDUsuario("");
    setNombre("");
    setphoneNumber("");
    setEditar(false);
  };

  const Eliminar = (val) => {
    Swal.fire({
      title: "ELIMINAR",
      html:
        "<i>Desea eliminar al usuario <strong>" +
        val.nombre +
        "</strong> ?  </i>",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        /* aqui es donde se elimina */
        const IDUsuario = val.ID;
        Axios.delete("http://localhost:3001/user/delete", {
          data: { IDUsuario: IDUsuario },
        })
          .then(() => {
            getArrendatario();
            Swal.fire({
              title: "<strong>Eliminacion exitosa</strong>",
              html:
                "<i>El arrendatario: <strong>" +
                val.nombre +
                "</strong> fue eliminado</i>",
              icon: "success",
              timer: 2000,
              showConfirmButton: false,
            });
          })
          .catch(function (error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No se pudo eliminar",
              showConfirmButton: false,
              footer: "Intente mas tarde",
              /* JSON.parse(JSON.stringify(error)).message=="Network Error"?"intente mas tarde": footer: JSON.parse(JSON.stringify(error)).message
               */
            });
          });
      }
    });
  };




  /*  
  
   const Eliminar2 = (IDUsuario) => {
    Axios.delete("http://localhost:3001/delete/${IDUsuario}").then(() => {
      getArrendatario();
      alert("se elimino bro"+IDUsuario);
  
     
    });
  }; */

  /* mostrar arrendatarios */
  const getArrendatario = () => {
    Axios.get("http://localhost:3001/user/arrendatarios").then((res) => {
      setArrendatario(res.data);
      console.log(res.data);
    });
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <div className="div-barra">
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
            {Editar == true ? (
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
            ) : (
              <button className="btn btn-success " onClick={add}>
                
                <span className="input-group-text input-login px-1 py-0" id="basic-addon1" style={{ border: "none", backgroundColor: "transparent" }}>
                          <i className=" bi bi-person-fill-add" style={{ fontSize: "2.2rem", color: "white" }}></i>
                        </span>
                         
              </button>
            )}

            <button className="btn btn-success m-2" onClick={getArrendatario}>
            <span className="input-group-text input-login px-1 py-0" id="basic-addon1" style={{ border: "none", backgroundColor: "transparent" }}>
                          <i className="
                        bi bi-card-checklist" style={{ fontSize: "2.2rem", color: "white" }}></i>
                        </span>
            </button>
          </div>




        </div>
        {/* aqui empieza la tabla  */}
        <table className="table table-bordered">
          <thead className="table-dark">
          <tr>
              <th class="table-success" scope="col">#</th>
              <th class="table-success" scope="col">ID Usuario</th>
              <th class="table-success" scope="col">Nombre</th>
              <th class="table-success" scope="col">Telefono</th>
              <th class="table-success" scope="col">Acciones</th>
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
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          EditarArrendatarios(val);
                        }}
                        className="btn "
                      >
                      <span className="input-group-text input-login px-1 py-0" id="basic-addon1" style={{ border: "none", backgroundColor: "transparent" }}>
                          <i className="bi bi-pencil-square" style={{ fontSize: "2rem", color: "#87CEFA" }}></i>
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          Eliminar(val);

                          /*  alert("el id es"+IDUsuario) */
                        }}
                        className="btn "
                      >
                        <span className="input-group-text input-login px-1 py-0" id="basic-addon1" style={{ border: "none", backgroundColor: "transparent" }}>
                          <i className="bi bi-x-octagon-fill" style={{ fontSize: "2rem", color: "red" }}></i>
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>


      </div>
      {/*   cierra container */}
    </div>
  );
}

export default Registro;
