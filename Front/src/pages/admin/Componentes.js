import React, { useState, useEffect } from "react";
import BarraLateral from "../../components/BarraLateral";
import "../../css/styles.css";
import "../../css/registro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { componentes, eliminar } from "../../controllers/ComponentesControllers";
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
    componentes()
      .then((data) => {
        setComponentes(data);
      })
      .catch((error) => {
        console.error("Error al obtener los componentes:", error);
      });
  };

  const EditarComponentes = (val) => {
    setId(val.id);
    setNombre(val.nombre);
    setMarca(val.marca);
    setCantidad(val.cantidad);
    setCosto(val.costo);
    setEstado(val.estado);
    setDescripcion(val.descripcion);
    setObservacion(val.observacion);
    setHabitacion(val.habitacion);
  };

  useEffect(() => {
    getComponentes();
  }, []);

  let autoIncrementar = 1;

  return (
    <div className="d-flex" style={{ minHeight: "78.6vh" }}>
      <div className="div-barra">
        <BarraLateral />
      </div>
      <div className="container pt-3 col-sm-7 col-md-9 col-xl-10">
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
        <div className="table-responsive">
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
                <th scope="col">Descripción</th>
                <th scope="col">Observación</th>
                <th scope="col">Habitación</th>
                <th scope="col">Editar</th>
                <th className="row-border-right" scope="col">
                  Borrar
                </th>
              </tr>
            </thead>
            <tbody>
              {ComponentesList&&ComponentesList.map((val, key) => {
                return (
                  <tr key={key}>
                    <th className="row-border-left" scope="row">
                      {autoIncrementar++}
                    </th>
                    {/* van los nombres de la base de datos en si */}
                    <td>{val.id}</td>
                    <td>{val.nombre}</td>
                    <td>{val.marca}</td>
                    <td>{val.cantidad}</td>
                    <td>{val.cantidad}</td>
                    <td>{val.estado}</td>
                    <td>{val.descripcion}</td>
                    <td>{val.observacion}</td>
                    <td>{val.habitacion}</td>
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
                          Marca:Marca,
                          Cantidad:Cantidad,
                          Costo:Costo,
                          Estado:Estado,
                          Descripcion:Descripcion,
                          Observacion:Observacion,
                          Habitacion:Habitacion,
                        }}
                        getComponentes={getComponentes}
                      />
                    </td>
                    <td className="row-border-right">
                      <i
                        type="button"
                        onClick={() => {
                          eliminar({ val, getComponentes });
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
    </div>
  );
};

export default Componentes;
