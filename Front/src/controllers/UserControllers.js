import Axios from "axios";
import Swal from "sweetalert2";

const token = JSON.parse(localStorage.getItem("auth"));
const config = {
  headers: {
    Authorization: token,
  },
};

//aqui
export const add = (datos) => {
  Axios.post(
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
  ).then(() => {
    Swal.fire({
      title: "<strong>Registro exitoso</strong>",
      html:
        "<i>El arrendatario: <strong>" +
        datos.Nombre +
        "</strong> fue registrado</i>",
      icon: "success",
      timer: 2000,
    });
  });
};

export const update = (datos) => {
  Axios.put(
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
  ).then(() => {
    Swal.fire({
      title: "<strong>Actualización exitosa</strong>",
      html:
        "<i>El arrendatario: <strong>" +
        datos.Nombre +
        "</strong> fue actualizado</i>",
      icon: "success",
      timer: 2000,
    });
  });
};

export const eliminar = ({ val, getArrendatarios }) => {
  Swal.fire({
    title: "ELIMINAR",
    html:
      "<i>¿Desea eliminar al usuario <strong>" + val.nombre + "</strong>?</i>",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      /* aqui es donde se elimina */
      Axios.delete(`http://localhost:3001/user/delete/${val.id}`, config)
        .then(() => {
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
        })
        .catch(function (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se pudo eliminar. Intente más tarde",
            showConfirmButton: false,
          });
        });
    }
  });
};

/* traer la infromacion de los arrendatarios */
export const arrendatarios = async () => {
  try {
    const response = await Axios.get(
      "http://localhost:3001/user/get-users",
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return null;
  }
};
