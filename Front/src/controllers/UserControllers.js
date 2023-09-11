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
      "http://localhost:3001/user/create",
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
      config
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
    console.error("Error al agregar arrendatario:", error);
  }
};

export const update = async (datos) => {
  try {
    await Axios.put(
      "http://localhost:3001/user/update",
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
      config
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
    console.error("Error al actualizar arrendatario:", error);
  }
};

export const eliminar = async ({ val, getArrendatarios }) => {
  try {
    const result = await Swal.fire({
      title: "ELIMINAR",
      html:
        "<i>¿Desea eliminar al usuario <strong>" + val.nombre + "</strong>?</i>",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    });
    if (result.isConfirmed) {
      await Axios.delete(`http://localhost:3001/user/delete/${val.id}`, config);
      getArrendatarios();

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
    console.error("Error al eliminar arrendatario:", error);
  }
};

/* traer la información de los arrendatarios */
export const arrendatarios = async () => {
  try {
    const response = await Axios.get(
      "http://localhost:3001/user/get-users",
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos de arrendatarios:", error);
    return null;
  }
};

export const buscarUsuario = async (idBuscar) => {
  try {
    const response = await Axios.get(
      `http://localhost:3001/user/find-user/${idBuscar}`,
      config
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos del arrendatario", error);
    return null;
  }
};
