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
    "http://localhost:3001/habitaciones/create",
    {
      Id: datos.Id,
      Nombre: datos.Nombre,
      Estado: datos.Estado,
      Precio: datos.Precio,
      Zona: datos.Zona,
    },
    config
  ).then(() => {
    Swal.fire({
      title: "<strong>Registro exitoso</strong>",
      html:
        "<i>La habitación: <strong>" +
        datos.Nombre +
        "</strong> fue registrada</i>",
      icon: "success",
      timer: 2000,
    });
  });
};

export const update = (datos) => {
  Axios.put(
    "http://localhost:3001/habitaciones/update",
    {
      Id: datos.Id,
      Nombre: datos.Nombre,
      Estado: datos.Estado,
      Precio: datos.Precio,
      Zona: datos.Zona,
    },
    config
  ).then(() => {
    Swal.fire({
      title: "<strong>Actualización exitosa</strong>",
      html:
        "<i>La habitación: <strong>" +
        datos.Nombre +
        "</strong> fue actualizada</i>",
      icon: "success",
      timer: 2000,
    });
  });
};

export const eliminar = ({ val, getHabitaciones }) => {
  Swal.fire({
    title: "ELIMINAR",
    html:
      "<i>¿Desea eliminar la habitación <strong>" +
      val.nombre +
      "</strong>?</i>",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      /* aqui es donde se elimina */
      Axios.delete(
        `http://localhost:3001/habitaciones/delete/${val.id}`,
        config
      )
        .then(() => {
          getHabitaciones();
          Swal.fire({
            title: "<strong>Eliminación exitosa</strong>",
            html:
              "<i>La habitación: <strong>" +
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
export const habitaciones = async () => {
  try {
    const response = await Axios.get(
      "http://localhost:3001/habitaciones/get-habitaciones",
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return null;
  }
};
