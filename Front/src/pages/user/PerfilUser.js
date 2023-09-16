import React, { useEffect, useState } from "react";
import BarraLateral from "../../components/BarraLateral";
import "../../css/perfil.css";
import { buscarUsuarioId } from "../../controllers/UserControllers";
import { getRooms } from "../../controllers/UserRoomsControllers";

const PerfilUser = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState("");
  const [value, setValue] = useState("");

  const obtenerInformacionArrendatario = async () => {
    try {
      const data = await buscarUsuarioId(parseInt(localStorage.getItem("id")));
      if (data) {
        setNombreUsuario(data[0].nombre_usuario);
        setNombre(data[0].nombre);
        setIdentificacion(data[0].id);
        setTelefono(data[0].telefono);
        setEmail(data[0].correo);
      } else {
        console.error("No se encontraron datos del arrendatario.");
      }
    } catch (error) {
      console.error("Error al obtener los datos del arrendatario", error);
    }
  };

  const calcularValorArriendo = async () => {
    let precioTotal = 0;
    try {
      const data = await getRooms();
      data.forEach((room) => {
        precioTotal += room.precio;
      });
    } catch (error) {
      // Manejo de errores aquí
    }
    // Formatear el precioTotal como una cadena con separadores de miles
    const precioTotalFormateado = precioTotal.toLocaleString();
    // Agregar el símbolo de dólar
    const precioTotalConDolar = "$" + precioTotalFormateado;
    setValue(precioTotalConDolar);
  };
  

  const estadoArriendo = async () => {
    try {
      const data = await getRooms();
      // Verificar si data no está vacío
      if (data && data.length > 0) {
        setEstado("Arrendador activo");
      } else {
        setEstado("Arrendador inactivo");
      }
    } catch (error) {
      // Manejo de errores aquí
    }
  };

  useEffect(() => {
    obtenerInformacionArrendatario();
    calcularValorArriendo();
    estadoArriendo();
  }, []);

  return (
    <div className="d-flex" style={{ minHeight: "78.6vh" }}>
      <div className="div-barra">
        <BarraLateral />
      </div>
      <div className="d-flex flex-row flex-wrap" style={{ width: "100%" }}>
        <div style={{ width: "62%" }}>
          <div className="d-flex flex-column">
            <div className="mb-2 pt-4 pb-2 d-flex">
              <div className="info-div ps-5">
                <label className="mb-2">Nombre de usuario</label>
                <div className="form-control">
                  {nombreUsuario ? nombreUsuario : "Cargando..."}
                </div>
              </div>
              <div className="info-div ps-5">
                <label className="mb-2">Identificación</label>
                <div className="form-control">
                  {identificacion ? identificacion : "Cargando..."}
                </div>
              </div>
            </div>
            <div className="info-div1 ps-5">
              <label className="mb-2">Nombre</label>
              <div className="form-control">
                {nombre ? nombre : "Cargando..."}
              </div>
            </div>
            <div className="mb-2 py-3 d-flex">
              <div className="info-div ps-5">
                <label className="mb-2">Teléfono</label>
                <div className="form-control">
                  {telefono ? telefono : "Cargando..."}
                </div>
              </div>
              <div className="info-div ps-5">
                <label className="mb-2">Correo electrónico</label>
                <div className="form-control">
                  {email ? email : "Cargando..."}
                </div>
              </div>
            </div>
            <div className="mb-4 d-flex">
              <div className="info-div ps-5">
                <label className="mb-2">Estado</label>
                <div className="form-control">
                  {estado ? estado : "Cargando..."}
                </div>
              </div>
              <div className="info-div ps-5">
                <label className="mb-2">Valor del arriendo</label>
                <div className="form-control">
                  {value ? value : "Cargando..."}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex ms-5 mt-4 div-foto-grande justify-content-center align-items-center">
          <div className="py-3 px-5">
            <i className="bi bi-person-fill" style={{ fontSize: "12rem" }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilUser;
