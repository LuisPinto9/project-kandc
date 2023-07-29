import React, { useState } from "react";
import BarraLateral from "../../components/BarraLateral";
import "../../css/styles.css";
import "../../css/registro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import Axios from "axios";
import Swal from "sweetalert2";
import SistemaUsuario from "../user/DashboardUsuario";
import { Alert } from "react-bootstrap";


const Zonas = () => {

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

  const Eliminar = (val) => { };

  const EditarArrendatarios = (val) => { };
  const add = (val) => { };

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

          <div className="card-header">Gestion de Zonas</div>
          <div className="card-body">

            <p>espacio para input</p>

          </div>

          <div className="card-footer text-body-secondary">
            <p>botones</p>
            <button className="btn btn-success " onClick={add}>

              <span className="input-group-text input-login px-1 py-0" id="basic-addon1" style={{ border: "none", backgroundColor: "transparent" }}>
                <i className=" bi bi-person-fill-add" style={{ fontSize: "2.2rem", color: "white" }}></i>
              </span>

            </button>


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
                        className="btn"
                      >

                        {/*   <span className="input-group-text input-login px-1 py-0" id="basic-addon1" style={{ border: "none", backgroundColor: "transparent" }}>
                          <i className="bi bi-pen-fill" style={{ fontSize: "2rem", color: "blue" }}></i>
                        </span> */}
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
                        {/* <span className="input-group-text input-login px-1 py-0" id="basic-addon1" style={{ border: "2px solid white", backgroundColor: "red" }}>
  <i className="bi bi-x-octagon-fill " style={{ fontSize: "2rem", color: "white" }}></i>
</span>
<span className="input-group-text input-login px-1 py-0" id="basic-addon1" style={{ border: "none", backgroundColor: "transparent" }}>
  <i className="bi bi-x-octagon-fill icon-rojo" style={{ fontSize: "1.6rem" }}></i>
</span> */}
                        <span className="input-group-text input-login px-1 py-0" id="basic-addon1" style={{ border: "none", backgroundColor: "transparent" }}>
                          <i className="bi bi-x-octagon-fill" style={{ fontSize: "2rem", color: "red" }}></i>
                        </span>



                        {/*  <span
                          className="input-group-text input-login px-1 py-0"
                          id="basic-addon1"
                        >
                          <i
                            className="bi bi-x-octagon"
                            style={{ fontSize: "1.6rem" }}
                          ></i>
                        </span> */}

                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>



      </div>{/*   cierra container */}



    </div>
  );

};

export default Zonas;
