import React from "react";
import "../css/styles.css";
import edificio from "../images/edificio.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar-principal">
        <div>
          <p className="titulo p-3">
            Edificio K&C
            <img className="img-edificio" src={edificio} alt="icon-edificio" />
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
