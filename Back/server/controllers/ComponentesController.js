const db = require("../db");

const getComponents = (req, res) => {
  db.query("SELECT * FROM componentes", (err, result) => {
    if (err) {
      res.status(500).send("Hubo un error en el servidor");
    } else {
      res.send(result);
    }
  });
};

const createComponent = (req, res) => {
  const Id = req.body.Id;
  const Nombre = req.body.Nombre;
  const Marca = req.body.Marca;
  const Cantidad = req.body.Cantidad;
  const Costo = req.body.Costo;
  const Estado = req.body.Estado;
  const Descripcion = req.body.Descripcion;
  const Observacion = req.body.Observacion;
  const Habitacion = req.body.Habitacion;

  db.query(
    "insert into componentes(id, nombre, marca,cantidad,costo,estado,descripcion,observacion,habitacion) values(?,?,?,?,?,?,?,?,?)",
    [
      Id,
      Nombre,
      Marca,
      Cantidad,
      Costo,
      Estado,
      Descripcion,
      Observacion,
      Habitacion,
    ],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send("Componente registrado");
      }
    }
  );
};

const updateComponent = (req, res) => {
  const Id = req.body.Id;
  const Nombre = req.body.Nombre;
  const Marca = req.body.Marca;
  const Cantidad = req.body.Cantidad;
  const Costo = req.body.Costo;
  const Estado = req.body.Estado;
  const Descripcion = req.body.Descripcion;
  const Observacion = req.body.Observacion;
  const Habitacion = req.body.Habitacion;

  db.query(
    "update componentes set nombre=?, marca=?,cantidad=?,costo=?,estado=?,descripcion=?,observacion=?,habitacion=? where id=?",
    [
      Nombre,
      Marca,
      Cantidad,
      Costo,
      Estado,
      Descripcion,
      Observacion,
      Habitacion,
      Id,
    ],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send("Componente actualizado");
      }
    }
  );
};

const deleteComponent = (req, res) => {
  //aqui
  const Id = req.params.id;
  console.log(Id);
  db.query("Delete from componentes where id=?", [Id], (err, result) => {
    if (err) {
      res.status(500).send("Hubo un error en el servidor");
    } else {
      res.send("Componente eliminado");
    }
  });
};

const findByName = (req, res) => {
  const nombre = req.params.nombreBuscar;
  db.query(
    "SELECT * FROM componentes WHERE nombre LIKE ? OR nombre LIKE ? OR nombre LIKE ?",
    [`%${nombre}`, `%${nombre}%`, `${nombre}%`],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor");
      } else {
        res.send(result);
      }
    }
  );
};

module.exports = {
  getComponents,
  createComponent,
  updateComponent,
  deleteComponent,
  findByName,
};
