import React from "react";
import "../css/styles.css";
import edificio from "../images/edificio.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-principal">
        <div className="container-fluid d-flex">
          <Link className="navbar-brand align-items-center" to="/">
            <div className="d-flex d-inline-block align-items-center">
              <h1 className="titulo px-2 pt-2">Edificio K&C</h1>
              <div className="pb-1">
                <img
                  src={edificio}
                  alt="Logo"
                  width="60"
                  height="60"
                  className=""
                />
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
