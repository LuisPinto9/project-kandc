const jwt = require("jwt-simple");
const moment = require("moment");

// Importar clave secreta desde una configuración segura
const config = require("../services/jwt"); // Asegúrate de tener un archivo de configuración seguro
const secret = config.secret;

// Función de autenticación
exports.auth = (req, res, next) => {
  // Comprobar si llega la cabecera de autenticación
  if (!req.headers.authorization) {
    return res.status(401).json({
      status: "error",
      message: "La petición no tiene la cabecera de autenticación",
    });
  }

  // Limpiar el token
  const token = req.headers.authorization.replace(/['"]+/g, "");

  // Decodificar el token y manejar errores
  try {
    const payload = jwt.decode(token, secret);

    // Comprobar la expiración del token
    if (payload.exp <= moment().unix()) {
      return res.status(401).json({
        status: "error",
        message: "Token expirado",
      });
    }

    // Agregar los datos de usuario a la solicitud
    req.user = payload;

    // Continuar con la ejecución de la acción
    next();
  } catch (error) {
    return res.status(401).json({
      status: "error",
      message: "Token inválido",
      error: error.message, // Proporcionar detalles del error
    });
  }
};
