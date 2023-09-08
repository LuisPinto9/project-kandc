const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();


app.use(cors());
app.use(express.json());
app.set("port", process.env.PORT);

const crudRoutes = require("./routes/UserRoutes.js");
app.use("/user", crudRoutes);

const crudRoutes2 = require("./routes/HabitacionRoutes.js");
app.use("/habitaciones", crudRoutes2);

const crudRoutes3 = require("./routes/ComponentesRoutes.js");
app.use("/componentes", crudRoutes3);

const crudRoutes4 = require("./routes/ZonasRoutes.js");
app.use("/zonas", crudRoutes4);

const loginRoutes = require("./routes/LoginRoutes.js");
app.use("/login", loginRoutes);

app.listen(app.get("port"), () => {
  console.log(`Corriendo en el puerto ${app.get("port")}`);
});
