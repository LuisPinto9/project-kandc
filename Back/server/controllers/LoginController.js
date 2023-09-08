const db = require("../db");

const getUser = (req, res) => {
  const NombreUsuario = req.body.NombreUsuario;
  const Contraseña = req.body.Contraseña;

  db.query(
    "select * from usuario where nombre_usuario = ? and contraseña= ?",
    [NombreUsuario, Contraseña],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        if (result.length > 0) {
          res.status(200).send({
            id: result[0].id,
            nombre: result[0].nombre,
            tipo: result[0].tipo,
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
