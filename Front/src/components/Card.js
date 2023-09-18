import React, { useState, useEffect } from "react";
import imagenp1 from "../images/imagenp1.png";
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

  const groupSize = 3;

  const groupZones = () => {
    const grouped = [];
    for (let i = 0; i < zones.length; i += groupSize) {
      grouped.push(zones.slice(i, i + groupSize));
    }
    return grouped;
  };

  const groupedZones = groupZones();

  function getHabitacionesText(id) {
    if (id === 102) {
      return "2";
    } else {
      return "3";
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-center flex-wrap div-cards">
        <div className="d-flex col-12">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ width: "93vw" }}
          >
            <div className="carousel-inner" data-bs-interval="5000">
              {groupedZones.map((group, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="d-flex justify-content-center flex-wrap">
                    {group.map((zone) => (
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
                          <img
                            src={imagenp1}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body pt-0">
                            <div className="card-text-title">{zone.nombre}</div>
                            <p className="card-text">
                              Precio: ${zone.precio.toLocaleString()}
                              <br />
                              Habitaciones: {getHabitacionesText(zone.id)}
                              <br />
                              Servicios: Agua, luz, gas
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <i
              className="bi bi-chevron-compact-left carousel-control-prev"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
              type="button"
              style={{ fontSize: "3rem", color: "gray" }}
            >
              <span className="visually-hidden">Previous</span>
            </i>
            <i
              className="bi bi-chevron-compact-right carousel-control-next"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
              type="button"
              style={{ fontSize: "3rem", color: "gray" }}
            >
              <span className="visually-hidden">Next</span>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
