const express = require("express");
const router = express.Router();
const ZonaController = require("../controllers/ZonasController");

router.get("/get-zonas", (req, res) => {
  ZonaController.getZonas(req, res);
});

router.post("/create", (req, res) => {
  ZonaController.createZona(req, res);
});

router.put("/update", (req, res) => {
  ZonaController.updateZona(req, res);
});

router.delete("/delete", (req, res) => {
  ZonaController.deleteZona(req, res);
});

module.exports = router;
