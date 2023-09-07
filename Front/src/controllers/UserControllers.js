import Axios from "axios";
import Swal from "sweetalert2";

//aqui
export const add = (datos) => {
  Axios.post("http://localhost:3001/user/create", {

  IDUsuario:  datos.IDUsuario,
  Nombre:  datos.Nombre,
  
  
  MetodoRenta:  datos.MetodoRenta,
  ExtensionDias:  datos.ExtensionDias,
  Telefono:  datos.Telefono,
  NombreUsuario:  datos.NombreUsuario,
  Contraseña: datos.Contraseña,
  Correo:  datos.Correo,
  TipoUsuario: datos.TipoUsuario,

  }).then(() => {
    Swal.fire({
      title: "<strong>Registro exitoso</strong>",
      html:
        "<i>El arrendatario: <strong>" +
        datos.Nombre +
        "</strong> fue registrado</i>",
      icon: "success",
      timer: 2000,
    });
    //validacion
  }).catch((error) => {
    if (error.response && error.response.status === 400 && error.response.data && error.response.data.error) {
      Swal.fire({
        title: "Error de validación",
        html: error.response.data.error,
        icon: "error",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error. Intente más tarde",
      });
    }
  });





};



export const update = (datos) => {
  Axios.put("http://localhost:3001/user/update", {
    IDUsuario:  datos.IDUsuario,
    Nombre:  datos.Nombre,
    MetodoRenta:  datos.MetodoRenta,
    
    ExtensionDias:  datos.ExtensionDias,
    Telefono:  datos.Telefono,
    NombreUsuario:  datos.NombreUsuario,
    Contraseña: datos.Contraseña,
    Correo:  datos.Correo,
    TipoUsuario: datos.TipoUsuario,


  }).then(() => {
    Swal.fire({
      title: "<strong>Actualizacion exitosa</strong>",
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
      "<i>Desea eliminar al usuario <strong>" +
      val.nombre +
      "</strong> ?  </i>",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      /* aqui es donde se elimina */
      const IDUsuario = val.id;
      Axios.delete("http://localhost:3001/user/delete", {
        data: { IDUsuario: IDUsuario },
      })
        .then(() => {
          getArrendatarios();
          Swal.fire({
            title: "<strong>Eliminacion exitosa</strong>",
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
      "http://localhost:3001/user/arrendatarios"
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return null;
  }
};
