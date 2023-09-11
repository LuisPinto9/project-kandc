import Axios from "axios";

// const SaveLocalStorage = (key, item) => {
//   //conseguir elementos en localStorage
//   let elementos = JSON.parse(localStorage.getItem(key));
//   //comprar si es un array
//   if (Array.isArray(elementos)) {
//     elementos.push(item);
//   } else {
//     //crear array
//     elementos = [item];
//   }
//   //guardar en el localStorage
//   localStorage.setItem(key, JSON.stringify([elementos]));
// };

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
    throw error; // Lanza el error en caso de fallo en la solicitud
  }
};
