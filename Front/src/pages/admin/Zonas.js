import React, { useState, useEffect } from "react";
import BarraLateral from "../../components/BarraLateral";
import "../../css/styles.css";
import "../../css/registro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "../../css/tabla.css";
import { arrendatarios, Eliminar } from "../../controllers/UserControllers";
import PostZonasModal from "../../components/PostZonasModal";
import PutZonasModal from "../../components/PutZonasModal";

const Zonas = () => {
  const [IDUsuario, setIDUsuario] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Precio, setPrecio] = useState("");
  const [Acceso, setAcceso] = useState("");
  const [ZonasList, setZonas] = useState([]);

  const getZonas = () => {
    arrendatarios()
      .then((data) => {
        setZonas(data);
      })
      .catch((error) => {
        console.error("Error al obtener las zonas:", error);
      });
  };

  const EditarZonas = (val) => {
    setIDUsuario(val.ID);
    setNombre(val.nombre);
    setPrecio(val.telefono);
    setAcceso("");
  };

  useEffect(() => {
    getZonas();
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
            {ZonasList.map((val, key) => {
              return (
                <tr key={key}>
                  <th className="row-border-left" scope="row">
                    {autoIncrementa++}
                  </th>
                  {/* van los nombres de la base de datos en si */}
                  <td>{val.ID}</td>
                  <td>{val.nombre}</td>
                  <td>descipcion</td>
                  <td>{val.telefono}</td>
                  <td>Publico</td>
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
                        IDUsuario: IDUsuario,
                        Nombre: Nombre,
                        Precio: Precio,
                      }}
                      getZonas={getZonas}
                    />
                  </td>
                  <td className="row-border-right">
                    <i
                      type="button"
                      onClick={() => {
                        //Eliminar({ val, getZonas });
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

export default Zonas;
