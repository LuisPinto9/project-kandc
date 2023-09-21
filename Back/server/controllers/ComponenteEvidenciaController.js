const db = require("../db");

const getEvidenciasByComponente = (req, res) => {
  db.query("SELECT * FROM evidencia_componentes", (err, result) => {
    if (err) {
      console.error("Error al obtener evidencias:", err);
      res.status(500).send("Hubo un error en el servidor");
      console.log("bubo error al obtenerlos");
    } else {
      res.send(result);
    }
  });
};

const createEvidencia = (req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  const descripcion = req.body.descripcion;
  const url = req.body.url;
  const componente = req.body.componente;
  db.query(
    "INSERT INTO evidencia_componentes (id, nombre, descripcion, url, componente) VALUES (?, ?, ?, ?, ?)",
    [id, nombre, descripcion, url, componente],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor ");
      } else {
        res.send("Evidencia registrada");
      }
    }
  );
};

const updateEvidencia = (req, res) => {
  const { id, nombre, descripcion, url, componente } = req.body;
  console.log("Recibida solicitud de actualización de evidencia:", req.body);
  db.query(
    "UPDATE evidencia_componentes SET nombre=?,descripcion=?,url=?,componente=? WHERE id=?",
    [nombre, descripcion, url, componente, id],
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
  const id = req.params.id;
  db.query(
    "DELETE FROM evidencia_componentes WHERE id=?",
    [id],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send("Evidencia eliminada");
      }
    }
  );
};

const findEvidenciaByComponente = (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM evidencia_componentes WHERE evidencia_componentes.componente LIKE ? OR evidencia_componentes.componente LIKE ? OR evidencia_componentes.componente LIKE ?",
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
  getEvidenciasByComponente,
  createEvidencia,
  updateEvidencia,
  deleteEvidencia,
  findEvidenciaByComponente,
};
