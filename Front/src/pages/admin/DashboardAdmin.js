import React from "react";
import BarraLateral from "../../components/BarraLateral";
import logo from "../../logo.svg";

const DashboardAdmin = () => {
  return (
    <div>
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        <div className="div-barra">
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

export default DashboardAdmin;
