import React from "react";
import "../css/styles.css";
import edificio from "../images/edificio.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-principal d-flex">
        <footer className="align-items-center">
        <Link className="navbar-brand align-items-center " to="/">
            <div className="d-flex d-inline-block align-items-center">
              <h1 className="titulo-footer px-2 pt-3">Edificio K&C</h1>
              <img
                src={edificio}
                alt="Logo"
                width="45"
                height="45"
              />
            </div>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
