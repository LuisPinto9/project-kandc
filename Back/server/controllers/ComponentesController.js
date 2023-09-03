const db = require("../db");

const getUsers = (req, res) => {
  db.query("SELECT * FROM habitaciones", (err, result) => {
    if (err) {
      res.status(500).send("Hubo un error en el servidor");
    } else {
      res.send(result);
    }
  });
};

const createUser = (req, res) => {

  

  const Id = req.body.Id;
  const Nombre = req.body.Nombre;
  
  const Estado = req.body.Estado;
  const Precio = req.body.Precio;
  const Zona = req.body.Zona;


  db.query(
    "insert into habitaciones(id, nombre, estado,precio, zonas) values(?,?,?,?,?)",
    [Id, Nombre, Estado,Precio, Zona],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send("Arrendatario registrado");
      }
    }
  );
};

const updateUser = (req, res) => {

  const Id = req.body.Id;
  const Nombre = req.body.Nombre;
  
  const Estado = req.body.Estado;
  const Precio = req.body.Precio;
  const Zona = req.body.Zona;



  db.query(
    "update habitaciones set nombre=?,estado=?,precio=?,zonas=? where id=?",
    [ Nombre, Estado, Precio, Zona, Id],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send("Arrendatario actualizado");
      }
    }
  );
};

const deleteUser = (req, res) => {
  //aqui
  const IDUsuario = req.body.Id;
  db.query(
    "Delete from habitaciones where id=?",
    [IDUsuario],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send("Arrendatario eliminado");
      }
    }
  );
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
