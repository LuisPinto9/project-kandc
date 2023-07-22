const express = require("express");
const app = express();
const mysql = require("mysql");
require('dotenv').config();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.HOST ,
  user: process.env.USER ,
  password: process.env.PASSWORD ,
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
        console.log(err);
      } else {
        console.log("tal cosa");
        res.send("arrendatario registradosss");
      }
    }
  );
});

app.get("/Arrendatarios", (req, res) => {
  db.query("select * from Arrendatario1", (err, result1) => {
    if (err) {
      console.log(err);
    } else {
      console.log("mostrar ");
      res.send(result1);
    }
  });

  /* 
        db.query('insert into Arrendatario1(ID,mombre,telefono) values(?,?,?)',['1','diana','3123213243']
        
     */
});

app.listen(3001, () => {
  console.log(`Corriendo en puerto ${3001}`);
});
