const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.set("port", process.env.PORT);

const db = mysql.createConnection({
  host: process.env .HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

app.post("/create", (req, res) => {
  const IDUsuario = req.body.IDUsuario;
  const Nombre = req.body.Nombre;
  const PhoneNumber = req.body.PhoneNumber;
  db.query(
    "insert into Arrendatario1(ID,nombre,telefono) values(?,?,?)",
    [IDUsuario, Nombre, PhoneNumber],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor")
      } else {
        res.send("Arrendatario registrado");
      }
    }
  );
});

app.get("/arrendatarios", (req, res) => {
  db.query("select * from Arrendatario1", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



app.put("/update", (req, res) => {
  const IDUsuario = req.body.IDUsuario;
  const Nombre = req.body.Nombre;
  const PhoneNumber = req.body.PhoneNumber;
  db.query(
   /*  "update  Arrendatario1 set(ID,nombre,telefono) values(?,?,?)" where ID=?", */
    "update Arrendatario1 set nombre=?,telefono=? where ID=?",  
   /*  "update Arrendatario1 set(ID,nombre,telefono) values(?,?,?) where ID=?",*/
    [ Nombre, PhoneNumber, IDUsuario],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor")
      } else {
        res.send("Arrendatario-actualizado");
      }
    }
  );
});


app.delete("/delete", (req, res) => {
  const IDUsuario = req.body.IDUsuario;  
  db.query(
   /*  "update  Arrendatario1 set(ID,nombre,telefono) values(?,?,?)" where ID=?", */
   
   "Delete from Arrendatario1 where ID=?",  
   /*  "update Arrendatario1 set(ID,nombre,telefono) values(?,?,?) where ID=?",*/
    [IDUsuario],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor")
      } else {
        res.send("Arrendatario-eliminado");
      }
    }
  );
  
});
/* app.delete("/delete/:IDUsuario", (req, res) => {
  const IDUsuario = req.params.IDUsuario;
  db.query(
    "Delete from Arrendatario1 where ID=?",  
    [IDUsuario],
    (err, result) => {
      if (err) {
        res.status(500).send("Hubo un error en el servidor")
      } else {
        res.send("Arrendatario-eliminado");
      }
    }
  );
}); */



app.listen(app.get("port"), () => {
  console.log(`Corriendo en el puerto ${app.get("port")}`);
});
