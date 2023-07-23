const db = require("../db");

const getUsers = (req, res) => {
  db.query("SELECT * FROM arrendatario1", (err, result) => {
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
  const PhoneNumber = req.body.PhoneNumber;
  db.query(
    "insert into Arrendatario1(ID,nombre,telefono) values(?,?,?)",
    [IDUsuario, Nombre, PhoneNumber],
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
  const PhoneNumber = req.body.PhoneNumber;
  db.query(
    /*  "update  Arrendatario1 set(ID,nombre,telefono) values(?,?,?)" where ID=?", */
    "update Arrendatario1 set nombre=?,telefono=? where ID=?",
    /*  "update Arrendatario1 set(ID,nombre,telefono) values(?,?,?) where ID=?",*/
    [Nombre, PhoneNumber, IDUsuario],
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
  const IDUsuario = req.body.IDUsuario;
  db.query(
    "Delete from Arrendatario1 where ID=?",
    [IDUsuario],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send("Arrendatario eliminado");
      }
    }
  );
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
