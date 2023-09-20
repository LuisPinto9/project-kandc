const express = require("express");
const router = express.Router();
const HabitacionEvidenciaController = require("../controllers/ComponenteEvidenciaController");
const check = require("../middleware/auth");



router.get("/get-componentes", check.auth, (req, res) => {
    HabitacionEvidenciaController.getEvidenciasByHabitacion(req, res);
  });
  
  router.post("/create", check.auth, (req, res) => {
    HabitacionEvidenciaController.createEvidencia(req, res);
  });
  
  router.put("/update", check.auth, (req, res) => {
    HabitacionEvidenciaController.updateEvidencia(req, res);
  });
  
  router.delete("/delete/:id", check.auth, (req, res) => {
    HabitacionEvidenciaController.deleteEvidencia(req, res);
  });
  
 

module.exports = router;