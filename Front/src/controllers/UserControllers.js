import Axios from "axios";
import Swal from "sweetalert2";

export const add = async (datos) => {
  try {
    await Axios.post(
      "http://localhost:4000/user/create",
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
    console.error("Error al agregar arrendatario:", error);
  }
};

export const update = async (datos) => {
  try {
    await Axios.put(
      "http://localhost:4000/user/update",
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
    console.error("Error al actualizar arrendatario:", error);
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
      await Axios.delete(`http://localhost:4000/user/delete/${val.id}`, {
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
    console.error("Error al eliminar arrendatario:", error);
  }
};

/* traer la información de los arrendatarios */
export const arrendatarios = async () => {
  try {
    const response = await Axios.get("http://localhost:4000/user/get-users", {
      headers: {
        Authorization: localStorage.getItem("auth"),
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos de arrendatarios:", error);
    return null;
  }
};

export const buscarUsuario = async (idBuscar) => {
  try {
    const response = await Axios.get(
      `http://localhost:4000/user/find-user/${idBuscar}`,
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos del arrendatario", error);
    return null;
  }
};
