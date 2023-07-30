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

import "../../css/tabla.css";

const Habitaciones = () => {
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
        
        <div >
            {/* aqui esta el boton de editar */}
            <p></p>
          </div>
        {/* aqui empieza la tabla  */}




        <div class="input-group mb-3 align-items-center">
          <input type="text" className="form-control delgado" placeholder="Nombre del arrendatario" aria-label="Nombre de usuario del destinatario" aria-describedby="basic-addon1" />
          <button class="btn btn-outline"
            type="button" ><i className="bi bi-search" style={{ fontSize: "2rem", color: "black" }}></i>
          </button>
          <button className="btn btn-primary m-2" onClick={add}>
            <i className="bi bi-person-fill-add" style={{ fontSize: "2.2rem", color: "white" }}></i>
          </button>
          <button className="btn btn-success m-2" onClick={getArrendatario}>
            <i className="bi bi-card-checklist" style={{ fontSize: "2.2rem", color: "white" }}></i>
          </button>
        </div>

        <table className="table" >
          <thead className="table-success">
            <tr>
            <th className="tablecolor" scope="col">#</th>
              <th className="tablecolor" scope="col">ID habitacion</th>
              <th className="tablecolor" scope="col">Nombre</th>
              <th className="tablecolor" scope="col">precio</th>
              <th className="tablecolor" scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>

            {ArrendatarioList.map((val, key) => {
              return (
                <tr key={key}>
                  <th style={{ backgroundColor: "#e9e7e76c" }} scope="row">{val.ID}</th>
                  <td style={{ backgroundColor: "#e9e7e76c" }}>{val.ID}</td>
                  <td style={{ backgroundColor: "#e9e7e76c" }}>{val.nombre}</td>
                  <td style={{ backgroundColor: "#e9e7e76c" }}>{val.telefono}</td>
                  <td style={{ backgroundColor: "#e9e7e76c" }}>
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
                        className="btn " >
                        <i className="bi bi-pencil-square" style={{ fontSize: "2rem", color: "#ffd650" }}></i>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          Eliminar(val);
                        }}
                        className="btn " >
                        <i className="bi bi-x-octagon-fill" style={{ fontSize: "2rem", color: "red" }}></i>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>



      </div>



    </div>
  );

};

export default Habitaciones;
