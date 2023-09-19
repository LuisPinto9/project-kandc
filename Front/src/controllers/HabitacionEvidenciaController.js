import Axios from "axios";
import Swal from "sweetalert2";

// Agregar una habitación evidencia
export const add = async (datos) => {
  console.log("entro a agregar evidencia nombre");
                    //console.log("controlerentro a agregar evidencia nombre noraml---",datos.Nombre2);
                    //console.log("controlerentro a agregar evidencia descripcion",datos.Descripcion);
                    //console.log("controlerentro a agregar evidencia id",datos.Id2);
  try {
    await Axios.post(
      "http://localhost:4000/habitaciones-evidencias/create",
      {
        
        Id2: datos.Id2,
        Nombre2: datos.Nombre2,
        Descripcion: datos.Descripcion,
        Url: datos.Url,
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
        "<i>La habitación evidencia: <strong>" +
        datos.Nombre2 +
        "</strong> fue registrada</i>",
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

// Actualizar una habitación evidencia
export const update = async (datos) => {
  console.log("actualizar---",datos.Nombre2);
                    console.log("actualizar",datos.Descripcion);
                    console.log("actualizar",datos.Id2);
  try {
    await Axios.put(
      "http://localhost:4000/habitaciones-evidencias/update",
      {
        Id2: datos.Id2,
        Nombre2: datos.Nombre2,
        Descripcion: datos.Descripcion,
        Url: datos.Url,
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
        "<i>La habitación evidencia: <strong>" +
        datos.Nombre2 +
        "</strong> fue actualizada</i>",
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


export const eliminar = async ({ val, getHabitacionesEvidencias }) => {
  try {
    const result = await Swal.fire({
      title: "ELIMINAR",
      html:
        "<i>¿Desea eliminar la habitación evidencia <strong>" +
        val.Nombre2 +
        "</strong>?</i>",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    });

    if (result.isConfirmed) {
      await Axios.delete(
        `http://localhost:4000/habitaciones-evidencias/delete/${val.Id2}`,
        {
          headers: {
            Authorization: localStorage.getItem("auth"),
          },
        }
      );
      await getHabitacionesEvidencias();

      Swal.fire({
        title: "<strong>Eliminación exitosa</strong>",
        html:
          "<i>La habitación evidencia: <strong>" +
          val.Nombre +
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

// Obtener información de las habitaciones evidencia
export const habitacionesEvidencia = async () => {
  try {
    const response = await Axios.get(
      "http://localhost:4000/habitaciones-evidencias/get-evidencias",
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

