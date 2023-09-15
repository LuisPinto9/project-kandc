const db = require("../db");

const getUsers = (req, res) => {
  db.query("SELECT * FROM usuario", (err, result) => {
    if (err) {
      res.status(500).send("Hubo un error en el servidor");
    } else {
      res.send(result);
    }
  });
};

const createUser = (req, res) => {
  const IDUsuario = req.body.IDUsuario;
  const Nombre = req.body.Nombre;
  const MetodoRenta = req.body.MetodoRenta;
  const ExtensionDias = req.body.ExtensionDias;
  const Telefono = req.body.Telefono;
  const NombreUsuario = req.body.NombreUsuario;
  const Contraseña = req.body.Contraseña;
  const Correo = req.body.Correo;
  const TipoUsuario = req.body.TipoUsuario;

  /*   //validar
   const nombreValidationRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
   if (!nombreValidationRegex.test(Nombre) || Nombre.length < 3) {
     res.status(400).send("Nombre no cumple con los requisitos");
     return;
   }
   //validar */

  db.query(
    "insert into usuario(id,nombre,metodo_renta,extension_dias,telefono,nombre_usuario,contraseña,correo,tipo) values(?,?,?,?,?,?,?,?,?)",
    [
      IDUsuario,
      Nombre,
      MetodoRenta,
      ExtensionDias,
      Telefono,
      NombreUsuario,
      Contraseña,
      Correo,
      TipoUsuario,
    ],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send("Arrendatario registrado");
      }
    }
  );
};

const updateUser = (req, res) => {
  const IDUsuario = req.body.IDUsuario;
  const Nombre = req.body.Nombre;
  const MetodoRenta = req.body.MetodoRenta;
  const ExtensionDias = req.body.ExtensionDias;
  const Telefono = req.body.Telefono;
  const NombreUsuario = req.body.NombreUsuario;
  const Contraseña = req.body.Contraseña;
  const Correo = req.body.Correo;
  const TipoUsuario = req.body.TipoUsuario;

  db.query(
    "update usuario set nombre=?,metodo_renta=?,extension_dias=?,telefono=?,nombre_usuario=?,contraseña=?,correo=?,tipo=? where id=?",
    [
      Nombre,
      MetodoRenta,
      ExtensionDias,
      Telefono,
      NombreUsuario,
      Contraseña,
      Correo,
      TipoUsuario,
      IDUsuario,
    ],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send("Arrendatario actualizado");
      }
    }
  );
};

const deleteUser = (req, res) => {
  const IDUsuario = req.params.IDUsuario;
  db.query("Delete from usuario where id=?", [IDUsuario], (err, result) => {
    if (err) {
      res.status(500).send("Hubo un error en el servidor");
    } else {
      res.send("Arrendatario eliminado");
    }
  });
};

const findById = (req, res) => {
  const id = req.params.idBuscar;
  db.query(
    "SELECT * FROM usuario WHERE id LIKE ? OR id LIKE ? OR id LIKE ?",
    [`%${id}`, `%${id}%`, `${id}%`],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send(result);
      }
    }
  );
};

const findByUser = (req, res) => {
  const id = req.params.idBuscar;
  db.query(
    "SELECT * FROM usuario WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send(result);
      }
    }
  );
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  findById,
  findByUser,
};
