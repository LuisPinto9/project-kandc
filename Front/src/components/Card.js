import React, { useState, useEffect } from "react";
import imagenp1 from "../images/imagenp1.png";
// import imagenp2 from "../images/imagenp2.png";
// import imagenp3 from "../images/imagenp3.png";
import { getZonasInicio } from "../controllers/ZonasControllers.js";

const Card = () => {
  const [zones, setZones] = useState([]);

  const getZonas = async () => {
    try {
      const data = await getZonasInicio();
      setZones(data);
    } catch (error) {
      console.error("Error al obtener las zonas:", error);
    }
  };

  useEffect(() => {
    getZonas();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center flex-wrap div-cards">
        {zones &&
          zones.map((zone) => {
            // Obtener el último dígito del ID
            const lastDigit = zone.id % 10;
            // Definir el texto de Habitaciones en función del último dígito
            let habitacionesText = "";
            if (zone.id === 102) {
              habitacionesText = "Habitaciones: 2";
            } else if (lastDigit === 2) {
              habitacionesText = "Habitaciones: 3";
            } else if (lastDigit === 1) {
              habitacionesText = "Habitaciones: 4";
            }
            return (
              <div className="div-imagenp pt-3 px-3 m-3" key={zone.id}>
                <div
                  className="card"
                  style={{
                    width: "18rem",
                    borderColor: "white",
                    border: "0rem",
                    borderTopLeftRadius: "10rem",
                    borderTopRightRadius: "10rem",
                  }}
                >
                  <img src={imagenp1} className="card-img-top" alt="..." />
                  <div className="card-body pt-0">
                    <div className="card-text-title">{zone.nombre}</div>
                    <p className="card-text">
                      Precio: ${zone.precio.toLocaleString()}
                      <br />
                      {habitacionesText}
                      <br />
                      Servicios: Agua, luz, gas
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Card;
