import Axios from "axios";
import Swal from "sweetalert2";

const token = JSON.parse(localStorage.getItem("auth"));
const config = {
  headers: {
    Authorization: token,
  },
};

export const add = async (datos) => {
  try {
    await Axios.post(
      "http://localhost:3001/habitaciones/create",
      {
        Id: datos.Id,
        Nombre: datos.Nombre,
        Estado: datos.Estado,
        Precio: datos.Precio,
        Zona: datos.Zona,
      },
      config
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
      "http://localhost:3001/habitaciones/update",
      {
        Id: datos.Id,
        Nombre: datos.Nombre,
        Estado: datos.Estado,
        Precio: datos.Precio,
        Zona: datos.Zona,
      },
      config
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
        `http://localhost:3001/habitaciones/delete/${val.id}`,
        config
      );
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
    }
  } catch (error) {
    console.error("Error al eliminar habitación:", error);
  }
};

/* traer la información de las habitaciones */
export const habitaciones = async () => {
  try {
    const response = await Axios.get(
      "http://localhost:3001/habitaciones/get-habitaciones",
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos de las habitaciones:", error);
    return null;
  }
};
