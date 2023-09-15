import React, { useState, useEffect } from "react";
import BarraLateral from "../../components/BarraLateral";
import { zonas, buscarZona } from "../../controllers/ZonasControllers";
import zonasImage from "../../images/Company.png";
import habitacionesImage from "../../images/Living Room.png";
import componentesImage from "../../images/TV.png";

const InventarioUser = () => {
  const [showZonas, setShowZonas] = useState(true);
  const [showComponentes, setShowComponentes] = useState(false);
  const [showHabitaciones, setShowHabitaciones] = useState(false);
  const [NombreBuscar, setNombreBuscar] = useState("");  
  const [idBuscar, setIdBuscar] = useState("");  
  const [buscarState, setBuscarState] = useState(false);

  let autoIncrementa = 1;

  //Zonas
  const [ZonasList, setZonas] = useState([]);
  //Habitaciones
  const [HabitacionesList, setHabitaciones] = useState([]);
  //Componentes
  const [ComponentesList, setComponentes] = useState([]);

  const getZonas = async () => {
    await zonas()
      .then((data) => {
        setZonas(data);
      })
      .catch((error) => {
        console.error("Error al obtener las zonas:", error);
      });
  };

  const buscarIdZonas = async () => {
    try {
      await buscarZona(idBuscar).then((data) => {
        setZonas(data);
      });
    } catch (error) {}
  };

  useEffect(() => {
    getZonas();
  }, []);

  return (
    <div className="d-flex" style={{ minHeight: "78.6vh" }}>
      <div className="div-barra">
        <BarraLateral />
      </div>

      <div className="container pt-3 col-sm-7 col-md-9 col-xl-10">
        <div className="d-flex justify-content-evenly pb-1">
          <button
            className="btn button-selection-user link-to d-flex align-items-center"
            onClick={() => {
              setShowZonas(true);
              setShowHabitaciones(false);
              setShowComponentes(false);
            }}
          >
            <div>
              <img src={zonasImage} alt="Logo" width="39" height="38" />
            </div>
            <div className="ps-1">Zonas</div>
          </button>
          <button
            className="btn button-selection-user link-to d-flex align-items-center"
            onClick={() => {
              setShowZonas(false);
              setShowHabitaciones(true);
              setShowComponentes(false);
            }}
          >
            <div>
              <img src={habitacionesImage} alt="Logo" width="39" height="38" />
            </div>
            <div className="ps-1">Habitaciones</div>
          </button>
          <button
            className="btn button-selection-user link-to d-flex align-items-center"
            onClick={() => {
              setShowZonas(false);
              setShowHabitaciones(false);
              setShowComponentes(true);
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
        {showComponentes && (
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
      </div>
    </div>
  );
};

export default InventarioUser;
