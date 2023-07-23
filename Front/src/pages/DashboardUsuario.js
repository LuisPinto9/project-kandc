import React from "react";
import BarraLateral from "../components/BarraLateral";
import "../css/styles.css";
import logo from "../logo.svg";
import "../App.css";

const SistemaUsuario = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="col-2 div-barra">
          <BarraLateral />
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default SistemaUsuario;
