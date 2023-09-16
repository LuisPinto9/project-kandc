const db = require("../db");

const findById = (req, res) => {
  const id = req.params.idUsuario;
  db.query(
    "SELECT * FROM habitaciones WHERE idUsuarios = ?",
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

const findZones = (req, res) => {
  const id = req.params.idUsuario;
  db.query(
    "SELECT zonas.* FROM habitaciones RIGHT JOIN zonas ON habitaciones.zonas = zonas.id where habitaciones.idUsuarios = ?",
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

const findComponents = (req, res) => {
  const id = req.params.idUsuario;
  db.query(
    "SELECT componentes.* FROM habitaciones RIGHT JOIN componentes ON habitaciones.id = componentes.habitacion where habitaciones.idUsuarios = ?",
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

const findByNameRoom = (req, res) => {
  const nombre = req.params.nombreBuscar;
  const id = req.params.id;
  db.query(
    "SELECT habitaciones.* FROM habitaciones where habitaciones.idUsuarios = ? and (habitaciones.nombre LIKE ? OR habitaciones.nombre LIKE ? OR habitaciones.nombre LIKE ?)",
    [id, `%${nombre}`, `%${nombre}%`, `${nombre}%`],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send(result);
      }
    }
  );
};

const findByNameComponent = (req, res) => {
  const nombre = req.params.nombreBuscar;
  const id = req.params.id;
  db.query(
    "SELECT componentes.* FROM habitaciones RIGHT JOIN componentes ON habitaciones.id = componentes.habitacion where habitaciones.idUsuarios = ? and (componentes.nombre LIKE ? OR componentes.nombre LIKE ? OR componentes.nombre LIKE ?)",
    [id, `%${nombre}`, `%${nombre}%`, `${nombre}%`],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send(result);
      }
    }
  );
};

const findByIdZone = (req, res) => {
  const idZona = req.params.idZona;
  const id = req.params.id;
  db.query(
    "SELECT zonas.* FROM habitaciones RIGHT JOIN zonas ON habitaciones.zonas = zonas.id where habitaciones.idUsuarios = ? and (zonas.id LIKE ? OR zonas.id LIKE ? OR zonas.id LIKE ?)",
    [id, `%${idZona}`, `%${idZona}%`, `${idZona}%`],
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
  findById,
  findZones,
  findComponents,
  findByIdZone,
  findByNameComponent,
  findByNameRoom,
};
