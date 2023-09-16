import Axios from "axios";
import { Swal } from "sweetalert2";

export const verificar = async (datos) => {
  try {
    const response = await Axios.post(
      "http://localhost:4000/login/credenciales",
      {
        NombreUsuario: datos.nombreUsuario,
        Contraseña: datos.contraseña,
      }
    );
    localStorage.setItem("auth", response.data.token);
    localStorage.setItem("id", response.data.id);
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
