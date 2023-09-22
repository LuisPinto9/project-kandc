import Axios from "axios";
import Swal from "sweetalert2";

export const add = async (datos) => {
  try {
    await Axios.post(
      "https://edificiokandc-7a4a0d2f7cde.herokuapp.com/user/create",
      {
        IDUsuario: datos.IDUsuario,
        Nombre: datos.Nombre,
        MetodoRenta: datos.MetodoRenta,
        ExtensionDias: datos.ExtensionDias,
        Telefono: datos.Telefono,
        NombreUsuario: datos.NombreUsuario,
        Contraseña: datos.Contraseña,
        Correo: datos.Correo,
        TipoUsuario: datos.TipoUsuario,
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
        "<i>El arrendatario: <strong>" +
        datos.Nombre +
        "</strong> fue registrado</i>",
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
      "https://edificiokandc-7a4a0d2f7cde.herokuapp.com/user/update",
      {
        IDUsuario: datos.IDUsuario,
        Nombre: datos.Nombre,
        MetodoRenta: datos.MetodoRenta,
        ExtensionDias: datos.ExtensionDias,
        Telefono: datos.Telefono,
        NombreUsuario: datos.NombreUsuario,
        Contraseña: datos.Contraseña,
        Correo: datos.Correo,
        TipoUsuario: datos.TipoUsuario,
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
        "<i>El arrendatario: <strong>" +
        datos.Nombre +
        "</strong> fue actualizado</i>",
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

export const eliminar = async ({ val, getArrendatarios }) => {
  try {
    const result = await Swal.fire({
      title: "ELIMINAR",
      html:
        "<i>¿Desea eliminar al usuario <strong>" +
        val.nombre +
        "</strong>?</i>",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    });
    if (result.isConfirmed) {
      await Axios.delete(`https://edificiokandc-7a4a0d2f7cde.herokuapp.com/user/delete/${val.id}`, {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      });
      await getArrendatarios();
      Swal.fire({
        title: "<strong>Eliminación exitosa</strong>",
        html:
          "<i>El arrendatario: <strong>" +
          val.nombre +
          "</strong> fue eliminado</i>",
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

/* traer la información de los arrendatarios */
export const arrendatarios = async () => {
  try {
    const response = await Axios.get("https://edificiokandc-7a4a0d2f7cde.herokuapp.com/user/get-users", {
      headers: {
        Authorization: localStorage.getItem("auth"),
      },
    });
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

export const buscarUsuario = async (idBuscar) => {
  try {
    const response = await Axios.get(
      `https://edificiokandc-7a4a0d2f7cde.herokuapp.com/user/find-users/${idBuscar}`,
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

export const buscarUsuarioId = async (idBuscar) => {
  try {
    const response = await Axios.get(
      `https://edificiokandc-7a4a0d2f7cde.herokuapp.com/user/find-user-id/${idBuscar}`,
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
