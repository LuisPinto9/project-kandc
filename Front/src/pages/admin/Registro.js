import React, { useState } from "react";
import BarraLateral from "../../components/BarraLateral";
import "../../css/styles.css";
import "../../css/registro.css";
import "../../css/tabla.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import Axios from "axios";

/* para que 
los alert se vean bonitos */
import Swal from "sweetalert2";
import SistemaUsuario from "../user/DashboardUsuario";
import { Alert } from "react-bootstrap";
import FormRegistroPost from "../../components/FormRegistroPost";
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

  const add = () => {
    Axios.post("http://localhost:3001/user/create", {
      IDUsuario: IDUsuario,
      Nombre: Nombre,
      PhoneNumber: PhoneNumber,
    }).then(() => {
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
    getArrendatario();
    limpiarCampos();
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
        {" "}
        {/* aqui termina formulario */}
        <div>
          {/* aqui esta el boton de editar */}
          <p></p>
        </div>
        {/* aqui empieza la tabla  */}
        <div className="input-group mb-3 align-items-center">
          <input
            type="text"
            className="form-control delgado"
            placeholder="Nombre del arrendatario"
            aria-label="Nombre de usuario del destinatario"
            aria-describedby="basic-addon1"
          />

          <button className="btn btn-outline" type="button">
            <i
              className="bi bi-search"
              style={{ fontSize: "2rem", color: "black" }}
            ></i>
          </button>

          {/* botones */}
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
            <div>
              <i
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="bi bi-plus-circle-fill btn-add-registro"
              />
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <FormRegistroPost />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cancelar
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={add}
                      >
                        Aceptar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <button className="btn btn-success m-2" onClick={getArrendatario}>
            <i
              className="bi bi-card-checklist"
              style={{ fontSize: "2rem", color: "white" }}
            ></i>
          </button>
        </div>
        <table className="table tabla-get text-center">
          <thead>
            <tr>
              <th className="row-border-left" scope="col">
                #
              </th>
              <th scope="col">ID Usuario</th>
              <th scope="col">Nombre</th>
              <th scope="col">Telefono</th>
              <th scope="col">Editar</th>
              <th className="row-border-right" scope="col">
                Borrar
              </th>
            </tr>
          </thead>
          <tbody>
            {ArrendatarioList.map((val, key) => {
              return (
                <tr key={key}>
                  <th className="row-border-left" scope="row">
                    {val.ID}
                  </th>
                  {/* van los nombres de la base de datos en si */}
                  <td>{val.ID}</td>
                  <td>{val.nombre}</td>
                  <td>{val.telefono}</td>
                  <td>
                    <i
                      type="button"
                      onClick={() => {
                        EditarArrendatarios(val);
                      }}
                      className="bi bi-pencil-square px-2"
                      style={{ fontSize: "2rem", color: "#ffd650" }}
                    />

                    {/*  <span className="input-group-text input-login px-1 py-0" id="basic-addon1" style={{ border: "none", backgroundColor: "transparent" }}>
                           </span> */}
                  </td>
                  <td className="row-border-right">
                    <i
                      type="button"
                      onClick={() => {
                        Eliminar(val);
                      }}
                      className="bi bi-x-octagon-fill px-2"
                      style={{ fontSize: "2rem", color: "red" }}
                    />
                    {/* <span className="input-group-text input-login px-1 py-0" id="basic-addon1" style={{ border: "none", backgroundColor: "transparent" }}>
                          
                        </span> */}
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
