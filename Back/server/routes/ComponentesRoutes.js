const express = require("express");
const router = express.Router();
const ComponentController = require("../controllers/ComponentesController");
const check = require("../middleware/auth");

router.get("/get-componentes", check.auth, (req, res) => {
  ComponentController.getComponents(req, res);
});

router.post("/create", check.auth, (req, res) => {
  ComponentController.createComponent(req, res);
});

router.put("/update", check.auth, (req, res) => {
  ComponentController.updateComponent(req, res);
});

router.delete("/delete/:id", check.auth, (req, res) => {
  ComponentController.deleteComponent(req, res);
});

router.get("/find-componente/:nombreBuscar", check.auth, (req, res) => {
  ComponentController.findByName(req, res);
});

module.exports = router;
