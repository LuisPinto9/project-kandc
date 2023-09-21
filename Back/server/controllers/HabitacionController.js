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
  const IdUsuarios = req.body.IdUsuarios;
  db.query(
    "insert into habitaciones(id, nombre, estado,precio, zonas, idUsuarios) values(?,?,?,?,?,?)",
    [Id, Nombre, Estado, Precio, Zona, IdUsuarios],
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
  const IdUsuarios = req.body.IdUsuarios;
  console.log("Creo habitacion:", req.body);

  db.query(
    "update habitaciones set nombre=?,estado=?,precio=?,zonas=?,idUsuarios=? where id=?",
    [Nombre, Estado, Precio, Zona, IdUsuarios, Id],
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

const findByName = (req, res) => {
  const nombre = req.params.nombreBuscar;
  db.query(
    "SELECT * FROM habitaciones WHERE nombre LIKE ? OR nombre LIKE ? OR nombre LIKE ?",
    [`%${nombre}`, `%${nombre}%`, `${nombre}%`],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send(result);
      }
    }
  );
};
/* const obtenerUltimoId = (req, res) => {
  db.query("SELECT MAX(id) as ultimoId FROM habitaciones", (err, result) => {
      if (err) {
          res.status(500).send("Hubo un error en el servidor");
      } else {
          if (result.length > 0) {
              res.send({ ultimoId: result[0].ultimoId });
          } else {
              res.send({ ultimoId: 0 }); // Si no hay registros, se devuelve 0 como último ID
          }
      }
  });
}; */

module.exports = {
  getRooms,
  createRoom,
  updateRoom,
  deleteRoom,
  findByName,
};
