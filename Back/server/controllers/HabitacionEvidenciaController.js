const db = require("../db");

const getEvidenciasByHabitacion = (req, res) => {
  console.log("ecibida solicitudpedirrrrrrrra:");
  db.query("SELECT * FROM evidencia_habitaciones", (err, result) => {
    if (err) {
      console.error("Error al obtener evidencias:", err);
      res.status(500).send("Hubo un error en el servidor");
      console.log("bubo error al obtenerlos");
    } else {
      res.send(result);
      console.log("todobien", result.Id2);
      
    }
  });
};

const createEvidencia = (req, res) => {
  const { Id2, Nombre2, Descripcion, Url, Habitacion } = req.body;
  console.log('Creo evidencia:', req.body);
  db.query(
    "INSERT INTO evidencia_habitaciones (id, nombre, descripcion, url, habitacion) VALUES (?, ?, ?, ?, ?)",
    [Id2, Nombre2, Descripcion, Url, Habitacion],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send("Evidencia registrada");
      }
    }
  );
};

const updateEvidencia = (req, res) => {
  
  const { Id2, Nombre2, Descripcion, Url, Habitacion } = req.body;
  console.log('Recibida solicitud de actualización de evidencia:', req.body);
  db.query(
    "UPDATE evidencia_habitaciones SET nombre=?,descripcion=?,url=?,habitacion=? WHERE id=?",
    [Nombre2, Descripcion, Url, Habitacion, Id2],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send("Evidencia actualizada");
      }
    }
  );
};

const deleteEvidencia = (req, res) => {
  const Id2 = req.params.id;
  db.query("DELETE FROM evidencia_habitaciones WHERE id=?", [Id], (err, result) => {
    if (err) {
      res.status(500).send("Hubo un error en el servidor");
    } else {
      res.send("Evidencia eliminada");
    }
  });
};

module.exports = {
  getEvidenciasByHabitacion,
  createEvidencia,
  updateEvidencia,
  deleteEvidencia,
};
