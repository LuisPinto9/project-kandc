const db = require("../db");
const jwt = require("../middleware/jwt");

const getUser = (req, res) => {
  const NombreUsuario = req.body.NombreUsuario;
  const Contraseña = req.body.Contraseña;

  if (!NombreUsuario || !Contraseña) {
    return res.status(400).send({
      status: "error",
      message: "Faltan datos por enviar",
    });
  }
  db.query(
    "select id, nombre_usuario, contraseña, tipo from usuario where nombre_usuario = ? and contraseña= ?",
    [NombreUsuario, Contraseña],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        if (result.length > 0) {
          const formattedData = {
            id: result[0].id,
            nombre_usuario: result[0].nombre_usuario,
            contraseña: result[0]["contraseña"],
            tipo: result[0].tipo,
          };
          const token = jwt.createToken(formattedData);
          res.status(200).send({
            id: result[0].id,
            nombre: result[0].nombre,
            tipo: result[0].tipo,
            token: token,
          });
        } else {
          res.status(400).send("Usuario no existe");
        }
      }
    }
  );
};

module.exports = {
  getUser,
};
