const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

router.get("/arrendatarios", (req, res) => {
  userController.getUsers(req, res);
});

router.post("/create", (req, res) => {
  userController.createUser(req, res);
});

router.put("/update/", (req, res) => {
  userController.updateUser(req, res);
});

router.delete("/delete/", (req, res) => {
  userController.deleteUser(req, res);
});

module.exports = router;
