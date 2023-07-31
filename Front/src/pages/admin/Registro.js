import React, { useState, useEffect } from "react";
import BarraLateral from "../../components/BarraLateral";
import "../../css/styles.css";
import "../../css/registro.css";
import "../../css/tabla.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { arrendatarios, Eliminar } from "../../controllers/UserControllers";
import PostRegistroModal from "../../components/PostRegistroModal";
import PutRegistroModal from "../../components/PutRegistroModal";

function Registro() {
  /* datos de los arrendatarios */
  const [IDUsuario, setIDUsuario] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
  const [TypeUser, setTypeUser] = useState("");
  const [Identification, setIdentification] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const [PhoneNumber, setphoneNumber] = useState("");
  const [Gmail, setGmail] = useState("");
  const [LeaseDate, setLeaseDate] = useState("");
  const [State1, setState1] = useState("");
  const [registroSeleccionado, setRegistroSeleccionado] = useState("");
  const [ArrendatarioList, setArrendatario] = useState([]);

  const getArrendatario = () => {
    arrendatarios()
      .then((data) => {
        setArrendatario(data);
      })
      .catch((error) => {
        console.error("Error al obtener los arrendatarios:", error);
      });
  };

  const EditarArrendatarios = (val) => {
    setIDUsuario(val.ID);
    setNombre(val.nombre);
    setphoneNumber(val.telefono);
  };

  // const abrirModal = (id, name, telefono) => {
  //   setRegistroSeleccionado({ id, name, telefono });
  // };

  // const cerrarModal = () => {
  //   setRegistroSeleccionado(null);
  // };

  useEffect(() => {
    getArrendatario();
  }, []);

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
            <PostRegistroModal getArrendatario={getArrendatario} />
          </div>
        </div>
        {/* aqui empieza la tabla  */}
        <table className="table tabla-get text-center">
          <thead>
            <tr>
              <th className="row-border-left" scope="col">
                #
              </th>
              <th scope="col">ID Usuario</th>
              <th scope="col">Nombre</th>
              <th scope="col">Telefono</th>
              <th scope="col">Editar</th>
              <th className="row-border-right" scope="col">
                Borrar
              </th>
            </tr>
          </thead>
          <tbody>
            {ArrendatarioList.map((val, key) => {
              return (
                <tr key={key}>
                  <th className="row-border-left" scope="row">
                    {val.ID}
                  </th>
                  {/* van los nombres de la base de datos en si */}
                  <td>{val.ID}</td>
                  <td>{val.nombre}</td>
                  <td>{val.telefono}</td>
                  <td>
                    <i
                      type="button"
                      className="bi bi-pencil-square px-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                      style={{ fontSize: "2rem", color: "#ffd650" }}
                      onClick={() => {
                        EditarArrendatarios(val);
                      }}
                    />
                    <PutRegistroModal
                      values={{
                        IDUsuario: IDUsuario,
                        Nombre: Nombre,
                        PhoneNumber: PhoneNumber,
                      }}
                      getArrendatario={getArrendatario}
                    />
                  </td>
                  <td className="row-border-right">
                    <i
                      type="button"
                      onClick={() => {
                        Eliminar({ val, getArrendatario });
                      }}
                      className="bi bi-x-octagon-fill px-2"
                      style={{ fontSize: "2rem", color: "red" }}
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
