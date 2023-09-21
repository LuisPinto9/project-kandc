import Axios from "axios";
import Swal from "sweetalert2";

// Agregar una habitación evidencia
export const addEvidencia = async (datos, file) => {
  try {
    await Axios.post(
      "http://localhost:4000/componentes-evidencias/create",

      {
        id: datos.id,
        nombre: datos.nombre,
        descripcion: datos.descripcion,
        url: datos.url,
        componente: datos.componente,
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
        "<i>La habitación evidencia: <strong>" +
        datos.nombre +
        "</strong> fue registrada</i>",
      icon: "success",
      timer: 2000,
    });
    addFile(file);
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

export const addFile = async (file) => {
  if (file) {
    const formData = new FormData();
    formData.append("image", file);
    await Axios.post("http://localhost:4000/file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }); // Mensaje de éxito del servidor para la imagen
  }
};

// Actualizar una habitación evidencia
export const updateEvidencia = async (datos, file) => {
  try {
    await Axios.put(
      "http://localhost:4000/componentes-evidencias/update",
      {
        id: datos.id,
        nombre: datos.nombre,
        descripcion: datos.descripcion,
        url: datos.url,
        componente: datos.componente,
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
        "<i>La habitación evidencia: <strong>" +
        datos.nombre +
        "</strong> fue actualizada</i>",
      icon: "success",
      timer: 2000,
    });
    addFile(file);
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

export const eliminarEvidencia = async ({ val, getComponentesEvidencias }) => {
  try {
    const result = await Swal.fire({
      title: "ELIMINAR",
      html:
        "<i>¿Desea eliminar la habitación evidencia <strong>" +
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
        `http://localhost:4000/componentes-evidencias/delete/${val.id}`,
        {
          headers: {
            Authorization: localStorage.getItem("auth"),
          },
        }
      );
      await getComponentesEvidencias();
      Swal.fire({
        title: "<strong>Eliminación exitosa</strong>",
        html:
          "<i>La habitación evidencia: <strong>" +
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

// Obtener información de las componentes evidencia
export const componentesEvidencia = async () => {
  try {
    const response = await Axios.get(
      "http://localhost:4000/componentes-evidencias/get-evidencias",
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
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

export const buscarEvideciaComponente = async (idBuscar) => {
  try {
    const response = await Axios.get(
      `http://localhost:4000/componentes-evidencias/find-evidencias/${idBuscar}`,
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
