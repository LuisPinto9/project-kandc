import React from "react";

function Home() {
  return (
    <div>
      <div className="fondo d-flex align-items-start justify-content-center p-4">
        <div className="div-titulo text-center p-5 col-11">
          <div>
            <h1 className="titulo-home">Bienvenido a la página del edifico K&C</h1>
          </div>
          <div>
            <h1 className="subtitulo-home">
              En esta página podras encontrar información sobre el edificio
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className="container-fluid d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
