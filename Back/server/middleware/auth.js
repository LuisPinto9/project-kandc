const jwt = require("jwt-simple");
const moment = require("moment");
const libjwt = require("./jwt");

const secret = libjwt.secret;

const auth = (req, res, next) => {
  // Verifica si llega la cabecera de autenticación
  if (!req.headers.authorization) {
    return res.status(403).json({
      status: "error",
      message: "La petición no tiene la cabecera de autenticación",
    });
  }

  // Limpia el token
  const token = req.headers.authorization.replace(/['"]+/g, "");

  // Decodifica el token y maneja errores
  try {
    const payload = jwt.decode(token, secret);

    // Comprueba la expiración del token
    if (payload.exp <= moment().unix()) {
      return res.status(404).json({
        status: "error",
        message: "Token expirado",
      });
    }

    // Agrega los datos del usuario a la solicitud
    req.user = payload;

    // Continúa con la ejecución de la acción
    next();
  } catch (error) {
    return res.status(404).json({
      status: "error",
      message: "Token inválido",
      error: error.message, // Proporciona detalles del error
    });
  }
};

module.exports ={
  auth
}
