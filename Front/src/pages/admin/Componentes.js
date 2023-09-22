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
import {
  componentesEvidencia,
  buscarEvideciaComponente,
  eliminarEvidencia,
  getEvidenciaImage,
} from "../../controllers/ComponenteEvidenciaController";
import ComponenteEvidenciaForm from "../../components/ComponentesEvidenciasModal";
import componentesImage from "../../images/TV.png";
import ImageModal from "../../components/ImageModal";

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
  const [ComponentesEvidenciaList, setComponentesEvidencia] = useState([]);
  const [Id2, setId2] = useState("");
  const [Nombre2, setNombre2] = useState("");
  const [Descripcion2, setDescripcion2] = useState("");
  const [Url, setUrl] = useState("");
  const [Componente, setComponente] = useState("");
  const [idBuscar, setIdBuscar] = useState("");
  const [showComponentes,setShowComponentes] = useState(true)
  const [showEvidencias, setShowEvidencias] = useState(false)

  const getComponentesEvidencias = async () => {
    //aqui
    await componentesEvidencia()
      .then((data) => {
        setComponentesEvidencia(data);
      })
      .catch((error) => {
        console.error("Error al obtener las zonas:", error);
      });
  };
  //..
  const EditarComponentesEvidencias = (val2) => {
    setId2(val2.id);
    setNombre2(val2.nombre);
    setDescripcion2(val2.descripcion);
    setUrl(val2.url);
    setComponente(val2.componente);
  };

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

  const buscarIdComponente = async () => {
    try {
      await buscarEvideciaComponente(idBuscar).then((data) => {
        setComponentesEvidencia(data);
      });
    } catch (error) {}
  };

  useEffect(() => {
    getComponentes();
    getComponentesEvidencias()
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

  const [imageUrl, setImageUrl] = useState("");

  const getImageUrl = async (url) => {
    try {
      const response = await getEvidenciaImage(url);
      setImageUrl(response);
    } catch (error) {}
  };

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
              setShowComponentes(true);
              setShowEvidencias(false);
            }}
          >
            <div>
              <img src={componentesImage} alt="Logo" width="39" height="38" />
            </div>
            <div className="ps-1">Componentes</div>
          </button>
          <button
            className="btn button-selection-user link-to d-flex align-items-center justify-content-center"
            onClick={() => {
              setShowEvidencias(true);
              setShowComponentes(false);
            }}
          >
            <div>
              <i className="bi bi-images" style={{ fontSize: "2rem" }}></i>
            </div>
            <div className="ps-1">Evidencias</div>
          </button>
        </div>
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
                      buscarNombre();
                      setBuscarState(true);
                    } else if (NombreBuscar === "") {
                      getComponentes();
                      setNombreBuscar(""); /*  */
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
          </>
        )}
        {showEvidencias && (
          <>
            <div className="d-flex mb-2 justify-content-center align-items-center">
              <div className="input-registro-search d-flex align-items-center pe-2">
                <input
                  type="text"
                  className="form-control"
                  value={idBuscar}
                  placeholder="Comienze a escribir números para filtrar los id de los componentes"
                  aria-label="Id de usuario del destinatario"
                  aria-describedby="basic-addon1"
                  onChange={(event) => {
                    const newValue = event.target.value.replace(/[^0-9]/g, "");
                    setIdBuscar(newValue);
                  }}
                  onKeyUp={() => {
                    if (idBuscar !== "") {
                      buscarIdComponente();
                      setBuscarState(true);
                    } else if (idBuscar === "") {
                      getComponentesEvidencias();
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
                      getComponentesEvidencias();
                      setIdBuscar("");
                      setBuscarState(false);
                    }}
                  />
                )}
              </div>
              <div>
                {ComponentesEvidenciaList && (
                  <>
                    <i
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop-post-evidencia"
                      className="bi bi-plus-circle-fill btn-add"
                    />
                    <ComponenteEvidenciaForm
                      modoEdicion={false}
                      evidenciaComponentesSeleccionada={null}
                      getComponentesEvidencias={getComponentesEvidencias}
                      componentesList={ComponentesList}
                      
                    />
                  </>
                )}
              </div>
              <div className="ps-2">
                <PDFGenerator
                  lista={ComponentesList}
                  nombreLista={"componentes"}
                  multiList={false}
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
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Enlace</th>
                    <th scope="col">Componente al que pertenece</th>
                    <th scope="col">Editar</th>
                    <th className="row-border-right" scope="col">
                      Borrar
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ComponentesEvidenciaList &&
                    ComponentesEvidenciaList.map((val, key) => {
                      return (
                        <tr key={key}>
                          <th className="row-border-left" scope="row">
                            {autoIncrementar++}
                          </th>
                          {/* van los nombres de la base de datos en si */}
                          <td>{val.id}</td>
                          <td>{val.nombre}</td>
                          <td>{val.descripcion}</td>
                          <td>
                            <button
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              onClick={() => {
                                getImageUrl(val.url);
                              }}
                              style={{
                                background: "none",
                                color: "black",
                                border: "0px",
                                textDecoration: "underline",
                              }}
                            >
                              {val.url}
                            </button>
                            <ImageModal imageUrl={imageUrl} />
                          </td>
                          <td>{val.componente}</td>
                          <td>
                            <i
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop-put-evidencia"
                              className="bi bi-pencil-square px-2 btn-update"
                              onClick={() => {
                                EditarComponentesEvidencias(val);
                              }}
                            />
                            <ComponenteEvidenciaForm
                              modoEdicion={true}
                              evidenciaComponentesSeleccionada={{
                                id: Id2,
                                nombre: Nombre2,
                                descripcion: Descripcion2,
                                url: Url,
                                componente: Componente,
                              }}
                              getComponentesEvidencias={
                                getComponentesEvidencias
                              }
                              componentesList={ComponentesList}
                              
                            />
                          </td>
                          <td className="row-border-right">
                            <i
                              type="button"
                              onClick={async () => {
                                await eliminarEvidencia({
                                  val,
                                  getComponentesEvidencias,
                                });
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
          </>
        )}
      </div>
    </div>
  );
};

export default Componentes;
