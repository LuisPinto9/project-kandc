import Axios from "axios";
import Swal from "sweetalert2";

const token = JSON.parse(localStorage.getItem("auth"));
const config = {
  headers: {
    Authorization: token,
  },
};

//aqui
export const add = (datos) => {
  Axios.post(
    "http://localhost:3001/zonas/create",
    {
      Id: datos.Id,
      Nombre: datos.Nombre,
      Descripcion: datos.Descripcion,
      Precio: datos.Precio,
      Acceso: datos.Acceso,
    },
    config
  ).then(() => {
    Swal.fire({
      title: "<strong>Registro exitoso</strong>",
      html:
        "<i>La zona: <strong>" + datos.Nombre + "</strong> fue registrada</i>",
      icon: "success",
      timer: 2000,
    });
  });
};

export const update = (datos) => {
  Axios.put(
    "http://localhost:3001/zonas/update",
    {
      Id: datos.Id,
      Nombre: datos.Nombre,
      Descripcion: datos.Descripcion,
      Precio: datos.Precio,
      Acceso: datos.Acceso,
    },
    config
  ).then(() => {
    Swal.fire({
      title: "<strong>Actualización exitosa</strong>",
      html:
        "<i>La zona: <strong>" + datos.Nombre + "</strong> fue actualizada</i>",
      icon: "success",
      timer: 2000,
    });
  });
};

export const eliminar = ({ val, getZonas }) => {
  Swal.fire({
    title: "ELIMINAR",
    html: "<i>¿Desea eliminar la zona <strong>" + val.nombre + "</strong>?</i>",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      /* aqui es donde se elimina */
      Axios.delete(`http://localhost:3001/zonas/delete/${val.id}`, config)
        .then(() => {
          getZonas();
          Swal.fire({
            title: "<strong>Eliminación exitosa</strong>",
            html:
              "<i>La zona: <strong>" +
              val.nombre +
              "</strong> fue eliminada</i>",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
        })
        .catch(function (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se pudo eliminar. Intente más tarde",
            showConfirmButton: false,
          });
        });
    }
  });
};

/* traer la infromacion de los arrendatarios */
export const zonas = async () => {
  try {
    const response = await Axios.get(
      "http://localhost:3001/zonas/get-zonas",
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return null;
  }
};
