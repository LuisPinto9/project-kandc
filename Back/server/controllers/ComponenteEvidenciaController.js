const db = require("../db");

const getEvidenciasByComponente = (req, res) => {
  db.query("SELECT * FROM evidencia_componentes", (err, result) => {
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
  const { Id2, Nombre2, Descripcion2, Url, Componente } = req.body;
  console.log('Creo evidencia:', req.body);
  db.query(
    "INSERT INTO evidencia_componentes (id, nombre, descripcion, url, componente) VALUES (?, ?, ?, ?, ?)",
    [Id2, Nombre2, Descripcion2, Url, Componente],
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
  const { Id2, Nombre2, Descripcion2, Url, Componente } = req.body;
  console.log('Recibida solicitud de actualización de evidencia:', req.body);
  db.query(
    "UPDATE evidencia_componentes SET nombre=?,descripcion=?,url=?,componente=? WHERE id=?",
    [Nombre2, Descripcion2, Url, Componente, Id2],
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
  db.query("DELETE FROM evidencia_componentes WHERE id=?", [Id2], (err, result) => {
    if (err) {
      res.status(500).send("Hubo un error en el servidor");
    } else {
      res.send("Evidencia eliminada");
    }
  });
};

module.exports = {
  getEvidenciasByComponente,
  createEvidencia,
  updateEvidencia,
  deleteEvidencia,
};
