import React from "react";
import Card from "../components/Card.js";
import manual from "../video/manualusuario.mp4";

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
        <div className="p-2 mt-4">
          <Card />
        </div>
        <div className="p-2 mt-4">
          <div>
            <h2 style={{ textAlign: "center", fontFamily:"Roboto Mono" }}>
              Tutorial de explicación de la página
            </h2>
          </div>
          <video style={{ width: "1000px", height: "570px" }} controls>
            <source src={manual} type="video/mp4" />
            Tu navegador no admite la reproducción de video.
          </video>
        </div>
        


      </div>
    </div>
  );
}

export default Home;
