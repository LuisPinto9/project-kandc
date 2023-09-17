import React, { useState, useEffect } from "react";
import BarraLateral from "../../components/BarraLateral";
import "../../css/styles.css";
import "../../css/registro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/tabla.css";
import {
  zonas,
  eliminar,
  buscarZona,
} from "../../controllers/ZonasControllers";
import PDFGenerator from "../../components/PDFGenerator";
import ZonasForm from "../../components/ZonasModal";

const Zonas = () => {
  const [Id, setId] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Precio, setPrecio] = useState("");
  const [Acceso, setAcceso] = useState("");
  const [ZonasList, setZonas] = useState([]);
  const [idBuscar, setIdBuscar] = useState("");
  const [buscarState, setBuscarState] = useState(false);

  const getZonas = async () => {
    await zonas()
      .then((data) => {
        setZonas(data);
      })
      .catch((error) => {
        console.error("Error al obtener las zonas:", error);
      });
  };

  const buscarId = async () => {
    try {
      await buscarZona(idBuscar).then((data) => {
        setZonas(data);
      });
    } catch (error) {}
  };

  const EditarZonas = (val) => {
    setId(val.id);
    setNombre(val.nombre);
    setDescripcion(val.descripcion);
    setPrecio(val.precio);
    setAcceso(val.acceso);
  };

  useEffect(() => {
    getZonas();
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
                  buscarId();
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
          <div>
            {ZonasList && (
              <ZonasForm
                modoEdicion={false} // Establece el modo de edición a false para agregar
                zona={null} // Puedes pasar null o un objeto vacío para agregar
                getZonas={getZonas}
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
              lista={ZonasList}
              nombreLista={"zonas"}
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
                <th scope="col">ID zona</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Precio</th>
                <th scope="col">Tipo de acceso</th>
                <th scope="col">Editar</th>
                <th className="row-border-right" scope="col">
                  Borrar
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
                      <td>{val.acceso}</td>
                      <td>
                        <i
                          type="button"
                          className="bi bi-pencil-square px-2 btn-update"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop-put"
                          onClick={() => {
                            EditarZonas(val);
                          }}
                        />
                        <ZonasForm
                          modoEdicion={true}
                          zona={{
                            Id: Id,
                            Nombre: Nombre,
                            Descripcion: Descripcion,
                            Precio: Precio,
                            Acceso: Acceso,
                          }}
                          getZonas={getZonas}
                        />
                      </td>
                      <td className="row-border-right">
                        <i
                          type="button"
                          onClick={async () => {
                            await eliminar({ val, getZonas });
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

export default Zonas;
