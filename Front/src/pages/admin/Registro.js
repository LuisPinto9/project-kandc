import React, { useState, useEffect } from "react";
import BarraLateral from "../../components/BarraLateral";
import "../../css/styles.css";
import "../../css/registro.css";
import "../../css/tabla.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  arrendatarios,
  eliminar,
  buscarUsuario,
} from "../../controllers/UserControllers";
import UserForm from "../../components/UserModal";

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
  const [idBuscar, setIdBuscar] = useState("");
  const [buscarState, setBuscarState] = useState(false);

  const getArrendatarios = async () => {
    await arrendatarios()
      .then((data) => {
        setArrendatarios(data);
      })
      .catch((error) => {
        console.error("Error al obtener los arrendatarios:", error);
      });
  };

  const buscarId = async () => {
    try {
      await buscarUsuario(idBuscar).then((data) => {
        setArrendatarios(data);
      });
    } catch (error) {}
  };

  const EditarArrendatarios = (val) => {
    setIDUsuario(val.id);
    setNombre(val.nombre);
    setMetodoRenta(val.metodo_renta);
    setExtensionDias(val.extension_dias);
    setTelefono(val.telefono);
    setNombreUsuario(val.nombre_usuario);
    setContraseña(val.contraseña);
    setCorreo(val.correo);
    setTipoUsuario(val.tipo);
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
      <div className="container pt-3 col-sm-7 col-md-9 col-xl-10">
        <div className="d-flex mb-2 justify-content-center align-items-center">
          <div className="input-registro-search d-flex align-items-center pe-2">
            <input
              type="text"
              className="form-control"
              value={idBuscar}
              placeholder="Comienze a escribir números para filtrar los ID"
              aria-label="Id de usuario del destinatario"
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
                  getArrendatarios();
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
                  getArrendatarios();
                  setIdBuscar("");
                  setBuscarState(false);
                }}
              />
            )}
          </div>
          <div>
            {ArrendatariosList && (
              <UserForm
                modoEdicion={false} // Establece el modo de edición a false para agregar
                usuario={null} // Puedes pasar null o un objeto vacío para agregar
                getArrendatarios={getArrendatarios}
              />
            )}
            <i
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop-post"
              className="bi bi-plus-circle-fill btn-add"
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
                <th scope="col">ID usuario</th>
                <th scope="col">Nombre</th>
                <th scope="col">Método de renta</th>
                <th scope="col">Extensión</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Nombre de usuario</th>
                <th scope="col">Contraseña</th>
                <th scope="col">Correo</th>
                <th scope="col">Tipo de usuario</th>
                <th scope="col">Editar</th>
                <th className="row-border-right" scope="col">
                  Borrar
                </th>
              </tr>
            </thead>
            <tbody>
              {ArrendatariosList &&
                ArrendatariosList.map((val, key) => {
                  return (
                    <tr key={key}>
                      <th className="row-border-left" scope="row">
                        {autoIncremento++}
                      </th>
                      {/* van los nombres de la base de datos en si */}
                      <td>{val.id}</td>
                      <td>{val.nombre}</td>
                      <td>{val.metodo_renta}</td>
                      <td>{val.extension_dias}</td>
                      <td>{val.telefono}</td>
                      <td>{val.nombre_usuario}</td>
                      <td>{val.contraseña}</td>
                      <td>{val.correo}</td>
                      <td>{val.tipo}</td>
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
                        {/*  /aqui */}
                        <UserForm
                          modoEdicion={true} // Establece el modo de edición a true
                          usuario={{
                            IDUsuario: IDUsuario,
                            Nombre: Nombre,
                            MetodoRenta: MetodoRenta,
                            ExtensionDias: ExtensionDias,
                            Telefono: Telefono,
                            NombreUsuario: NombreUsuario,
                            Contraseña: Contraseña,
                            Correo: Correo,
                            TipoUsuario: TipoUsuario,
                          }}
                          getArrendatarios={getArrendatarios}
                        />
                      </td>
                      <td className="row-border-right">
                        <i
                          type="button"
                          onClick={async () => {
                            await eliminar({ val, getArrendatarios });
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
}

export default Registro;
