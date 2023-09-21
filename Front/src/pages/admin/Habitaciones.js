import React, { useState, useEffect } from "react";
import BarraLateral from "../../components/BarraLateral";
import "../../css/styles.css";
import "../../css/registro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  habitaciones,
  eliminar,
  buscarHabitacion,
} from "../../controllers/HabitacionControllers";
import HabitacionesForm from "../../components/HabitacionesModal";
import { zonas } from "../../controllers/ZonasControllers";
import { arrendatarios } from "../../controllers/UserControllers";
import PDFGenerator from "../../components/PDFGenerator";

const Habitaciones = () => {
  const [Id, setId] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Estado, setEstado] = useState("");
  const [Precio, setPrecio] = useState("");
  const [Zona, setZona] = useState("");
  const [HabitacionesList, setHabitaciones] = useState([]);
  const [ZonasList, setZonas] = useState([]);
  const [UsuarioList, setUsuarios] = useState([]);
  const [IdUsuarios, setIdUsuarios] = useState("");
  const [NombreBuscar, setNombreBuscar] = useState("");
  const [buscarState, setBuscarState] = useState(false);

  const getHabitaciones = async () => {
    await habitaciones()
      .then((data) => {
        setHabitaciones(data);
      })
      .catch((error) => {
        console.error("Error al obtener las habitaciones:", error);
      });
  };
  //aqui
  const EditarHabitaciones = (val) => {
    setId(val.id);
    setNombre(val.nombre);
    setEstado(val.estado);
    setPrecio(val.precio);
    setZona(val.zonas);
    setIdUsuarios(val.idUsuarios);
  };
  //verificar
  const getZonas = async () => {
    //aqui
    await zonas()
      .then((data) => {
        setZonas(data);
      })
      .catch((error) => {
        console.error("Error al obtener las zonas:", error);
      });
  };

  const getArrendatarios = async () => {
    //aqui
    await arrendatarios()
      .then((data) => {
        setUsuarios(data);
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
      });
  };

  const buscarNombre = async () => {
    try {
      await buscarHabitacion(NombreBuscar).then((data) => {
        setHabitaciones(data);
      });
    } catch (error) {}
  };

  useEffect(() => {
    getHabitaciones();
    getZonas();
    getArrendatarios();
  }, []);

  let autoIncrementa = 1;

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
                  getHabitaciones();
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
                  getHabitaciones();
                  setNombreBuscar("");
                  setBuscarState(false);
                }}
              />
            )}
          </div>
          <div>
            {HabitacionesList && (
              <HabitacionesForm
                modoEdicion={false}
                habitacion2={null}
                getHabitaciones={getHabitaciones}
                ZonasList={ZonasList}
                UsuarioList={UsuarioList}
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
              lista={HabitacionesList}
              nombreLista={"habitaciones"}
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
                <th scope="col">ID habitación</th>
                <th scope="col">Nombre</th>
                <th scope="col">Estado</th>
                <th scope="col">Precio</th>
                <th scope="col">Zona</th>
                <th scope="col">ID de propietario</th>
                <th scope="col">Editar</th>
                <th className="row-border-right" scope="col">
                  Borrar
                </th>
              </tr>
            </thead>
            <tbody>
              {HabitacionesList &&
                HabitacionesList.map((val, key) => {
                  return (
                    <tr key={key}>
                      <th className="row-border-left" scope="row">
                        {autoIncrementa++}
                      </th>
                      {/* van los nombres de la base de datos en si */}
                      <td>{val.id}</td>
                      <td>{val.nombre}</td>
                      <td>{val.estado}</td>
                      <td>{val.precio}</td>
                      <td>{val.zonas}</td>
                      <td>{val.idUsuarios}</td>
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
                        <HabitacionesForm
                          modoEdicion={true}
                          habitacion={{
                            Id: Id,
                            Nombre: Nombre,
                            Estado: Estado,
                            Precio: Precio,
                            Zona: Zona,
                            IdUsuarios: IdUsuarios,
                          }}
                          getHabitaciones={getHabitaciones}
                          ZonasList={ZonasList}
                          UsuarioList={UsuarioList}
                        />
                      </td>
                      {/*/HabitacionEvidenciasModal*/}
                      <td className="row-border-right">
                        <i
                          type="button"
                          onClick={async () => {
                            eliminar({ val, getHabitaciones });
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

export default Habitaciones;
