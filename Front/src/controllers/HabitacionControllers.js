import Axios from "axios";
import Swal from "sweetalert2";

export const add = async (datos) => {
  try {
    await Axios.post(
      "http://localhost:4000/habitaciones/create",
      {
        Id: datos.Id,
        Nombre: datos.Nombre,
        Estado: datos.Estado,
        Precio: datos.Precio,
        Zona: datos.Zona,
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
    console.error("Error al agregar habitación:", error);
  }
};

export const update = async (datos) => {
  try {
    await Axios.put(
      "http://localhost:4000/habitaciones/update",
      {
        Id: datos.Id,
        Nombre: datos.Nombre,
        Estado: datos.Estado,
        Precio: datos.Precio,
        Zona: datos.Zona,
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
    console.error("Error al actualizar habitación:", error);
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
        `http://localhost:4000/habitaciones/delete/${val.id}`,
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
    console.error("Error al eliminar habitación:", error);
  }
};

/* traer la información de las habitaciones */
export const habitaciones = async () => {
  try {
    const response = await Axios.get(
      "http://localhost:4000/habitaciones/get-habitaciones",
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos de las habitaciones:", error);
    return null;
  }
};

export const buscarHabitacion = async (nombreBuscar) => {
  try {
    const response = await Axios.get(
      `http://localhost:4000/habitaciones/find-habitacion/${nombreBuscar}`,
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos de la habitacion", error);
    return null;
  }
};
