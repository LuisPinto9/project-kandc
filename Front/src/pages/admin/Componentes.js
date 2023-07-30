import React from "react";
import BarraLateral from "../../components/BarraLateral";
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
