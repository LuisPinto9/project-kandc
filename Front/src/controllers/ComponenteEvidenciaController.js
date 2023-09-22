import Axios from "axios";
import Swal from "sweetalert2";

// Agregar una habitación evidencia
export const addEvidencia = async (datos, file, getComponentesEvidencias) => {
  try {
    await Axios.post(
      "https://edificiokandc-7a4a0d2f7cde.herokuapp.com/componentes-evidencias/create",

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
        "<i>La evidencia del componente: <strong>" +
        datos.nombre +
        "</strong> fue registrada</i>",
      icon: "success",
      timer: 2000,
    });
    addFile(file);
    getComponentesEvidencias();
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

const addFile = async (file) => {
  try {
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      await Axios.post("https://edificiokandc-7a4a0d2f7cde.herokuapp.com/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  } catch (error) {}
};

// Actualizar una habitación evidencia
export const updateEvidencia = async (
  datos,
  file,
  nombreAnterior,
  getComponentesEvidencias
) => {
  try {
    await Axios.put(
      "https://edificiokandc-7a4a0d2f7cde.herokuapp.com/componentes-evidencias/update",
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
    updateFile(file, nombreAnterior);
    getComponentesEvidencias();
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

const updateFile = async (file, nombre) => {
  try {
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      await Axios.post(
        `https://edificiokandc-7a4a0d2f7cde.herokuapp.com/update-file/${nombre}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      ); // Mensaje de éxito del servidor para la imagen
    }
  } catch (error) {}
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
        `https://edificiokandc-7a4a0d2f7cde.herokuapp.com/componentes-evidencias/delete/${val.id}`,
        {
          headers: {
            Authorization: localStorage.getItem("auth"),
          },
        }
      );
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
      getComponentesEvidencias();
    }
    deleteFile(val.url);
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

const deleteFile = async (nombre) => {
  try {
    await Axios.delete(`https://edificiokandc-7a4a0d2f7cde.herokuapp.com/delete-file/${nombre}`);
  } catch (error) {}
};

// Obtener información de las componentes evidencia
export const componentesEvidencia = async () => {
  try {
    const response = await Axios.get(
      "https://edificiokandc-7a4a0d2f7cde.herokuapp.com/componentes-evidencias/get-evidencias",
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
      `https://edificiokandc-7a4a0d2f7cde.herokuapp.com/componentes-evidencias/find-evidencias/${idBuscar}`,
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
  }
};

export const getEvidenciaImage = async (nombre) => {
  try {
    const response = await Axios.get(
      `https://edificiokandc-7a4a0d2f7cde.herokuapp.com/get-file/${nombre}`,
      {
        responseType: "arraybuffer", // Esto indica a Axios que debe esperar una respuesta en formato binario
      }
    );
    return response.data; // Retorna los datos binarios de la imagen
  } catch (error) {
    throw error;
  }
};
