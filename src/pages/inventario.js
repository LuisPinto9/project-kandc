import React from "react";
import BarraLateral from "../components/BarraLateral";
import logo from "../logo.svg";
import "../App.css";

const inventario = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="row">
          <BarraLateral />
        </div>
        <div className="row text-center col-12">
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
      {/* <div class="container">
        <div class="row">
          <div class="col-md-2">
            <BarraLateral />
          </div>
          <div class="col-md-10">
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
      </div> */}
    </div>
  );
};

export default inventario;
