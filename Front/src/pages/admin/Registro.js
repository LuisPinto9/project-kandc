import React, { useState, useEffect } from "react";
import BarraLateral from "../../components/BarraLateral";
import "../../css/styles.css";
import "../../css/registro.css";
import "../../css/tabla.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { arrendatarios, eliminar } from "../../controllers/UserControllers";
import PostRegistroModal from "../../components/PostRegistroModal";
import PutRegistroModal from "../../components/PutRegistroModal";

function Registro() {
  /* datos de los arrendatarios */
  const [IDUsuario, setIDUsuario] = useState("");
  const [Nombre, setNombre] = useState("");
  const [MetodoRenta, setMetodoRenta] = useState("");
  const [ExtensionDias, setExtensionDias] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [NombreUsuario, setNombreUsuario] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const [Correo, setCorreo] = useState("");
  const [TipoUsuario, setTipoUsuario] = useState("");
  const [ArrendatariosList, setArrendatarios] = useState([]);

  const getArrendatarios = () => {
    arrendatarios()
      .then((data) => {
        setArrendatarios(data);
      })
      .catch((error) => {
        console.error("Error al obtener los arrendatarios:", error);
      });
  };

  const EditarArrendatarios = (val) => {
    setIDUsuario(val.ID);
    setNombre(val.nombre);
    setMetodoRenta("");
    setExtensionDias("");
    setTelefono(val.telefono);
    setNombreUsuario("");
    setContraseña("");
    setCorreo("");
    setTipoUsuario("");
  };

  useEffect(() => {
    getArrendatarios();
  }, []);

  let autoIncremento = 1;

  return (
    <div className="d-flex" style={{ minHeight: "78.6vh" }}>
      <div className="div-barra">
        <BarraLateral />
      </div>
      <div className="container pt-3">
        <div className="d-flex mb-2 justify-content-center align-items-center">
          <div className="input-registro-search d-flex align-items-center pe-2">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre del arrendatario"
              aria-label="Nombre de usuario del destinatario"
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
            <PostRegistroModal getArrendatarios={getArrendatarios} />
          </div>
        </div>
        {/* aqui empieza la tabla  */}
        <table className="table tabla-get text-center">
          <thead>
            <tr>
              <th className="row-border-left" scope="col">
                #
              </th>
              <th scope="col">ID usuario</th>
              <th scope="col">Nombre</th>
              <th scope="col">Método de renta</th>
              <th scope="col">Extensión</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Nombre de usuario</th>
              <th scope="col">Correo</th>
              <th scope="col">Tipo de usuario</th>
              <th scope="col">Editar</th>
              <th className="row-border-right" scope="col">
                Borrar
              </th>
            </tr>
          </thead>
          <tbody>
            {ArrendatariosList.map((val, key) => {
              return (
                <tr key={key}>
                  <th className="row-border-left" scope="row">
                    {autoIncremento++}
                  </th>
                  {/* van los nombres de la base de datos en si */}
                  <td>{val.ID}</td>
                  <td>{val.nombre}</td>
                  <td>Metodo</td>
                  <td>Extension</td>
                  <td>{val.telefono}</td>
                  <td>Nombre de usuario</td>
                  <td>Correo</td>
                  <td>Tipo</td>
                  <td>
                    <i
                      type="button"
                      className="bi bi-pencil-square px-2 btn-update"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop-put"
                      onClick={() => {
                        EditarArrendatarios(val);
                      }}
                    />
                    <PutRegistroModal
                      values={{
                        IDUsuario: IDUsuario,
                        Nombre: Nombre,
                        Telefono: Telefono,
                      }}
                      getArrendatarios={getArrendatarios}
                    />
                  </td>
                  <td className="row-border-right">
                    <i
                      type="button"
                      onClick={() => {
                        eliminar({ val, getArrendatarios });
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
}

export default Registro;
