import Axios from "axios";
import Swal from "sweetalert2";

export const add = async (datos) => {
  try {
    await Axios.post(
      "http://localhost:4000/componentes/create",
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
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );

    Swal.fire({
      title: "<strong>Registro exitoso</strong>",
      html:
        "<i>El componente: <strong>" +
        datos.Nombre +
        "</strong> fue registrado</i>",
      icon: "success",
      timer: 2000,
    });
  } catch (error) {
    console.error("Error al agregar componente:", error);
  }
};

export const update = async (datos) => {
  try {
    await Axios.put(
      "http://localhost:4000/componentes/update",
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
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );

    Swal.fire({
      title: "<strong>Actualización exitosa</strong>",
      html:
        "<i>El componente: <strong>" +
        datos.Nombre +
        "</strong> fue actualizado</i>",
      icon: "success",
      timer: 2000,
    });
  } catch (error) {
    console.error("Error al actualizar componente:", error);
  }
};

export const eliminar = async ({ val, getComponentes }) => {
  try {
    const result = await Swal.fire({
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
    });

    if (result.isConfirmed) {
      // Hacer la solicitud DELETE con el ID en la URL
      await Axios.delete(`http://localhost:4000/componentes/delete/${val.id}`, {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      });
      await getComponentes();

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
    }
  } catch (error) {
    console.error("Error al eliminar componente:", error);
  }
};

/* traer la información de los arrendatarios */
export const componentes = async () => {
  try {
    const response = await Axios.get(
      "http://localhost:4000/componentes/get-componentes",
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return null;
  }
};

export const buscarComponente = async (nombreBuscar) => {
  try {
    const response = await Axios.get(
      `http://localhost:4000/componentes/find-componente/${nombreBuscar}`,
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos del componente", error);
    return null;
  }
};
