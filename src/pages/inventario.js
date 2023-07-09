import React, { useState } from "react";
import BarraLateral from "../components/BarraLateral";
import "../css/styles.css";
import "../css/inventario.css";

import logo from "../logo.svg";
import "../App.css";
import Axios from "axios";


function Inventario() {


  const [IDUsuario,setIDUsuario]=useState("");
  const [Nombre,setNombre]=useState("");
  const [Apellido,setApellido]=useState("");
  const [TypeUser,setTypeUser]=useState("");
  const [Identification,setIdentification]=useState("");
  const [Contraseña,setContraseña]=useState("");
  const [PhoneNumber,setphoneNumber]=useState("");
  const [Gmail,setGmail]=useState("");
  const [LeaseDate,setLeaseDate]=useState("");
  const [State1,setState1]=useState("");
  

  const add=()=>{

    Axios.post("http://localhost:3001/create",{
    IDUsuario:IDUsuario,  
    Nombre:Nombre,
      PhoneNumber:PhoneNumber
    }).then(()=>{

      alert("se registro bro");
    })
  }


  return (
    <div>
      <div className="d-flex">
        <div className="col-2 div-barra">
          <BarraLateral />
        </div>



        <div className="inventario1">
          <div className="datos">
          <label>ID del Usuario <input 
            onChange={(event)=>{
                setIDUsuario(event.target.value);
            }}
               type="number"></input></label>
            
            <label>Nombre: <input
            onChange={(event)=>{
                setNombre(event.target.value);
            }}
             type="text"></input></label>

            <label>Apellido: <input 
            onChange={(event)=>{
                setApellido(event.target.value);
            }}
             type="text"></input></label>

             <label>Tipo de Usuario <input 
            onChange={(event)=>{
                setTypeUser(event.target.value);
            }}
             type="text"></input></label>

            <label>Contraseña <input 
            onChange={(event)=>{
                setContraseña(event.target.value);
            }}
              type="text"></input></label>            
            <label>Identificacion <input type="number"></input></label>
            <label>CorreoElectronico<input type="text"></input></label>
            <label>numero de telefono<input
            onChange={(event)=>{
                setphoneNumber(event.target.value);
            }}
               type="number"></input></label>
            <label>fecha de arriendo<input type="text"></input></label>
            <label>Estado de arriendo<input type="number"></input></label>
            <button onClick={add}> Registrar </button>

          
          </div>           
        </div>

{/* 
        <div className="body-1 col-10 text-center">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default Inventario;
