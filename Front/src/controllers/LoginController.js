import Axios from "axios";

export const verificar = (datos) => {
  return new Promise((resolve, reject) => {
    Axios.post("http://localhost:3001/login/credenciales", {
      NombreUsuario: datos.nombreUsuario,
      Contraseña: datos.contraseña,
    })
      .then(({ data }) => {
        resolve(data); // Resuelve la promesa con los datos
      })
      .catch((error) => {
        reject(error); // Rechaza la promesa en caso de error
      });
  });
};
