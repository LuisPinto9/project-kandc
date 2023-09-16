const express = require("express");
const router = express.Router();
const ZonaController = require("../controllers/ZonasController");
const check = require("../middleware/auth");

router.get("/get-zonas", check.auth, (req, res) => {
  ZonaController.getZonas(req, res);
});

router.get("/get-zonas-inicio", (req, res) => {
  ZonaController.getZonas(req, res);
});

router.post("/create", check.auth, (req, res) => {
  ZonaController.createZona(req, res);
});

router.put("/update", check.auth, (req, res) => {
  ZonaController.updateZona(req, res);
});

router.delete("/delete/:id", check.auth, (req, res) => {
  ZonaController.deleteZona(req, res);
});

router.get("/find-zona/:idBuscar", check.auth, (req, res) => {
  ZonaController.findById(req, res);
});

module.exports = router;
