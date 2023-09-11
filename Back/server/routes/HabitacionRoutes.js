const express = require("express");
const router = express.Router();
const RoomController = require("../controllers/HabitacionController");
const check = require("../middleware/auth");

router.get("/get-habitaciones", check.auth, (req, res) => {
  RoomController.getRooms(req, res);
});

router.post("/create", check.auth, (req, res) => {
  RoomController.createRoom(req, res);
});

router.put("/update", check.auth, (req, res) => {
  RoomController.updateRoom(req, res);
});

router.delete("/delete/:id", check.auth, (req, res) => {
  RoomController.deleteRoom(req, res);
});

router.get("/find-habitacion/:nombreBuscar", check.auth, (req, res) => {
  RoomController.findByName(req, res);
});

module.exports = router;
