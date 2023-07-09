import React from "react";
import imagenp1 from "../images/imagenp1.png";
import imagenp2 from "../images/imagenp2.png";
import imagenp3 from "../images/imagenp3.png";

const Card = () => {
  return (
    <div>
      <div className="d-flex justify-content-center flex-wrap">
        <div className="div-imagenp pt-3 px-3 m-3">
          <div
            className="card"
            style={{
              width: "18rem",
              borderColor: "white",
              border: "0rem",
              borderRadius: "10rem",
            }}
          >
            <img src={imagenp1} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Apartamento 201
                <br />
                Disponible
                <br />
                Precio: 1.000.000$
                <br />
                Area: 5.000 m<sup>2</sup>
                <br />
                Servicios: luz, agua
                <br />
                Habitaciones: 3<br />
              </p>
            </div>
          </div>
        </div>
        <div className="div-imagenp pt-3 px-3 m-3">
          <div
            className="card"
            style={{
              width: "18rem",
              borderColor: "white",
              border: "0rem",
              borderRadius: "10rem",
            }}
          >
            <img src={imagenp2} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Apartamento 201
                <br />
                Disponible
                <br />
                Precio: 1.000.000$
                <br />
                Area: 5.000 m<sup>2</sup>
                <br />
                Servicios: luz, agua
                <br />
                Habitaciones: 3<br />
              </p>
            </div>
          </div>
        </div>
        <div className="div-imagenp pt-3 px-3 m-3">
          <div
            className="card"
            style={{
              width: "18rem",
              borderColor: "white",
              border: "0rem",
              borderRadius: "10rem",
            }}
          >
            <img src={imagenp3} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Apartamento 201
                <br />
                Disponible
                <br />
                Precio: 1.000.000$
                <br />
                Area: 5.000 m<sup>2</sup>
                <br />
                Servicios: luz, agua
                <br />
                Habitaciones: 3<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
