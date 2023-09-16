const express = require("express");
const router = express.Router();
const check = require("../middleware/auth");
const UserRoomsController = require("../controllers/UserRoomsController");

router.get("/get-habitaciones/:idUsuario", check.auth, (req, res) => {
  UserRoomsController.findById(req, res);
});

router.get("/get-componentes/:idUsuario", check.auth, (req, res) => {
  UserRoomsController.findComponents(req, res);
});

router.get("/get-zona/:idUsuario", check.auth, (req, res) => {
  UserRoomsController.findZones(req, res);
});

router.get("/find-habitaciones/:id/:nombreBuscar", check.auth, (req, res) => {
  UserRoomsController.findByNameRoom(req, res);
});

router.get("/find-componentes/:id/:nombreBuscar", check.auth, (req, res) => {
  UserRoomsController.findByNameComponent(req, res);
});

router.get("/find-zona/:id/:idZona", check.auth, (req, res) => {
  UserRoomsController.findByIdZone(req, res);
});

module.exports = router;
