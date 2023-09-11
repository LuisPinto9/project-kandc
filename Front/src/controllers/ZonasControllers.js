import Axios from "axios";
import Swal from "sweetalert2";

export const add = async (datos) => {
  try {
    await Axios.post(
      "http://localhost:4000/zonas/create",
      {
        Id: datos.Id,
        Nombre: datos.Nombre,
        Descripcion: datos.Descripcion,
        Precio: datos.Precio,
        Acceso: datos.Acceso,
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
      "http://localhost:4000/zonas/update",
      {
        Id: datos.Id,
        Nombre: datos.Nombre,
        Descripcion: datos.Descripcion,
        Precio: datos.Precio,
        Acceso: datos.Acceso,
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
      html:
        "<i>¿Desea eliminar la zona <strong>" + val.nombre + "</strong>?</i>",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    });

    if (result.isConfirmed) {
      await Axios.delete(`http://localhost:4000/zonas/delete/${val.id}`, {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      });
      await getZonas();

      Swal.fire({
        title: "<strong>Eliminación exitosa</strong>",
        html:
          "<i>La zona: <strong>" + val.nombre + "</strong> fue eliminada</i>",
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
    const response = await Axios.get("http://localhost:4000/zonas/get-zonas", {
      headers: {
        Authorization: localStorage.getItem("auth"),
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos de las zonas:", error);
    return null;
  }
};
