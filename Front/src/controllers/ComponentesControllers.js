import Axios from "axios";
import Swal from "sweetalert2";

const token = JSON.parse(localStorage.getItem("auth"));
const config = {
  headers: {
    Authorization: token,
  },
};

export const add = (datos) => {
  Axios.post(
    "http://localhost:3001/componentes/create",
    {
      Id: datos.Id,
      Nombre: datos.Nombre,
      Marca: datos.Marca,
      Cantidad: datos.Cantidad,
      Costo: datos.Costo,
      Estado: datos.Estado,
      Descripcion: datos.Descripcion,
      Observacion: datos.Observacion,
      Habitacion: datos.Habitacion,
    },
    config
  ).then(() => {
    Swal.fire({
      title: "<strong>Registro exitoso</strong>",
      html:
        "<i>El componente: <strong>" +
        datos.Nombre +
        "</strong> fue registrado</i>",
      icon: "success",
      timer: 2000,
    });
  });
};

export const update = (datos) => {
  Axios.put(
    "http://localhost:3001/componentes/update",
    {
      Id: datos.Id,
      Nombre: datos.Nombre,
      Marca: datos.Marca,
      Cantidad: datos.Cantidad,
      Costo: datos.Costo,
      Estado: datos.Estado,
      Descripcion: datos.Descripcion,
      Observacion: datos.Observacion,
      Habitacion: datos.Habitacion,
    },
    config
  ).then(() => {
    Swal.fire({
      title: "<strong>Actualización exitosa</strong>",
      html:
        "<i>El componente: <strong>" +
        datos.Nombre +
        "</strong> fue actualizado</i>",
      icon: "success",
      timer: 2000,
    });
  });
};

export const eliminar = ({ val, getComponentes }) => {
  Swal.fire({
    title: "ELIMINAR",
    html:
      "<i>¿Desea eliminar el componente <strong>" +
      val.nombre +
      "</strong>?</i>",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      // Hacer la solicitud DELETE con el ID en la URL
      Axios.delete(`http://localhost:3001/componentes/delete/${val.id}`, config)
        .then(() => {
          getComponentes();
          Swal.fire({
            title: "<strong>Eliminación exitosa</strong>",
            html:
              "<i>El componente: <strong>" +
              val.nombre +
              "</strong> fue eliminado</i>",
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

/* traer la informacion de los arrendatarios */
export const componentes = async () => {
  try {
    const response = await Axios.get(
      "http://localhost:3001/componentes/get-componentes",
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return null;
  }
};
