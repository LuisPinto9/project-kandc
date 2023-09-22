import Axios from "axios";
import { Swal } from "sweetalert2";

export const verificar = async (datos) => {
  try {
    const response = await Axios.post(
      "https://edificiokandc-7a4a0d2f7cde.herokuapp.com/login/credenciales",
      {
        NombreUsuario: datos.nombreUsuario,
        Contraseña: datos.contraseña,
      }
    );
    localStorage.setItem("auth", response.data.token);
    localStorage.setItem("id", response.data.id);
    localStorage.setItem("tipo", response.data.tipo);
    return response.data; // Devuelve los datos si la solicitud fue exitosa
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
