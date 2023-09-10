const jwt = require("jwt-simple");
const moment = require("moment");
require("dotenv").config();

// Clave secreta para la generación de tokens
const secret = process.env.SECRET; // Deberías almacenar esto de forma segura

// Función para generar un token JWT
const createToken = (user) => {
  // Configuración del payload del token
  const payload = {
    id: user.id, // Puedes personalizar los campos del payload según tus necesidades
    iat: moment().unix(), // Fecha de emisión del token (timestamp UNIX)
    exp: moment().add(1, "days").unix(), // Fecha de expiración del token (1 día a partir de la emisión)
  };

  // Devuelve el token codificado
  return jwt.encode(payload, secret);
};

module.exports = {
  secret, // Exporta la clave secreta para su uso en otros lugares de tu aplicación
  createToken, // Exporta la función para generar tokens
};
