const db = require("../db");

const getRooms = (req, res) => {
  db.query("SELECT * FROM habitaciones", (err, result) => {
    if (err) {
      res.status(500).send("Hubo un error en el servidor");
    } else {
      res.send(result);
    }
  });
};

const createRoom = (req, res) => {
  const Id = req.body.Id;
  const Nombre = req.body.Nombre;
  const Estado = req.body.Estado;
  const Precio = req.body.Precio;
  const Zona = req.body.Zona;

  db.query(
    "insert into habitaciones(id, nombre, estado,precio, zonas) values(?,?,?,?,?)",
    [Id, Nombre, Estado, Precio, Zona],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send("Habitación registrada");
      }
    }
  );
};

const updateRoom = (req, res) => {
  const Id = req.body.Id;
  const Nombre = req.body.Nombre;
  const Estado = req.body.Estado;
  const Precio = req.body.Precio;
  const Zona = req.body.Zona;

  db.query(
    "update habitaciones set nombre=?,estado=?,precio=?,zonas=? where id=?",
    [Nombre, Estado, Precio, Zona, Id],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send("Habitación actualizada");
      }
    }
  );
};

const deleteRoom = (req, res) => {
  //aqui
  const Id = req.params.id;
  db.query("Delete from habitaciones where id=?", [Id], (err, result) => {
    if (err) {
      res.status(500).send("Hubo un error en el servidor");
    } else {
      res.send("Habitación eliminada");
    }
  });
};

module.exports = {
  getRooms,
  createRoom,
  updateRoom,
  deleteRoom,
};
