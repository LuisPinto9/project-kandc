const db = require("../db");

//no se ve los cambios
const getUsers = (req, res) => {
  db.query("SELECT * FROM componentes", (err, result) => {
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
  const Marca = req.body.Marca;
  const Cantidad = req.body.Cantidad;
  const Costo = req.body.Costo;
  const Estado = req.body.Estado;
  const Descripcion= req.body.Descripcion;
  const Observacion = req.body.Observacion;
  const Habitacion = req.body.Habitacion;

  db.query(
    "insert into componentes(id, nombre, marca,cantidad,costo,estado,descripcion,observacion,habitacion) values(?,?,?,?,?,?,?,?,?)",
    [Id, Nombre, Marca, Cantidad,Costo,Estado,Descripcion,Observacion,Habitacion],
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
  const Marca = req.body.Marca;
  const Cantidad = req.body.Cantidad;
  const Costo = req.body.Costo;
  const Estado = req.body.Estado;
  const Descripcion= req.body.Descripcion;
  const Observacion = req.body.Observacion;
  const Habitacion = req.body.Habitacion;



  db.query(
    "update componentes set nombre=?, marca=?,cantidad=?,costo=?,estado=?,descripcion=?,observacion=?,habitacion=? where id=?",

    [ Nombre, Marca, Cantidad,Costo,Estado,Descripcion,Observacion,Habitacion,Id],
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
  const Id = req.body.Id;
  db.query(
    "Delete from componentes where id=?",
    [Id],
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
