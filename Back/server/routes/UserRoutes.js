const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const check = require("../middleware/auth");

router.get("/get-users", check.auth, (req, res) => {
  userController.getUsers(req, res);
});

router.get("/find-users/:idBuscar", check.auth, (req, res) => {
  userController.findById(req, res);
});

router.get("/find-user-id/:idBuscar", check.auth, (req, res) => {
  userController.findByUser(req, res);
});

router.post("/create", check.auth, (req, res) => {
  userController.createUser(req, res);
});

router.put("/update", check.auth, (req, res) => {
  userController.updateUser(req, res);
});

router.delete("/delete/:IDUsuario", check.auth, (req, res) => {
  userController.deleteUser(req, res);
});

module.exports = router;
