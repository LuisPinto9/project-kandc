import React, { useState, useEffect } from "react";
import BarraLateral from "../../components/BarraLateral";
import "../../css/styles.css";
import "../../css/registro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { arrendatarios, Eliminar } from "../../controllers/UserControllers";
import PostHabitacionesModal from "../../components/PostHabitacionesModal";
import PutHabitacionesModal from "../../components/PutHabitacionesModal";
import "../../css/tabla.css";

const Habitaciones = () => {
  const [Id, setId] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Estado, setEstado] = useState("");
  const [Precio, setPrecio] = useState("");
  const [Zona, setZona] = useState("");
  const [HabitacionesList, setHabitaciones] = useState([]);

  const getHabitaciones = () => {
    arrendatarios()
      .then((data) => {
        setHabitaciones(data);
      })
      .catch((error) => {
        console.error("Error al obtener las habitaciones:", error);
      });
  };

  const EditarHabitaciones = (val) => {
    setId(val.ID);
    setNombre(val.nombre);
    setEstado("");
    setPrecio(val.telefono);
    setZona("");
  };

  useEffect(() => {
    getHabitaciones();
  }, []);

  let autoIncrementa = 1;

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <div className="div-barra">
        <BarraLateral />
      </div>
      <div className="container pt-3">
        <div className="d-flex mb-2 justify-content-center align-items-center">
          <div className="input-registro-search d-flex align-items-center pe-2">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre de la habitación"
              aria-label="Nombre de la habitacion"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="ps-1 pe-2">
            <i
              type="button"
              className="bi bi-search"
              style={{ fontSize: "2rem", color: "black" }}
            />
          </div>
          <div>
            <PostHabitacionesModal getHabitaciones={getHabitaciones} />
          </div>
        </div>
        {/* aqui empieza la tabla  */}
        <table className="table tabla-get text-center">
          <thead>
            <tr>
              <th className="row-border-left" scope="col">
                #
              </th>
              <th scope="col">ID habitación</th>
              <th scope="col">Nombre</th>
              <th scope="col">Estado</th>
              <th scope="col">Precio</th>
              <th scope="col">Zona</th>
              <th scope="col">Editar</th>
              <th className="row-border-right" scope="col">
                Borrar
              </th>
            </tr>
          </thead>
          <tbody>
            {HabitacionesList.map((val, key) => {
              return (
                <tr key={key}>
                  <th className="row-border-left" scope="row">
                    {autoIncrementa++}
                  </th>
                  {/* van los nombres de la base de datos en si */}
                  <td>{val.ID}</td>
                  <td>{val.nombre}</td>
                  <td>Estado</td>
                  <td>{val.telefono}</td>
                  <td>Zona</td>
                  <td>
                    <i
                      type="button"
                      className="bi bi-pencil-square px-2 btn-update"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop-put"
                      onClick={() => {
                        EditarHabitaciones(val);
                      }}
                    />
                    <PutHabitacionesModal
                      values={{
                        Id: Id,
                        Nombre: Nombre,
                        Precio: Precio,
                      }}
                      getHabitaciones={getHabitaciones}
                    />
                  </td>
                  <td className="row-border-right">
                    <i
                      type="button"
                      onClick={() => {
                        //Eliminar({ val, getHabitaciones });
                      }}
                      className="bi bi-x-octagon-fill px-2 btn-delete"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Habitaciones;
