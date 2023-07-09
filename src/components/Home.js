import React from "react";
import Card from "../components/Card.js";

function Home() {
  return (
    <div>
      <div className="fondo d-flex align-items-center flex-column justify-content-center p-4">
        <div className="div-titulo text-center p-5 col-11 mb-5">
          <div>
            <h1 className="titulo-home">
              Bienvenido a la página del edifico K&C
            </h1>
          </div>
          <div>
            <h1 className="subtitulo-home">
              En esta página podras encontrar información sobre el edificio
            </h1>
          </div>
        </div>
        <div className="p-3 mt-5">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;
