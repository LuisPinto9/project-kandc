import React, { useState, useEffect } from "react";
import BarraLateral from "../../components/BarraLateral";
import zonasImage from "../../images/Company.png";
import habitacionesImage from "../../images/Living Room.png";
import componentesImage from "../../images/TV.png";
import {
  getRooms,
  getComponents,
  getZona,
  findComponentes,
  findHabitacion,
  findZona,
} from "../../controllers/UserRoomsControllers";
import PDFGenerator from "../../components/PDFGenerator";

const InventarioUser = () => {
  const [showZonas, setShowZonas] = useState(true);
  const [showComponentes, setShowComponentes] = useState(false);
  const [showHabitaciones, setShowHabitaciones] = useState(false);
  const [NombreBuscarHabitacion, setNombreBuscarHabitacion] = useState("");
  const [NombreBuscar, setNombreBuscar] = useState("");
  const [idBuscar, setIdBuscar] = useState("");
  const [buscarState, setBuscarState] = useState(false);

  let autoIncrementa = 1;

  //Zonas
  const [ZonasList, setZonas] = useState([]);
  
  const getZonas = async () => {
    await getZona()
      .then((data) => {
        setZonas(data);
      })
      .catch((error) => {
        console.error("Error al obtener las zonas:", error);
      });
  };

  const buscarIdZonas = async () => {
    try {
      await findZona(idBuscar).then((data) => {
        setZonas(data);
      });
    } catch (error) {}
  };

  //Habitaciones
  const [HabitacionesList, setHabitaciones] = useState([]);
  const getHabitaciones = async () => {
    await getRooms()
      .then((data) => {
        setHabitaciones(data);
      })
      .catch((error) => {
        console.error("Error al obtener las habitaciones:", error);
      });
  };

  const buscarNombreHabitaciones = async () => {
    try {
      await findHabitacion(NombreBuscarHabitacion).then((data) => {
        setHabitaciones(data);
      });
    } catch (error) {}
  };

  //Componentes
  const [ComponentesList, setComponentes] = useState([]);
  const getComponentes = async () => {
    await getComponents()
      .then((data) => {
        setComponentes(data);
      })
      .catch((error) => {
        console.error("Error al obtener los componentes:", error);
      });
  };

  const buscarNombreComponentes = async () => {
    try {
      await findComponentes(NombreBuscar).then((data) => {
        setComponentes(data);
      });
    } catch (error) {}
  };

  useEffect(() => {
    getZonas();
    getHabitaciones();
    getComponentes();
  }, []);

  return (
    <div className="d-flex" style={{ minHeight: "78.6vh" }}>
      <div className="div-barra">
        <BarraLateral />
      </div>
      <div className="container pt-3 col-sm-7 col-md-9 col-xl-10">
        <div className="d-flex justify-content-evenly pb-1">
          <button
            className="btn button-selection-user link-to d-flex align-items-center justify-content-center"
            onClick={() => {
              setShowZonas(true);
              setShowHabitaciones(false);
              setShowComponentes(false);
              setBuscarState(false);
              setIdBuscar("");
              setNombreBuscarHabitacion("");
              setNombreBuscar("");
              getComponentes();
              getZonas();
              getHabitaciones();
            }}
          >
            <div>
              <img src={zonasImage} alt="Logo" width="39" height="38" />
            </div>
            <div className="ps-1">Zonas</div>
          </button>
          <button
            className="btn button-selection-user link-to d-flex align-items-center justify-content-center"
            onClick={() => {
              setShowZonas(false);
              setShowHabitaciones(true);
              setShowComponentes(false);
              setBuscarState(false);
              setIdBuscar("");
              setNombreBuscarHabitacion("");
              setNombreBuscar("");
              getComponentes();
              getZonas();
              getHabitaciones();
            }}
          >
            <div>
              <img src={habitacionesImage} alt="Logo" width="39" height="38" />
            </div>
            <div className="ps-1">Habitaciones</div>
          </button>
          <button
            className="btn button-selection-user link-to d-flex align-items-center justify-content-center"
            onClick={() => {
              setShowZonas(false);
              setShowHabitaciones(false);
              setShowComponentes(true);
              setBuscarState(false);
              setIdBuscar("");
              setNombreBuscarHabitacion("");
              setNombreBuscar("");
              getComponentes();
              getZonas();
              getHabitaciones();
            }}
          >
            <div>
              <img src={componentesImage} alt="Logo" width="39" height="38" />
            </div>
            <div className="ps-1">Componentes</div>
          </button>
        </div>
        {showZonas && (
          <>
            <div className="d-flex mb-2 justify-content-center align-items-center">
              <div className="input-registro-search d-flex align-items-center pe-2">
                <input
                  type="text"
                  className="form-control"
                  value={idBuscar}
                  placeholder="Comienze a escribir números para filtrar los ID"
                  aria-label="Id de la zona"
                  aria-describedby="basic-addon1"
                  onChange={(event) => {
                    const newValue = event.target.value.replace(/[^0-9]/g, "");
                    setIdBuscar(newValue);
                  }}
                  onKeyUp={() => {
                    if (idBuscar !== "") {
                      buscarIdZonas();
                      setBuscarState(true);
                    } else if (idBuscar === "") {
                      getZonas();
                      setIdBuscar("");
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
                      getZonas();
                      setIdBuscar("");
                      setBuscarState(false);
                    }}
                  />
                )}
              </div>
              <div className="px-1">
                <PDFGenerator
                  lista={[ZonasList, HabitacionesList, ComponentesList]}
                  nombreLista={"zona"}
                  multiList={true}
                />
              </div>
            </div>
            <div className="table-responsive">
              <table className="table tabla-get text-center">
                <thead>
                  <tr>
                    <th className="row-border-left" scope="col">
                      #
                    </th>
                    <th scope="col">ID zona</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Precio</th>
                    <th className="row-border-right" scope="col">
                      Tipo de acceso
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ZonasList &&
                    ZonasList.map((val, key) => {
                      return (
                        <tr key={key}>
                          <th className="row-border-left" scope="row">
                            {autoIncrementa++}
                          </th>
                          {/* van los nombres de la base de datos en si */}
                          <td>{val.id}</td>
                          <td>{val.nombre}</td>
                          <td>{val.descripcion}</td>
                          <td>{val.precio}</td>
                          <td className="row-border-right">{val.acceso}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </>
        )}
        {showHabitaciones && (
          <>
            <div className="d-flex mb-2 justify-content-center align-items-center">
              <div className="input-registro-search d-flex align-items-center pe-2">
                <input
                  type="text"
                  className="form-control"
                  value={NombreBuscarHabitacion}
                  placeholder="Comienze a escribir letras para filtrar los nombres"
                  aria-label="Id de usuario del destinatario"
                  aria-describedby="basic-addon1"
                  onChange={(event) => {
                    const newValue = event.target.value.replace(
                      /[^a-zA-Z]/g,
                      ""
                    );
                    setNombreBuscarHabitacion(newValue);
                  }}
                  onKeyUp={() => {
                    if (NombreBuscarHabitacion !== "") {
                      buscarNombreHabitaciones();
                      setBuscarState(true);
                    } else if (NombreBuscarHabitacion === "") {
                      getHabitaciones();
                      setNombreBuscarHabitacion("");
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
                      setNombreBuscarHabitacion("");
                      setBuscarState(false);
                    }}
                  />
                )}
              </div>
              <div className="px-1">
                <PDFGenerator
                  lista={[ZonasList, HabitacionesList, ComponentesList]}
                  nombreLista={"zona"}
                  multiList={true}
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
                    <th className="row-border-right" scope="col">
                      Zona
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
                          <td className="row-border-right">{val.zonas}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </>
        )}
        {showComponentes && (
          <>
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
                    const newValue = event.target.value.replace(
                      /[^a-zA-Z]/g,
                      ""
                    );
                    setNombreBuscar(newValue);
                  }}
                  onKeyUp={() => {
                    if (NombreBuscar !== "") {
                      buscarNombreComponentes();
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
              <div className="px-1">
                <PDFGenerator
                  lista={[ZonasList, HabitacionesList, ComponentesList]}
                  nombreLista={"zona"}
                  multiList={true}
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
                    <th className="row-border-right" scope="col">
                      Habitación
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ComponentesList &&
                    ComponentesList.map((val, key) => {
                      return (
                        <tr key={key}>
                          <th className="row-border-left" scope="row">
                            {autoIncrementa++}
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
                          <td className="row-border-right">{val.habitacion}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InventarioUser;
