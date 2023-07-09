import React, { useState } from "react";
import BarraLateral from "../components/BarraLateral";
import "../css/styles.css";
import "../css/inventario.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "../logo.svg";
import "../App.css";
import Axios from "axios";


function Inventario() {

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

  const [ArrendatarioList, setArrendatarioList] = useState([]);

  /* agregar arrendatarios */
  const add = () => {

    Axios.post("http://localhost:3001/create", {
      IDUsuario: IDUsuario,
      Nombre: Nombre,
      PhoneNumber: PhoneNumber
    }).then(() => {
      alert("se registro bro");
    });
  }

  /* mostrar arrendatarios */
  const getArrendatario = () => {

    Axios.get("http://localhost:3001/Arrendatarios").then((response) => {
      setArrendatarioList(response.data);
      alert("mostrar datos");
      {

        ArrendatarioList.map((val, key) => {
          return
          <label>
            {val.Nombre}
          </label>

        })

      }

    });
  }



  return (
    <div>
      <div className="d-flex">
        <div className="col-2 div-barra">
          <BarraLateral />
        </div>
        <div className="container">

          <div className="inventario1">

            {/*  map-pasar por todos los valores */}
            <div className="lista">
              <button onClick={getArrendatario}> Listar </button>
              <label>holaa</label>
            </div>
          </div>


          <div className="card text-center">
            <div className="card-header">
              Gestion de Arrendatario
            </div>
            <div className="card-body">

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">ID del Usuario </span>
                <input type="number"
                 onChange={(event) => {
                  setIDUsuario(event.target.value);
                }}
                className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Nombre </span>
                <input type="text"
                 onChange={(event) => {
                  setNombre(event.target.value);
                }}
                className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Apellido </span>
                <input type="text"
                 onChange={(event) => {
                  setApellido(event.target.value);
                }}
                className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Tipo de Usuario </span>
                <input type="text"
                 onChange={(event) => {
                  setTypeUser(event.target.value);
                }}
                className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Contraseña</span>
                <input type="text"
                 onChange={(event) => {
                  setContraseña(event.target.value);
                }}
                className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Identificacion</span>
                <input type="text"
                 onChange={(event) => {
                  setIdentification(event.target.value);
                }}
                className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Correo Electronico</span>
                <input type="text"
                 onChange={(event) => {
                  setGmail(event.target.value);
                }}
                className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Numero de telefono</span>
                <input type="number"
                 onChange={(event) => {
                  setphoneNumber(event.target.value);
                }}
                className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">fecha de arriendo</span>
                <input type="text"
                 onChange={(event) => {
                  setLeaseDate(event.target.value);
                }}
                className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Estado de arriendo</span>
                <input type="text"
                 onChange={(event) => {
                  setState1(event.target.value);
                }}
                className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
              </div>


              

            </div>
            <div className="card-footer text-body-secondary">
              <button className='btn btn-success' onClick={add}> Registrar </button>




            </div>
          </div>





        </div>


      </div>
    </div>
  );
};

export default Inventario;
