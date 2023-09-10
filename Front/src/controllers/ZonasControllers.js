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
      "http://localhost:3001/zonas/create",
      {
        Id: datos.Id,
        Nombre: datos.Nombre,
        Descripcion: datos.Descripcion,
        Precio: datos.Precio,
        Acceso: datos.Acceso,
      },
      config
    );

    Swal.fire({
      title: "<strong>Registro exitoso</strong>",
      html:
        "<i>La zona: <strong>" + datos.Nombre + "</strong> fue registrada</i>",
      icon: "success",
      timer: 2000,
    });
  } catch (error) {
    console.error("Error al agregar zona:", error);
  }
};

export const update = async (datos) => {
  try {
    await Axios.put(
      "http://localhost:3001/zonas/update",
      {
        Id: datos.Id,
        Nombre: datos.Nombre,
        Descripcion: datos.Descripcion,
        Precio: datos.Precio,
        Acceso: datos.Acceso,
      },
      config
    );

    Swal.fire({
      title: "<strong>Actualización exitosa</strong>",
      html:
        "<i>La zona: <strong>" + datos.Nombre + "</strong> fue actualizada</i>",
      icon: "success",
      timer: 2000,
    });
  } catch (error) {
    console.error("Error al actualizar zona:", error);
  }
};

export const eliminar = async ({ val, getZonas }) => {
  try {
    const result = await Swal.fire({
      title: "ELIMINAR",
      html: "<i>¿Desea eliminar la zona <strong>" + val.nombre + "</strong>?</i>",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    });

    if (result.isConfirmed) {
      await Axios.delete(`http://localhost:3001/zonas/delete/${val.id}`, config);
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
    }
  } catch (error) {
    console.error("Error al eliminar zona:", error);
  }
};

/* traer la información de las zonas */
export const zonas = async () => {
  try {
    const response = await Axios.get(
      "http://localhost:3001/zonas/get-zonas",
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos de las zonas:", error);
    return null;
  }
};
