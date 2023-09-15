const db = require("../db");

const getRoomLeased = (req, res) => {
  db.query("SELECT * FROM usuario_habitaciones", (err, result) => {
    if (err) {
      res.status(500).send("Hubo un error en el servidor");
    } else {
      res.send(result);
    }
  });
};

const createRoomLeased = (req, res) => {
  const id = req.body.id;
  const IDUsuario = req.body.IDUsuario;
  const IDHabitacion = req.body.IDHabitacion;

  db.query(
    "insert into usuario_habitaciones(id, id_usuario, id_habitaciones) values(?, ?, ?)",
    [id, IDUsuario, IDHabitacion],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send("Habitación del arrendatario registrada");
      }
    }
  );
};

const updateRoomLeased = (req, res) => {
  const id = req.body.id;
  const IDUsuario = req.body.IDUsuario;
  const IDHabitacion = req.body.IDHabitacion;

  db.query(
    "update usuario set id_usuario=?, id_habitaciones=? where id=?",
    [id, IDUsuario, IDHabitacion],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send("Habitacion arrendada actualizada");
      }
    }
  );
};

const deleteRoomLeased = (req, res) => {
  const id = req.params.id;
  db.query(
    "Delete from usuario_habitaciones where id=?",
    [id],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send("Habitacion arrendada eliminada");
      }
    }
  );
};

const findRoomLeasedById = (req, res) => {
  const id = req.params.idBuscar;
  db.query(
    "SELECT * FROM usuario_habitaciones WHERE id LIKE ? OR id LIKE ? OR id LIKE ?",
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

module.exports = {
  getRoomLeased,
  createRoomLeased,
  updateRoomLeased,
  deleteRoomLeased,
  findRoomLeasedById,
};
