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
import FormModal from "../../components/FormModal";

const Componentes = () => {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <div className="div-barra">
        <BarraLateral />
      </div>

      <div>
        <FormModal/>
      </div>

    </div>
  );

};


export default Componentes;
