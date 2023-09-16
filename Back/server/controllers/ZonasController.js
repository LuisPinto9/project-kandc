const db = require("../db");

const getZonas = (req, res) => {
  db.query("SELECT * FROM zonas", (err, result) => {
    if (err) {
      res.status(500).send("Hubo un error en el servidor");
    } else {
      res.send(result);
    }
  });
};

const getZonasInicio = (req, res) => {
  db.query("SELECT id, nombre, precio FROM zonas", (err, result) => {
    if (err) {
      res.status(500).send("Hubo un error en el servidor");
    } else {
      res.send(result);
    }
  });
};

const createZona = (req, res) => {
  const Id = req.body.Id;
  const Nombre = req.body.Nombre;
  const Descripcion = req.body.Descripcion;
  const Precio = req.body.Precio;
  const Acceso = req.body.Acceso;

  db.query(
    "insert into zonas(id, nombre, descripcion,precio, acceso) values(?,?,?,?,?)",
    [Id, Nombre, Descripcion, Precio, Acceso],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send("Zona registrada");
      }
    }
  );
};

const updateZona = (req, res) => {
  const Id = req.body.Id;
  const Nombre = req.body.Nombre;
  const Descripcion = req.body.Descripcion;
  const Precio = req.body.Precio;
  const Acceso = req.body.Acceso;

  db.query(
    "update zonas set nombre=?,descripcion=?,precio=?,acceso=? where id=?",
    [Nombre, Descripcion, Precio, Acceso, Id],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send("Zona actualizada");
      }
    }
  );
};

const deleteZona = (req, res) => {
  //aqui
  const Id = req.params.id;
  db.query("Delete from zonas where id=?", [Id], (err, result) => {
    if (err) {
      res.status(500).send("Hubo un error en el servidor");
    } else {
      res.send("Zona eliminada");
    }
  });
};

const findById = (req, res) => {
  const id = req.params.idBuscar;
  db.query(
    "SELECT * FROM zonas WHERE id LIKE ? OR id LIKE ? OR id LIKE ?",
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
  getZonas,
  getZonasInicio,
  createZona,
  updateZona,
  deleteZona,
  findById,
};
