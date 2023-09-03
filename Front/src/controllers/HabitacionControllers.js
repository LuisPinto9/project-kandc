import Axios from "axios";
import Swal from "sweetalert2";

//aqui
export const add = (datos) => {
  Axios.post("http://localhost:3001/Habitacion/create", {

 
  Id: datos.Id,
  Nombre: datos.Nombre,
  Estado: datos.Estado,
  Precio: datos.Precio,
  Zona: datos.Zona,

  

  }).then(() => {
    Swal.fire({
      title: "<strong>Registro exitoso</strong>",
      html:
        "<i>El arrendatario: <strong>" +
        datos.Nombre +
        "</strong> fue registrado</i>",
      icon: "success",
      timer: 2000,
    });
  });
};


export const update = (datos) => {
  Axios.put("http://localhost:3001/Habitacion/update", {
      Id: datos.Id,
  Nombre: datos.Nombre,
  Estado: datos.Estado,
  Precio:datos.Precio,
  Zona:datos.Zona,



  }).then(() => {
    Swal.fire({
      title: "<strong>Actualizacion exitosa</strong>",
      html:
        "<i>El arrendatario: <strong>" +
        datos.Nombre +
        "</strong> fue actualizado</i>",
      icon: "success",
      timer: 2000,
    });
  });
};

export const eliminar = ({ val, getHabitaciones }) => {
  Swal.fire({
    title: "ELIMINAR",
    html:
      "<i>Desea eliminar la habitacion <strong>" +
      val.nombre +
      "</strong> ?  </i>",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      /* aqui es donde se elimina */
      const Id = val.id;
      Axios.delete("http://localhost:3001/Habitacion/delete", {
        data: { Id: Id },
      })
        .then(() => {
            getHabitaciones();
          Swal.fire({
            title: "<strong>Eliminacion exitosa</strong>",
            html:
              "<i>El arrendatario: <strong>" +
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

/* traer la infromacion de los arrendatarios */
export const habitaciones = async () => {
  try {
    const response = await Axios.get(
      "http://localhost:3001/Habitacion/habitaciones"
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return null;
  }
};
