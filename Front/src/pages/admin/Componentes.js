import React, { useState, useEffect } from "react";
import BarraLateral from "../../components/BarraLateral";
import "../../css/styles.css";
import "../../css/registro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { arrendatarios, Eliminar } from "../../controllers/UserControllers";
import PostComponentesModal from "../../components/PostComponentesModal";
import PutComponentesModal from "../../components/PutComponentesModal";
import "../../css/tabla.css";

const Componentes = () => {
  const [Id, setId] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Marca, setMarca] = useState("");
  const [Cantidad, setCantidad] = useState("");
  const [Costo, setCosto] = useState("");
  const [Estado, setEstado] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Observacion, setObservacion] = useState("");
  const [Habitacion, setHabitacion] = useState("");
  const [ComponentesList, setComponentes] = useState([]);

  const getComponentes = () => {
    arrendatarios()
      .then((data) => {
        setComponentes(data);
      })
      .catch((error) => {
        console.error("Error al obtener los componentes:", error);
      });
  };

  const EditarComponentes = (val) => {
    setId(val.ID);
    setNombre(val.nombre);
    setMarca("");
    setCantidad("");
    setCosto(val.telefono);
    setEstado("");
    setDescripcion("");
    setObservacion("");
    setHabitacion("");
  };

  useEffect(() => {
    getComponentes();
  }, []);

  let autoIncrementar = 1;

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
              placeholder="Nombre del componente"
              aria-label="Nombre de componente"
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
            <PostComponentesModal getComponentes={getComponentes} />
          </div>
        </div>
        {/* aqui empieza la tabla  */}
        <table className="table tabla-get text-center">
          <thead>
            <tr>
              <th className="row-border-left" scope="col">
                #
              </th>
              <th scope="col">ID componente</th>
              <th scope="col">Nombre</th>
              <th scope="col">Marca</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Costo</th>
              <th scope="col">Estado</th>
              <th scope="col">Descirpción</th>
              <th scope="col">Observación</th>
              <th scope="col">Habitación</th>
              <th scope="col">Editar</th>
              <th className="row-border-right" scope="col">
                Borrar
              </th>
            </tr>
          </thead>
          <tbody>
            {ComponentesList.map((val, key) => {
              return (
                <tr key={key}>
                  <th className="row-border-left" scope="row">
                    {autoIncrementar++}
                  </th>
                  {/* van los nombres de la base de datos en si */}
                  <td>{val.ID}</td>
                  <td>{val.nombre}</td>
                  <td>Marca</td>
                  <td>Cantidad</td>
                  <td>{val.telefono}</td>
                  <td>Estado</td>
                  <td>Descripción</td>
                  <td>Observación</td>
                  <td>Habitación</td>
                  <td>
                    <i
                      type="button"
                      className="bi bi-pencil-square px-2 btn-update"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop-put"
                      onClick={() => {
                        EditarComponentes(val);
                      }}
                    />
                    <PutComponentesModal
                      values={{
                        Id: Id,
                        Nombre: Nombre,
                        Costo: Costo,
                      }}
                      getComponentes={getComponentes}
                    />
                  </td>
                  <td className="row-border-right">
                    <i
                      type="button"
                      onClick={() => {
                        //Eliminar({ val, getComponentes });
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

export default Componentes;
