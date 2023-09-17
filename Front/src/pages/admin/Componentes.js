import React, { useState, useEffect } from "react";
import BarraLateral from "../../components/BarraLateral";
import "../../css/styles.css";
import "../../css/registro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  componentes,
  eliminar,
  buscarComponente,
} from "../../controllers/ComponentesControllers";
import "../../css/tabla.css";
//verificar
import { habitaciones } from "../../controllers/HabitacionControllers";
import ComponentesForm from "../../components/ComponentesModal";
import PDFGenerator from "../../components/PDFGenerator";

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
  const [HabitacionesList, setHabitaciones] = useState([]);
  const [NombreBuscar, setNombreBuscar] = useState("");
  const [buscarState, setBuscarState] = useState(false);

  const getComponentes = async () => {
    await componentes()
      .then((data) => {
        setComponentes(data);
      })
      .catch((error) => {
        console.error("Error al obtener los componentes:", error);
      });
  };
  //verificar

  const getHabitaciones = async () => {
    await habitaciones()
      .then((data) => {
        setHabitaciones(data);
      })
      .catch((error) => {
        console.error("Error al obtener las habitaciones:", error);
      });
  };

  const buscarNombre = async () => {
    try {
      await buscarComponente(NombreBuscar).then((data) => {
        setComponentes(data);
      });
    } catch (error) {}
  };

  useEffect(() => {
    getComponentes();
    getHabitaciones(); // Llama a la función para obtener las habitaciones cuando se monta el componente
  }, []);

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
              value={NombreBuscar}
              placeholder="Comienze a escribir letras para filtrar los nombres"
              aria-label="Id de usuario del destinatario"
              aria-describedby="basic-addon1"
              onChange={(event) => {
                const newValue = event.target.value.replace(/[^a-zA-Z]/g, "");
                setNombreBuscar(newValue);
              }}
              onKeyUp={() => {
                if (NombreBuscar !== "") {
                  buscarNombre();
                  setBuscarState(true);
                } else if (NombreBuscar === "") {
                  getComponentes();
                  setNombreBuscar("");
                  setBuscarState(false);
                }
              }}
            />
            {buscarState && (
              <i
                type="button"
                className="bi bi-x ps-1"
                style={{ fontSize: "2rem", color: "black" }}
                onClick={() => {
                  getComponentes();
                  setNombreBuscar("");
                  setBuscarState(false);
                }}
              />
            )}
          </div>
          <div>
            {ComponentesList && (
              <ComponentesForm
                modoEdicion={false}
                componente={null}
                getComponentes={getComponentes}
                HabitacionesList={HabitacionesList}
              />
            )}

            <i
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop-post"
              className="bi bi-plus-circle-fill btn-add"
            />
          </div>
          <div className="ps-2">
            <PDFGenerator
              lista={ComponentesList}
              nombreLista={"componentes"}
              multiList={false}
            />
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
              {ComponentesList &&
                ComponentesList.map((val, key) => {
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
                      <td>{val.costo}</td>
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
                        <ComponentesForm
                          modoEdicion={true}
                          componente={{
                            Id: Id,
                            Nombre: Nombre,
                            Marca: Marca,
                            Cantidad: Cantidad,
                            Costo: Costo,
                            Estado: Estado,
                            Descripcion: Descripcion,
                            Observacion: Observacion,
                            Habitacion: Habitacion,
                          }}
                          getComponentes={getComponentes}
                          HabitacionesList={HabitacionesList}
                        />
                      </td>
                      <td className="row-border-right">
                        <i
                          type="button"
                          onClick={async () => {
                            await eliminar({ val, getComponentes });
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
