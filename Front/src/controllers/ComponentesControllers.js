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
      await Axios.delete(`http://localhost:3001/componentes/delete/${val.id}`, config);
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
    }
  } catch (error) {
    console.error("Error al eliminar componente:", error);
  }
};

/* traer la información de los arrendatarios */
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
