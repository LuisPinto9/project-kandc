import Axios from "axios";
import Swal from "sweetalert2";

export const add = async (datos) => {
  try {
    await Axios.post(
      "https://edificiokandc-7a4a0d2f7cde.herokuapp.com/habitaciones/create",
      {
        Id: datos.Id,
        Nombre: datos.Nombre,
        Estado: datos.Estado,
        Precio: datos.Precio,
        Zona: datos.Zona,
        IdUsuarios: datos.IdUsuarios,
      },
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );

    Swal.fire({
      title: "<strong>Registro exitoso</strong>",
      html:
        "<i>La habitación: <strong>" +
        datos.Nombre +
        "</strong> fue registrada</i>",
      icon: "success",
      timer: 2000,
    });
  } catch (error) {
    Swal.fire({
      title: "Error al registrar los datos",
      text: "Por favor intentelo más tarde.",
      icon: "error",
      showCancelButton: false,
      confirmButtonText: "Aceptar",
    });
  }
};

export const update = async (datos) => {
  try {
    await Axios.put(
      "https://edificiokandc-7a4a0d2f7cde.herokuapp.com/habitaciones/update",
      {
        Id: datos.Id,
        Nombre: datos.Nombre,
        Estado: datos.Estado,
        Precio: datos.Precio,
        Zona: datos.Zona,
        IdUsuarios: datos.IdUsuarios,
      },
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );

    Swal.fire({
      title: "<strong>Actualización exitosa</strong>",
      html:
        "<i>La habitación: <strong>" +
        datos.Nombre +
        "</strong> fue actualizada</i>",
      icon: "success",
      timer: 2000,
    });
  } catch (error) {
    Swal.fire({
      title: "Error al actualizar el registro",
      text: "Por favor intentelo más tarde.",
      icon: "error",
      showCancelButton: false,
      confirmButtonText: "Aceptar",
    });
  }
};

export const eliminar = async ({ val, getHabitaciones }) => {
  try {
    const result = await Swal.fire({
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
    });

    if (result.isConfirmed) {
      await Axios.delete(
        `https://edificiokandc-7a4a0d2f7cde.herokuapp.com/habitaciones/delete/${val.id}`,
        {
          headers: {
            Authorization: localStorage.getItem("auth"),
          },
        }
      );
      await getHabitaciones();

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
    }
  } catch (error) {
    Swal.fire({
      title: "Error al eliminar el registro",
      text: "Por favor intentelo más tarde.",
      icon: "error",
      showCancelButton: false,
      confirmButtonText: "Aceptar",
    });
  }
};

/* traer la información de las habitaciones */
export const habitaciones = async () => {
  try {
    const response = await Axios.get(
      "https://edificiokandc-7a4a0d2f7cde.herokuapp.com/habitaciones/get-habitaciones",
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error al obtener los datos",
      text: "Por favor intente ingresar más tarde.",
      icon: "error",
      showCancelButton: false,
      confirmButtonText: "Aceptar",
    });
    return null;
  }
};

export const buscarHabitacion = async (nombreBuscar) => {
  try {
    const response = await Axios.get(
      `https://edificiokandc-7a4a0d2f7cde.herokuapp.com/habitaciones/find-habitacion/${nombreBuscar}`,
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error al obtener los datos",
      text: "Por favor intente ingresar más tarde.",
      icon: "error",
      showCancelButton: false,
      confirmButtonText: "Aceptar",
    });
    return null;
  }
};
