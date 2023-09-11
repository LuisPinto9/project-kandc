import React, { useState, useEffect } from "react";
import BarraLateral from "../../components/BarraLateral";
import "../../css/styles.css";
import "../../css/registro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/tabla.css";
import { zonas, eliminar } from "../../controllers/ZonasControllers";
import PostZonasModal from "../../components/PostZonasModal";
import PutZonasModal from "../../components/PutZonasModal";

const Zonas = () => {
  const [Id, setId] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Precio, setPrecio] = useState("");
  const [Acceso, setAcceso] = useState("");
  const [ZonasList, setZonas] = useState([]);

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
              placeholder="Nombre de la zona"
              aria-label="Nombre de la zona"
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
            <PostZonasModal getZonas={getZonas} />
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
                        <PutZonasModal
                          values={{
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
                          onClick={() => {
                            eliminar({ val, getZonas });
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
