const express = require("express");
const router = express.Router();
const ComponenteEvidenciaController = require("../controllers/ComponenteEvidenciaController");
const check = require("../middleware/auth");

router.get("/get-evidencias", check.auth, (req, res) => {
  ComponenteEvidenciaController.getEvidenciasByComponente(req, res);
});

router.post("/create", check.auth, (req, res) => {
  ComponenteEvidenciaController.createEvidencia(req, res);
});

router.put("/update", check.auth, (req, res) => {
  ComponenteEvidenciaController.updateEvidencia(req, res);
});

router.delete("/delete/:id", check.auth, (req, res) => {
  ComponenteEvidenciaController.deleteEvidencia(req, res);
});

module.exports = router;