import React from "react";
import "../css/styles.css";
import edificio from "../images/edificio.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-principal">
        <footer className="d-flex">
          <Link className="navbar-brand align-items-center " to="/">
            <div className="d-flex d-inline-block align-items-center">
              <h4 className="titulo-footer px-2 pt-3">Edificio K&C</h4>
              <img src={edificio} alt="Logo" width="45" height="45" />
            </div>
          </Link>
          <div className=" d-flex px-5">
          <h4 className="titulo-footer px-5 pt-3">Carrera</h4>
          <h4 className="titulo-footer px-5 pt-3">334233423</h4>
          <h4 className="titulo-footer px-5 pt-3">facebook</h4>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
