const express = require("express");
const router = express.Router();
const loginController = require("../controllers/LoginController");

router.post("/credenciales", (req, res) => {
  loginController.getUser(req, res);
});

module.exports = router;
