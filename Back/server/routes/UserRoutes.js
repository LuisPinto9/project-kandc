const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
//..
const { check, validationResult } = require('express-validator');

router.get("/arrendatarios", (req, res) => {
  userController.getUsers(req, res);
});

router.post("/create",
[
  check('IDUsuario').notEmpty().withMessage('El campo IDUsuario no puede estar vacío'),
  check('Nombre').notEmpty().withMessage('El campo Nombre no puede estar vacío'),
  
  // Agrega más validaciones para los otros campos aquí
],
 (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessage = errors.array().map(error => error.msg).join('<br>');
    return res.status(400).json({ error: errorMessage });
  }

  userController.createUser(req, res);
});

router.put("/update/", (req, res) => {
  userController.updateUser(req, res);
});

router.delete("/delete/", (req, res) => {
  userController.deleteUser(req, res);
});

module.exports = router;
