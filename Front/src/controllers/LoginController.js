import Axios from "axios";

export const verificar = async (datos) => {
  try {
    const response = await Axios.post("http://localhost:3001/login/credenciales", {
      NombreUsuario: datos.nombreUsuario,
      Contraseña: datos.contraseña,
    });
    return response.data; // Devuelve los datos si la solicitud fue exitosa
  } catch (error) {
    throw error; // Lanza el error en caso de fallo en la solicitud
  }
};
